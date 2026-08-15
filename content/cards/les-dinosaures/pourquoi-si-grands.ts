import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : les plus grands dinosaures connus, comme
 * Argentinosaurus, étaient des herbivores sauropodes — bien plus grands que
 * les carnivores comme le Tyrannosaure.
 */
export const card: ScienceCard = {
  id: 'pourquoi-si-grands',
  domainId: 'les-dinosaures',
  animationId: 'pourquoi-si-grands',
  thumbnail: '🦕',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi si grand ?',
        '6-8': 'Pourquoi si grands ?',
        '9-12': 'Pourquoi certains dinosaures étaient-ils gigantesques ?',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: "Certains dinosaures mangeaient des plantes presque toute la journée, sans s'arrêter.",
            },
            {
              id: 'deux',
              text: "Leur très long cou leur permettait d'attraper les feuilles tout en haut des arbres.",
            },
            {
              id: 'trois',
              text: "Leurs os étaient creux à l'intérieur, comme des pailles, donc plus légers.",
            },
            {
              id: 'quatre',
              text: 'Certains étaient aussi longs que plusieurs bus mis bout à bout !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: "Les plus grands dinosaures, les sauropodes, passaient presque toute la journée à manger des plantes pour avaler assez d'énergie.",
            },
            {
              id: 'deux',
              text: "Leur cou immense leur permettait d'atteindre le feuillage tout en haut des arbres, sans avoir à déplacer tout leur corps.",
            },
            {
              id: 'trois',
              text: "Malgré leur taille, leurs os n'étaient pas pleins : ils étaient creusés de cavités, un peu comme ceux des oiseaux, ce qui les rendait plus légers.",
            },
            {
              id: 'quatre',
              text: "Certains sauropodes mesuraient plus de trente-cinq mètres de long, soit la longueur de plusieurs bus mis bout à bout.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: "Les sauropodes, herbivores exclusifs, devaient ingérer une masse considérable de végétaux chaque jour pour compenser leur faible valeur nutritive, sans même les mâcher longuement.",
            },
            {
              id: 'deux',
              text: "Leur long cou agissait comme un bras articulé, leur permettant de brouter une large zone de végétation sans dépenser d'énergie à déplacer l'ensemble du corps.",
            },
            {
              id: 'trois',
              text: "Leur squelette comportait des vertèbres pneumatiques, creusées de cavités reliées à des sacs aériens, une adaptation qui allégeait considérablement la charpente osseuse tout en la gardant robuste.",
            },
            {
              id: 'quatre',
              text: "Argentinosaurus, l'un des plus grands connus, atteignait environ trente-cinq mètres de long pour près de soixante-dix tonnes, la taille de plusieurs bus articulés mis bout à bout.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why so big?',
        '6-8': 'Why were they so big?',
        '9-12': 'Why were some dinosaurs gigantic?',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Some dinosaurs ate plants nearly all day long, without ever stopping.',
            },
            {
              id: 'deux',
              text: 'Their very long neck let them grab the leaves right at the top of the trees.',
            },
            {
              id: 'trois',
              text: 'Their bones were hollow inside, like straws, so they were lighter.',
            },
            {
              id: 'quatre',
              text: 'Some were as long as several buses end to end!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'The biggest dinosaurs, the sauropods, spent nearly the whole day eating plants in order to swallow enough energy.',
            },
            {
              id: 'deux',
              text: 'Their immense neck let them reach the leaves right at the top of the trees, without having to move their whole body.',
            },
            {
              id: 'trois',
              text: 'Despite their size, their bones were not solid: they were hollowed out with cavities, rather like those of birds, which made them lighter.',
            },
            {
              id: 'quatre',
              text: 'Some sauropods were more than thirty-five metres long, the length of several buses parked end to end.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Sauropods, herbivores through and through, had to take in a considerable mass of plants each day to make up for their poor nutritional value, without even chewing them for long.',
            },
            {
              id: 'deux',
              text: 'Their long neck worked like a jointed arm, letting them graze a wide area of vegetation without spending energy shifting the whole body.',
            },
            {
              id: 'trois',
              text: 'Their skeleton included pneumatic vertebrae, hollowed out with cavities connected to air sacs, an adaptation that lightened the bony frame considerably while keeping it strong.',
            },
            {
              id: 'quatre',
              text: 'Argentinosaurus, one of the largest known, reached about thirty-five metres long and close to seventy tonnes, the size of several articulated buses end to end.',
            },
          ],
        },
      },
    },
  },
};
