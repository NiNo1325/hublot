# Audit des illustrations — synthèse

**Catalogue complet passé** : 15 mondes, 150 cartes, 600 phases d'animation
confrontées une à une aux trois registres de texte qu'elles illustrent.

Méthode : `npx tsx scripts/capturer-illustrations.mjs <monde>` capture une image
par **phase**, puis l'agent `audit-illustrations` les regarde face aux textes.
Rapports détaillés : `docs/audits/illustrations-<monde>.md`.

## Résultat

**83 défauts sur 600 phases**, dont **9 graves**. Aucun monde n'est indemne, mais
la moitié des cartes est irréprochable, et les corrections d'idées reçues — le
cœur pédagogique de Hublot — sont massivement bien tenues.

| Monde | Défauts | Graves |
|---|---:|---:|
| le-corps | 9 | 1 |
| ingenierie | 9 | — |
| le-son | 8 | — |
| physique | 7 | 1 |
| la-cuisine | 7 | 1 |
| les-oceans | 6 | 2 |
| sciences-de-la-terre | 6 | — |
| mathematiques | 6 | — |
| les-dinosaures | 5 | 1 |
| chimie | 5 | 1 |
| animaux | 4 | — |
| biologie | 4 | — |
| astronomie | 4 | 2 |
| informatique | 2 | — |
| meteo | 1 | — |

## Les neuf défauts graves

Tous ont la même forme : **une carte qui existe pour corriger une idée reçue
montre exactement cette idée reçue, ou son inverse.** Ce sont ceux à traiter en
premier — chacun est une retouche de quelques lignes de SVG.

1. **Les saisons sont à l'envers.** `SaisonsAnimation.tsx` ligne 32 : les deux
   Terres portent `rotate(-23)`, si bien que la Terre étiquetée « été » penche à
   l'opposé du Soleil. La carte enseigne le contraire de ce qu'elle montre.
2. **La Lune serait toujours pleine.** `PhasesLuneAnimation.tsx` lignes 61-72 :
   le demi-disque clair est *dans* le groupe animé, donc solidaire de la
   direction de la Terre pendant toute l'orbite. Le mécanisme même des phases est
   annulé.
3. **Le muscle de la chair de poule s'allonge** (30 → 67) quand le texte dit
   « se contracte ». `LaChairDePouleAnimation.tsx`.
4. **La matière disparaît en changeant d'état** : 16 particules dans le solide,
   12 dans le liquide, 6 dans le gaz — sous la légende « rien ne se perd, tout
   revient ». `EtatsMatiereAnimation.tsx`.
5. **On pèse 60 kg sur la Lune comme sur Terre**, mis en avant au moment où le
   texte dit « six fois moins ». `PoidsMasseAnimation.tsx` : rien ne dépend des
   phases 0 et 1.
6. **Le tsunami reste sous la surface de la mer** : la crête plafonne à y≈125,
   la surface est à y≈96. `LaVagueGeanteAnimation.tsx` ligne 87.
7. **On ne flotte jamais à la surface** dans la mer Morte — le corps reste
   immergé aux quatre phases. `PourquoiOnFlotteMieuxDansLaMerAnimation.tsx`.
8. **Les humains au premier quart de l'année de la Terre**, alors que la carte
   enseigne « les toutes dernières minutes du 31 décembre ».
   `IlYaTresTresLongtempsAnimation.tsx`.
9. **Le blanc d'œuf devient jaune** quand le texte dit « le blanc devient dur et
   blanc ».

## Deux défauts qui dépassent l'illustration

- **`ElectriciteAnimation.tsx` : les cercles d'électrons n'ont ni `cx` ni `cy`.**
  Sans animation — réglage système « mouvement réduit », donc un enfant qui en a
  besoin — ils s'empilent tous en 0,0. L'illustration est cassée, pas seulement
  imprécise.
- **`LesEmpreintesDigitalesAnimation.tsx` : l'empreinte du jumeau est hors du
  cadre.** `translate(-108 90)` la place à x = −45 dans un `viewBox` qui commence
  à 0. La phase repose entièrement sur une comparaison, et il n'y a rien à
  comparer.

## Le motif dominant des défauts mineurs

Les trois quarts des défauts restants tiennent en une phrase : **l'élément
nommé par la phrase n'est pas dessiné**. La Lune tourne autour d'un centre vide,
le crabe n'a pas de pince, la cochlée n'a pas de spirale, les cordes vocales sont
une seule ellipse, le câble sous-marin est une étendue d'eau vide, le sucre ne
réapparaît pas au fond du verre.

Ce n'est jamais faux, mais l'illustration cesse alors de servir sa phrase.

## Ce que l'audit a confirmé de bon

Les corrections d'idées reçues, qui font la valeur de l'application, tiennent
presque partout :

- les veines sont rouge sombre et non bleues ;
- l'évolution est un V à ancêtre commun, jamais une file indienne du singe vers
  l'homme ;
- la goutte de pluie en larme est barrée, et la vraie goutte est aplatie dessous ;
- l'eau des vagues tourne **sur place** sans avancer vers la plage ;
- les astronautes ont une flèche de gravité « à 90 % » et tombent en ratant la
  Terre ;
- la face cachée de la Lune est dessinée **éclairée** ;
- le frigo déplace la chaleur de l'intérieur vers la grille, jamais l'inverse ;
- « 12 ÷ 0 = pas de réponse », et non « = ∞ » ;
- à périmètre constant, les trois aires du carré, du rectangle et du disque sont
  dans les rapports exacts 9 / 25 / 32.

## Limites de la méthode

- Le jugement visuel sur du SVG stylisé **produit des faux positifs**. Ces
  rapports sont une liste de suspicions classées, jamais un verdict.
- La capture réinjecte le SVG dans une page vierge, ce qui relance ses animations
  à zéro. On laisse 1,4 s de jeu avant la prise de vue, mais une animation en
  boucle peut encore être saisie à un instant trompeur — les agents le signalent
  quand c'est le cas.
- Une illustration sert **les trois registres à la fois** : la question n'est donc
  pas « colle-t-elle au texte » mais « en contredit-elle un des trois ». Plusieurs
  défauts signalés ne concernent que le niveau 3-5.
