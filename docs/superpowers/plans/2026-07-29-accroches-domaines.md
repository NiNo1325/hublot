# Accroches de domaine (C) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Afficher une phrase intrigante par domaine sur la grille des mondes, avec une icône audio pour l'écouter (accessible aux non-lecteurs), et rendre label/accroche/compteur/titre visibles pour tous les âges.

**Architecture:** Un champ `accroche` sur `DomainDefinition` (10 textes) ; `MondeTile` affiche l'accroche + un bouton 🔊 alimenté par un hook `useAccrocheAudio` ; un générateur Batch dédié produit un mp3 par domaine, avec liste d'attente et intégration au catalogue hors-ligne.

**Tech Stack:** Next.js 16 (Client Components), React, TypeScript, `localStorage` non concerné, Vitest (node), API Gemini TTS Batch (mp3 statiques).

## Global Constraints

- **Tout visible pour tous les âges** sur les tuiles : label, accroche, compteur `x/10` (MondeTile) et titre de carte (CardTile) — on retire les masquages 3-5.
- **Icône 🔊 pour tous les âges** ; au tap elle joue `public/audio/accroches/<domainId>.mp3` et **ne navigue pas** (hors du `Link`). Fichier absent → échec silencieux (`onerror`), jamais de blocage.
- **HTML valide** : un `<button>` ne peut pas être imbriqué dans le `<a>` d'un `<Link>` — l'accroche + le bouton audio vivent **hors du `Link`**, dans le même `<li>`.
- **Audio** : un mp3 par domaine (age-agnostique), voix `Callirrhoe`, généré par Batch. Liste d'attente `EN_ATTENTE_ACCROCHES` (comme `EN_ATTENTE_AUDIO`/`EN_ATTENTE_AUDIO_QUIZ`) ; génération déclenchée par l'utilisateur.
- **Réutiliser** : `domainStyles`, `useAgeRange`, `useCartesVues`, `progressionDomaine`, le motif de `useQuizAudio`, le motif de `scripts/generer-audio-quiz.mjs`.
- Tests en **node** : logique pure / garde-fous testés ; composants validés par `tsc`/`lint`/`build` + capture.

---

## Structure des fichiers

**Créés**
- `components/cards/useAccrocheAudio.ts` — lecteur audio des accroches.
- `scripts/generer-audio-accroches.mjs` — générateur Batch (un mp3 par domaine).
- `tests/accroches.test.ts` — garde-fous (accroche non vide + audio présent hors attente).

**Modifiés**
- `lib/types.ts` — `DomainDefinition` gagne `accroche: Record<Locale, string>`.
- `content/domains.ts` — +10 accroches.
- `components/cards/MondeTile.tsx` — accroche + bouton audio ; tout visible pour tous.
- `components/cards/MondesView.tsx` — instancie `useAccrocheAudio`, passe `onEcouter`/`enLecture` aux tuiles.
- `components/cards/CardTile.tsx` — titre visible pour tous les âges.
- `scripts/catalogue-audio.mjs` — inclut le manifeste des accroches (empreintes).
- `scripts/maj-attente-audio.mjs` — recalcule aussi `EN_ATTENTE_ACCROCHES`.
- `package.json` — script `audio:accroches`.

---

## Task 1 : Champ `accroche` + les 10 textes + garde-fou

**Files:**
- Modify: `lib/types.ts`
- Modify: `content/domains.ts`
- Create: `tests/accroches.test.ts`

**Interfaces:**
- Produces : `DomainDefinition.accroche: Record<Locale, string>` renseigné pour les 10 domaines.

- [ ] **Step 1 : Écrire le garde-fou (qui échoue)**

Créer `tests/accroches.test.ts` :

```ts
import { describe, expect, it } from 'vitest';
import { domains } from '@/content/domains';

describe('accroches de domaine', () => {
  it('chaque domaine a une accroche non vide', () => {
    for (const d of domains) {
      expect(d.accroche.fr.trim().length, `accroche vide : ${d.id}`).toBeGreaterThan(0);
    }
  });
});
```

- [ ] **Step 2 : Lancer, vérifier l'échec**

