# Audit des illustrations — monde « animaux »

## Défauts relevés

### pourquoi-les-zebres-ont-des-rayures / phase question — ressemblance
**Gravité** : moyenne
**Le texte dit** : « Le zèbre est tout rayé de noir et de blanc. Mais pourquoi ? » (3-5) — et « Pourquoi un zèbre porte-t-il ces rayures noires et blanches si voyantes ? » (6-8)
**L'image montre** : le corps et l'encolure sont barrés de bandes noires, mais les quatre pattes sont des rectangles entièrement blancs, sans une seule rayure. (Confirmé dans la source : `components/animations/ZebreAnimation.tsx` ligne 51, quatre `<rect fill="#f5f5f5">` sans rayure.) Le zèbre reste identique dans les quatre phases de la carte.
**Pourquoi c'est un problème** : l'enfant entend « tout rayé » et voit un animal rayé seulement au-dessus des genoux ; or les rayures des vraies pattes de zèbre descendent jusqu'aux sabots, et c'est justement le trait que la carte entière commente.
**Piste** : ajouter deux ou trois traits sombres horizontaux sur chaque patte.

### pourquoi-le-chat-retombe-sur-ses-pattes / phase depart — ressemblance
**Gravité** : basse
**Le texte dit** : « Parfois, un chat tombe le dos en premier, la tête en bas. » (3-5) — et « Quand un chat chute à l'envers, la tête en bas, il n'a que quelques instants pour se retourner. » (6-8)
**L'image montre** : le chat du haut est bien renversé — les quatre pattes pointent vers le haut, coussinets en l'air — mais les deux oreilles triangulaires pointent elles aussi vers le haut, du même côté que les pattes, et la tête n'a pas d'œil pour lever le doute. (Même dessin d'oreilles réutilisé tel quel en phase `plie`, où l'avant du corps est encore retourné ; dans la source `ChatRetombeAnimation.tsx`, la fonction `oreilles()` trace toujours les pointes vers le haut.)
**Pourquoi c'est un problème** : oreilles et pattes du même côté, c'est un chat impossible ; la seule chose qui dit « tête en bas » dans l'image (les pattes) est contredite par la seule chose qui dit « tête » (les oreilles).
**Piste** : retourner les oreilles vers le bas dans les phases `depart` et `plie` (miroir vertical du tracé).

### la-metamorphose-du-papillon / phase papillon — manque
**Gravité** : basse
**Le texte dit** : « Avec ces morceaux, un tout nouveau corps se construit : des ailes, de longues pattes, une trompe. » (6-8) — et « un corps entièrement neuf s'assemble : ailes, yeux, trompe. » (9-12)
**L'image montre** : un fuseau brun foncé et deux ailes orange à ocelle, rien d'autre : ni tête, ni yeux, ni trompe, ni antennes, ni pattes.
**Pourquoi c'est un problème** : la phrase énumère trois pièces du corps neuf et l'image n'en montre qu'une ; et un papillon sans antennes n'est pas tout à fait un papillon pour un enfant qui apprend la forme des choses.
**Piste** : deux antennes en massue et une trompe enroulée au bout du fuseau suffiraient — c'est aussi ce qui distingue le papillon de la simple silhouette de nœud papillon.

### comment-les-abeilles-font-le-miel / phase transformation — manque
**Gravité** : basse
**Le texte dit** : « Les abeilles battent des ailes très fort pour sécher le jus. Il devient épais : c'est le miel ! » (3-5) — « puis ventilent avec leurs ailes pour évaporer l'eau » (6-8) — « Les abeilles ventilent en masse pour évaporer l'eau » (9-12)
**L'image montre** : trois gouttelettes bleues qui s'élèvent le long des alvéoles, et aucune abeille près de la ruche : la seule abeille de la scène reste éteinte, près de la fleur, sur la trajectoire de la phase précédente.
**Pourquoi c'est un problème** : la cause nommée par les trois textes (les abeilles qui ventilent) est absente ; l'eau semble s'évaporer toute seule, alors que c'est précisément le travail des abeilles qui fait le miel.
**Piste** : poser une abeille devant les alvéoles, ailes floutées ou doublées d'un trait de mouvement, à côté des gouttelettes.

---

## Cartes examinées sans reproche

- **pourquoi-le-cameleon-change-de-couleur** — les quatre phases sont justes : le carré rose barré et le caméléon qui reste turquoise devant lui disent bien « ses couleurs le rendent visible » ; les cristaux sous la peau sont dessinés en réseau de points, pas en pigments. Silhouette correcte (queue enroulée, crête dorsale, œil en tourelle).
- **la-migration-des-oiseaux** — le thermomètre barré traduit exactement « pas au thermomètre » (9-12) ; l'arbre se dégarnit puis reverdit entre le départ et le retour ; les trois repères (soleil, étoiles, aiguille aimantée) sont bien tous les trois présents en phase `boussole`.
- **lhibernation** — cœur, thermomètre bleu, jauge et « Zzz » barré correspondent chacun à leur phase.
- **lecholocation-de-la-chauve-souris** — les yeux jaunes de la chauve-souris ne s'allument qu'en phase `voit` (« elle n'est pas aveugle »), les ondes partent puis reviennent inversées en phase `echo`, la proie est un insecte à deux ailes.
- **comment-les-poissons-respirent** — l'oxygène dissous est figuré en points dans l'eau avant la bouche, capté au niveau des branchies, et l'eau appauvrie ressort bien par une flèche partant des ouïes.
- **la-toile-de-laraignee** — rayons secs et spirale collante sont deux soies visuellement distinctes (bleu clair lisse / jaune perlé de gouttes), l'araignée marche sur un rayon, la proie est collée sur la spirale, et elle a bien huit pattes.

---

## Observations regardées puis écartées (non comptées comme défauts)

Signalées seulement pour vous permettre de juger le réglage de sévérité :

- **lhibernation / economie** : la jauge « presque zéro énergie » est presque vide — lisible aussi comme « il ne lui reste presque plus de réserves », l'inverse du propos. Écarté : la légende lève l'ambiguïté et la jauge ne se vide pas d'une phase à l'autre.
- **la-migration-des-oiseaux / boussole** : soleil et étoiles brillent en même temps dans un ciel de nuit, alors que le texte dit « le soleil le jour, les étoiles la nuit ». Écarté : la planche est un tableau d'icônes, pas une scène.
- **lhibernation** : le hérisson se réduit à un disque à piquants avec deux yeux, sans museau ni truffe. Écarté : reconnaissable, et c'est de la stylisation assumée.
- **la-metamorphose-du-papillon / chenille** : rien n'est mangé à l'image (« elle mange des feuilles »), la chenille flotte au-dessus de la feuille-support sans la toucher. Écarté : la feuille est bien là (elle est nommée `Feuille support` dans la source), et rien de faux n'est enseigné.
- **pourquoi-le-chat-retombe-sur-ses-pattes / sans-appui** : les pattes avant rentrées et les pattes arrière tendues (9-12) ne sont pas différenciées. Écarté : l'élément central de la phase, les deux rotations opposées, est correct — j'ai vérifié le sens des deux flèches, la bleue tourne bien dans le sens horaire et la verte dans l'autre.

---

**Compte** : 10 cartes, 40 phases, 4 défauts — 0 contradiction, 2 ressemblance, 2 manque. Un seul de gravité moyenne (les pattes du zèbre).
