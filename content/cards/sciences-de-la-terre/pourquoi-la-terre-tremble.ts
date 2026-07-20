import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : le sol ne « s'ouvre » pas en une faille béante qui
 * avalerait les gens — image de cinéma, pas de sismologie. Ce sont les
 * bâtiments qui tuent, pas le sol, et c'est justement ce qui rend la
 * construction parasismique décisive.
 */
export const card: ScienceCard = {
  id: 'pourquoi-la-terre-tremble',
  domainId: 'sciences-de-la-terre',
  animationId: 'seisme',
  thumbnail: '🪨',
  content: {
    fr: {
      title: {
        '3-5': 'Quand le sol bouge',
        '6-8': 'Pourquoi la Terre tremble',
        '9-12': 'Tectonique et séismes',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'plaques',
              text: "Le sol n'est pas d'un seul morceau. Il est fait de grands morceaux posés les uns à côté des autres, comme un puzzle géant.",
            },
            {
              id: 'frottement',
              text: "Ces morceaux glissent tout doucement, mais parfois ils se coincent l'un contre l'autre et n'avancent plus.",
            },
            {
              id: 'rupture',
              text: "Ils poussent, ils poussent, et d'un seul coup ils se décoincent. Tout tremble alors très fort.",
            },
            {
              id: 'ondes',
              text: "Le tremblement voyage dans le sol, comme des vagues dans l'eau quand tu jettes un caillou.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'plaques',
              text: "La surface de la Terre est découpée en grandes plaques rigides qui flottent sur des roches plus chaudes et plus molles.",
            },
            {
              id: 'frottement',
              text: "Ces plaques se déplacent de quelques centimètres par an, à peu près à la vitesse où poussent tes ongles. Là où elles se frottent, elles se bloquent et la roche se déforme comme un ressort qu'on comprime.",
            },
            {
              id: 'rupture',
              text: "Quand la roche ne peut plus se déformer, elle casse d'un coup et les plaques se déplacent brutalement. Toute l'énergie accumulée pendant des années se libère en quelques secondes.",
            },
            {
              id: 'ondes',
              text: "Cette énergie s'éloigne sous forme d'ondes qui font vibrer le sol. Contrairement aux films, la terre ne s'ouvre pas pour engloutir les gens : ce sont les bâtiments qui s'effondrent, et c'est pour cela qu'on apprend à les construire autrement.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'plaques',
              text: "La lithosphère est fragmentée en une douzaine de plaques principales, mues par les mouvements de convection du manteau sous-jacent.",
            },
            {
              id: 'frottement',
              text: "Aux limites de plaques, le frottement empêche le glissement régulier. Les roches accumulent alors une déformation élastique, exactement comme un ressort qu'on charge progressivement.",
            },
            {
              id: 'rupture',
              text: "Lorsque la contrainte dépasse la résistance de la roche, la rupture se propage le long de la faille. Le point de départ en profondeur est le foyer, sa projection en surface l'épicentre. L'échelle de magnitude est logarithmique : un degré de plus correspond à environ trente fois plus d'énergie libérée.",
            },
            {
              id: 'ondes',
              text: "Deux familles d'ondes se propagent. Les ondes P, de compression, sont les plus rapides et arrivent en premier ; les ondes S, de cisaillement, suivent et sont plus destructrices. Cet écart de vitesse permet à la fois de localiser le foyer et de donner quelques secondes d'alerte avant l'arrivée des secousses les plus fortes.",
            },
          ],
        },
      },
    },
  },
};
