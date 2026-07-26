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
  {
    cardId: 'pourquoi-le-cameleon-change-de-couleur',
    questions: {
      '3-5': [
        {
          id: 'pourquoi-couleurs-vives',
          question: 'Le caméléon devient tout coloré. Pourquoi ?',
          reponses: [
            { texte: 'Pour envoyer un message aux autres', icone: '💬', correcte: true },
            { texte: 'Pour se cacher', icone: '🙈' },
          ],
          explication: 'Ses couleurs vives servent à parler aux autres caméléons, pas à se cacher.',
        },
      ],
      '6-8': [
        {
          id: 'a-quoi-sert-la-couleur',
          question: 'À quoi sert surtout le changement de couleur du caméléon ?',
          reponses: [
            { texte: 'À communiquer et régler sa température', icone: '🌡️', correcte: true },
            { texte: 'À se camoufler sur ce qui l’entoure', icone: '🎨' },
            { texte: 'À devenir invisible', icone: '👻' },
          ],
          explication:
            "Il change de couleur pour montrer son humeur, parler aux autres et se réchauffer ou se refroidir — pas pour se cacher.",
        },
      ],
      '9-12': [
        {
          id: 'comment-change-la-couleur',
          question: 'Comment le caméléon obtient-il ses couleurs ?',
          reponses: [
            { texte: 'Des cristaux sous la peau trient la lumière', icone: '🔷', correcte: true },
            { texte: 'Il prend la couleur de ce qu’il touche', icone: '🖐️' },
            { texte: 'Sa peau se remplit de peinture', icone: '🪣' },
          ],
          explication:
            "Sous sa peau, des cristaux minuscules réfléchissent la lumière ; en changeant leur espacement, il change la couleur renvoyée.",
        },
      ],
    },
  },
];
