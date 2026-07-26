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
];