Run : `npx vitest run tests/accroches.test.ts`
Expected : FAIL (propriété `accroche` absente du type / des données).

- [ ] **Step 3 : Ajouter le champ au type**

Dans `lib/types.ts`, `DomainDefinition` :
```ts
export interface DomainDefinition {
  id: DomainId;
  icon: string;
  color: string;
  labels: Record<Locale, string>;
  /** Phrase courte qui intrigue, affichée sur la grille des mondes. */
  accroche: Record<Locale, string>;
}
```

- [ ] **Step 4 : Renseigner les 10 accroches dans `content/domains.ts`**

Ajouter `accroche: { fr: '…' }` à chaque domaine :

| id | accroche.fr |
|---|---|
| `sciences-de-la-terre` | `Pourquoi la Terre tremble et crache du feu ?` |
| `astronomie` | `Pourquoi la Lune change de forme ?` |
| `biologie` | `Qu'est-ce qui fait battre ton cœur ?` |
| `physique` | `Pourquoi les choses tombent et les aimants collent ?` |
| `chimie` | `Pourquoi le pain gonfle et le fer rouille ?` |
| `ingenierie` | `Comment tiennent les ponts et volent les avions ?` |
| `informatique` | `Comment un ordinateur compte et se souvient ?` |
| `mathematiques` | `Le zéro, l'infini, le hasard : les secrets des nombres.` |
| `animaux` | `Pourquoi le chat retombe toujours sur ses pattes ?` |
| `meteo` | `D'où viennent la neige et la foudre ?` |

Exemple d'entrée modifiée :
```ts
  {
    id: 'chimie',
    icon: '⚗️',
    color: 'violet',
    labels: { fr: 'La chimie' },
    accroche: { fr: 'Pourquoi le pain gonfle et le fer rouille ?' },
  },
```

- [ ] **Step 5 : Vérifier**

Run : `npx tsc --noEmit && npx vitest run tests/accroches.test.ts`
Expected : PASS (les 10 accroches présentes et non vides).

- [ ] **Step 6 : Commit**

```bash
git add lib/types.ts content/domains.ts tests/accroches.test.ts
git commit -m "Ajoute une accroche par domaine (10 textes) et son garde-fou"
```

---

## Task 2 : Lecteur audio + `MondeTile` (accroche, bouton 🔊, tout visible)

**Files:**
- Create: `components/cards/useAccrocheAudio.ts`
- Modify: `components/cards/MondeTile.tsx`
- Modify: `components/cards/MondesView.tsx`

**Interfaces:**
- Consumes : `domainStyles`, `AgeRange`/`DomainDefinition`.
- Produces : `useAccrocheAudio(): { jouer: (domainId: string) => void; enLecture: string | null }` ; `MondeTile` props `{ domain, vues, total, ageRange, index, onEcouter: () => void, enLecture: boolean }`.

- [ ] **Step 1 : Écrire le lecteur `useAccrocheAudio`**

Créer `components/cards/useAccrocheAudio.ts` :

```ts
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Lecture des accroches : un seul élément Audio réutilisé, qui coupe la
 * précédente avant d'en jouer une nouvelle. Un fichier absent (avant génération
 * ou réseau coupé) échoue silencieusement — jamais de blocage.
 */
export function useAccrocheAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enLecture, setEnLecture] = useState<string | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    audio.onended = () => setEnLecture(null);
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const jouer = useCallback((domainId: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = `/audio/accroches/${domainId}.mp3`;
    audio.onerror = () => setEnLecture(null);
    audio.play().then(
      () => setEnLecture(domainId),
      () => setEnLecture(null),
    );
  }, []);

  return { jouer, enLecture };
}
```

- [ ] **Step 2 : Réécrire `MondeTile`**

Remplacer `components/cards/MondeTile.tsx` par (Link navigable = hublot + label + compteur ; sous lui, l'accroche + le bouton audio, hors du Link ; tout visible pour tous les âges) :

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
  onEcouter: () => void;
  enLecture: boolean;
}

const R = 46;
const C = 2 * Math.PI * R;

/**
 * Un « monde » : le hublot d'un domaine, cerclé d'un anneau de progression, avec
 * son accroche et un bouton pour l'écouter. Tout est affiché à tous les âges —
 * un jeune enfant qui ne lit pas peut au moins écouter l'accroche.
 */
