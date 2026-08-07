# « Découvrir » par domaine (B1) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer la page « Découvrir » (filtre multi-select + grille de 100 cartes) par une navigation à deux niveaux : une grille des 10 « mondes » avec anneau de progression, puis les cartes d'un domaine sur sa propre route.

**Architecture:** `/decouvrir` (Server Component) rend `MondesView` (grille des 10 domaines) ; `/decouvrir/[domaine]` (route dynamique, `generateStaticParams`) rend `DomaineView` (cartes du domaine, réutilisant `CardGrid`/`CardModal`/`Paywall`). La progression vient d'un helper pur `progressionDomaine` sur `useCartesVues`. `DomainFilter` et `DiscoverView` sont supprimés.

**Tech Stack:** Next.js 16 App Router (Server + Client Components), TypeScript, React, SVG, Vitest (environnement node), `localStorage` via `useCartesVues`.

## Global Constraints

- **Next 16** : dans une page dynamique, `params` est une **`Promise`** → `const { domaine } = await params`. `generateStaticParams` retourne `Array<{ domaine: string }>`. `redirect(path)` de `next/navigation`, appelé **hors** de tout `try/catch`, utilisable dans un Server Component.
- **Slug de domaine = id du domaine** (`biologie`, `sciences-de-la-terre`, `animaux`, `meteo`…). Slug inconnu → `redirect('/decouvrir')`.
- **Pas d'âge choisi** (côté client) → `router.replace('/')` dans un `useEffect` (motif de l'actuel `DiscoverView`), jamais le `redirect` serveur.
- **3-5 ans** : le label du domaine et le titre des cartes sont `sr-only` ; la reconnaissance passe par l'emoji et la couleur.
- **Accessibilité** : toute information portée par le rendu (progression, extinction, verrou) doit aussi être dite en `sr-only`.
- **Couleurs de domaine** : `domainStyles[id].teinte` / `.halo` (jamais de classe Tailwind dynamique).
- **Réutiliser tel quel** : `CardGrid`, `CardTile`, `CardModal`, `Paywall`, `useCartesVues`, `useEntitlement`, `useAgeRange`, `estPremium` (`@/content/acces`), `premiumActif` (`@/lib/premium/flag`).
- **Hors périmètre** : accroches (chantier C), routes par carte (B2), badges/héros (E).
- Tests en **environnement node** (pas de rendu de composant) : seule la logique pure est testée unitairement ; les composants sont validés par `tsc`/`lint`/`build` + vérification manuelle.

---

## Structure des fichiers

**Créés**
- `lib/progression.ts` — helper pur `progressionDomaine`.
- `tests/progression.test.ts` — tests du helper + garde-fous des routes de domaine.
- `components/cards/MondeTile.tsx` — tuile d'un monde (hublot + anneau de progression).
- `components/cards/MondesView.tsx` — niveau 1 : grille des mondes.
- `components/cards/DomaineView.tsx` — niveau 2 : cartes d'un domaine.
- `app/decouvrir/[domaine]/page.tsx` — route dynamique (Server Component).

**Modifiés**
- `app/decouvrir/page.tsx` — rend `MondesView`.
- `public/sw.js` — `SHELL` + `VERSION`.

**Supprimés**
- `components/cards/DiscoverView.tsx`
- `components/domains/DomainFilter.tsx`

---

## Task 1 : Helper de progression + garde-fous des routes

**Files:**
- Create: `lib/progression.ts`
- Test: `tests/progression.test.ts`

**Interfaces:**
- Produces : `progressionDomaine(cards: ScienceCard[], cartesVues: Set<string>, domainId: DomainId): { vues: number; total: number }`.

- [ ] **Step 1 : Écrire les tests (qui échouent)**

Créer `tests/progression.test.ts` :

