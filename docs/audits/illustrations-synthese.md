# Audit des illustrations — synthèse

Confrontation de chaque illustration au texte qu'elle accompagne, monde par
monde. Méthode : `npx tsx scripts/capturer-illustrations.mjs <monde>` capture une
image par **phase** d'animation, puis l'agent `audit-illustrations` les regarde
une à une face aux trois registres de texte.

Rapports détaillés : `docs/audits/illustrations-<monde>.md`.

## Avancement

| Monde | Phases | Défauts | Dont graves |
|---|---:|---:|---|
| animaux | 40 | 4 | — |
| biologie | 40 | 4 | — |
| le-corps | 40 | 9 | 1 contradiction |
| les-dinosaures | 40 | 5 | 1 contradiction |
| meteo | 40 | 1 | — |
| **reste à faire** | | | sciences-de-la-terre, astronomie, physique, chimie, ingenierie, informatique, mathematiques, le-son, les-oceans, la-cuisine |

## À corriger en priorité

Trois défauts sont **objectivement vérifiables dans le code**, sans jugement
esthétique. Ce sont ceux à traiter d'abord.

### 1. Le muscle de la chair de poule s'allonge quand le texte dit « se contracte »

`components/animations/LaChairDePouleAnimation.tsx` — le trait du muscle passe
d'une longueur 30 au repos à 67 « contracté ». L'enfant entend « se contracte »
et voit un muscle s'allonger, à rebours de ce que la carte voisine
`comment-les-muscles-bougent` lui enseigne. **Intervertir les deux états.**

### 2. L'empreinte du jumeau est dessinée hors de l'écran

`components/animations/LesEmpreintesDigitalesAnimation.tsx` — `BOUCLES_JUMEAU`
porte `transform="translate(-108 90) scale(0.42)"`, ce qui la place entre
x = −45 et x = −3, hors du `viewBox 0 0 400 240`. La phase repose entièrement
sur une comparaison, et il n'y a rien à comparer. **Translation positive**,
`translate(20 90)` par exemple.

### 3. Les humains placés au premier quart de l'année de la Terre

`components/animations/IlYaTresTresLongtempsAnimation.tsx` — l'arc
`M200 42 A70 70 0 0 1 268 106` s'arrête à 3 heures, et le repère humain avec
lui, alors que les trois textes disent « les toutes dernières minutes du
31 décembre ». C'est exactement l'intuition que la carte veut corriger.
**Allonger l'arc jusqu'au sommet.**

## Défauts de gravité moyenne

- **le-coeur-et-le-sang / pompe** — cœur dessiné en cœur de Saint-Valentin, sans
  les quatre cavités ni la paroi gauche épaissie que décrit le texte 9-12 ;
  aucun poumon nulle part alors que deux phases les nomment.
- **comment-on-respire / poumons** — deux masses pleines, une trachée droite :
  ni bronches qui se divisent, ni alvéoles, alors que c'est le sujet de la
  phrase.
- **la-chair-de-poule / quatre** — l'animal « bien poilu » est une tache grise
  sans tête, sans patte et sans un seul poil.
- **la-chair-de-poule / deux** — le poil n'a pas de racine sous la peau, et le
  muscle ne le touche pas : il tire sur rien.
- **les-empreintes-digitales / quatre** — voir ci-dessus.
- **pas-tous-des-dinosaures / un** — le ptérosaure n'a ni bras ni doigt allongé,
  or c'est le trait qui le distingue et le sujet de deux textes sur trois.
- **pourquoi-les-zebres-ont-des-rayures** — pattes entièrement blanches, sans
  rayure, alors que le texte dit « tout rayé ».

## Ce que l'audit a confirmé de bon

Les corrections d'idées reçues, qui sont le cœur pédagogique de l'application,
sont bien tenues par les images : les veines sont dessinées rouge sombre et non
bleues ; l'évolution est un V à ancêtre commun, jamais une file indienne du
singe vers l'homme ; la goutte de pluie en larme est barrée ; le brouillard
s'évapore sur place au lieu de se déplacer ; le tonnerre arrive après l'éclair.

## Limites de la méthode

- Le jugement visuel sur du SVG stylisé **produit des faux positifs**. Ces
  rapports sont une liste de suspicions classées, jamais un verdict.
- La capture réinjecte le SVG dans une page vierge, ce qui **relance les
  animations à zéro**. On laisse désormais 1,4 s de jeu avant la prise de vue,
  mais une animation en boucle peut encore être saisie à un instant trompeur —
  les agents le signalent quand c'est le cas.
- Une illustration sert **les trois registres à la fois** : la question n'est
  donc pas « colle-t-elle au texte » mais « en contredit-elle un des trois ».
