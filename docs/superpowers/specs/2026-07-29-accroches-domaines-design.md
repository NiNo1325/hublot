# Conception — Accroches de domaine (chantier C)

Date : 2026-07-29
Statut : validé, prêt pour le plan d'implémentation

## Contexte

Retour de bêta-testeur (backlog `docs/retours-beta/2026-07-29-backlog-ux.md`, C) :
« affiche une petite phrase qui intrigue sur chaque carte ; les enfants ne savent
pas forcément ce qu'est *la chimie* — pour les rendre curieux, il faut intriguer
plus ». Depuis B1, « Découvrir » présente une **grille des 10 mondes** (domaines)
puis les cartes d'un domaine. `MondeTile` affiche aujourd'hui : emoji, anneau de
progression, label (masqué pour les 3-5), compteur `x/10`.

## Décisions cadrées (brainstorming)

- **Périmètre** : accroches **au niveau domaine** (10), pas au niveau carte (~100).
  Répond directement au « ils ne savent pas ce qu'est la chimie », coût maîtrisé.
- **Emplacement** : sur la **grille des mondes**, au point de choix.
- **Écoute** : une **icône audio 🔊 pour tout le monde** (3-5 compris) lit
  l'accroche à voix haute — elle rend l'intrigue accessible aux non-lecteurs.
- **Tout est visible pour tous les âges** sur la tuile de monde : label,
  accroche et compteur `x/10` s'affichent aussi pour les 3-5. Choix de cohérence
  du propriétaire du produit (même si les plus jeunes ne lisent pas encore).
  Cela **révise** le masquage introduit en B1 sur `MondeTile` (label `sr-only` et
  compteur caché pour les 3-5).
- **Hors périmètre** : accroches par carte (extension future), niveau 2 (page du
  domaine).

## Modèle de données

- Ajout d'un champ **`accroche: Record<Locale, string>`** à `DomainDefinition`
  (`lib/types.ts`), sur le modèle de `labels`.
- `content/domains.ts` : remplir `accroche.fr` pour les 10 domaines (voir liste).
- Garde-fou (test) : chaque domaine a une `accroche.fr` non vide.

## Les 10 accroches (fr)

| Domaine (id) | Accroche |
|---|---|
| `sciences-de-la-terre` | Pourquoi la Terre tremble et crache du feu ? |
| `astronomie` | Pourquoi la Lune change de forme ? |
| `biologie` | Qu'est-ce qui fait battre ton cœur ? |
| `physique` | Pourquoi les choses tombent et les aimants collent ? |
| `chimie` | Pourquoi le pain gonfle et le fer rouille ? |
| `ingenierie` | Comment tiennent les ponts et volent les avions ? |
| `informatique` | Comment un ordinateur compte et se souvient ? |
| `mathematiques` | Le zéro, l'infini, le hasard : les secrets des nombres. |
| `animaux` | Pourquoi le chat retombe toujours sur ses pattes ? |
| `meteo` | D'où viennent la neige et la foudre ? |

Chacune renvoie à de vraies cartes du domaine, reste courte (1–2 lignes sur la
tuile) et juste.

## Affichage — `MondeTile`

Sous le label du monde, dans l'ordre : **accroche** puis **compteur `x/10`**.
- **Label, accroche et compteur** : affichés **pour tous les âges**, 3-5 compris
  (on retire le `sr-only`/masquage du label et du compteur posés en B1 sur
  `MondeTile`). L'anneau de progression reste inchangé.
- **Bouton 🔊** : rendu **pour tous les âges**, à côté de l'accroche. Au tap, joue
  `public/audio/accroches/<domainId>.mp3`. Ne déclenche pas la navigation vers le
  domaine (`stopPropagation` / bouton hors du `Link`). `aria-label` explicite
  (« Écouter : <accroche> »).
- Style discret (`craie-douce`), cohérent avec la tuile. La tuile devient un peu
  plus haute ; acceptable, c'est le but (rendre chaque monde explicite).

### Cartes — nom visible pour tous (`CardTile`)

