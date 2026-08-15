import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : entre les vagues, l'océan n'est pas immobile. De vastes
 * courants entraînés par les écarts de température et de densité forment une
 * circulation permanente, distincte des marées.
 */
export const card: ScienceCard = {
  id: 'les-fleuves-dans-la-mer',
  domainId: 'les-oceans',
  animationId: 'les-fleuves-dans-la-mer',
  thumbnail: '🔄',
  content: {
    fr: {
      title: {
        '3-5': 'Des fleuves cachés dans la mer',
        '6-8': 'Les fleuves cachés dans la mer',
        '9-12': 'Les courants marins, fleuves invisibles',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Près de l’équateur, l’eau est bien chaude et elle voyage vers les pôles.',
            },
            {
              id: 'deux',
              text: 'Là-bas, il fait froid : l’eau refroidit et elle plonge tout au fond.',
            },
            {
              id: 'trois',
              text: 'Au fond de la mer, elle revient tout doucement vers l’équateur.',
            },
            {
              id: 'quatre',
              text: 'C’est comme une grande ronde d’eau qui n’arrête jamais de tourner.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Près de l’équateur, le Soleil chauffe fort la surface de l’océan. Cette eau chaude se met en route vers les pôles.',
            },
            {
              id: 'deux',
              text: 'En arrivant dans les régions froides, l’eau perd sa chaleur, devient plus lourde et plonge vers le fond.',
            },
            {
              id: 'trois',
              text: 'Depuis le fond, elle repart lentement vers l’équateur, où elle remonte pour recommencer le voyage.',
            },
            {
              id: 'quatre',
              text: 'Cette immense boucle s’appelle un courant marin : un vrai fleuve invisible dans l’océan, qui transporte la chaleur autour de la planète.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'À l’équateur, le Soleil réchauffe la surface de l’océan ; cette eau chaude et moins dense est entraînée vers les hautes latitudes par les vents et la rotation de la Terre.',
            },
            {
              id: 'deux',
              text: 'En refroidissant près des pôles, elle devient plus dense — parfois davantage encore à cause du sel laissé par la banquise qui se forme — et elle plonge en profondeur.',
            },
            {
              id: 'trois',
              text: 'Cette eau profonde et froide circule ensuite lentement vers l’équateur, entraînée par les différences de densité.',
            },
            {
              id: 'quatre',
              text: 'L’ensemble forme une circulation permanente à l’échelle du globe, qui redistribue la chaleur entre l’équateur et les pôles et influence le climat de continents entiers.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Hidden rivers in the sea',
        '6-8': 'The hidden rivers in the sea',
        '9-12': 'Ocean currents, invisible rivers',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Near the middle of the Earth the water is nice and warm, and it travels off to the cold poles.',
            },
            {
              id: 'deux',
              text: 'Up there it is freezing: the water gets cold and sinks right down to the bottom.',
            },
            {
              id: 'trois',
              text: 'Down at the bottom of the sea, it travels gently back again.',
            },
            {
              id: 'quatre',
              text: 'It is like a big ring of water that never stops going round.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Near the equator, the Sun heats the surface of the ocean strongly. This warm water then sets off towards the poles.',
            },
            {
              id: 'deux',
              text: 'When it reaches the cold regions, the water loses its heat, becomes heavier and sinks towards the bottom.',
            },
            {
              id: 'trois',
              text: 'From the bottom it travels slowly back to the equator, where it rises again to begin the journey once more.',
            },
            {
              id: 'quatre',
              text: 'This huge loop is called an ocean current: a real invisible river inside the sea, carrying heat right around the planet.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'At the equator, the Sun warms the surface of the ocean; this warm, less dense water is driven towards the high latitudes by the winds and by the rotation of the Earth.',
            },
            {
              id: 'deux',
              text: 'As it cools near the poles it becomes denser — sometimes denser still because of the salt left behind by the sea ice as it forms — and it sinks into the depths.',
            },
            {
              id: 'trois',
              text: 'This cold, deep water then flows slowly back towards the equator, driven by the differences in density.',
            },
            {
              id: 'quatre',
              text: 'Together these movements form a permanent circulation on a global scale, which redistributes heat between the equator and the poles and shapes the climate of entire continents.',
            },
          ],
        },
      },
    },
  },
};
