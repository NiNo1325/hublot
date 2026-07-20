import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La Terre ».
 *
 * Règle de rédaction : la mauvaise réponse reprend l'idée reçue que la carte
 * corrige. Pour les 3-5 ans, deux propositions seulement, et des énoncés assez
 * courts pour tenir dans une phrase entendue.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'cycle-de-leau',
    questions: {
      '3-5': [
        {
          id: 'ou-va-leau',
          question: "Le soleil chauffe la mer. Où va l'eau ?",
          reponses: [
            { texte: 'Elle monte dans le ciel', icone: '☁️', correcte: true },
            { texte: 'Elle disparaît pour toujours', icone: '🕳️' },
          ],
          explication: "L'eau monte dans le ciel, puis elle retombe en pluie.",
        },
      ],
      '6-8': [
        {
          id: 'nuage-fait-de',
          question: 'De quoi un nuage est-il fait ?',
          reponses: [
            { texte: "De minuscules gouttes d'eau", icone: '💧', correcte: true },
            { texte: 'De fumée', icone: '💨' },
            { texte: 'De coton', icone: '☁️' },
          ],
          explication:
            "Un nuage est fait de gouttelettes si petites qu'elles flottent dans l'air.",
        },
      ],
      '9-12': [
        {
          id: 'quantite-eau',
          question: "La quantité d'eau sur Terre change-t-elle ?",
          reponses: [
            { texte: "Non, c'est toujours la même", icone: '♻️', correcte: true },
            { texte: 'Oui, elle diminue en s’évaporant', icone: '📉' },
            { texte: 'Oui, la pluie en fabrique', icone: '🌧️' },
          ],
          explication:
            "L'eau circule sans se perdre : celle que tu bois a peut-être déjà été bue par un dinosaure.",
        },
      ],
    },
  },
  {
    cardId: 'les-volcans',
    questions: {
      '3-5': [
        {
          id: 'lave-quoi',
          question: 'La lave qui sort du volcan, c’est quoi ?',
          reponses: [
            { texte: 'De la roche toute chaude', icone: '🪨', correcte: true },
            { texte: 'Du feu', icone: '🔥' },
          ],
          explication: "La lave est de la roche fondue, brûlante mais ce n'est pas du feu.",
        },
      ],
      '6-8': [
        {
          id: 'pourquoi-monte',
          question: 'Pourquoi le magma remonte-t-il vers la surface ?',
          reponses: [
            { texte: "Parce qu'il est moins lourd que la roche autour", icone: '🎈', correcte: true },
            { texte: 'Parce que la Terre le pousse avec du vent', icone: '🌬️' },
            { texte: "Parce qu'il est attiré par le soleil", icone: '☀️' },
          ],
          explication:
            'Moins dense que la roche solide, le magma remonte comme une bulle dans l’eau.',
        },
      ],
      '9-12': [
        {
          id: 'explosif',
          question: "Qu'est-ce qui rend une éruption explosive ?",
          reponses: [
            { texte: 'Les gaz dissous qui se détendent', icone: '🫧', correcte: true },
            { texte: 'La température de la lave', icone: '🌡️' },
            { texte: 'La hauteur du volcan', icone: '⛰️' },
          ],
          explication:
            "En remontant, la pression baisse et les gaz forment des bulles : c'est leur expansion qui projette le magma.",
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-la-terre-tremble',
    questions: {
      '3-5': [
        {
          id: 'sol-morceaux',
          question: 'Le sol de la Terre est fait comment ?',
          reponses: [
            { texte: 'De grands morceaux qui bougent', icone: '🧩', correcte: true },
            { texte: "D'un seul bloc qui ne bouge jamais", icone: '🟫' },
          ],
          explication: 'Le sol est fait de grandes plaques qui glissent très lentement.',
        },
      ],
      '6-8': [
        {
          id: 'sol-souvre',
          question: 'Pendant un tremblement de terre, le sol s’ouvre-t-il en gouffre ?',
          reponses: [
            { texte: 'Non, les plaques glissent l’une contre l’autre', icone: '↔️', correcte: true },
            { texte: 'Oui, un grand trou avale tout', icone: '🕳️' },
            { texte: 'Oui, mais seulement la nuit', icone: '🌙' },
          ],
          explication:
            'Le sol ne s’ouvre pas comme au cinéma : ce sont les bâtiments qui sont dangereux.',
        },
      ],
      '9-12': [
        {
          id: 'ondes-p-s',
          question: 'Quelles ondes arrivent en premier lors d’un séisme ?',
          reponses: [
            { texte: 'Les ondes P, de compression', icone: '⚡', correcte: true },
            { texte: 'Les ondes S, de cisaillement', icone: '🌊' },
            { texte: 'Les deux exactement en même temps', icone: '⏱️' },
          ],
          explication:
            'Les ondes P vont plus vite : cet écart permet de localiser le foyer et de donner l’alerte.',
        },
      ],
    },
  },
  {
    cardId: 'les-fossiles',
    questions: {
      '3-5': [
        {
          id: 'fossile-rare',
          question: 'Trouve-t-on des fossiles partout, facilement ?',
          reponses: [
            { texte: 'Non, c’est très rare', icone: '💎', correcte: true },
            { texte: 'Oui, il y en a partout', icone: '🦴' },
          ],
          explication: 'Presque tous les animaux disparaissent sans laisser de trace.',
        },
      ],
      '6-8': [
        {
          id: 'os-ou-pierre',
          question: 'Un fossile, c’est l’os d’origine ?',
          reponses: [
            { texte: 'Non, c’est sa copie en pierre', icone: '🪨', correcte: true },
            { texte: 'Oui, l’os a juste séché', icone: '🦴' },
            { texte: 'Oui, il a été congelé', icone: '🧊' },
          ],
          explication:
            'Des minéraux ont peu à peu remplacé la matière de l’os, en gardant sa forme.',
        },
      ],
      '9-12': [
        {
          id: 'absence-preuve',
          question: 'Aucun fossile d’une espèce n’a été trouvé. Cela prouve-t-il qu’elle n’a pas existé ?',
          reponses: [
            { texte: 'Non, le registre est très incomplet', icone: '📖', correcte: true },
            { texte: 'Oui, sinon on en aurait trouvé', icone: '🔍' },
            { texte: 'Oui, la fossilisation est systématique', icone: '✅' },
          ],
          explication:
            'La fossilisation est si improbable que l’absence de fossile ne prouve jamais l’absence d’espèce.',
        },
      ],
    },
  },
  {
    cardId: 'le-vent',
    questions: {
      '3-5': [
        {
          id: 'air-chaud',
          question: 'Que fait l’air quand il est bien chaud ?',
          reponses: [
            { texte: 'Il monte', icone: '⬆️', correcte: true },
            { texte: 'Il descend', icone: '⬇️' },
          ],
          explication: 'L’air chaud est plus léger, alors il monte et le vent se crée.',
        },
      ],
      '6-8': [
        {
          id: 'origine-vent',
          question: 'D’où vient le vent ?',
          reponses: [
            { texte: 'De différences de température et de pression', icone: '🌡️', correcte: true },
            { texte: 'Des arbres qui bougent leurs branches', icone: '🌳' },
            { texte: 'De la rotation des nuages', icone: '☁️' },
          ],
          explication:
            'Le Soleil chauffe inégalement : l’air se déplace des zones de haute pression vers les basses.',
        },
      ],
      '9-12': [
        {
          id: 'coriolis',
          question: 'Pourquoi les dépressions s’enroulent-elles en spirale ?',
          reponses: [
            { texte: 'À cause de la rotation de la Terre', icone: '🌍', correcte: true },
            { texte: 'À cause de l’attraction de la Lune', icone: '🌙' },
            { texte: 'À cause du relief des montagnes', icone: '⛰️' },
          ],
          explication:
            'La force de Coriolis dévie les vents, dans un sens opposé selon l’hémisphère.',
        },
      ],
    },
  },
];
