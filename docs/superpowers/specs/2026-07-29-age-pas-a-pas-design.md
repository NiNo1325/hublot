# Conception — Choix de l'âge au pas-à-pas (chantier A1)

Date : 2026-07-29
Statut : validé, prêt pour le plan d'implémentation

## Contexte

Retour de bêta-testeur (backlog `docs/retours-beta/2026-07-29-backlog-ux.md`, A1) :
« pour l'âge, je ferais plutôt une roue où tu choisis ton âge, et toi derrière tu
appliques un truc à ta sauce ». Aujourd'hui, `components/age/AgeGate.tsx` propose
**trois silhouettes** de tailles croissantes (une par tranche `3-5`/`6-8`/`9-12`) ;
cliquer une silhouette appelle `chooseAgeRange(range)` puis route vers `/`.

Le hook `components/age/useAgeRange.ts` stocke **la tranche** sous
`science.ageRange.v1` et l'expose comme `ageRange`. Tout le contenu (cartes, quizz,
narration) est indexé par ces trois tranches (`AGE_RANGES` dans `lib/types.ts`) —
ce modèle interne ne doit pas changer.

Tension assumée : les 3 silhouettes sont un choix d'accessibilité (la taille = la
tranche, lisible sans savoir lire). Mais le niveau est « plutôt réglé par un
adulte » (déjà noté dans le code), donc une saisie d'âge exact côté parent est
acceptable **si** on garde un repère visuel pour l'enfant.

## Décisions cadrées (brainstorming)

- **Forme de saisie** : un **pas-à-pas −/+** avec un grand chiffre au centre et une
  **silhouette qui grandit** avec l'âge. (Écartés : la roue défilante iOS — plus
  lourde et capricieuse au tactile/clavier ; le curseur — geste de précision mal
  adapté à un jeune enfant.)
- **Source de vérité** : l'**âge exact** (3–12), avec **migration** de l'ancienne
  tranche stockée.
- **Validation** : un bouton « C'est parti » commite le choix (un pas-à-pas ne
  valide pas au tap comme une silhouette).
- **Libellés** : afficher l'âge exact (« Niveau : 7 ans ») dans les en-têtes.
- **Valeur de départ** : 7 en première visite.
- **Hors périmètre** : le héros/avatar (chantier A2) — on garde la silhouette.

## Modèle de données

- Nouvelle clé de stockage **`science.age.v1`** = l'âge exact (nombre 3–12), source
  de vérité unique.
- Fonction pure **`trancheDepuisAge(age: number): AgeRange`** :
  - 3–5 → `'3-5'`, 6–8 → `'6-8'`, 9–12 → `'9-12'`.
  - Un âge hors plage est **borné** à [3, 12] avant dérivation.
- Fonction pure **`ageDepuisTranche(tier: AgeRange): number`** (âge représentatif,
  pour la migration) : `'3-5'` → 4, `'6-8'` → 7, `'9-12'` → 10.
- **Migration** (dans `useAgeRange`, à la lecture) : si `science.age.v1` est absent
  mais l'ancienne clé `science.ageRange.v1` contient une tranche valide, adopter
  `ageDepuisTranche(tranche)` et l'écrire sous la nouvelle clé. Les utilisateurs
  existants — et l'outillage qui pose encore `science.ageRange.v1` (ex.
  `scripts/auditer-illustrations.mjs`) — gardent leur niveau.
- `useAgeRange` expose désormais :
  - `age: number | null` (l'âge exact),
  - `ageRange: AgeRange | null` (dérivé de `age`, **inchangé pour les
    consommateurs actuels**),
  - `status: 'chargement' | 'pret'` (inchangé),
  - `choisirAge(age: number)` (remplace `chooseAgeRange`, seul `AgeGate`
    l'appelle).

## Le sélecteur — état « choisir » de `AgeGate`

- Remplace le `<ul>` des trois silhouettes par un **pas-à-pas** :
  - un grand bouton **−** et un grand bouton **+** (cible tactile ≥ celle des
    hublots), désactivés respectivement à 3 et à 12 ;
  - un **grand chiffre** central (l'âge) ;
  - la **silhouette existante** (composant `Silhouette`), dont l'échelle suit
    l'âge (interpolée entre les tailles actuelles, croissante de 3 à 12) ;
  - un bouton **« C'est parti »** qui appelle `choisirAge(age)` puis
    `router.push('/')`.
- **État local** de l'âge en cours d'édition : initialisé à `age ?? 7` (l'âge
  courant en mode « changer », sinon 7).
- Accessibilité : `aria-label` sur −/+ (« un an de moins/plus »), le chiffre est
  lisible pour le parent, la taille de la silhouette pour l'enfant, et une annonce
  `sr-only` de l'âge courant. En mode « changer » (`?changer=1`), les boutons
  « Revenir aux cartes » et « Oublier les cartes déjà écoutées » restent inchangés.
- La confirmation en deux temps de la réinitialisation de progression et l'état
  `changementDemande` (via `?changer=1`) sont conservés tels quels.

## Affichage du niveau

Les libellés « Niveau : X ans — changer » affichent l'âge exact (« Niveau : 7 ans »)
au lieu de la tranche. Trois emplacements :
- `AgeGate.tsx` (menu du visiteur de retour),
- `MondesView.tsx` (en-tête),
- `DomaineView.tsx` (en-tête).

Chacun lit `age` depuis `useAgeRange`. Repli : si `age` est `null` (cas transitoire),
ne rien afficher d'incohérent — mais ces écrans ne s'affichent déjà que lorsqu'un
âge est défini.

## Découpage & tests

- **`lib/age.ts`** : `trancheDepuisAge` + `ageDepuisTranche`, **purs**, testés en
  node :
  - bornes de tranche : 3→`3-5`, 5→`3-5`, 6→`6-8`, 8→`6-8`, 9→`9-12`, 12→`9-12` ;
  - clamp : 2→`3-5`, 15→`9-12` ;
  - migration : `ageDepuisTranche('3-5')`∈[3,5], etc., et
    `trancheDepuisAge(ageDepuisTranche(t)) === t` pour les 3 tranches.
- **`AgeGate`** (pas-à-pas) : validé par `tsc`/`lint`/`build` + vérification
  manuelle (l'app n'a pas de harnais de rendu de composant).
- Consommateurs existants (`ageRange`) : inchangés ; les tests de contenu restent
  verts.

## Gestion des erreurs / cas limites

- Âge hors [3, 12] : borné avant dérivation ; les boutons empêchent d'y arriver.
- Ancienne clé seule présente : migration à la lecture.
- SSR / premier rendu : `age`/`ageRange` valent `null` côté serveur → l'écran de
  sélection reste le rendu par défaut, comme aujourd'hui.

## Impact sur l'existant

- `useAgeRange` : signature enrichie (`age`, `choisirAge`) ; `ageRange`/`status`
  inchangés. Seul `AgeGate` utilisait le setter.
- `MondesView`, `DomaineView` : lisent `age` en plus pour le libellé.
- Aucune donnée personnelle nouvelle ; tout reste en `localStorage`.
