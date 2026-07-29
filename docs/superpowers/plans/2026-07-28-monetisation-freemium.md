# Monétisation freemium de Hublot (chantier B, phase 1) — Plan d'implémentation

> **Pour les travailleurs agentiques :** SOUS-COMPÉTENCE REQUISE : utiliser
> superpowers:subagent-driven-development (recommandé) ou
> superpowers:executing-plans pour dérouler ce plan tâche par tâche. Les étapes
> utilisent la syntaxe case à cocher (`- [ ]`).

**Objectif :** Ajouter un freemium hybride à Hublot — socle gratuit + reste et
nouveautés premium, débloquables par abonnement (mensuel/annuel) **ou** achat à vie,
payés via **Google Play Billing** (Digital Goods API), sans back-end ni comptes.

**Architecture :** Le droit d'accès est géré par Google Play (le compte Google du
parent *est* l'identité et conserve l'achat). La TWA interroge la Digital Goods API
au lancement ; si une référence premium est possédée, le contenu premium se
déverrouille. Toute la logique décidable sans navigateur (socle gratuit, déduction
du droit, verrou parental) vit dans des **fonctions pures testées** ; la colle
navigateur (Digital Goods, React) reste mince et non testée unitairement, comme le
service worker du projet. Le site web (navigateur, sans Digital Goods API) sert de
vitrine + entonnoir : le premium y affiche un appel à installer l'app.

**Tech Stack :** Next.js 16 (existant), Digital Goods API + Payment Request API
(TWA Play Billing, déjà activé dans `twa-manifest.json`), Vitest (env node).

## Contraintes globales

