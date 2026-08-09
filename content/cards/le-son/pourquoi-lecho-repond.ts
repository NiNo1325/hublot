import type { ScienceCard } from '@/lib/types';

/**
 * L'écho n'est pas une réponse : c'est ton propre son qui rebondit sur un
 * obstacle et te revient, avec un léger décalage dû au temps de trajet.
 */
export const card: ScienceCard = {
  id: 'pourquoi-lecho-repond',
  domainId: 'le-son',
  animationId: 'pourquoi-lecho-repond',
  thumbnail: '📣',
  content: {
    fr: {
      title: {
        '3-5': 'Le son qui revient',
        '6-8': "Pourquoi l'écho répond",
        '9-12': "Comment naît l'écho",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Tu cries très fort : « Hou hou ! »',
            },
            {
              id: 'deux',
              text: 'Ton cri file tout droit vers le mur.',
            },
            {
              id: 'trois',
              text: 'Il tape le mur et repart aussitôt.',
            },
            {
              id: 'quatre',
              text: 'Il revient jusqu\'à ton oreille, un peu après.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Tu cries face à un mur ou une falaise, et ta voix part dans l'air.",
            },
            {
              id: 'deux',
              text: 'Le son fonce en ligne droite jusqu\'à cet obstacle.',
            },
            {
              id: 'trois',
              text: 'Il ne peut pas le traverser, alors il rebondit dessus, comme une balle.',
            },
            {
              id: 'quatre',
              text: "Il revient vers toi, mais un peu plus tard : c'est ça, l'écho — c'est ton propre son qui te répond.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Quand tu cries, tu fais vibrer l'air : ces vibrations se propagent en ondes sonores dans toutes les directions.",
            },
            {
              id: 'deux',
              text: "Une partie de ces ondes atteint un obstacle assez grand et assez dur, un mur ou une paroi rocheuse, à quelques dizaines de mètres.",
            },
            {
              id: 'trois',
              text: "L'onde ne peut pas le traverser : elle rebondit sur cette surface, comme le ferait un rayon de lumière sur un miroir.",
            },
            {
              id: 'quatre',
              text: "Elle revient vers ton oreille avec un léger décalage, car le son met du temps à parcourir la distance aller-retour : c'est l'écho, et rien d'autre que ton propre son.",
            },
          ],
        },
      },
    },
  },
};
