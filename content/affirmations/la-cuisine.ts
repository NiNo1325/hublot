import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « La cuisine ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'pourquoi-le-pain-gonfle',
    vrai: false,
    texte: {
      fr: 'C’est la chaleur du four qui fait gonfler le pain, et rien d’autre.',
      en: 'It is the oven’s heat that makes bread rise, and nothing else.',
    },
    reponse: {
      fr: 'Faux ! La pâte gonfle avant le four. La levure est un champignon minuscule : elle mange le sucre de la pâte et rejette le gaz qui fait les bulles.',
      en: 'False! The dough rises before the oven. Yeast is a tiny fungus: it eats the sugar in the dough and gives off the gas that makes the bubbles.',
    },
  },
  {
    cardId: 'pourquoi-ca-dore',
    vrai: true,
    texte: {
      fr: 'La croûte dorée du pain a un goût que la mie n’a pas du tout.',
      en: 'The golden crust of bread has a taste the crumb does not have at all.',
    },
    reponse: {
      fr: 'Vrai ! La chaleur forte fabrique des centaines de nouvelles saveurs à la surface. Dedans, il fait trop humide pour ça.',
      en: 'True! Strong heat creates hundreds of new flavours at the surface. Inside, it is far too damp for that.',
    },
  },
  {
    cardId: 'pourquoi-loignon-fait-pleurer',
    vrai: false,
    texte: {
      fr: 'Un oignon entier, posé sur la table, fait déjà pleurer.',
      en: 'A whole onion, sitting on the table, already makes you cry.',
    },
    reponse: {
      fr: 'Faux ! Il ne fabrique son gaz piquant qu’une fois coupé : le couteau casse ses cellules et mélange deux ingrédients rangés à part.',
      en: 'False! It only makes its stinging gas once cut: the knife breaks its cells and mixes two ingredients that were kept apart.',
    },
  },
  {
    cardId: 'pourquoi-le-piment-brule',
    vrai: false,
    texte: {
      fr: 'Le piment brûle vraiment la bouche.',
      en: 'Chilli really burns your mouth.',
    },
    reponse: {
      fr: 'Faux ! Il trompe les capteurs de chaleur, qui crient au feu sans qu’il y ait de feu. Rien n’est abîmé.',
      en: 'False! It fools your heat sensors, which shout fire when there is no fire. Nothing is damaged.',
    },
  },
  {
    cardId: 'pourquoi-le-popcorn-explose',
    vrai: true,
    texte: {
      fr: 'C’est l’eau enfermée dans le grain qui fait exploser le pop-corn.',
      en: 'It is the water trapped inside the kernel that makes popcorn explode.',
    },
    reponse: {
      fr: 'Vrai ! Elle devient vapeur, pousse de plus en plus fort, et la coque finit par céder d’un coup.',
      en: 'True! It turns to steam, pushes harder and harder, and the shell finally gives way all at once.',
    },
  },
  {
    cardId: 'pourquoi-le-lait-devient-yaourt',
    vrai: true,
    texte: {
      fr: 'Un yaourt est plein de bactéries vivantes.',
      en: 'A yoghurt is full of living bacteria.',
    },
    reponse: {
      fr: 'Vrai ! Ce sont elles qui ont transformé le lait, et elles y sont encore. Toutes les bactéries ne rendent pas malade.',
      en: 'True! They are the ones that transformed the milk, and they are still in there. Not all bacteria make you ill.',
    },
  },
  {
    cardId: 'pourquoi-loeuf-durcit',
    vrai: false,
    texte: {
      fr: 'Un œuf dur peut redevenir liquide si on le laisse refroidir longtemps.',
      en: 'A hard-boiled egg goes runny again if you let it cool for long enough.',
    },
    reponse: {
      fr: 'Faux ! La chaleur a déplié et noué les protéines pour de bon. C’est un des rares changements qu’on ne peut pas défaire.',
      en: 'False! Heat unfolded and knotted the proteins for good. It is one of the rare changes you cannot undo.',
    },
  },
  {
    cardId: 'pourquoi-le-soda-petille',
    vrai: false,
    texte: {
      fr: 'Les bulles du soda, c’est de l’air qui entre quand tu ouvres la bouteille.',
      en: 'The bubbles in a soda are air getting in when you open the bottle.',
    },
    reponse: {
      fr: 'Faux ! Le gaz était déjà dedans, dissous sous pression. En ouvrant, tu relâches la pression — et il ressort en bulles.',
      en: 'False! The gas was already in there, dissolved under pressure. Opening the bottle releases the pressure — and out it comes as bubbles.',
    },
  },
  {
    cardId: 'pourquoi-la-pomme-brunit',
    vrai: true,
    texte: {
      fr: 'Un peu de jus de citron empêche une pomme coupée de brunir.',
      en: 'A little lemon juice stops a cut apple from browning.',
    },
    reponse: {
      fr: 'Vrai ! Le brunissement, c’est une rencontre entre la pomme et l’oxygène. Le citron bloque cette rencontre.',
      en: 'True! Browning is a meeting between the apple and oxygen. Lemon blocks the meeting.',
    },
  },
  {
    cardId: 'pourquoi-le-miel-ne-se-perime-pas',
    vrai: true,
    texte: {
      fr: 'On a retrouvé du miel vieux de trois mille ans, encore mangeable.',
      en: 'Honey three thousand years old has been found, still edible.',
    },
    reponse: {
      fr: 'Vrai ! Il contient si peu d’eau qu’aucun microbe ne peut y vivre. Sans eau, rien ne pourrit.',
      en: 'True! It holds so little water that no microbe can live in it. With no water, nothing rots.',
    },
  },
];