```ts
import { describe, expect, it } from 'vitest';
import { progressionDomaine } from '@/lib/progression';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';

describe('progressionDomaine', () => {
  it('compte le total des cartes du domaine', () => {
    const { total } = progressionDomaine(cards, new Set(), 'meteo');
    expect(total).toBe(cards.filter((c) => c.domainId === 'meteo').length);
  });

  it('compte les cartes vues du domaine, et elles seules', () => {
    const duDomaine = cards.filter((c) => c.domainId === 'animaux');
    const vues = new Set([duDomaine[0].id, duDomaine[1].id, 'carte-dun-autre-domaine']);
    const p = progressionDomaine(cards, vues, 'animaux');
    expect(p.vues).toBe(2);
    expect(p.total).toBe(duDomaine.length);
  });

  it('renvoie 0 vue quand rien n’est vu', () => {
    expect(progressionDomaine(cards, new Set(), 'physique').vues).toBe(0);
  });

  it('atteint total quand tout le domaine est vu', () => {
    const duDomaine = cards.filter((c) => c.domainId === 'chimie');
    const vues = new Set(duDomaine.map((c) => c.id));
    const p = progressionDomaine(cards, vues, 'chimie');
    expect(p.vues).toBe(p.total);
  });
});

describe('routes de domaine', () => {
  it('chaque domaine a au moins une carte (aucun monde vide)', () => {
    for (const d of domains) {
      expect(cards.some((c) => c.domainId === d.id), `domaine vide : ${d.id}`).toBe(true);
    }
  });

  it('chaque id de domaine est un slug d’URL sûr', () => {
    for (const d of domains) {
      expect(d.id, `slug invalide : ${d.id}`).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
```

- [ ] **Step 2 : Lancer les tests, vérifier l'échec**

Run : `npx vitest run tests/progression.test.ts`
Expected : FAIL (`progressionDomaine` n'existe pas).

- [ ] **Step 3 : Écrire le helper**

Créer `lib/progression.ts` :

```ts
import type { DomainId, ScienceCard } from './types';

export interface ProgressionDomaine {
  vues: number;
  total: number;
}

/**
 * Progression d'un domaine : nombre de cartes écoutées sur le total du domaine.
 * Fonction pure (aucun accès au navigateur), pour rester testable en node.
 */
export function progressionDomaine(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  domainId: DomainId,
): ProgressionDomaine {
  const duDomaine = cards.filter((c) => c.domainId === domainId);
  const vues = duDomaine.reduce((n, c) => (cartesVues.has(c.id) ? n + 1 : n), 0);
  return { vues, total: duDomaine.length };
}
```

- [ ] **Step 4 : Lancer les tests, vérifier le succès**

Run : `npx vitest run tests/progression.test.ts`
Expected : PASS.

- [ ] **Step 5 : Commit**

```bash
git add lib/progression.ts tests/progression.test.ts
git commit -m "Ajoute progressionDomaine et les garde-fous des routes de domaine"
```

---

## Task 2 : Tuile d'un monde (`MondeTile`)

**Files:**
- Create: `components/cards/MondeTile.tsx`

**Interfaces:**
- Consumes : `progressionDomaine` (Task 1), `domainStyles` (`@/lib/domain-styles`), types `DomainDefinition`, `AgeRange`.
- Produces : `MondeTile` (props `domain`, `vues`, `total`, `ageRange`, `index`).

- [ ] **Step 1 : Écrire le composant**

Créer `components/cards/MondeTile.tsx` :

```tsx
'use client';

import Link from 'next/link';
import type { AgeRange, DomainDefinition } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';

interface MondeTileProps {
  domain: DomainDefinition;
  vues: number;
  total: number;
  ageRange: AgeRange;
  /** Rang dans la grille, pour l'allumage en séquence. */
  index: number;
}

// Rayon et circonférence de l'anneau de progression (viewBox 100×100).
const R = 46;
const C = 2 * Math.PI * R;

/**
 * Un « monde » : le hublot d'un domaine, cerclé d'un anneau de progression qui
 * se remplit à mesure des cartes écoutées. Domaine complet = anneau plein +
 * coche. Le label est masqué pour les 3-5 ans (reconnaissance par emoji/couleur),
 * mais la progression est toujours dite en `sr-only`.
 */
export function MondeTile({ domain, vues, total, ageRange, index }: MondeTileProps) {
  const style = domainStyles[domain.id];
  const complet = total > 0 && vues >= total;
  const fraction = total > 0 ? vues / total : 0;

  return (
    <li>
      <Link
        href={`/decouvrir/${domain.id}`}
        className="group flex w-40 cursor-pointer flex-col items-center gap-3 rounded-3xl p-2 transition-transform duration-150 hover:scale-105 active:scale-95 sm:w-44"
        style={{ animation: 'allumage 500ms ease-out backwards', animationDelay: `${index * 70}ms` }}
      >
        <span className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
          {/* Anneau de progression */}
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="50" cy="50" r={R} fill="none" stroke="var(--color-encre-bord)" strokeWidth="6" />
            <circle
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke={style.teinte}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${fraction * C} ${C}`}
              style={{ transition: 'stroke-dasharray 500ms ease' }}
            />
          </svg>
          {/* Disque + emoji */}
          <span
            className="flex h-24 w-24 items-center justify-center rounded-full text-5xl sm:h-28 sm:w-28"
            style={{
              backgroundColor: 'var(--color-encre-clair)',
              boxShadow: complet ? 'none' : `0 0 28px ${style.halo}`,
            }}
          >
            {domain.icon}
          </span>
          {/* Coche quand le monde est terminé */}
          {complet && (
            <span
              aria-hidden="true"
              className="absolute bottom-1 right-1 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-encre"
              style={{ backgroundColor: '#34d399' }}
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <path d="M5 13l4.5 4.5L19 7" fill="none" stroke="var(--color-encre)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </span>

        {/* Label : masqué pour les 3-5 ans, comme les cartes */}
        <span className={ageRange === '3-5' ? 'sr-only' : 'text-center font-display text-base font-medium text-craie'}>
          {domain.labels.fr}
        </span>
        {/* Compteur discret pour lecteurs/parents */}
        {ageRange !== '3-5' && (
          <span aria-hidden="true" className="text-sm text-craie-douce">
            {vues}/{total}
          </span>
        )}
        {/* Toujours dit pour l'accessibilité */}
        <span className="sr-only">
          {domain.labels.fr}, {vues} carte{vues > 1 ? 's' : ''} sur {total} écoutée{vues > 1 ? 's' : ''}
          {complet ? ', terminé' : ''}
        </span>
      </Link>
    </li>
  );
}
```

- [ ] **Step 2 : Vérifier la compilation**

Run : `npx tsc --noEmit`
Expected : aucune erreur.

- [ ] **Step 3 : Commit**

```bash
git add components/cards/MondeTile.tsx
git commit -m "Ajoute MondeTile : hublot de domaine avec anneau de progression"
```

---

## Task 3 : Niveau 1 — grille des mondes (`MondesView`) branchée sur `/decouvrir`

**Files:**
- Create: `components/cards/MondesView.tsx`
- Modify: `app/decouvrir/page.tsx`

**Interfaces:**
- Consumes : `MondeTile` (Task 2), `progressionDomaine` (Task 1), `useAgeRange`, `useCartesVues`.
- Produces : `MondesView` (props `cards: ScienceCard[]`, `domains: DomainDefinition[]`).

- [ ] **Step 1 : Écrire `MondesView`**

Créer `components/cards/MondesView.tsx` :

```tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { useAgeRange } from '@/components/age/useAgeRange';
import { progressionDomaine } from '@/lib/progression';
import { MondeTile } from './MondeTile';
import { useCartesVues } from './useCartesVues';

