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
    en: {
      title: {
        '3-5': 'The mountain that spits fire',
        '6-8': 'How a volcano works',
        '9-12': 'Magma, pressure and eruption',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'profondeur',
              text: 'Deep down, under our feet, the Earth is so hot that the rock goes all soft, like burning honey.',
            },
            {
              id: 'remontee',
              text: 'This runny rock is lighter than the rock above it. So it climbs up, very slowly.',
            },
            {
              id: 'pression',
              text: 'It gathers in a big pocket, and it pushes harder and harder to get out.',
            },
            {
              id: 'eruption',
              text: 'One day it finds a way through and bursts out. Then we call it lava, and it is burning hot.',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'profondeur',
              text: 'Beneath the surface of the Earth, the heat is so great that the rock partly melts. This molten rock is called magma.',
            },
            {
              id: 'remontee',
              text: 'Magma is less dense than the solid rock around it, so it rises slowly, like a bubble of oil in water.',
            },
            {
              id: 'pression',
              text: 'It gathers in a magma chamber. Gases are dissolved in it, and the pressure there becomes enormous.',
            },
            {
              id: 'eruption',
              text: 'When the rock above gives way, the gases expand all at once and drive the magma out. Once outside, magma takes another name: lava. It is neither fire nor a liquid that burns — it is rock at over a thousand degrees.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'profondeur',
              text: 'The Earth’s mantle is hot but essentially solid. Partial melting happens mainly where the pressure drops or where water seeps in: mid-ocean ridges, subduction zones, hotspots.',
            },
            {
              id: 'remontee',
              text: 'The magma that forms is less dense than the surrounding rock: buoyancy carries it up through fractures, sometimes over tens of kilometres.',
            },
            {
              id: 'pression',
              text: 'In the magma chamber, the gases — water vapour, carbon dioxide, sulphur dioxide — stay dissolved under high pressure, like the gas in a sealed bottle.',
            },
            {
              id: 'eruption',
              text: 'As it rises, the pressure falls and the gases come out of solution as bubbles. Their expansion is what makes an eruption explosive, exactly like opening a bottle that has been shaken. A viscous magma holds those bubbles in and explodes; a runny magma lets them escape and gives lava flows, as in Hawaii.',
            },
          ],
        },
      },
    },
  },
};
