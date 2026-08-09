import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La cuisine ».
 *
 * Idées reçues visées : le four seul ferait gonfler le pain, doré confondu
 * avec brûlé, l'oignon qui piquerait par son odeur ou son jus, le piment
 * réellement brûlant que l'eau calmerait, le pop-corn qui « cuirait »
 * simplement, les bactéries toutes nuisibles, l'œuf qui « fondrait », les
 * bulles de soda prises pour de l'air aspiré, la pomme brunie crue pour
 * pourrie, et l'idée que tout aliment finit par se périmer.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'pourquoi-le-pain-gonfle',
    questions: {
      '3-5': [
        {
          id: 'pain-gonfle-pourquoi',
          question: 'Le pain gonfle grâce à qui ?',
          reponses: [
            { texte: 'La levure vivante', icone: '🦠', correcte: true },
            { texte: 'Le four tout seul', icone: '🔥' },
          ],
          explication: 'La levure fait des bulles dans la pâte, bien avant le four.',
        },
      ],
      '6-8': [
        {
          id: 'levure-mange-quoi',
          question: 'La levure mange quoi dans la pâte pour faire des bulles ?',
          reponses: [
            { texte: 'Le sucre', icone: '🍬', correcte: true },
            { texte: 'La farine entière', icone: '🌾' },
            { texte: 'L\'eau', icone: '💧' },
          ],
          explication: 'En mangeant le sucre de la pâte, la levure rejette du gaz qui fait des bulles.',
        },
      ],
      '9-12': [
        {
          id: 'pain-four-seul',
          question: 'Sans levure, la chaleur du four suffit-elle à faire gonfler le pain ?',
          reponses: [
            { texte: 'Non, il faut les bulles de la fermentation', icone: '🫧', correcte: true },
            { texte: 'Oui, la chaleur seule gonfle la pâte', icone: '🔥' },
            { texte: 'Oui, si le four est assez chaud', icone: '🌡️' },
          ],
          explication:
            'Le four fixe la structure formée par les bulles de gaz, il ne les crée pas : sans levure vivante, la pâte reste plate.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-ca-dore',
    questions: {
      '3-5': [
        {
          id: 'dore-brule',
          question: 'Le pain doré au four, c\'est brûlé ?',
          reponses: [
            { texte: 'Non, juste doré et bon', icone: '🍞', correcte: true },
            { texte: 'Oui, il est brûlé', icone: '⚫' },
          ],
          explication: 'Doré n\'est pas brûlé : c\'est une transformation qui sent très bon.',
        },
      ],
      '6-8': [
        {
          id: 'dore-quoi-rencontre',
          question: 'Qu\'est-ce qui se rencontre pour faire dorer un aliment ?',
          reponses: [
            { texte: 'Des sucres et des protéines', icone: '🍗', correcte: true },
            { texte: 'De l\'eau et de l\'huile', icone: '💧' },
            { texte: 'Du sel et du poivre', icone: '🧂' },
          ],
          explication: 'Chauffés ensemble, sucres et protéines se transforment en nouvelles molécules dorées et odorantes.',
        },
      ],
      '9-12': [
        {
          id: 'maillard-brule',
          question: 'La réaction de Maillard, qui fait dorer les aliments, est-elle la même chose que brûler ?',
          reponses: [
            { texte: 'Non, ce sont deux réactions différentes', icone: '🔀', correcte: true },
            { texte: 'Oui, dorer c\'est déjà brûler un peu', icone: '⚫' },
            { texte: 'Oui, seule la couleur change', icone: '🎨' },
          ],
          explication:
            'La réaction de Maillard crée des arômes appétissants ; brûler est une réaction plus tardive qui donne un goût amer.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-loignon-fait-pleurer',
    questions: {
      '3-5': [
        {
          id: 'oignon-larmes',
          question: 'Pourquoi tes yeux pleurent devant l\'oignon coupé ?',
          reponses: [
            { texte: 'Un gaz invisible les touche', icone: '💨', correcte: true },
            { texte: 'L\'odeur est trop forte', icone: '👃' },
          ],
          explication: 'Couper l\'oignon libère un gaz qui monte jusqu\'aux yeux et les fait pleurer.',
        },
      ],
      '6-8': [
        {
          id: 'oignon-quand-gaz',
          question: 'Le gaz qui pique les yeux existe-t-il avant de couper l\'oignon ?',
          reponses: [
            { texte: 'Non, il apparaît seulement à la coupe', icone: '🔪', correcte: true },
            { texte: 'Oui, il est déjà présent', icone: '🧅' },
            { texte: 'Oui, c\'est juste son odeur habituelle', icone: '👃' },
          ],
          explication: 'Ce n\'est qu\'en brisant les cellules de l\'oignon que ce gaz irritant se forme.',
        },
      ],
      '9-12': [
        {
          id: 'oignon-jus-ou-gaz',
          question: 'C\'est le jus de l\'oignon sur les mains qui fait pleurer les yeux ?',
          reponses: [
            { texte: 'Non, c\'est un gaz qui monte dans l\'air', icone: '💨', correcte: true },
            { texte: 'Oui, c\'est le jus qui gicle', icone: '💦' },
            { texte: 'Oui, c\'est l\'odeur qui pique', icone: '👃' },
          ],
          explication:
            'Les cellules brisées libèrent une substance soufrée qui devient un gaz volatil, atteignant les yeux par l\'air.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-le-piment-brule',
    questions: {
      '3-5': [
        {
          id: 'piment-chaud-vrai',
          question: 'Le piment est-il vraiment chaud dans ta bouche ?',
          reponses: [
            { texte: 'Non, c\'est une farce de la langue', icone: '👅', correcte: true },
            { texte: 'Oui, il chauffe pour de vrai', icone: '🔥' },
          ],
          explication: 'Rien ne chauffe vraiment : la langue crie « ça brûle ! » pour rien.',
        },
      ],
      '6-8': [
        {
          id: 'piment-capteurs',
          question: 'La capsaïcine du piment fait quoi sur ta langue ?',
          reponses: [
            { texte: 'Elle trompe les capteurs de chaleur', icone: '🌶️', correcte: true },
            { texte: 'Elle chauffe vraiment la langue', icone: '🔥' },
            { texte: 'Elle brûle la peau de la langue', icone: '🩹' },
          ],
          explication: 'La capsaïcine active les mêmes capteurs qu\'une vraie chaleur, sans que rien ne chauffe réellement.',
        },
      ],
      '9-12': [
        {
          id: 'piment-eau-ou-lait',
          question: 'Pour calmer la bouche après du piment, l\'eau est-elle le meilleur choix ?',
          reponses: [
            { texte: 'Non, le lait est plus efficace', icone: '🥛', correcte: true },
            { texte: 'Oui, l\'eau dissout la capsaïcine', icone: '💧' },
            { texte: 'Oui, l\'eau refroidit la langue', icone: '🧊' },
          ],
          explication:
            'La capsaïcine est grasse : l\'eau ne fait que la déplacer, alors que les matières grasses du lait la dissolvent vraiment.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-le-popcorn-explose',
    questions: {
      '3-5': [
        {
          id: 'popcorn-cache',
          question: 'Qu\'est-ce qui est caché dans le grain de pop-corn ?',
          reponses: [
            { texte: 'Une goutte d\'eau', icone: '💧', correcte: true },
            { texte: 'De l\'air', icone: '💨' },
          ],
          explication: 'La goutte d\'eau chauffe, pousse fort, et le grain explose : POP !',
        },
      ],
      '6-8': [
        {
          id: 'popcorn-vapeur',
          question: 'Pourquoi le grain de maïs explose-t-il en pop-corn ?',
          reponses: [
            { texte: 'La vapeur d\'eau pousse trop fort', icone: '♨️', correcte: true },
            { texte: 'Il fond simplement à la chaleur', icone: '🔥' },
            { texte: 'Il gonfle en cuisant, comme du riz', icone: '🍚' },
          ],
          explication: 'L\'eau du grain devient vapeur, la pression monte, et la coque cède d\'un coup.',
        },
      ],
      '9-12': [
        {
          id: 'popcorn-pression',
          question: 'Que se passe-t-il exactement quand la coque du grain cède ?',
          reponses: [
            { texte: 'La pression interne dépasse ce qu\'elle supporte', icone: '📈', correcte: true },
            { texte: 'La coque fond à la chaleur', icone: '🔥' },
            { texte: 'L\'amidon sèche et se casse', icone: '🌾' },
          ],
          explication:
            'La vapeur d\'eau enfermée fait grimper la pression jusqu\'à dépasser la résistance de la coque, qui explose.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-le-lait-devient-yaourt',
    questions: {
      '3-5': [
        {
          id: 'yaourt-betes',
          question: 'Qui transforme le lait en yaourt ?',
          reponses: [
            { texte: 'De gentilles petites bactéries', icone: '🦠', correcte: true },
            { texte: 'Le froid du réfrigérateur', icone: '❄️' },
          ],
          explication: 'Les bactéries mangent le sucre du lait et le rendent épais.',
        },
      ],
      '6-8': [
        {
          id: 'yaourt-bacteries-mangent',
          question: 'Les bactéries du yaourt mangent quoi dans le lait ?',
          reponses: [
            { texte: 'Le sucre du lait', icone: '🥛', correcte: true },
            { texte: 'La matière grasse', icone: '🧈' },
            { texte: 'Les vitamines', icone: '💊' },
          ],
          explication: 'En digérant le sucre du lait, les bactéries produisent de l\'acide qui épaissit le lait.',
        },
      ],
      '9-12': [
        {
          id: 'yaourt-bacteries-ennemies',
          question: 'Toutes les bactéries sont-elles mauvaises pour nous ?',
          reponses: [
            { texte: 'Non, certaines nous sont utiles', icone: '🦠', correcte: true },
            { texte: 'Oui, il faut toujours les éviter', icone: '🚫' },
            { texte: 'Oui, sauf celles du fromage', icone: '🧀' },
          ],
          explication:
            'Les bactéries lactiques transforment le lait en yaourt grâce à l\'acide lactique qu\'elles produisent : elles sont bénéfiques.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-loeuf-durcit',
    questions: {
      '3-5': [
        {
          id: 'oeuf-cru-cuit',
          question: 'L\'œuf cru est liquide. Et après la cuisson ?',
          reponses: [
            { texte: 'Il devient dur, pour toujours', icone: '🥚', correcte: true },
            { texte: 'Il redevient liquide en refroidissant', icone: '💧' },
          ],
          explication: 'Une fois durci, l\'œuf cuit ne redevient jamais liquide.',
        },
      ],
      '6-8': [
        {
          id: 'oeuf-proteines',
          question: 'Que fait la chaleur aux protéines du blanc d\'œuf ?',
          reponses: [
            { texte: 'Elle les déroule et elles s\'accrochent entre elles', icone: '🥚', correcte: true },
            { texte: 'Elle les fait fondre comme du beurre', icone: '🧈' },
            { texte: 'Elle ne change rien à l\'intérieur', icone: '🟰' },
          ],
          explication: 'Les protéines dépliées par la chaleur s\'accrochent et forment un solide.',
        },
      ],
      '9-12': [
        {
          id: 'oeuf-reversible',
          question: 'Peut-on faire redevenir liquide un blanc d\'œuf cuit en le refroidissant ?',
          reponses: [
            { texte: 'Non, la transformation est irréversible', icone: '🚫', correcte: true },
            { texte: 'Oui, en le laissant refroidir doucement', icone: '❄️' },
            { texte: 'Oui, comme du chocolat fondu', icone: '🍫' },
          ],
          explication:
            'Contrairement à une fonte, la dénaturation des protéines par la chaleur ne s\'inverse pas en refroidissant.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-le-soda-petille',
    questions: {
      '3-5': [
        {
          id: 'soda-bulles-quoi',
          question: 'D\'où viennent les bulles du soda ?',
          reponses: [
            { texte: 'D\'un gaz enfermé dans la bouteille', icone: '🥤', correcte: true },
            { texte: 'De l\'air qui rentre quand tu ouvres', icone: '💨' },
          ],
          explication: 'Le gaz était déjà dedans, bien enfermé sous pression.',
        },
      ],
      '6-8': [
        {
          id: 'soda-plat-pourquoi',
          question: 'Pourquoi un soda oublié ouvert devient-il plat ?',
          reponses: [
            { texte: 'Tout son gaz s\'est échappé', icone: '💨', correcte: true },
            { texte: 'L\'eau s\'est évaporée', icone: '💧' },
            { texte: 'Le sucre a disparu', icone: '🍬' },
          ],
          explication: 'Sans bouchon, le gaz continue de s\'échapper jusqu\'à ce qu\'il n\'en reste plus.',
        },
      ],
      '9-12': [
        {
          id: 'soda-air-aspire',
          question: 'À l\'ouverture, les bulles viennent-elles de l\'air extérieur aspiré ?',
          reponses: [
            { texte: 'Non, du gaz déjà dissous sous pression', icone: '🥤', correcte: true },
            { texte: 'Oui, l\'air entre en bulles', icone: '💨' },
            { texte: 'Oui, un mélange des deux', icone: '🔀' },
          ],
          explication:
            'La chute de pression à l\'ouverture permet au dioxyde de carbone déjà dissous de ressortir en bulles.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-la-pomme-brunit',
    questions: {
      '3-5': [
        {
          id: 'pomme-brune-pourrie',
          question: 'Une pomme coupée qui brunit un peu, est-elle pourrie ?',
          reponses: [
            { texte: 'Non, elle a juste touché l\'air', icone: '🍎', correcte: true },
            { texte: 'Oui, il faut la jeter tout de suite', icone: '🗑️' },
          ],
          explication: 'Le marron vient de l\'air, pas de la pourriture.',
        },
      ],
      '6-8': [
        {
          id: 'pomme-citron',
          question: 'Pourquoi met-on du jus de citron sur une pomme coupée ?',
          reponses: [
            { texte: 'Pour ralentir le brunissement', icone: '🍋', correcte: true },
            { texte: 'Pour la faire mûrir plus vite', icone: '⏩' },
            { texte: 'Pour la nettoyer', icone: '🧼' },
          ],
          explication: 'L\'acidité du citron ralentit la réaction qui brunit la chair de la pomme.',
        },
      ],
      '9-12': [
        {
          id: 'pomme-oxydation',
          question: 'Qu\'est-ce qui provoque exactement le brunissement de la pomme coupée ?',
          reponses: [
            { texte: 'Une oxydation de composés au contact de l\'air', icone: '🍂', correcte: true },
            { texte: 'Le développement de moisissures', icone: '🍄' },
            { texte: 'La perte de toute son eau', icone: '💧' },
          ],
          explication:
            'Des enzymes catalysent l\'oxydation de composés phénoliques dès que la chair est exposée à l\'oxygène de l\'air.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-le-miel-ne-se-perime-pas',
    questions: {
      '3-5': [
        {
          id: 'miel-perime',
          question: 'Le miel se périme-t-il comme les autres aliments ?',
          reponses: [
            { texte: 'Non, il dure très très longtemps', icone: '🍯', correcte: true },
            { texte: 'Oui, aussi vite que le lait', icone: '🥛' },
          ],
          explication: 'Le miel a trop de sucre pour que les microbes puissent y vivre.',
        },
      ],
      '6-8': [
        {
          id: 'miel-microbes-besoin',
          question: 'De quoi les microbes ont-ils besoin pour se développer dans un aliment ?',
          reponses: [
            { texte: 'D\'eau disponible', icone: '💧', correcte: true },
            { texte: 'De sucre uniquement', icone: '🍬' },
            { texte: 'De lumière', icone: '☀️' },
          ],
          explication: 'Sans eau disponible, les microbes ne peuvent pas se nourrir ni se multiplier.',
        },
      ],
      '9-12': [
        {
          id: 'miel-sucre-eau',
          question: 'Pourquoi le sucre très concentré du miel empêche-t-il les microbes de s\'y développer ?',
          reponses: [
            { texte: 'Il retient l\'eau disponible par osmose', icone: '🍯', correcte: true },
            { texte: 'Il est toxique pour les microbes', icone: '☠️' },
            { texte: 'Il empêche l\'air d\'entrer', icone: '🚫' },
          ],
          explication:
            'La très forte concentration en sucre capte l\'eau libre par osmose, privant les microbes de ce dont ils ont besoin pour vivre.',
        },
      ],
    },
  },
];
