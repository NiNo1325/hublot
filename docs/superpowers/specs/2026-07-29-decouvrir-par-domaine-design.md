# Conception — « Découvrir » par domaine (chantier B1)

Date : 2026-07-29
Statut : validé, prêt pour le plan d'implémentation

## Contexte

Retour de bêta-testeur : la page « Découvrir » empile un filtre de domaines
multi-select (`DomainFilter`) et une grille des **100 cartes** (`CardGrid`), d'où
un long scroll et un mélange déroutant entre « choisir un sujet » et « choisir
une carte ». Le testeur suggère un menu où l'on voit ce qu'on a sélectionné et
une navigation plus claire.

Ce chantier (B1 du backlog `docs/retours-beta/2026-07-29-backlog-ux.md`)
introduit une **navigation à deux niveaux** : les **domaines d'abord** (10
« mondes » avec progression), puis les cartes d'un domaine. Il pose aussi les
rails de la future gamification (chantier E).

État actuel : `/decouvrir` (Server Component) rend `DiscoverView` (client), qui
affiche `DomainFilter` + `CardGrid` (100 cartes) + `CardModal` (carte en modale)
+ `Paywall`. La progression est suivie par `useCartesVues` (cartes écoutées en
`localStorage`), avec une mécanique d'**extinction** : une carte vue s'éteint, et
quand tout le catalogue est vu, tout se rallume. Les 3-5 ans ne lisent pas : la
reconnaissance passe par l'emoji et la couleur du domaine (les titres sont
`sr-only` pour eux).

## Décisions cadrées (brainstorming)

- **Navigation** : routes dédiées (pas de bascule interne dans un seul composant).
- **Ouverture d'une carte** : on garde la **modale** (`CardModal`). Les routes par
  carte (`/decouvrir/[domaine]/[carte]`) restent le chantier B2, hors périmètre.
- **Progression** : un **anneau qui se remplit** autour du hublot du domaine.
- **Slug** de domaine = **id du domaine** (`biologie`, `sciences-de-la-terre`…).
- **Filtre multi-select** (`DomainFilter`) : **supprimé** — la sélection de
  domaine devient la navigation elle-même.
- **Label du monde** : masqué `sr-only` pour les 3-5 ans, comme les cartes.
- **Hors-ligne** : ajouter les 10 routes domaine au `SHELL` précaché.

## Architecture & routage

- **`/decouvrir`** (Server Component) rend un nouveau **`MondesView`** (client) :
  la grille des 10 mondes. Remplace `DiscoverView` en accueil de Découvrir.
- **`/decouvrir/[domaine]/page.tsx`** (Server Component, route dynamique) :
  - `generateStaticParams` retourne les 10 `{ domaine: id }` → routes
    pré-générées au build (cohérent avec le catalogue statique et le hors-ligne).
  - Valide le slug : un id inconnu → `redirect('/decouvrir')` (plus doux qu'un 404
    pour une app enfant).
  - Rend **`DomaineView`** (client) avec les cartes du domaine et sa définition.
- **Pas d'âge choisi** : `DomaineView` et `MondesView` redirigent vers `/`
  (`router.replace('/')`), comme l'actuel `DiscoverView`.

### Hors-ligne (`public/sw.js`)

