# Choix de l'âge au pas-à-pas (A1) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer le choix de l'âge par trois silhouettes par un pas-à-pas −/+ (grand chiffre + silhouette qui grandit), en stockant l'âge exact (3–12) comme source de vérité et en dérivant la tranche interne.

**Architecture:** Un module pur `lib/age.ts` (`trancheDepuisAge`, `ageDepuisTranche`) ; `useAgeRange` stocke l'âge exact (`science.age.v1`), dérive `ageRange`, et migre l'ancienne clé ; `AgeGate` remplace les silhouettes par un pas-à-pas ; les libellés « Niveau » affichent l'âge exact.

**Tech Stack:** Next.js 16 (Client Components), React (`useSyncExternalStore`), TypeScript, `localStorage` via `@/lib/storage`, Vitest (node).

## Global Constraints

- **Modèle interne inchangé** : le contenu reste indexé par `AGE_RANGES` (`'3-5' | '6-8' | '9-12'`). L'âge exact n'est qu'une couche de saisie/stockage ; `ageRange` reste dérivé et exposé à l'identique.
- **Source de vérité** : clé `science.age.v1` = âge exact (entier 3–12). Ancienne clé `science.ageRange.v1` encore **lue** pour migrer, jamais écrite.
- **Bornes** : âge borné à [3, 12] avant toute dérivation.
- **Accessibilité** : le chiffre sert le parent, la taille de la silhouette l'enfant ; `aria-label` sur −/+, annonce `sr-only` de l'âge.
- **Hors périmètre** : héros/avatar (A2) — on garde le composant `Silhouette`.
- Tests en **node** : seule la logique pure (`lib/age.ts`) est testée unitairement ; les composants sont validés par `tsc`/`lint`/`build` + vérification manuelle.
- `useSyncExternalStore` : `getSnapshot` doit rester pur et renvoyer une valeur stable (un **nombre** primitif convient) ; **aucune écriture** dans le snapshot (la migration est une simple lecture de repli).

---

## Structure des fichiers

**Créés**
- `lib/age.ts` — `trancheDepuisAge`, `ageDepuisTranche` (purs).
- `tests/age.test.ts` — tests des deux fonctions + round-trip migration.

**Modifiés**
- `components/age/useAgeRange.ts` — stocke l'âge exact, dérive `ageRange`, migre l'ancienne clé, expose `age` + `choisirAge`.
- `components/age/AgeGate.tsx` — pas-à-pas au lieu des silhouettes ; libellé « Niveau » en âge exact.
- `components/cards/MondesView.tsx` — libellé « Niveau : {age} ans ».
- `components/cards/DomaineView.tsx` — libellé « Niveau : {age} ans ».

---

## Task 1 : Module d'âge pur + tests

**Files:**
- Create: `lib/age.ts`
- Test: `tests/age.test.ts`

**Interfaces:**
- Produces : `trancheDepuisAge(age: number): AgeRange` ; `ageDepuisTranche(tier: AgeRange): number`.

- [ ] **Step 1 : Écrire les tests (qui échouent)**

Créer `tests/age.test.ts` :

```ts
import { describe, expect, it } from 'vitest';
import { AGE_RANGES } from '@/lib/types';
import { trancheDepuisAge, ageDepuisTranche } from '@/lib/age';

describe('trancheDepuisAge', () => {
  it('mappe les bornes de chaque tranche', () => {
    expect(trancheDepuisAge(3)).toBe('3-5');
    expect(trancheDepuisAge(5)).toBe('3-5');
    expect(trancheDepuisAge(6)).toBe('6-8');
    expect(trancheDepuisAge(8)).toBe('6-8');
    expect(trancheDepuisAge(9)).toBe('9-12');
    expect(trancheDepuisAge(12)).toBe('9-12');
  });

  it('borne les âges hors plage', () => {
    expect(trancheDepuisAge(2)).toBe('3-5');
    expect(trancheDepuisAge(15)).toBe('9-12');
  });
});

describe('ageDepuisTranche (migration)', () => {
  it('donne un âge qui retombe sur la même tranche (round-trip)', () => {
    for (const t of AGE_RANGES) {
      expect(trancheDepuisAge(ageDepuisTranche(t))).toBe(t);
    }
  });
});
```

