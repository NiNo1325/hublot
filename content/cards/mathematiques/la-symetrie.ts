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
    en: {
      title: {
        '3-5': 'Both sides the same',
        '6-8': 'Symmetry',
        '9-12': 'Symmetry and transformations',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'miroir',
              text: 'Look at a butterfly: its left wing and its right wing are the same, like in a mirror.',
            },
            {
              id: 'pliage',
              text: 'If you folded the butterfly down the middle, the two wings would land exactly on top of each other.',
            },
            {
              id: 'nature',
              text: 'There are some everywhere: flowers, snowflakes, leaves, and even your face.',
            },
            {
              id: 'presque',
              text: 'But if you look very closely, the two sides are never quite the same. Almost, but not exactly.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'miroir',
              text: 'A shape is symmetrical when a line splits it into two halves that mirror each other. That line is called an axis of symmetry.',
            },
            {
              id: 'pliage',
              text: 'The test is simple: fold the drawing along that line. If the two halves land perfectly on top of each other, the line really is an axis of symmetry.',
            },
            {
              id: 'nature',
              text: 'A square has four axes, a circle has an infinite number, and the letter A has only one. A snowflake has six, because of the way its water molecules lock together as they freeze.',
            },
            {
              id: 'presque',
              text: 'In nature, symmetry is never exact: one wing is always a little different from the other. That is approximate symmetry. Only mathematical shapes are perfectly symmetrical.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'miroir',
              text: 'In mathematics, a symmetry is a transformation that leaves a shape unchanged. Reflection symmetry is the most familiar: every point is sent to the other side of an axis, at an equal distance and at right angles to it.',
            },
            {
              id: 'pliage',
              text: 'It is not the only one. Point symmetry turns the shape a half-turn around a point. Rotational symmetry leaves it identical after a turn of a given angle: a five-pointed star is unchanged every seventy-two degrees.',
            },
            {
              id: 'nature',
              text: 'These symmetries shape matter itself. A salt crystal is cubic because its ions stack in a regular pattern; a snowflake has six branches because water molecules bond at one hundred and four degrees. The visible form reveals an invisible organisation.',
            },
            {
              id: 'presque',
              text: 'The essential distinction is between the model and the real world. A natural object is never rigorously symmetrical: growth, accidents and surroundings introduce departures. Mathematical symmetry is an ideal that the world approaches, and measuring that gap is often more instructive than the symmetry itself.',
            },
          ],
        },
      },
    },
  },
};