interface MondesViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

export function MondesView({ cards, domains }: MondesViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();

  // Accès direct sans âge choisi : retour à l'accueil (motif de DiscoverView).
  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Qu&apos;est-ce qui t&apos;intéresse&nbsp;?
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">🏠</span> Menu
          </button>
          <button
            type="button"
            onClick={() => router.push('/?changer=1')}
            className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            Niveau&nbsp;: {ageRange} ans — changer
          </button>
        </div>
      </header>

      <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {domains.map((domain, index) => {
          const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
          return (
            <MondeTile
              key={domain.id}
              domain={domain}
              vues={vues}
              total={total}
              ageRange={ageRange}
              index={index}
            />
          );
        })}
      </ul>
    </main>
  );
}
```

- [ ] **Step 2 : Brancher la page `/decouvrir`**

Remplacer le contenu de `app/decouvrir/page.tsx` :

```tsx
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { MondesView } from '@/components/cards/MondesView';

/**
 * Server Component : catalogue statique importé au build. La page d'accueil de
 * Découvrir est désormais la grille des mondes.
 */
export default function DecouvrirPage() {
  return <MondesView cards={cards} domains={domains} />;
}
```

- [ ] **Step 3 : Vérifier**

Run : `npx tsc --noEmit && npm run lint`
Expected : aucune erreur.
Run : `npm run dev` puis ouvrir `/decouvrir` : la grille des 10 mondes s'affiche, les anneaux reflètent les cartes déjà écoutées.

- [ ] **Step 4 : Commit**

```bash
git add components/cards/MondesView.tsx app/decouvrir/page.tsx
git commit -m "Découvrir affiche la grille des mondes (niveau 1)"
```

---

## Task 4 : Niveau 2 — route et vue d'un domaine

**Files:**
- Create: `app/decouvrir/[domaine]/page.tsx`
- Create: `components/cards/DomaineView.tsx`

**Interfaces:**
- Consumes : `CardGrid`, `CardModal`, `Paywall`, `useAgeRange`, `useCartesVues`, `useEntitlement`, `estPremium`, `premiumActif`, `redirect`/`generateStaticParams` (Next).
- Produces : route `/decouvrir/[domaine]` ; `DomaineView` (props `domain: DomainDefinition`, `cards: ScienceCard[]`).

- [ ] **Step 1 : Écrire la route dynamique (Server Component)**

Créer `app/decouvrir/[domaine]/page.tsx` :

```tsx
import { redirect } from 'next/navigation';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { DomaineView } from '@/components/cards/DomaineView';