export function MondeTile({
  domain,
  vues,
  total,
  ageRange,
  index,
  onEcouter,
  enLecture,
}: MondeTileProps) {
  const style = domainStyles[domain.id];
  const complet = total > 0 && vues >= total;
  const fraction = total > 0 ? vues / total : 0;
  const accroche = domain.accroche.fr;

  return (
    <li
      className="flex w-40 flex-col items-center gap-2 sm:w-44"
      style={{ animation: 'allumage 500ms ease-out backwards', animationDelay: `${index * 70}ms` }}
    >
      <Link
        href={`/decouvrir/${domain.id}`}
        className="group flex cursor-pointer flex-col items-center gap-2 rounded-3xl p-2 transition-transform duration-150 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
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
          <span
            className="flex h-24 w-24 items-center justify-center rounded-full text-5xl sm:h-28 sm:w-28"
            style={{
              backgroundColor: 'var(--color-encre-clair)',
              boxShadow: complet ? 'none' : `0 0 28px ${style.halo}`,
            }}
          >
            {domain.icon}
          </span>
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

        <span className="text-center font-display text-base font-medium text-craie">
          {domain.labels.fr}
        </span>
        <span aria-hidden="true" className="text-sm text-craie-douce">
          {vues}/{total}
        </span>
        <span className="sr-only">
          {domain.labels.fr}, {vues} carte{vues > 1 ? 's' : ''} sur {total} écoutée
          {vues > 1 ? 's' : ''}
          {complet ? ', terminé' : ''}
        </span>
      </Link>

      {/* Accroche + écoute, hors du Link (un bouton ne peut pas vivre dans un <a>). */}
      <div className="flex items-start gap-2 px-1">
        <p className="flex-1 text-center text-sm italic leading-snug text-craie-douce">
          {accroche}
        </p>
        <button
          type="button"
          onClick={onEcouter}
          aria-label={`Écouter : ${accroche}`}
          className="mt-0.5 flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-base transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
        </button>
      </div>
    </li>
  );
}
```

- [ ] **Step 3 : Câbler `useAccrocheAudio` dans `MondesView`**

Dans `components/cards/MondesView.tsx` : importer le hook, l'instancier, et passer `onEcouter`/`enLecture` à chaque tuile.

Ajouter l'import :
```ts
import { useAccrocheAudio } from './useAccrocheAudio';
```
Dans le composant, après `useCartesVues` :
```ts
  const { jouer, enLecture } = useAccrocheAudio();
```
Dans le `map`, compléter le `MondeTile` :
```tsx
            <MondeTile
              key={domain.id}
              domain={domain}
              vues={vues}
              total={total}
              ageRange={ageRange}
              index={index}
              onEcouter={() => jouer(domain.id)}
              enLecture={enLecture === domain.id}
            />
```

- [ ] **Step 4 : Vérifier**

Run : `npx tsc --noEmit && npm run lint`
Expected : aucune erreur.
Run : `npm run dev` → la grille montre chaque monde avec son accroche et un bouton 🔊 ; le label et le compteur s'affichent à tous les âges (tester en 3-5). Le bouton audio ne navigue pas ; sans fichier audio encore généré, il reste silencieux (normal).

- [ ] **Step 5 : Commit**

```bash
git add components/cards/useAccrocheAudio.ts components/cards/MondeTile.tsx components/cards/MondesView.tsx
git commit -m "Affiche l'accroche + bouton d'écoute sur les mondes, visible pour tous"
```

---

## Task 3 : Titre de carte visible pour tous les âges

**Files:**
- Modify: `components/cards/CardTile.tsx`

- [ ] **Step 1 : Retirer le masquage 3-5 du titre**

Dans `components/cards/CardTile.tsx`, remplacer :
```tsx
        <span
          className={
            ageRange === '3-5'
              ? 'sr-only'
              : 'text-center font-display text-base font-medium text-craie'
          }
        >
          {titre}
        </span>
```
par :
```tsx
        <span className="text-center font-display text-base font-medium text-craie">
          {titre}
        </span>
