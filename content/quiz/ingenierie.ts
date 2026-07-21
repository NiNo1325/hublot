import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Construire ».
 *
 * Fil conducteur : rien n'est gratuit. Le levier comme l'engrenage échangent
 * de la force contre de la distance, et aucune machine simple ne crée
 * d'énergie. La portance et la flottaison corrigent quant à elles deux
 * explications fausses très répandues.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'pourquoi-les-ponts-tiennent',
    questions: {
      '3-5': [
        {
          id: 'forme-solide',
          question: 'Quelle forme ne se déforme pas quand on pousse dessus ?',
          reponses: [
            { texte: 'Le triangle', icone: '🔺', correcte: true },
            { texte: 'Le carré', icone: '🟥' },
          ],
          explication: 'Le triangle ne bouge pas : c’est la forme la plus solide.',
        },
      ],
      '6-8': [
        {
          id: 'pourquoi-triangle',
          question: 'Pourquoi un triangle ne se déforme-t-il pas ?',
          reponses: [
            { texte: 'Ses angles dépendent de ses côtés', icone: '📐', correcte: true },
            { texte: 'Parce qu’il a moins de côtés', icone: '🔢' },
            { texte: 'Parce qu’il est plus petit', icone: '🤏' },
          ],
          explication:
            'Pour changer ses angles, il faudrait allonger un côté. Un carré, lui, se transforme en losange sans rien allonger.',
        },
      ],
      '9-12': [
        {
          id: 'arc-poussee',
          question: 'Comment un arc transmet-il la charge ?',
          reponses: [
            { texte: 'En compression, vers ses appuis', icone: '🌉', correcte: true },
            { texte: 'En traction, vers le haut', icone: '⬆️' },
            { texte: 'En flexion, au milieu', icone: '〰️' },
          ],
          explication:
            'La poussée latérale explique les contreforts des cathédrales. Le pont suspendu, lui, travaille en traction.',
        },
      ],
    },
  },
  {
    cardId: 'comment-vole-un-avion',
    questions: {
      '3-5': [
        {
          id: 'aile-pousse',
          question: 'L’aile pousse l’air vers le bas. Que fait l’air alors ?',
          reponses: [
            { texte: 'Il pousse l’avion vers le haut', icone: '⬆️', correcte: true },
            { texte: 'Il ne fait rien du tout', icone: '🚫' },
          ],
          explication: 'Quand tu pousses quelque chose, ça te repousse aussi.',
        },
      ],
      '6-8': [
        {
          id: 'vol-inverse',
          question: 'Un avion peut-il voler sur le dos ?',
          reponses: [
            { texte: 'Oui, l’aile dévie encore l’air vers le bas', icone: '✈️', correcte: true },
            { texte: 'Non, la forme de l’aile l’en empêche', icone: '🚫' },
            { texte: 'Non, il tomberait aussitôt', icone: '⬇️' },
          ],
          explication:
            'C’est la preuve que la forme seule n’explique pas tout : ce qui compte est l’air dévié vers le bas.',
        },
      ],
      '9-12': [
        {
          id: 'temps-transit',
          question: 'L’air passant au-dessus de l’aile rejoint-il celui du dessous au bord de fuite ?',
          reponses: [
            { texte: 'Non, il arrive nettement en avance', icone: '⏩', correcte: true },
            { texte: 'Oui, ils se rejoignent exactement', icone: '🤝' },
            { texte: 'Oui, c’est ce qui crée la portance', icone: '📖' },
          ],
          explication:
            'L’explication du « temps de transit égal » est fausse et mesurée comme telle : elle prédit une portance très inférieure à la réalité.',
        },
      ],
    },
  },
  {
    cardId: 'les-leviers',
    questions: {
      '3-5': [
        {
          id: 'ou-appuyer',
          question: 'Avec un levier, où faut-il appuyer pour que ce soit facile ?',
          reponses: [
            { texte: 'Le plus loin possible du pivot', icone: '📏', correcte: true },
            { texte: 'Tout près du pivot', icone: '🤏' },
          ],
          explication: 'Plus tu appuies loin du point d’appui, moins tu forces.',
        },
      ],
      '6-8': [
        {
          id: 'gain-perte',
          question: 'Un levier te fait gagner de la force. Que perds-tu ?',
          reponses: [
            { texte: 'De la distance : ta main descend beaucoup', icone: '📐', correcte: true },
            { texte: 'Rien du tout, c’est gratuit', icone: '🎁' },
            { texte: 'Du temps seulement', icone: '⏱️' },
          ],
          explication:
            'Un levier ne crée pas d’énergie, il la redistribue : dix centimètres de main pour un centimètre de charge.',
        },
      ],
      '9-12': [
        {
          id: 'moment-force',
          question: 'Qu’est-ce qui détermine l’effet d’une force sur une rotation ?',
          reponses: [
            { texte: 'La force multipliée par sa distance à l’axe', icone: '⚖️', correcte: true },
            { texte: 'La force seule', icone: '💪' },
            { texte: 'La masse de la barre', icone: '🪵' },
          ],
          explication:
            'C’est le moment de force. Il explique aussi pourquoi une poignée de porte est placée loin des gonds.',
        },
      ],
    },
  },
  {
    cardId: 'les-engrenages',
    questions: {
      '3-5': [
        {
          id: 'sens-roues',
          question: 'Deux roues dentées qui se touchent tournent comment ?',
          reponses: [
            { texte: 'Dans des sens opposés', icone: '🔄', correcte: true },
            { texte: 'Dans le même sens', icone: '➡️' },
          ],
          explication: 'Quand l’une va vers la droite, l’autre va vers la gauche.',
        },
      ],
      '6-8': [
        {
          id: 'rapport-dents',
          question: 'Une roue de 10 dents entraîne une roue de 30. Que fait la grande ?',
          reponses: [
            { texte: 'Elle tourne trois fois moins vite', icone: '🐢', correcte: true },
            { texte: 'Elle tourne trois fois plus vite', icone: '🐇' },
            { texte: 'Elle tourne à la même vitesse', icone: '⚖️' },
          ],
          explication:
            'Elle tourne plus lentement mais avec trois fois plus de force : le même compromis que le levier.',
        },
      ],
      '9-12': [
        {
          id: 'puissance-conservee',
          question: 'Un engrenage peut-il augmenter la puissance transmise ?',
          reponses: [
            { texte: 'Non, il la redistribue seulement', icone: '⚖️', correcte: true },
            { texte: 'Oui, s’il a beaucoup de dents', icone: '⚙️' },
            { texte: 'Oui, s’il tourne très vite', icone: '💨' },
          ],
          explication:
            'La puissance est le produit du couple par la vitesse : ce qu’on gagne d’un côté se perd de l’autre, aux frottements près.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-les-bateaux-flottent',
    questions: {
      '3-5': [
        {
          id: 'pate-forme',
          question: 'Une boule de pâte à modeler coule. Et si tu en fais un bol ?',
          reponses: [
            { texte: 'Elle flotte', icone: '🛶', correcte: true },
            { texte: 'Elle coule pareil', icone: '⬇️' },
          ],
          explication: 'C’est la même pâte : c’est la forme creuse qui change tout.',
        },
      ],
      '6-8': [
        {
          id: 'lourd-flotte',
          question: 'Un porte-avions de cent mille tonnes flotte. Pourquoi ?',
          reponses: [
            { texte: 'Sa coque creuse déplace beaucoup d’eau', icone: '🚢', correcte: true },
            { texte: 'Parce qu’il est léger', icone: '🪶' },
            { texte: 'Grâce à ses moteurs', icone: '⚙️' },
          ],
          explication:
            'Ce n’est pas la masse qui décide : une bille de fer de vingt grammes coule, elle.',
        },
      ],
      '9-12': [
        {
          id: 'archimede',
          question: 'À quoi est égale la poussée d’Archimède ?',
          reponses: [
            { texte: 'Au poids du fluide déplacé', icone: '💧', correcte: true },
            { texte: 'Au poids de l’objet immergé', icone: '⚓' },
            { texte: 'À la surface de la coque', icone: '📐' },
          ],
          explication:
            'À l’équilibre, elle compense exactement le poids du navire : un bateau de cent mille tonnes déplace cent mille tonnes d’eau.',
        },
      ],
    },
  },
  {
    cardId: 'les-poulies',
    questions: {
      '3-5': [
        {
          id: 'poulie-quoi',
          question: 'Une poulie, c’est quoi ?',
          reponses: [
            { texte: 'Une roue avec une corde dessus', icone: '⚙️', correcte: true },
            { texte: 'Un gros aimant', icone: '🧲' },
          ],
          explication: 'La corde passe sur la roue, et ça aide à tirer.',
        },
      ],
      '6-8': [
        {
          id: 'poulie-fixe',
          question: 'Une seule poulie fixe rend-elle la charge plus légère ?',
          reponses: [
            { texte: 'Non, elle change juste la direction', icone: '🔄', correcte: true },
            { texte: 'Oui, deux fois plus légère', icone: '🪶' },
            { texte: 'Oui, elle supprime le poids', icone: '🚫' },
          ],
          explication: 'Le vrai gain vient de plusieurs poulies reliées ensemble.',
        },
      ],
      '9-12': [
        {
          id: 'poulie-echange',
          question: 'Avec un palan, on divise la force par deux. Que paie-t-on ?',
          reponses: [
            { texte: 'On tire deux fois plus de corde', icone: '📏', correcte: true },
            { texte: 'Rien, c’est gratuit', icone: '🎁' },
            { texte: 'On perd du temps seulement', icone: '⏱️' },
          ],
          explication:
            'Comme le levier, la poulie échange de la force contre de la distance : le travail se conserve.',
        },
      ],
    },
  },
];
