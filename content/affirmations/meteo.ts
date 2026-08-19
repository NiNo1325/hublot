import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Le temps qu'il fait ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'les-nuages',
    vrai: false,
    texte: {
      fr: 'Un nuage est fait de vapeur d’eau.',
      en: 'A cloud is made of water vapour.',
    },
    reponse: {
      fr: 'Faux ! La vapeur est invisible. Un nuage, ce sont de vraies gouttelettes, si petites qu’elles flottent.',
      en: 'False! Vapour is invisible. A cloud is real droplets, so small that they float.',
    },
  },
  {
    cardId: 'pourquoi-il-fait-plus-froid-en-montagne',
    vrai: false,
    texte: {
      fr: 'Il fait plus froid en montagne parce qu’on est plus près du Soleil.',
      en: 'It is colder up a mountain because you are closer to the Sun.',
    },
    reponse: {
      fr: 'Faux ! Ce serait plutôt plus chaud. L’air y est moins serré, alors il garde beaucoup moins bien la chaleur.',
      en: 'False! That would make it warmer. The air up there is thinner, so it holds heat far less well.',
    },
  },
  {
    cardId: 'la-foudre-et-le-tonnerre',
    vrai: true,
    texte: {
      fr: 'L’éclair et le tonnerre partent au même instant.',
      en: 'The flash and the thunder start at the very same moment.',
    },
    reponse: {
      fr: 'Vrai ! La lumière arrive tout de suite, le son traîne. Compte les secondes : trois pour un kilomètre.',
      en: 'True! Light arrives at once, sound lags behind. Count the seconds: three for a kilometre.',
    },
  },
  {
    cardId: 'la-neige',
    vrai: false,
    texte: {
      fr: 'La neige, c’est de la pluie qui a gelé en tombant.',
      en: 'Snow is rain that froze on the way down.',
    },
    reponse: {
      fr: 'Faux ! Ça, c’est le grésil. Un flocon naît directement en cristal de glace, sans jamais passer par la goutte.',
      en: 'False! That is sleet. A snowflake is born straight as an ice crystal, never passing through a droplet.',
    },
  },
  {
    cardId: 'la-grele',
    vrai: true,
    texte: {
      fr: 'Un grêlon fait plusieurs allers-retours en haut du nuage avant de tomber.',
      en: 'A hailstone travels up and down inside the cloud several times before it falls.',
    },
    reponse: {
      fr: 'Vrai ! À chaque tour il gagne une couche de glace. Coupé en deux, il ressemble à un oignon.',
      en: 'True! Each lap adds a layer of ice. Cut in half, it looks like an onion.',
    },
  },
  {
    cardId: 'le-brouillard',
    vrai: true,
    texte: {
      fr: 'Le brouillard est un nuage posé par terre.',
      en: 'Fog is a cloud sitting on the ground.',
    },
    reponse: {
      fr: 'Vrai ! Exactement les mêmes gouttelettes. La seule différence, c’est la hauteur — et que tu marches dedans.',
      en: 'True! Exactly the same droplets. The only difference is the height — and that you walk through it.',
    },
  },
  {
    cardId: 'louragan',
    vrai: true,
    texte: {
      fr: 'Au centre d’un ouragan, il fait calme et le ciel est dégagé.',
      en: 'At the centre of a hurricane it is calm and the sky is clear.',
    },
    reponse: {
      fr: 'Vrai ! C’est l’œil. Le calme y est trompeur : le mur de vent revient juste après.',
      en: 'True! That is the eye. The calm is deceptive: the wall of wind comes straight back.',
    },
  },
  {
    cardId: 'la-rosee-du-matin',
    vrai: false,
    texte: {
      fr: 'La rosée du matin, c’est de la pluie tombée pendant la nuit.',
      en: 'Morning dew is rain that fell during the night.',
    },
    reponse: {
      fr: 'Faux ! Elle sort de l’air lui-même. En refroidissant, l’air ne peut plus garder son eau, et elle se pose.',
      en: 'False! It comes out of the air itself. As the air cools it can no longer hold its water, and the water settles.',
    },
  },
  {
    cardId: 'le-givre',
    vrai: true,
    texte: {
      fr: 'Le givre se forme sans jamais passer par de l’eau liquide.',
      en: 'Frost forms without ever passing through liquid water.',
    },
    reponse: {
      fr: 'Vrai ! La vapeur devient glace directement sur la vitre froide. C’est pour ça qu’il fait des dessins en aiguilles.',
      en: 'True! Vapour turns straight into ice on the cold glass. That is why it draws those needle patterns.',
    },
  },
  {
    cardId: 'la-forme-des-gouttes-de-pluie',
    vrai: false,
    texte: {
      fr: 'Une goutte de pluie a la forme d’une larme, pointue en haut.',
      en: 'A raindrop is shaped like a teardrop, pointed at the top.',
    },
    reponse: {
      fr: 'Faux ! Elle est ronde, et s’aplatit par en dessous en tombant. On dirait plutôt un petit pain à hamburger.',
      en: 'False! It is round, and flattens underneath as it falls. It looks more like a tiny burger bun.',
    },
  },
];
