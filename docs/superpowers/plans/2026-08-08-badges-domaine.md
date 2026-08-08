# Badges de domaine (E2a) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter deux badges par domaine — « exploré » (10 cartes écoutées) et « maîtrisé » (10 réussies au quizz) — avec un suivi de maîtrise, un repère sur la grille des mondes et un écran collection.

**Architecture:** Une clé `localStorage` `science.cartesMaitrisees.v1` (cartes réussies au quizz), un hook `useCartesMaitrisees` (sur le modèle de `useCartesVues`), une fonction pure `lib/badges.ts` (`badgesDomaine`). `QuizView` marque une carte maîtrisée à chaque bonne réponse ; `MondeTile` affiche le repère « maîtrisé » ; un écran `/collection` liste les 10 domaines × 2 badges.

**Tech Stack:** Next.js 16 (App Router, Server + Client Components), React (`useSyncExternalStore`), TypeScript, `localStorage` via `@/lib/storage`, Vitest (node).

## Global Constraints

- **Non-punitif** : les badges n'apparaissent que ; jamais d'état « raté ». Aucune régression de maîtrise.
- **Une carte est « maîtrisée »** dès qu'une de ses questions est réussie **une fois** au quizz.
- **`explore`** = toutes les cartes du domaine dans `cartesVues` ; **`maitrise`** = toutes dans `cartesMaitrisees`.
- **Non-lecteurs (3-5)** : badges = **icônes** (🧭 exploré, 🏅 maîtrisé) ; toujours un `sr-only`.
- **Reset couplé** : « Oublier les cartes déjà écoutées » appelle aussi `oublierMaitrisees()`.
- **Stockage** : clé `science.cartesMaitrisees.v1`, liste de slugs séparés par virgules (comme `science.cartesVues.v1`).
- **Réutiliser** : le motif exact de `components/cards/useCartesVues.ts`, `@/lib/storage` (`readStored`/`writeStored`), `domainStyles`, `progressionDomaine`.
- Tests en **node** : la logique pure est testée ; les composants sont validés par `tsc`/`lint`/`build` + vérification manuelle.
- **Hors périmètre** : la mascotte évolutive (chantier E2b).

---

## Structure des fichiers

**Créés**
- `lib/badges.ts` — `badgesDomaine` (pur).
- `tests/badges.test.ts` — tests.
- `components/cards/useCartesMaitrisees.ts` — hook + `lireMaitrisees`/`ecrireMaitrisees`.
- `tests/cartes-maitrisees.test.ts` — tests de sérialisation.
- `app/collection/page.tsx` — route de l'écran collection (Server Component).
- `components/cards/CollectionView.tsx` — écran collection (client).

**Modifiés**
- `components/quiz/QuizView.tsx` — marque la carte maîtrisée à la bonne réponse.
- `components/cards/MondeTile.tsx` — repère « maîtrisé ».
- `components/cards/MondesView.tsx` — calcule `maitrise` et le passe à `MondeTile`.
- `components/age/AgeGate.tsx` — bouton « Ma collection » + reset couplé.
- `public/sw.js` — précache `/collection`, `VERSION` v3 → v4.

---

## Task 1 : `badgesDomaine` (pur) + tests

**Files:**
- Create: `lib/badges.ts`
- Test: `tests/badges.test.ts`

**Interfaces:**
- Produces : `badgesDomaine(cards: ScienceCard[], cartesVues: Set<string>, cartesMaitrisees: Set<string>, domainId: DomainId): { explore: boolean; maitrise: boolean }`.

- [ ] **Step 1 : Écrire les tests (qui échouent)**

Créer `tests/badges.test.ts` :