/** Une route statique par domaine, pré-générée au build. */
export function generateStaticParams() {
  return domains.map((d) => ({ domaine: d.id }));
}

export default async function DomainePage({
  params,
}: {
  params: Promise<{ domaine: string }>;
}) {
  const { domaine } = await params;
  const domain = domains.find((d) => d.id === domaine);
  // Slug inconnu : retour doux à la grille des mondes, plutôt qu'un 404.
  if (!domain) redirect('/decouvrir');

  const cartesDuDomaine = cards.filter((c) => c.domainId === domain.id);
  return <DomaineView domain={domain} cards={cartesDuDomaine} />;
}
```

- [ ] **Step 2 : Écrire `DomaineView`**

Créer `components/cards/DomaineView.tsx` (reprend `ouvrirCarte`/`estVerrouillee`/extinction de l'ancien `DiscoverView`, borné au domaine) :

```tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { useAgeRange } from '@/components/age/useAgeRange';
import { estPremium } from '@/content/acces';
import { premiumActif } from '@/lib/premium/flag';
import { useEntitlement } from '@/components/premium/useEntitlement';
import { Paywall } from '@/components/premium/Paywall';
import { CardGrid } from './CardGrid';
import { CardModal } from './CardModal';
import { useCartesVues } from './useCartesVues';

interface DomaineViewProps {
  domain: DomainDefinition;
  cards: ScienceCard[];
}

/** Alloué une fois : passer un Set neuf à chaque rendu ferait diffuser CardGrid. */
const AUCUNE = new Set<string>();