```

- [ ] **Step 2 : Vérifier**

Run : `npx tsc --noEmit && npm run lint`
Expected : aucune erreur (`ageRange` reste utilisé ailleurs dans le fichier pour le titre lu ; sinon retirer l'inutilisé).

- [ ] **Step 3 : Commit**

```bash
git add components/cards/CardTile.tsx
git commit -m "Affiche le nom des cartes pour tous les âges"
```

---

## Task 4 : Pipeline audio des accroches (générateur, catalogue, attente, garde-fou)

**Files:**
- Create: `scripts/generer-audio-accroches.mjs`
- Modify: `package.json`
- Modify: `scripts/catalogue-audio.mjs`
- Modify: `scripts/maj-attente-audio.mjs`
- Modify: `tests/accroches.test.ts`

- [ ] **Step 1 : Écrire le générateur Batch**

Créer `scripts/generer-audio-accroches.mjs` (calqué sur `scripts/generer-audio-quiz.mjs`, un mp3 par domaine) :

```js
/**
 * Génère l'audio des accroches de domaine, via l'API Batch.
 *
 * Usage : npm run audio:accroches
 *
 * Un fichier par domaine (public/audio/accroches/<id>.mp3). L'accroche est lue
 * pour tout le monde, y compris les non-lecteurs, depuis la grille des mondes.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { domains } from '../content/domains.ts';
import { BASE_API as BASE, VOIX, cle, versMp3 } from './lib/audio.mjs';
import { ecrireCatalogue } from './catalogue-audio.mjs';

const MODELE = 'gemini-3.1-flash-tts-preview';
const RACINE = 'public/audio/accroches';
const MANIFESTE = `${RACINE}/manifeste.json`;
const PAR_LOT = 40;
const SONDAGE_MS = 20000;

const CONSIGNE =
  "Lis cette petite phrase à un enfant, d'une voix intrigante et enjouée, comme " +
  'pour éveiller sa curiosité :\n\n';

function empreinte(texte) {
  return createHash('sha256').update(`${VOIX}|${CONSIGNE}|${texte}`).digest('hex').slice(0, 16);
}

async function lireManifeste() {
  if (!existsSync(MANIFESTE)) return {};
  try {
    return JSON.parse(await readFile(MANIFESTE, 'utf8'));
  } catch {
    return {};
  }
}

function aFaire(manifeste) {
  const liste = [];
  for (const domaine of domains) {
    const texte = domaine.accroche.fr;
    const chemin = `${RACINE}/${domaine.id}.mp3`;
    const attendu = empreinte(texte);
    if (manifeste[domaine.id]?.empreinte === attendu && existsSync(chemin)) continue;
    liste.push({ cle: domaine.id, chemin, texte, attendu });
  }
  return liste;
}

async function soumettre(lot, apiKey, index) {
  const requests = lot.map((item) => ({
    request: {
      contents: [{ parts: [{ text: CONSIGNE + item.texte }] }],
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: VOIX } } },
      },
    },
  }));

  const reponse = await fetch(`${BASE}/models/${MODELE}:batchGenerateContent`, {
    method: 'POST',
    headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      batch: {
        displayName: `hublot-accroches-${Date.now()}-${index}`,
        inputConfig: { requests: { requests } },
      },
    }),
  });

  if (!reponse.ok) {
    throw new Error(`${reponse.status} — ${(await reponse.text()).slice(0, 200)}`);
  }
  return (await reponse.json()).name;
}

async function attendre(nom, apiKey) {
  for (;;) {
    const reponse = await fetch(`${BASE}/${nom}`, { headers: { 'x-goog-api-key': apiKey } });
    const donnees = await reponse.json();
    const etat = donnees?.metadata?.state;
    if (etat === 'BATCH_STATE_SUCCEEDED') return donnees;
    if (etat === 'BATCH_STATE_FAILED' || etat === 'BATCH_STATE_CANCELLED') {
      throw new Error(`lot ${etat}`);
    }
    await new Promise((r) => setTimeout(r, SONDAGE_MS));
  }
}

async function main() {
  const apiKey = cle();
  await mkdir(RACINE, { recursive: true });
  const manifeste = await lireManifeste();
  const liste = aFaire(manifeste);

  if (liste.length === 0) {
    console.log('Tout est déjà généré.');
    return;
  }

  const lots = [];
  for (let i = 0; i < liste.length; i += PAR_LOT) lots.push(liste.slice(i, i + PAR_LOT));
  console.log(`${liste.length} fichier(s) à produire, en ${lots.length} lot(s).`);

  const travaux = [];
  for (const [i, lot] of lots.entries()) {
    process.stdout.write(`soumission ${i + 1}/${lots.length}… `);
    try {
      travaux.push({ nom: await soumettre(lot, apiKey, i), lot });
      console.log('ok');
    } catch (erreur) {
      console.log(`échec : ${erreur.message}`);
    }
  }

  let ecrits = 0;
  const echecs = [];
  for (const [i, { nom, lot }] of travaux.entries()) {
    process.stdout.write(`\nlot ${i + 1}/${travaux.length} — attente… `);
    try {
      const donnees = await attendre(nom, apiKey);
      const reponses = donnees?.response?.inlinedResponses?.inlinedResponses ?? [];
      console.log(`${reponses.length} réponse(s)`);
      for (const [j, item] of lot.entries()) {
        const partie = reponses[j]?.response?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
        if (!partie?.data) {
          echecs.push(`${item.cle} : réponse sans audio`);
          continue;
        }
        await versMp3(Buffer.from(partie.data, 'base64'), item.chemin);
        manifeste[item.cle] = { empreinte: item.attendu, modele: MODELE };
        ecrits += 1;
      }
      await writeFile(MANIFESTE, `${JSON.stringify(manifeste, null, 2)}\n`);
    } catch (erreur) {
      echecs.push(`lot ${i + 1} : ${erreur.message}`);
      console.log(`échec : ${erreur.message}`);
    }
  }

  console.log(`\n${ecrits} fichier(s) écrit(s).`);
  if (echecs.length > 0) {
    console.log(`${echecs.length} échec(s) :`);
    for (const e of echecs.slice(0, 6)) console.log(`  - ${e}`);
    process.exitCode = 1;
  }
}

main().then(ecrireCatalogue);
```

- [ ] **Step 2 : Ajouter le script npm**

Dans `package.json`, à côté de `"audio:quiz"` :
```json
    "audio:accroches": "tsx --env-file=.env.local scripts/generer-audio-accroches.mjs",
```

- [ ] **Step 3 : Inclure les accroches au catalogue hors-ligne**

Dans `scripts/catalogue-audio.mjs`, étendre l'objet `manifestes` de `ecrireCatalogue` avec le manifeste des accroches (après le bloc `quiz/manifeste.json`) :
```js
    ...Object.fromEntries(
      Object.entries(await lireManifeste(`${RACINE}/accroches/manifeste.json`)).map(
        ([cle, valeur]) => [`accroches/${cle}.mp3`, empreinteDe(valeur)],
      ),
    ),
```

- [ ] **Step 4 : Garde-fou audio + liste d'attente dans `tests/accroches.test.ts`**

Ajouter au fichier (créé en Task 1) la liste d'attente et le test de présence :
```ts
import { existsSync } from 'node:fs';
```
```ts
/*
  Domaines livrés avant l'audio de leur accroche, en attente de quota TTS.
  Pendant des listes des beats/quizz. `npm run audio:attente` la recalcule.
*/
const EN_ATTENTE_ACCROCHES = new Set<string>([
  'sciences-de-la-terre',
  'astronomie',
  'biologie',
  'physique',
  'chimie',
  'ingenierie',
  'informatique',
  'mathematiques',
  'animaux',
  'meteo',
]);

