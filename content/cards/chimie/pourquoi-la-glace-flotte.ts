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
  },
};
