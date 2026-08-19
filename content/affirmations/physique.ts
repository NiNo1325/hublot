import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Comment ça marche ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'pourquoi-tout-tombe',
    vrai: false,
    texte: {
      fr: 'Une bille lourde tombe plus vite qu’une bille légère.',
      en: 'A heavy marble falls faster than a light one.',
    },
    reponse: {
      fr: 'Faux ! Elles tombent ensemble. Sans air pour les freiner, un marteau et une plume touchent le sol en même temps.',
      en: 'False! They fall together. With no air to slow them down, a hammer and a feather hit the ground at the same moment.',
    },
  },
  {
    cardId: 'les-aimants',
    vrai: false,
    texte: {
      fr: 'Un aimant attire tous les métaux.',
      en: 'A magnet attracts every metal.',
    },
    reponse: {
      fr: 'Faux ! Presque uniquement le fer. L’or, le cuivre et l’aluminium lui restent complètement indifférents.',
      en: 'False! Almost only iron. Gold, copper and aluminium are completely indifferent to it.',
    },
  },
  {
    cardId: 'pourquoi-on-voit-les-couleurs',
    vrai: true,
    texte: {
      fr: 'Une pomme rouge est de toutes les couleurs sauf le rouge.',
      en: 'A red apple is every colour except red.',
    },
    reponse: {
      fr: 'Vrai ! Elle avale toutes les autres couleurs de la lumière et renvoie le rouge. C’est celui-là que tu vois.',
      en: 'True! It swallows all the other colours of light and sends the red back. That is the one you see.',
    },
  },
  {
    cardId: 'comment-voyage-le-son',
    vrai: true,
    texte: {
      fr: 'Le son ne traverse pas le vide : dans l’espace, personne ne t’entendrait crier.',
      en: 'Sound cannot cross a vacuum: in space, nobody would hear you shout.',
    },
    reponse: {
      fr: 'Vrai ! Il lui faut de la matière à bousculer. Sans air, sans eau, sans mur, il n’y a rien à faire vibrer.',
      en: 'True! It needs matter to jostle. With no air, no water, no wall, there is nothing to make vibrate.',
    },
  },
  {
    cardId: 'lelectricite',
    vrai: false,
    texte: {
      fr: 'Dans un fil, les électrons filent aussi vite que l’éclair.',
      en: 'Inside a wire, the electrons race along as fast as lightning.',
    },
    reponse: {
      fr: 'Faux ! Ils avancent plus lentement qu’un escargot. C’est la poussée qui se propage vite, comme dans un tuyau déjà plein d’eau.',
      en: 'False! They crawl slower than a snail. It is the push that travels fast, like in a pipe already full of water.',
    },
  },
  {
    cardId: 'le-chaud-et-le-froid',
    vrai: false,
    texte: {
      fr: 'Quand tu ouvres la fenêtre en hiver, le froid entre dans la maison.',
      en: 'When you open the window in winter, the cold comes into the house.',
    },
    reponse: {
      fr: 'Faux ! Le froid n’existe pas tout seul : c’est la chaleur qui sort. Elle va toujours du chaud vers le froid.',
      en: 'False! Cold is not a thing of its own: it is the heat that leaves. Heat always goes from warm to cold.',
    },
  },
  {
    cardId: 'pourquoi-ca-sarrete',
    vrai: true,
    texte: {
      fr: 'Une bille lancée dans l’espace, loin de tout, n’arrêterait jamais d’avancer.',
      en: 'A marble thrown in space, far from everything, would never stop moving.',
    },
    reponse: {
      fr: 'Vrai ! Ici, ce sont les frottements qui arrêtent tout. Sans eux, rien ne ralentit.',
      en: 'True! Down here it is friction that stops everything. Without it, nothing slows down.',
    },
  },
  {
    cardId: 'les-atomes',
    vrai: true,
    texte: {
      fr: 'Dans un atome, il y a surtout du vide.',
      en: 'An atom is mostly empty space.',
    },
    reponse: {
      fr: 'Vrai ! Si le noyau était une bille au milieu d’un stade, les électrons tourneraient dans les gradins.',
      en: 'True! If the nucleus were a marble in the middle of a stadium, the electrons would circle in the stands.',
    },
  },
  {
    cardId: 'lenergie',
    vrai: false,
    texte: {
      fr: 'Une centrale électrique fabrique de l’énergie.',
      en: 'A power station makes energy.',
    },
    reponse: {
      fr: 'Faux ! Elle la transforme. L’énergie ne se fabrique pas et ne disparaît pas : elle change de forme, c’est tout.',
      en: 'False! It transforms it. Energy is never made and never disappears: it just changes form.',
    },
  },
  {
    cardId: 'le-poids-et-la-masse',
    vrai: true,
    texte: {
      fr: 'Sur la Lune, tu pèses moins lourd, mais tu contiens exactement autant de matière.',
      en: 'On the Moon you weigh less, but you are made of exactly as much stuff.',
    },
    reponse: {
      fr: 'Vrai ! La masse ne bouge pas, le poids si. La Lune tire six fois moins fort que la Terre.',
      en: 'True! Your mass does not change, your weight does. The Moon pulls six times more gently than the Earth.',
    },
  },
];
