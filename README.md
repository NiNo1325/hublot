# Hublot

Des cartes animées et racontées à voix haute pour découvrir les sciences, de 3 à 12 ans.

Chaque carte illustre un concept scientifique par une animation SVG synchronisée
avec une explication lue à voix haute, adaptée à la tranche d'âge de l'enfant.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # tests unitaires
npm run lint
npm run build
```

## Comment c'est organisé

| Dossier | Rôle |
|---|---|
| `content/` | Le catalogue : cartes et domaines, données pures sans JSX |
| `components/animations/` | Une animation SVG par carte, plus le registre qui les relie |
| `components/narration/` | Orchestration de `speechSynthesis` |
| `lib/` | Types, stockage, sélection de la voix |
| `docs/superpowers/specs/` | Le document de design |

## Le concept de « beat »

Une explication est une suite de **beats**. Un beat est à la fois une phrase lue
à voix haute et une phase d'animation : quand la narration démarre un beat,
l'animation change de phase. C'est ce qui donne l'impression que la carte
raconte, plutôt que de bouger en fond sonore.

Les trois tranches d'âge d'une carte partagent **la même liste d'identifiants de
beats** — seul le texte change. Cela permet à une animation unique de servir les
trois niveaux. Un test le vérifie.

## Ajouter une carte

0. **Vérifier que le sujet n'est pas déjà traité.** Le catalogue compte
   quatre-vingts cartes, dix par domaine : la plupart des sujets évidents le
   sont. Un `grep` sur les mots-clés du sujet dans `content/cards/` coûte une
   minute et évite d'écrire une carte à jeter. Attention aux recouvrements
   partiels, les plus coûteux : la pression atmosphérique est traitée dans
   « de quoi est fait l'air », les câbles sous-marins dans « comment marche
   internet », la conservation de l'énergie dans « les leviers ».
1. Créer `content/cards/<domaine>/<slug>.ts` sur le modèle de
   [`cycle-de-leau.ts`](content/cards/sciences-de-la-terre/cycle-de-leau.ts) :
   un titre et une suite de beats pour chacun des trois âges.
2. Écrire le composant d'animation dans `components/animations/`, piloté par
   `activeBeatId`. Prévoir le rendu `prefersReducedMotion`.
3. L'enregistrer dans `components/animations/registry.tsx`.
4. L'ajouter à `content/cards/index.ts`.
5. Écrire les questions dans `content/quiz/<domaine>.ts` — une par tranche
   d'âge. `npm run quiz:couverture` signale toute carte oubliée.
6. `npm run audio` puis `npm run audio:quiz`.

`npm test` échoue si une carte est incomplète, référence un domaine inconnu,
oublie une tranche d'âge, n'a pas d'animation enregistrée, ou si un fichier
audio manque.

Une carte porte une **idée reçue à corriger**, et la mauvaise réponse du quizz
reprend cette idée reçue. C'est la règle de rédaction de tout le catalogue :
se tromper devient l'occasion de rectifier une croyance réelle.

### Vérifier les illustrations

```bash
npm run dev -- -p 3001        # dans un terminal
npm run audit:illustrations   # dans un autre
```

L'audit ouvre les quatre-vingts cartes dans un vrai navigateur et mesure la
position réelle de chaque texte : il attrape les débordements du cadre et les
légendes qui se recouvrent, que rien d'autre ne voit. À garder pour toute
nouvelle animation — les collisions arrivent entre légendes de **phases
différentes**, invisibles à l'œil puisqu'elles ne s'affichent jamais ensemble.

### Livrer une carte avant son audio

Le quota TTS interactif est journalier, et une vague de huit cartes en fait
quatre-vingt-seize. Une carte peut donc être livrée avant sa voix : elle
bascule en lecture minutée et reste utilisable. Un beat manquant ne coupe que
lui — le reste de la carte garde la narration.

Pour que le garde-fou reste utile, l'attente doit être déclarée dans
`EN_ATTENTE_AUDIO`, en tête de [`tests/audio.test.ts`](tests/audio.test.ts).
Toute carte absente de cette liste doit avoir son audio complet, et un test
vérifie qu'on n'y laisse pas traîner une carte déjà sonorisée.

```bash
npm run audio:attente   # recalcule la liste depuis les fichiers présents
```

Tenir cette liste à la main après une génération interrompue en plein milieu
d'une carte est fastidieux et source d'oublis — or une carte oubliée dedans
n'est plus vérifiée du tout.

## Narration

La voix est **préenregistrée**, pas synthétisée dans le navigateur : un fichier
`.mp3` par beat, généré par l'API TTS de Gemini (voix Callirrhoe) et servi en
statique depuis `public/audio/`. Qualité identique sur tous les appareils,
aucun coût à l'exécution, fonctionne hors ligne.

Le premier essai reposait sur `speechSynthesis`. C'était gratuit, mais la voix
était robotique et sa qualité variait d'un appareil à l'autre — rédhibitoire
pour un produit où l'enfant doit *écouter* pour comprendre. L'audio
préenregistré a un bénéfice technique en prime : la pause reprend exactement où
elle s'est arrêtée, ce que l'API de synthèse ne permettait pas de façon fiable.

### Générer l'audio

```bash
npm run audio               # ne régénère que ce qui a changé
npm run audio:batch         # même chose, via l'API Batch
npm run audio:quiz          # les questions du quizz, via l'API Batch
npm run voix:echantillons   # compare plusieurs voix sur un même texte
```

**Les deux API ont des quotas séparés, et c'est décisif en pratique.** Quand
`npm run audio` répond 429 sur les deux modèles, `npm run audio:batch` produit
encore : il passe par l'API Batch, qui dispose de son propre quota, coûte
moitié moins cher, et rend la main au bout de quelques minutes. Le quota
interactif, lui, se réinitialise à minuit heure du Pacifique — soit 9 h en
Belgique. Lancer une grosse génération en fin de journée, c'est se heurter au
mur pour rien.

Le code commun aux générateurs vit dans
[`scripts/lib/audio.mjs`](scripts/lib/audio.mjs). Il y a été rassemblé après
qu'un correctif appliqué à une seule des quatre copies eut laissé les autres
jeter des fichiers valides.

Les deux scripts lisent `GEMINI_API_KEY` depuis `.env.local`, qui n'est **pas**
suivi par git. La clé ne sert qu'à la génération locale : elle n'est jamais
déployée, seuls les fichiers produits le sont.

`public/audio/manifeste.json` mémorise l'empreinte du texte, de la voix et du
modèle pour chaque beat. Modifier une phrase suffit à faire régénérer ce seul
fichier au prochain passage.

Si un fichier manque ou que le réseau lâche, la carte bascule en lecture
minutée : le texte défile et l'animation continue. L'enfant n'est jamais bloqué
devant un écran figé.

## Vie privée

Aucun compte, aucune donnée personnelle, aucune analytique. La seule information
conservée est la tranche d'âge, dans le `localStorage` du navigateur.