```ts
import { describe, expect, it } from 'vitest';
import { badgesDomaine } from '@/lib/badges';
import { cards } from '@/content/cards';

const idsDe = (domainId: string) => cards.filter((c) => c.domainId === domainId).map((c) => c.id);

describe('badgesDomaine', () => {
  it('exploré et maîtrisé quand toutes les cartes du domaine y sont', () => {
    const ids = idsDe('meteo');
    const b = badgesDomaine(cards, new Set(ids), new Set(ids), 'meteo');
    expect(b).toEqual({ explore: true, maitrise: true });
  });

  it('exploré mais pas maîtrisé si une réussite manque', () => {
    const ids = idsDe('animaux');
    const maitrisees = new Set(ids.slice(1)); // il en manque une
    const b = badgesDomaine(cards, new Set(ids), maitrisees, 'animaux');
    expect(b).toEqual({ explore: true, maitrise: false });
  });

  it('non exploré si une carte n’est pas écoutée', () => {
    const ids = idsDe('physique');
    const vues = new Set(ids.slice(1));
    expect(badgesDomaine(cards, vues, new Set(), 'physique').explore).toBe(false);
  });

  it('rien avec des ensembles vides', () => {
    expect(badgesDomaine(cards, new Set(), new Set(), 'chimie')).toEqual({
      explore: false,
      maitrise: false,
    });
  });

  it('les domaines sont indépendants', () => {
    const idsMeteo = idsDe('meteo');
    // Météo tout maîtrisé, mais on interroge animaux : rien.
    const b = badgesDomaine(cards, new Set(idsMeteo), new Set(idsMeteo), 'animaux');
    expect(b).toEqual({ explore: false, maitrise: false });
  });
});
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run : `npx vitest run tests/badges.test.ts`
Expected : FAIL (`@/lib/badges` n'existe pas).

- [ ] **Step 3 : Écrire le module**

Créer `lib/badges.ts` :

```ts
import type { DomainId, ScienceCard } from './types';

/**
 * Badges d'un domaine :
 * - `explore` : toutes ses cartes ont été écoutées ;
 * - `maitrise` : toutes ses cartes ont été réussies au moins une fois au quizz.
 * Fonction pure, testable en node.
 */
export function badgesDomaine(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  cartesMaitrisees: Set<string>,
  domainId: DomainId,
): { explore: boolean; maitrise: boolean } {
  const duDomaine = cards.filter((c) => c.domainId === domainId);
  if (duDomaine.length === 0) return { explore: false, maitrise: false };
  return {
    explore: duDomaine.every((c) => cartesVues.has(c.id)),
    maitrise: duDomaine.every((c) => cartesMaitrisees.has(c.id)),
  };
}
```

- [ ] **Step 4 : Lancer, vérifier le succès**

Run : `npx vitest run tests/badges.test.ts`
Expected : PASS.

- [ ] **Step 5 : Commit**

```bash
git add lib/badges.ts tests/badges.test.ts
git commit -m "Ajoute badgesDomaine (exploré / maîtrisé) et ses tests"
```

---

## Task 2 : Hook `useCartesMaitrisees` + tests de sérialisation

**Files:**
- Create: `components/cards/useCartesMaitrisees.ts`
- Test: `tests/cartes-maitrisees.test.ts`

**Interfaces:**
- Produces :
  - `lireMaitrisees(brut: string): Set<string>` / `ecrireMaitrisees(set: Set<string>): string`
  - `useCartesMaitrisees(): { cartesMaitrisees: Set<string>; marquerMaitrisee: (cardId: string) => void; oublierMaitrisees: () => void }`

- [ ] **Step 1 : Écrire les tests de sérialisation (qui échouent)**

Créer `tests/cartes-maitrisees.test.ts` :

```ts
import { describe, expect, it } from 'vitest';
import { lireMaitrisees, ecrireMaitrisees } from '@/components/cards/useCartesMaitrisees';

describe('sérialisation des cartes maîtrisées', () => {
  it('lit une liste séparée par des virgules, en ignorant les vides', () => {
    expect([...lireMaitrisees('a,b,c')]).toEqual(['a', 'b', 'c']);
    expect([...lireMaitrisees('')].length).toBe(0);
    expect([...lireMaitrisees('a,,b')]).toEqual(['a', 'b']);
  });

  it('fait un aller-retour', () => {
    const set = new Set(['x', 'y']);
    expect([...lireMaitrisees(ecrireMaitrisees(set))].sort()).toEqual(['x', 'y']);
  });
});
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run : `npx vitest run tests/cartes-maitrisees.test.ts`
Expected : FAIL (module inexistant).

- [ ] **Step 3 : Écrire le hook**

Créer `components/cards/useCartesMaitrisees.ts` (calqué sur `components/cards/useCartesVues.ts`) :