- **Langue** : tout code, commentaire, commit et texte utilisateur en **français**.
- **Politique Familles** : un **verrou parental** (petit calcul) précède tout achat.
  La déclaration « Sécurité des données » du Store reste **« ne collecte aucune
  donnée »** (les achats sont gérés par Google, rien n'est stocké côté Hublot).
- **Convention de test du projet** (à respecter) : les tests unitaires sont des
  **fonctions pures** dans `tests/*.test.ts`, environnement **node**, sans DOM
  (cf. `tests/cartes-vues.test.ts`). La colle navigateur/React (Digital Goods, hook,
  composants) **n'est pas testée unitairement** — comme `EnregistrerServiceWorker` —
  et est vérifiée par `npm run build`, `npm run lint`, puis le **test manuel bac à
  sable** sur la piste de test interne (tâche 8).
- **Marquage premium centralisé** : NE PAS ajouter de drapeau aux ~100 fichiers de
  cartes. Une seule source (`content/acces.ts`).
- **Isolation pour la phase 2** : la déduction du droit reste dans la fonction pure
  `estPremiumDapresAchats` et la couche `digitalGoods.ts`, pour brancher plus tard
  une vérification serveur sans toucher l'UI.
- **IDs produits** : les constantes de `lib/premium/produits.ts` doivent
  correspondre EXACTEMENT aux produits créés dans la Play Console (tâche 7).
- **URL Store** : `https://play.google.com/store/apps/details?id=com.hublot.app`.
- **Digital Goods API volatile** : valider les signatures exactes (getDetails,
  listPurchases, acknowledge, achat d'une offre d'abonnement) contre la
  documentation Play Billing + Digital Goods **à jour** au moment d'implémenter la
  tâche 5. Le code fourni reflète l'état connu de l'API v2.0.
- **Drapeau d'activation** : tout le freemium est livré **dormant** derrière le
  drapeau `NEXT_PUBLIC_PREMIUM_ACTIF`. Tant qu'il ne vaut pas `'true'`, l'app se
  comporte exactement comme aujourd'hui — aucune carte verrouillée, aucun paywall,
  aucune requête billing. L'activation se fait en posant la variable d'environnement
  (Vercel) et en redéployant, **sans changer de code**. Le gating passe donc
  toujours par `premiumActif()` (tâche 0), jamais par `estPremium` seul.
- **Rappel stratégique** : ne pas *activer* ce chantier (drapeau à `true`) tant
  qu'un premier signal d'usage (installs, rétention du test) n'existe pas. Le code
  peut être livré dormant sans risque.

---

### Tâche 0 : Drapeau d'activation premium

Le freemium doit pouvoir être livré **éteint** puis allumé à la demande, sans
nouveau code. Un unique point de vérité lit la variable d'environnement.

**Files:**
- Create: `lib/premium/flag.ts`
- Test: `tests/premium-flag.test.ts`

**Interfaces:**
- Produces: `premiumActif(): boolean`.
- Consumed by: tâche 6 (gating).

- [ ] **Étape 1 : Écrire le test qui échoue**

```ts
// tests/premium-flag.test.ts
import { afterEach, describe, expect, it, vi } from 'vitest';
import { premiumActif } from '@/lib/premium/flag';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('drapeau d’activation premium', () => {
  it('est éteint par défaut (variable absente)', () => {
    vi.stubEnv('NEXT_PUBLIC_PREMIUM_ACTIF', '');
    expect(premiumActif()).toBe(false);
  });

  it('n’est allumé que par la valeur exacte "true"', () => {
    vi.stubEnv('NEXT_PUBLIC_PREMIUM_ACTIF', 'true');
    expect(premiumActif()).toBe(true);
  });

  it('reste éteint pour toute autre valeur', () => {
    vi.stubEnv('NEXT_PUBLIC_PREMIUM_ACTIF', '1');
    expect(premiumActif()).toBe(false);
  });
});
```

- [ ] **Étape 2 : Lancer le test, vérifier qu'il échoue**

Run: `npm test -- premium-flag`
Expected: FAIL — `lib/premium/flag` introuvable.

- [ ] **Étape 3 : Implémenter**

```ts
// lib/premium/flag.ts
/**
 * Interrupteur unique du freemium.
 *
 * Livré à `false` : l'app reste entièrement gratuite, sans cadenas ni paywall.
 * On l'allume en posant `NEXT_PUBLIC_PREMIUM_ACTIF=true` dans l'environnement
 * (Vercel) puis en redéployant — aucun changement de code n'est nécessaire.
 * Le préfixe `NEXT_PUBLIC_` rend la valeur lisible côté client, où vit le gating.
 */
export function premiumActif(): boolean {
  return process.env.NEXT_PUBLIC_PREMIUM_ACTIF === 'true';
}
```

- [ ] **Étape 4 : Lancer le test, vérifier qu'il passe**

Run: `npm test -- premium-flag`
Expected: PASS (3 tests).

- [ ] **Étape 5 : Commit**

```bash
git add lib/premium/flag.ts tests/premium-flag.test.ts
git commit -m "Ajoute le drapeau d'activation du freemium (dormant par défaut)"
```

---

### Tâche 1 : Socle gratuit et prédicat premium

Source unique définissant quelles cartes sont gratuites. Le gratuit = le domaine
« L'espace » (`astronomie`) en entier + une carte phare par autre domaine. Le
premium se déduit par complément. Auto-maintenable : une future carte d'astronomie
sera gratuite sans rien changer.

**Files:**
- Create: `content/acces.ts`
- Test: `tests/premium-acces.test.ts`

**Interfaces:**
- Produces: `estGratuite(card)`, `estPremium(card)`, `EXTRAS_GRATUITS`,
  `DOMAINE_GRATUIT`.

- [ ] **Étape 1 : Écrire le test qui échoue**

```ts
// tests/premium-acces.test.ts
import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { EXTRAS_GRATUITS, estGratuite, estPremium } from '@/content/acces';

describe('socle gratuit', () => {
  it('les cartes phares extra existent dans le catalogue', () => {
    const ids = new Set(cards.map((c) => c.id));
    for (const id of EXTRAS_GRATUITS) {
      expect(ids.has(id), `extra gratuit inconnu : ${id}`).toBe(true);
    }
  });

  it('tout le domaine astronomie est gratuit', () => {
    const astro = cards.filter((c) => c.domainId === 'astronomie');
    for (const c of astro) expect(estGratuite(c)).toBe(true);
  });

  it('une carte hors socle est premium', () => {
    const wifi = cards.find((c) => c.id === 'le-wifi')!;
    expect(estPremium(wifi)).toBe(true);
  });

  it('une carte phare extra est gratuite', () => {
    const volcan = cards.find((c) => c.id === 'les-volcans')!;
    expect(estGratuite(volcan)).toBe(true);
  });

  it('le socle reste un teaser : nettement minoritaire', () => {
    const gratuites = cards.filter(estGratuite).length;
    expect(gratuites).toBeLessThan(cards.length / 2);
  });
});
```

- [ ] **Étape 2 : Lancer le test, vérifier qu'il échoue**

Run: `npm test -- premium-acces`
Expected: FAIL — `content/acces` introuvable.

- [ ] **Étape 3 : Implémenter**

```ts
// content/acces.ts
import type { DomainId, ScienceCard } from '@/lib/types';

/**
 * Socle gratuit du freemium.
 *
 * Toujours ouvert : le domaine « L'espace » (astronomie) en entier — l'accroche
 * la plus forte pour un enfant — plus une carte phare par autre domaine, pour
 * donner un aperçu de chaque thème. Le premium est tout le reste.
 *
 * Une seule source ici plutôt qu'un drapeau sur chacune des ~100 cartes : plus
 * simple à ajuster, et une future carte d'astronomie sera gratuite sans effort.
 */
export const DOMAINE_GRATUIT: DomainId = 'astronomie';

export const EXTRAS_GRATUITS: ReadonlySet<string> = new Set([
  'les-volcans', // La Terre
  'le-coeur-et-le-sang', // Le vivant
  'pourquoi-tout-tombe', // La physique
  'le-volcan-de-vinaigre', // La chimie
  'comment-vole-un-avion', // Construire
  'comment-marche-internet', // Les ordinateurs
  'la-symetrie', // Les nombres
  'la-metamorphose-du-papillon', // Les animaux
  'la-foudre-et-le-tonnerre', // La météo
]);

export function estGratuite(card: Pick<ScienceCard, 'id' | 'domainId'>): boolean {
  return card.domainId === DOMAINE_GRATUIT || EXTRAS_GRATUITS.has(card.id);
}

export function estPremium(card: Pick<ScienceCard, 'id' | 'domainId'>): boolean {
  return !estGratuite(card);
}
```

- [ ] **Étape 4 : Lancer le test, vérifier qu'il passe**

Run: `npm test -- premium-acces`
Expected: PASS (5 tests).

- [ ] **Étape 5 : Commit**

```bash
git add content/acces.ts tests/premium-acces.test.ts
git commit -m "Définit le socle gratuit et le prédicat premium"
```

---

### Tâche 2 : Constantes produits + déduction pure du droit

Les identifiants des produits Play et la fonction pure qui décide du droit à partir
des achats renvoyés par Google.

**Files:**
- Create: `lib/premium/produits.ts`
- Create: `lib/premium/entitlement.ts`
- Test: `tests/premium-entitlement.test.ts`

**Interfaces:**
- Produces: `SKU_MENSUEL`, `SKU_ANNUEL`, `SKU_A_VIE`, `SKUS_PREMIUM`,
  `URL_PLAY_STORE`, `estPremiumDapresAchats(achatsItemIds, skusPremium)`.
- Consumed by: tâches 4, 5, 6.

- [ ] **Étape 1 : Écrire le test qui échoue**

```ts
// tests/premium-entitlement.test.ts
import { describe, expect, it } from 'vitest';
import { SKUS_PREMIUM } from '@/lib/premium/produits';
import { estPremiumDapresAchats } from '@/lib/premium/entitlement';

const skus = [...SKUS_PREMIUM];

describe('déduction du droit premium', () => {
  it('aucun achat : pas premium', () => {
    expect(estPremiumDapresAchats([], skus)).toBe(false);
  });

  it('un abonnement annuel possédé : premium', () => {
    expect(estPremiumDapresAchats(['hublot_annuel'], skus)).toBe(true);
  });

  it('l’achat à vie possédé : premium', () => {
    expect(estPremiumDapresAchats(['hublot_avie'], skus)).toBe(true);
  });

  it('un achat étranger ne débloque pas', () => {
    expect(estPremiumDapresAchats(['autre_chose'], skus)).toBe(false);
  });
});
```

- [ ] **Étape 2 : Lancer le test, vérifier qu'il échoue**

Run: `npm test -- premium-entitlement`
Expected: FAIL — modules introuvables.

- [ ] **Étape 3 : Implémenter les constantes**

```ts
// lib/premium/produits.ts
/**
 * Identifiants des produits Google Play. Ils doivent correspondre EXACTEMENT aux
 * produits créés dans la Play Console (tâche Play Console). Trois façons de passer
 * premium : abonnement mensuel, abonnement annuel, ou achat unique à vie.
 *
 * À VALIDER : mensuel et annuel peuvent être modélisés comme deux produits
 * d'abonnement distincts, ou comme deux « base plans » d'un même abonnement. Le
 * code les traite comme trois références achetables ; confirmer le modèle retenu
 * dans la Play Console et ajuster ces constantes en conséquence.
 */
export const SKU_MENSUEL = 'hublot_mensuel';
export const SKU_ANNUEL = 'hublot_annuel';
export const SKU_A_VIE = 'hublot_avie';

/** Toutes les références premium à interroger auprès de Play. */
export const SKUS_PREMIUM = [SKU_MENSUEL, SKU_ANNUEL, SKU_A_VIE] as const;

/** Fiche Play, pour l'appel à installer depuis le web. */
export const URL_PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.hublot.app';
```

- [ ] **Étape 4 : Implémenter la déduction pure**

```ts
// lib/premium/entitlement.ts
/**
 * Déduit le droit premium à partir des achats renvoyés par Google Play.
 *
 * Isolé du reste parce que c'est la seule partie décidable sans navigateur : la
 * Digital Goods API ne vit que dans la TWA. `listPurchases` ne renvoie que les
 * achats actifs (abonnement en cours, achat unique possédé), donc posséder
 * n'importe quelle référence premium suffit à débloquer.
 */
export function estPremiumDapresAchats(
  achatsItemIds: readonly string[],
  skusPremium: readonly string[],
): boolean {
  const premium = new Set(skusPremium);
  return achatsItemIds.some((id) => premium.has(id));
}
```

- [ ] **Étape 5 : Lancer le test, vérifier qu'il passe**

Run: `npm test -- premium-entitlement`
Expected: PASS (4 tests).

- [ ] **Étape 6 : Commit**

```bash
git add lib/premium/produits.ts lib/premium/entitlement.ts tests/premium-entitlement.test.ts
git commit -m "Ajoute les constantes produits et la déduction pure du droit premium"
```

---

### Tâche 3 : Verrou parental (logique pure)

Un petit calcul devant l'achat, recommandé par la Politique Familles pour éviter
qu'un enfant déclenche un paiement. La logique est pure et testée ; l'UI l'habille
en tâche 5.

**Files:**
- Create: `components/premium/portailParent.ts`
- Test: `tests/premium-portail-parent.test.ts`

**Interfaces:**
- Produces: `type DefiParent`, `genererDefi(alea?)`, `verifierDefi(defi, saisie)`.

- [ ] **Étape 1 : Écrire le test qui échoue**

```ts
// tests/premium-portail-parent.test.ts
import { describe, expect, it } from 'vitest';
import { genererDefi, verifierDefi } from '@/components/premium/portailParent';

describe('verrou parental', () => {
  it('génère une multiplication à deux chiffres jouable', () => {
    const defi = genererDefi(() => 0.5); // alea fixe → valeurs déterministes
    expect(defi.reponse).toBe(defi.a * defi.b);
    expect(defi.a).toBeGreaterThanOrEqual(3);
    expect(defi.b).toBeGreaterThanOrEqual(3);
  });

  it('accepte la bonne réponse, même avec des espaces', () => {
    const defi = { a: 7, b: 8, reponse: 56 };
    expect(verifierDefi(defi, ' 56 ')).toBe(true);
  });

  it('refuse une mauvaise réponse ou une saisie non numérique', () => {
    const defi = { a: 7, b: 8, reponse: 56 };
    expect(verifierDefi(defi, '55')).toBe(false);
    expect(verifierDefi(defi, 'abc')).toBe(false);
    expect(verifierDefi(defi, '')).toBe(false);
  });
});
```

- [ ] **Étape 2 : Lancer le test, vérifier qu'il échoue**

Run: `npm test -- premium-portail-parent`
Expected: FAIL — module introuvable.

- [ ] **Étape 3 : Implémenter**

```ts
// components/premium/portailParent.ts
/**
 * Verrou parental avant un achat (Politique Familles) : une multiplication qu'un
 * jeune enfant ne résout pas de tête. Purement logique, donc testable sans
 * navigateur ; l'écran de la tâche 5 n'en est que l'habillage.
 */
export interface DefiParent {
  a: number;
  b: number;
  reponse: number;
}

export function genererDefi(alea: () => number = Math.random): DefiParent {
  const a = 3 + Math.floor(alea() * 7); // 3..9
  const b = 3 + Math.floor(alea() * 7); // 3..9
  return { a, b, reponse: a * b };
}

export function verifierDefi(defi: DefiParent, saisie: string): boolean {
  const n = Number.parseInt(saisie.trim(), 10);
  return Number.isFinite(n) && n === defi.reponse;
}
```

- [ ] **Étape 4 : Lancer le test, vérifier qu'il passe**

Run: `npm test -- premium-portail-parent`
Expected: PASS (3 tests).

- [ ] **Étape 5 : Commit**

```bash
git add components/premium/portailParent.ts tests/premium-portail-parent.test.ts
git commit -m "Ajoute la logique pure du verrou parental"
```

---

### Tâche 4 : Couche Digital Goods + hook `useEntitlement`

Colle navigateur mince autour de la Digital Goods API, et le hook React qui expose
l'état de droit à l'app. **Non testé unitairement** (colle window/React, comme le
service worker) : vérifié par `npm run build` + `npm run lint`, et par le test
manuel de la tâche 8. S'appuie sur la fonction pure `estPremiumDapresAchats`
(déjà testée en tâche 2).

**Files:**
- Create: `lib/premium/digitalGoods.ts`
- Create: `components/premium/useEntitlement.ts`

**Interfaces:**
- Consumes: `SKUS_PREMIUM`, `estPremiumDapresAchats`.
- Produces: `useEntitlement()` → `{ statut, premium, peutAcheter, offres, acheter }`.

- [ ] **Étape 1 : Écrire la couche Digital Goods**

```ts
// lib/premium/digitalGoods.ts
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
```

- [ ] **Étape 2 : Écrire le hook `useEntitlement`**

```ts
// components/premium/useEntitlement.ts
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
```

- [ ] **Étape 3 : Vérifier le build et le lint**

Run: `npm run build && npm run lint`
Expected: build réussi, aucune erreur TypeScript ni ESLint.

- [ ] **Étape 4 : Commit**

```bash
git add lib/premium/digitalGoods.ts components/premium/useEntitlement.ts
git commit -m "Ajoute la couche Digital Goods et le hook useEntitlement"
```

---

### Tâche 5 : Écran paywall (avec verrou parental)

L'écran qui présente les offres et déclenche l'achat, ou — dans un navigateur —
invite à installer l'app. Le verrou parental s'intercale avant le paiement.

**Files:**
- Create: `components/premium/Paywall.tsx`

**Interfaces:**
- Consumes: `useEntitlement`, `genererDefi`/`verifierDefi`, `URL_PLAY_STORE`.
- Produces: `<Paywall onClose={() => void} />`.

- [ ] **Étape 1 : Implémenter le composant**

Composant client. Structure et règles (suivre les motifs du projet : `dialog` natif
comme `CardModal`, tokens `font-display`/`text-craie`/`border-encre-bord`/`soleil`,
cibles tactiles ≥ 48px) :

```tsx
// components/premium/Paywall.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { URL_PLAY_STORE, SKU_MENSUEL, SKU_ANNUEL, SKU_A_VIE } from '@/lib/premium/produits';
import { useEntitlement } from './useEntitlement';
import { genererDefi, verifierDefi, type DefiParent } from './portailParent';

interface PaywallProps {
  onClose: () => void;
}

/** Ordre d'affichage et libellés de repli des offres (Play fournit les prix). */
const OFFRES = [
  { sku: SKU_ANNUEL, titre: 'Abonnement annuel', repli: '19,99 €/an' },
  { sku: SKU_MENSUEL, titre: 'Abonnement mensuel', repli: '2,99 €/mois' },
  { sku: SKU_A_VIE, titre: 'Accès à vie', repli: '39,99 €' },
];

export function Paywall({ onClose }: PaywallProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { peutAcheter, premium, offres, acheter } = useEntitlement();
  const [defi, setDefi] = useState<DefiParent | null>(null);
  const [skuEnAttente, setSkuEnAttente] = useState<string | null>(null);
  const [saisie, setSaisie] = useState('');
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
  }, []);

  // Un achat réussi (premium devient vrai) referme le paywall.
  useEffect(() => {
    if (premium) onClose();
  }, [premium, onClose]);

  function prix(sku: string, repli: string) {
    return offres.find((o) => o.sku === sku)?.prix ?? repli;
  }

  function demanderAchat(sku: string) {
    setSkuEnAttente(sku);
    setDefi(genererDefi());
    setSaisie('');
    setErreur(false);
  }

  async function validerVerrou() {
    if (!defi || !skuEnAttente) return;
    if (!verifierDefi(defi, saisie)) {
      setErreur(true);
      return;
    }
    const sku = skuEnAttente;
    setDefi(null);
    setSkuEnAttente(null);
    await acheter(sku);
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby="titre-paywall"
      className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto border-0 bg-encre p-6 text-craie backdrop:bg-encre/80 sm:m-auto sm:h-auto sm:max-h-[92vh] sm:w-[min(32rem,92vw)] sm:rounded-[2rem] sm:border-4 sm:border-encre-bord sm:p-8"
    >
      <div className="flex min-h-full flex-col justify-center gap-6">
        <header className="flex items-start justify-between gap-3">
          <h2 id="titre-paywall" className="font-display text-2xl font-semibold sm:text-3xl">
            Débloque tout Hublot
          </h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">✕</span>
            <span className="sr-only">Fermer</span>
          </button>
        </header>

        <p className="text-craie-douce">
          Toutes les cartes, les nouveautés à venir, et l&apos;écoute hors ligne complète.
        </p>

        {/* Cas navigateur : pas d'achat possible, on invite à installer l'app. */}
        {!peutAcheter ? (
          <a
            href={URL_PLAY_STORE}
            className="flex min-h-14 items-center justify-center rounded-2xl border-4 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            Installer l&apos;app pour tout débloquer
          </a>
        ) : defi ? (
          /* Verrou parental avant paiement. */
          <div className="flex flex-col gap-3">
            <label className="font-display text-lg" htmlFor="verrou">
              Pour les parents : combien font {defi.a} × {defi.b} ?
            </label>
            <input
              id="verrou"
              inputMode="numeric"
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              className="min-h-14 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 text-center text-2xl text-craie focus:border-soleil focus:outline-none"
            />
            {erreur && <p className="text-sm text-craie-douce">Ce n&apos;est pas la bonne réponse.</p>}
            <button
              type="button"
              onClick={validerVerrou}
              className="min-h-14 cursor-pointer rounded-2xl border-4 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              Continuer
            </button>
          </div>
        ) : (
          /* Les trois offres. */
          <ul className="flex flex-col gap-3">
            {OFFRES.map((o) => (
              <li key={o.sku}>
                <button
                  type="button"
                  onClick={() => demanderAchat(o.sku)}
                  className="flex min-h-16 w-full cursor-pointer items-center justify-between rounded-2xl border-2 border-encre-bord bg-encre-clair px-5 text-left transition-colors hover:border-soleil"
                >
                  <span className="font-display text-lg text-craie">{o.titre}</span>
                  <span className="text-craie-douce">{prix(o.sku, o.repli)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </dialog>
  );
}
```

- [ ] **Étape 2 : Vérifier le build et le lint**

Run: `npm run build && npm run lint`
Expected: build réussi, aucune erreur.

- [ ] **Étape 3 : Commit**

```bash
git add components/premium/Paywall.tsx
git commit -m "Ajoute l'écran paywall avec verrou parental et repli web"
```

---

### Tâche 6 : Verrouillage — cadenas sur les tuiles + routage vers le paywall

Brancher le contenu : une carte premium non possédée affiche un cadenas et ouvre le
paywall au lieu de la carte.

**Files:**
- Modify: `components/cards/CardTile.tsx`
- Modify: `components/cards/CardGrid.tsx:6-51`
- Modify: `components/cards/DiscoverView.tsx`

**Interfaces:**
- Consumes: `estPremium` (tâche 1), `useEntitlement` (tâche 4), `Paywall` (tâche 5).

- [ ] **Étape 1 : Ajouter le cadenas à `CardTile`**

Dans `components/cards/CardTile.tsx`, ajouter une prop `verrouillee: boolean` à
`CardTileProps`, la recevoir dans les paramètres, et afficher un badge cadenas en
haut à gauche de l'anneau quand elle est vraie (symétrique de la coche verte).
Ajouter après le bloc de la coche `dejaJouee` (avant la fermeture du `<span>` de
l'anneau) :

```tsx
{verrouillee && (
  <span
    aria-hidden="true"
    className="absolute bottom-1 left-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-encre bg-encre-clair text-sm"
  >
    🔒
  </span>
)}
```

Et, pour l'accessibilité (jamais d'info portée par le seul rendu), après le
`{dejaJouee && <span className="sr-only">, déjà écoutée</span>}` :

```tsx
{verrouillee && <span className="sr-only">, premium — à débloquer</span>}
```

- [ ] **Étape 2 : Passer l'info à travers `CardGrid`**

Dans `components/cards/CardGrid.tsx`, ajouter à `CardGridProps` :

```tsx
/** Vrai pour une carte premium non débloquée : elle porte un cadenas. */
estVerrouillee: (card: ScienceCard) => boolean;
```

Recevoir `estVerrouillee` dans les paramètres et le transmettre à `CardTile` :

```tsx
<CardTile
  key={card.id}
  card={card}
  ageRange={ageRange}
  index={index}
  dejaJouee={cartesVues.has(card.id)}
  eteinte={cartesEteintes.has(card.id)}
  verrouillee={estVerrouillee(card)}
  onSelect={onSelectCard}
/>
```

- [ ] **Étape 3 : Router vers le paywall dans `DiscoverView`**

Dans `components/cards/DiscoverView.tsx` :
- Ajouter les imports :

```tsx
import { estPremium } from '@/content/acces';
import { premiumActif } from '@/lib/premium/flag';
import { useEntitlement } from '@/components/premium/useEntitlement';
import { Paywall } from '@/components/premium/Paywall';
```

- Dans le composant, après `const { cartesVues } = useCartesVues();` :

```tsx
const { premium } = useEntitlement();
const [paywallOuvert, setPaywallOuvert] = useState(false);

// Le drapeau d'abord : freemium éteint ⇒ rien n'est jamais verrouillé.
const estVerrouillee = (card: ScienceCard) =>
  premiumActif() && estPremium(card) && !premium;

function ouvrirCarte(card: ScienceCard) {
  if (estVerrouillee(card)) setPaywallOuvert(true);
  else setCarteOuverte(card);
}
```

- Remplacer `onSelectCard={setCarteOuverte}` par `onSelectCard={ouvrirCarte}` et
  ajouter la prop `estVerrouillee={estVerrouillee}` au `<CardGrid>`.
- Après le bloc `{carteOuverte && (...)}`, ajouter :

```tsx
{paywallOuvert && <Paywall onClose={() => setPaywallOuvert(false)} />}
```

- [ ] **Étape 4 : Vérifier le build, le lint et la non-régression des tests**

Run: `npm run build && npm run lint && npm test`
Expected: build réussi, lint propre, tous les tests passent (les tests existants +
ceux des tâches 1-3).

- [ ] **Étape 5 : Vérifier le rendu en local**

D'abord, drapeau **éteint** (défaut) : `npm run dev`, ouvrir `/decouvrir`, choisir un
âge. Expected : **aucun cadenas**, toutes les cartes s'ouvrent — l'app est identique
à aujourd'hui.

Puis, drapeau **allumé** pour vérifier le verrouillage :
`NEXT_PUBLIC_PREMIUM_ACTIF=true npm run dev` (ou l'ajouter à `.env.local`).
Expected : les cartes d'astronomie et les cartes phares s'ouvrent normalement ; une
carte premium (ex. « Le wifi ») porte un cadenas et ouvre le paywall — lequel, en
navigateur, montre le bouton « Installer l'app pour tout débloquer » (pas d'offres,
puisque la Digital Goods API est absente).

- [ ] **Étape 6 : Commit**

```bash
git add components/cards/CardTile.tsx components/cards/CardGrid.tsx components/cards/DiscoverView.tsx
git commit -m "Verrouille les cartes premium derrière le paywall (cadenas + routage)"
```

---

### Tâche 7 : Créer les produits dans la Play Console

Procédure manuelle (aucun code). Les identifiants doivent correspondre au caractère
près aux constantes de `lib/premium/produits.ts`.

**Files:** aucun (console web).

- [ ] **Étape 1 : Abonnement**

Play Console → **Monétiser → Produits → Abonnements** → créer un abonnement
« Hublot Premium ». Ajouter les offres/prix : mensuelle **2,99 €** (id `hublot_mensuel`)
et annuelle **19,99 €** (id `hublot_annuel`). (Selon le modèle de la console : deux
produits distincts, ou un abonnement à deux base plans — cf. la note « À VALIDER »
de `produits.ts`, aligner les constantes sur le choix fait.)

- [ ] **Étape 2 : Achat à vie**

Play Console → **Monétiser → Produits → Produits intégrés** → créer un produit
unique **non consommable** « Hublot à vie », id `hublot_avie`, prix **39,99 €**.

- [ ] **Étape 3 : Testeurs de licence**

Play Console → **Configuration → Test des licences** → ajouter ton adresse Gmail (et
celles de testeurs) comme testeurs de licence, pour des achats en **bac à sable**
(sans débit réel).

- [ ] **Étape 4 : Activer les produits**

Passer les trois produits à l'état **actif**.

---

### Tâche 8 : Déployer, vérifier la disponibilité billing, tester en bac à sable

Mise en ligne et validation de bout en bout. La coquille TWA a déjà
`playBilling.enabled: true` : un rebuild n'est en principe **pas** nécessaire, mais
on le vérifie.

**Files:** aucun (déploiement + tests manuels).

- [ ] **Étape 1 : Déployer le web**

Depuis la racine : `vercel --prod` (ou le flux de déploiement habituel). Confirmer
que le site à jour est en ligne.

- [ ] **Étape 2 : Vérifier que la Digital Goods API est exposée dans la TWA**

Sur un appareil, installer/mettre à jour l'app **depuis la piste de test interne**
(la Digital Goods API n'existe que pour une app installée depuis Play, jamais en
navigateur ni en sideload). Ouvrir une carte premium.
- Si le paywall affiche les **offres avec prix** → billing disponible, continuer.
- Si le paywall affiche « Installer l'app » (API absente) → la coquille installée
  ne relaie pas le billing : reconstruire et republier l'AAB
  (`cd android && bubblewrap build`, chemins JDK/SDK sans espace déjà configurés),
  téléverser sur le test interne, réinstaller, re-tester.

- [ ] **Étape 3 : Achat en bac à sable**

Avec un compte **testeur de licence**, acheter chaque offre (annuel, mensuel, à vie)
en bac à sable.
Expected : le verrou parental s'affiche puis le dialogue de paiement Google ;
après achat, le paywall se ferme et la carte premium s'ouvre. Fermer puis rouvrir
l'app : le contenu premium reste débloqué (droit restauré par `listPurchases`).

- [ ] **Étape 4 : Vérifier le repli web**

Ouvrir `hublot-ruby.vercel.app` dans un navigateur : une carte premium ouvre le
paywall avec le bouton « Installer l'app », sans offres.
Expected : conforme.

---

## Auto-revue (couverture de la spec)

- Drapeau d'activation (freemium livré dormant, allumé sans code) → tâche 0,
  câblé au gating en tâche 6. ✔
- Produits Play (abonnement mensuel/annuel + à vie) → tâche 7. ✔
- Digital Goods API (lister/acheter/interroger achats) → tâches 4 et 8. ✔
- Modèle de droit `useEntitlement` (API absente, premium possédé/expiré) →
  tâche 4, logique pure testée en tâche 2. ✔
- Verrouillage du contenu (indicateur premium, socle gratuit, cadenas, paywall) →
  tâches 1, 5, 6. ✔
- Écran paywall (offres + repli « installer l'app » sur web) → tâche 5. ✔
- Espace parent (verrou avant achat) → tâches 3 (logique) et 5 (UI). ✔
- Comportement web (vitrine + entonnoir) → tâches 5 et 6, vérifié tâche 8. ✔
- Rebuild/republication de l'AAB (conditionnel) → tâche 8. ✔
- « Sécurité des données » inchangée (aucune donnée collectée) → contrainte globale,
  aucun stockage ajouté (le droit vit chez Google). ✔
- « Ne pas fermer » phase 2 (droit isolé dans `entitlement.ts` + `digitalGoods.ts`,
  indicateur premium central) → contraintes globales + tâches 1, 2, 4. ✔
- Hors périmètre (back-end, Stripe web, comptes, B2B) → aucune tâche, exclu
  conformément à la spec. ✔
```