export function DomaineView({ domain, cards }: DomaineViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { premium } = useEntitlement();
  const [paywallOuvert, setPaywallOuvert] = useState(false);
  const [carteOuverte, setCarteOuverte] = useState<ScienceCard | null>(null);

  const estVerrouillee = (card: ScienceCard) =>
    premiumActif() && estPremium(card) && !premium;

  function ouvrirCarte(card: ScienceCard) {
    if (estVerrouillee(card)) setPaywallOuvert(true);
    else setCarteOuverte(card);
  }

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  // Extinction bornée au domaine : quand tout le domaine est vu, tout se rallume.
  const vuesIci = cards.reduce((n, c) => (cartesVues.has(c.id) ? n + 1 : n), 0);
  const cartesEteintes = vuesIci >= cards.length ? AUCUNE : cartesVues;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/decouvrir')}
            className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">←</span> Les mondes
          </button>
          <button
            type="button"
            onClick={() => router.push('/?changer=1')}
            className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            Niveau&nbsp;: {ageRange} ans — changer
          </button>
        </div>
        <h1 className="flex items-center gap-3 font-display text-3xl font-semibold sm:text-4xl">
          <span aria-hidden="true">{domain.icon}</span> {domain.labels.fr}
        </h1>
      </header>

      <CardGrid
        cards={cards}
        ageRange={ageRange}
        cartesVues={cartesVues}
        cartesEteintes={cartesEteintes}
        estVerrouillee={estVerrouillee}
        onSelectCard={ouvrirCarte}
      />

      {carteOuverte && (
        <CardModal
          key={carteOuverte.id}
          card={carteOuverte}
          ageRange={ageRange}
          onClose={() => setCarteOuverte(null)}
        />
      )}

      {paywallOuvert && <Paywall onClose={() => setPaywallOuvert(false)} />}
    </main>
  );
}
```

- [ ] **Step 3 : Vérifier**

Run : `npx tsc --noEmit && npm run lint`
Expected : aucune erreur.
Run : `npm run dev` → depuis `/decouvrir`, cliquer un monde ouvre `/decouvrir/<id>` avec ses cartes ; ouvrir une carte (modale) fonctionne ; « ← Les mondes » revient à la grille ; une URL inconnue `/decouvrir/nimportequoi` redirige vers `/decouvrir`.

- [ ] **Step 4 : Commit**

```bash
git add app/decouvrir/[domaine]/page.tsx components/cards/DomaineView.tsx
git commit -m "Ajoute la route et la vue d'un domaine (niveau 2)"
```

---

## Task 5 : Retirer le code remplacé

**Files:**
- Delete: `components/cards/DiscoverView.tsx`
- Delete: `components/domains/DomainFilter.tsx`

- [ ] **Step 1 : Vérifier qu'ils ne sont plus référencés**

Run : `grep -rn "DiscoverView\|DomainFilter" app components content lib | grep -v node_modules`
Expected : aucune occurrence (hormis les fichiers eux-mêmes).

- [ ] **Step 2 : Supprimer les fichiers**

```bash
git rm components/cards/DiscoverView.tsx components/domains/DomainFilter.tsx
```

(Si `components/domains/` devient vide, le supprimer aussi.)

- [ ] **Step 3 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm test`
Expected : tout passe (le contenu n'est pas touché ; `progression.test.ts` inclus).

- [ ] **Step 4 : Commit**

```bash
git commit -m "Supprime DiscoverView et DomainFilter, remplacés par la nav par domaine"
```

---

## Task 6 : Hors-ligne — précacher les routes de domaine

**Files:**
- Modify: `public/sw.js`

- [ ] **Step 1 : Ajouter les routes au shell et incrémenter la version**

Dans `public/sw.js`, passer `const VERSION = 'v2';` à `'v3'`, puis étendre `SHELL` avec les 10 routes de domaine :

```js
const SHELL = [
  '/',
  '/decouvrir',
  '/quizz',
  '/hors-ligne',
  '/manifest.webmanifest',
  '/decouvrir/sciences-de-la-terre',
  '/decouvrir/astronomie',
  '/decouvrir/biologie',
  '/decouvrir/physique',
  '/decouvrir/chimie',
  '/decouvrir/ingenierie',
  '/decouvrir/informatique',
  '/decouvrir/mathematiques',
  '/decouvrir/animaux',
  '/decouvrir/meteo',
];
```

> Les ids doivent correspondre à `content/domains.ts`. Le garde-fou de Task 1
> (slug sûr + domaine non vide) protège la cohérence, mais cette liste est
> écrite à la main : la tenir à jour si un domaine est ajouté/renommé.

- [ ] **Step 2 : Vérifier**

Run : `npm run build`
Expected : succès ; les routes `/decouvrir/[domaine]` apparaissent en statique (`○`).
Vérification manuelle : `npm run dev -- -p 3001`, ouvrir l'app, puis en mode hors-ligne (DevTools → Network → Offline) recharger et naviguer vers un monde jamais visité → il s'affiche depuis le cache.

- [ ] **Step 3 : Commit**

```bash
git add public/sw.js
git commit -m "Précache les routes de domaine pour la navigation hors-ligne"
```

---

## Auto-revue (faite)

- **Couverture du spec** : nav à deux niveaux → Tasks 3 (mondes) + 4 (domaine) ; anneau de progression → Task 2 + helper Task 1 ; routes dédiées + `generateStaticParams` + redirection slug inconnu → Task 4 ; extinction par domaine → Task 4 ; suppression `DomainFilter`/`DiscoverView` → Task 5 ; précache hors-ligne (`SHELL` + `VERSION` v2→v3) → Task 6 ; label 3-5 en `sr-only` + `sr-only` d'accessibilité → Task 2 ; helper pur testé en node → Task 1. Hors-scope (accroches C, routes carte B2, badges E) : non implémentés, conforme au spec.
- **Placeholders** : aucun — chaque tâche porte le code réel des fichiers.
- **Cohérence des types** : `progressionDomaine(cards, cartesVues, domainId) → { vues, total }` défini en Task 1 et consommé à l'identique en Tasks 2/3 ; `MondeTile` props (`domain, vues, total, ageRange, index`) définis en Task 2 et passés à l'identique en Task 3 ; `DomaineView` props (`domain, cards`) définis en Task 4 et fournis par la route ; `params: Promise<{ domaine: string }>` avec `await` conforme à Next 16.
- **Cohérence Next 16** : `params` await, `generateStaticParams` synchrone renvoyant `{ domaine }`, `redirect` hors try/catch dans un Server Component.
