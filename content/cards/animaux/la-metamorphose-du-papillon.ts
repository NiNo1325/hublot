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
  },
};
