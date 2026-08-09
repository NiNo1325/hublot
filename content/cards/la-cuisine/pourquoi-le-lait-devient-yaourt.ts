import type { ScienceCard } from '@/lib/types';

/**
 * Des bactéries lactiques, ajoutées volontairement au lait tiède, mangent son
 * sucre (le lactose) et produisent de l'acide lactique, qui fait épaissir le
 * lait en yaourt. Toutes les bactéries ne sont pas nuisibles : celles-ci
 * transforment sans rendre malade.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-lait-devient-yaourt',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-le-lait-devient-yaourt',
  thumbnail: '🥛',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi le lait devient yaourt',
        '6-8': 'Pourquoi le lait devient yaourt',
        '9-12': 'Pourquoi le lait devient yaourt',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'On ajoute de gentilles petites bêtes dans du lait tiède.',
            },
            {
              id: 'deux',
              text: 'Elles mangent le sucre caché dans le lait.',
            },
            {
              id: 'trois',
              text: 'En mangeant, elles fabriquent quelque chose de nouveau.',
            },
            {
              id: 'quatre',
              text: 'Le lait devient tout épais : c\'est un yaourt !',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Pour faire un yaourt, on ajoute au lait tiède de bonnes bactéries, choisies exprès.',
            },
            {
              id: 'deux',
              text: 'Ces bactéries mangent le sucre naturel du lait, comme toi tu manges un fruit.',
            },
            {
              id: 'trois',
              text: 'En le digérant, elles fabriquent une substance appelée acide.',
            },
            {
              id: 'quatre',
              text: 'Cet acide fait épaissir le lait petit à petit, jusqu\'à ce qu\'il devienne un yaourt.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'On ensemence du lait tiède avec des bactéries lactiques, choisies pour leurs propriétés.',
            },
            {
              id: 'deux',
              text: 'Ces bactéries se nourrissent du lactose, le sucre naturellement présent dans le lait.',
            },
            {
              id: 'trois',
              text: 'Cette fermentation produit de l\'acide lactique, qui fait baisser l\'acidité du lait.',
            },
            {
              id: 'quatre',
              text: 'Les protéines du lait se resserrent alors et forment un gel : c\'est la texture du yaourt. Toutes les bactéries ne sont pas des ennemies, certaines nous sont même précieuses.',
            },
          ],
        },
      },
    },
  },
};
