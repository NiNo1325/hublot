import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La météo ».
 *
 * Règle de rédaction : la mauvaise réponse reprend l'idée reçue que la carte
 * corrige. Pour les 3-5 ans, deux propositions seulement, et des énoncés assez
 * courts pour tenir dans une phrase entendue.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'les-nuages',
    questions: {
      '3-5': [
        {
          id: 'nuage-fait-de-quoi',
          question: 'Un nuage, c’est fait de quoi ?',
          reponses: [
            { texte: 'De toutes petites gouttes d’eau', icone: '💧', correcte: true },
            { texte: 'De vapeur qu’on voit', icone: '💨' },
          ],
          explication: "Un nuage est fait de minuscules gouttelettes. La vapeur, elle, est invisible.",
        },
      ],
      '6-8': [
        {
          id: 'vapeur-visible',
          question: 'Peut-on voir la vapeur d’eau ?',
          reponses: [
            { texte: 'Non, elle est invisible', icone: '👻', correcte: true },
            { texte: 'Oui, c’est le nuage blanc', icone: '☁️' },
            { texte: 'Oui, c’est la fumée grise', icone: '💨' },
          ],
          explication:
            "La vapeur d'eau est un gaz invisible. Ce qu'on voit dans un nuage, ce sont des gouttelettes formées quand elle refroidit.",
        },
      ],
      '9-12': [
        {
          id: 'pourquoi-flotte',
          question: 'Pourquoi un nuage flotte-t-il ?',
          reponses: [
            { texte: 'Ses gouttelettes sont trop petites pour tomber vite', icone: '🎈', correcte: true },
            { texte: 'Parce que la vapeur est plus légère que l’air', icone: '💨' },
            { texte: 'Parce qu’il est fait de coton léger', icone: '🧶' },
          ],
          explication:
            "Les gouttelettes mesurent quelques millièmes de millimètre : leur chute est si lente, et les courants d'air si présents, qu'elles restent en suspension.",
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-il-fait-plus-froid-en-montagne',
    questions: {
      '3-5': [
        {
          id: 'plus-haut-plus-froid',
          question: 'Quand on monte tout en haut d’une montagne…',
          reponses: [
            { texte: 'Il fait plus froid', icone: '🥶', correcte: true },
            { texte: 'Il fait plus chaud, on est près du soleil', icone: '☀️' },
          ],
          explication: "Plus on monte, plus il fait froid : il y a moins d'air pour garder la chaleur.",
        },
      ],
      '6-8': [
        {
          id: 'vraie-raison-froid',
          question: 'Pourquoi fait-il plus froid en haut des montagnes ?',
          reponses: [
            { texte: 'L’air s’y raréfie et garde mal la chaleur', icone: '💨', correcte: true },
            { texte: 'On est plus près du Soleil', icone: '☀️' },
            { texte: 'Le vent souffle plus fort', icone: '🌬️' },
          ],
          explication:
            "Le Soleil est à 150 millions de km : monter n'y change rien. En altitude, l'air rare retient mal la chaleur.",
        },
      ],
      '9-12': [
        {
          id: 'soleil-chauffe-quoi',
          question: 'Qu’est-ce que le Soleil chauffe surtout ?',
          reponses: [
            { texte: 'Le sol, qui réchauffe ensuite l’air', icone: '🌍', correcte: true },
            { texte: 'Directement l’air, d’autant plus qu’on est haut', icone: '💨' },
            { texte: 'Seulement les sommets enneigés', icone: '🏔️' },
          ],
          explication:
            "Le Soleil chauffe peu l'air directement : il chauffe le sol, qui réchauffe l'air à son contact. Plus on monte, plus on s'éloigne de ce sol et plus l'air rare retient mal la chaleur.",
        },
      ],
    },
  },
  {
    cardId: 'la-foudre-et-le-tonnerre',
    questions: {
      '3-5': [
        {
          id: 'eclair-ou-tonnerre',
          question: 'Que remarque-t-on d’abord pendant un orage ?',
          reponses: [
            { texte: 'On voit l’éclair, puis on entend le tonnerre', icone: '⚡', correcte: true },
            { texte: 'On voit et on entend en même temps', icone: '👂' },
          ],
          explication: "On voit l'éclair avant d'entendre le tonnerre, parce que la lumière va plus vite que le son.",
        },
      ],
      '6-8': [
        {
          id: 'pourquoi-decalage',
          question: 'Pourquoi entend-on le tonnerre après avoir vu l’éclair ?',
          reponses: [
            { texte: 'La lumière va bien plus vite que le son', icone: '💨', correcte: true },
            { texte: 'Le tonnerre part plus tard que l’éclair', icone: '⏰' },
            { texte: 'Le nuage garde le bruit un moment', icone: '☁️' },
          ],
          explication:
            "Éclair et tonnerre naissent en même temps ; mais la lumière nous parvient presque instantanément, le son beaucoup plus lentement.",
        },
      ],
      '9-12': [
        {
          id: 'calcul-distance',
          question: 'Comment estimer la distance de l’orage ?',
          reponses: [
            { texte: 'Compter les secondes éclair-tonnerre et diviser par trois', icone: '🔢', correcte: true },
            { texte: 'Compter le nombre d’éclairs', icone: '⚡' },
            { texte: 'Regarder la taille du nuage', icone: '☁️' },
          ],
          explication:
            "Le son parcourt environ 1 km en 3 secondes. Compter les secondes entre l'éclair et le tonnerre puis diviser par trois donne la distance en kilomètres.",
        },
      ],
    },
  },
];