- [ ] **Step 2 : Lancer les tests, vérifier l'échec**

Run : `npx vitest run tests/age.test.ts`
Expected : FAIL (`@/lib/age` n'existe pas).

- [ ] **Step 3 : Écrire le module**

Créer `lib/age.ts` :

```ts
import { type AgeRange } from './types';

/** Borne l'âge dans la plage couverte par le catalogue. */
function borner(age: number): number {
  return Math.min(12, Math.max(3, Math.round(age)));
}

/** Tranche d'âge dérivée d'un âge exact. */
export function trancheDepuisAge(age: number): AgeRange {
  const a = borner(age);
  if (a <= 5) return '3-5';
  if (a <= 8) return '6-8';
  return '9-12';
}

/** Âge représentatif d'une tranche, pour migrer l'ancien stockage. */
export function ageDepuisTranche(tier: AgeRange): number {
  switch (tier) {
    case '3-5':
      return 4;
    case '6-8':
      return 7;
    case '9-12':
      return 10;
  }
}
```

- [ ] **Step 4 : Lancer les tests, vérifier le succès**

Run : `npx vitest run tests/age.test.ts`
Expected : PASS.

- [ ] **Step 5 : Commit**

```bash
git add lib/age.ts tests/age.test.ts
git commit -m "Ajoute lib/age : dérivation tranche↔âge exact"
```

---

## Task 2 : Stockage de l'âge exact + pas-à-pas

**Files:**
- Modify: `components/age/useAgeRange.ts`
- Modify: `components/age/AgeGate.tsx`

**Interfaces:**
- Consumes : `trancheDepuisAge`, `ageDepuisTranche` (Task 1), `Silhouette` (déjà dans `AgeGate.tsx`).
- Produces : `useAgeRange()` renvoyant `{ age: number | null; ageRange: AgeRange | null; status: 'chargement' | 'pret'; choisirAge: (age: number) => void }`.

- [ ] **Step 1 : Réécrire `useAgeRange.ts`**

Remplacer intégralement `components/age/useAgeRange.ts` par :

```ts
'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { AGE_RANGES, type AgeRange } from '@/lib/types';
import { readStored, writeStored } from '@/lib/storage';
import { ageDepuisTranche, trancheDepuisAge } from '@/lib/age';

const KEY_AGE = 'science.age.v1';
// Ancienne clé (tranche). Encore lue pour migrer les utilisateurs existants,
// jamais écrite : la source de vérité est désormais l'âge exact.
const KEY_TRANCHE = 'science.ageRange.v1';

function parseAgeRange(value: string | null): AgeRange | null {
  return AGE_RANGES.includes(value as AgeRange) ? (value as AgeRange) : null;
}

function ageValide(value: string | null): number | null {
  if (value == null) return null;
  const n = Number(value);
  return Number.isInteger(n) && n >= 3 && n <= 12 ? n : null;
}

/*
  Âge résolu : la nouvelle clé si elle existe, sinon dérivé de l'ancienne tranche
  (migration douce, en lecture seule). Pur : aucune écriture ici, pour rester un
  `getSnapshot` valide.
*/
function lireAge(): number | null {
  const direct = ageValide(readStored(KEY_AGE));
  if (direct != null) return direct;
  const tranche = parseAgeRange(readStored(KEY_TRANCHE));
  return tranche ? ageDepuisTranche(tranche) : null;
}

const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function lireInstantane(): number | null {
  return lireAge();
}

/** Le serveur ne connaît aucun âge : l'écran de sélection est le rendu par défaut. */
function lireInstantaneServeur(): number | null {
  return null;
}

/**
 * Âge exact (3–12) et tranche dérivée.
 *
 * `status` distingue « pas encore lu côté client » de « lu, aucun âge » : les
 * deux produisent des écrans différents, sans quoi l'accueil clignoterait.
 */
export function useAgeRange() {
  const age = useSyncExternalStore(souscrire, lireInstantane, lireInstantaneServeur);
  const monte = useSyncExternalStore(
    souscrire,
    () => true,
    () => false,
  );

  const choisirAge = useCallback((valeur: number) => {
    writeStored(KEY_AGE, String(valeur));
    for (const notifier of abonnes) notifier();
  }, []);

  return {
    age,
    ageRange: age != null ? trancheDepuisAge(age) : null,
    status: monte ? ('pret' as const) : ('chargement' as const),
    choisirAge,
  };
}
```

- [ ] **Step 2 : Adapter le haut de `AgeGate.tsx` (imports, constantes, état)**

Dans `components/age/AgeGate.tsx`, remplacer la constante `CHOIX` (les trois tranches) par un helper de taille de silhouette :

Ancien :
```ts
const CHOIX: { range: AgeRange; diametre: number; label: string }[] = [
  { range: '3-5', diametre: 108, label: '3 à 5 ans' },
  { range: '6-8', diametre: 136, label: '6 à 8 ans' },
  { range: '9-12', diametre: 164, label: '9 à 12 ans' },
];
```
Nouveau :
```ts
// La silhouette grandit avec l'âge : 96px à 3 ans, 168px à 12 ans.
const tailleSilhouette = (age: number) => 96 + (age - 3) * 8;
```

Le type `AgeRange` n'étant plus utilisé directement ici, retirer son import s'il devient inutilisé (sinon `eslint` le signalera).

- [ ] **Step 3 : Adapter le corps du composant (`useAgeRange`, état, fonction `choisir`)**

Remplacer la ligne de destructuration :
```ts
  const { ageRange, status, chooseAgeRange } = useAgeRange();
```
par :
```ts
  const { age, ageRange, status, choisirAge } = useAgeRange();
```

Ajouter, à côté de `const [confirmation, setConfirmation] = useState(false);`, l'état d'édition de l'âge :
```ts
  // Âge en cours d'édition dans le pas-à-pas : l'âge courant si on vient changer,
  // sinon 7 par défaut. `age` est déjà résolu quand cet écran s'affiche.
  const [ageEdite, setAgeEdite] = useState<number>(age ?? 7);
```

Supprimer la fonction devenue inutile :
```ts
  function choisir(range: AgeRange) {
    chooseAgeRange(range);
    router.push('/');
  }
```

- [ ] **Step 4 : Mettre le libellé « Niveau » en âge exact**

Dans le menu du visiteur de retour, remplacer :
```tsx
            Niveau&nbsp;: {ageRange} ans — changer
```
par :
```tsx
            Niveau&nbsp;: {age} ans — changer
```

- [ ] **Step 5 : Remplacer le sélecteur (les trois silhouettes) par le pas-à-pas**

Remplacer tout le bloc `<ul className="flex flex-wrap items-end justify-center gap-6 sm:gap-10"> … </ul>` par :

```tsx
      {/*
        Pas-à-pas : on choisit un âge exact. Le grand chiffre sert l'adulte qui
        règle, la silhouette qui grandit sert l'enfant qui se reconnaît à sa
        taille — les deux repères, comme avant.
      */}
      <div className="flex flex-col items-center gap-8">
        <span
          className="halo-soleil flex items-end justify-center overflow-hidden rounded-full border-4 border-soleil bg-encre-clair text-soleil transition-[width,height] duration-200"
          style={{ width: tailleSilhouette(ageEdite), height: tailleSilhouette(ageEdite) }}
        >
          <span className="w-1/2" style={{ height: tailleSilhouette(ageEdite) * 0.62 }}>
            <Silhouette echelle={1} />
          </span>
        </span>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setAgeEdite((a) => Math.max(3, a - 1))}
            disabled={ageEdite <= 3}
            aria-label="Un an de moins"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 border-encre-bord font-display text-4xl text-craie transition-colors hover:border-soleil hover:text-soleil disabled:cursor-default disabled:opacity-30"
          >
            −
          </button>
          <span
            aria-hidden="true"
            className="w-24 text-center font-display text-6xl font-semibold text-craie"
          >
            {ageEdite}
          </span>
          <button
            type="button"
            onClick={() => setAgeEdite((a) => Math.min(12, a + 1))}
            disabled={ageEdite >= 12}
            aria-label="Un an de plus"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 border-encre-bord font-display text-4xl text-craie transition-colors hover:border-soleil hover:text-soleil disabled:cursor-default disabled:opacity-30"
          >
            +
          </button>
        </div>
        <span className="sr-only" aria-live="polite">
          {ageEdite} ans
        </span>

        <button
          type="button"
          onClick={() => {
            choisirAge(ageEdite);
            router.push('/');
          }}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-xl text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          C&apos;est parti
        </button>
      </div>
```

- [ ] **Step 6 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm test`
Expected : aucune erreur ; les tests de contenu et `tests/age.test.ts` passent.
Run : `npm run dev` → première visite : le pas-à-pas s'affiche à 7 ans, −/+ bornés à 3 et 12, la silhouette grandit, « C'est parti » enregistre et va au menu. Mode « changer » (`/?changer=1`) : repart de l'âge courant. Un utilisateur ayant l'ancienne clé garde son niveau (migration).

- [ ] **Step 7 : Commit**

```bash
git add components/age/useAgeRange.ts components/age/AgeGate.tsx
git commit -m "Choix de l'âge au pas-à-pas, stocké en âge exact (migration incluse)"
```

---

## Task 3 : Libellés « Niveau » en âge exact (Mondes, Domaine)

**Files:**
- Modify: `components/cards/MondesView.tsx`
- Modify: `components/cards/DomaineView.tsx`

- [ ] **Step 1 : `MondesView`**

Ajouter `age` à la destructuration :
```ts
  const { age, ageRange, status } = useAgeRange();
```
Puis remplacer dans le bouton de niveau :
```tsx
            Niveau&nbsp;: {ageRange} ans — changer
```
par :
```tsx
            Niveau&nbsp;: {age} ans — changer
```

- [ ] **Step 2 : `DomaineView`**

Même changement : ajouter `age` à la destructuration `useAgeRange`, puis remplacer `{ageRange}` par `{age}` dans le libellé « Niveau : … ans — changer ».

- [ ] **Step 3 : Vérifier**

Run : `npx tsc --noEmit && npm run lint`
Expected : aucune erreur (le lint signalerait `ageRange` devenu inutilisé — le retirer de la destructuration s'il n'est plus lu ailleurs dans le fichier ; il ne l'est pas dans `MondesView`/`DomaineView` en dehors du libellé).

- [ ] **Step 4 : Commit**

```bash
git add components/cards/MondesView.tsx components/cards/DomaineView.tsx
git commit -m "Affiche l'âge exact dans les libellés « Niveau »"
```

---

## Auto-revue (faite)

- **Couverture du spec** : pas-à-pas −/+ + silhouette qui grandit → Task 2 (Step 5) ; âge exact comme source de vérité + migration → Task 2 (Step 1) via `lib/age` (Task 1) ; `trancheDepuisAge`/`ageDepuisTranche` purs et testés → Task 1 ; `choisirAge` + `age` exposés, `ageRange` inchangé → Task 2 (Step 1) ; bouton « C'est parti » → Task 2 (Step 5) ; défaut 7 → Task 2 (Step 3) ; libellés en âge exact (3 emplacements) → Task 2 (Step 4, AgeGate) + Task 3 (Mondes, Domaine) ; bornes/clamp → Task 1 (`borner`) + boutons désactivés (Task 2). Hors-scope (héros A2) : silhouette conservée.
- **Placeholders** : aucun — code réel à chaque étape.
- **Cohérence des types** : `useAgeRange` renvoie `{ age, ageRange, status, choisirAge }` (Task 2) ; `AgeGate` (Task 2) et `MondesView`/`DomaineView` (Task 3) consomment exactement ces noms ; `choisirAge(valeur: number)` ; `trancheDepuisAge(age: number): AgeRange` et `ageDepuisTranche(tier: AgeRange): number` définis en Task 1 et consommés à l'identique dans `useAgeRange`.
- **`useSyncExternalStore`** : `getSnapshot` (`lireAge`) est pur et renvoie un nombre stable ; migration en lecture seule, aucune écriture dans le snapshot.
