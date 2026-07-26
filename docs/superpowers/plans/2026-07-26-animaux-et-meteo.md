# Deux nouveaux domaines (Les animaux, La météo) — Plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Porter le catalogue de 80 à 100 cartes en ajoutant deux domaines de dix cartes chacun — Les animaux 🦊 et La météo 🌦️ — chaque carte corrigeant une idée reçue, avec une animation SVG qui montre la cause.

**Architecture:** On câble d'abord les deux domaines (types, `domains.ts`, `domain-styles.ts`, fichiers quiz). On réalise ensuite une carte-gabarit complète (`la-metamorphose-du-papillon`) validée par `npm test` et l'audit d'illustrations, puis on réplique la recette aux dix-neuf autres. L'audio est généré en un seul passage par l'API Batch tout à la fin, déclenché par l'utilisateur ; pendant la construction, chaque carte est déclarée dans `EN_ATTENTE_AUDIO`.

**Tech Stack:** Next.js (App Router), TypeScript, React, SVG + SMIL, Vitest, contenu en données pures (`content/`) découplé des animations (`components/animations/`).

## Global Constraints

- Langue : **français** uniquement (`Locale = 'fr'`). Textes, commentaires et messages de commit en français.
- Chaque carte porte **une idée reçue** ; la **mauvaise réponse du quizz reprend exactement cette idée reçue** (jamais un piège inventé).
- Les **trois tranches d'âge** (`3-5`, `6-8`, `9-12`) d'une carte partagent **la même liste d'`id` de beats**, dans le même ordre ; seul le texte change. Un test le vérifie.
- Pour les **3-5 ans**, le quizz a **deux propositions** seulement, énoncés courts (tiennent dans une phrase entendue). Pour `6-8` et `9-12`, trois propositions.
- La liste `PHASES` d'une animation est **exactement** la liste des `id` de beats de la carte, même ordre.
- Standard d'animation (opposable) : montrer la cause pas l'effet ; matérialiser l'invisible par une flèche/un signe ; opposer idée reçue et vérité côte à côte quand c'est possible ; **ne jamais contredire la voix** ; `prefers-reduced-motion` reste lisible et statique.
- Toute animation doit passer `npm run audit:illustrations` (aucun texte hors cadre, aucun recouvrement de légendes entre phases différentes).
- Sujets figés par le spec `docs/superpowers/specs/2026-07-26-animaux-et-meteo-design.md` ; ne pas réintroduire « L'arc-en-ciel » (doublon retiré).

---

## Recette de câblage d'une carte (référencée par chaque tâche de carte)

Chaque carte, une fois son fichier de contenu et son animation écrits, se câble par ces cinq gestes mécaniques :

1. **`content/cards/<domaine>/<slug>.ts`** : exporter `const card: ScienceCard` (id = slug, `domainId`, `animationId`, `thumbnail`, `content.fr.title` + `content.fr.explanation` pour les 3 âges).
2. **`components/animations/<Nom>Animation.tsx`** : composant `'use client'` sur le modèle de `MareesAnimation` — `PHASES` = beats, `miseEnScene(PHASES, activeBeatId)`, `anime = isPlaying && !prefersReducedMotion`.
3. **`components/animations/registry.tsx`** : ajouter l'`import` et l'entrée `'<animationId>': <Nom>Animation` dans `animationRegistry`.
4. **`content/cards/index.ts`** : ajouter l'`import { card as … }` et l'entrée dans le tableau `cards`.
5. **`content/quiz/<domaine>.ts`** : ajouter l'objet `QuizCarte` (`cardId` = slug, `questions` pour les 3 âges) ; la mauvaise réponse = l'idée reçue.
6. **`tests/audio.test.ts`** : ajouter le slug au `Set` `EN_ATTENTE_AUDIO` (l'audio n'existe pas encore).

Puis `npm test` doit passer. Squelette d'animation de référence :

```tsx
'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['beat-un', 'beat-deux', 'beat-trois', 'beat-quatre'] as const;

export function ExempleAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      {/* couches révélées par opacite(n) ; police var(--font-atkinson) pour tout texte */}
    </svg>
  );
}
```

---

## Task 1 : Câbler les deux domaines

**Files:**
- Modify: `lib/types.ts` (union `DomainId`)
- Modify: `content/domains.ts` (deux entrées)
- Modify: `lib/domain-styles.ts` (deux entrées `domainStyles`)
- Create: `content/quiz/animaux.ts` (banque vide)
- Create: `content/quiz/meteo.ts` (banque vide)
- Modify: `content/quiz/index.ts` (imports + spreads)
- Test: `tests/content.test.ts` (existant, doit rester vert)

**Interfaces:**
- Produces : les `DomainId` `'animaux'` et `'meteo'` ; les exports `quiz` de `content/quiz/animaux.ts` et `content/quiz/meteo.ts` (tableaux `QuizCarte[]`, vides au départ).

- [ ] **Step 1 : Ajouter les deux domaines à l'union `DomainId`**

Dans `lib/types.ts`, étendre l'union :

