# Conception — Refonte de la navigation (fondation du « chemin »)

Date : 2026-08-09
Statut : validé (design approuvé en séance), prêt pour l'implémentation

## Contexte

L'app a gagné en profondeur (mondes, quizz, badges, rangs, mascotte Lumi) mais
perdu en lisibilité de parcours. Retours de test regroupés en chantiers ; celui-ci
est la **fondation** demandée en premier : navigation, langage des boutons, et
âge-en-réglages. Il reconditionne tous les écrans.

Décisions cadrées (séance) :
- **Barre d'onglets en bas**, 4 onglets.
- **Âge = réglage** (demandé à la 1ʳᵉ entrée, puis modifiable dans Réglages) ;
  **Lumi devient le seul avatar**, on retire les illustrations d'enfant genrées.
- **Fondation d'abord** (langage CTA + navigation + âge/réglages).

Chantiers suivants, hors périmètre ici : lignes de « Mon parcours » cliquables
vers le détail d'un sujet, barre de progression du rang, refonte des accroches
(question → phrase), flux quizz guidé (« sujet suivant »).

## Architecture de navigation

### Barre d'onglets (nouvelle) — `components/nav/BarreOnglets.tsx`
Barre persistante en bas, quatre destinations, état actif dérivé de `usePathname` :

| Onglet | Icône | Route |
|---|---|---|
| Découvrir | 🔭 | `/decouvrir` |
| Quizz | 🎯 | `/quizz` |
| Mon parcours | 🗺️ | `/parcours` |
| Réglages | ⚙️ | `/reglages` |

- L'onglet Découvrir reste actif sur `/decouvrir` **et** `/decouvrir/[domaine]` ;
  y toucher ramène toujours à la grille des mondes (il double le « retour aux
  mondes »).
- 🗺️ pour Mon parcours : 🧭 sert déjà de badge « exploré ».
- Cibles tactiles ≥ 56 px, `aria-current="page"` sur l'onglet actif, libellés
  visibles (jeunes lecteurs + accessibilité).

### Coquille partagée — groupe de routes `app/(app)/`
Les quatre destinations vivent dans un groupe `(app)` dont le `layout.tsx` rend
`{children}` **plus** la barre d'onglets, avec un padding bas pour ne pas masquer
le contenu. Le groupe ne change pas les URL.

Déplacements de routes :
- `app/decouvrir/**` → `app/(app)/decouvrir/**`
- `app/quizz/**` → `app/(app)/quizz/**`
- `app/collection/` → `app/(app)/parcours/` (**renommée**)
- **nouveau** `app/(app)/reglages/page.tsx`

`/` (accueil, hors groupe) reste sans barre : c'est l'écran de première entrée.

### Accueil `/` — première entrée seulement
- Sans âge en stockage : écran « Tu as quel âge ? » avec **Lumi** comme figure
  (au lieu de l'illustration d'enfant). Valider → `router.replace('/decouvrir')`.
- Avec âge : `redirect`/`replace` immédiat vers `/decouvrir`. Plus de gate
  récurrent, plus de menu d'accueil.

## Écran Réglages — `components/reglages/ReglagesView.tsx`
Récupère ce qui vivait dans l'ancien menu d'accueil :
- **Âge** : le même pas-à-pas (− / chiffre / +) avec Lumi, applique via
  `choisirAge`. Pas de redirection ; on reste dans Réglages.
- **Mode hors-ligne** : l'entrée existante (libellé dynamique `useHorsLigne`),
  menant à `/hors-ligne`.
- **Réinitialiser la progression** : la confirmation en deux temps existante
  (`oublierToutesLesVues` + `oublierEtoiles` + `oublierMaitrisees`).

## Écran Mon parcours (ex « Ma collection »)
- Route renommée `/parcours`, composant `CollectionView` conservé (rename interne
  facultatif). Titre « Mon parcours ».
- **Relocalisation de la carte de rang** : l'ancien menu d'accueil disparaissant,
  la carte « Lumi + rang + total ⭐ » remonte en tête de Mon parcours (forme
  actuelle ; la barre de progression est un chantier suivant).
- Le reste (compteurs écoute/maîtrise + badges) inchangé. Lignes cliquables :
  chantier suivant.

## Langage des boutons (cohérence)
Trois registres, appliqués partout :
- **Primaire** : action principale d'un écran — plein soleil (`bg-soleil/10`
  + bordure soleil + texte soleil), comme « C'est parti ».
- **Secondaire** : alternatives — contour `border-encre-bord`, hover soleil.
- **Statut / contenu** : plat, sans allure de bouton (carte de rang = affichage).

Conséquences concrètes de la fondation :
- Le faux duel « Découvrir (contour) vs Jouer au quizz (orange) » disparaît :
  ce sont deux onglets.
- Boutons « 🏠 Menu » / « ← Les mondes » / « Niveau : X ans — changer » retirés
  des en-têtes de Découvrir, du détail d'un domaine et du quizz : la barre
  d'onglets navigue, et l'âge se change dans Réglages.

## Nettoyage
- `AgeGate` : retirer le bloc « visiteur de retour » (menu) ; ne garder que la
  première entrée (âge + Lumi). Le pas-à-pas d'âge est extrait pour être partagé
  avec Réglages.
- Retirer le changement d'âge de `MondesView` et `DomaineView`.
- Supprimer les illustrations d'âge `public/ages/age-3-5|6-8|9-12.png` et leurs
  imports : Lumi les remplace.

## Service worker
`public/sw.js` : `SHELL` mis à jour — `/`, `/decouvrir`, les dix
`/decouvrir/<domaine>`, `/quizz`, `/parcours`, `/reglages`, `/hors-ligne`,
`/manifest.webmanifest`. Retirer `/collection`. **`VERSION` incrémentée**.

## Accessibilité / cas limites
- Accès direct à une route du groupe sans âge : `redirect` vers `/` (motif
  actuel des vues), qui affiche la première entrée.
- Non-lecteurs : onglets = icône + libellé court ; Lumi reste décor + `aria`.
- Aucune donnée personnelle nouvelle. Tout en `localStorage`, hors-ligne OK.

## Tests
- Logique inchangée côté fonctions pures : la suite existante doit rester verte
  (ajouts additifs). Validation par `tsc`/`lint`/`build` + vérification visuelle
  des écrans (barre d'onglets, première entrée, Réglages, Mon parcours).

## Impact sur l'existant
- Nouveaux : `app/(app)/layout.tsx`, `components/nav/BarreOnglets.tsx`,
  `app/(app)/reglages/page.tsx`, `components/reglages/ReglagesView.tsx`,
  composant d'âge partagé.
- Déplacés/renommés : routes sous `(app)`, `/collection` → `/parcours`.
- Modifiés : `AgeGate` (réduit à la 1ʳᵉ entrée), `MondesView`, `DomaineView`,
  `QuizView`, `CollectionView`, `public/sw.js`, `app/layout.tsx` si besoin.
- Supprimés : trois PNG d'âge.
