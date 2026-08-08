# Gamification du quizz (E) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rendre le quizz gratifiant et donner envie de revenir : des étoiles gagnées par bonne réponse, cumulées, qui font monter en rang, avec une célébration de fin de série et un indicateur de progression au menu.

**Architecture:** Une clé `localStorage` `science.etoiles.v1` (total d'étoiles), un helper pur `lib/etoiles.ts` (rangs + `rangDepuisEtoiles`), un hook `useEtoiles` (sur le modèle de `useCartesVues`). `QuizView` crédite les étoiles à la fin d'une série et affiche la célébration ; `AgeGate` montre le rang au menu et couple la remise à zéro.

**Tech Stack:** Next.js 16 (Client Components), React (`useSyncExternalStore`), TypeScript, `localStorage` via `@/lib/storage`, Vitest (node).

## Global Constraints

- **Non-punitif** : les étoiles ne font que **monter** ; une mauvaise réponse ne rapporte rien mais ne retire rien. Aucun message de « série perdue » / d'échec.
- **Crédit unique par série** : les étoiles gagnées sont écrites **une seule fois**, au passage à l'écran final.
- **Non-lecteurs (3-5)** : rang représenté par une **icône**, étoiles **visuelles** ; le verdict audio existant est conservé.
- **Reset couplé** : « Oublier les cartes déjà écoutées » appelle aussi `oublierEtoiles()`.
- **Stockage** : clé `science.etoiles.v1` ; tout en `localStorage`, hors-ligne OK, aucune donnée personnelle.
- **Réutiliser** : le motif de `useCartesVues` (external store), `@/lib/storage` (`readStored`/`writeStored`), `domainStyles`, `rangDepuisEtoiles`.
- Tests en **node** : la logique pure est testée unitairement ; les composants sont validés par `tsc`/`lint`/`build` + vérification manuelle.

---

## Structure des fichiers

**Créés**
- `lib/etoiles.ts` — `RANGS`, `rangDepuisEtoiles`, `lireEtoiles` (purs).
- `tests/etoiles.test.ts` — tests des trois.
- `components/quiz/useEtoiles.ts` — hook (total, gain, remise à zéro).

**Modifiés**
- `components/quiz/QuizView.tsx` — gain in-quiz (étoiles + série d'affilée), crédit + célébration de rang en fin de série.
- `components/age/AgeGate.tsx` — indicateur de progression au menu ; reset couplé.

---

## Task 1 : Rangs et étoiles (pur) + tests

**Files:**
- Create: `lib/etoiles.ts`
- Test: `tests/etoiles.test.ts`

**Interfaces:**
- Produces :
  - `interface Rang { index: number; nom: string; icone: string; seuil: number }`
  - `RANGS: Rang[]`
  - `rangDepuisEtoiles(total: number): { rang: Rang; rangProchain: Rang | null }`
  - `lireEtoiles(brut: string | null): number`

- [ ] **Step 1 : Écrire les tests (qui échouent)**

Créer `tests/etoiles.test.ts` :

```ts
import { describe, expect, it } from 'vitest';
import { RANGS, rangDepuisEtoiles, lireEtoiles } from '@/lib/etoiles';

describe('rangDepuisEtoiles', () => {
  it('donne Apprenti à 0 et sous le premier palier', () => {
    expect(rangDepuisEtoiles(0).rang.nom).toBe('Apprenti');
    expect(rangDepuisEtoiles(19).rang.nom).toBe('Apprenti');
    expect(rangDepuisEtoiles(0).rangProchain?.nom).toBe('Explorateur');
  });

  it('monte de rang pile au seuil', () => {
    expect(rangDepuisEtoiles(20).rang.nom).toBe('Explorateur');
    expect(rangDepuisEtoiles(49).rang.nom).toBe('Explorateur');
    expect(rangDepuisEtoiles(50).rang.nom).toBe('Aventurier');
  });

  it('plafonne au dernier rang, sans rang suivant', () => {
    const dernier = RANGS[RANGS.length - 1];
    expect(rangDepuisEtoiles(dernier.seuil).rang.nom).toBe(dernier.nom);
    expect(rangDepuisEtoiles(dernier.seuil + 1000).rang.nom).toBe(dernier.nom);
    expect(rangDepuisEtoiles(dernier.seuil).rangProchain).toBeNull();
  });

  it('borne un total négatif au premier rang', () => {
    expect(rangDepuisEtoiles(-5).rang.index).toBe(0);
  });
});

describe('lireEtoiles', () => {
  it('lit un entier valide, sinon 0', () => {
    expect(lireEtoiles('42')).toBe(42);
    expect(lireEtoiles(null)).toBe(0);
    expect(lireEtoiles('-5')).toBe(0);
    expect(lireEtoiles('abc')).toBe(0);
    expect(lireEtoiles('3.9')).toBe(3);
  });
});
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run : `npx vitest run tests/etoiles.test.ts`
Expected : FAIL (`@/lib/etoiles` n'existe pas).

- [ ] **Step 3 : Écrire le module**

Créer `lib/etoiles.ts` :

```ts
export interface Rang {
  index: number;
  nom: string;
  icone: string;
  /** Nombre d'étoiles à partir duquel ce rang est atteint. */
  seuil: number;
}

export const RANGS: Rang[] = [
  { index: 0, nom: 'Apprenti', icone: '🔭', seuil: 0 },
  { index: 1, nom: 'Explorateur', icone: '🧭', seuil: 20 },
  { index: 2, nom: 'Aventurier', icone: '🚀', seuil: 50 },
  { index: 3, nom: 'Chercheur', icone: '🔬', seuil: 100 },
  { index: 4, nom: 'Savant', icone: '🎓', seuil: 175 },
  { index: 5, nom: 'Génie', icone: '🧠', seuil: 275 },
];

/** Rang courant et rang suivant (ou `null` au dernier) pour un total d'étoiles. */
export function rangDepuisEtoiles(total: number): { rang: Rang; rangProchain: Rang | null } {
  const n = Math.max(0, Math.floor(total));
  let rang = RANGS[0];
  for (const r of RANGS) if (n >= r.seuil) rang = r;
  return { rang, rangProchain: RANGS[rang.index + 1] ?? null };
}

/** Total d'étoiles depuis la valeur stockée : entier positif, sinon 0. */
export function lireEtoiles(brut: string | null): number {
  if (brut == null) return 0;
  const n = Number(brut);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}
```

- [ ] **Step 4 : Lancer, vérifier le succès**

Run : `npx vitest run tests/etoiles.test.ts`
Expected : PASS.

- [ ] **Step 5 : Commit**

```bash
git add lib/etoiles.ts tests/etoiles.test.ts
git commit -m "Ajoute lib/etoiles : rangs et dérivation depuis le total"
```

---

## Task 2 : Hook `useEtoiles`

**Files:**
- Create: `components/quiz/useEtoiles.ts`

**Interfaces:**
- Consumes : `lireEtoiles` (Task 1), `readStored`/`writeStored` (`@/lib/storage`).
- Produces : `useEtoiles(): { etoiles: number; gagnerEtoiles: (n: number) => void; oublierEtoiles: () => void }`.

- [ ] **Step 1 : Écrire le hook**

Créer `components/quiz/useEtoiles.ts` (sur le modèle de `components/cards/useCartesVues.ts`) :

```ts
'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';
import { lireEtoiles } from '@/lib/etoiles';

const CLE = 'science.etoiles.v1';

const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function lire(): string {
  return readStored(CLE) ?? '0';
}

function lireServeur(): string {
  return '0';
}

function publier(valeur: string) {
  writeStored(CLE, valeur);
  for (const notifier of abonnes) notifier();
}

/**
 * Total d'étoiles gagnées au quizz, source de la progression.
 *
 * Publié comme les cartes vues : tout composant abonné (l'écran de quizz, le
 * menu) se met à jour dès qu'on gagne une étoile.
 */
export function useEtoiles() {
  const brut = useSyncExternalStore(souscrire, lire, lireServeur);

  const gagnerEtoiles = useCallback((n: number) => {
    if (n <= 0) return;
    const total = lireEtoiles(readStored(CLE)) + Math.floor(n);
    publier(String(total));
  }, []);

  const oublierEtoiles = useCallback(() => {
    publier('0');
  }, []);

  return { etoiles: lireEtoiles(brut), gagnerEtoiles, oublierEtoiles };
}
```

- [ ] **Step 2 : Vérifier**

Run : `npx tsc --noEmit && npm run lint`
Expected : aucune erreur.

- [ ] **Step 3 : Commit**

```bash
git add components/quiz/useEtoiles.ts
git commit -m "Ajoute le hook useEtoiles (total persistant)"
```

---

## Task 3 : Étoiles gagnées et célébration dans `QuizView`

**Files:**
- Modify: `components/quiz/QuizView.tsx`

**Interfaces:**
- Consumes : `useEtoiles` (Task 2), `rangDepuisEtoiles`, `type Rang` (Task 1).

- [ ] **Step 1 : Imports et état**

Ajouter les imports (près des autres imports de `QuizView.tsx`) :
```ts
import { rangDepuisEtoiles, type Rang } from '@/lib/etoiles';
import { useEtoiles } from './useEtoiles';
```

Juste après `const [reussies, setReussies] = useState(0);` :
```ts
  const { etoiles, gagnerEtoiles } = useEtoiles();
  // Bonnes réponses consécutives, pour un encouragement positif (jamais négatif).
  const [dAffilee, setDAffilee] = useState(0);
  // Rang avant le crédit de fin de série, pour détecter un passage de rang.
  const [rangAvant, setRangAvant] = useState<Rang | null>(null);
```

- [ ] **Step 2 : Compter la série d'affilée à la réponse**

Dans le bouton de proposition, remplacer le `onClick` existant :
```tsx
                onClick={() => {
                  setChoisie(i);
                  if (reponse.correcte) setReussies((n) => n + 1);
                  jouerVerdict(
                    tirage.carte.id,
                    tirage.question.id,
                    reponse.correcte ? 'juste' : 'presque',
                  );
                }}
```
par :
```tsx
                onClick={() => {
                  setChoisie(i);
                  if (reponse.correcte) {
                    setReussies((n) => n + 1);
                    setDAffilee((d) => d + 1);
                  } else {
                    // Remise à zéro silencieuse : aucun message de « série perdue ».
                    setDAffilee(0);
                  }
                  jouerVerdict(
                    tirage.carte.id,
                    tirage.question.id,
                    reponse.correcte ? 'juste' : 'presque',
                  );
                }}
```

- [ ] **Step 3 : Créditer les étoiles au passage à l'écran final (crédit unique)**

Remplacer le `onClick` du bouton « Question suivante / Voir le résultat » :
```tsx
            onClick={() => {
              // Couper l'explication en cours : sans lui, aux âges où l'énoncé
              // suivant n'est pas lu (6-8, 9-12), la voix déborderait sur la
              // question suivante. Chez les 3-5 ans, la lecture du nouvel énoncé
              // reprend juste après.
              arreter();
              setIndex((n) => n + 1);
              setChoisie(null);
            }}
```
par :
```tsx
            onClick={() => {
              arreter();
              // Dernière question : on crédite les étoiles une seule fois, en
              // capturant le rang d'avant pour détecter un passage de rang.
              if (index + 1 >= serie.length) {
                setRangAvant(rangDepuisEtoiles(etoiles).rang);
                gagnerEtoiles(reussies);
              }
              setIndex((n) => n + 1);
              setChoisie(null);
            }}
```

- [ ] **Step 4 : Réinitialiser à « C'est parti »**

Dans le `onClick` du bouton « C'est parti » (écran `!serie`), ajouter les remises à zéro :
```tsx
          onClick={() => {
            setSerie(construireSerie(cards, cartesVues, ageRange));
            setIndex(0);
            setChoisie(null);
            setReussies(0);
          }}
```
devient :
```tsx
          onClick={() => {
            setSerie(construireSerie(cards, cartesVues, ageRange));
            setIndex(0);
            setChoisie(null);
            setReussies(0);
            setDAffilee(0);
            setRangAvant(null);
          }}
```

- [ ] **Step 5 : Rangée d'étoiles + « en pleine forme » pendant le quizz**

Dans l'écran de question (le `return` final), juste après le `<header>…</header>`, insérer la rangée d'étoiles de la série :
```tsx
      <div className="flex justify-center gap-1" aria-hidden="true">
        {serie.map((_, i) => (
          <span key={i} className={i < reussies ? 'text-xl' : 'text-xl opacity-25'}>
            ⭐
          </span>
        ))}
      </div>
```

Dans le bloc `{repondu && ( … )}`, juste après le paragraphe du verdict (« Bravo… / Pas tout à fait… »), ajouter l'encouragement positif :
```tsx
          {justeChoisie && dAffilee >= 3 && (
            <p className="font-display text-base text-soleil">En pleine forme&nbsp;! 🔥</p>
          )}
```

- [ ] **Step 6 : Écran final festif (crédit déjà fait, on affiche)**

Remplacer le bloc de l'écran de fin de série (`if (index >= serie.length) { return ( … ); }`) par :
```tsx
  if (index >= serie.length) {
    const rangApres = rangDepuisEtoiles(etoiles);
    const monteEnRang = rangAvant != null && rangApres.rang.index > rangAvant.index;
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          {reussies === serie.length ? '🌟' : '👏'}
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {reussies} bonne{reussies > 1 ? 's' : ''} réponse
          {reussies > 1 ? 's' : ''} sur {serie.length}
        </h1>

        {/* Étoiles gagnées et total, jamais de sanction. */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-display text-2xl text-soleil">
            +{reussies} <span aria-hidden="true">⭐</span>
          </p>
          <p className="text-craie-douce">
            <span aria-hidden="true">⭐</span> {etoiles} au total —{' '}
            <span aria-hidden="true">{rangApres.rang.icone}</span> {rangApres.rang.nom}
          </p>
        </div>

        {monteEnRang && (
          <p className="font-display text-xl text-soleil">
            Nouveau rang : <span aria-hidden="true">{rangApres.rang.icone}</span>{' '}
            {rangApres.rang.nom}&nbsp;!
          </p>
        )}

        {/* Aucun échec possible : on encourage, on ne sanctionne pas. */}
        <p className="max-w-md text-craie-douce">
          Chaque question t&apos;a rappelé quelque chose. Rejoue quand tu veux, les
          questions changent.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setSerie(null)}
            className="min-h-16 cursor-pointer rounded-full border-2 border-soleil px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            Rejouer
          </button>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="min-h-16 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-lg text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            Retour au menu
          </button>
        </div>
      </main>
    );
  }
```

- [ ] **Step 7 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm test`
Expected : aucune erreur ; les tests existants + `tests/etoiles.test.ts` passent.
Run : `npm run dev` → jouer une série : la rangée d'étoiles se remplit aux bonnes réponses, « En pleine forme ! » après 3 d'affilée, l'écran final affiche « +N ⭐ », le total et le rang ; en atteignant un seuil, le message « Nouveau rang ». Une mauvaise réponse ne retire jamais rien.

- [ ] **Step 8 : Commit**

```bash
git add components/quiz/QuizView.tsx
git commit -m "Quizz : gagne des étoiles, série d'affilée et célébration de rang"
```

---

## Task 4 : Indicateur au menu + reset couplé (`AgeGate`)

**Files:**
- Modify: `components/age/AgeGate.tsx`

**Interfaces:**
- Consumes : `useEtoiles` (Task 2), `rangDepuisEtoiles` (Task 1).

- [ ] **Step 1 : Imports et lecture**

Ajouter les imports :
```ts
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { useEtoiles } from '@/components/quiz/useEtoiles';
```

Dans le composant, à côté de `const { cartesVues, oublierToutesLesVues } = useCartesVues();` :
```ts
  const { etoiles, oublierEtoiles } = useEtoiles();
```

- [ ] **Step 2 : Indicateur de progression dans le menu**

Dans le bloc du visiteur de retour (`ageRange && !changementDemande`), à l'intérieur du `<div className="flex w-full max-w-sm flex-col gap-4">` qui contient « Découvrir » et « Jouer au quizz », **après** le bouton du quizz, insérer l'indicateur :
```tsx
          {(() => {
            const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
            const reste = rangProchain ? rangProchain.seuil - etoiles : 0;
            return (
              <div className="flex flex-col items-center gap-1 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 py-4">
                <p className="font-display text-lg text-craie">
                  <span aria-hidden="true">{rang.icone}</span> {rang.nom} —{' '}
                  <span aria-hidden="true">⭐</span> {etoiles}
                </p>
                {rangProchain && (
                  <p className="text-sm text-craie-douce">
                    plus que {reste} <span aria-hidden="true">⭐</span> pour {rangProchain.nom}
                  </p>
                )}
              </div>
            );
          })()}
```

- [ ] **Step 3 : Coupler la remise à zéro**

Dans le bouton de réinitialisation (mode `changer`, « Oublier les … cartes déjà écoutées »), ajouter l'oubli des étoiles à l'action de confirmation :
```tsx
          onClick={() => {
            if (!confirmation) {
              setConfirmation(true);
              return;
            }
            oublierToutesLesVues();
            setConfirmation(false);
          }}
```
devient :
```tsx
          onClick={() => {
            if (!confirmation) {
              setConfirmation(true);
              return;
            }
            oublierToutesLesVues();
            oublierEtoiles();
            setConfirmation(false);
          }}
```

- [ ] **Step 4 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm run build`
Expected : aucune erreur ; build OK.
Run : `npm run dev` → au menu, l'indicateur montre le rang, le total et « plus que N ⭐ pour <rang suivant> ». Après avoir gagné des étoiles au quizz, le total monte. En mode « changer », confirmer « Oublier les cartes » remet aussi les étoiles à zéro.

- [ ] **Step 5 : Commit**

```bash
git add components/age/AgeGate.tsx
git commit -m "Menu : indicateur de rang/étoiles et reset couplé"
```

---

## Auto-revue (faite)

- **Couverture du spec** : étoiles cumulées + `useEtoiles` → Task 2 ; rangs + `rangDepuisEtoiles` purs et testés → Task 1 ; gain in-quiz (rangée d'étoiles) + série d'affilée positive → Task 3 (Steps 2, 5) ; crédit unique en fin de série → Task 3 (Step 3) ; célébration + rang-up → Task 3 (Step 6) ; indicateur au menu (prochain rang) → Task 4 (Step 2) ; reset couplé → Task 4 (Step 3) ; non-punitif (aucun retrait, pas de « série perdue ») → Task 3 (Steps 2, 6). Hors-scope (héros visuel évolutif) : non implémenté.
- **Placeholders** : aucun — code réel à chaque étape. Les noms/seuils de rangs sont des valeurs de conception validées, ajustables dans `RANGS`.
- **Cohérence des types** : `rangDepuisEtoiles(total) → { rang: Rang; rangProchain: Rang | null }` (Task 1) consommé à l'identique dans `QuizView` (`rangApres.rang.index/icone/nom`) et `AgeGate` (`rang`, `rangProchain.seuil/nom`) ; `useEtoiles() → { etoiles, gagnerEtoiles, oublierEtoiles }` (Task 2) consommé par `QuizView` (`etoiles`, `gagnerEtoiles`) et `AgeGate` (`etoiles`, `oublierEtoiles`) ; `lireEtoiles` partagé entre le hook et les tests.
- **Non-régression** : le quizz garde son flux (série, verdict, explication, Rejouer/Menu) ; seules des couches additives (étoiles, rang) s'ajoutent.