```ts
export type DomainId =
  | 'physique'
  | 'chimie'
  | 'biologie'
  | 'astronomie'
  | 'sciences-de-la-terre'
  | 'informatique'
  | 'ingenierie'
  | 'mathematiques'
  | 'animaux'
  | 'meteo';
```

- [ ] **Step 2 : Ajouter les pastilles dans `content/domains.ts`**

Ajouter à la fin du tableau `domains` :

```ts
  {
    id: 'animaux',
    icon: '🦊',
    color: 'amber',
    labels: { fr: 'Les animaux' },
  },
  {
    id: 'meteo',
    icon: '🌦️',
    color: 'teal',
    labels: { fr: 'La météo' },
  },
```

- [ ] **Step 3 : Ajouter les teintes dans `lib/domain-styles.ts`**

Ajouter au `Record` `domainStyles` :

```ts
  animaux: { teinte: '#fbbf24', halo: 'rgba(251, 191, 36, 0.45)' },
  meteo: { teinte: '#2dd4bf', halo: 'rgba(45, 212, 191, 0.45)' },
```

- [ ] **Step 4 : Créer les deux banques de quiz vides**

`content/quiz/animaux.ts` :

```ts
import type { QuizCarte } from '@/lib/types';

/** Questions du domaine « Les animaux ». Une mauvaise réponse = l'idée reçue de la carte. */
export const quiz: QuizCarte[] = [];
```

`content/quiz/meteo.ts` : identique, en remplaçant le libellé par « La météo ».

- [ ] **Step 5 : Enregistrer les deux banques dans `content/quiz/index.ts`**

Ajouter les imports après `mathematiques` et les spreads à la fin de `quizCartes` :

```ts
import { quiz as animaux } from './animaux';
import { quiz as meteo } from './meteo';
```
```ts
  ...animaux,
  ...meteo,
```

- [ ] **Step 6 : Vérifier que rien n'est cassé**

Run : `npm test`
Expected : PASS (aucune carte ne référence encore les nouveaux domaines ; `DomainId` compile ; les banques vides ne changent rien).

Run : `npx tsc --noEmit`
Expected : aucune erreur de type (les `Record<DomainId, …>` de `domain-styles.ts` sont désormais complets).

- [ ] **Step 7 : Commit**

```bash
git add lib/types.ts content/domains.ts lib/domain-styles.ts content/quiz/
git commit -m "Câble les deux nouveaux domaines : Les animaux et La météo"
```

---

## Task 2 : Carte-gabarit — La métamorphose du papillon (bout en bout)

Carte de validation. Beats séquentiels, animation limpide. Sert d'exemplaire aux dix-neuf suivantes.

**Files:**
- Create: `content/cards/animaux/la-metamorphose-du-papillon.ts`
- Create: `components/animations/MetamorphoseAnimation.tsx`
- Modify: `components/animations/registry.tsx`
- Modify: `content/cards/index.ts`
- Modify: `content/quiz/animaux.ts`
- Modify: `tests/audio.test.ts` (`EN_ATTENTE_AUDIO`)

**Interfaces:**
- Consumes : `DomainId = 'animaux'` (Task 1), `miseEnScene` de `./shared/phases`.
- Produces : `animationId = 'metamorphose'` ; beats `['oeuf', 'chenille', 'chrysalide', 'papillon']`.

- [ ] **Step 1 : Écrire le fichier de contenu**

Créer `content/cards/animaux/la-metamorphose-du-papillon.ts`. Idée reçue corrigée : « la chenille grandit et devient papillon » → dans la chrysalide elle se **défait presque entièrement** puis se **reconstruit**. Mêmes quatre `id` de beats aux trois âges :

```ts
import type { ScienceCard } from '@/lib/types';

export const card: ScienceCard = {
  id: 'la-metamorphose-du-papillon',
  domainId: 'animaux',
  animationId: 'metamorphose',
  thumbnail: '🦋',
  content: {
    fr: {
      title: {
        '3-5': 'Le papillon',
        '6-8': 'La métamorphose du papillon',
        '9-12': 'La métamorphose du papillon',
      },
      explanation: {
        '3-5': {
          beats: [
            { id: 'oeuf', text: "Tout commence par un tout petit œuf, posé sous une feuille." },
            { id: 'chenille', text: "De l'œuf sort une chenille. Elle mange, elle mange, et elle grandit." },
            { id: 'chrysalide', text: "La chenille se fabrique une petite maison fermée : la chrysalide. Dedans, elle se transforme." },
            { id: 'papillon', text: "La maison s'ouvre. Ce n'est plus une chenille : c'est un papillon qui s'envole !" },
          ],
        },
        '6-8': {
          beats: [
            { id: 'oeuf', text: "Un papillon pond de minuscules œufs sur une feuille. C'est le début de sa vie." },
            { id: 'chenille', text: "De chaque œuf sort une chenille. Elle passe ses journées à manger des feuilles pour grandir très vite." },
            { id: 'chrysalide', text: "Quand elle est assez grande, la chenille s'enferme dans une chrysalide. À l'intérieur, son corps ne fait pas que grandir : il se défait presque entièrement." },
            { id: 'papillon', text: "Avec ces morceaux, un tout nouveau corps se construit : des ailes, de longues pattes, une trompe. La chrysalide s'ouvre, et le papillon s'envole." },
          ],
        },
        '9-12': {
          beats: [
            { id: 'oeuf', text: "Le cycle commence par un œuf pondu sur une plante précise, celle dont la future chenille se nourrira." },
            { id: 'chenille', text: "La chenille éclot et mange presque sans arrêt. Elle grandit tellement qu'elle doit changer plusieurs fois de peau, trop étroite." },
            { id: 'chrysalide', text: "Puis elle s'immobilise et forme une chrysalide. Là se passe le plus étonnant : la plupart de ses tissus se dissolvent en une bouillie de cellules. La chenille ne « grandit » pas en papillon, elle se démonte." },
            { id: 'papillon', text: "À partir de cette bouillie, guidé par de petits amas de cellules restés intacts, un corps entièrement neuf s'assemble : ailes, yeux, trompe. Le papillon brise la chrysalide, déplie ses ailes et prend son envol. C'est la métamorphose complète." },
          ],
        },
      },
    },
  },
};
```

