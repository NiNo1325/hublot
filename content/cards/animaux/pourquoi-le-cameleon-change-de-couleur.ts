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
  },
};
