import type { ScienceCard } from '@/lib/types';

/**
 * Du dioxyde de carbone est dissous de force dans la boisson, sous pression.
 * En ouvrant la bouteille, la pression chute et le gaz peut ressortir en
 * bulles : ce sont les bulles du gaz enfermé qui s'échappent, pas de l'air
 * aspiré depuis l'extérieur.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-soda-petille',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-le-soda-petille',
  thumbnail: '🥤',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi le soda pétille',
        '6-8': 'Pourquoi le soda pétille',
        '9-12': 'Pourquoi le soda pétille',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Dans la bouteille fermée, du gaz est enfermé bien fort.',
            },
            {
              id: 'deux',
              text: 'Le bouchon le garde prisonnier : il ne peut pas sortir.',
            },
            {
              id: 'trois',
              text: 'Tu ouvres, et il fait plein de petites bulles qui montent.',
            },
            {
              id: 'quatre',
              text: 'Si tu attends trop, tout le gaz part : le soda devient plat.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Avant de fermer la bouteille, on enferme du gaz dans le soda sous très forte pression.',
            },
            {
              id: 'deux',
              text: 'Tant que la bouteille reste fermée, ce gaz est obligé de rester caché dans le liquide.',
            },
            {
              id: 'trois',
              text: 'Dès que tu ouvres, la pression baisse d\'un coup et le gaz peut s\'échapper en bulles qui remontent.',
            },
            {
              id: 'quatre',
              text: 'Petit à petit, tout le gaz s\'en va dans l\'air : le soda ne pétille plus, il devient plat.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Lors de la fabrication, du dioxyde de carbone est dissous dans la boisson sous forte pression.',
            },
            {
              id: 'deux',
              text: 'Tant que la bouteille est fermée, cette pression maintient le gaz dissous dans le liquide.',
            },
            {
              id: 'trois',
              text: 'En ouvrant, la pression chute brusquement : le gaz redevient moins soluble et forme des bulles qui remontent vers la surface.',
            },
            {
              id: 'quatre',
              text: 'À chaque ouverture, un peu plus de gaz s\'échappe, jusqu\'à ce qu\'il n\'en reste plus : les bulles viennent du gaz enfermé, pas de l\'air aspiré depuis l\'extérieur.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Why fizzy drinks bubble',
        '6-8': 'Why fizzy drinks bubble',
        '9-12': 'Why fizzy drinks bubble',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'In the closed bottle, gas is shut in very tight.',
            },
            {
              id: 'deux',
              text: 'The cap keeps it prisoner: it cannot get out.',
            },
            {
              id: 'trois',
              text: 'You open it, and it makes lots of little bubbles that rise up.',
            },
            {
              id: 'quatre',
              text: 'If you wait too long, all the gas leaves: the drink goes flat.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Before the bottle is closed, gas is shut into the drink under very high pressure.',
            },
            {
              id: 'deux',
              text: 'As long as the bottle stays closed, that gas has to stay hidden inside the liquid.',
            },
            {
              id: 'trois',
              text: 'The moment you open it, the pressure drops all at once and the gas can escape as bubbles that rise up.',
            },
            {
              id: 'quatre',
              text: 'Little by little, all the gas goes off into the air: the drink stops fizzing and goes flat.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'During bottling, carbon dioxide is dissolved into the drink under high pressure.',
            },
            {
              id: 'deux',
              text: 'As long as the bottle is closed, that pressure keeps the gas dissolved in the liquid.',
            },
            {
              id: 'trois',
              text: 'On opening, the pressure drops abruptly: the gas becomes far less soluble and forms bubbles that rise to the surface.',
            },
            {
              id: 'quatre',
              text: 'Each time you open it, a little more gas escapes, until none is left: the bubbles come from the gas shut inside, not from air sucked in from outside.',
            },
          ],
        },
      },
    },
  },
};
