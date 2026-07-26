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
  },
};