`SHELL` précache aujourd'hui `['/', '/decouvrir', '/quizz', '/hors-ligne',
'/manifest.webmanifest']`. On y ajoute les 10 routes `/decouvrir/<id>` pour que la
navigation par domaine fonctionne aussi au démarrage à froid sans réseau. La
stratégie réseau-d'abord/cache-en-secours existante gère le reste. `VERSION` du
cache shell est incrémentée (`v2` → `v3`) pour forcer le renouvellement du
précache.

## Niveau 1 — la grille des mondes

### `MondesView` (client) — `components/cards/MondesView.tsx`
- Props : `cards: ScienceCard[]`, `domains: DomainDefinition[]`.
- En-tête identique à l'actuel : titre « Qu'est-ce qui t'intéresse ? » + bouton
  **Menu** (`/`) + bouton **Niveau : X ans — changer** (`/?changer=1`).
- Redirige vers `/` si pas d'âge (`useAgeRange`).
- Rend une grille de `MondeTile`, une par domaine (ordre = `domains`).
- Calcule la progression via `useCartesVues` et le helper `progressionDomaine`.

### `MondeTile` (client) — `components/cards/MondeTile.tsx`
- Props : `domain: DomainDefinition`, `vues: number`, `total: number`,
  `ageRange: AgeRange`.
- Un **hublot** sur le modèle de `CardTile` : disque encre, bordure à la couleur
  du domaine (`domainStyles[id].teinte`), halo, emoji du domaine au centre.
- **Anneau de progression** : un arc SVG superposé au disque, rempli à
  `vues / total` (via `stroke-dasharray`). Domaine **complet** (`vues === total`) :
  anneau plein + **coche verte** (réutilise le motif de `CardTile`).
- Label du domaine (`labels.fr`) sous le disque : `sr-only` pour les 3-5 ans,
  visible sinon. « `vues`/`total` » en petit sous le label pour lecteurs/parents,
  et un `sr-only` explicite pour l'accessibilité (« 3 cartes sur 10 écoutées »).
- Enveloppé dans un `Link` Next vers `/decouvrir/<domain.id>`. Cible tactile ≥ la
  taille du hublot (cohérent avec la règle tactile enfant du projet).
- `prefers-reduced-motion` : l'arc reste statique (pas d'animation de remplissage
  requise ; l'allumage en séquence peut être conservé comme les tuiles).

## Niveau 2 — la page d'un domaine

### `DomaineView` (client) — `components/cards/DomaineView.tsx`
- Props : `domain: DomainDefinition`, `cards: ScienceCard[]` (déjà filtrées sur le
  domaine côté Server Component).
- En-tête : **bouton retour vers les mondes** (`/decouvrir`, icône « ← » ou
  hublot, compréhensible sans lire) + **titre du domaine** (`labels.fr`) + boutons
  **Menu** et **Niveau** (identiques à l'actuel).
- Réutilise **`CardGrid`** telle quelle avec les cartes du domaine, plus
  **`CardModal`** (à l'ouverture d'une carte) et **`Paywall`** (carte verrouillée).
  La logique `ouvrirCarte` / `estVerrouillee` est reprise de `DiscoverView`.
- **Extinction scopée au domaine** : `cartesEteintes` = cartes vues du domaine,
  sauf si le domaine est entièrement vu → `AUCUNE` (toutes se rallument). Même
  raisonnement que l'actuel `cartesEteintes` global, mais borné au domaine.

## Modèle de données / flux

- `domains` et `cards` importés statiquement (inchangé). La page
  `/decouvrir/[domaine]` filtre `cards` par `domainId === params.domaine` côté
  Server Component avant de passer à `DomaineView`.
- `useCartesVues` (inchangé) fournit l'ensemble des cartes vues côté client.
- **Helper pur** `progressionDomaine(cards, cartesVues, domainId): { vues, total }`
  dans `lib/progression.ts` — total = cartes du domaine, vues = intersection avec
  `cartesVues`. Aucune dépendance au navigateur : **testable en environnement
  node**, comme le reste du harnais.
- Aucune donnée personnelle nouvelle ; tout reste en `localStorage`.

## Ce qui est retiré / déplacé

- **`components/domains/DomainFilter.tsx`** : supprimé (plus référencé). On retire
  aussi la logique `selection`/`basculerDomaine` qui vivait dans `DiscoverView`.
- **`components/cards/DiscoverView.tsx`** : scindé en `MondesView` + `DomaineView`
  puis supprimé.
- **`app/decouvrir/page.tsx`** : rend désormais `MondesView`.

## Hors périmètre (chantiers séparés)

- **Accroches** intrigantes par domaine/carte (chantier C) — la tuile de monde
  laisse la place sous le label, mais aucune accroche n'est ajoutée ici.
- **Routes par carte** `/decouvrir/[domaine]/[carte]` (chantier B2) — la modale
  est conservée.
- **Gamification** badges/héros (chantier E) — l'anneau et la progression par
  domaine en sont le socle, rien de plus ici.

## Gestion des erreurs / cas limites

- Slug de domaine inconnu → `redirect('/decouvrir')`.
- Accès direct à `/decouvrir` ou `/decouvrir/[domaine]` sans âge → `redirect('/')`.
- Domaine sans cartes : impossible (chaque domaine a 10 cartes) ; `CardGrid` gère
  déjà le cas 0 par sécurité.
- Démarrage à froid hors-ligne vers une route domaine : couvert par l'ajout au
  `SHELL` précaché.

## Vérification / tests

- **`lib/progression.ts`** : tests unitaires (node) — total par domaine, vues =
  intersection, cas 0 vue et cas complet.
- **Couverture des routes** : test que `generateStaticParams` (ou la liste source)
  couvre exactement les 10 `domains`, et qu'un id inconnu est traité (redirection).
- Les tests d'intégrité existants (contenu, quizz, audio) restent verts : le
  contenu n'est pas touché.
- Vérification manuelle : `npm run dev`, parcours mondes → domaine → carte, retour,
  progression qui se met à jour, comportement 3-5 (labels masqués), hors-ligne.
- `npm run lint` et `npm run build` (routes statiques générées).

## Impact sur l'existant

- `CardGrid`, `CardTile`, `CardModal`, `Paywall`, `useCartesVues`,
  `useEntitlement`, `useAgeRange` : réutilisés tels quels.
- `AgeGate` (menu) : inchangé — « Découvrir » mène toujours à `/decouvrir`, qui
  affiche maintenant les mondes.
