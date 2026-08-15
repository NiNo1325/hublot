import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « la chenille grandit et devient papillon ». En réalité,
 * dans la chrysalide, son corps se défait presque entièrement puis se reconstruit.
 * Les quatre beats sont identiques d'une tranche d'âge à l'autre — seul le texte
 * narré change, l'animation reste unique.
 */
export const card: ScienceCard = {
  id: 'la-metamorphose-du-papillon',
  domainId: 'animaux',
  animationId: 'metamorphose',
  thumbnail: '🦋',
  content: {
    fr: {
      title: {
        '3-5': 'Le papillon',
        '6-8': 'La métamorphose du papillon',
        '9-12': 'La métamorphose du papillon',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'oeuf',
              text: 'Tout commence par un tout petit œuf, posé sous une feuille.',
            },
            {
              id: 'chenille',
              text: "De l'œuf sort une chenille. Elle mange, elle mange, et elle grandit.",
            },
            {
              id: 'chrysalide',
              text: 'La chenille se fabrique une petite maison fermée : la chrysalide. Dedans, elle se transforme.',
            },
            {
              id: 'papillon',
              text: "La maison s'ouvre. Ce n'est plus une chenille : c'est un papillon qui s'envole !",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'oeuf',
              text: "Un papillon pond de minuscules œufs sur une feuille. C'est le début de sa vie.",
            },
            {
              id: 'chenille',
              text: 'De chaque œuf sort une chenille. Elle passe ses journées à manger des feuilles pour grandir très vite.',
            },
            {
              id: 'chrysalide',
              text: "Quand elle est assez grande, la chenille s'enferme dans une chrysalide. À l'intérieur, son corps ne fait pas que grandir : il se défait presque entièrement.",
            },
            {
              id: 'papillon',
              text: "Avec ces morceaux, un tout nouveau corps se construit : des ailes, de longues pattes, une trompe. La chrysalide s'ouvre, et le papillon s'envole.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'oeuf',
              text: 'Le cycle commence par un œuf pondu sur une plante précise, celle dont la future chenille se nourrira.',
            },
            {
              id: 'chenille',
              text: "La chenille éclot et mange presque sans arrêt. Elle grandit tellement qu'elle doit changer plusieurs fois de peau, devenue trop étroite.",
            },
            {
              id: 'chrysalide',
              text: "Puis elle s'immobilise et forme une chrysalide. Là se passe le plus étonnant : la plupart de ses tissus se dissolvent en une bouillie de cellules. La chenille ne « grandit » pas en papillon, elle se démonte.",
            },
            {
              id: 'papillon',
              text: "À partir de cette bouillie, guidé par de petits amas de cellules restés intacts, un corps entièrement neuf s'assemble : ailes, yeux, trompe. Le papillon brise la chrysalide, déplie ses ailes et prend son envol. C'est la métamorphose complète.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The butterfly',
        '6-8': 'The butterfly’s metamorphosis',
        '9-12': 'The butterfly’s metamorphosis',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'oeuf',
              text: 'It all starts with a tiny egg, tucked under a leaf.',
            },
            {
              id: 'chenille',
              text: 'A caterpillar comes out of the egg. It eats, and eats, and grows.',
            },
            {
              id: 'chrysalide',
              text: 'The caterpillar makes itself a little closed house: the chrysalis. Inside, it changes.',
            },
            {
              id: 'papillon',
              text: 'The house opens. It is not a caterpillar any more: a butterfly flies away!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'oeuf',
              text: 'A butterfly lays tiny eggs on a leaf. That is where its life begins.',
            },
            {
              id: 'chenille',
              text: 'A caterpillar hatches from each egg. It spends its days eating leaves so it can grow very fast.',
            },
            {
              id: 'chrysalide',
              text: 'When it is big enough, the caterpillar shuts itself inside a chrysalis. In there, its body does not just grow: it comes apart almost completely.',
            },
            {
              id: 'papillon',
              text: 'Out of those pieces, a brand-new body is built: wings, long legs, a mouth curled up like a drinking straw. The chrysalis opens, and the butterfly flies off.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'oeuf',
              text: 'The cycle begins with an egg laid on one particular plant — the one the future caterpillar will feed on.',
            },
            {
              id: 'chenille',
              text: 'The caterpillar hatches and eats almost non-stop. It grows so much that it has to shed its skin several times, once the old one becomes too tight.',
            },
            {
              id: 'chrysalide',
              text: 'Then it stops moving and forms a chrysalis. This is where the most astonishing part happens: most of its tissues dissolve into a soup of cells. The caterpillar does not “grow” into a butterfly — it takes itself apart.',
            },
            {
              id: 'papillon',
              text: 'Out of that soup, guided by small clusters of cells that stayed intact, an entirely new body assembles itself: wings, eyes, proboscis. The butterfly breaks out of the chrysalis, unfolds its wings and takes flight. That is complete metamorphosis.',
            },
          ],
        },
      },
    },
  },
};
