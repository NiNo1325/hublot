import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : tous les schémas de manuel mentent sur l'échelle. Ils
 * montrent des planètes serrées et alignées, alors que le système solaire est
 * essentiellement du vide — au point que les huit planètes tiendraient dans
 * l'intervalle Terre-Lune.
 */
export const card: ScienceCard = {
  id: 'les-planetes',
  domainId: 'astronomie',
  animationId: 'planetes',
  thumbnail: '🪐',
  content: {
    fr: {
      title: {
        '3-5': 'Les planètes du Soleil',
        '6-8': 'Les planètes, et le vide entre elles',
        '9-12': 'Le système solaire à sa vraie échelle',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'famille',
              text: 'Autour du Soleil tournent huit planètes. La Terre est l’une d’elles.',
            },
            {
              id: 'distances',
              text: 'Sur les dessins, elles ont l’air toutes proches. En vrai, elles sont très, très loin les unes des autres.',
            },
            {
              id: 'vide',
              text: 'Entre elles, il n’y a rien du tout. Du vide, pendant très, très longtemps.',
            },
            {
              id: 'rocheuses-gazeuses',
              text: 'Certaines sont dures comme un caillou. D’autres sont faites de gaz : impossible de marcher dessus.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'famille',
              text: 'Huit planètes tournent autour du Soleil. Les dessins des livres les montrent bien rangées côte à côte — et c’est justement ce qui trompe.',
            },
            {
              id: 'distances',
              text: 'Si le Soleil était un ballon de football, la Terre serait une bille de deux millimètres à vingt-quatre mètres de là, et Neptune une autre bille à sept cents mètres.',
            },
            {
              id: 'vide',
              text: 'Entre ces billes, il n’y a presque rien. Le système solaire est surtout du vide — et les huit planètes ne se rangent quasiment jamais en ligne, contrairement aux images.',
            },
            {
              id: 'rocheuses-gazeuses',
              text: 'Les quatre premières sont petites et rocheuses. Les quatre suivantes sont géantes et gazeuses : en descendant dans Jupiter, on ne rencontrerait jamais de sol, seulement un gaz de plus en plus épais.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'famille',
              text: 'Huit planètes — quatre telluriques, quatre géantes — auxquelles s’ajoutent les planètes naines, dont Pluton fait partie depuis 2006. Les schémas de manuel sont toujours faux sur un point au moins : l’échelle.',
            },
            {
              id: 'distances',
              text: 'À l’échelle où le Soleil ferait vingt-deux centimètres, la Terre serait une bille de deux millimètres placée à vingt-quatre mètres, et Neptune à sept cent dix mètres. Aucune page ne peut respecter les tailles et les distances en même temps : il faut choisir, et on choisit toujours de mentir sur les distances.',
            },
            {
              id: 'vide',
              text: 'La conséquence est spectaculaire : mises bout à bout, les sept autres planètes tiendraient dans l’intervalle qui sépare la Terre de la Lune. Tout le reste est vide. Un alignement rigoureux des huit planètes est d’ailleurs si improbable qu’il ne se produit pas à l’échelle d’une civilisation.',
            },
            {
              id: 'rocheuses-gazeuses',
              text: 'Les telluriques possèdent une surface solide, les géantes n’en ont pas : en descendant dans Jupiter, le gaz se densifie progressivement jusqu’à devenir liquide, sans qu’on franchisse jamais de sol. Jupiter pèse à elle seule plus du double de toutes les autres planètes réunies.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The Sun’s planets',
        '6-8': 'The planets, and the emptiness between them',
        '9-12': 'The solar system at its true scale',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'famille',
              text: 'Eight planets go round the Sun. The Earth is one of them.',
            },
            {
              id: 'distances',
              text: 'In drawings, they look very close together. Really, they are very, very far from one another.',
            },
            {
              id: 'vide',
              text: 'Between them there is nothing at all. Empty space, for a very, very long way.',
            },
            {
              id: 'rocheuses-gazeuses',
              text: 'Some are hard like a stone. Others are made of gas: you could never walk on them.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'famille',
              text: 'Eight planets go round the Sun. Book drawings show them lined up neatly side by side — and that is exactly what misleads.',
            },
            {
              id: 'distances',
              text: 'If the Sun were a football, the Earth would be a two-millimetre bead twenty-four metres away, and Neptune another bead seven hundred metres away.',
            },
            {
              id: 'vide',
              text: 'Between those beads there is almost nothing. The solar system is mostly empty — and the eight planets hardly ever line up, whatever the pictures show.',
            },
            {
              id: 'rocheuses-gazeuses',
              text: 'The first four are small and rocky. The next four are giant and gaseous: going down into Jupiter, you would never meet any ground, only gas that gets thicker and thicker.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'famille',
              text: 'Eight planets — four terrestrial, four giant — plus the dwarf planets, which Pluto has belonged to since 2006. Textbook diagrams are always wrong on at least one point: the scale.',
            },
            {
              id: 'distances',
              text: 'On a scale where the Sun would be twenty-two centimetres across, the Earth would be a two-millimetre bead placed twenty-four metres away, and Neptune would be seven hundred and ten metres away. No page can respect the sizes and the distances at the same time: you have to choose, and the choice is always to lie about the distances.',
            },
            {
              id: 'vide',
              text: 'The consequence is spectacular: placed end to end, the seven other planets would fit into the gap between the Earth and the Moon. All the rest is empty. A strict alignment of the eight planets is in fact so improbable that it does not occur within the lifetime of a civilisation.',
            },
            {
              id: 'rocheuses-gazeuses',
              text: 'The terrestrial planets have a solid surface, the giants have none: going down into Jupiter, the gas grows steadily denser until it becomes liquid, without your ever crossing any ground. Jupiter alone weighs more than twice all the other planets put together.',
            },
          ],
        },
      },
    },
  },
};
