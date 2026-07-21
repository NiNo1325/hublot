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
  },
};
