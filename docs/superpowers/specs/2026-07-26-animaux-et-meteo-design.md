# Deux nouveaux domaines : Les animaux et La météo

## Objectif

Porter le catalogue de 80 à **100 cartes** en ajoutant deux domaines de dix
cartes chacun : **Les animaux** (🦊) et **La météo** (🌦️). Le catalogue actuel
compte huit domaines de dix cartes. Ces deux ajouts complètent le versant
« monde vivant / monde de tous les jours », le plus mince aujourd'hui, sans
empiéter sur un domaine existant.

## Règle éditoriale (rappel)

Chaque carte porte **une idée reçue à corriger**, et la mauvaise réponse du
quizz reprend exactement cette idée reçue. Se tromper devient l'occasion de
rectifier une croyance réelle. Cette règle s'applique aux vingt cartes.

Les sujets ont été choisis pour **ne pas recouper** de carte existante. Écartés
pour cette raison : le cycle de l'eau (déjà traité), le vent, les saisons, le
ciel bleu, la pression de l'air (« de quoi est fait l'air »).

## Table éditoriale — Les animaux 🦊

| # | Slug | Titre | Idée reçue corrigée |
|---|------|-------|---------------------|
| 1 | `la-metamorphose-du-papillon` | La métamorphose du papillon | « la chenille grandit et devient papillon » → elle se dissout presque entièrement dans la chrysalide et se reconstruit |
| 2 | `pourquoi-le-cameleon-change-de-couleur` | Pourquoi le caméléon change de couleur | « c'est pour se camoufler » → surtout pour communiquer et régler sa température |
| 3 | `la-migration-des-oiseaux` | La migration des oiseaux | « ils partent parce qu'ils ont froid » → parce que la nourriture manque ; ils s'orientent au soleil/étoiles/champ magnétique |
| 4 | `lhibernation` | L'hibernation | « ils dorment tout l'hiver » → le corps ralentit énormément (cœur, température) ; ce n'est pas un simple long sommeil |
| 5 | `lecholocation-de-la-chauve-souris` | L'écholocation de la chauve-souris | « les chauves-souris sont aveugles » → elles voient, mais dans le noir elles « voient avec le son » |
| 6 | `comment-les-poissons-respirent` | Comment les poissons respirent | « il n'y a pas d'air dans l'eau » → l'oxygène est dissous, les branchies l'extraient |
| 7 | `pourquoi-les-zebres-ont-des-rayures` | Pourquoi les zèbres ont des rayures | « c'est pour se cacher dans les herbes » → surtout pour gêner les mouches piqueuses |
| 8 | `comment-les-abeilles-font-le-miel` | Comment les abeilles font le miel | « elles le fabriquent avec du pollen, pour nous » → à partir du nectar, comme réserve pour l'hiver |
| 9 | `la-toile-de-laraignee` | La toile de l'araignée | « l'araignée se colle à sa propre toile » → tous les fils ne collent pas, elle marche sur les fils secs |
| 10 | `pourquoi-le-chat-retombe-sur-ses-pattes` | Pourquoi le chat retombe sur ses pattes | « il retombe toujours sans se faire mal » → il pivote en pliant le corps, sans point d'appui |

## Table éditoriale — La météo 🌦️

| # | Slug | Titre | Idée reçue corrigée |
|---|------|-------|---------------------|
| 1 | `les-nuages` | Les nuages | « un nuage, c'est de la vapeur » → des gouttelettes/cristaux en suspension ; la vapeur, elle, est invisible |
| 2 | `larc-en-ciel` | L'arc-en-ciel | « il y a sept couleurs bien séparées » → un dégradé continu, et la lumière blanche les contient toutes |
| 3 | `la-foudre-et-le-tonnerre` | La foudre et le tonnerre | « on voit l'éclair et on entend le tonnerre en même temps » → la lumière va plus vite que le son ; on compte les secondes |
| 4 | `la-neige` | La neige | « la neige, c'est de la pluie gelée » → des cristaux formés directement dans le froid, à six branches |
| 5 | `la-grele` | La grêle | « c'est de la neige en boule » → des grêlons qui montent et descendent dans l'orage et s'entourent de couches de glace |
| 6 | `le-brouillard` | Le brouillard | « le brouillard descend du ciel » → c'est un nuage posé au niveau du sol |
| 7 | `louragan` | L'ouragan | « le vent tourne n'importe comment » → une spirale géante autour d'un œil calme |
| 8 | `la-rosee-du-matin` | La rosée du matin | « la rosée tombe du ciel pendant la nuit » → l'eau de l'air se condense sur place en refroidissant |
| 9 | `le-givre` | Le givre | « c'est de la rosée gelée » → la vapeur se transforme directement en glace, sans passer par l'eau liquide |
| 10 | `la-forme-des-gouttes-de-pluie` | La forme des gouttes de pluie | « une goutte a la forme d'une larme » → en tombant elle s'aplatit comme un petit coussin |

## Câblage des domaines (une fois par domaine)

- **`lib/types.ts`** : ajouter `'animaux'` et `'meteo'` à l'union `DomainId`.
  `tests/content.test.ts` s'appuie sur cette union.
