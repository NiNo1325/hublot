import type { ScienceCard } from '@/lib/types';

/**
 * Point de vigilance : « la vapeur est le nuage blanc au-dessus de la
 * casserole » est faux — ce nuage est déjà de l'eau recondensée en
 * gouttelettes. La vapeur, elle, est invisible. C'est une nuance simple à
 * montrer et qui évite une confusion durable.
 */
export const card: ScienceCard = {
  id: 'les-etats-de-la-matiere',
  domainId: 'chimie',
  animationId: 'etats-matiere',
  thumbnail: '🧊',
  content: {
    fr: {
      title: {
        '3-5': 'Dur, liquide ou envolé',
        '6-8': 'Les trois états de la matière',
        '9-12': 'États de la matière et changements',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'solide',
              text: "Un glaçon est dur. Tu peux le tenir dans ta main, il garde toujours la même forme.",
            },
            {
              id: 'liquide',
              text: "Si tu le laisses au chaud, il fond et devient de l'eau. L'eau coule et prend la forme du verre.",
            },
            {
              id: 'gaz',
              text: "Et si on la fait bouillir, elle s'envole dans l'air, si petite qu'on ne la voit plus du tout.",
            },
            {
              id: 'reversible',
              text: "Mais rien n'a disparu ! Si tu la remets au froid, elle redevient de l'eau, puis un glaçon.",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'solide',
              text: "Dans un solide, les particules sont serrées les unes contre les autres et vibrent sur place. C'est pourquoi un solide garde sa forme.",
            },
            {
              id: 'liquide',
              text: "En chauffant, les particules s'agitent davantage et parviennent à glisser les unes sur les autres. Le liquide coule et épouse la forme de son récipient.",
            },
            {
              id: 'gaz',
              text: "En chauffant encore, elles s'échappent et filent dans toutes les directions. La vapeur d'eau est totalement invisible. Le nuage blanc au-dessus d'une casserole n'est pas de la vapeur, mais de fines gouttelettes déjà refroidies.",
            },
            {
              id: 'reversible',
              text: "Ces changements sont réversibles, et la matière ne se perd jamais. Un kilo de glace donne un kilo d'eau, puis un kilo de vapeur. Seule l'agitation des particules a changé.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'solide',
              text: "L'état dépend de la compétition entre l'agitation thermique et les forces de cohésion. Dans un solide cristallin, les particules occupent des positions ordonnées et n'ont d'autre liberté que la vibration.",
            },
            {
              id: 'liquide',
              text: "À la fusion, l'énergie apportée suffit à rompre cet ordre sans séparer les particules. Elles restent au contact mais deviennent mobiles : le volume change peu, la forme n'est plus imposée.",
            },
            {
              id: 'gaz',
              text: "À la vaporisation, les particules se libèrent complètement et occupent tout l'espace disponible. Le volume augmente ici d'un facteur d'environ mille sept cents — c'est cette expansion qui a rendu possibles les machines à vapeur.",
            },
            {
              id: 'reversible',
              text: "Ce sont des transformations physiques, non chimiques : les molécules d'eau restent des molécules d'eau. À noter, pendant un changement d'état la température ne bouge pas, bien qu'on continue de chauffer — l'énergie sert à rompre les liaisons, pas à élever la température. C'est pourquoi un mélange d'eau et de glace reste à zéro degré.",
            },
          ],
        },
      },
    },
  },
};
