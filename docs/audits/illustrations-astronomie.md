# Audit des illustrations — monde « astronomie »

10 cartes, 40 phases, 4 défauts : 3 contradictions (2 hautes), 1 manque.
Sept cartes sans reproche.

**Ce monde concentre les deux défauts les plus graves de tout l'audit.** Dans les
deux cas, une carte qui existe pour corriger une idée reçue montre exactement
l'idée reçue — ou son inverse.

## 1. Les saisons sont à l'envers — contradiction (HAUTE)

`components/animations/SaisonsAnimation.tsx`, ligne 32.

**Le texte dit** (6-8, phase `ete`) : « Quand ton hémisphère penche **vers** le
Soleil, les rayons arrivent presque à la verticale. C'est l'été. »

**L'image montre** : deux Terres de part et d'autre du Soleil, toutes deux avec
`rotate(-23)`, donc le pôle Nord penché vers la gauche dans les deux cas. La
Terre étiquetée « été » est celle de gauche (x=62, Soleil à x=200) : son
hémisphère nord est donc incliné **à l'opposé** du Soleil. Celle étiquetée
« hiver » (x=338) penche vers lui.

**Pourquoi c'est grave** : la carte existe pour enseigner que l'été vient de
l'inclinaison vers le Soleil, et l'image montre l'exact inverse. C'est le seul
repère visuel dont dispose l'enfant.

**Piste** : passer `rotate(-23)` à `rotate(23)` sur l'une des deux Terres — l'axe
garde sa direction mais du bon côté. À défaut, intervertir les deux blocs
été/hiver (Terres, faisceaux et légendes).

## 2. La Lune serait toujours pleine — contradiction (HAUTE)

`components/animations/PhasesLuneAnimation.tsx`, lignes 61-72.

**Le texte dit** (6-8) : « Selon l'endroit où elle se trouve, nous voyons cette
moitié éclairée de face, de côté, ou presque pas du tout. »

**L'image montre** : la limite clair/sombre de la Lune est orientée vers la
**Terre**, pas vers le Soleil. La cause est structurelle : l'`animateTransform`
de rotation autour de la Terre **englobe le demi-disque clair**, qui reste donc
solidaire de la direction de la Terre pendant toute l'orbite.

**Pourquoi c'est grave** : sur toute l'animation, la Lune présente sa face
éclairée à la Terre en permanence — elle serait toujours pleine, ce qui annule
le mécanisme même que la carte explique.

**Piste** : sortir le demi-disque clair du groupe animé, ou lui appliquer une
contre-rotation de même durée, pour que sa moitié claire pointe toujours vers le
Soleil.

## 3. les-planetes / phase vide — contradiction (basse)

**Le texte dit** (6-8) : « les huit planètes ne se rangent quasiment jamais en
ligne, contrairement aux images. »

**L'image montre** : deux rangées de huit planètes **strictement alignées**, la
seconde étiquetée « à la vraie échelle ».

**Réserve honnête** : un diagramme de distances en une dimension est une
convention légitime, et la phase porte d'abord sur l'échelle. D'où la gravité
basse.

**Piste** : décaler verticalement les planètes de la rangée corrigée pour rompre
l'alignement.

## 4. les-phases-de-la-lune / phase formes — manque (basse)

Le texte 3-5 dit « toute ronde, puis en **croissant**, puis presque cachée » ; les
quatre vignettes montrent pleine, nouvelle, quartier et gibbeuse — **aucun
croissant**. L'enfant associera « croissant » au demi-disque du quartier.

## Cartes sans reproche

- **jour-et-nuit** — Soleil fixe, rayons parallèles, terminateur nommé.
- **les-etoiles** — champ d'étoiles, Soleil grossi, décalage temporel de la
  lumière.
- **pourquoi-les-astronautes-flottent** — la flèche de gravité est présente et
  légendée « à 90 % », la chute est conjointe, la trajectoire « rate la Terre » :
  l'idée reçue est bien corrigée par l'image.
- **les-trous-noirs** — orbite stable à distance sur la phase `pas-aspirateur`.
- **les-etoiles-filantes** — « c'est l'air qui brille » est bien ce qui est
  dessiné.
- **la-face-cachee-de-la-lune** — le repère de la face visible pointe vers la
  Terre aux trois positions, et la face cachée s'affiche **éclairée** : les deux
  idées reçues sont correctement contredites.
- **les-eclipses** — orbite inclinée, Lune hors alignement, cône d'ombre.
