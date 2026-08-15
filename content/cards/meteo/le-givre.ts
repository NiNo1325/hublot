import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « le givre, c'est de la rosée qui a gelé ». En réalité,
 * quand la surface est déjà sous zéro, la vapeur d'eau de l'air se change
 * directement en glace dessus (déposition), sans passer par la goutte liquide.
 * D'où les fins cristaux en plumes, très différents d'une goutte gelée.
 * Cohérent avec « la rosée du matin » : rosée = gouttes (>0°C), givre = cristaux (<0°C).
 */
export const card: ScienceCard = {
  id: 'le-givre',
  domainId: 'meteo',
  animationId: 'givre',
  thumbnail: '🌬️',
  content: {
    fr: {
      title: {
        '3-5': 'Le givre',
        '6-8': "D'où vient le givre",
        '9-12': "D'où vient le givre",
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-rosee-gelee',
              text: 'Le givre, ce sont de jolis dessins blancs sur les vitres en hiver.',
            },
            {
              id: 'surface-glacee',
              text: 'Il apparaît quand la vitre ou l’herbe est très froide, bien en dessous de zéro.',
            },
            {
              id: 'depot-direct',
              text: 'L’eau de l’air se change alors tout de suite en glace, sans faire de goutte d’abord.',
            },
            {
              id: 'cristaux',
              text: 'Ça dessine plein de petits cristaux blancs, comme des plumes de glace.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-rosee-gelee',
              text: "On pense que le givre, c'est de la rosée qui a gelé après coup. Ce n'est pas ça : il ne passe jamais par la petite goutte d'eau.",
            },
            {
              id: 'surface-glacee',
              text: 'Le givre se forme quand la surface — vitre, herbe, voiture — est déjà bien en dessous de zéro degré.',
            },
            {
              id: 'depot-direct',
              text: 'La vapeur d’eau de l’air se transforme alors directement en glace sur cette surface froide, sans étape liquide. On appelle ça la déposition.',
            },
            {
              id: 'cristaux',
              text: 'C’est pour ça que le givre forme de fins cristaux en plumes et en aiguilles, bien différents d’une simple goutte gelée qui serait, elle, lisse et ronde.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-rosee-gelee',
              text: "Le givre n'est pas de la rosée gelée. La rosée se forme au-dessus de zéro, en gouttes ; le givre suit un tout autre chemin.",
            },
            {
              id: 'surface-glacee',
              text: "Il apparaît lorsque la surface est déjà sous 0 °C. L'air à son contact est saturé de vapeur d'eau, mais trop froid pour former de l'eau liquide.",
            },
            {
              id: 'depot-direct',
              text: "La vapeur passe alors directement de l'état gazeux à l'état solide, en se fixant sur la surface : c'est la déposition, l'inverse de la sublimation. Aucune goutte n'existe à aucun moment.",
            },
            {
              id: 'cristaux',
              text: "Comme la neige, ce dépôt s'organise en cristaux de glace : le givre dessine des plumes, des aiguilles et des fougères, jamais des gouttes rondes. Sa forme cristalline trahit son origine — de la vapeur solidifiée, pas de l'eau gelée.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Frost',
        '6-8': 'Where frost comes from',
        '9-12': 'Where frost comes from',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'pas-rosee-gelee',
              text: 'Frost is those pretty white patterns on the windows in winter.',
            },
            {
              id: 'surface-glacee',
              text: 'It appears when the window or the grass is very cold, well below zero.',
            },
            {
              id: 'depot-direct',
              text: 'The water in the air then turns straight into ice, without making a drop first.',
            },
            {
              id: 'cristaux',
              text: 'It draws lots of little white crystals, like feathers made of ice.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'pas-rosee-gelee',
              text: 'People think frost is dew that froze afterwards. That is not it: it never goes through the little water droplet stage.',
            },
            {
              id: 'surface-glacee',
              text: 'Frost forms when the surface — window, grass, car — is already well below zero degrees.',
            },
            {
              id: 'depot-direct',
              text: 'The water vapour in the air then turns directly into ice on that cold surface, with no liquid stage. This is called deposition.',
            },
            {
              id: 'cristaux',
              text: 'That is why frost makes fine crystals shaped like feathers and needles, quite unlike a simple frozen droplet, which would be smooth and round.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'pas-rosee-gelee',
              text: 'Frost is not frozen dew. Dew forms above zero, as drops; frost follows an entirely different route.',
            },
            {
              id: 'surface-glacee',
              text: 'It appears when the surface is already below 0 °C. The air touching it is saturated with water vapour, but too cold to form liquid water.',
            },
            {
              id: 'depot-direct',
              text: 'The vapour then passes straight from the gaseous state to the solid state, fixing itself onto the surface: this is deposition, the reverse of sublimation. No droplet exists at any point.',
            },
            {
              id: 'cristaux',
              text: 'Like snow, this deposit arranges itself into ice crystals: frost draws feathers, needles and ferns, never round drops. Its crystalline shape gives away its origin — solidified vapour, not frozen water.',
            },
          ],
        },
      },
    },
  },
};
