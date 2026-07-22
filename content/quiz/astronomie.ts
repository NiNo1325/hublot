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
  {
    cardId: 'les-trous-noirs',
    questions: {
      '3-5': [
        {
          id: 'trou-noir-voit',
          question: 'Pourquoi ne voit-on pas un trou noir ?',
          reponses: [
            { texte: 'Même la lumière ne peut pas en sortir', icone: '🕳️', correcte: true },
            { texte: 'Parce qu’il est tout petit', icone: '🤏' },
          ],
          explication: 'Rien ne s’en échappe, pas même la lumière : il est tout noir.',
        },
      ],
      '6-8': [
        {
          id: 'trou-noir-aspire',
          question: 'Un trou noir aspire-t-il tout autour de lui comme un aspirateur ?',
          reponses: [
            { texte: 'Non, il faut s’approcher très près', icone: '📏', correcte: true },
            { texte: 'Oui, il avale tout de très loin', icone: '🌀' },
            { texte: 'Oui, toute la galaxie', icone: '🌌' },
          ],
          explication:
            'Si le Soleil devenait un trou noir de même masse, la Terre tournerait exactement pareil.',
        },
      ],
      '9-12': [
        {
          id: 'horizon',
          question: 'Comment appelle-t-on la frontière au-delà de laquelle rien ne ressort ?',
          reponses: [
            { texte: 'L’horizon des événements', icone: '⭕', correcte: true },
            { texte: 'L’équateur du trou noir', icone: '🧭' },
            { texte: 'La zone morte', icone: '💀' },
          ],
          explication:
            'En deçà, la vitesse pour s’échapper dépasserait celle de la lumière : impossible.',
        },
      ],
    },
  },  {
    cardId: 'les-etoiles-filantes',
    questions: {
      '3-5': [
        {
          id: 'filante-quoi',
          question: 'Une étoile filante, c’est quoi ?',
          reponses: [
            { texte: 'Un tout petit caillou qui brille', icone: '✨', correcte: true },
            { texte: 'Une étoile qui tombe', icone: '⭐' },
          ],
          explication:
            'Les étoiles ne tombent pas : c’est un grain de poussière qui brille en traversant l’air.',
        },
      ],
      '6-8': [
        {
          id: 'filante-taille',
          question: 'Quelle taille a l’objet qui fait une étoile filante ?',
          reponses: [
            { texte: 'Plus petit qu’un grain de riz', icone: '🌾', correcte: true },
            { texte: 'Gros comme une maison', icone: '🏠' },
            { texte: 'Gros comme la Lune', icone: '🌕' },
          ],
          explication:
            'Quelques milligrammes suffisent : c’est la vitesse, pas la taille, qui fait toute la lumière.',
        },
      ],
      '9-12': [
        {
          id: 'filante-brille',
          question: 'Dans une étoile filante, qu’est-ce qui brille exactement ?',
          reponses: [
            { texte: 'L’air comprimé devant le grain', icone: '💨', correcte: true },
            { texte: 'Le grain, qui prend feu comme une allumette', icone: '🔥' },
            { texte: 'L’étoile dont il s’est détaché', icone: '⭐' },
          ],
          explication:
            'Le grain comprime violemment l’air devant lui ; ce gaz porté à des milliers de degrés s’ionise et rayonne.',
        },
      ],
    },
  },  {
    cardId: 'les-planetes',
    questions: {
      '3-5': [
        {
          id: 'entre-planetes',
          question: 'Qu’y a-t-il entre deux planètes ?',
          reponses: [
            { texte: 'Du vide', icone: '🌌', correcte: true },
            { texte: 'Plein d’autres planètes', icone: '🪐' },
          ],
          explication: 'Entre les planètes, il n’y a presque rien : du vide, sur de très longues distances.',
        },
      ],
      '6-8': [
        {
          id: 'echelle-dessins',
          question: 'Les dessins du système solaire sont-ils à la bonne échelle ?',
          reponses: [
            { texte: 'Non, les distances y sont énormément réduites', icone: '📏', correcte: true },
            { texte: 'Oui, tailles et distances sont exactes', icone: '✅' },
            { texte: 'Non, mais seules les couleurs changent', icone: '🎨' },
          ],
          explication:
            'Si le Soleil était un ballon de football, Neptune serait une bille à sept cents mètres de là.',
        },
      ],
      '9-12': [
        {
          id: 'planetes-terre-lune',
          question: 'Les sept autres planètes tiendraient-elles entre la Terre et la Lune ?',
          reponses: [
            { texte: 'Oui, tout juste', icone: '🌕', correcte: true },
            { texte: 'Non, il faudrait dix fois plus de place', icone: '📐' },
            { texte: 'Non, Jupiter à elle seule dépasse la distance', icone: '🪐' },
          ],
          explication:
            'Leurs diamètres cumulés font environ 380 000 kilomètres, pour une distance Terre-Lune de 384 000.',
        },
      ],
    },
  },  {
    cardId: 'la-face-cachee-de-la-lune',
    questions: {
      '3-5': [
        {
          id: 'lune-tourne',
          question: 'La Lune tourne-t-elle sur elle-même ?',
          reponses: [
            { texte: 'Oui, elle tourne', icone: '🌝', correcte: true },
            { texte: 'Non, jamais', icone: '🚫' },
          ],
          explication:
            'Elle tourne, juste à la bonne vitesse pour nous montrer toujours le même côté.',
        },
      ],
      '6-8': [
        {
          id: 'meme-face',
          question: 'Pourquoi voit-on toujours la même face de la Lune ?',
          reponses: [
            { texte: 'Parce qu’elle tourne pile en un tour d’orbite', icone: '🔄', correcte: true },
            { texte: 'Parce qu’elle ne tourne pas du tout', icone: '🛑' },
            { texte: 'Parce que la Terre l’éclaire d’un seul côté', icone: '🔦' },
          ],
          explication:
            'Un corps qui ne tournerait pas sur lui-même nous montrerait toutes ses faces au cours d’une orbite.',
        },
      ],
      '9-12': [
        {
          id: 'face-sombre',
          question: 'La face cachée de la Lune est-elle plongée dans le noir ?',
          reponses: [
            { texte: 'Non, elle reçoit autant de soleil que l’autre', icone: '☀️', correcte: true },
            { texte: 'Oui, elle n’est jamais éclairée', icone: '🌑' },
            { texte: 'Oui, sauf pendant les éclipses', icone: '🌒' },
          ],
          explication:
            'Elle est cachée, pas sombre : elle se trouve en plein jour au moment de la nouvelle Lune.',
        },
      ],
    },
  },  {
    cardId: 'les-eclipses',
    questions: {
      '3-5': [
        {
          id: 'eclipse-rare',
          question: 'Y a-t-il une éclipse tous les mois ?',
          reponses: [
            { texte: 'Non, c’est rare', icone: '🕶️', correcte: true },
            { texte: 'Oui, chaque mois', icone: '📅' },
          ],
          explication: 'La Lune passe presque toujours un peu au-dessus ou un peu en dessous.',
        },
      ],
      '6-8': [
        {
          id: 'pourquoi-rare',
          question: 'Pourquoi n’y a-t-il pas une éclipse à chaque pleine Lune ?',
          reponses: [
            { texte: 'L’orbite de la Lune est penchée', icone: '📐', correcte: true },
            { texte: 'La Lune est trop petite', icone: '🌙' },
            { texte: 'Les nuages nous en empêchent', icone: '☁️' },
          ],
          explication:
            'Inclinée d’environ cinq degrés, elle passe le plus souvent à côté de l’alignement.',
        },
      ],
      '9-12': [
        {
          id: 'lune-rouge',
          question: 'Pourquoi la Lune devient-elle rouge pendant une éclipse ?',
          reponses: [
            { texte: 'L’atmosphère terrestre réfracte et rougit la lumière', icone: '🌅', correcte: true },
            { texte: 'Elle chauffe en entrant dans l’ombre', icone: '🔥' },
            { texte: 'Sa surface contient beaucoup de fer', icone: '🪨' },
          ],
          explication:
            'Ce qui l’éclaire alors, c’est la somme de tous les levers et couchers de soleil de la Terre.',
        },
      ],
    },
  },
];