Par cohérence avec la tuile de monde, le **titre de la carte** s'affiche
désormais **pour tous les âges** : on retire le `sr-only` posé sur le titre pour
les 3-5 dans `components/cards/CardTile.tsx`. La coche « déjà écoutée » et le
verrou premium restent inchangés (leurs `sr-only` d'accessibilité aussi).

### Structure de `MondeTile`

Contrainte de structure : le `MondeTile` actuel est **un seul `Link`** englobant
tout. Le bouton audio ne peut pas être un `<button>` imbriqué dans un `<a>`
(HTML invalide). Le tile est donc restructuré : le `Link` couvre le hublot + le
label (la zone de navigation), et l'accroche + bouton audio vivent **à côté du
Link**, dans le même `<li>`. Le bouton audio est un vrai `<button>`.

## Audio

- **Un mp3 par domaine** : `public/audio/accroches/<domainId>.mp3` (audio
  age-agnostique — une accroche par domaine).
- **Nouveau générateur Batch** `scripts/generer-audio-accroches.mjs` (script
  `npm run audio:accroches`), calqué sur `scripts/generer-audio-quiz.mjs` :
  lit `domains`, construit le texte parlé avec une consigne de ton (voix unique,
  intrigante), soumet à l'API Batch, écrit les mp3, tient un
  `public/audio/accroches/manifeste.json` (empreinte texte/voix/modèle).
- **Livraison avant l'audio** : une liste d'attente **`EN_ATTENTE_ACCROCHES`**
  (nouveau `tests/accroches.test.ts`), sur le modèle de `EN_ATTENTE_AUDIO`
  (beats) et `EN_ATTENTE_AUDIO_QUIZ`. Le script `scripts/maj-attente-audio.mjs`
  est étendu pour recalculer **les trois** listes.
- **Génération** : déclenchée par l'utilisateur (sa clé Gemini, quota Batch), un
  petit lot de 10 fichiers.
- **Fichier absent** (avant génération, ou réseau coupé) : le bouton 🔊 tente de
  jouer et échoue silencieusement (`onerror`), jamais de blocage.

## Lecteur audio de l'accroche

- Un petit hook client **`useAccrocheAudio()`** (ou une fonction utilitaire),
  sur le motif de `useQuizAudio` : **un seul élément `Audio` réutilisé**, qui
  coupe la lecture précédente avant d'en démarrer une nouvelle (deux accroches ne
  se parlent pas dessus). Expose `jouer(domainId)` et un état `enLecture`
  (facultatif, pour un retour visuel du bouton).
- Vit dans `components/cards/` (ou `components/audio/`), à côté de `MondeTile` /
  `MondesView`.

## Tests / vérification

- `tests/accroches.test.ts` :
  - chaque domaine a une `accroche.fr` non vide ;
  - présence de `public/audio/accroches/<id>.mp3` pour chaque domaine **absent**
    de `EN_ATTENTE_ACCROCHES` (garde-fou audio, comme beats/quizz).
- `MondeTile` / lecteur : `tsc`/`lint`/`build` + capture visuelle de la grille
  (accroche + icône) et vérification manuelle de la lecture.
- Les tests existants restent verts (le champ `accroche` est additif).

## Impact sur l'existant

- `lib/types.ts` : `DomainDefinition` gagne `accroche` (champ requis) — tous les
  domaines doivent le fournir (les 10 le font).
- `content/domains.ts` : +10 accroches.
- `components/cards/MondeTile.tsx` : restructuration (Link + accroche/bouton),
  ajout du bouton audio, et label + compteur visibles pour tous les âges.
- `components/cards/CardTile.tsx` : titre de carte visible pour tous les âges
  (retrait du `sr-only` pour les 3-5).
- `scripts/maj-attente-audio.mjs` : gère une 3ᵉ liste.
- `package.json` : script `audio:accroches`.
- Aucune donnée personnelle nouvelle ; audio servi en statique.

## Hors périmètre

- Accroches par carte (~100) — extension future.
- Accroche sur la page du domaine (niveau 2).
- Voix par tranche d'âge pour l'accroche (une seule voix suffit ici).
