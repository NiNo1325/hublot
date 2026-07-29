'use client';

import { useCallback, useEffect, useState } from 'react';
import { SKUS_PREMIUM } from '@/lib/premium/produits';
import { estPremiumDapresAchats } from '@/lib/premium/entitlement';
import {
  acheter,
  digitalGoodsDisponible,
  lireAchats,
  lireOffres,
  type Offre,
} from '@/lib/premium/digitalGoods';

/*
  État partagé hors du rendu React, comme `useCartesVues` : plusieurs composants
  (grille, tuiles, paywall) lisent le même droit et se rafraîchissent ensemble
  après un achat. Chargé une fois au premier montage.
*/
interface EtatPremium {
  statut: 'chargement' | 'pret';
  premium: boolean;
  peutAcheter: boolean;
  offres: Offre[];
}

let etat: EtatPremium = {
  statut: 'chargement',
  premium: false,
  peutAcheter: false,
  offres: [],
};
const abonnes = new Set<() => void>();
let chargementLance = false;

function publier(maj: Partial<EtatPremium>) {
  etat = { ...etat, ...maj };
  for (const notifier of abonnes) notifier();
}

async function charger() {
  if (chargementLance) return;
  chargementLance = true;
  if (!digitalGoodsDisponible()) {
    publier({ statut: 'pret', peutAcheter: false });
    return;
  }
  const [achats, offres] = await Promise.all([lireAchats(), lireOffres()]);
  publier({
    statut: 'pret',
    peutAcheter: true,
    premium: estPremiumDapresAchats(achats, [...SKUS_PREMIUM]),
    offres,
  });
}

export function useEntitlement() {
  const [, forcer] = useState(0);

  useEffect(() => {
    const rerendre = () => forcer((n) => n + 1);
    abonnes.add(rerendre);
    void charger();
    return () => {
      abonnes.delete(rerendre);
    };
  }, []);

  const acheterEtRafraichir = useCallback(async (sku: string) => {
    const ok = await acheter(sku);
    if (ok) {
      const achats = await lireAchats();
      publier({ premium: estPremiumDapresAchats(achats, [...SKUS_PREMIUM]) });
    }
    return ok;
  }, []);

  return { ...etat, acheter: acheterEtRafraichir };
}
