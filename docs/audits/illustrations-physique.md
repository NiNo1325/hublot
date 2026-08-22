# Audit des illustrations — monde « physique »

> **Tous les défauts de ce rapport sont corrigés** (22/08/2026), chacun vérifié
> sur une capture refaite. Voir `illustrations-synthese.md`.

10 cartes, 40 phases, 7 défauts : 2 contradictions, 2 ressemblances, 3 manques.
Quatre cartes sans reproche.

## le-poids-et-la-masse / phase balance — contradiction (HAUTE)

`components/animations/PoidsMasseAnimation.tsx` — rien n'y dépend des phases 0
et 1 : l'image est **rigoureusement identique** à celle de la phase suivante.

**Le texte dit** (6-8) : « Posée sur la Lune, elle afficherait six fois moins. »

**L'image montre** : « 60 kg » en vert vif sous la Terre **et** sous la Lune,
avec « la masse ne change jamais » allumé, tandis que « 600 N » et « 100 N »
restent éteints. Aucune balance n'est dessinée.

**Pourquoi c'est grave** : l'enfant entend « six fois moins sur la Lune » et voit
le même nombre des deux côtés. La phase illustre la correction de la phase
*suivante*, pas la sienne.

**Piste** : allumer la ligne des poids (600 N / 100 N) dès `balance`, ne faire
monter les masses qu'à `deux-choses`, et dessiner une balance.

## les-aimants / phase pas-tout — contradiction (moyenne)

`AimantsAnimation.tsx` — la flèche est `M276 144 h-28`.

**Le texte dit** (6-8) : « ils attirent le fer… mais pas l'aluminium ni le
cuivre. »

**L'image montre** : la seule flèche de la phase part du bloc « fer » et pointe
**vers le bloc aluminium**, sa pointe s'arrêtant contre lui. L'aimant, lui, est
éteint et hors champ.

**Piste** : rallumer l'aimant, faire partir la flèche du fer **vers l'aimant**,
et barrer l'espace entre l'aimant et l'aluminium.

## Deux manques de gravité moyenne

- **pourquoi-tout-tombe / lune** — « La Terre tire même sur la Lune » : le centre
  de l'orbite en pointillés est **vide**. La Lune tourne autour de rien.
- **les-atomes / assembler** — « leurs électrons se repoussent » : trois flèches
  **parallèles, toutes vers la gauche**, dans une zone vide. Une répulsion est
  mutuelle ; il faudrait deux atomes et deux flèches divergentes.

## lenergie / phase conserver — ressemblance (moyenne)

L'éolienne est **un simple bâton gris sans pales**. Le source en déclare trois
(lignes 49-57) mais elles n'apparaissent sur aucune des quatre captures — elles
disparaissent probablement à l'état statique. Or « ce qui tourne » est
précisément ce que la phrase demande de voir.

## lelectricite / phase electrons — manque (basse), mais bug réel

`ElectriciteAnimation.tsx` — les cinq cercles d'électrons **n'ont ni `cx` ni
`cy`**. Sans animation, ils s'empilent tous en 0,0 : sur la capture, deux points
seulement sur le circuit et un quart de disque coincé dans le coin supérieur
gauche, hors du fil.

**Cela dépasse l'illustration** : un enfant en « mouvement réduit » — réglage
système d'accessibilité — voit une illustration cassée. **Donner une position de
départ à chaque cercle sur le tracé du fil.**

## pourquoi-tout-tombe / phase plume — ressemblance (basse)

La « plume » est une amande crème qu'on lit plutôt comme une feuille ou une
goutte, et au niveau 6-8 le « marteau » nommé par le texte est une bille.

## Cartes sans reproche

- **pourquoi-on-voit-les-couleurs** — prisme, ordre du spectre, retour du rouge
  par la pomme.
- **comment-voyage-le-son** — compressions et raréfactions bien longitudinales,
  particules éteintes dans le vide.
- **le-chaud-et-le-froid** — flèche « froid » barrée, manteau autour du seul
  corps chaud, égalisation à l'équilibre.
- **pourquoi-ca-sarrete** — frottements opposés au mouvement, distances
  croissantes sol / glace / espace, sonde sans propulsion.
