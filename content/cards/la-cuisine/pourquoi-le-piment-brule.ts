import type { ScienceCard } from '@/lib/types';

/**
 * La capsaïcine du piment se fixe sur les mêmes capteurs que ceux qui
 * détectent la chaleur réelle : la langue croit brûler alors que rien n'a
 * chauffé. C'est un matière grasse (comme le lait), pas l'eau, qui dissout
 * la capsaïcine et calme la sensation.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-piment-brule',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-le-piment-brule',
  thumbnail: '🌶️',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi le piment pique fort',
        '6-8': 'Pourquoi le piment brûle',
        '9-12': 'Pourquoi le piment brûle',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Le piment a une petite substance magique dedans.',
            },
            {
              id: 'deux',
              text: 'Elle se colle sur ta langue, à l\'endroit qui sent le chaud.',
            },
            {
              id: 'trois',
              text: 'Ta langue crie « ça brûle ! » très fort.',
            },
            {
              id: 'quatre',
              text: 'Mais en vrai, rien n\'est chaud : c\'est une farce.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Le piment contient une substance appelée capsaïcine.',
            },
            {
              id: 'deux',
              text: 'Elle se fixe sur les mêmes capteurs de ta langue qui détectent normalement la vraie chaleur.',
            },
            {
              id: 'trois',
              text: 'Ces capteurs envoient alors à ton cerveau le message « attention, ça brûle ! ».',
            },
            {
              id: 'quatre',
              text: 'Pourtant rien n\'a vraiment chauffé : c\'est un piège que la capsaïcine joue à ta langue.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le piment contient de la capsaïcine, une molécule produite par la plante pour se défendre.',
            },
            {
              id: 'deux',
              text: 'Cette molécule active les mêmes récepteurs nerveux que ceux déclenchés par une température élevée, présents sur la langue.',
            },
            {
              id: 'trois',
              text: 'Ces récepteurs envoient au cerveau un signal de douleur identique à celui d\'une vraie brûlure.',
            },
            {
              id: 'quatre',
              text: 'Aucune chaleur réelle n\'est en cause : c\'est une illusion sensorielle. La capsaïcine étant grasse, c\'est le lait qui l\'emporte, pas l\'eau qui ne fait que la déplacer.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why chilli stings so much',
        '6-8': 'Why chilli burns',
        '9-12': 'Why chilli burns',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'A chilli has a little magic something inside it.',
            },
            {
              id: 'deux',
              text: 'It sticks to your tongue, on the spot that feels hot.',
            },
            {
              id: 'trois',
              text: 'Your tongue shouts “it’s burning!” very loudly.',
            },
            {
              id: 'quatre',
              text: 'But really, nothing is hot at all: it’s a trick.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Chilli contains a substance called capsaicin.',
            },
            {
              id: 'deux',
              text: 'It sticks to the very same sensors on your tongue that normally pick up real heat.',
            },
            {
              id: 'trois',
              text: 'Those sensors then send your brain the message “watch out, that’s burning!”.',
            },
            {
              id: 'quatre',
              text: 'Yet nothing has really got hot: it is a trick that capsaicin plays on your tongue.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Chilli contains capsaicin, a molecule the plant produces to defend itself.',
            },
            {
              id: 'deux',
              text: 'This molecule activates the same nerve receptors on the tongue as a high temperature would.',
            },
            {
              id: 'trois',
              text: 'Those receptors send the brain a pain signal identical to the one from a real burn.',
            },
            {
              id: 'quatre',
              text: 'No real heat is involved: it is a sensory illusion. Because capsaicin is oily, it is milk that carries it away, not water, which only moves it around.',
            },
          ],
        },
      },
    },
  },
};
