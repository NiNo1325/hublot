# Conception — Badges de domaine (chantier E2a)

Date : 2026-08-08
Statut : validé, prêt pour le plan d'implémentation

## Contexte

Suite de la gamification (E, livré : étoiles + rangs au quizz). L'utilisateur veut
aller plus loin. Deux pièces retenues au brainstorming :
- **E2a — Badges de domaine** (ce document) : deux badges par monde, codable
  immédiatement.
- **E2b — Mascotte évolutive** (chantier séparé, plus tard) : un compagnon dédié
  qui évolue par rang, **6 illustrations** à générer. Hors périmètre ici.

État actuel utile : la grille des mondes (B1) affiche déjà, par domaine, un anneau
de progression et une **coche « monde terminé »** quand toutes les cartes du
domaine ont été écoutées (`vues ≥ total`, calculé depuis `cartesVues`). Le quizz
tire une question par carte écoutée et connaît la bonne réponse. L'ADN reste
**strictement non-punitif**.

## Décisions cadrées (brainstorming)

- **Deux badges par domaine** : « **exploré** » (les 10 cartes écoutées) et
  « **maîtrisé** » (les 10 réussies au quizz au moins une fois).
- **Suivi de maîtrise** : nouveau stockage des cartes réussies au quizz.
- **Affichage** : repère « maîtrisé » sur la tuile de monde (la coche existante
  vaut déjà « exploré ») **et** un **écran collection** (« Ma collection ») listant
  les 10 domaines × 2 badges.
- **Non-punitif** : les badges n'apparaissent que ; un domaine non maîtrisé est
  « à continuer », jamais « raté ». Le reset couplé efface aussi la maîtrise.

## Modèle de données

- Nouvelle clé **`science.cartesMaitrisees.v1`** : identifiants des cartes réussies
  au quizz au moins une fois, sérialisés en liste séparée par des virgules (comme
  `science.cartesVues.v1`).
- Hook **`useCartesMaitrisees()`** (`components/cards/useCartesMaitrisees.ts`), sur
  le modèle de `useCartesVues` (external store) :
  - `cartesMaitrisees: Set<string>`,
  - `marquerMaitrisee(cardId: string)` (ajoute, no-op si déjà présent),
  - `oublierMaitrisees()` (vide, pour le reset).
  - Sérialisation exposée et testable : `lireMaitrisees(brut)` / `ecrireMaitrisees(set)`.
- Fonction pure **`badgesDomaine(cards, cartesVues, cartesMaitrisees, domainId)`**
  (`lib/badges.ts`) → `{ explore: boolean; maitrise: boolean }` :
  - `explore` = toutes les cartes du domaine ∈ `cartesVues` ;
  - `maitrise` = toutes les cartes du domaine ∈ `cartesMaitrisees`.
  - Un domaine sans carte (impossible ici) renvoie `false`/`false`.

## Marquage de la maîtrise (`QuizView`)

À chaque **bonne réponse**, en plus de l'existant (`reussies`, `dAffilee`,
étoiles), appeler `marquerMaitrisee(tirage.carte.id)`. Une carte est « maîtrisée »
dès qu'une de ses questions est réussie une fois — cohérent avec le tirage (une
question par carte) et non-punitif (aucune régression possible).

## Affichage

### Tuile de monde (`MondeTile`)
La coche verte « terminé » (déjà présente, `complet = vues ≥ total`) **vaut
« exploré »**. On ajoute un repère **« maîtrisé »** (🏅) sur le hublot quand
`badgesDomaine(...).maitrise` est vrai. Les deux repères restent visuels
(non-lecteurs), avec un `sr-only` explicite.

### Écran collection (`/collection`)
- Nouvelle route **`app/collection/page.tsx`** (Server Component) → **`CollectionView`**
  (client). Redirige vers `/` sans âge (motif des autres vues).
- Grille des 10 domaines ; pour chacun : icône + nom du monde, et les **deux
  badges** (🧭 exploré, 🏅 maîtrisé) — en couleur si obtenus, **grisés** sinon.
- Un compteur en tête : « X/10 mondes explorés · Y/10 maîtrisés ».
- En-tête avec retour Menu.

### Accès depuis le menu (`AgeGate`)
Dans le menu du visiteur de retour, un bouton **« 🏅 Ma collection »** (`/collection`),
près de la carte de progression des rangs.

## Remise à zéro

Le bouton existant « Oublier les … cartes déjà écoutées » (mode `?changer=1`)
appelle **aussi** `oublierMaitrisees()` (en plus de `oublierToutesLesVues()` et
`oublierEtoiles()`) : nouvel enfant → collection vierge.

## Gestion des erreurs / cas limites

- Stockage absent/corrompu → ensemble vide (comme `cartesVues`).
- Domaine partiellement exploré/maîtrisé → badge non obtenu (grisé), jamais
  d'état négatif.
- SSR : les hooks renvoient un ensemble vide côté serveur, hydraté ensuite ; les
  écrans ne s'affichent qu'une fois montés / l'âge résolu.
- Non-lecteurs : badges = icônes ; `sr-only` pour l'accessibilité.

## Découpage & tests

- **`lib/badges.ts`** : `badgesDomaine`, **pur, testé en node** (exploré/maîtrisé
  vrai seulement si toutes les cartes du domaine y sont ; faux si une manque ;
  indépendance entre domaines).
- **`components/cards/useCartesMaitrisees.ts`** : `lireMaitrisees`/`ecrireMaitrisees`
  testables sans navigateur (comme `useCartesVues`).
- `QuizView` (marquage), `MondeTile` (repère maîtrisé), `CollectionView` +
  route, `AgeGate` (accès + reset couplé) : `tsc`/`lint`/`build` + vérification
  manuelle (pas de harnais de rendu de composant).
- Tests existants inchangés (ajouts additifs).

## Impact sur l'existant

- Nouveaux : `lib/badges.ts`, `tests/badges.test.ts`,
  `components/cards/useCartesMaitrisees.ts`, `app/collection/page.tsx`,
  `components/cards/CollectionView.tsx`.
- Modifiés : `components/quiz/QuizView.tsx` (marquage maîtrise),
  `components/cards/MondeTile.tsx` (repère maîtrisé) et son appelant `MondesView`
  si une prop est nécessaire, `components/age/AgeGate.tsx` (bouton collection +
  reset couplé).
- Aucune donnée personnelle nouvelle ; tout en `localStorage`, hors-ligne OK
  (la route `/collection` sera ajoutée au `SHELL` du service worker pour le
  démarrage à froid, `VERSION` incrémentée).

## Hors périmètre

- **E2b — Mascotte évolutive** (6 illustrations, rank-driven) : chantier suivant.
- Badges illustrés (assets) : on reste sur des emojis ici.
