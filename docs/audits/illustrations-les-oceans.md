# Audit des illustrations — monde « les-oceans »

10 cartes, 40 phases, 6 défauts : 3 contradictions, 3 ressemblances, 0 manque.
Cinq cartes sur dix sans reproche.

## la-vague-geante / phase quatre — contradiction (haute)

**Le texte dit** : « En arrivant près de la plage, elle devient un immense mur
d'eau. » (3-5) ; « la vague ralentit mais gagne énormément en hauteur, jusqu'à
former un véritable mur d'eau qui déferle sur la terre » (6-8).

**L'image montre** : une bosse posée sur le fond marin dont la crête reste
**sous** la ligne de surface (crête à y≈140, surface à y≈96 ; au maximum de
l'animation, y≈125). La vague ne perce pas la surface et ne dépasse pas la côte.

**Pourquoi c'est un problème** : c'est la chute de la carte, et l'enfant voit un
monticule sous-marin plus petit que la mer là où la phrase annonce un mur d'eau.

**Piste** : remonter le point de contrôle au-dessus de la surface (contrôle
y ≈ 20 au lieu de 90) et prolonger la base sur la pente côtière.
`LaVagueGeanteAnimation.tsx`, ligne 87.

## pourquoi-on-flotte-mieux-dans-la-mer / phase quatre — contradiction (haute)

**Le texte dit** : « l'eau est tellement dense qu'on flotte quasiment sans le
moindre effort, **allongé à la surface**. » (6-8)

**L'image montre** : le corps est à un tiers de la hauteur du bac sous le bord,
donc entièrement immergé. À aucune phase il ne touche la surface (y=150 en eau
douce, y=108 puis 96 en eau salée, surface au bord haut y=40).

**Pourquoi c'est un problème** : la carte oppose flotter et couler ; un corps
entièrement sous l'eau illustre un corps qui coule un peu moins.

**Piste** : amener l'ellipse de la phase 4 à cheval sur le bord (cy ≈ 42-44).
`PourquoiOnFlotteMieuxDansLaMerAnimation.tsx`, lignes 83-96.

## pourquoi-on-flotte-mieux-dans-la-mer / phase deux — contradiction (moyenne)

**Le texte dit** : « Cette eau plus lourde pousse plus fort **vers le haut**. »

**L'image montre** : les pointes des deux flèches sont **couchées à
l'horizontale**. Les marqueurs sont dessinés pointe en haut (`M0 8 L4 0 L8 8 Z`)
mais posés avec `orient="auto"` sur une ligne montante, ce qui les fait pivoter
de 90°.

**Piste** : dessiner le marqueur orienté vers +x (`M0 0 L8 4 L0 8 Z`) ; avec
`orient="auto"` il pointera alors vers le haut. Lignes 103-108.

## Trois ressemblances (basses) — même cause

Des animaux réduits à des ellipses sans trait distinctif :

- **le-plancton-minuscule / quatre** — « poissons, baleines » sont des amandes
  orange sans caudale, sans dorsale, sans œil.
- **le-corail-batisseur / quatre** — les « animaux marins » du récif sont trois
  ellipses bleues indistinguables de bulles d'air.
- **les-sources-chaudes-du-fond / quatre** — le « crabe » est une ellipse à deux
  pattes, sans pince. Les vers tubicoles, eux, sont parfaitement lisibles.

**Piste commune** : une caudale triangulaire suffit à faire un poisson, une
paire de pinces à faire un crabe.

## Cartes sans reproche

- **dou-viennent-les-vagues** — la plus risquée du monde, et elle tient : en
  phase quatre, trois points décrivent un cercle **sur place** au-dessus d'un
  repère pointillé, sans dérive vers la plage. L'image dit bien que l'eau ne
  voyage pas.
- **les-fleuves-dans-la-mer** — boucle thermohaline cohérente de bout en bout.
- **pourquoi-il-fait-noir-au-fond** — l'empilement rouge/orange/jaune/vert/bleu
  est le diagramme d'absorption classique, et la phase quatre ajoute la zone
  aphotique.
- **la-pression-qui-ecrase** — quatre traits convergents pour « de tous les côtés
  à la fois », corps mou qui vire au rose, coque épaisse mise en évidence.
- **les-animaux-qui-brillent** — baudroie avec illicium et esca, les deux
  substances chimiques, le thermomètre froid, la proie qui s'allume près du
  leurre.

## Hors grille

`les-fleuves-dans-la-mer--deux` : la légende « elle plonge, refroidie » est posée
à x=230 dans un viewBox de 400 et sa dernière lettre est rognée. Mise en page,
pas justesse.
