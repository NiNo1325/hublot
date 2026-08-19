import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Les nombres ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'la-symetrie',
    vrai: false,
    texte: {
      fr: 'Ton visage est parfaitement symétrique.',
      en: 'Your face is perfectly symmetrical.',
    },
    reponse: {
      fr: 'Faux ! Presque, mais jamais tout à fait. Dans la nature, la symétrie est toujours un peu de travers.',
      en: 'False! Almost, but never quite. In nature, symmetry is always slightly off.',
    },
  },
  {
    cardId: 'les-fractales',
    vrai: true,
    texte: {
      fr: 'Un morceau de chou-fleur ressemble au chou-fleur entier.',
      en: 'A piece of cauliflower looks like the whole cauliflower.',
    },
    reponse: {
      fr: 'Vrai ! Et un morceau de ce morceau aussi. C’est une fractale : la même forme, à toutes les tailles.',
      en: 'True! And a piece of that piece too. That is a fractal: the same shape at every size.',
    },
  },
  {
    cardId: 'le-hasard',
    vrai: false,
    texte: {
      fr: 'Après cinq fois pile, la pièce a plus de chances de tomber sur face.',
      en: 'After five heads in a row, the coin is more likely to land on tails.',
    },
    reponse: {
      fr: 'Faux ! La pièce ne se souvient de rien. À chaque lancer, c’est une chance sur deux, comme au premier.',
      en: 'False! The coin remembers nothing. Every toss is one chance in two, just like the first.',
    },
  },
  {
    cardId: 'linfini',
    vrai: true,
    texte: {
      fr: 'Il y a autant de nombres pairs que de nombres tout court.',
      en: 'There are as many even numbers as there are numbers altogether.',
    },
    reponse: {
      fr: 'Vrai ! On peut les apparier un par un, sans fin : un avec deux, deux avec quatre… L’infini fait des choses étranges.',
      en: 'True! You can pair them up one by one, for ever: one with two, two with four… Infinity does strange things.',
    },
  },
  {
    cardId: 'le-zero',
    vrai: true,
    texte: {
      fr: 'Pendant très longtemps, les humains ont compté sans le zéro.',
      en: 'For a very long time, humans counted without zero.',
    },
    reponse: {
      fr: 'Vrai ! Écrire « rien » a mis des siècles à venir. Sans lui, impossible de faire la différence entre 25 et 205.',
      en: 'True! Writing down nothing took centuries to arrive. Without it, you cannot tell 25 from 205.',
    },
  },
  {
    cardId: 'les-grands-nombres',
    vrai: true,
    texte: {
      fr: 'Un million de secondes font onze jours, un milliard de secondes font trente et un ans.',
      en: 'A million seconds is eleven days; a billion seconds is thirty-one years.',
    },
    reponse: {
      fr: 'Vrai ! On dit les deux mots de la même façon, et pourtant l’un est mille fois l’autre.',
      en: 'True! The two words sound alike, and yet one is a thousand times the other.',
    },
  },
  {
    cardId: 'le-tour-et-la-surface',
    vrai: false,
    texte: {
      fr: 'Deux terrains qui ont le même tour ont la même place à l’intérieur.',
      en: 'Two fields with the same perimeter have the same room inside.',
    },
    reponse: {
      fr: 'Faux ! Avec la même corde, un carré tient bien plus de place qu’un rectangle tout plat.',
      en: 'False! With the same rope, a square holds far more room than a long flat rectangle.',
    },
  },
  {
    cardId: 'les-pourcentages',
    vrai: false,
    texte: {
      fr: 'Un prix qui augmente de cinquante pour cent puis baisse de cinquante pour cent revient à son point de départ.',
      en: 'A price that rises by fifty per cent then falls by fifty per cent is back where it started.',
    },
    reponse: {
      fr: 'Faux ! Dix euros montent à quinze, puis redescendent à sept euros cinquante. La baisse s’applique à un plus gros nombre.',
      en: 'False! Ten pounds rises to fifteen, then drops to seven fifty. The fall applies to a bigger number.',
    },
  },
  {
    cardId: 'la-moyenne',
    vrai: true,
    texte: {
      fr: 'Dans une classe, il se peut que personne n’ait la moyenne de la classe.',
      en: 'In a class, it can happen that nobody scored the class average.',
    },
    reponse: {
      fr: 'Vrai ! La moyenne est un résumé, pas quelqu’un. Elle peut tomber entre tout le monde.',
      en: 'True! An average is a summary, not a person. It can land between everyone.',
    },
  },
  {
    cardId: 'le-paradoxe-des-anniversaires',
    vrai: true,
    texte: {
      fr: 'Dans une classe de vingt-trois enfants, il y a une chance sur deux que deux soient nés le même jour.',
      en: 'In a class of twenty-three children, there is a one-in-two chance that two share a birthday.',
    },
    reponse: {
      fr: 'Vrai ! On compte les paires, pas les enfants : vingt-trois enfants font deux cent cinquante-trois paires possibles.',
      en: 'True! You count the pairs, not the children: twenty-three children make two hundred and fifty-three possible pairs.',
    },
  },
];
