import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Le vivant ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'comment-poussent-les-plantes',
    vrai: false,
    texte: {
      fr: 'Une plante se nourrit en mangeant la terre de son pot.',
      en: 'A plant feeds itself by eating the soil in its pot.',
    },
    reponse: {
      fr: 'Faux ! Elle fabrique sa nourriture avec la lumière, l’eau et l’air. La terre lui donne surtout de quoi tenir debout.',
      en: 'False! It makes its own food from light, water and air. The soil mostly gives it something to stand up in.',
    },
  },
  {
    cardId: 'le-coeur-et-le-sang',
    vrai: false,
    texte: {
      fr: 'Le sang est bleu dans les veines, et devient rouge au contact de l’air.',
      en: 'Blood is blue in the veins, and turns red when it meets the air.',
    },
    reponse: {
      fr: 'Faux ! Il est rouge partout, toujours. Ce sont tes veines qu’on voit bleues à travers la peau.',
      en: 'False! It is red everywhere, always. It is your veins that look blue through the skin.',
    },
  },
  {
    cardId: 'les-microbes',
    vrai: true,
    texte: {
      fr: 'La plupart des microbes qui vivent en toi t’aident, au lieu de te rendre malade.',
      en: 'Most of the microbes living inside you help you, instead of making you ill.',
    },
    reponse: {
      fr: 'Vrai ! Des milliards de bactéries digèrent à ta place. Seule une toute petite poignée est dangereuse.',
      en: 'True! Billions of bacteria digest for you. Only a tiny handful are dangerous.',
    },
  },
  {
    cardId: 'pourquoi-on-dort',
    vrai: true,
    texte: {
      fr: 'Pendant que tu dors, ton cerveau range ce que tu as appris dans la journée.',
      en: 'While you sleep, your brain tidies up what you learned during the day.',
    },
    reponse: {
      fr: 'Vrai ! Il rejoue et trie tes souvenirs. Une nuit de sommeil, c’est du travail — pas une pause.',
      en: 'True! It replays and sorts your memories. A night’s sleep is work, not a break.',
    },
  },
  {
    cardId: 'pourquoi-on-ressemble-a-ses-parents',
    vrai: false,
    texte: {
      fr: 'Tu ressembles à tes parents parce que tu les regardes tous les jours.',
      en: 'You look like your parents because you see them every day.',
    },
    reponse: {
      fr: 'Faux ! C’est écrit dans tes cellules dès le premier jour : la moitié des instructions vient de l’un, la moitié de l’autre.',
      en: 'False! It is written in your cells from the very first day: half the instructions come from one, half from the other.',
    },
  },
  {
    cardId: 'comment-on-respire',
    vrai: true,
    texte: {
      fr: 'L’air que tu souffles contient encore beaucoup d’oxygène.',
      en: 'The air you breathe out still contains plenty of oxygen.',
    },
    reponse: {
      fr: 'Vrai ! Ton corps n’en garde qu’une partie. Il en reste assez pour ranimer quelqu’un en soufflant dans sa bouche.',
      en: 'True! Your body only keeps some of it. Enough is left to revive someone by breathing into their mouth.',
    },
  },
  {
    cardId: 'le-voyage-de-la-nourriture',
    vrai: true,
    texte: {
      fr: 'Le voyage de ton repas dure une journée entière, parfois plus.',
      en: 'The journey of your meal takes a whole day, sometimes longer.',
    },
    reponse: {
      fr: 'Vrai ! Bouche, estomac, intestins : plusieurs mètres de tuyaux, et beaucoup de patience.',
      en: 'True! Mouth, stomach, intestines: several metres of tubing, and a lot of patience.',
    },
  },
  {
    cardId: 'le-cerveau',
    vrai: false,
    texte: {
      fr: 'On n’utilise que dix pour cent de notre cerveau.',
      en: 'We only use ten per cent of our brain.',
    },
    reponse: {
      fr: 'Faux ! C’est une vieille légende. Tu utilises tout ton cerveau — pas tout en même temps, mais chaque partie sert.',
      en: 'False! That is an old legend. You use all of your brain — not all at once, but every part has a job.',
    },
  },
  {
    cardId: 'les-os',
    vrai: true,
    texte: {
      fr: 'Tes os sont vivants : ils se réparent tout seuls quand ils cassent.',
      en: 'Your bones are alive: they mend themselves when they break.',
    },
    reponse: {
      fr: 'Vrai ! Ce ne sont pas des cailloux. Du sang y circule, et ils se reconstruisent en quelques semaines.',
      en: 'True! They are not stones. Blood flows through them, and they rebuild in a few weeks.',
    },
  },
  {
    cardId: 'levolution',
    vrai: false,
    texte: {
      fr: 'Les girafes ont un long cou parce qu’elles se sont étirées pour attraper les feuilles.',
      en: 'Giraffes have long necks because they stretched to reach the leaves.',
    },
    reponse: {
      fr: 'Faux ! Personne ne s’allonge en essayant. Celles qui naissaient avec un cou un peu plus long mangeaient mieux, et ont eu plus de petits.',
      en: 'False! Nobody grows longer by trying. The ones born with a slightly longer neck ate better, and had more young.',
    },
  },
];
