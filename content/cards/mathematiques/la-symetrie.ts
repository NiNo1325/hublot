import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : la symétrie de la nature est approximative, jamais
 * parfaite. Le dire évite de fabriquer une croyance fausse — et c'est ce qui
 * rend le sujet honnête : on distingue le modèle mathématique exact de son
 * approximation dans le monde réel.
 */
export const card: ScienceCard = {
  id: 'la-symetrie',
  domainId: 'mathematiques',
  animationId: 'symetrie',
  thumbnail: '🦋',
  content: {
    fr: {
      title: {
        '3-5': 'Les deux côtés pareils',
        '6-8': 'La symétrie',
        '9-12': 'Symétrie et transformations',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'miroir',
              text: 'Regarde un papillon : son aile gauche et son aile droite sont pareilles, comme dans un miroir.',
            },
            {
              id: 'pliage',
              text: "Si tu pliais le papillon au milieu, les deux ailes se poseraient exactement l'une sur l'autre.",
            },
            {
              id: 'nature',
              text: "Il y en a partout : les fleurs, les flocons de neige, les feuilles, et même ton visage.",
            },
            {
              id: 'presque',
              text: "Mais si tu regardes de tout près, les deux côtés ne sont jamais tout à fait identiques. Presque, mais pas exactement.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'miroir',
              text: "Une figure est symétrique quand une ligne la partage en deux moitiés qui se reflètent. Cette ligne s'appelle un axe de symétrie.",
            },
            {
              id: 'pliage',
              text: "Le test est simple : plie le dessin le long de cette ligne. Si les deux moitiés se superposent parfaitement, l'axe est bien un axe de symétrie.",
            },
            {
              id: 'nature',
              text: "Un carré possède quatre axes, un cercle en possède une infinité, et la lettre A n'en a qu'un seul. Un flocon de neige en a six, à cause de la façon dont ses molécules d'eau s'assemblent en gelant.",
            },
            {
              id: 'presque',
              text: "Dans la nature, la symétrie n'est jamais exacte : une aile est toujours un peu différente de l'autre. C'est une symétrie approchée. Seules les figures mathématiques sont parfaitement symétriques.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'miroir',
              text: "En mathématiques, une symétrie est une transformation qui laisse une figure inchangée. La symétrie axiale est la plus familière : chaque point est envoyé de l'autre côté d'un axe, à distance égale et perpendiculairement.",
            },
            {
              id: 'pliage',
              text: "Ce n'est pas la seule. La symétrie centrale fait tourner la figure d'un demi-tour autour d'un point. La symétrie de rotation la laisse identique après une rotation d'un angle donné : une étoile à cinq branches se retrouve inchangée tous les soixante-douze degrés.",
            },
            {
              id: 'nature',
              text: "Ces symétries structurent la matière. Un cristal de sel est cubique parce que ses ions s'empilent selon un motif régulier ; un flocon présente six branches parce que les molécules d'eau se lient à cent quatre degrés. La forme visible révèle une organisation invisible.",
            },
            {
              id: 'presque',
              text: "La distinction essentielle est celle entre le modèle et le réel. Un objet naturel n'est jamais rigoureusement symétrique : croissance, accidents et environnement introduisent des écarts. La symétrie mathématique est un idéal dont le monde s'approche, et mesurer cet écart est souvent plus instructif que la symétrie elle-même.",
            },
          ],
        },
      },
    },
  },
};
