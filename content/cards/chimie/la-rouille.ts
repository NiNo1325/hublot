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
    en: {
      title: {
        '3-5': 'Iron that goes rusty',
        '6-8': 'Why iron rusts',
        '9-12': 'The slow oxidation of iron',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'observer',
              text: 'An old nail left outside turns orange and all rough. We say it is rusting.',
            },
            {
              id: 'eau-air',
              text: 'To rust, iron needs two things at the same time: water and air.',
            },
            {
              id: 'transformation',
              text: 'Rust is not dirt sitting on top. It is the iron itself changing, very slowly.',
            },
            {
              id: 'protection',
              text: 'To stop it, we put on paint: it keeps the water and the air away from the iron.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'observer',
              text: 'Rust is that orange, crumbly layer that covers iron left in damp air.',
            },
            {
              id: 'eau-air',
              text: 'People often think that water is what makes iron rust. That is only half the story: you need water and oxygen from the air. An iron object in water with no air does not rust.',
            },
            {
              id: 'transformation',
              text: 'Rust is not laid on top of the iron: the iron joins up with oxygen and becomes a new material. It is a kind of burning, but so slow that it makes no flame and no heat you can feel.',
            },
            {
              id: 'protection',
              text: 'Because rust flakes away, it leaves the iron underneath free to rust in turn, until the whole thing is eaten through. To protect it, we seal it off: paint, oil, or a thin coat of another metal.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'observer',
              text: 'Rust is the product of the corrosion of iron: a hydrated iron oxide, orange and porous.',
            },
            {
              id: 'eau-air',
              text: 'It requires water and oxygen to be present at the same time. The experiment proves it: a nail in water that has been boiled and then sealed from the air under a layer of oil does not rust; nor does a nail in dry air. You need both.',
            },
            {
              id: 'transformation',
              text: 'It is a redox reaction: the iron gives up electrons to oxygen, with water acting as the go-between. The metal is chemically converted into an oxide — the same kind of reaction as combustion, but spread over months.',
            },
            {
              id: 'protection',
              text: 'Unlike aluminium, whose oxide forms a protective film that clings to the surface, rust is crumbly and drops off, exposing fresh iron. So we fight it with barriers — paint, galvanising with zinc — or with alloys such as stainless steel, which coat themselves in an invisible protective layer.',
            },
          ],
        },
      },
    },
  },
};