```ts
'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';

const CLE = 'science.cartesMaitrisees.v1';

/** Sérialisation : identifiants séparés par des virgules (comme les cartes vues). */
export function lireMaitrisees(brut: string): Set<string> {
  return new Set(brut.split(',').filter(Boolean));
}

export function ecrireMaitrisees(set: Set<string>): string {
  return [...set].join(',');
}

const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function lire(): string {
  return readStored(CLE) ?? '';
}

function lireServeur(): string {
  return '';
}

function publier(valeur: string) {
  writeStored(CLE, valeur);
  for (const notifier of abonnes) notifier();
}

/**
 * Cartes réussies au moins une fois au quizz.
 *
 * Alimente les badges « maîtrisé » de chaque domaine. Publié comme les cartes
 * vues : la grille des mondes et l'écran collection se mettent à jour dès qu'une
 * carte est maîtrisée.
 */
export function useCartesMaitrisees() {
  const brut = useSyncExternalStore(souscrire, lire, lireServeur);

  const marquerMaitrisee = useCallback((cardId: string) => {
    const actuelles = lireMaitrisees(readStored(CLE) ?? '');
    if (actuelles.has(cardId)) return;
    actuelles.add(cardId);
    publier(ecrireMaitrisees(actuelles));
  }, []);

  const oublierMaitrisees = useCallback(() => {
    publier('');
  }, []);

  return { cartesMaitrisees: lireMaitrisees(brut), marquerMaitrisee, oublierMaitrisees };
}
```

- [ ] **Step 4 : Lancer, vérifier le succès**

Run : `npx vitest run tests/cartes-maitrisees.test.ts && npx tsc --noEmit`
Expected : PASS, aucune erreur de type.

- [ ] **Step 5 : Commit**

```bash
git add components/cards/useCartesMaitrisees.ts tests/cartes-maitrisees.test.ts
git commit -m "Ajoute le hook useCartesMaitrisees (suivi de la maîtrise)"
```

---

## Task 3 : Marquer la maîtrise au quizz (`QuizView`)

**Files:**
- Modify: `components/quiz/QuizView.tsx`

**Interfaces:**
- Consumes : `useCartesMaitrisees` (Task 2).

- [ ] **Step 1 : Importer et instancier le hook**

Ajouter l'import près des autres :
```ts
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
```
Dans le composant, à côté de `const { etoiles, gagnerEtoiles } = useEtoiles();` :
```ts
  const { marquerMaitrisee } = useCartesMaitrisees();
```

- [ ] **Step 2 : Marquer à la bonne réponse**

Dans le `onClick` du bouton de proposition, dans la branche `if (reponse.correcte) { … }`, ajouter le marquage. Remplacer :
```tsx
                  if (reponse.correcte) {
                    setReussies((n) => n + 1);
                    setDAffilee((d) => d + 1);
                  } else {
```
par :
```tsx
                  if (reponse.correcte) {
                    setReussies((n) => n + 1);
                    setDAffilee((d) => d + 1);
                    marquerMaitrisee(tirage.carte.id);
                  } else {
```

