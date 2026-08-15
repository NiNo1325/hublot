import type { ScienceCard } from '@/lib/types';

/**
 * Idée reçue corrigée : « le caméléon change de couleur pour se camoufler ». En
 * réalité, il change surtout pour communiquer (humeur, rival, séduction) et pour
 * régler sa température. Le camouflage vient de sa forme et de son immobilité,
 * pas de ces changements de couleur, qui le rendent au contraire visible.
 */
export const card: ScienceCard = {
  id: 'pourquoi-le-cameleon-change-de-couleur',
  domainId: 'animaux',
  animationId: 'cameleon',
  thumbnail: '🦎',
  content: {
    fr: {
      title: {
        '3-5': 'Le caméléon',
        '6-8': 'Pourquoi le caméléon change de couleur',
        '9-12': 'Pourquoi le caméléon change de couleur',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'humeur',
              text: 'Quand le caméléon est calme, il reste vert, tout tranquille.',
            },
            {
              id: 'signal',
              text: "Mais s'il est fâché ou qu'il veut plaire, il devient plein de couleurs vives, pour le montrer aux autres.",
            },
            {
              id: 'temperature',
              text: "Quand il a froid, il se fait tout sombre pour se réchauffer au soleil.",
            },
            {
              id: 'mecanisme',
              text: "Ce n'est pas pour se cacher : ses couleurs, ce sont des messages !",
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'humeur',
              text: "Au repos, le caméléon porte des couleurs ternes. Sa couleur dépend surtout de son humeur.",
            },
            {
              id: 'signal',
              text: "Face à un rival ou pour séduire, il s'allume de couleurs vives. C'est un signal qu'il envoie à un autre caméléon.",
            },
            {
              id: 'temperature',
              text: "Il ajuste aussi sa couleur à la température : plus sombre pour capter la chaleur du soleil, plus clair quand il a trop chaud.",
            },
            {
              id: 'mecanisme',
              text: "Alors non, il ne devient pas rose sur un mur rose pour se cacher. Ses couleurs le rendent visible : elles servent à parler, pas à disparaître.",
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'humeur',
              text: "La couleur du caméléon reflète d'abord son état : calme, il arbore des teintes discrètes.",
            },
            {
              id: 'signal',
              text: "Excité, menacé ou en parade, il vire au vif. Ces couleurs sont un langage adressé à ses congénères : dominer un rival, impressionner, ou séduire une femelle.",
            },
            {
              id: 'temperature',
              text: "La couleur sert aussi de thermostat : une peau sombre absorbe davantage la chaleur du soleil, une peau claire la renvoie. Il se réchauffe ou se refroidit en changeant de teinte.",
            },
            {
              id: 'mecanisme',
              text: "Le plus surprenant, c'est le mécanisme : sous sa peau, des cristaux minuscules réfléchissent la lumière. En modifiant leur espacement, le caméléon change la couleur renvoyée — ce ne sont pas des pigments qu'il déplace, mais de la lumière qu'il trie. Se camoufler n'est donc pas le but : ses couleurs le rendent voyant, pour communiquer.",
            },
          ],
        },
      },
    },
    en: {
      title: {
        '3-5': 'The chameleon',
        '6-8': 'Why the chameleon changes colour',
        '9-12': 'Why the chameleon changes colour',
      },
      explanation: {
        '3-5': {
          beats: [
            {
              id: 'humeur',
              text: 'When the chameleon is calm, it stays green and quiet.',
            },
            {
              id: 'signal',
              text: 'But if it is cross, or wants to show off, it turns bright colours to tell the others.',
            },
            {
              id: 'temperature',
              text: 'When it is cold, it goes all dark to warm up in the sun.',
            },
            {
              id: 'mecanisme',
              text: 'It is not to hide: its colours are messages!',
            },
          ],
        },
        '6-8': {
          beats: [
            {
              id: 'humeur',
              text: 'At rest, the chameleon wears dull colours. Its colour depends above all on its mood.',
            },
            {
              id: 'signal',
              text: 'Facing a rival, or trying to charm a female, it lights up in bright colours. That is a signal it sends to another chameleon.',
            },
            {
              id: 'temperature',
              text: 'It also matches its colour to the temperature: darker to soak up the sun’s heat, lighter when it gets too hot.',
            },
            {
              id: 'mecanisme',
              text: 'So no, it does not turn pink on a pink wall to hide. Its colours make it easy to spot: they are there to talk, not to disappear.',
            },
          ],
        },
        '9-12': {
          beats: [
            {
              id: 'humeur',
              text: 'A chameleon’s colour reflects its state first of all: when calm, it wears quiet shades.',
            },
            {
              id: 'signal',
              text: 'Excited, threatened or displaying, it turns vivid. These colours are a language aimed at its own kind: to dominate a rival, to impress, or to court a female.',
            },
            {
              id: 'temperature',
              text: 'Colour also serves as a thermostat: dark skin absorbs more of the sun’s heat, pale skin sends it back. It warms up or cools down by changing shade.',
            },
            {
              id: 'mecanisme',
              text: 'The most surprising part is the mechanism: under its skin, tiny crystals reflect light. By changing the spacing between them, the chameleon changes the colour sent back — it is not shifting pigments about, it is sorting light. Camouflage is therefore not the point: its colours make it conspicuous, in order to communicate.',
            },
          ],
        },
      },
    },
  },
};
