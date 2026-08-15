import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : un glaçon qui flotte paraît banal et constitue en fait
 * une anomalie — presque tous les corps purs sont plus denses à l'état solide.
 * L'explication est structurelle, et sa conséquence écologique est majeure :
 * sans elle, les lacs gèleraient depuis le fond.
 */
export const card: ScienceCard = {
  id: 'pourquoi-la-glace-flotte',
  domainId: 'chimie',
  animationId: 'glace-flotte',
  thumbnail: '🥶',
  content: {
    fr: {
      title: {
        '3-5': 'Le glaçon qui reste en haut',
        '6-8': 'Pourquoi la glace flotte',
        '9-12': 'L’anomalie dilatométrique de l’eau',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'anomalie',
              text: 'Un glaçon flotte dans ton verre. Ça paraît tout normal — et pourtant c’est très bizarre.',
            },
            {
              id: 'liaisons',
              text: 'Presque tout devient plus lourd en durcissant. L’eau fait le contraire : en gelant, elle prend plus de place.',
            },
            {
              id: 'quatre-degres',
              text: 'Alors la glace est plus légère que l’eau, et elle reste tout en haut.',
            },
            {
              id: 'lacs',
              text: 'Et c’est une chance : les lacs gèlent seulement sur le dessus, et les poissons vivent dessous.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'anomalie',
              text: 'Un glaçon flotte : c’est si banal qu’on n’y pense jamais. C’est pourtant une anomalie — pour presque toutes les substances, la forme solide est plus dense que la liquide, et coule.',
            },
            {
              id: 'liaisons',
              text: 'La raison tient à la forme des molécules d’eau. En gelant, elles s’accrochent les unes aux autres selon un motif régulier à six branches, qui laisse des trous. La glace occupe donc environ neuf pour cent de volume de plus que l’eau dont elle vient.',
            },
            {
              id: 'quatre-degres',
              text: 'Étrangeté supplémentaire : l’eau est la plus dense non pas à zéro degré, mais à quatre. En dessous, elle recommence à se dilater. C’est pour cela qu’une bouteille pleine oubliée au congélateur finit par éclater.',
            },
            {
              id: 'lacs',
              text: 'Et c’est vital. Un lac gèle en surface, et cette couche de glace isole l’eau du dessous, qui reste liquide autour de quatre degrés. Si la glace coulait, les lacs gèleraient du fond vers le haut et tout ce qui y vit mourrait chaque hiver.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'anomalie',
              text: 'La glace a une masse volumique d’environ 917 kilogrammes par mètre cube, contre 1000 pour l’eau liquide : elle flotte. C’est une anomalie, la quasi-totalité des corps purs étant plus denses à l’état solide.',
            },
            {
              id: 'liaisons',
              text: 'L’explication est structurelle. La molécule d’eau est coudée et polaire, et forme des liaisons hydrogène orientées. Dans la glace ordinaire, chaque molécule s’en lie à quatre selon une géométrie tétraédrique, ce qui engendre un réseau hexagonal ouvert — moins compact que l’arrangement désordonné du liquide.',
            },
            {
              id: 'quatre-degres',
              text: 'D’où aussi le maximum de densité à 3,98 degrés : entre zéro et quatre, la destruction progressive des agrégats ordonnés l’emporte sur la contraction thermique. La dilatation à la solidification, de l’ordre de neuf pour cent, développe des pressions considérables — c’est le mécanisme de la gélifraction, qui fissure les roches.',
            },
            {
              id: 'lacs',
              text: 'La conséquence écologique est majeure. La glace flottante isole thermiquement la colonne d’eau, qui se stratifie avec ses quatre degrés au fond. Sans cette anomalie, lacs et océans des hautes latitudes gèleraient depuis le fond et ne dégèleraient jamais complètement : la vie aquatique telle que nous la connaissons n’existerait pas.',
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The ice cube that stays on top',
        '6-8': 'Why ice floats',
        '9-12': 'The expansion anomaly of water',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'anomalie',
              text: 'An ice cube floats in your glass. It looks completely normal — and yet it is very odd.',
            },
            {
              id: 'liaisons',
              text: 'Almost everything gets heavier when it goes hard. Water does the opposite: when it freezes, it takes up more room.',
            },
            {
              id: 'quatre-degres',
              text: 'So the ice is lighter than the water, and it stays right at the top.',
            },
            {
              id: 'lacs',
              text: 'And that is lucky: lakes freeze only on top, and the fish live underneath.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'anomalie',
              text: 'An ice cube floats: it is so ordinary that we never give it a thought. Yet it is an anomaly — for almost every substance, the solid form is denser than the liquid one, and sinks.',
            },
            {
              id: 'liaisons',
              text: 'The reason lies in the shape of water molecules. As they freeze, they hook onto one another in a regular six-branched pattern that leaves gaps. So ice takes up about nine per cent more room than the water it came from.',
            },
            {
              id: 'quatre-degres',
              text: 'One more oddity: water is at its densest not at zero degrees, but at four. Below that, it starts expanding again. That is why a full bottle forgotten in the freezer ends up bursting.',
            },
            {
              id: 'lacs',
              text: 'And it is vital. A lake freezes at the surface, and this layer of ice insulates the water below, which stays liquid at around four degrees. If ice sank, lakes would freeze from the bottom upwards and everything living in them would die every winter.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'anomalie',
              text: 'Ice has a density of about 917 kilograms per cubic metre, against 1000 for liquid water: it floats. This is an anomaly, since almost every pure substance is denser as a solid.',
            },
            {
              id: 'liaisons',
              text: 'The explanation is structural. The water molecule is bent and polar, and forms hydrogen bonds that point in definite directions. In ordinary ice, each molecule bonds to four others in a tetrahedral geometry, which produces an open hexagonal network — less compact than the disordered arrangement of the liquid.',
            },
            {
              id: 'quatre-degres',
              text: 'Hence too the density maximum at 3.98 degrees: between zero and four, the gradual break-up of the ordered clusters outweighs thermal contraction. The expansion on freezing, of the order of nine per cent, develops considerable pressures — this is the mechanism of frost shattering, which cracks rocks apart.',
            },
            {
              id: 'lacs',
              text: 'The ecological consequence is enormous. Floating ice insulates the water column, which settles into layers with its four degrees at the bottom. Without this anomaly, lakes and oceans at high latitudes would freeze from the bottom and never thaw completely: aquatic life as we know it would not exist.',
            },
          ],
        },
      },
    },
  },
};
