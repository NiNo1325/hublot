import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : les fractales naturelles ne se répètent pas à l'infini,
 * contrairement aux fractales mathématiques. Une fougère s'arrête à quelques
 * niveaux. On garde ici la même exigence que sur la carte de symétrie :
 * distinguer le modèle idéal de son approximation dans le réel.
 */
export const card: ScienceCard = {
  id: 'les-fractales',
  domainId: 'mathematiques',
  animationId: 'fractales',
  thumbnail: '🌿',
  content: {
    fr: {
      title: {
        '3-5': 'Les formes dans les formes',
        '6-8': 'Les fractales',
        '9-12': 'Fractales et autosimilarité',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'motif',
              text: "Regarde une fougère : chaque petite feuille ressemble à la grande feuille entière.",
            },
            {
              id: 'repetition',
              text: "Et sur cette petite feuille, il y en a d'encore plus petites, toutes pareilles.",
            },
            {
              id: 'nature',
              text: "C'est comme ça pour les arbres, le chou romanesco, et même les éclairs dans le ciel.",
            },
            {
              id: 'limite',
              text: "Mais ça ne continue pas éternellement. Si tu regardes de très près, ça finit par s'arrêter.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'motif',
              text: "Une fractale est une forme dont chaque partie ressemble à l'ensemble. On appelle cela l'autosimilarité.",
            },
            {
              id: 'repetition',
              text: "On la construit en répétant une règle très simple. Prends un triangle, enlève celui du milieu, recommence sur chaque triangle restant — après quelques tours, le dessin paraît compliqué alors que la règle ne l'est pas.",
            },
            {
              id: 'nature',
              text: "La nature emploie cette astuce partout : arbres, poumons, réseaux de rivières, flocons. Elle permet de remplir beaucoup d'espace avec très peu d'instructions. Tes poumons tiennent dans ta poitrine tout en offrant une surface d'échange grande comme un terrain de tennis.",
            },
            {
              id: 'limite',
              text: "En mathématiques, la répétition est infinie. Dans la nature, jamais : un arbre s'arrête aux plus petites brindilles, une fougère à quelques niveaux seulement.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'motif',
              text: "Une fractale présente des structures similaires à toutes les échelles d'observation. Zoomer ne simplifie pas la figure — contrairement à un cercle, qui finit par ressembler à une droite.",
            },
            {
              id: 'repetition',
              text: "Elles naissent de processus itératifs : appliquer une règle, puis la réappliquer au résultat, indéfiniment. Le triangle de Sierpiński et le flocon de Koch se définissent chacun en une phrase, alors que leur tracé semble d'une complexité inépuisable.",
            },
            {
              id: 'nature',
              text: "Leur dimension n'est pas entière. La courbe de Koch a une dimension d'environ 1,26 : plus qu'une ligne, moins qu'une surface. Concrètement, mesurer une côte donne un résultat qui augmente à mesure que la règle utilisée est plus fine — le littoral n'a pas de longueur unique.",
            },
            {
              id: 'limite',
              text: "L'autosimilarité naturelle est statistique et bornée : elle vaut sur quelques ordres de grandeur, puis s'arrête, limitée par la taille des cellules ou des atomes. Ici encore, la fractale mathématique est un modèle dont le réel s'approche sans jamais l'atteindre.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Shapes inside shapes',
        '6-8': 'Fractals',
        '9-12': 'Fractals and self-similarity',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'motif',
              text: 'Look at a fern: every little leaf looks like the whole big leaf.',
            },
            {
              id: 'repetition',
              text: 'And on that little leaf, there are even tinier ones, all the same again.',
            },
            {
              id: 'nature',
              text: 'It is like that for trees, for romanesco broccoli, and even for lightning in the sky.',
            },
            {
              id: 'limite',
              text: 'But it does not go on for ever. If you look very, very closely, it stops in the end.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'motif',
              text: 'A fractal is a shape whose every part looks like the whole. That is called self-similarity.',
            },
            {
              id: 'repetition',
              text: 'You build one by repeating a very simple rule. Take a triangle, remove the middle one, start again on each triangle left — after a few rounds the drawing looks complicated, even though the rule is not.',
            },
            {
              id: 'nature',
              text: 'Nature uses this trick everywhere: trees, lungs, river networks, snowflakes. It fills a lot of space with very few instructions. Your lungs fit inside your chest and still offer an exchange surface as big as a tennis court.',
            },
            {
              id: 'limite',
              text: 'In mathematics, the repetition is infinite. In nature, never: a tree stops at its smallest twigs, a fern after only a few levels.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'motif',
              text: 'A fractal shows similar structures at every scale of observation. Zooming in does not simplify the figure — unlike a circle, which ends up looking like a straight line.',
            },
            {
              id: 'repetition',
              text: 'Fractals come from iterative processes: apply a rule, then apply it again to the result, indefinitely. The Sierpiński triangle and the Koch snowflake are each defined in a single sentence, yet their outlines look endlessly complex.',
            },
            {
              id: 'nature',
              text: 'Their dimension is not a whole number. The Koch curve has a dimension of about 1.26: more than a line, less than a surface. In practice, measuring a coastline gives a result that grows as the ruler used gets finer — a coastline has no single length.',
            },
            {
              id: 'limite',
              text: 'Natural self-similarity is statistical and bounded: it holds over a few orders of magnitude, then stops, limited by the size of cells or atoms. Here again, the mathematical fractal is a model that reality approaches without ever reaching it.',
            },
          ],
        },
      },
    },
  },
};
