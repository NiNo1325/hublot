# Conception — Gamification du quizz (chantier E)

Date : 2026-08-08
Statut : validé, prêt pour le plan d'implémentation

## Contexte

Retour de bêta-testeur (backlog `docs/retours-beta/2026-07-29-backlog-ux.md`, E) :
« un peu plus de gamification ; les apps d'apprentissage pour enfants sont
gamifiées ». On cible ici la **gamification du quizz**, avec pour objectif la
**progression persistante** (donner envie de revenir jouer).

État actuel (`components/quiz/QuizView.tsx`) : une série de ≤ 8 questions tirées
des cartes déjà écoutées ; après réponse, un verdict (« Bravo » / « Pas tout à
fait ») + l'explication ; écran final « X bonnes réponses sur N » avec Rejouer /
Menu. `reussies` est un état de session, **non persisté**. Aucun score/badge
n'est stocké aujourd'hui (seules `age`, `ageRange`, `cartesVues` le sont). L'ADN
est **strictement non-punitif** : « le quizz sert à rectifier une idée reçue, pas
à noter » (cf. `content/quiz/verdicts.ts`).

## Décisions cadrées (brainstorming)

- **Objectif** : progression **persistante** (revenir jouer), au-delà du plaisir
  in-quiz.
- **Forme** : **étoiles + rangs**. Étoiles cumulées (1 par bonne réponse), des
  paliers débloquent des rangs, avec un objectif clair (le rang suivant).
- **Non-punitif** : les étoiles ne font que **monter** ; une mauvaise réponse ne
  rapporte rien mais ne retire rien, et l'explication enseigne toujours.
- **Clin d'œil « d'affilée »** : encouragement positif après plusieurs bonnes
  réponses de suite, **jamais** de « série perdue ».
- **Reset couplé** : « Oublier les cartes déjà écoutées » remet aussi les étoiles
  à zéro (moment « nouvel enfant »).
- **Hors périmètre** : le héros qui évolue *visuellement* (rails posés, mais on
  s'en tient au rang « icône + nom » ici).

## Modèle de données

- Nouvelle clé **`science.etoiles.v1`** = total d'étoiles (entier ≥ 0), source de
  vérité unique de la progression.
- Hook **`useEtoiles()`** (`components/quiz/useEtoiles.ts`), sur le modèle de
  `useCartesVues` (`useSyncExternalStore`, source externe au rendu) :
  - `etoiles: number` (total lu),
  - `gagnerEtoiles(n: number)` (incrémente et notifie),
  - `oublierEtoiles()` (remet à 0, appelé par le reset).
- Fonction pure **`rangDepuisEtoiles(total: number)`** (`lib/etoiles.ts`) →
  `{ index, rang, icone, seuil, seuilProchain }` où `seuil` est le plancher du
  rang courant et `seuilProchain` le plancher du rang suivant (ou `null` au
  dernier rang).

## Les rangs (placeholders, ajustables)

| Index | Icône | Rang | Seuil (⭐) |
|---|---|---|---|
| 0 | 🔭 | Apprenti | 0 |
| 1 | 🧭 | Explorateur | 20 |
| 2 | 🚀 | Aventurier | 50 |
| 3 | 🔬 | Chercheur | 100 |
| 4 | 🎓 | Savant | 175 |
| 5 | 🧠 | Génie | 275 |

L'icône sert les non-lecteurs ; le nom sert lecteurs et parents.

## Pendant le quizz (in-quiz)

- À chaque **bonne réponse**, une **étoile** apparaît (petit pop), et une
  **rangée d'étoiles de la série** (jusqu'à 8) se remplit — repère visuel pour
  les non-lecteurs, en plus du verdict audio existant.
- **Encouragement positif seulement** : un compteur local de bonnes réponses
  consécutives ; à partir de 3 d'affilée, un petit « En pleine forme ! » (visuel).
  Une mauvaise réponse remet ce compteur à 0 **sans aucun message négatif** (rien
  n'est affiché comme « perdu »).
- Aucune étoile n'est écrite dans le total en cours de série : on crédite le
  total **à la fin** (voir ci-dessous), pour une célébration lisible et un seul
  point d'écriture.

## Fin de série (célébration)

L'écran final (`index >= serie.length`) devient festif :
- Rappel « X bonnes réponses sur N » (comme aujourd'hui, encourageant).
- Les **N étoiles gagnées** sont créditées au total (`gagnerEtoiles(reussies)`),
  avec un **compteur qui monte** de l'ancien total au nouveau.
- Si le crédit **franchit un seuil de rang** (comparaison `rangDepuisEtoiles`
  avant/après) → un moment « **Nouveau rang : Explorateur !** » avec l'icône.
- Boutons Rejouer / Menu conservés. Aucune sanction, jamais.

Le crédit est **idempotent par série** : on n'écrit qu'une fois (un drapeau
`credite` empêche un double-crédit si l'écran final se re-rend).

## Le hook « revenir » (menu d'accueil)

Dans le menu du visiteur de retour (`components/age/AgeGate.tsx`, bloc
`ageRange && !changementDemande`), sous « Découvrir / Quizz », un **indicateur de
progression** : icône + rang + total d'étoiles, et une **barre vers le prochain
rang** (« plus que N ⭐ pour <rang suivant> » ; masquée au dernier rang). C'est
le rappel qui donne envie de rejouer. Boucle : explorer des cartes → jouer →
gagner des étoiles → monter en rang.

## Remise à zéro

Le bouton existant « Oublier les ... cartes déjà écoutées » (mode
`?changer=1`) appelle désormais **aussi** `oublierEtoiles()` : passer la tablette
au cadet repart d'une progression vierge, cohérent avec l'oubli des cartes vues.

## Gestion des erreurs / cas limites

- Total corrompu/absent dans le stockage → lu comme 0.
- `rangDepuisEtoiles` borne : total négatif → rang 0 ; au-delà du dernier seuil →
  dernier rang, `seuilProchain = null`.
- SSR / premier rendu : le hook renvoie 0 côté serveur (comme `useCartesVues`),
  hydraté ensuite ; le menu n'affiche l'indicateur qu'une fois monté.
- Non-lecteurs : rang représenté par une icône ; étoiles visuelles ; verdict
  audio inchangé.

## Découpage & tests

- **`lib/etoiles.ts`** : `RANGS` + `rangDepuisEtoiles`, **purs**, testés en node
  (rang à chaque seuil et juste en dessous, `seuilProchain`, bornes 0 / négatif /
  au-delà du dernier).
- **`components/quiz/useEtoiles.ts`** : lecture/écriture `localStorage`, external
  store (partie sérialisation testable si besoin, comme `useCartesVues`).
- `QuizView` (gain in-quiz + célébration finale + crédit idempotent), `AgeGate`
  (indicateur + reset couplé) : validés par `tsc`/`lint`/`build` + vérification
  manuelle (pas de harnais de rendu de composant).
- Tests existants inchangés (le quizz garde son comportement de fond).

## Impact sur l'existant

- `QuizView.tsx` : gain d'étoiles à la bonne réponse, rangée d'étoiles, écran
  final festif avec crédit + rang-up.
- `AgeGate.tsx` : indicateur de progression au menu ; reset couplé.
- Nouveaux : `lib/etoiles.ts`, `components/quiz/useEtoiles.ts`, `tests/etoiles.test.ts`.
- Aucune donnée personnelle nouvelle ; tout en `localStorage`, hors-ligne OK.
