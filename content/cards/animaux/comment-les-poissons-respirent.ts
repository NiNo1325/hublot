import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « il n'y a pas d'air dans l'eau, le poisson respire
 * l'eau ». En réalité, de l'oxygène est dissous dans l'eau (le même gaz que dans
 * l'air), et les branchies le captent au passage de l'eau. Le poisson ne respire
 * pas l'eau : il en extrait l'oxygène.
 */
export const card: ScienceCard = {
  id: 'comment-les-poissons-respirent',
  domainId: 'animaux',
  animationId: 'branchies',
  thumbnail: '🐟',
  content: {
    fr: {
      title: {
        '3-5': 'Le poisson respire',
        '6-8': 'Comment les poissons respirent',
        '9-12': 'Comment les poissons respirent',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'oxygene-dans-leau',
              text: "Dans l'eau, il y a un peu d'air caché, mélangé partout. On ne le voit pas.",
            },
            {
              id: 'avale',
              text: 'Le poisson ouvre la bouche et fait entrer de l’eau.',
            },
            {
              id: 'branchies',
              text: "L'eau passe sur ses branchies, sur les côtés de sa tête. Elles attrapent l'air caché dans l'eau.",
            },
            {
              id: 'rejet',
              text: "Puis l'eau ressort par les petites fentes. Le poisson a pris ce qu'il lui fallait pour respirer.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'oxygene-dans-leau',
              text: "On croit qu'il n'y a pas d'air dans l'eau. Faux : de l'oxygène, le gaz qu'on respire, y est mélangé, en toutes petites quantités.",
            },
            {
              id: 'avale',
              text: 'Le poisson avale de l’eau par la bouche, en continu.',
            },
            {
              id: 'branchies',
              text: "Cette eau traverse ses branchies, des organes en fins filaments très irrigués de sang. Là, l'oxygène passe de l'eau vers le sang du poisson.",
            },
            {
              id: 'rejet',
              text: "L'eau, débarrassée de son oxygène, ressort par les fentes appelées ouïes. Le poisson ne respire donc pas l'eau : il en retire l'oxygène.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'oxygene-dans-leau',
              text: "L'eau contient de l'oxygène dissous : les mêmes molécules que dans l'air, mais glissées entre les molécules d'eau. Il y en a environ trente fois moins que dans l'air, d'où un système très efficace pour le capter.",
            },
            {
              id: 'avale',
              text: 'Le poisson fait circuler l’eau en continu : il l’avale par la bouche et la pousse vers ses branchies.',
            },
            {
              id: 'branchies',
              text: "Les branchies sont faites de fins filaments remplis de minuscules vaisseaux sanguins. L'eau et le sang y circulent en sens inverse, ce qui maximise le passage de l'oxygène de l'eau vers le sang.",
            },
            {
              id: 'rejet',
              text: "L'eau appauvrie ressort par les ouïes. Le poisson n'« inspire » pas l'eau comme nous l'air : il en extrait l'oxygène dissous. C'est aussi pourquoi, sorti de l'eau, il suffoque : ses branchies s'effondrent et ne captent plus rien, alors même que l'air est plein d'oxygène.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The fish breathes',
        '6-8': 'How fish breathe',
        '9-12': 'How fish breathe',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'oxygene-dans-leau',
              text: 'In water, there is a little hidden air, mixed in everywhere. We cannot see it.',
            },
            {
              id: 'avale',
              text: 'The fish opens its mouth and lets water in.',
            },
            {
              id: 'branchies',
              text: 'The water flows over its gills, on the sides of its head. They catch the air hidden in the water.',
            },
            {
              id: 'rejet',
              text: 'Then the water comes back out through the little slits. The fish has taken what it needed to breathe.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'oxygene-dans-leau',
              text: 'People think there is no air in water. Wrong: oxygen, the gas we breathe, is mixed into it, in very small amounts.',
            },
            {
              id: 'avale',
              text: 'The fish swallows water through its mouth, without ever stopping.',
            },
            {
              id: 'branchies',
              text: 'That water crosses its gills, organs made of fine filaments full of blood. There, the oxygen passes from the water into the fish’s blood.',
            },
            {
              id: 'rejet',
              text: 'The water, now stripped of its oxygen, leaves through the slits called gill openings. So a fish does not breathe water: it takes the oxygen out of it.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'oxygene-dans-leau',
              text: 'Water contains dissolved oxygen: the same molecules as in the air, but slipped in between the water molecules. There is about thirty times less of it than in air, hence a very efficient system for capturing it.',
            },
            {
              id: 'avale',
              text: 'The fish keeps water flowing continuously: it swallows it through its mouth and drives it over its gills.',
            },
            {
              id: 'branchies',
              text: 'The gills are made of fine filaments packed with tiny blood vessels. Water and blood flow through them in opposite directions, which maximises the transfer of oxygen from the water into the blood.',
            },
            {
              id: 'rejet',
              text: 'The depleted water leaves through the gill openings. A fish does not “inhale” water the way we inhale air: it extracts the dissolved oxygen from it. That is also why it suffocates out of water: its gills collapse and capture nothing at all, even though the air is full of oxygen.',
            },
          ],
        },
      },
    },
  },
};
