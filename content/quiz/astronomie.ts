import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « L'espace ».
 *
 * Chaque proposition fausse reprend l'idée reçue que la carte corrige : le
 * Soleil qui tournerait autour de nous, l'ombre de la Terre sur la Lune, la
 * distance qui expliquerait les saisons, l'absence de gravité en orbite.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'jour-et-nuit',
    questions: {
      '3-5': [
        {
          id: 'qui-tourne',
          question: "La nuit, qu'est-ce qui bouge : la Terre ou le soleil ?",
          reponses: [
            { texte: 'La Terre, qui tourne sur elle-même', icone: '🌍', correcte: true },
            { texte: 'Le soleil, qui va se cacher', icone: '☀️' },
          ],
          explication: "Le soleil ne bouge pas : c'est la Terre qui tourne devant lui.",
        },
      ],
      '6-8': [
        {
          id: 'duree-tour',
          question: 'Combien de temps la Terre met-elle pour faire un tour sur elle-même ?',
          reponses: [
            { texte: 'Vingt-quatre heures', icone: '🕛', correcte: true },
            { texte: 'Un mois', icone: '📅' },
            { texte: 'Une année', icone: '🗓️' },
          ],
          explication: 'Un tour complet dure vingt-quatre heures : c’est ce qui fait le jour et la nuit.',
        },
      ],
      '9-12': [
        {
          id: 'terminateur',
          question: 'Comment appelle-t-on la frontière entre le jour et la nuit sur Terre ?',
          reponses: [
            { texte: 'Le terminateur', icone: '🌗', correcte: true },
            { texte: "L'équateur", icone: '🧭' },
            { texte: "L'horizon", icone: '🌅' },
          ],
          explication:
            'Le terminateur sépare l’hémisphère éclairé de l’hémisphère dans l’ombre, et se déplace avec la rotation.',
        },
      ],
    },
  },
  {
    cardId: 'les-phases-de-la-lune',
    questions: {
      '3-5': [
        {
          id: 'lune-lumiere',
          question: 'La Lune fabrique-t-elle sa propre lumière ?',
          reponses: [
            { texte: 'Non, le soleil l’éclaire', icone: '☀️', correcte: true },
            { texte: 'Oui, elle brille toute seule', icone: '💡' },
          ],
          explication: 'La Lune ne brille pas : elle renvoie la lumière du soleil.',
        },
      ],
      '6-8': [
        {
          id: 'cause-phases',
          question: 'Pourquoi la Lune change-t-elle de forme ?',
          reponses: [
            { texte: 'On voit sa moitié éclairée sous des angles différents', icone: '🌓', correcte: true },
            { texte: "C'est l'ombre de la Terre qui la cache", icone: '🌑' },
            { texte: 'Elle change vraiment de forme', icone: '🥐' },
          ],
          explication:
            "L'ombre de la Terre, c'est une éclipse, et c'est rare. Les phases viennent de notre point de vue qui change.",
        },
      ],
      '9-12': [
        {
          id: 'face-cachee',
          question: 'La face cachée de la Lune est-elle toujours dans le noir ?',
          reponses: [
            { texte: 'Non, elle connaît le jour et la nuit', icone: '🌗', correcte: true },
            { texte: 'Oui, le Soleil ne l’atteint jamais', icone: '🌑' },
            { texte: 'Oui, la Terre lui fait de l’ombre', icone: '🌍' },
          ],
          explication:
            'Le Soleil éclaire toujours un hémisphère lunaire. « Face cachée » veut dire invisible depuis la Terre, pas obscure.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-il-y-a-des-saisons',
    questions: {
      '3-5': [
        {
          id: 'terre-penchee',
          question: "Pourquoi il fait plus chaud l'été ?",
          reponses: [
            { texte: 'La Terre est penchée vers le soleil', icone: '🌍', correcte: true },
            { texte: 'La Terre est tout près du soleil', icone: '☀️' },
          ],
          explication: "C'est l'inclinaison qui compte, pas la distance.",
        },
      ],
      '6-8': [
        {
          id: 'distance-saisons',
          question: 'Quand la Terre est-elle la plus proche du Soleil ?',
          reponses: [
            { texte: 'En janvier, en plein hiver européen', icone: '❄️', correcte: true },
            { texte: 'En juillet, en plein été', icone: '🏖️' },
            { texte: 'La distance ne change jamais', icone: '📏' },
          ],
          explication:
            "La Terre est au plus près du Soleil en janvier : ce n'est donc pas la distance qui fait les saisons.",
        },
      ],
      '9-12': [
        {
          id: 'hemispheres-opposes',
          question: 'Pourquoi les deux hémisphères ont-ils des saisons opposées ?',
          reponses: [
            { texte: 'Parce que l’axe penche vers l’un puis vers l’autre', icone: '🔄', correcte: true },
            { texte: 'Parce qu’ils ne sont pas à la même distance du Soleil', icone: '📏' },
            { texte: 'Parce que le Sud reçoit moins de lumière', icone: '🌑' },
          ],
          explication:
            'Si la distance commandait les saisons, les deux hémisphères auraient l’été en même temps. Or ils sont toujours en opposition.',
        },
      ],
    },
  },
  {
    cardId: 'les-etoiles',
    questions: {
      '3-5': [
        {
          id: 'etoile-quoi',
          question: 'Une étoile dans le ciel, c’est quoi ?',
          reponses: [
            { texte: 'Un soleil très très loin', icone: '☀️', correcte: true },
            { texte: 'Une petite lampe accrochée au ciel', icone: '💡' },
          ],
          explication: 'Chaque étoile est un soleil, mais tellement loin qu’elle paraît minuscule.',
        },
      ],
      '6-8': [
        {
          id: 'voir-le-passe',
          question: 'Quand tu regardes une étoile, tu la vois comment ?',
          reponses: [
            { texte: 'Telle qu’elle était il y a des années', icone: '⏳', correcte: true },
            { texte: 'Telle qu’elle est en ce moment', icone: '⏱️' },
            { texte: 'Telle qu’elle sera plus tard', icone: '🔮' },
          ],
          explication:
            'Sa lumière met des années à nous parvenir : regarder le ciel, c’est regarder le passé.',
        },
      ],
      '9-12': [
        {
          id: 'annee-lumiere',
          question: 'Une année-lumière mesure quoi ?',
          reponses: [
            { texte: 'Une distance', icone: '📏', correcte: true },
            { texte: 'Une durée', icone: '⏳' },
            { texte: 'Une quantité de lumière', icone: '💡' },
          ],
          explication:
            'C’est la distance parcourue par la lumière en un an, environ neuf mille cinq cents milliards de kilomètres.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-les-astronautes-flottent',
    questions: {
      '3-5': [
        {
          id: 'pourquoi-flotte',
          question: 'Pourquoi les astronautes flottent dans leur vaisseau ?',
          reponses: [
            { texte: 'Ils tombent, et le vaisseau tombe avec eux', icone: '🚀', correcte: true },
            { texte: 'Parce qu’ils sont très légers', icone: '🪶' },
          ],
          explication: 'Tout tombe ensemble, alors ils flottent à l’intérieur.',
        },
      ],
      '6-8': [
        {
          id: 'gravite-espace',
          question: 'Y a-t-il de la gravité là où vole la station spatiale ?',
          reponses: [
            { texte: 'Oui, presque autant qu’au sol', icone: '🌍', correcte: true },
            { texte: 'Non, il n’y en a plus du tout', icone: '🚫' },
            { texte: 'Seulement quand elle passe près de la Lune', icone: '🌙' },
          ],
          explication:
            'À quatre cents kilomètres, la gravité vaut encore environ quatre-vingt-dix pour cent de celle au sol.',
        },
      ],
      '9-12': [
        {
          id: 'orbite-definition',
          question: 'Qu’est-ce qu’une orbite, au fond ?',
          reponses: [
            { texte: 'Une chute qui rate toujours la Terre', icone: '🔄', correcte: true },
            { texte: 'Un point où la gravité s’annule', icone: '🚫' },
            { texte: 'Un équilibre entre deux forces opposées', icone: '⚖️' },
          ],
          explication:
            'La vitesse horizontale est telle que la trajectoire suit la courbure de la Terre : on tombe sans jamais toucher le sol.',
        },
      ],
    },
  },
];
