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
  },
};
