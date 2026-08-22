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

## Les neuf défauts graves — tous corrigés le 22/08/2026

Ils avaient tous la même forme : **une carte qui existe pour corriger une idée
reçue montrait exactement cette idée reçue, ou son inverse.** Chaque correction
a été vérifiée à l'œil sur une capture refaite, et pas seulement au typage.

1. **Les saisons étaient à l'envers.** Les deux Terres portaient `rotate(-23)`,
   si bien que celle étiquetée « été » penchait à l'opposé du Soleil. Le signe
   est inversé — en SVG l'axe des y descend, donc `rotate(23)` envoie le pôle
   nord vers la droite, vers le Soleil. Les deux axes restent parallèles, ce qui
   est précisément ce qui produit les saisons.
   `SaisonsAnimation.tsx`.
2. **La Lune était toujours pleine.** Son demi-disque clair vivait dans le
   groupe qui tourne autour de la Terre, donc il lui faisait face en permanence.
   Il reçoit désormais une contre-rotation de même durée autour du centre de la
   Lune : l'orbite la déplace, son cap vers le Soleil ne bouge plus.
   `PhasesLuneAnimation.tsx`.
3. **Le muscle de la chair de poule s'allongeait** en se contractant (30 → 67).
   Il court maintenant de l'épiderme au bas du follicule et passe de 58 à 46 en
   tirant. Au passage, le poil a reçu la racine qui lui manquait : le muscle
   tirait littéralement sur le vide. `LaChairDePouleAnimation.tsx`.
4. **La matière disparaissait en changeant d'état** — 16 particules, puis 12,
   puis 6, sous la légende « rien ne se perd, tout revient ». Les trois états en
   comptent seize, et le liquide a été désordonné : une grille parfaite ne le
   distinguait du solide que par son récipient. `EtatsMatiereAnimation.tsx`.
5. **On pesait 60 kg sur la Lune comme sur Terre**, mis en avant au moment même
   où le texte dit « six fois moins ». La mise en avant suit désormais ce que dit
   chaque beat : le poids à « balance », la masse à « deux choses ». La balance
   que le texte nomme a été dessinée. `PoidsMasseAnimation.tsx`.
6. **Le tsunami restait sous la surface de la mer** : crête à y≈140 pour une
   surface à y≈96. La crête monte à y≈44 et la lèvre retombe sur la côte ; une
   ligne de surface a été tracée pour que la hauteur se lise.
   `LaVagueGeanteAnimation.tsx`.
7. **On ne flottait jamais à la surface** en mer Morte : le corps restait 56 px
   sous la ligne d'eau. Il la chevauche maintenant, moitié dedans, moitié
   dehors. Et les flèches de la poussée d'Archimède, qui pointaient sur le côté,
   pointent vers le haut — le marqueur était dessiné pointe en haut, donc couché
   de 90° par `orient="auto"`.
   `PourquoiOnFlotteMieuxDansLaMerAnimation.tsx`.
8. **Les humains occupaient le premier quart de l'année de la Terre.** L'arc
   court désormais sur 355°, la marque humaine tient les tout derniers degrés,
   et les deux dates encadrent le sommet — l'année y boucle.
   `IlYaTresTresLongtempsAnimation.tsx`.
9. **Le blanc d'œuf devenait jaune.** Il est blanc et opaque, seul le jaune
   reste jaune. `PourquoiLoeufDurcitAnimation.tsx`.

## Deux défauts qui dépassaient l'illustration — corrigés

- **Les électrons n'avaient ni `cx` ni `cy`** : dès que l'animation ne tournait
  pas — circuit ouvert, lecture en pause, ou réglage « mouvement réduit » — les
  cinq s'empilaient en 0,0. Ils ont désormais cinq positions réparties le long
  du circuit, posées **seulement** quand le mouvement ne joue pas, car
  `animateMotion` s'ajoute à la position propre au lieu de la remplacer. Et ceux
  dont le départ est différé restent invisibles au lieu de stationner dans le
  coin. `ElectriciteAnimation.tsx`.
- **L'empreinte du jumeau était hors du cadre** : `translate(-108 90)` la plaçait
  à x = −45 dans un `viewBox` qui commence à 0, alors que la phase repose
  entièrement sur la comparaison des deux. Elle est ramenée à gauche du doigt
  principal, un peu plus grande et moins pâle.
  `LesEmpreintesDigitalesAnimation.tsx`.

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

## Ce qui reste

Les **soixante-douze défauts de gravité moyenne et basse** listés dans les
rapports par monde n'ont pas été traités. Ils tiennent presque tous en une
phrase : *l'élément nommé par la phrase n'est pas dessiné*. Aucun n'enseigne
quelque chose de faux ; ils affaiblissent seulement le lien entre l'image et son
texte. Ils forment une liste de travail utilisable telle quelle, monde par monde.
