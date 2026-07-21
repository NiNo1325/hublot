import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la rouille n'est pas due à l'eau seule. Il faut de l'eau
 * ET de l'oxygène : un objet en fer plongé dans une eau privée d'air ne rouille
 * pas. Et la rouille n'est pas de la saleté déposée, mais du fer transformé —
 * une combustion très lente.
 */
export const card: ScienceCard = {
  id: 'la-rouille',
  domainId: 'chimie',
  animationId: 'rouille',
  thumbnail: '🔩',
  content: {
    fr: {
      title: {
        '3-5': 'Le fer qui rouille',
        '6-8': 'Pourquoi le fer rouille',
        '9-12': 'Oxydation lente du fer',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'observer',
              text: 'Un vieux clou laissé dehors devient orange et tout rugueux. On dit qu’il rouille.',
            },
            {
              id: 'eau-air',
              text: 'Pour rouiller, le fer a besoin de deux choses en même temps : de l’eau et de l’air.',
            },
            {
              id: 'transformation',
              text: 'La rouille n’est pas de la saleté posée dessus. C’est le fer lui-même qui se transforme, tout doucement.',
            },
            {
              id: 'protection',
              text: 'Pour l’empêcher, on met de la peinture : elle sépare le fer de l’eau et de l’air.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'observer',
              text: 'La rouille est cette couche orange et friable qui recouvre le fer resté à l’air humide.',
            },
            {
              id: 'eau-air',
              text: 'On pense souvent que c’est l’eau qui fait rouiller. C’est incomplet : il faut de l’eau et de l’oxygène de l’air. Un objet en fer plongé dans une eau sans air ne rouille pas.',
            },
            {
              id: 'transformation',
              text: 'La rouille n’est pas déposée sur le fer : c’est le fer qui se combine à l’oxygène et devient une matière nouvelle. C’est une sorte de combustion, mais si lente qu’elle ne fait ni flamme ni chaleur visible.',
            },
            {
              id: 'protection',
              text: 'Comme la rouille s’effrite, elle laisse le fer en dessous rouiller à son tour, jusqu’à le ronger entièrement. Pour protéger, on l’isole : peinture, huile, ou une fine couche d’un autre métal.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'observer',
              text: 'La rouille est le produit de la corrosion du fer : un oxyde de fer hydraté, orange et poreux.',
            },
            {
              id: 'eau-air',
              text: 'Elle exige la présence simultanée d’eau et de dioxygène. L’expérience le prouve : un clou dans de l’eau bouillie puis privée d’air, sous une couche d’huile, ne rouille pas ; un clou à l’air sec non plus. Il faut les deux.',
            },
            {
              id: 'transformation',
              text: 'C’est une réaction d’oxydoréduction : le fer cède des électrons à l’oxygène, en présence d’eau qui sert d’intermédiaire. Le métal se transforme chimiquement en oxyde — le même type de réaction que la combustion, mais étalée sur des mois.',
            },
            {
              id: 'protection',
              text: 'Contrairement à l’aluminium, dont l’oxyde forme une pellicule protectrice et adhérente, la rouille est friable et se détache, exposant le fer neuf. On lutte donc par des barrières — peinture, galvanisation au zinc — ou par des alliages comme l’acier inoxydable, qui se recouvrent d’une couche protectrice invisible.',
            },
          ],
        },
      },
    },
  },
};
