import type { Affirmation } from '@/lib/types';

/**
 * Affirmations du domaine « La Terre ».
 *
 * Règle de rédaction : une affirmation fausse reprend l'idée reçue que la carte
 * corrige — les dinosaures devenus pétrole, le sol qui s'ouvre pendant un
 * séisme. Une affirmation vraie énonce le fait surprenant, celui qu'on croirait
 * faux sans avoir écouté la carte.
 */
export const affirmations: Affirmation[] = [
  {
    cardId: 'cycle-de-leau',
    vrai: false,
    texte: {
      fr: 'L’eau que tu bois est toute neuve : la Terre en fabrique sans arrêt.',
      en: 'The water you drink is brand new: the Earth keeps making more of it.',
    },
    reponse: {
      fr: 'Faux ! L’eau tourne en rond depuis toujours. Celle de ton verre a peut-être déjà été bue par un dinosaure.',
      en: 'False! Water goes round and round for ever. The water in your glass may already have been drunk by a dinosaur.',
    },
  },
  {
    cardId: 'les-volcans',
    vrai: true,
    texte: {
      fr: 'La lave, ce n’est pas du feu : c’est de la roche fondue.',
      en: 'Lava is not fire: it is melted rock.',
    },
    reponse: {
      fr: 'Vrai ! Elle est brûlante, à plus de mille degrés, mais c’est bien de la pierre devenue liquide.',
      en: 'True! It is scorching, over a thousand degrees, but it really is stone turned liquid.',
    },
  },
  {
    cardId: 'pourquoi-la-terre-tremble',
    vrai: false,
    texte: {
      fr: 'Pendant un tremblement de terre, le sol s’ouvre et avale les maisons.',
      en: 'During an earthquake, the ground splits open and swallows the houses.',
    },
    reponse: {
      fr: 'Faux ! Ça n’arrive qu’au cinéma. Ce qui est dangereux, ce sont les bâtiments qui s’écroulent.',
      en: 'False! That only happens in films. What is dangerous is buildings falling down.',
    },
  },
  {
    cardId: 'les-fossiles',
    vrai: true,
    texte: {
      fr: 'Un fossile n’est plus l’os de l’animal : c’est de la pierre qui a pris sa place.',
      en: 'A fossil is not the animal’s bone any more: it is stone that took its place.',
    },
    reponse: {
      fr: 'Vrai ! Des minéraux ont remplacé la matière petit à petit, en gardant la forme exacte.',
      en: 'True! Minerals replaced the material bit by bit, keeping the exact shape.',
    },
  },
  {
    cardId: 'le-vent',
    vrai: false,
    texte: {
      fr: 'C’est le mouvement des arbres qui fabrique le vent.',
      en: 'It is the trees moving that makes the wind.',
    },
    reponse: {
      fr: 'Faux ! C’est l’inverse : le vent fait bouger les arbres. Le vent, c’est de l’air qui court d’un endroit à un autre.',
      en: 'False! It is the other way round: the wind moves the trees. Wind is air rushing from one place to another.',
    },
  },
  {
    cardId: 'les-marees',
    vrai: true,
    texte: {
      fr: 'Il y a deux marées hautes par jour, et pas une seule.',
      en: 'There are two high tides a day, not just one.',
    },
    reponse: {
      fr: 'Vrai ! La mer se soulève des deux côtés de la Terre à la fois. On en traverse donc deux par jour.',
      en: 'True! The sea bulges on both sides of the Earth at once. So we pass through two of them each day.',
    },
  },
  {
    cardId: 'pourquoi-le-ciel-est-bleu',
    vrai: false,
    texte: {
      fr: 'Le ciel est bleu parce qu’il reflète la mer.',
      en: 'The sky is blue because it reflects the sea.',
    },
    reponse: {
      fr: 'Faux ! C’est l’air lui-même qui éparpille la lumière bleue. Au-dessus du désert aussi, le ciel est bleu.',
      en: 'False! It is the air itself that scatters the blue light. The sky is blue above the desert too.',
    },
  },
  {
    cardId: 'pourquoi-la-mer-est-salee',
    vrai: true,
    texte: {
      fr: 'Le sel de la mer vient des rochers de la terre ferme.',
      en: 'The salt in the sea comes from the rocks on land.',
    },
    reponse: {
      fr: 'Vrai ! La pluie use les roches, les rivières emportent le sel, et la mer le garde depuis des milliards d’années.',
      en: 'True! Rain wears the rocks away, rivers carry the salt down, and the sea has kept it for billions of years.',
    },
  },
  {
    cardId: 'dou-vient-le-petrole',
    vrai: false,
    texte: {
      fr: 'Le pétrole, ce sont des dinosaures écrasés sous la terre.',
      en: 'Oil is dinosaurs crushed under the ground.',
    },
    reponse: {
      fr: 'Faux ! Ce sont surtout des algues minuscules, enfouies puis chauffées pendant des millions d’années.',
      en: 'False! It is mostly tiny algae, buried and then heated for millions of years.',
    },
  },
  {
    cardId: 'le-sol-est-vivant',
    vrai: true,
    texte: {
      fr: 'Dans une poignée de terre, il y a plus d’êtres vivants que d’humains sur la planète.',
      en: 'In one handful of soil there are more living things than there are people on the planet.',
    },
    reponse: {
      fr: 'Vrai ! Des milliards de bactéries et des kilomètres de filaments de champignons, dans une seule poignée.',
      en: 'True! Billions of bacteria and miles of fungal threads, in a single handful.',
    },
  },
];
