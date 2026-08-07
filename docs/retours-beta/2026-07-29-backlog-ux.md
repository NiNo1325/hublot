# Retour bêta-testeur — backlog UX (2026-07-29)

Structuration d'un retour de bêta-testeur en chantiers actionnables. Pour chaque
point : constat, pistes de solution ancrées dans le code, effort estimé, et
tensions éventuelles avec les choix de conception déjà pris. **Rien n'est
implémenté** : ce doc sert de base de décision.

Légende effort : 🟢 petit · 🟡 moyen · 🔴 gros chantier (souvent = contenu à écrire).

---

## Chantier A — Onboarding & choix de l'âge

Regroupe deux retours : « je ferais une roue où tu choisis ton âge » et « les
logos des âges sont vilains ; laisser choisir un héros à incarner ».

### A1. Choix de l'âge par une molette (âge exact → tranche interne) 🟡
- **Constat** : les 3 silhouettes (`AgeGate.tsx`) ne disent pas qu'on choisit une
  *tranche* ; le testeur voudrait saisir un âge précis.
- **Piste** : une molette/curseur de 3 à 12 ans ; en interne on mappe vers
  `'3-5' | '6-8' | '9-12'` (aucun changement de contenu). La silhouette peut
  rester comme retour visuel qui grandit avec l'âge choisi.
- **Tension à trancher** : les 3 silhouettes sont un choix d'**accessibilité
  assumé** — la taille = l'âge, lisible sans savoir lire (cf. commentaires dans
  `AgeGate.tsx`). Une molette de chiffres suppose de lire. *Contre-argument* : le
  niveau est « plutôt réglé par un adulte » (déjà écrit dans le code), donc une
  molette côté parent est acceptable si on garde un repère visuel pour l'enfant.
- **Fichiers** : `components/age/AgeGate.tsx`, `components/age/useAgeRange.ts`.

### A2. Choisir un « héros » / avatar à incarner 🔴
- **Constat** : les silhouettes sont jugées moches ; proposer un personnage.
- **Piste** : une galerie de mascottes **maison** (SVG, dans le style du projet),
  choisies par l'enfant, mémorisées en `localStorage` (aucun compte, cohérent
  avec la vie privée). L'avatar apparaît dans l'en-tête et **évolue avec la
  progression** (voir Chantier E → « le héros devient plus intelligent »).
- **⚠️ Piège juridique** : surtout **pas de personnages sous licence** (Spiderman
  & co.). Des mascottes originales uniquement.
