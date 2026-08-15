import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le froid n'existe pas comme substance qui « entrerait ».
 * Il n'y a que de la chaleur, qui se déplace toujours du chaud vers le froid.
 * Un manteau ne « donne » pas de chaleur : il ralentit la fuite de la tienne.
 */
export const card: ScienceCard = {
  id: 'le-chaud-et-le-froid',
  domainId: 'physique',
  animationId: 'chaleur',
  thumbnail: '🌡️',
  content: {
    fr: {
      title: {
        '3-5': 'Le chaud et le froid',
        '6-8': 'Comment voyage la chaleur',
        '9-12': 'Chaleur, transfert et isolation',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'sens',
              text: 'La chaleur va toujours du chaud vers le froid. Un chocolat chaud, posé sur la table, refroidit petit à petit.',
            },
            {
              id: 'pas-de-froid',
              text: 'Le froid, lui, n’entre pas dans le chocolat. En vérité, c’est la chaleur du chocolat qui s’en va.',
            },
            {
              id: 'manteau',
              text: 'Ton manteau ne te donne pas de chaleur. Il garde la tienne près de toi, pour qu’elle ne parte pas.',
            },
            {
              id: 'equilibre',
              text: 'Si tu attends très longtemps, le chocolat devient aussi froid que la pièce. Alors il arrête de changer.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'sens',
              text: 'La chaleur se déplace toujours dans le même sens : de ce qui est chaud vers ce qui est froid. Jamais l’inverse tout seul.',
            },
            {
              id: 'pas-de-froid',
              text: 'On dit « le froid entre », mais le froid n’est pas une chose. C’est juste l’absence de chaleur. Quand tu ouvres la fenêtre en hiver, ce n’est pas le froid qui rentre, c’est ta chaleur qui sort.',
            },
            {
              id: 'manteau',
              text: 'Un manteau ne fabrique aucune chaleur : il emprisonne de l’air, mauvais conducteur, et ralentit la fuite de la tienne. C’est pour cela qu’une couverture ne réchaufferait pas un glaçon — elle l’empêcherait seulement de fondre vite.',
            },
            {
              id: 'equilibre',
              text: 'La chaleur circule jusqu’à ce que tout soit à la même température. Un glaçon dans un verre d’eau tiède : la chaleur de l’eau passe dans le glaçon, qui fond, jusqu’à ce que tout soit également frais.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'sens',
              text: 'La chaleur est un transfert d’énergie lié à l’agitation des particules : plus elles bougent, plus c’est chaud. Elle se transmet spontanément du corps chaud vers le corps froid, jusqu’à l’équilibre thermique. C’est un principe fondamental de la physique.',
            },
            {
              id: 'pas-de-froid',
              text: 'Le froid n’est pas une entité : c’est un manque d’agitation, donc un manque d’énergie. Parler de « froid qui entre » inverse la réalité — seule la chaleur se déplace, et toujours vers le moins chaud.',
            },
            {
              id: 'manteau',
              text: 'Isoler, c’est freiner ce transfert. La chaleur voyage de trois façons : par contact de proche en proche, par mouvement d’un fluide, et par rayonnement. Les bons isolants — laine, plumes, double vitrage — emprisonnent de l’air immobile, qui conduit très mal la chaleur.',
            },
            {
              id: 'equilibre',
              text: 'À l’équilibre, les échanges se compensent : il n’y a plus de transfert net. C’est pourquoi une bouteille isotherme garde le chaud comme le froid — elle ne fait rien d’autre que ralentir la marche vers cet équilibre, dans les deux sens.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'Hot and cold',
        '6-8': 'How heat travels',
        '9-12': 'Heat, transfer and insulation',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'sens',
              text: 'Heat always goes from hot to cold. A hot chocolate left on the table cools down bit by bit.',
            },
            {
              id: 'pas-de-froid',
              text: 'The cold does not go into the chocolate. Really, it is the chocolate’s heat that leaves.',
            },
            {
              id: 'manteau',
              text: 'Your coat does not give you heat. It keeps yours close to you, so it does not go away.',
            },
            {
              id: 'equilibre',
              text: 'If you wait a very long time, the chocolate gets as cold as the room. Then it stops changing.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'sens',
              text: 'Heat always moves the same way: from what is hot towards what is cold. Never the other way round on its own.',
            },
            {
              id: 'pas-de-froid',
              text: 'We say “the cold is getting in”, but cold is not a thing. It is simply the absence of heat. When you open the window in winter, it is not the cold coming in, it is your heat going out.',
            },
            {
              id: 'manteau',
              text: 'A coat makes no heat at all: it traps air, which is a poor conductor, and slows down the escape of yours. That is why a blanket would never warm up an ice cube — it would only stop it melting quickly.',
            },
            {
              id: 'equilibre',
              text: 'Heat keeps moving until everything is at the same temperature. Drop an ice cube into a glass of lukewarm water: the water’s heat passes into the cube, which melts, until everything is equally cool.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'sens',
              text: 'Heat is a transfer of energy tied to the agitation of particles: the more they move, the hotter it is. It passes spontaneously from the hot body to the cold one, until they reach thermal equilibrium. This is a fundamental principle of physics.',
            },
            {
              id: 'pas-de-froid',
              text: 'Cold is not an entity: it is a lack of agitation, and therefore a lack of energy. Talking about “cold getting in” turns reality on its head — only heat moves, and always towards whatever is less hot.',
            },
            {
              id: 'manteau',
              text: 'Insulating means slowing that transfer down. Heat travels in three ways: by contact from one particle to the next, by the movement of a fluid, and by radiation. Good insulators — wool, feathers, double glazing — trap still air, which conducts heat very badly.',
            },
            {
              id: 'equilibre',
              text: 'At equilibrium the exchanges cancel out: there is no net transfer left. That is why a vacuum flask keeps things hot just as well as cold — all it does is slow the journey towards that equilibrium, in both directions.',
            },
          ],
        },
      },
    },
  },
};
