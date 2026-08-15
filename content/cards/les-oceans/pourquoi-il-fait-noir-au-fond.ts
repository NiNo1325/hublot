import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la lumière du Soleil s'atténue avec la profondeur
 * indépendamment de l'heure ou de la météo en surface. Le rouge, de grande
 * longueur d'onde, est absorbé en premier ; le bleu pénètre le plus loin.
 */
export const card: ScienceCard = {
  id: 'pourquoi-il-fait-noir-au-fond',
  domainId: 'les-oceans',
  animationId: 'pourquoi-il-fait-noir-au-fond',
  thumbnail: '🔦',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi c’est noir tout au fond',
        '6-8': 'Pourquoi il fait noir au fond',
        '9-12': 'Pourquoi la lumière disparaît sous l’eau',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'La lumière du Soleil plonge dans la mer.',
            },
            {
              id: 'deux',
              text: 'Mais l’eau boit la lumière petit à petit.',
            },
            {
              id: 'trois',
              text: 'La couleur rouge disparaît la première.',
            },
            {
              id: 'quatre',
              text: 'Tout en bas, très profond, il fait nuit noire.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Quand la lumière du Soleil entre dans l’eau, elle commence à s’enfoncer.',
            },
            {
              id: 'deux',
              text: 'Mais l’eau absorbe peu à peu cette lumière, mètre après mètre.',
            },
            {
              id: 'trois',
              text: 'Le rouge est la première couleur à disparaître, dès les premiers mètres, puis viennent l’orange et le jaune.',
            },
            {
              id: 'quatre',
              text: 'Passé quelques centaines de mètres, plus aucune lumière n’arrive : c’est l’obscurité totale, même en plein midi à la surface.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'La lumière du Soleil qui pénètre dans l’eau combine toutes les couleurs du spectre visible.',
            },
            {
              id: 'deux',
              text: 'L’eau absorbe progressivement cette lumière, et chaque couleur est filtrée à une profondeur différente selon sa longueur d’onde.',
            },
            {
              id: 'trois',
              text: 'Le rouge, de grande longueur d’onde, est absorbé dès les dix premiers mètres ; puis disparaissent l’orange, le jaune et le vert ; le bleu pénètre le plus loin, ce qui donne aux profondeurs leur teinte bleutée.',
            },
            {
              id: 'quatre',
              text: 'Au-delà d’environ mille mètres, dans la zone dite aphotique, plus aucune lumière solaire ne subsiste : une obscurité totale et permanente, indépendante de l’heure ou de la météo en surface.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why it is dark right at the bottom',
        '6-8': 'Why it is dark at the bottom of the sea',
        '9-12': 'Why light vanishes underwater',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'The light of the Sun dives down into the sea.',
            },
            {
              id: 'deux',
              text: 'But the water drinks up the light, bit by bit.',
            },
            {
              id: 'trois',
              text: 'The colour red disappears first.',
            },
            {
              id: 'quatre',
              text: 'Right down at the bottom, it is as dark as night.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'When sunlight enters the water, it begins to sink down.',
            },
            {
              id: 'deux',
              text: 'But the water soaks that light up little by little, metre after metre.',
            },
            {
              id: 'trois',
              text: 'Red is the first colour to vanish, in the very first metres, then come orange and yellow.',
            },
            {
              id: 'quatre',
              text: 'Past a few hundred metres, no light arrives at all: it is complete darkness, even at midday up at the surface.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'The sunlight that enters the water combines every colour of the visible spectrum.',
            },
            {
              id: 'deux',
              text: 'The water absorbs that light gradually, and each colour is filtered out at a different depth according to its wavelength.',
            },
            {
              id: 'trois',
              text: 'Red, with its long wavelength, is absorbed within the first ten metres; then orange, yellow and green disappear; blue travels the furthest, which gives the depths their bluish colour.',
            },
            {
              id: 'quatre',
              text: 'Beyond about a thousand metres, in what is called the aphotic zone, no sunlight remains at all: a total and permanent darkness, whatever the time of day or the weather at the surface.',
            },
          ],
        },
      },
    },
  },
};
