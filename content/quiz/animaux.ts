import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Les animaux ».
 *
 * Règle de rédaction : la mauvaise réponse reprend l'idée reçue que la carte
 * corrige. Pour les 3-5 ans, deux propositions seulement, et des énoncés assez
 * courts pour tenir dans une phrase entendue.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'la-metamorphose-du-papillon',
    questions: {
      '3-5': [
        {
          id: 'qui-sort-de-loeuf',
          question: "Qui sort du petit œuf ?",
          reponses: [
            { texte: 'Une chenille', icone: '🐛', correcte: true },
            { texte: 'Un papillon tout fait', icone: '🦋' },
          ],
          explication: "C'est une chenille qui sort de l'œuf. Le papillon vient bien plus tard.",
        },
      ],
      '6-8': [
        {
          id: 'que-fait-la-chrysalide',
          question: 'Dans la chrysalide, que se passe-t-il ?',
          reponses: [
            { texte: 'Le corps se défait puis se reconstruit', icone: '✨', correcte: true },
            { texte: 'La chenille gonfle et devient papillon', icone: '🎈' },
            { texte: 'La chenille dort simplement', icone: '😴' },
          ],
          explication:
            "La chenille ne grandit pas en papillon : dans la chrysalide, son corps se défait presque entièrement, puis un corps neuf se construit.",
        },
      ],
      '9-12': [
        {
          id: 'comment-devient-papillon',
          question: 'Comment la chenille devient-elle un papillon ?',
          reponses: [
            { texte: 'Ses tissus se dissolvent, un corps neuf s’assemble', icone: '🔄', correcte: true },
            { texte: 'Elle grandit jusqu’à prendre la forme d’un papillon', icone: '📏' },
            { texte: 'Il lui pousse des ailes sur son corps de chenille', icone: '🪽' },
          ],
          explication:
            "Dans la chrysalide, la plupart des tissus se dissolvent en une bouillie de cellules, à partir de laquelle un corps entièrement neuf se construit.",
        },
      ],
    },
  },
];
