import type { ScienceCard } from '@/lib/types';

/**
 * Le miel est très concentré en sucre et contient très peu d'eau libre : les
 * microbes ne peuvent pas s'y développer car le sucre capte l'eau dont ils
 * ont besoin pour vivre. Ce n'est pas le cas de tous les aliments : certains
 * se conservent très longtemps, d'autres non.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-miel-ne-se-perime-pas',
  domainId: 'la-cuisine',
  animationId: 'pourquoi-le-miel-ne-se-perime-pas',
  thumbnail: '🍯',
  content: {
    fr: {
      title: {
        '3-5': 'Pourquoi le miel dure toujours',
        '6-8': 'Pourquoi le miel ne se périme jamais',
        '9-12': 'Pourquoi le miel ne se périme jamais',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'un',
              text: 'Le miel est plein, plein de sucre et il n\'a presque pas d\'eau.',
            },
            {
              id: 'deux',
              text: 'Les petites bêtes qui abîment la nourriture ont besoin d\'eau.',
            },
            {
              id: 'trois',
              text: 'Le sucre du miel garde toute l\'eau pour lui.',
            },
            {
              id: 'quatre',
              text: 'Alors les petites bêtes ne peuvent pas vivre dans le miel.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'un',
              text: 'Le miel est presque entièrement fait de sucre, avec très peu d\'eau dedans.',
            },
            {
              id: 'deux',
              text: 'Or les microbes, ces tout petits êtres qui font pourrir les aliments, ont absolument besoin d\'eau pour vivre.',
            },
            {
              id: 'trois',
              text: 'Dans le miel, le sucre est si concentré qu\'il retient toute l\'eau disponible autour de lui.',
            },
            {
              id: 'quatre',
              text: 'Les microbes ne trouvent donc pas d\'eau à utiliser et ne peuvent pas se développer : le miel se conserve très, très longtemps.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'un',
              text: 'Le miel est une solution extrêmement concentrée en sucres, avec une très faible teneur en eau.',
            },
            {
              id: 'deux',
              text: 'Les micro-organismes ont besoin d\'eau disponible pour absorber leurs nutriments et se multiplier.',
            },
            {
              id: 'trois',
              text: 'Dans le miel, les molécules de sucre retiennent presque toute l\'eau par un phénomène osmotique, la rendant inutilisable pour eux.',
            },
            {
              id: 'quatre',
              text: 'Privés d\'eau, les microbes ne peuvent ni se nourrir ni se diviser : le miel bien conservé peut rester sain pendant des siècles, contrairement à la plupart des aliments.',
            },
          ],
        },
      },
    },
  },
};
