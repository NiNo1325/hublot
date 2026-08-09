import type { ScienceCard } from '@/lib/types';

/**
 * Aigu et grave dépendent de la fréquence de vibration, pas du volume : un
 * son peut être aigu et tout doux, ou grave et très fort.
 */
export const card: ScienceCard = {
  id: 'aigu-ou-grave',
  domainId: 'le-son',
  animationId: 'aigu-ou-grave',
  thumbnail: '🎚️',
  content: {
    fr: {
      title: {
        '3-5': 'Ça sonne haut ou bas ?',
        '6-8': 'Aigu ou grave ?',
        '9-12': 'Aigu, grave : une histoire de vitesse',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Une petite corde tremble très très vite.',
            },
            {
              id: 'deux',
              text: 'Vite, vite : ça fait un son aigu, tout fin.',
            },
            {
              id: 'trois',
              text: 'Doucement, lentement : ça fait un son grave, tout gros.',
            },
            {
              id: 'quatre',
              text: 'Une corde courte et bien tendue chante plus aigu.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Pince une corde de guitare : elle se met à vibrer.',
            },
            {
              id: 'deux',
              text: 'Quand elle vibre très vite, elle produit un son aigu, comme un sifflet.',
            },
            {
              id: 'trois',
              text: 'Quand elle vibre plus lentement, elle produit un son grave, comme un tambour.',
            },
            {
              id: 'quatre',
              text: 'Une corde plus courte ou plus tendue vibre plus vite : elle donne donc un son plus aigu.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Une corde qui vibre produit un son dont la hauteur dépend de sa fréquence de vibration, mesurée en hertz.",
            },
            {
              id: 'deux',
              text: 'Plus les vibrations sont rapides, c\'est-à-dire plus la fréquence est élevée, plus le son perçu est aigu.',
            },
            {
              id: 'trois',
              text: 'Plus les vibrations sont lentes, plus la fréquence est basse, et plus le son perçu est grave.',
            },
            {
              id: 'quatre',
              text: "Raccourcir la corde ou augmenter sa tension accélère sa vibration, ce qui explique pourquoi les cordes aiguës d'un instrument sont plus courtes ou plus tendues.",
            },
          ],
        },
      },
    },
  },
};
