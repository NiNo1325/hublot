import type { Affirmation } from '@/lib/types';

/** Affirmations du domaine « Mélanges et matière ». */
export const affirmations: Affirmation[] = [
  {
    cardId: 'le-volcan-de-vinaigre',
    vrai: false,
    texte: {
      fr: 'Le volcan de vinaigre marche comme un vrai volcan.',
      en: 'The vinegar volcano works like a real volcano.',
    },
    reponse: {
      fr: 'Faux ! La mousse, c’est du gaz fabriqué par deux ingrédients qui se rencontrent. Un vrai volcan, c’est de la roche fondue qui remonte.',
      en: 'False! The foam is gas made by two ingredients meeting. A real volcano is melted rock rising up.',
    },
  },
  {
    cardId: 'les-etats-de-la-matiere',
    vrai: true,
    texte: {
      fr: 'Glace, eau et vapeur sont exactement la même chose.',
      en: 'Ice, water and steam are exactly the same thing.',
    },
    reponse: {
      fr: 'Vrai ! Les mêmes petites billes d’eau, serrées, libres, ou envolées. Seule la façon dont elles bougent change.',
      en: 'True! The same tiny beads of water, packed tight, loose, or flown away. Only the way they move changes.',
    },
  },
  {
    cardId: 'ou-va-le-sucre-dans-leau',
    vrai: false,
    texte: {
      fr: 'Le sucre fondu dans l’eau a disparu.',
      en: 'Sugar dissolved in water has disappeared.',
    },
    reponse: {
      fr: 'Faux ! Il est toujours là, en morceaux si petits qu’on ne les voit plus. Goûte : il est bien resté.',
      en: 'False! It is still there, in pieces so small you cannot see them. Taste it: it definitely stayed.',
    },
  },
  {
    cardId: 'de-quoi-est-fait-lair',
    vrai: false,
    texte: {
      fr: 'L’air est fait surtout d’oxygène.',
      en: 'Air is mostly made of oxygen.',
    },
    reponse: {
      fr: 'Faux ! Quatre bouffées sur cinq, c’est de l’azote. L’oxygène n’en est qu’un cinquième.',
      en: 'False! Four breaths out of five are nitrogen. Oxygen is only a fifth of it.',
    },
  },
  {
    cardId: 'le-feu',
    vrai: true,
    texte: {
      fr: 'Sans air, un feu s’éteint tout seul.',
      en: 'With no air, a fire goes out by itself.',
    },
    reponse: {
      fr: 'Vrai ! Il lui faut de l’oxygène. Un couvercle sur une casserole en flammes suffit à l’étouffer.',
      en: 'True! It needs oxygen. A lid on a burning pan is enough to smother it.',
    },
  },
  {
    cardId: 'la-rouille',
    vrai: true,
    texte: {
      fr: 'Un clou rouillé est plus lourd qu’avant de rouiller.',
      en: 'A rusty nail is heavier than it was before it rusted.',
    },
    reponse: {
      fr: 'Vrai ! La rouille, c’est du fer qui s’est marié à l’oxygène de l’air. Il a gagné quelque chose, pas perdu.',
      en: 'True! Rust is iron married to the oxygen in the air. It gained something, it did not lose anything.',
    },
  },
  {
    cardId: 'pourquoi-le-savon-lave',
    vrai: true,
    texte: {
      fr: 'Le savon tient l’eau d’un côté et le gras de l’autre, en même temps.',
      en: 'Soap holds on to water at one end and to grease at the other, at the same time.',
    },
    reponse: {
      fr: 'Vrai ! C’est tout son secret : il attrape le gras par un bout, et l’eau l’emporte par l’autre.',
      en: 'True! That is its whole secret: it grabs the grease with one end, and the water carries it off by the other.',
    },
  },
  {
    cardId: 'les-acides-et-les-bases',
    vrai: false,
    texte: {
      fr: 'Tous les acides rongent et brûlent la peau.',
      en: 'All acids burn and eat away at your skin.',
    },
    reponse: {
      fr: 'Faux ! Le citron et le vinaigre sont des acides, et tu en manges. Ce qui compte, c’est la force, pas le nom.',
      en: 'False! Lemon and vinegar are acids, and you eat them. What matters is the strength, not the name.',
    },
  },
  {
    cardId: 'pourquoi-ca-sent',
    vrai: false,
    texte: {
      fr: 'Une odeur voyage jusqu’à ton nez comme une onde, à la manière du son.',
      en: 'A smell travels to your nose as a wave, the way sound does.',
    },
    reponse: {
      fr: 'Faux ! Il faut vraiment qu’un petit bout de la chose entre dans ton nez. Sentir, c’est toucher de loin.',
      en: 'False! A tiny piece of the thing really has to get into your nose. Smelling is touching from a distance.',
    },
  },
  {
    cardId: 'pourquoi-la-glace-flotte',
    vrai: true,
    texte: {
      fr: 'L’eau est bizarre : en gelant, elle prend plus de place.',
      en: 'Water is odd: when it freezes, it takes up more room.',
    },
    reponse: {
      fr: 'Vrai ! Presque tout se tasse en gelant. L’eau, elle, s’écarte — et c’est pour ça que la glace flotte.',
      en: 'True! Almost everything shrinks when it freezes. Water spreads out instead — and that is why ice floats.',
    },
  },
];
