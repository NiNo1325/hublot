'use client';

import { SKUS_PREMIUM } from './produits';

/*
  Fine couche autour de la Digital Goods API, disponible uniquement dans la TWA
  installée depuis Google Play — absente dans un navigateur. Gardée mince et non
  testée, comme l'enregistrement du service worker : la décision (droit premium)
  vit dans `entitlement.ts`, testée sans navigateur.

  À VALIDER contre la doc Play Billing + Digital Goods à jour : signatures exactes
  et achat d'une offre d'abonnement (base plan / offer token).
*/
const CANAL = 'https://play.google.com/billing';

interface DetailProduit {
  itemId: string;
  title: string;
  price: { value: string; currency: string };
}
interface AchatProduit {
  itemId: string;
  purchaseToken: string;
}
interface DigitalGoodsService {
  getDetails(skus: string[]): Promise<DetailProduit[]>;
  listPurchases(): Promise<AchatProduit[]>;
  acknowledge?(purchaseToken: string): Promise<void>;
}

function fenetre() {
  return window as unknown as {
    getDigitalGoodsService?: (canal: string) => Promise<DigitalGoodsService>;
  };
}

export function digitalGoodsDisponible(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof fenetre().getDigitalGoodsService === 'function'
  );
}

async function service(): Promise<DigitalGoodsService | null> {
  if (!digitalGoodsDisponible()) return null;
  try {
    return await fenetre().getDigitalGoodsService!(CANAL);
  } catch {
    return null;
  }
}

export async function lireAchats(): Promise<string[]> {
  const s = await service();
  if (!s) return [];
  try {
    return (await s.listPurchases()).map((a) => a.itemId);
  } catch {
    return [];
  }
}

export interface Offre {
  sku: string;
  titre: string;
  prix: string;
}

export async function lireOffres(): Promise<Offre[]> {
  const s = await service();
  if (!s) return [];
  try {
    const details = await s.getDetails([...SKUS_PREMIUM]);
    return details.map((d) => ({
      sku: d.itemId,
      titre: d.title,
      prix: `${d.price.value} ${d.price.currency}`,
    }));
  } catch {
    return [];
  }
}

/**
 * Lance l'achat via la Payment Request API, puis confirme (`acknowledge`) l'achat
 * — sans quoi Google le rembourse au bout de trois jours. Renvoie `true` si
 * l'achat est allé au bout.
 */
export async function acheter(sku: string): Promise<boolean> {
  const s = await service();
  if (!s || typeof PaymentRequest === 'undefined') return false;
  try {
    const request = new PaymentRequest(
      [{ supportedMethods: CANAL, data: { sku } }],
      { total: { label: 'Hublot Premium', amount: { currency: 'EUR', value: '0' } } },
    );
    const response = await request.show();
    const { purchaseToken } = response.details as { purchaseToken: string };
    if (s.acknowledge) await s.acknowledge(purchaseToken);
    await response.complete('success');
    return true;
  } catch {
    return false;
  }
}