describe('audio des accroches', () => {
  const cas = domains
    .filter((d) => !EN_ATTENTE_ACCROCHES.has(d.id))
    .map((d) => [d.id, `public/audio/accroches/${d.id}.mp3`] as const);
  it.each(cas)('audio %s présent', (_id, chemin) => {
    expect(existsSync(chemin), `manquant : ${chemin} — lance « npm run audio:accroches »`).toBe(true);
  });
});
```

- [ ] **Step 5 : Étendre `scripts/maj-attente-audio.mjs`**

Recalculer aussi `EN_ATTENTE_ACCROCHES`. Ajouter l'import des domaines :
```js
import { domains } from '../content/domains.ts';
```
Calculer les domaines sans audio :
```js
const accrochesIncompletes = domains
  .filter((d) => !existsSync(`public/audio/accroches/${d.id}.mp3`))
  .map((d) => d.id);
```
Et appeler `majListe` pour la 3ᵉ liste, puis compléter le message final :
```js
majListe('tests/accroches.test.ts', 'EN_ATTENTE_ACCROCHES', accrochesIncompletes);
```

- [ ] **Step 6 : Vérifier**

Run : `npx tsc --noEmit && npm run lint && npm test`
Expected : tout passe (les 10 domaines sont en attente → le garde-fou audio n'exige encore rien).
Run : `npm run audio:attente`
Expected : s'exécute sans erreur ; `EN_ATTENTE_ACCROCHES` reste à 10 domaines (aucun mp3 présent), et les listes beats/quizz sont inchangées.

- [ ] **Step 7 : Commit**

```bash
git add scripts/generer-audio-accroches.mjs package.json scripts/catalogue-audio.mjs scripts/maj-attente-audio.mjs tests/accroches.test.ts
git commit -m "Pipeline audio des accroches : générateur Batch, catalogue, attente, garde-fou"
```

---

## Task 5 : Générer l'audio des accroches (déclenché par l'utilisateur)

**Files:**
- Modify: `tests/accroches.test.ts` (vider `EN_ATTENTE_ACCROCHES`)
- Create (généré) : `public/audio/accroches/<id>.mp3` (×10) + manifeste + catalogue mis à jour.

**Préalable :** Tasks 1–4 fusionnées, `npm test` vert avec les 10 domaines en attente, `.env.local` contient `GEMINI_API_KEY`.

- [ ] **Step 1 : Générer via l'API Batch**

Run : `npm run audio:accroches`
Expected : 10 fichiers produits dans `public/audio/accroches/`, catalogue régénéré.

- [ ] **Step 2 : Vider la liste d'attente**

Run : `npm run audio:attente`
Expected : `EN_ATTENTE_ACCROCHES` vidée (les 10 fichiers présents), comme les autres listes.

- [ ] **Step 3 : Vérification finale**

Run : `npm test`
Expected : PASS, audio des accroches compris.
Run : `npm run lint && npm run build`
Expected : PASS.

- [ ] **Step 4 : Commit**

```bash
git add public/audio/accroches tests/accroches.test.ts public/audio/catalogue.json
git commit -m "Génère l'audio des dix accroches de domaine (lot Batch)"
```

---

## Auto-revue (faite)

- **Couverture du spec** : champ `accroche` + 10 textes + garde-fou non-vide → Task 1 ; affichage accroche + bouton 🔊 pour tous, tout visible pour les 3-5 → Task 2 ; titre de carte pour tous → Task 3 ; audio (générateur Batch, catalogue hors-ligne, liste d'attente, garde-fou présence) → Task 4 ; génération Batch + finalisation → Task 5 ; bouton hors du `Link` (HTML valide) → Task 2 (structure `<li>`). Hors-scope (accroches par carte, niveau 2, voix par âge) : non implémentés.
- **Placeholders** : aucun — code réel à chaque étape.
- **Cohérence des types** : `useAccrocheAudio(): { jouer: (domainId: string) => void; enLecture: string | null }` (Task 2) consommé à l'identique dans `MondesView` (`enLecture === domain.id`) ; `MondeTile` props `{ …, onEcouter: () => void, enLecture: boolean }` définis en Task 2 et fournis par `MondesView` ; `DomainDefinition.accroche` (Task 1) lu dans `MondeTile` et le générateur (Task 4).
- **Pipeline audio** : `RACINE = 'public/audio/accroches'`, un mp3 par `domain.id`, manifeste dédié inclus au catalogue (Task 4 Step 3) ; `EN_ATTENTE_ACCROCHES` géré par `maj-attente-audio.mjs` étendu (Task 4 Step 5) — cohérent avec `EN_ATTENTE_AUDIO`/`EN_ATTENTE_AUDIO_QUIZ`.