- [ ] **Step 2 : Écrire l'animation `MetamorphoseAnimation`**

Créer `components/animations/MetamorphoseAnimation.tsx`. Quatre phases visibles côte à côte n'est pas nécessaire ici : la **cause** montrée est que la chrysalide **défait puis reconstruit** (phase `chrysalide` : cellules dispersées ; phase `papillon` : nouveau corps assemblé), ce qui réfute « la chenille grandit ». Rester lisible sans mouvement.

```tsx
'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['oeuf', 'chenille', 'chrysalide', 'papillon'] as const;

/**
 * L'argument central : dans la chrysalide, la chenille ne grandit pas, elle se
 * défait (cellules dispersées) puis un corps neuf s'assemble. Les deux phases
 * chrysalide/papillon sont l'explication.
 */
export function MetamorphoseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#132218" />
      {/* feuille support */}
      <path d="M40 200 Q200 150 360 200" stroke="#2f5d3a" strokeWidth="6" fill="none" />

      {/* œuf */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="90" cy="150" r="10" fill="#e7e2c8" />
        <text x="66" y="188" fill="#a3e635" fontSize="15" fontFamily="var(--font-atkinson), sans-serif">un œuf</text>
      </g>

      {/* chenille qui grandit */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} cx={150 + i * 16} cy="150" r="11" fill="#7cb342" />
          ))}
          <text x="150" y="188" fill="#a3e635" fontSize="15" fontFamily="var(--font-atkinson), sans-serif">elle mange et grandit</text>
        </g>
      </g>

      {/* chrysalide : cellules qui se dispersent (le corps se défait) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="120" rx="26" ry="44" fill="#4e6b3a" stroke="#8fae5d" strokeWidth="2" />
        {[[188, 100], [212, 108], [196, 128], [208, 140], [200, 118]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#d8e6b0">
            {anime && (
              <animate attributeName="cy" values={`${cy};${cy - 6};${cy}`} dur="2s" repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="150" y="196" fill="#f6c453" fontSize="15" fontFamily="var(--font-atkinson), sans-serif">le corps se défait</text>
      </g>

      {/* papillon : corps neuf assemblé */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(300 110)">
          <ellipse cx="0" cy="0" rx="6" ry="22" fill="#3b2b1a" />
          <path d="M0 -8 Q-40 -34 -34 4 Q-30 26 0 10 Z" fill="#f08a3c" />
          <path d="M0 -8 Q40 -34 34 4 Q30 26 0 10 Z" fill="#f08a3c" />
          {anime && (
            <animateTransform attributeName="transform" type="translate" values="300 110; 300 96; 300 110" dur="2.4s" repeatCount="indefinite" additive="sum" />
          )}
        </g>
        <text x="250" y="196" fill="#f6c453" fontSize="15" fontFamily="var(--font-atkinson), sans-serif">un corps tout neuf</text>
      </g>
    </svg>
  );
}
```

- [ ] **Step 3 : Enregistrer l'animation**

Dans `components/animations/registry.tsx`, ajouter l'import (avec les autres) et l'entrée dans `animationRegistry` :

```ts
import { MetamorphoseAnimation } from './MetamorphoseAnimation';
```
```ts
  metamorphose: MetamorphoseAnimation,
```

- [ ] **Step 4 : Ajouter la carte au catalogue**

Dans `content/cards/index.ts`, ajouter l'import et l'entrée du tableau `cards` (nouveau bloc « animaux ») :

```ts
import { card as laMetamorphoseDuPapillon } from './animaux/la-metamorphose-du-papillon';
```
```ts
  laMetamorphoseDuPapillon,
```

- [ ] **Step 5 : Écrire le quiz de la carte**

Dans `content/quiz/animaux.ts`, remplir le tableau `quiz` avec l'objet de cette carte. La mauvaise réponse reprend l'idée reçue « la chenille grandit / gonfle pour devenir papillon » :