- **Effort** : élevé (concevoir/dessiner les avatars + états d'évolution).
- **Fichiers** : nouveau `components/heros/`, `AgeGate.tsx`, en-têtes.

> A1 et A2 se combinent bien : **âge par molette** (réglage parent) + **héros**
> (identité/plaisir de l'enfant, moteur de gamification).

---

## Chantier B — Navigation & structure de « Découvrir »

Regroupe : « la sélection des cartes n'est pas simple, plutôt un menu général où
l'on voit ce qu'on a sélectionné » et « trop de scroll + mix sujets/cartes, une
sous-page par carte serait plus simple ».

### B1. Navigation à deux niveaux : les domaines d'abord 🟡 (fort ROI)
- **Constat** : `DiscoverView.tsx` empile filtre de domaines (`DomainFilter`) +
  grille de 100 cartes → long scroll, et on mélange « choisir un sujet » et
  « choisir une carte ».
- **Piste** : faire de « Découvrir » un **choix de domaine d'abord** : une grille
  de 10 « mondes » (icône + couleur + **progression `3/10`**), puis on entre dans
  un domaine pour voir ses ~10 cartes. Supprime le mélange, réduit le scroll,
  montre clairement « où j'en suis ». **Sème directement la gamification** (E).
- **Fichiers** : `DiscoverView.tsx`, `DomainFilter.tsx`, `CardGrid.tsx`,
  `useCartesVues.ts` (déjà le suivi des cartes vues).

### B2. Une route par carte (et/ou par domaine) 🟡
- **Constat** : aujourd'hui la carte s'ouvre en **modale** (`CardModal`) ; le
  testeur suggère une sous-page.
- **Piste** : routes `/decouvrir/[domaine]` (niveau B1) et éventuellement
  `/decouvrir/[domaine]/[carte]`. Bonus : des URLs partageables, utiles pour la
  **vitrine web → installation** prévue au chantier freemium.
- **Tension** : la modale est plus simple pour le flux « enfant qui enchaîne ».
  On peut garder la modale dans l'app et n'ajouter les routes que pour le web, ou
  basculer tout en routes. À décider.
- **Fichiers** : `app/decouvrir/`, `DiscoverView.tsx`, `CardModal.tsx`.

---

## Chantier C — Susciter la curiosité sur chaque carte 🟡🔴

- **Constat** : « les enfants ne savent pas ce qu'est *la chimie* ; affiche une
  petite phrase qui intrigue sur chaque carte ». Aujourd'hui la tuile ne montre
  qu'un emoji + le titre (`CardTile.tsx`), et le titre est même masqué pour les
  3-5 ans.
- **Piste** : ajouter un champ **`accroche`** à la carte (une question/fait court
  et intrigant, ex. « Pourquoi le chat retombe-t-il toujours sur ses pattes ? »),
  affiché sur la tuile ou la page domaine pour les 6-8/9-12. Compléter par une
  **accroche de domaine** sur la grille des mondes (B1).
- **Tension / coût** : pour les **3-5 ans** (non-lecteurs), l'intrigue passe par
  l'emoji et l'audio, pas par du texte. Et écrire une accroche par carte = **~100
  textes** (chantier de contenu, comme les cartes elles-mêmes). Démarrage possible
  au niveau **domaine** (10 accroches) avant le par-carte.
- **Fichiers** : `lib/types.ts` (`ScienceCard`), les 100 fichiers `content/cards/**`,
  `CardTile.tsx`, éventuel garde-fou de test.

---

## Chantier D — Plus de richesse visuelle 🟡

- **Constat** : « plus de visuels (images, vidéos, gifs) améliorerait
  l'expérience ».
- **⚠️ Tensions fortes avec l'ADN du produit** :
  - **Mode hors-ligne** : tout média doit être mis en cache (l'audio pèse déjà
    ~141 Mo). Des vidéos/gifs feraient exploser ce poids.
  - **Vie privée** : aucun appel externe ; tout est servi en propre.
  - **Principe « l'animation montre la cause »** : les animations SVG *sont*
    l'explication, pas de la décoration.
- **Pistes compatibles** :
  - **Enrichir les animations SVG** existantes (plus de détail/finition) — poids
    quasi nul, aligné avec l'ADN.
  - Ajouter une **illustration de couverture** par domaine/carte (SVG ou image
    optimisée) pour les mondes (B1) et les tuiles.
  - **Éviter vidéo/gif** : incompatibles hors-ligne + vie privée + perfs.
- **Fichiers** : `components/animations/**`, tuiles/pages domaine.

---

## Chantier E — Gamification & progression 🔴 (chantier phare)

- **Constat** : « un peu plus de gamification : X cartes par sujet → combien de
  sujets finis → le héros devient de plus en plus intelligent (changement de
  logo) ». Les apps d'apprentissage enfants sont très gamifiées.
- **Socle déjà en place** : `useCartesVues` suit les cartes écoutées, et la grille
  a une mécanique d'**extinction** (une carte vue s'éteint ; tout le catalogue vu
  = tout se rallume, comme une fin). Le quizz compte déjà les réussites.
- **Pistes** (toutes en `localStorage`, sans compte, **non punitives** — l'ADN dit
  « on encourage, on ne sanctionne pas ») :
  1. **Progression par domaine** : anneau `3/10` sur chaque monde (B1).
  2. **Domaine terminé = badge/récompense** (les 10 cartes écoutées).
  3. **Héros qui évolue** (A2) : change d'apparence / « devient plus intelligent »
     à mesure que des domaines sont bouclés.
  4. **Étoiles/série au quizz** : capitaliser sur `reussies` (`QuizView`).
- **Synergies** : E s'appuie sur A2 (héros) et B1 (progression par domaine) —
  d'où l'intérêt de les penser ensemble.
- **Fichiers** : `useCartesVues.ts`, nouveau suivi de progression/badges,
  `QuizView.tsx`, `DiscoverView.tsx`, `components/heros/`.

---

## Proposition de priorisation

| Priorité | Chantier | Pourquoi |
|---|---|---|
| 1 (ROI fort) | **B1** — domaines d'abord + progression `x/10` | Règle « sélection confuse » + « trop de scroll » d'un coup, et pose les rails de la gamification. 🟡 |
| 2 | **C (niveau domaine)** — 10 accroches | Intrigue immédiate, coût maîtrisé avant le par-carte. 🟡 |
| 3 | **A1** — molette d'âge | Onboarding plus personnel, effort moyen. 🟡 |
| 4 | **E** — progression/badges | Rétention ; s'appuie sur B1. 🔴 |
| 5 | **A2 + héros évolutif** | Fort effet « waouh », mais gros (design d'avatars). 🔴 |
| — | **C par-carte** (~100 accroches) & **D** | Chantiers de contenu/visuel à étaler. 🔴/🟡 |

### Points à trancher avec toi
- Molette d'âge **vs** silhouettes (accessibilité non-lecteurs).
- Routes par carte **vs** modale (et pour l'app, le web, ou les deux).
- Accroches : niveau **domaine** d'abord, ou direct **par carte** ?
- Visuels : jusqu'où enrichir sans trahir hors-ligne / vie privée / perfs ?
- Gamification : quelles mécaniques garder « douces » pour rester non-punitives.