- [ ] **Step 3 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm test`
Expected : aucune erreur ; tous les tests passent.

- [ ] **Step 4 : Commit**

```bash
git add components/quiz/QuizView.tsx
git commit -m "Quizz : marque une carte maîtrisée à la bonne réponse"
```

---

## Task 4 : Repère « maîtrisé » sur la tuile de monde

**Files:**
- Modify: `components/cards/MondeTile.tsx`
- Modify: `components/cards/MondesView.tsx`

**Interfaces:**
- Consumes : `badgesDomaine` (Task 1), `useCartesMaitrisees` (Task 2).
- Produces : `MondeTile` gagne une prop `maitrise: boolean`.

- [ ] **Step 1 : Ajouter la prop `maitrise` à `MondeTile`**

Dans `components/cards/MondeTile.tsx`, ajouter la prop à l'interface :
```ts
interface MondeTileProps {
  domain: DomainDefinition;
  vues: number;
  total: number;
  /** Rang dans la grille, pour l'allumage en séquence. */
  index: number;
  onEcouter: () => void;
  enLecture: boolean;
  maitrise: boolean;
}
```
et à la déstructuration :
```tsx
export function MondeTile({
  domain,
  vues,
  total,
  index,
  onEcouter,
  enLecture,
  maitrise,
}: MondeTileProps) {
```

- [ ] **Step 2 : Afficher le repère « maîtrisé »**

Dans le `<span className="relative flex h-32 w-32 …">` du hublot, juste après le bloc de la coche `{complet && ( … )}`, ajouter le médaillon « maîtrisé » (en bas à gauche, symétrique de la coche) :
```tsx
          {maitrise && (
            <span
              className="absolute bottom-1 left-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-encre bg-soleil text-sm"
            >
              <span aria-hidden="true">🏅</span>
              <span className="sr-only">maîtrisé</span>
            </span>
          )}
```

- [ ] **Step 3 : Calculer et passer `maitrise` depuis `MondesView`**

Dans `components/cards/MondesView.tsx`, ajouter les imports :
```ts
import { badgesDomaine } from '@/lib/badges';
import { useCartesMaitrisees } from './useCartesMaitrisees';
```
Instancier le hook, à côté de `useCartesVues()` :
```ts
  const { cartesMaitrisees } = useCartesMaitrisees();
```
Dans le `map` des domaines, calculer et passer la prop :
```tsx
        {domains.map((domain, index) => {
          const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
          const { maitrise } = badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
          return (
            <MondeTile
              key={domain.id}
              domain={domain}
              vues={vues}
              total={total}
              index={index}
              onEcouter={() => jouer(domain.id)}
              enLecture={enLecture === domain.id}
              maitrise={maitrise}
            />
          );
        })}
```

- [ ] **Step 4 : Vérifier**

Run : `npx tsc --noEmit && npm run lint`
Expected : aucune erreur.
Run : `npm run dev` → sur la grille des mondes, un domaine dont toutes les cartes sont réussies au quizz affiche le médaillon 🏅 (en plus de la coche « terminé »).

- [ ] **Step 5 : Commit**

```bash
git add components/cards/MondeTile.tsx components/cards/MondesView.tsx
git commit -m "Grille des mondes : repère « maîtrisé » sur les domaines"
```

---

## Task 5 : Écran collection + route + précache hors-ligne

**Files:**
- Create: `components/cards/CollectionView.tsx`
- Create: `app/collection/page.tsx`
- Modify: `public/sw.js`

**Interfaces:**
- Consumes : `badgesDomaine` (Task 1), `useCartesVues`, `useCartesMaitrisees`, `useAgeRange`, `domainStyles`.

- [ ] **Step 1 : Écrire `CollectionView`**

Créer `components/cards/CollectionView.tsx` :

```tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { badgesDomaine } from '@/lib/badges';
import { useCartesVues } from './useCartesVues';
import { useCartesMaitrisees } from './useCartesMaitrisees';

interface CollectionViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

export function CollectionView({ cards, domains }: CollectionViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const badges = domains.map((domain) => ({
    domain,
    ...badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id),
  }));
  const nbExplore = badges.filter((b) => b.explore).length;
  const nbMaitrise = badges.filter((b) => b.maitrise).length;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">Ma collection</h1>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">🏠</span> Menu
        </button>
        <p className="text-craie-douce">
          <span aria-hidden="true">🧭</span> {nbExplore}/{domains.length} explorés ·{' '}
          <span aria-hidden="true">🏅</span> {nbMaitrise}/{domains.length} maîtrisés
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {badges.map(({ domain, explore, maitrise }) => {
          const style = domainStyles[domain.id];
          return (
            <li
              key={domain.id}
              className="flex items-center justify-between gap-4 rounded-3xl border-2 border-encre-bord bg-encre-clair p-4"
            >
              <span className="flex items-center gap-3 font-display text-lg text-craie">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-2xl"
                  style={{ backgroundColor: 'var(--color-encre)', boxShadow: `0 0 16px ${style.halo}` }}
                >
                  {domain.icon}
                </span>
                {domain.labels.fr}
              </span>
              <span className="flex items-center gap-3 text-2xl">
                <span className={explore ? '' : 'opacity-20'}>
                  <span aria-hidden="true">🧭</span>
                  <span className="sr-only">{explore ? 'exploré' : 'pas encore exploré'}</span>
                </span>
                <span className={maitrise ? '' : 'opacity-20'}>
                  <span aria-hidden="true">🏅</span>
                  <span className="sr-only">{maitrise ? 'maîtrisé' : 'pas encore maîtrisé'}</span>
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
```

- [ ] **Step 2 : Écrire la route**

Créer `app/collection/page.tsx` :

```tsx
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { CollectionView } from '@/components/cards/CollectionView';

/** Server Component : catalogue statique importé au build. */
export default function CollectionPage() {
  return <CollectionView cards={cards} domains={domains} />;
}
```

- [ ] **Step 3 : Précacher `/collection` (hors-ligne)**

Dans `public/sw.js`, passer `const VERSION = 'v3';` à `'v4'`, et ajouter `'/collection'` au tableau `SHELL` (après `'/quizz'`) :
```js
  '/quizz',
  '/collection',
```

- [ ] **Step 4 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm run build`
Expected : aucune erreur ; `/collection` apparaît en route statique (`○`).

- [ ] **Step 5 : Commit**

```bash
git add components/cards/CollectionView.tsx app/collection/page.tsx public/sw.js
git commit -m "Ajoute l'écran collection des badges de domaine (route + hors-ligne)"
```

---

## Task 6 : Accès collection au menu + reset couplé (`AgeGate`)

**Files:**
- Modify: `components/age/AgeGate.tsx`

**Interfaces:**
- Consumes : `useCartesMaitrisees` (Task 2).

- [ ] **Step 1 : Importer et instancier**

Ajouter l'import près des autres :
```ts
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
```
À côté de `const { etoiles, oublierEtoiles } = useEtoiles();` :
```ts
  const { oublierMaitrisees } = useCartesMaitrisees();
```

- [ ] **Step 2 : Bouton « Ma collection » dans le menu**

Dans le menu du visiteur de retour, juste **après** la carte de progression (le bloc `{(() => { const { rang, rangProchain } = rangDepuisEtoiles(etoiles); … })()}`), à l'intérieur du même `<div className="flex w-full max-w-sm flex-col gap-4">`, ajouter :
```tsx
          <button
            type="button"
            onClick={() => router.push('/collection')}
            className="flex min-h-14 cursor-pointer items-center justify-center gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 font-display text-lg text-craie transition-transform hover:scale-105 hover:border-soleil active:scale-95"
          >
            <span aria-hidden="true">🏅</span>
            Ma collection
          </button>
```

- [ ] **Step 3 : Coupler la remise à zéro**

Dans le `onClick` du bouton de réinitialisation (« Oublier les … cartes déjà écoutées »), ajouter l'oubli des cartes maîtrisées. Remplacer :
```tsx
            oublierToutesLesVues();
            oublierEtoiles();
            setConfirmation(false);
```
par :
```tsx
            oublierToutesLesVues();
            oublierEtoiles();
            oublierMaitrisees();
            setConfirmation(false);
```

- [ ] **Step 4 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm run build && npm test`
Expected : aucune erreur ; tout passe.
Run : `npm run dev` → le menu propose « Ma collection » (→ `/collection`) ; après avoir réussi des cartes au quizz, l'écran collection et les hublots reflètent les badges ; en mode « changer », « Oublier les cartes » remet aussi la maîtrise à zéro.

- [ ] **Step 5 : Commit**

```bash
git add components/age/AgeGate.tsx
git commit -m "Menu : accès à la collection et reset couplé de la maîtrise"
```

---

## Auto-revue (faite)

- **Couverture du spec** : suivi de maîtrise (`science.cartesMaitrisees.v1` + hook) → Task 2 ; `badgesDomaine` pur et testé → Task 1 ; marquage au quizz → Task 3 ; repère « maîtrisé » sur la tuile (la coche existante = « exploré ») → Task 4 ; écran collection + route + hors-ligne → Task 5 ; accès menu + reset couplé → Task 6 ; non-punitif (ajout seulement, jamais de retrait hors reset) → Tasks 2/3. Hors-scope (mascotte E2b) : non implémenté.
- **Placeholders** : aucun — code réel à chaque étape.
- **Cohérence des types** : `badgesDomaine(cards, cartesVues, cartesMaitrisees, domainId) → { explore, maitrise }` (Task 1) consommé à l'identique dans `MondesView` (`maitrise`) et `CollectionView` (`explore`/`maitrise`) ; `useCartesMaitrisees() → { cartesMaitrisees, marquerMaitrisee, oublierMaitrisees }` (Task 2) consommé par `QuizView` (`marquerMaitrisee`), `MondesView`/`CollectionView` (`cartesMaitrisees`), `AgeGate` (`oublierMaitrisees`) ; `MondeTile` gagne `maitrise: boolean` (Task 4) fourni par `MondesView`.
- **Non-régression** : le quizz, la grille des mondes et le menu gardent leur comportement ; seules des couches additives s'ajoutent.