```ts
{
  cardId: 'la-metamorphose-du-papillon',
  questions: {
    '3-5': [
      {
        id: 'qui-sort-de-loeuf',
        question: "Qui sort du petit œuf ?",
        reponses: [
          { texte: 'Une chenille', icone: '🐛', correcte: true },
          { texte: 'Un papillon tout fait', icone: '🦋' },
        ],
        explication: "C'est une chenille qui sort de l'œuf. Le papillon vient bien plus tard.",
      },
    ],
    '6-8': [
      {
        id: 'que-fait-la-chrysalide',
        question: "Dans la chrysalide, que se passe-t-il ?",
        reponses: [
          { texte: 'Le corps se défait puis se reconstruit', icone: '✨', correcte: true },
          { texte: 'La chenille gonfle et devient papillon', icone: '🎈' },
          { texte: 'La chenille dort simplement', icone: '😴' },
        ],
        explication: "La chenille ne grandit pas en papillon : dans la chrysalide, son corps se défait presque entièrement, puis un corps neuf se construit.",
      },
    ],
    '9-12': [
      {
        id: 'comment-devient-papillon',
        question: "Comment la chenille devient-elle un papillon ?",
        reponses: [
          { texte: 'Ses tissus se dissolvent, un corps neuf s’assemble', icone: '🔄', correcte: true },
          { texte: 'Elle grandit jusqu’à prendre la forme d’un papillon', icone: '📏' },
          { texte: 'Il lui pousse des ailes sur son corps de chenille', icone: '🪽' },
        ],
        explication: "Dans la chrysalide, la plupart des tissus se dissolvent en une bouillie de cellules, à partir de laquelle un corps entièrement neuf se construit.",
      },
    ],
  },
},
```

- [ ] **Step 6 : Déclarer la carte en attente d'audio**

Dans `tests/audio.test.ts`, ajouter le slug au `Set` :

```ts
const EN_ATTENTE_AUDIO = new Set<string>(['la-metamorphose-du-papillon']);
```

- [ ] **Step 7 : Vérifier**

Run : `npm test`
Expected : PASS (carte complète, animation enregistrée, 3 âges, mêmes beats, quiz présent, audio en attente).

Run : `npm run quiz:couverture`
Expected : la carte apparaît comme couverte (aucune carte sans question).

- [ ] **Step 8 : Audit visuel de l'animation**

Dans un terminal : `npm run dev -- -p 3001`
Dans un autre : `npm run audit:illustrations`
Expected : aucun débordement de cadre ni recouvrement de légendes pour `metamorphose`. Corriger positions/tailles de texte si signalé, puis relancer.

- [ ] **Step 9 : Commit**

```bash
git add content/cards/animaux/ components/animations/MetamorphoseAnimation.tsx components/animations/registry.tsx content/cards/index.ts content/quiz/animaux.ts tests/audio.test.ts
git commit -m "Ajoute la carte-gabarit : la métamorphose du papillon"
```

---

## Tâches 3 à 11 — Les neuf autres cartes « animaux »

Chaque tâche suit la **Recette de câblage d'une carte** ci-dessus et l'exemplaire du papillon, avec ses propres beats, animation et quiz. Pour chacune : écrire le contenu (3 âges, mêmes `id` de beats), l'animation (`PHASES` = beats, standard d'animation respecté), le quiz (mauvaise réponse = idée reçue), déclarer le slug dans `EN_ATTENTE_AUDIO`, `npm test`, audit d'illustrations, commit. Un commit par carte.

Chaque bloc donne : slug · `animationId` · `thumbnail` · idée reçue · beats (`id` → intention) · **cause à montrer** dans l'animation (invisible matérialisé + contraste).

