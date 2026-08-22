# Audit des illustrations — monde « meteo »

10 cartes, 40 phases, 1 défaut : 0 contradiction, 1 ressemblance, 0 manque.
C'est le monde le mieux tenu du catalogue.

## la-neige / phase « pas-pluie-gelee » — ressemblance (basse)

**Le texte dit** (3-5) : « La neige, ce n'est pas de la pluie qui a gelé en
tombant. »

**L'image montre** : une goutte bleue **pointue en haut**, en larme classique,
reliée par une flèche à une bille de glace, l'ensemble barré de rouge. Le barré
porte sur la transformation, pas sur la forme de la goutte.

**Pourquoi ça gêne** : dans ce même monde, `la-forme-des-gouttes-de-pluie`
enseigne que « les vraies gouttes n'ont jamais cette forme pointue » et barre
exactement ce pictogramme. L'enfant voit ici la larme que la carte voisine lui
apprend à rejeter.

*Ambiguïté assumée : la larme est un pictogramme générique de « l'eau », dans une
image dont le propos n'est pas la forme des gouttes — d'où la gravité basse.*

**Piste** : reprendre la forme ronde déjà dessinée dans
`la-forme-des-gouttes-de-pluie`, en gardant le barré tel quel.
`NeigeAnimation.tsx`, le tracé `M90 60 q-10 14 0 22 …`.

## Cartes sans reproche

- **les-nuages** — la vapeur invisible en pointillé, les gouttelettes visibles
  seulement en phase trois : la distinction, qui est le cœur de la carte, tient.
- **pourquoi-il-fait-plus-froid-en-montagne** — le lien sommet-Soleil est barré à
  la phase qui le nie, et la densité de points d'air décroît réellement avec
  l'altitude (5, 3, 2).
- **la-foudre-et-le-tonnerre** — charges positives en haut du nuage, et la lumière
  atteint la maison une phase avant le son.
- **la-grele** — grêlon en coupe à couches concentriques. *La capture le montre
  immobile : elle tombe à 1,4 s, pile au redémarrage de la boucle. Artefact de
  capture, pas défaut.*
- **le-brouillard** — même teinte que le nuage en altitude avec un « = » entre les
  deux ; à la levée, la bande s'efface **sur place** au lieu de se déplacer.
- **louragan** — spirale, œil dégagé cerné d'un anneau, bandes marquées.
- **la-rosee-du-matin** — les gouttes naissent sur la feuille, jamais tombant du
  ciel ; la flèche descendante est barrée.
- **le-givre** — la vapeur se dépose en cristaux sans passer par le liquide.
- **la-forme-des-gouttes-de-pluie** — la larme barrée, la petite goutte sphérique,
  la grosse aplatie dessous comme un petit pain.
