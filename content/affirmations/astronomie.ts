import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Le ciel ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'jour-et-nuit',
    vrai: false,
    texte: {
      fr: 'Il fait nuit parce que le Soleil s’éteint le soir.',
      en: 'It gets dark because the Sun switches off in the evening.',
    },
    reponse: {
      fr: 'Faux ! Le Soleil brille sans arrêt. C’est la Terre qui tourne, et notre côté se retrouve à l’ombre.',
      en: 'False! The Sun shines all the time. It is the Earth that turns, and our side ends up in the shade.',
    },
  },
  {
    cardId: 'les-phases-de-la-lune',
    vrai: false,
    texte: {
      fr: 'La Lune change de forme parce que la Terre lui fait de l’ombre.',
      en: 'The Moon changes shape because the Earth casts its shadow on it.',
    },
    reponse: {
      fr: 'Faux ! On voit seulement la moitié éclairée par le Soleil, sous un angle qui change. L’ombre de la Terre, c’est l’éclipse, et c’est rare.',
      en: 'False! We only see the half lit by the Sun, from an angle that changes. The Earth’s shadow is an eclipse, and that is rare.',
    },
  },
  {
    cardId: 'pourquoi-il-y-a-des-saisons',
    vrai: false,
    texte: {
      fr: 'Il fait plus chaud en été parce que la Terre est plus près du Soleil.',
      en: 'It is warmer in summer because the Earth is closer to the Sun.',
    },
    reponse: {
      fr: 'Faux ! C’est l’inclinaison de la Terre : en été, les rayons tapent plus droit et le jour dure plus longtemps.',
      en: 'False! It is the Earth’s tilt: in summer the rays hit more directly and the day lasts longer.',
    },
  },
  {
    cardId: 'les-etoiles',
    vrai: true,
    texte: {
      fr: 'Le Soleil est une étoile, comme celles qu’on voit la nuit.',
      en: 'The Sun is a star, just like the ones we see at night.',
    },
    reponse: {
      fr: 'Vrai ! Une étoile tout à fait ordinaire — mais tellement plus proche qu’elle éclaire tout notre ciel.',
      en: 'True! A perfectly ordinary star — only so much closer that it lights up our whole sky.',
    },
  },
  {
    cardId: 'pourquoi-les-astronautes-flottent',
    vrai: false,
    texte: {
      fr: 'Les astronautes flottent parce qu’il n’y a pas de gravité là-haut.',
      en: 'Astronauts float because there is no gravity up there.',
    },
    reponse: {
      fr: 'Faux ! La gravité y est presque aussi forte qu’ici. Ils flottent parce qu’ils tombent en même temps que leur vaisseau, sans jamais toucher le sol.',
      en: 'False! Gravity is nearly as strong as down here. They float because they are falling together with their spacecraft, and never hit the ground.',
    },
  },
  {
    cardId: 'les-trous-noirs',
    vrai: false,
    texte: {
      fr: 'Un trou noir aspire tout ce qui passe autour de lui.',
      en: 'A black hole sucks in everything that passes near it.',
    },
    reponse: {
      fr: 'Faux ! De loin, il attire comme n’importe quelle étoile de la même masse. Il faut s’approcher très près pour ne plus pouvoir repartir.',
      en: 'False! From far away it pulls like any star of the same mass. You have to go very close before you can no longer get away.',
    },
  },
  {
    cardId: 'les-etoiles-filantes',
    vrai: true,
    texte: {
      fr: 'Une étoile filante n’est pas une étoile : c’est un grain de poussière qui brûle.',
      en: 'A shooting star is not a star: it is a speck of dust burning up.',
    },
    reponse: {
      fr: 'Vrai ! Souvent plus petit qu’un grain de riz. Il file si vite que l’air s’échauffe et s’illumine sur son passage.',
      en: 'True! Often smaller than a grain of rice. It moves so fast that the air heats up and glows along its path.',
    },
  },
  {
    cardId: 'les-planetes',
    vrai: true,
    texte: {
      fr: 'Entre deux planètes, il y a surtout du vide — énormément de vide.',
      en: 'Between two planets there is mostly emptiness — an enormous amount of it.',
    },
    reponse: {
      fr: 'Vrai ! Sur les dessins, elles se touchent presque. En vrai, toutes les planètes tiendraient entre la Terre et la Lune.',
      en: 'True! In drawings they almost touch. In reality, every planet would fit in the gap between the Earth and the Moon.',
    },
  },
  {
    cardId: 'la-face-cachee-de-la-lune',
    vrai: false,
    texte: {
      fr: 'La face cachée de la Lune est toujours dans le noir.',
      en: 'The far side of the Moon is always in darkness.',
    },
    reponse: {
      fr: 'Faux ! Elle a le jour et la nuit comme l’autre. Cachée, ça veut dire cachée à nous, pas au Soleil.',
      en: 'False! It has day and night just like the near side. Hidden means hidden from us, not from the Sun.',
    },
  },
  {
    cardId: 'les-eclipses',
    vrai: true,
    texte: {
      fr: 'Si l’orbite de la Lune n’était pas penchée, il y aurait une éclipse tous les mois.',
      en: 'If the Moon’s orbit were not tilted, there would be an eclipse every month.',
    },
    reponse: {
      fr: 'Vrai ! Elle est penchée d’à peine cinq degrés, et ça suffit pour que l’ombre passe presque toujours à côté.',
      en: 'True! It is tilted by barely five degrees, and that is enough for the shadow to miss almost every time.',
    },
  },
];