### Task 3 : Pourquoi le caméléon change de couleur
- slug `pourquoi-le-cameleon-change-de-couleur` · animationId `cameleon` · thumbnail 🦎
- Idée reçue : « il change de couleur pour se camoufler » → surtout pour **communiquer** (humeur, rival, séduction) et **régler sa température** (sombre pour se réchauffer, clair contre la chaleur).
- Beats : `humeur` (calme = couleurs ternes) → `signal` (excité/menacé = couleurs vives adressées à un autre caméléon) → `temperature` (peau sombre au froid, claire au chaud) → `mecanisme` (des cristaux minuscules dans la peau, dont l'écart change, renvoient une autre couleur — ce ne sont pas des taches de peinture).
- Animation : caméléon dont la couleur suit la phase ; en `signal`, un **deuxième caméléon** en face + flèches/pictos d'échange (réfute le camouflage : la couleur est **montrée**, pas cachée) ; en `temperature`, un soleil/flocon avec flèche de chaleur. Contraste : vignette « se cacher » barrée vs « communiquer ».

### Task 4 : La migration des oiseaux
- slug `la-migration-des-oiseaux` · animationId `migration` · thumbnail 🦅
- Idée reçue : « ils partent parce qu'ils ont froid » → parce que la **nourriture manque** en hiver ; ils s'orientent au **soleil, aux étoiles et au champ magnétique**.
- Beats : `nourriture` (insectes/graines disparaissent l'hiver) → `depart` (grand voyage vers le sud) → `boussole` (repères : soleil le jour, étoiles la nuit, magnétisme) → `retour` (retour au printemps quand la nourriture revient).
- Animation : carte nord/sud, assiette de nourriture qui se vide au nord (cause), flèche de trajet ; en `boussole`, matérialiser l'invisible — soleil, étoiles, **lignes de champ magnétique** avec une aiguille. Contraste : thermomètre « froid » barré vs assiette vide comme vraie cause.

### Task 5 : L'hibernation
- slug `lhibernation` · animationId `hibernation` · thumbnail 🦔
- Idée reçue : « ils dorment tout l'hiver » → le corps **ralentit énormément** (cœur très lent, température qui chute) ; ce n'est pas un simple long sommeil, et l'animal se réveille par périodes.
- Beats : `reserves` (l'automne : manger pour faire des réserves de graisse) → `ralenti` (cœur qui bat très lentement, corps froid) → `economie` (vivre au ralenti sur ses réserves, sans manger) → `reveil` (au printemps, le corps se rallume).
- Animation : animal dans un terrier ; matérialiser l'invisible — un **cœur** avec battements espacés (SMIL lent) et un **thermomètre** qui descend (cause du « pas un simple sommeil »). Contraste : icône « dodo » (Zzz) barrée vs cœur ralenti/thermomètre bas.

### Task 6 : L'écholocation de la chauve-souris
- slug `lecholocation-de-la-chauve-souris` · animationId `echolocation` · thumbnail 🦇
- Idée reçue : « les chauves-souris sont aveugles » → elles **voient**, mais dans le noir elles « voient avec le son » : elles crient, l'écho revient, leur cerveau reconstruit la scène.
- Beats : `voit` (le jour, elle voit avec ses yeux) → `cri` (la nuit, elle lance des sons très aigus) → `echo` (le son **rebondit** sur un insecte et **revient**) → `image` (le délai du retour dit la distance : elle « dessine » l'obstacle). Cohérent avec `comment-voyage-le-son` (le son est une onde qui voyage).
- Animation : chauve-souris émettant des **arcs d'onde** vers un papillon/mur, puis des arcs **de retour** (invisible matérialisé) ; en `image`, l'obstacle se révèle. Contraste : yeux barrés « aveugle » vs yeux ouverts + ondes.

### Task 7 : Comment les poissons respirent
- slug `comment-les-poissons-respirent` · animationId `branchies` · thumbnail 🐟
- Idée reçue : « il n'y a pas d'air dans l'eau » → l'eau contient de l'**oxygène dissous** ; les **branchies** le captent au passage de l'eau.
- Beats : `oxygene-dans-leau` (des bulles/points d'oxygène invisibles sont mêlés à l'eau) → `avale` (le poisson fait entrer l'eau par la bouche) → `branchies` (l'eau passe sur les branchies, qui **retiennent l'oxygène**) → `rejet` (l'eau ressort par les ouïes, sans son oxygène).
- Animation : eau traversée de petits points « O₂ » ; flux d'eau bouche → branchies → ouïes ; sur les branchies, les points O₂ **captés** (couleur qui change) tandis que l'eau ressort claire (cause). Contraste : « pas d'air dans l'eau » barré vs points O₂ présents.

### Task 8 : Pourquoi les zèbres ont des rayures
- slug `pourquoi-les-zebres-ont-des-rayures` · animationId `zebre` · thumbnail 🦓
- Idée reçue : « c'est pour se cacher dans les hautes herbes » → l'hypothèse la mieux étayée : les rayures **gênent les mouches piqueuses** (taons), qui se posent beaucoup moins sur un pelage rayé.
- Beats : `question` (pourquoi ces rayures voyantes ?) → `pas-camouflage` (dans la savane rase, un zèbre rayé se **voit** de loin — le camouflage n'explique pas) → `mouches` (les taons évitent de se poser sur les rayures) → `moins-piques` (moins de piqûres, moins de maladies : un vrai avantage).
- Animation : zèbre ; en `pas-camouflage`, fond de savane où il ressort (réfute) ; en `mouches`, des taons qui **rebondissent/dévient** au-dessus des rayures vs se posent sur une zone unie de comparaison (contraste côte à côte). Invisible matérialisé : trajectoires des mouches.

### Task 9 : Comment les abeilles font le miel
- slug `comment-les-abeilles-font-le-miel` · animationId `miel` · thumbnail 🐝
- Idée reçue : « elles fabriquent le miel avec du pollen, pour nous » → à partir du **nectar** des fleurs, transformé et **séché** ; c'est leur **réserve de nourriture** pour l'hiver.
- Beats : `nectar` (l'abeille aspire le nectar sucré, liquide) → `transport` (elle le rapporte à la ruche dans son jabot) → `transformation` (les abeilles se le passent, y ajoutent leurs sucs, et **ventilent** pour évaporer l'eau) → `reserve` (le miel épais est stocké dans les alvéoles comme provision d'hiver).
- Animation : fleur → abeille → ruche ; matérialiser la **perte d'eau** (gouttes qui s'évaporent, ailes qui ventilent) transformant nectar liquide en miel épais (cause). Distinguer nectar (pris) et pollen (juste transporté aux pattes). Contraste : pot « pour nous » recadré en réserve de la ruche.

### Task 10 : La toile de l'araignée
- slug `la-toile-de-laraignee` · animationId `toile` · thumbnail 🕷️
- Idée reçue : « l'araignée se colle à sa propre toile » → **tous les fils ne collent pas** : les rayons sont secs, seule la spirale est gluante ; elle marche sur les fils secs (et ses pattes sont adaptées).
- Beats : `rayons` (elle tend d'abord des fils **secs** en rayons) → `spirale` (puis une spirale de fils **collants** pour piéger) → `marche` (elle se déplace en posant les pattes sur les **rayons secs**) → `proie` (l'insecte, lui, touche la spirale collante et reste pris).
- Animation : construction de la toile ; **coder visuellement** fils secs (couleur A) vs fils collants (couleur B, avec petites gouttes de colle) — invisible rendu visible ; l'araignée suit un chemin surligné sur les fils secs (cause). Contraste : proie collée sur la spirale, araignée libre sur les rayons.

### Task 11 : Pourquoi le chat retombe sur ses pattes
- slug `pourquoi-le-chat-retombe-sur-ses-pattes` · animationId `chat-retombe` · thumbnail 🐱
- Idée reçue : « il retombe toujours sans se faire mal » → il **pivote en pliant le corps**, sans point d'appui, pour se retourner ; mais il tombe bel et bien (une chute peut le blesser). Cohérent avec `pourquoi-tout-tombe` : la gravité l'attire, il ne fait que s'orienter.
- Beats : `depart` (le chat part dos vers le sol) → `plie` (il **plie** le corps en deux et tourne l'avant puis l'arrière) → `sans-appui` (il se retourne **sans rien pousser** : il fait tourner une moitié dans un sens, l'autre dans l'autre) → `pattes` (il finit pattes vers le bas, prêt à amortir). Ne pas suggérer l'invincibilité.
- Animation : séquence de retournement ; matérialiser l'invisible — **flèches de rotation** opposées sur l'avant et l'arrière du corps (la cause : il n'y a pas de sol pour pousser). Flèche de gravité constante vers le bas (ne pas contredire la chute). Contraste : « ne se fait jamais mal » nuancé par la flèche de chute.

---

## Tâches 12 à 21 — Les dix cartes « météo »

Même recette, domaine `meteo`, quiz dans `content/quiz/meteo.ts`. Un commit par carte, chacune déclarée dans `EN_ATTENTE_AUDIO`, chacune passée à l'audit d'illustrations.

### Task 12 : Les nuages
- slug `les-nuages` · animationId `nuages` · thumbnail ☁️
- Idée reçue : « un nuage, c'est de la vapeur » → des **gouttelettes/cristaux** en suspension ; la vraie vapeur, elle, est **invisible**. Angle « le nuage comme objet » (ne pas rejouer le cycle de l'eau).
- Beats : `vapeur-invisible` (l'eau qui s'évapore est un gaz qu'on ne voit pas) → `refroidit` (en montant, l'air se refroidit) → `gouttelettes` (la vapeur redevient de minuscules gouttelettes : ça, on le voit — c'est le nuage) → `flotte` (les gouttelettes sont si petites que l'air les porte).
- Animation : colonne d'air ; en bas vapeur **invisible** (flèches montantes, rien à voir) ; en haut apparition des gouttelettes (le visible naît du refroidissement — cause) ; petites gouttes portées par des flèches d'air (pourquoi ça flotte). Contraste : étiquette « vapeur » (invisible) vs « gouttelettes » (visible).

### Task 13 : Pourquoi il fait plus froid en montagne
- slug `pourquoi-il-fait-plus-froid-en-montagne` · animationId `altitude-froid` · thumbnail ⛰️
- Idée reçue : « en haut, on est plus près du Soleil, il devrait faire plus chaud » → la distance au Soleil ne change quasiment pas ; en altitude, l'**air se raréfie** et retient moins la chaleur, donc il fait plus froid.
- Beats : `sommet-neige` (au sommet il gèle, même en été) → `pas-le-soleil` (le Soleil est à 150 millions de km : quelques km de plus ne comptent pas) → `air-rare` (plus on monte, moins il y a d'air) → `retient-moins` (l'air épais du bas garde la chaleur ; l'air rare du haut la laisse filer).
- Animation : montagne, thermomètre chaud en bas / froid en haut. Invisible matérialisé : **densité de l'air** (points d'air serrés en bas, clairsemés en haut) et flèches de chaleur retenue en bas / qui s'échappe en haut (cause). Contraste : flèche « plus près du Soleil » **barrée**.

### Task 14 : La foudre et le tonnerre
- slug `la-foudre-et-le-tonnerre` · animationId `foudre` · thumbnail ⚡
- Idée reçue : « on voit l'éclair et on entend le tonnerre en même temps » → la foudre est une **étincelle électrique géante** ; la **lumière arrive avant le son** (elle va bien plus vite), on **compte les secondes** pour estimer la distance. Cohérent avec `comment-voyage-le-son` (ne pas rejouer la propagation du son ; la lumière est plus rapide, jamais l'inverse).
- Beats : `charge` (dans le nuage d'orage, l'électricité s'accumule) → `etincelle` (elle jaillit d'un coup vers le sol : l'éclair, une énorme étincelle) → `lumiere-avant` (on **voit** l'éclair tout de suite, mais le **bruit** met du temps à arriver) → `compter` (compter les secondes entre l'éclair et le tonnerre dit s'il est loin).
- Animation : nuage chargé (signes + / −), éclair ; matérialiser les deux vitesses — front **lumière** instantané vs front **son** (arcs) qui progresse lentement (cause du décalage) ; un petit compteur de secondes. Contraste : « en même temps » barré.

### Task 15 : La neige
- slug `la-neige` · animationId `neige` · thumbnail ❄️
- Idée reçue : « la neige, c'est de la pluie gelée » → des **cristaux** formés **directement** à partir de la vapeur dans le froid, à **six branches** (la pluie gelée, elle, donne du verglas/grésil, pas des flocons).
- Beats : `pas-pluie-gelee` (ce n'est pas une goutte de pluie qui a gelé en tombant) → `vapeur-au-froid` (tout en haut, très froid, la vapeur se change **directement** en glace) → `cristal-six` (elle forme un cristal minuscule à **six branches**) → `flocon` (les cristaux s'assemblent et tombent en flocons, chacun différent).
- Animation : côté gauche, une goutte qui gèle (grésil, rond) **barré** ; côté droit, vapeur → cristal hexagonal qui pousse ses six branches (cause). Invisible : la vapeur qui se **dépose** en glace. Contraste explicite goutte-gelée vs cristal.

### Task 16 : La grêle
- slug `la-grele` · animationId `grele` · thumbnail 🧊
- Idée reçue : « la grêle, c'est de la neige en boule » → des **grêlons** qui **montent et descendent** dans l'orage et s'entourent de **couches de glace** successives.
- Beats : `orage` (un gros nuage d'orage avec de forts courants d'air vers le haut) → `monte-descend` (une gouttelette gelée est **soulevée**, retombe, resoulevée…) → `couches` (à chaque tour, une nouvelle **couche de glace** l'entoure) → `tombe` (trop lourde, elle tombe : un grêlon fait de couches, comme un oignon).
- Animation : nuage ; un grêlon qui **oscille** verticalement (SMIL) porté par une **flèche de courant ascendant** (invisible → visible) ; à chaque cycle une couche s'ajoute (grêlon qui grossit — cause). En coupe finale, les couches. Contraste : « neige en boule » vs couches d'orage.

### Task 17 : Le brouillard
- slug `le-brouillard` · animationId `brouillard` · thumbnail 🌫️
- Idée reçue : « le brouillard descend du ciel » → c'est un **nuage posé au niveau du sol** : l'air près du sol se refroidit la nuit et sa vapeur se condense sur place. Cohérent avec `les-nuages`.
- Beats : `soir` (l'air près du sol se refroidit le soir) → `condense` (sa vapeur devient des gouttelettes, juste au-dessus du sol) → `nuage-au-sol` (ces gouttelettes forment un nuage, mais **par terre** : le brouillard) → `leve` (le matin, le soleil réchauffe, les gouttelettes s'évaporent, le brouillard se lève).
- Animation : paysage bas ; refroidissement (thermomètre) → gouttelettes qui apparaissent **au sol** (pas venues d'en haut — réfute « descend du ciel ») ; comparaison discrète avec un nuage en altitude (même chose, autre hauteur). Invisible : refroidissement de l'air. Contraste : flèche « descend du ciel » barrée vs formation sur place.

### Task 18 : L'ouragan
- slug `louragan` · animationId `ouragan` · thumbnail 🌀
- Idée reçue : « dans une tempête, le vent tourne n'importe comment » → un ouragan est une **spirale géante organisée** qui tourne autour d'un **œil calme** au centre.
- Beats : `mer-chaude` (il naît au-dessus d'une mer chaude, qui donne son énergie) → `spirale` (les vents s'enroulent en une immense **spirale**) → `oeil` (au centre, un **œil** étrangement calme et dégagé) → `structure` (loin d'être en désordre, tout tourne autour de ce centre).
- Animation : vue de dessus ; bras spiralés qui tournent (SMIL rotation) autour d'un œil central immobile ; **flèches de vent** suivant la spirale (invisible → visible, montre l'ordre). Contraste : nuage de flèches désordonnées barré vs spirale ordonnée.

### Task 19 : La rosée du matin
- slug `la-rosee-du-matin` · animationId `rosee` · thumbnail 💧
- Idée reçue : « la rosée tombe du ciel pendant la nuit » → l'eau **déjà présente dans l'air** se **condense sur place** sur les surfaces froides quand la température baisse la nuit.
- Beats : `air-humide` (l'air contient de la vapeur d'eau, invisible) → `nuit-froide` (la nuit, l'herbe et les feuilles refroidissent) → `condense` (au contact du froid, la vapeur redevient des gouttes **sur** la feuille) → `matin` (au matin, tout est couvert de gouttes — elles ne sont pas tombées, elles se sont formées là).
- Animation : brin d'herbe/feuille ; vapeur invisible autour (petits points) ; thermomètre qui baisse → gouttes qui **apparaissent sur** la surface (pas de chute depuis le haut — réfute). Invisible : vapeur + refroidissement. Contraste : flèche « tombe du ciel » barrée.

### Task 20 : Le givre
- slug `le-givre` · animationId `givre` · thumbnail 🌬️
- Idée reçue : « le givre, c'est de la rosée gelée » → la vapeur se transforme **directement en glace**, sans passer par l'eau liquide (déposition), quand la surface est sous 0 °C.
- Beats : `pas-rosee-gelee` (ce ne sont pas des gouttes de rosée qui ont gelé après coup) → `surface-glacee` (la surface est déjà bien en dessous de zéro) → `depot-direct` (la vapeur de l'air se change **directement** en glace dessus) → `cristaux` (il se forme de fins cristaux blancs, en plumes et aiguilles).
- Animation : feuille sous 0 °C ; vapeur (points) qui devient **directement** cristaux blancs (pas d'étape goutte — cohérent/contraste avec `rosee`) ; petit rappel côte à côte : rosée = gouttes (>0°C) / givre = cristaux (<0°C). Invisible : déposition vapeur→glace. Contraste central.

### Task 21 : La forme des gouttes de pluie
- slug `la-forme-des-gouttes-de-pluie` · animationId `goutte-forme` · thumbnail 🌧️
- Idée reçue : « une goutte a la forme d'une larme (pointue en haut) » → petite, elle est **ronde** ; en tombant plus grosse, l'air la **aplatit par en dessous** — elle ressemble à un petit coussin/pain, pas à une larme.
- Beats : `image-larme` (on dessine toujours la goutte en larme pointue) → `petite-ronde` (en vrai, une petite goutte est une **boule** : l'eau se tient serrée) → `air-dessous` (en tombant, l'air pousse **sous** la goutte) → `coussin` (l'air l'aplatit par dessous : elle prend la forme d'un petit coussin, jamais d'une larme).
- Animation : à gauche la larme dessinée **barrée** ; à droite, goutte ronde au repos puis, en chute, une **flèche d'air vers le haut sous la goutte** (invisible → visible, la cause) qui l'aplatit en coussin. Contraste larme vs coussin, côte à côte.

---

## Task 22 : Audio en un seul passage Batch, puis finalisation (déclenché par l'utilisateur)

**Files:**
- Modify: `tests/audio.test.ts` (vider `EN_ATTENTE_AUDIO`)
- Create (généré) : `public/audio/<slug>/<age>/<beat>.mp3` (×20 cartes) et audio des quiz.

**Préalable :** les 20 cartes + quiz existent, `npm test` passe avec les 20 slugs dans `EN_ATTENTE_AUDIO`, `.env.local` contient `GEMINI_API_KEY`.

- [ ] **Step 1 : Générer l'audio des cartes via l'API Batch**

Run : `npm run audio:batch`
Expected : produit les mp3 manquants des 20 cartes (quota Batch propre, rend la main en quelques minutes). En cas de coupure en plein milieu, `npm run audio:attente` recalcule `EN_ATTENTE_AUDIO` depuis les fichiers présents.

- [ ] **Step 2 : Générer l'audio des quiz**

Run : `npm run audio:quiz`
Expected : produit l'audio des questions des deux nouveaux domaines.

- [ ] **Step 3 : Retirer les cartes sonorisées de la liste d'attente**

Run : `npm run audio:attente`
Expected : `EN_ATTENTE_AUDIO` ne contient plus que d'éventuelles cartes réellement sans audio (idéalement vide).

- [ ] **Step 4 : Vérification finale**

Run : `npm test`
Expected : PASS, audio compris (le garde-fou vérifie désormais les fichiers).

Run : `npm run lint && npm run build`
Expected : PASS.

- [ ] **Step 5 : Commit**

```bash
git add public/audio tests/audio.test.ts public/audio/manifeste.json
git commit -m "Génère l'audio des vingt cartes animaux et météo (lot Batch)"
```

---

## Auto-revue (faite)

- **Couverture du spec :** les deux tables éditoriales → Tasks 2–21 (papillon exemplaire + 9 animaux + 10 météo, arc-en-ciel remplacé par montagne, foudre recentrée). Câblage des domaines → Task 1. Standard d'animation → Global Constraints + chaque bloc de carte (cause/invisible/contraste). Audio Batch en un passage → Task 22. `EN_ATTENTE_AUDIO` → étape dédiée dans chaque carte + Task 22.
- **Placeholders :** Task 1 et Task 2 entièrement concrètes (code et textes réels). Tasks 3–21 : contenu créatif spécifié (idée reçue, beats identifiés, mise en scène, mapping quiz) ; le câblage mécanique est fixé une fois dans « Recette de câblage d'une carte » et l'exemplaire papillon.
- **Cohérence des noms :** slugs, `animationId` et `id` de beats fixés par tâche ; `PHASES` = beats ; imports/entrées à ajouter dans `registry.tsx`, `content/cards/index.ts`, `content/quiz/<domaine>.ts` et `EN_ATTENTE_AUDIO` selon la recette.
- **Cohérence scientifique :** foudre cohérente avec la carte son (lumière plus rapide, jamais l'inverse) ; écholocation complémentaire (écho) ; chat qui tombe bien sous la gravité (ne pas suggérer l'invincibilité) ; givre/rosée/neige distincts par mécanisme.
