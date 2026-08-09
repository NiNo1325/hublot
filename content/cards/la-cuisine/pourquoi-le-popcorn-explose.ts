import type { ScienceCard } from '@/lib/types';

/**
 * Chaque grain de maïs à pop-corn contient une goutte d'eau enfermée dans
 * une coque dure et étanche. La chaleur transforme cette eau en vapeur, dont
 * la pression finit par faire éclater la coque : le grain n'enfle pas tout
 * seul « en cuisant », il explose sous l'effet de la vapeur sous pression.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-popcorn-explose',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-le-popcorn-explose',
  thumbnail: '🍿',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi le pop-corn fait pop',
        '6-8': 'Pourquoi le pop-corn explose',
        '9-12': 'Pourquoi le pop-corn explose',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Dans chaque petit grain, il y a une goutte d\'eau cachée.',
            },
            {
              id: 'deux',
              text: 'Sur le feu, la goutte devient très chaude.',
            },
            {
              id: 'trois',
              text: 'Elle pousse très fort contre la coque du grain.',
            },
            {
              id: 'quatre',
              text: 'La coque craque : POP !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Chaque grain de maïs à pop-corn contient une minuscule goutte d\'eau, enfermée dans une coque dure.',
            },
            {
              id: 'deux',
              text: 'Quand tu chauffes les grains, cette eau se transforme en vapeur brûlante.',
            },
            {
              id: 'trois',
              text: 'La vapeur veut prendre beaucoup plus de place et pousse de toutes ses forces contre la coque.',
            },
            {
              id: 'quatre',
              text: 'La coque finit par céder d\'un coup : le grain explose et se retourne en pop-corn, POP !',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le grain de maïs à pop-corn renferme environ 14 % d\'eau, enfermée dans une coque dure et quasiment étanche.',
            },
            {
              id: 'deux',
              text: 'Chauffée au-delà de 100 degrés, cette eau se vaporise, mais reste piégée : la pression à l\'intérieur du grain grimpe fortement.',
            },
            {
              id: 'trois',
              text: 'Quand la pression dépasse ce que la coque peut supporter, elle cède brutalement.',
            },
            {
              id: 'quatre',
              text: 'L\'amidon du grain, ramolli par la chaleur, se détend alors violemment vers l\'extérieur : c\'est cette expansion sous pression qui fait le pop-corn, pas une simple cuisson.',
            },
          ],
        },
      },
    },
  },
};
