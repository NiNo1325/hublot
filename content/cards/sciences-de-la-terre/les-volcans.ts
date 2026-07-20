import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : complète volontairement « le volcan de vinaigre », où
 * l'on précisait que la mousse n'a rien à voir avec un volcan réel. Ici on
 * explique ce qui se passe vraiment — de la roche fondue, pas une réaction
 * effervescente.
 */
export const card: ScienceCard = {
  id: 'les-volcans',
  domainId: 'sciences-de-la-terre',
  animationId: 'volcan',
  thumbnail: '🌋',
  content: {
    fr: {
      title: {
        '3-5': 'La montagne qui crache du feu',
        '6-8': "Comment marche un volcan",
        '9-12': 'Magma, pression et éruption',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'profondeur',
              text: 'Tout au fond, sous nos pieds, la Terre est si chaude que la roche devient toute molle, comme du miel brûlant.',
            },
            {
              id: 'remontee',
              text: "Cette roche liquide est plus légère que celle d'au-dessus. Alors elle monte, tout doucement.",
            },
            {
              id: 'pression',
              text: "Elle s'accumule dans une grande poche, et elle pousse de plus en plus fort pour sortir.",
            },
            {
              id: 'eruption',
              text: "Un jour, elle trouve un passage et jaillit dehors. On l'appelle alors la lave, et elle est brûlante.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'profondeur',
              text: "Sous la surface de la Terre, la chaleur est telle que la roche fond en partie. Cette roche fondue s'appelle le magma.",
            },
            {
              id: 'remontee',
              text: "Le magma est moins dense que la roche solide qui l'entoure, alors il remonte lentement, comme une bulle d'huile dans l'eau.",
            },
            {
              id: 'pression',
              text: "Il s'accumule dans une chambre magmatique. Des gaz s'y trouvent dissous, et la pression y devient énorme.",
            },
            {
              id: 'eruption',
              text: "Quand la roche au-dessus cède, les gaz se détendent brutalement et propulsent le magma dehors. Une fois sorti, le magma prend un autre nom : la lave. Ce n'est ni du feu ni un liquide qui brûle — c'est de la roche à plus de mille degrés.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'profondeur',
              text: "Le manteau terrestre est chaud mais essentiellement solide. La fusion partielle se produit surtout là où la pression chute ou l'eau s'infiltre : dorsales océaniques, zones de subduction, points chauds.",
            },
            {
              id: 'remontee',
              text: "Le magma formé est moins dense que l'encaissant : il s'élève par flottabilité à travers les fractures, parfois sur des dizaines de kilomètres.",
            },
            {
              id: 'pression',
              text: "Dans la chambre magmatique, les gaz — vapeur d'eau, dioxyde de carbone, dioxyde de soufre — restent dissous sous forte pression, comme le gaz d'une bouteille fermée.",
            },
            {
              id: 'eruption',
              text: "En remontant, la pression baisse et les gaz s'exsolvent en bulles. C'est leur expansion qui rend l'éruption explosive, exactement comme une bouteille secouée que l'on ouvre. Un magma visqueux retient ces bulles et explose ; un magma fluide les laisse s'échapper et donne des coulées, comme à Hawaï.",
            },
          ],
        },
      },
    },
  },
};
