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
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'qui-tourne',
            question: 'At night, what moves: the Earth or the sun?',
            reponses: [
              { texte: 'The Earth, which turns round', icone: '🌍', correcte: true },
              { texte: 'The sun, which goes and hides', icone: '☀️' },
            ],
            explication: 'The sun does not move: it is the Earth that turns in front of it.',
          },
        ],
        '6-8': [
          {
            id: 'duree-tour',
            question: 'How long does the Earth take to make one turn on itself?',
            reponses: [
              { texte: 'Twenty-four hours', icone: '🕛', correcte: true },
              { texte: 'A month', icone: '📅' },
              { texte: 'A year', icone: '🗓️' },
            ],
            explication: 'One complete turn takes twenty-four hours: that is what makes day and night.',
          },
        ],
        '9-12': [
          {
            id: 'terminateur',
            question: 'What is the boundary between day and night on Earth called?',
            reponses: [
              { texte: 'The terminator', icone: '🌗', correcte: true },
              { texte: 'The equator', icone: '🧭' },
              { texte: 'The horizon', icone: '🌅' },
            ],
            explication:
              'The terminator separates the lit hemisphere from the one in shadow, and moves along with the rotation.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-phases-de-la-lune',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'lune-lumiere',
            question: 'Does the Moon make its own light?',
            reponses: [
              { texte: 'No, the sun lights it up', icone: '☀️', correcte: true },
              { texte: 'Yes, it shines all by itself', icone: '💡' },
            ],
            explication: 'The Moon does not shine: it sends back the sun’s light.',
          },
        ],
        '6-8': [
          {
            id: 'cause-phases',
            question: 'Why does the Moon change shape?',
            reponses: [
              { texte: 'We see its lit half from different angles', icone: '🌓', correcte: true },
              { texte: 'It’s the Earth’s shadow hiding it', icone: '🌑' },
              { texte: 'It really does change shape', icone: '🥐' },
            ],
            explication:
              'The Earth’s shadow means an eclipse, and that is rare. The phases come from our point of view changing.',
          },
        ],
        '9-12': [
          {
            id: 'face-cachee',
            question: 'Is the far side of the Moon always in the dark?',
            reponses: [
              { texte: 'No, it has day and night', icone: '🌗', correcte: true },
              { texte: 'Yes, the Sun never reaches it', icone: '🌑' },
              { texte: 'Yes, the Earth casts its shadow on it', icone: '🌍' },
            ],
            explication:
              'The Sun always lights one lunar hemisphere. “Far side” means invisible from the Earth, not dark.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-il-y-a-des-saisons',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'terre-penchee',
            question: 'Why is it hotter in summer?',
            reponses: [
              { texte: 'The Earth leans towards the sun', icone: '🌍', correcte: true },
              { texte: 'The Earth is very close to the sun', icone: '☀️' },
            ],
            explication: 'It is the tilt that counts, not the distance.',
          },
        ],
        '6-8': [
          {
            id: 'distance-saisons',
            question: 'When is the Earth closest to the Sun?',
            reponses: [
              { texte: 'In January, in the middle of the European winter', icone: '❄️', correcte: true },
              { texte: 'In July, in the middle of summer', icone: '🏖️' },
              { texte: 'The distance never changes', icone: '📏' },
            ],
            explication:
              'The Earth is closest to the Sun in January: so it is not the distance that makes the seasons.',
          },
        ],
        '9-12': [
          {
            id: 'hemispheres-opposes',
            question: 'Why do the two hemispheres have opposite seasons?',
            reponses: [
              { texte: 'Because the axis leans towards one, then the other', icone: '🔄', correcte: true },
              { texte: 'Because they are not the same distance from the Sun', icone: '📏' },
              { texte: 'Because the South receives less light', icone: '🌑' },
            ],
            explication:
              'If distance governed the seasons, both hemispheres would have summer at the same time. Yet they are always opposite.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-etoiles',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'etoile-quoi',
            question: 'What is a star in the sky?',
            reponses: [
              { texte: 'A sun very, very far away', icone: '☀️', correcte: true },
              { texte: 'A little lamp hung up in the sky', icone: '💡' },
            ],
            explication: 'Every star is a sun, but so far away that it looks tiny.',
          },
        ],
        '6-8': [
          {
            id: 'voir-le-passe',
            question: 'When you look at a star, how do you see it?',
            reponses: [
              { texte: 'As it was years ago', icone: '⏳', correcte: true },
              { texte: 'As it is right now', icone: '⏱️' },
              { texte: 'As it will be later on', icone: '🔮' },
            ],
            explication:
              'Its light takes years to reach us: looking at the sky is looking at the past.',
          },
        ],
        '9-12': [
          {
            id: 'annee-lumiere',
            question: 'What does a light year measure?',
            reponses: [
              { texte: 'A distance', icone: '📏', correcte: true },
              { texte: 'A length of time', icone: '⏳' },
              { texte: 'An amount of light', icone: '💡' },
            ],
            explication:
              'It is the distance light covers in one year, about nine thousand five hundred billion kilometres.',
          },
        ],
      },
    },
  },
  {
    cardId: 'pourquoi-les-astronautes-flottent',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'pourquoi-flotte',
            question: 'Why do astronauts float in their spaceship?',
            reponses: [
              { texte: 'They fall, and the spaceship falls with them', icone: '🚀', correcte: true },
              { texte: 'Because they are very light', icone: '🪶' },
            ],
            explication: 'Everything falls together, so they float inside.',
          },
        ],
        '6-8': [
          {
            id: 'gravite-espace',
            question: 'Is there gravity where the space station flies?',
            reponses: [
              { texte: 'Yes, almost as much as on the ground', icone: '🌍', correcte: true },
              { texte: 'No, there is none left at all', icone: '🚫' },
              { texte: 'Only when it passes near the Moon', icone: '🌙' },
            ],
            explication:
              'At four hundred kilometres, gravity is still about ninety per cent of what it is on the ground.',
          },
        ],
        '9-12': [
          {
            id: 'orbite-definition',
            question: 'What is an orbit, when you get down to it?',
            reponses: [
              { texte: 'A fall that always misses the Earth', icone: '🔄', correcte: true },
              { texte: 'A point where gravity cancels out', icone: '🚫' },
              { texte: 'A balance between two opposing forces', icone: '⚖️' },
            ],
            explication:
              'The horizontal speed is such that the path follows the curve of the Earth: you fall without ever touching the ground.',
          },
        ],
      },
    },
  },
  {
    cardId: 'les-trous-noirs',
    questions: {
      fr: {
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
            question: 'Autour d’un trou noir, comment appelle-t-on la frontière au-delà de laquelle rien ne ressort ?',
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
      en: {
        '3-5': [
          {
            id: 'trou-noir-voit',
            question: 'Why can’t we see a black hole?',
            reponses: [
              { texte: 'Even light cannot get out of it', icone: '🕳️', correcte: true },
              { texte: 'Because it is very small', icone: '🤏' },
            ],
            explication: 'Nothing escapes from it, not even light: it is all black.',
          },
        ],
        '6-8': [
          {
            id: 'trou-noir-aspire',
            question: 'Does a black hole suck in everything around it like a vacuum cleaner?',
            reponses: [
              { texte: 'No, you have to go very close', icone: '📏', correcte: true },
              { texte: 'Yes, it swallows everything from far away', icone: '🌀' },
              { texte: 'Yes, the whole galaxy', icone: '🌌' },
            ],
            explication:
              'If the Sun became a black hole of the same mass, the Earth would go round exactly as before.',
          },
        ],
        '9-12': [
          {
            id: 'horizon',
            question: 'Around a black hole, what is the boundary beyond which nothing comes back called?',
            reponses: [
              { texte: 'The event horizon', icone: '⭕', correcte: true },
              { texte: 'The black hole’s equator', icone: '🧭' },
              { texte: 'The dead zone', icone: '💀' },
            ],
            explication:
              'Inside it, the speed needed to escape would exceed the speed of light: impossible.',
          },
        ],
      },
    },
  },  {
    cardId: 'les-etoiles-filantes',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'filante-quoi',
            question: 'What is a shooting star?',
            reponses: [
              { texte: 'A tiny little stone that glows', icone: '✨', correcte: true },
              { texte: 'A star that is falling', icone: '⭐' },
            ],
            explication:
              'Stars do not fall: it is a speck of dust glowing as it crosses the air.',
          },
        ],
        '6-8': [
          {
            id: 'filante-taille',
            question: 'How big is the object that makes a shooting star?',
            reponses: [
              { texte: 'Smaller than a grain of rice', icone: '🌾', correcte: true },
              { texte: 'As big as a house', icone: '🏠' },
              { texte: 'As big as the Moon', icone: '🌕' },
            ],
            explication:
              'A few milligrams is enough: it is the speed, not the size, that makes all the light.',
          },
        ],
        '9-12': [
          {
            id: 'filante-brille',
            question: 'In a shooting star, what exactly is glowing?',
            reponses: [
              { texte: 'The air compressed in front of the grain', icone: '💨', correcte: true },
              { texte: 'The grain, catching fire like a match', icone: '🔥' },
              { texte: 'The star it broke away from', icone: '⭐' },
            ],
            explication:
              'The grain violently compresses the air in front of it; that gas, raised to thousands of degrees, ionises and radiates.',
          },
        ],
      },
    },
  },  {
    cardId: 'les-planetes',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'entre-planetes',
            question: 'What is there between two planets?',
            reponses: [
              { texte: 'Empty space', icone: '🌌', correcte: true },
              { texte: 'Lots of other planets', icone: '🪐' },
            ],
            explication: 'Between the planets there is almost nothing: empty space, over very long distances.',
          },
        ],
        '6-8': [
          {
            id: 'echelle-dessins',
            question: 'Are drawings of the solar system at the right scale?',
            reponses: [
              { texte: 'No, the distances are hugely shrunk', icone: '📏', correcte: true },
              { texte: 'Yes, sizes and distances are exact', icone: '✅' },
              { texte: 'No, but only the colours change', icone: '🎨' },
            ],
            explication:
              'If the Sun were a football, Neptune would be a bead seven hundred metres away.',
          },
        ],
        '9-12': [
          {
            id: 'planetes-terre-lune',
            question: 'Would the seven other planets fit between the Earth and the Moon?',
            reponses: [
              { texte: 'Yes, only just', icone: '🌕', correcte: true },
              { texte: 'No, it would take ten times as much room', icone: '📐' },
              { texte: 'No, Jupiter alone is wider than that gap', icone: '🪐' },
            ],
            explication:
              'Their diameters add up to about 380,000 kilometres, for an Earth–Moon distance of 384,000.',
          },
        ],
      },
    },
  },  {
    cardId: 'la-face-cachee-de-la-lune',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'lune-tourne',
            question: 'Does the Moon turn round on itself?',
            reponses: [
              { texte: 'Yes, it does turn', icone: '🌝', correcte: true },
              { texte: 'No, never', icone: '🚫' },
            ],
            explication:
              'It does turn, at just the right speed to keep showing us the same side.',
          },
        ],
        '6-8': [
          {
            id: 'meme-face',
            question: 'Why do we always see the same face of the Moon?',
            reponses: [
              { texte: 'Because it turns exactly once per orbit', icone: '🔄', correcte: true },
              { texte: 'Because it does not turn at all', icone: '🛑' },
              { texte: 'Because the Earth lights only one side of it', icone: '🔦' },
            ],
            explication:
              'A body that did not turn on itself would show us every one of its faces over one orbit.',
          },
        ],
        '9-12': [
          {
            id: 'face-sombre',
            question: 'Is the far side of the Moon plunged in darkness?',
            reponses: [
              { texte: 'No, it gets as much sunlight as the other', icone: '☀️', correcte: true },
              { texte: 'Yes, it is never lit', icone: '🌑' },
              { texte: 'Yes, except during eclipses', icone: '🌒' },
            ],
            explication:
              'It is hidden, not dark: it is in broad daylight at the time of the new Moon.',
          },
        ],
      },
    },
  },  {
    cardId: 'les-eclipses',
    questions: {
      fr: {
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
      en: {
        '3-5': [
          {
            id: 'eclipse-rare',
            question: 'Is there an eclipse every month?',
            reponses: [
              { texte: 'No, it is rare', icone: '🕶️', correcte: true },
              { texte: 'Yes, every month', icone: '📅' },
            ],
            explication: 'The Moon almost always passes a little above or a little below.',
          },
        ],
        '6-8': [
          {
            id: 'pourquoi-rare',
            question: 'Why isn’t there an eclipse at every full Moon?',
            reponses: [
              { texte: 'The Moon’s orbit is tilted', icone: '📐', correcte: true },
              { texte: 'The Moon is too small', icone: '🌙' },
              { texte: 'The clouds stop us seeing it', icone: '☁️' },
            ],
            explication:
              'Tilted by about five degrees, it most often passes to one side of the alignment.',
          },
        ],
        '9-12': [
          {
            id: 'lune-rouge',
            question: 'Why does the Moon turn red during an eclipse?',
            reponses: [
              { texte: 'The Earth’s atmosphere refracts and reddens the light', icone: '🌅', correcte: true },
              { texte: 'It heats up as it enters the shadow', icone: '🔥' },
              { texte: 'Its surface contains a lot of iron', icone: '🪨' },
            ],
            explication:
              'What lights it then is the sum of all the Earth’s sunrises and sunsets.',
          },
        ],
      },
    },
  },
];
