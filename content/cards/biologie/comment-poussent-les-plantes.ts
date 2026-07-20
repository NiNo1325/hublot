import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : beaucoup d'enfants pensent que la plante « mange » la
 * terre. C'est faux, et c'est précisément ce qui rend la photosynthèse
 * intéressante — la matière de la plante vient surtout de l'air. Les trois
 * niveaux corrigent cette idée sans jamais la contredire brutalement.
 */
export const card: ScienceCard = {
  id: 'comment-poussent-les-plantes',
  domainId: 'biologie',
  animationId: 'photosynthese',
  thumbnail: '🌱',
  content: {
    fr: {
      title: {
        '3-5': 'La plante qui boit le soleil',
        '6-8': 'Comment les plantes se nourrissent',
        '9-12': 'La photosynthèse',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'lumiere',
              text: 'Les feuilles des plantes attrapent la lumière du soleil, comme de toutes petites mains vertes ouvertes.',
            },
            {
              id: 'eau',
              text: "Les racines, tout en bas, boivent l'eau qui se cache dans la terre et la font monter jusqu'aux feuilles.",
            },
            {
              id: 'fabrication',
              text: "Avec la lumière, l'eau et l'air, la plante fabrique elle-même sa nourriture. Elle n'a besoin de personne.",
            },
            {
              id: 'oxygene',
              text: "Et pendant qu'elle travaille, elle souffle dans l'air quelque chose de très précieux : ce que nous respirons.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'lumiere',
              text: "Les feuilles contiennent une matière verte, la chlorophylle, qui capte l'énergie de la lumière du Soleil. C'est elle qui donne leur couleur aux plantes.",
            },
            {
              id: 'eau',
              text: "Les racines puisent l'eau du sol, et de minuscules trous sous les feuilles aspirent un gaz de l'air : le dioxyde de carbone.",
            },
            {
              id: 'fabrication',
              text: "Grâce à l'énergie de la lumière, la plante assemble l'eau et ce gaz pour fabriquer du sucre. Ce sucre, c'est sa nourriture, et c'est aussi ce qui la fait grandir.",
            },
            {
              id: 'oxygene',
              text: "En fabriquant ce sucre, elle rejette de l'oxygène — le gaz dont nous avons besoin pour respirer. Les plantes nourrissent donc leur monde en même temps qu'elles se nourrissent.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'lumiere',
              text: "La chlorophylle, contenue dans les chloroplastes des cellules végétales, absorbe l'énergie lumineuse — surtout le rouge et le bleu. Le vert, lui, est renvoyé : c'est pourquoi les feuilles nous paraissent vertes.",
            },
            {
              id: 'eau',
              text: "Les racines prélèvent l'eau et des minéraux dans le sol. Les stomates, de minuscules orifices situés sous les feuilles, laissent entrer le dioxyde de carbone de l'atmosphère.",
            },
            {
              id: 'fabrication',
              text: "L'énergie lumineuse permet de combiner eau et dioxyde de carbone en glucose. Voici le point le plus surprenant : l'essentiel de la masse d'un arbre ne vient pas du sol, mais du carbone extrait de l'air. Un arbre est en grande partie fait d'air solidifié.",
            },
            {
              id: 'oxygene',
              text: "L'oxygène rejeté est un déchet de cette réaction. Il y a environ deux milliards et demi d'années, des micro-organismes photosynthétiques en ont produit assez pour transformer durablement l'atmosphère terrestre et rendre possible la vie telle que nous la connaissons.",
            },
          ],
        },
      },
    },
  },
};
