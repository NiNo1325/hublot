import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Les machines ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'comment-compte-un-ordinateur',
    vrai: true,
    texte: {
      fr: 'Un ordinateur ne connaît que deux chiffres : zéro et un.',
      en: 'A computer only knows two digits: zero and one.',
    },
    reponse: {
      fr: 'Vrai ! Allumé ou éteint, rien d’autre. Tout le reste — les mots, les images, la musique — se construit avec ça.',
      en: 'True! On or off, nothing else. Everything else — words, pictures, music — is built out of that.',
    },
  },
  {
    cardId: 'comment-marche-internet',
    vrai: false,
    texte: {
      fr: 'Internet vit dans un nuage, quelque part dans le ciel.',
      en: 'The internet lives in a cloud, somewhere up in the sky.',
    },
    reponse: {
      fr: 'Faux ! Ce sont des ordinateurs bien réels dans de grands hangars, reliés par des câbles — dont certains traversent les océans.',
      en: 'False! It is very real computers in big warehouses, joined by cables — some of which cross the oceans.',
    },
  },
  {
    cardId: 'quest-ce-quun-programme',
    vrai: true,
    texte: {
      fr: 'Un ordinateur ne fait rien d’autre que ce qu’on lui a écrit, dans l’ordre.',
      en: 'A computer does nothing but what it was told, in order.',
    },
    reponse: {
      fr: 'Vrai ! Il ne devine jamais. Un programme, c’est une recette qu’il suit à la lettre, même quand elle est fausse.',
      en: 'True! It never guesses. A program is a recipe it follows to the letter, even when the recipe is wrong.',
    },
  },
  {
    cardId: 'comment-un-ordinateur-se-souvient',
    vrai: true,
    texte: {
      fr: 'Quand tu éteins un ordinateur, une partie de sa mémoire s’efface complètement.',
      en: 'When you switch a computer off, part of its memory is wiped completely.',
    },
    reponse: {
      fr: 'Vrai ! La mémoire de travail oublie tout d’un coup. Seul ce qui a été enregistré survit à la coupure.',
      en: 'True! The working memory forgets everything at once. Only what was saved survives the cut.',
    },
  },
  {
    cardId: 'comment-une-machine-apprend',
    vrai: false,
    texte: {
      fr: 'Une machine qui apprend comprend ce qu’elle voit.',
      en: 'A machine that learns understands what it sees.',
    },
    reponse: {
      fr: 'Faux ! Elle repère des ressemblances dans des milliers d’exemples. Reconnaître un chat, ce n’est pas savoir ce qu’est un chat.',
      en: 'False! It spots patterns in thousands of examples. Recognising a cat is not knowing what a cat is.',
    },
  },
  {
    cardId: 'comment-marche-un-ecran',
    vrai: true,
    texte: {
      fr: 'Ton écran ne sait afficher que trois couleurs.',
      en: 'Your screen can only display three colours.',
    },
    reponse: {
      fr: 'Vrai ! Rouge, vert et bleu, en minuscules points. Mélangés, ils font toutes les autres — et tes yeux se laissent faire.',
      en: 'True! Red, green and blue, in tiny dots. Mixed together they make all the others — and your eyes fall for it.',
    },
  },
  {
    cardId: 'les-mots-de-passe',
    vrai: false,
    texte: {
      fr: 'Un bon mot de passe, c’est un mot compliqué avec des symboles à la place des lettres.',
      en: 'A good password is a complicated word with symbols instead of letters.',
    },
    reponse: {
      fr: 'Faux ! Ce qui compte, c’est la longueur. Quatre mots ordinaires mis bout à bout valent mieux qu’un mot tordu et court.',
      en: 'False! What counts is length. Four ordinary words in a row beat one short twisted one.',
    },
  },
  {
    cardId: 'pourquoi-une-photo-devient-floue',
    vrai: false,
    texte: {
      fr: 'Dans les films, on zoome sur une photo floue et on lit la plaque : ça marche vraiment.',
      en: 'In films they zoom into a blurry photo and read the number plate: that really works.',
    },
    reponse: {
      fr: 'Faux ! Ce qui n’a pas été photographié n’existe nulle part. Un ordinateur peut inventer des détails, pas les retrouver.',
      en: 'False! What was never photographed exists nowhere. A computer can invent details, not recover them.',
    },
  },
  {
    cardId: 'la-navigation-privee',
    vrai: false,
    texte: {
      fr: 'En navigation privée, personne ne sait ce que tu regardes.',
      en: 'In private browsing, nobody knows what you are looking at.',
    },
    reponse: {
      fr: 'Faux ! Ça n’efface que les traces sur ton appareil. Les sites et le fournisseur d’accès, eux, voient tout comme d’habitude.',
      en: 'False! It only clears the traces on your own device. The websites and your provider see everything as usual.',
    },
  },
  {
    cardId: 'le-wifi',
    vrai: true,
    texte: {
      fr: 'Le wifi peut très bien marcher sans qu’il y ait internet.',
      en: 'Wi-Fi can work perfectly well with no internet at all.',
    },
    reponse: {
      fr: 'Vrai ! Le wifi, c’est le petit bout sans fil entre toi et la boîte. Internet, c’est tout ce qu’il y a après.',
      en: 'True! Wi-Fi is the short wireless hop between you and the box. The internet is everything after that.',
    },
  },
];
