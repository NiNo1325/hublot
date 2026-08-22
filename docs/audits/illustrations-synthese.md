# Audit des illustrations — synthèse

**Catalogue complet passé** : 15 mondes, 150 cartes, 600 phases d'animation
confrontées une à une aux trois registres de texte qu'elles illustrent.

Méthode : `npx tsx scripts/capturer-illustrations.mjs <monde>` capture une image
par **phase**, puis l'agent `audit-illustrations` les regarde face aux textes.
Rapports détaillés : `docs/audits/illustrations-<monde>.md`.

## Résultat

**83 défauts sur 600 phases**, dont 9 graves. Aucun monde n'était indemne, mais
la moitié des cartes est irréprochable, et les corrections d'idées reçues — le
cœur pédagogique de Hublot — étaient massivement bien tenues.

**Les 83 sont corrigés** (22/08/2026), chacun vérifié à l'œil sur une capture
refaite, et pas seulement au typage.

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

Ils avaient tous la même forme : **une carte qui existe pour corriger une idée
reçue montrait exactement cette idée reçue, ou son inverse.**

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

## Trois défauts qui dépassaient l'illustration

Ceux-là ne se voyaient pas seulement : ils cassaient la page.

- **Des cercles animés sans position de repos.** Un cercle mû par
  `animateMotion` retombe en 0,0 dès que l'animation ne joue pas — lecture en
  pause, ou réglage système « mouvement réduit ». Cinq cartes étaient touchées
  en plus des électrons : le sang, les paquets de données, la molécule de
  l'oignon et le signal de la douleur s'empilaient dans le coin supérieur
  gauche. Chacun reçoit une position calculée sur son propre parcours, posée
  **seulement** quand le mouvement ne joue pas, car `animateMotion` s'ajoute à
  la position propre au lieu de la remplacer.
- **L'empreinte du jumeau était hors du cadre** : `translate(-108 90)` la plaçait
  à x = −45 dans un `viewBox` qui commence à 0, alors que la phase repose
  entièrement sur la comparaison des deux. Elle est ramenée à gauche du doigt
  principal, un peu plus grande et moins pâle.
  `LesEmpreintesDigitalesAnimation.tsx`.
- **Les pales de l'éolienne n'apparaissaient sur aucune capture.** Ce qui tourne
  — précisément ce que la phrase demande de voir — se lisait comme un bâton
  gris. Ce sont maintenant des pales pleines autour d'un moyeu dessiné.
  `EnergieAnimation.tsx`.

## Le motif dominant des défauts mineurs

Les trois quarts tenaient en une phrase : **l'élément nommé par la phrase n'était
pas dessiné**. La cochlée n'avait pas de spirale, les cordes vocales étaient une
seule ellipse, le câble sous-marin une étendue d'eau vide, le crabe n'avait pas
de pince, le sucre ne réapparaissait pas au fond du verre, les poumons n'avaient
ni bronches ni alvéoles, la Lune n'avait pas de croissant.

Ce n'était jamais faux, mais l'illustration cessait alors de servir sa phrase.

Deuxième motif, plus rare mais plus vicieux : **la convention d'atténuation
éteignait l'élément que la phrase nomme**. Le Soleil de la photosynthèse
s'assombrissait à la phase où les trois textes en font la source d'énergie de la
fabrication.

## Trois textes corrigés, plutôt que leur image

Trois fois, c'est le texte qui était en tort, et l'image avait raison.

- **Le soda**, niveau 3-5 : la phase deux disait « tu ouvres : le gaz peut enfin
  sortir » devant une bouteille fermée, bouchon mis en évidence. Les deux autres
  registres disent « tant que la bouteille reste fermée ». Le texte était décalé
  d'une phase ; il suit maintenant l'image.
- **La chute libre**, niveau 3-5 : « une bille », quand les deux autres registres
  nomment le marteau d'Apollo 15. C'est un marteau partout.
- **Le freinage** : « roue bloquée : moins bien » est devenu « plus loin », parce
  que c'est la distance d'arrêt que la nouvelle image compare.

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
  boucle peut encore être saisie à un instant trompeur — la grêle paraît
  immobile, le pavé du milliard monte en escalier, l'aile du papillon est saisie
  en plein pliage. Les agents le signalent quand c'est le cas.
- Une illustration sert **les trois registres à la fois** : la question n'est donc
  pas « colle-t-elle au texte » mais « en contredit-elle un des trois ». Plusieurs
  défauts ne concernaient que le niveau 3-5.
- **L'agent d'audit n'a pas d'outil d'écriture.** Cinq rapports — animaux,
  biologie, le-corps, les-dinosaures, meteo — n'avaient jamais atteint le disque
  et n'existaient que dans la conversation. Ils ont été récupérés. Pour un
  prochain passage, écrire soi-même ce que l'agent rend.

## Ce qui reste

Rien de la liste. Les 83 défauts sont traités et vérifiés à l'image.

Un prochain passage devrait porter sur ce que cet audit n'a pas su regarder :
les animations **en mouvement** plutôt que figées à 1,4 s, et la lisibilité des
légendes à la taille réelle d'un écran de téléphone.
