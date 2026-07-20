import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « La chimie ».
 *
 * Idées reçues visées : la mousse du volcan prise pour de la lave, la vapeur
 * confondue avec le panache blanc, le sucre qui « fondrait » ou disparaîtrait,
 * l'air assimilé à du vide, le feu pris pour une matière.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'le-volcan-de-vinaigre',
    questions: {
      '3-5': [
        {
          id: 'mousse-chaude',
          question: 'La mousse qui déborde du pot, est-elle brûlante ?',
          reponses: [
            { texte: 'Non, elle est froide', icone: '🫧', correcte: true },
            { texte: 'Oui, comme un vrai volcan', icone: '🌋' },
          ],
          explication: 'Ce n’est ni chaud ni dangereux : juste du liquide plein de bulles.',
        },
      ],
      '6-8': [
        {
          id: 'gaz-bulles',
          question: 'Que contiennent les bulles qui se forment ?',
          reponses: [
            { texte: 'Du dioxyde de carbone', icone: '💨', correcte: true },
            { texte: 'De l’air ordinaire', icone: '🌬️' },
            { texte: 'De la vapeur d’eau brûlante', icone: '♨️' },
          ],
          explication:
            'Le mélange fabrique un gaz nouveau, celui-là même que tu expires en respirant.',
        },
      ],
      '9-12': [
        {
          id: 'melange-ou-reaction',
          question: 'Peut-on récupérer le vinaigre et le bicarbonate après coup ?',
          reponses: [
            { texte: 'Non, ils se sont transformés', icone: '🔀', correcte: true },
            { texte: 'Oui, en laissant évaporer l’eau', icone: '💧' },
            { texte: 'Oui, en filtrant le mélange', icone: '🧫' },
          ],
          explication:
            'C’est une transformation chimique : les atomes se sont réorganisés, contrairement au sel dissous qu’une évaporation restitue.',
        },
      ],
    },
  },
  {
    cardId: 'les-etats-de-la-matiere',
    questions: {
      '3-5': [
        {
          id: 'glacon-fondu',
          question: 'Un glaçon fond dans ton verre. L’eau a-t-elle disparu ?',
          reponses: [
            { texte: 'Non, elle est devenue liquide', icone: '💧', correcte: true },
            { texte: 'Oui, elle s’est envolée', icone: '💨' },
          ],
          explication: 'Rien ne se perd : le glaçon est simplement devenu de l’eau.',
        },
      ],
      '6-8': [
        {
          id: 'vapeur-invisible',
          question: 'Le nuage blanc au-dessus d’une casserole, c’est de la vapeur ?',
          reponses: [
            { texte: 'Non, ce sont des gouttelettes refroidies', icone: '💧', correcte: true },
            { texte: 'Oui, c’est de la vapeur d’eau', icone: '♨️' },
            { texte: 'Oui, c’est de la fumée', icone: '💨' },
          ],
          explication:
            'La vapeur d’eau est totalement invisible. Ce qu’on voit est déjà recondensé.',
        },
      ],
      '9-12': [
        {
          id: 'temperature-palier',
          question: 'Que fait la température pendant qu’un glaçon fond ?',
          reponses: [
            { texte: 'Elle ne bouge pas', icone: '🌡️', correcte: true },
            { texte: 'Elle monte régulièrement', icone: '📈' },
            { texte: 'Elle descend', icone: '📉' },
          ],
          explication:
            'L’énergie sert à rompre les liaisons, pas à élever la température : un mélange eau-glace reste à zéro degré.',
        },
      ],
    },
  },
  {
    cardId: 'ou-va-le-sucre-dans-leau',
    questions: {
      '3-5': [
        {
          id: 'sucre-cache',
          question: 'Le sucre a disparu dans l’eau. Comment le savoir ?',
          reponses: [
            { texte: 'En goûtant : c’est sucré', icone: '👅', correcte: true },
            { texte: 'Il est vraiment parti', icone: '🕳️' },
          ],
          explication: 'Le sucre est toujours là, réparti partout dans le verre.',
        },
      ],
      '6-8': [
        {
          id: 'fondre-ou-dissoudre',
          question: 'Le sucre « fond »-il dans l’eau ?',
          reponses: [
            { texte: 'Non, il se dissout', icone: '🥄', correcte: true },
            { texte: 'Oui, comme le chocolat qui chauffe', icone: '🍫' },
            { texte: 'Oui, il devient liquide', icone: '💧' },
          ],
          explication:
            'Fondre, c’est passer du solide au liquide par la chaleur. Ici, les grains se dispersent entre les molécules d’eau.',
        },
      ],
      '9-12': [
        {
          id: 'masse-solution',
          question: 'Cent grammes d’eau plus dix de sucre donnent quelle masse ?',
          reponses: [
            { texte: 'Cent dix grammes', icone: '⚖️', correcte: true },
            { texte: 'Cent grammes, le sucre disparaît', icone: '🕳️' },
            { texte: 'Un peu moins, à cause du mélange', icone: '📉' },
          ],
          explication:
            'La masse se conserve rigoureusement. Seul le volume augmente moins que prévu, le sucre se logeant entre les molécules d’eau.',
        },
      ],
    },
  },
  {
    cardId: 'de-quoi-est-fait-lair',
    questions: {
      '3-5': [
        {
          id: 'air-existe',
          question: 'L’air, est-ce que c’est du vide ?',
          reponses: [
            { texte: 'Non, il remplit les ballons', icone: '🎈', correcte: true },
            { texte: 'Oui, il n’y a rien du tout', icone: '🕳️' },
          ],
          explication: 'L’air est bien de la matière : il gonfle les ballons et se sent sur la peau.',
        },
      ],
      '6-8': [
        {
          id: 'gaz-majoritaire',
          question: 'Quel gaz est le plus abondant dans l’air ?',
          reponses: [
            { texte: 'L’azote', icone: '🔵', correcte: true },
            { texte: 'L’oxygène', icone: '🫁' },
            { texte: 'Le dioxyde de carbone', icone: '💨' },
          ],
          explication:
            'L’air contient environ soixante-dix-huit pour cent d’azote, contre seulement vingt et un pour cent d’oxygène.',
        },
      ],
      '9-12': [
        {
          id: 'paille-pression',
          question: 'Quand tu bois avec une paille, qu’est-ce qui fait monter le liquide ?',
          reponses: [
            { texte: 'La pression de l’air qui pousse', icone: '💨', correcte: true },
            { texte: 'Ta bouche qui aspire le liquide', icone: '👄' },
            { texte: 'Le vide qui attire', icone: '🕳️' },
          ],
          explication:
            'Tu réduis la pression dans la paille, et l’air extérieur pousse le liquide vers le haut. Le vide n’attire rien.',
        },
      ],
    },
  },
  {
    cardId: 'le-feu',
    questions: {
      '3-5': [
        {
          id: 'couvercle',
          question: 'Tu poses un couvercle sur une flamme. Que se passe-t-il ?',
          reponses: [
            { texte: 'Elle s’éteint', icone: '🚫', correcte: true },
            { texte: 'Elle grandit', icone: '🔥' },
          ],
          explication: 'Sans air, le feu ne peut plus continuer.',
        },
      ],
      '6-8': [
        {
          id: 'triangle-feu',
          question: 'De quoi le feu a-t-il besoin pour exister ?',
          reponses: [
            { texte: 'D’un combustible, d’oxygène et de chaleur', icone: '🔺', correcte: true },
            { texte: 'Seulement d’une allumette', icone: '🔥' },
            { texte: 'Uniquement de bois sec', icone: '🪵' },
          ],
          explication:
            'C’est le triangle du feu : retirer un seul de ces trois éléments suffit à éteindre.',
        },
      ],
      '9-12': [
        {
          id: 'flamme-au-dessus',
          question: 'Pourquoi la flamme se trouve-t-elle au-dessus de la bûche ?',
          reponses: [
            { texte: 'Ce sont les gaz dégagés qui brûlent', icone: '💨', correcte: true },
            { texte: 'Parce que la chaleur monte', icone: '⬆️' },
            { texte: 'Parce que le bois brûle en surface', icone: '🪵' },
          ],
          explication:
            'La chaleur décompose d’abord le bois en gaz volatils : ce sont eux qui s’enflamment, au-dessus de la bûche.',
        },
      ],
    },
  },
];