- **`content/domains.ts`** : une entrée par domaine.
  - Les animaux : `id: 'animaux'`, `icon: '🦊'`, `color: 'amber'`, `labels: { fr: 'Les animaux' }`
  - La météo : `id: 'meteo'`, `icon: '🌦️'`, `color: 'teal'`, `labels: { fr: 'La météo' }`
  - `amber` et `teal` sont les seules teintes encore libres parmi les huit
    couleurs existantes (emerald, indigo, lime, sky, violet, orange, cyan, rose).
- **`lib/domain-styles.ts`** : ajouter `teinte` + `halo` (hex) pour chaque
  domaine, assez clairs pour porter du texte encre en contraste AA.
  - animaux : `teinte: '#fbbf24'`, `halo: 'rgba(251, 191, 36, 0.45)'` (amber-400)
  - meteo : `teinte: '#2dd4bf'`, `halo: 'rgba(45, 212, 191, 0.45)'` (teal-400)
- **`content/quiz/animaux.ts`** et **`content/quiz/meteo.ts`** : nouveaux
  fichiers de banque de questions, enregistrés dans `content/quiz/index.ts`
  (import + spread dans le tableau `quizCartes`). Ni `content/quiz/ordre.ts`
  (fonction pure de tri des propositions) ni `content/quiz/verdicts.ts` ne sont
  concernés.

## Câblage par carte (× 20)

Boucle du README « Ajouter une carte » :

1. **`content/cards/<domaine>/<slug>.ts`** — titre + suite de beats pour chacun
   des trois âges (`3-5`, `6-8`, `9-12`). Les trois âges partagent **la même
   liste d'`id` de beats** ; seul le texte change. Un test le vérifie.
2. **`components/animations/<Nom>Animation.tsx`** — une animation SVG pilotée
   par `activeBeatId`, avec un rendu `prefersReducedMotion` (état statique
   lisible sans mouvement).
3. Inscription dans **`components/animations/registry.tsx`** (import + entrée de
   la map `animationRegistry`, clé = `animationId`).
4. Ajout dans **`content/cards/index.ts`** (import + entrée du tableau `cards`).
5. Questions du quizz (3 tranches d'âge) dans le fichier du domaine. La mauvaise
   réponse reprend l'idée reçue de la table ci-dessus. Pour les 3-5 ans, deux
   propositions seulement, énoncés courts.

`npm test` échoue si une carte est incomplète, référence un domaine inconnu,
oublie une tranche d'âge, n'a pas d'animation enregistrée, ou si un fichier
audio manque (sauf carte déclarée en attente, voir plus bas).

## Séquencement

1. **Câbler les deux domaines** (types, domains.ts, domain-styles.ts, fichiers
   quiz vides enregistrés).
2. **Tranche verticale de validation** : réaliser **une seule carte de bout en
   bout** — `la-metamorphose-du-papillon` (4 beats séquentiels œuf → chenille →
   chrysalide → papillon, l'animation la plus limpide) — données + animation +
   quizz. La valider par `npm test` et l'audit d'illustrations
   (`npm run audit:illustrations`). Elle sert de gabarit.
3. **Répliquer aux 19 cartes restantes**, animation par animation.
4. **Audio en un seul lot, à la toute fin** (voir ci-dessous).

## Audio — un seul envoi Batch, à la fin

- La génération TTS utilise `GEMINI_API_KEY` (dans `.env.local`, non suivi par
  git) et un quota journalier. Une vague de vingt cartes représente ~80 fichiers
  de beats plus l'audio des quizz.
- **On ne génère l'audio qu'une fois les vingt cartes et leurs quizz écrits**,
  puis en **un seul passage par l'API Batch** : `npm run audio:batch` (cartes)
  puis `npm run audio:quiz` (questions). L'API Batch a son propre quota, coûte
  moitié moins cher et rend la main en quelques minutes.
- Pendant toute la phase de construction, chaque carte livrée est déclarée dans
  **`EN_ATTENTE_AUDIO`** en tête de `tests/audio.test.ts` — elle bascule en
  lecture minutée et reste utilisable, et le garde-fou audio reste vert.
  `npm run audio:attente` recalcule cette liste depuis les fichiers présents.
- Une fois le lot Batch produit, retirer les cartes de `EN_ATTENTE_AUDIO`
  (via `npm run audio:attente`) et vérifier que `npm test` passe, audio compris.
- **La génération audio est déclenchée par l'utilisateur** (sa clé, son quota) ;
  elle n'est pas exécutée dans le cadre de l'implémentation.

## Vérification

- `npm test` (intégrité du contenu, beats, domaines, audio en attente).
- `npm run quiz:couverture` : aucune carte sans question.
- `npm run audit:illustrations` : débordements de cadre et collisions de
  légendes entre phases différentes, sur les nouvelles animations.
- `npm run lint` et `npm run build`.

## Hors périmètre

- Toute traduction (la V1 reste `fr` uniquement).
- L'exécution de la génération audio (du côté de l'utilisateur).
- Un troisième domaine (« Protéger la planète » a été explicitement écarté).
