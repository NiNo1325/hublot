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
              text: 'Tu ouvres : le gaz peut enfin sortir.',
            },
            {
              id: 'trois',
              text: 'Il fait plein de petites bulles qui montent.',
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
  },
};
