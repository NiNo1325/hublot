import type { QuizCarte } from '@/lib/types';

/**
 * Questions du domaine « Le vivant ».
 *
 * Idées reçues visées : la plante qui mangerait la terre, le sang bleu dans
 * les veines, les microbes tous nuisibles, le cerveau qui s'éteindrait la
 * nuit, l'hérédité comprise comme un mélange.
 */
export const quiz: QuizCarte[] = [
  {
    cardId: 'comment-poussent-les-plantes',
    questions: {
      '3-5': [
        {
          id: 'plante-nourriture',
          question: 'Comment la plante trouve-t-elle sa nourriture ?',
          reponses: [
            { texte: 'Elle la fabrique avec la lumière', icone: '☀️', correcte: true },
            { texte: 'Elle mange la terre', icone: '🟫' },
          ],
          explication: 'Avec la lumière, l’eau et l’air, la plante fabrique elle-même sa nourriture.',
        },
      ],
      '6-8': [
        {
          id: 'gaz-rejete',
          question: 'Quel gaz la plante rejette-t-elle en fabriquant son sucre ?',
          reponses: [
            { texte: "De l'oxygène", icone: '🫧', correcte: true },
            { texte: 'Du dioxyde de carbone', icone: '💨' },
            { texte: 'De la vapeur d’eau seulement', icone: '💧' },
          ],
          explication:
            'Les plantes rejettent l’oxygène que nous respirons : elles nourrissent leur monde en se nourrissant.',
        },
      ],
      '9-12': [
        {
          id: 'masse-arbre',
          question: "D'où vient l'essentiel de la masse d'un arbre ?",
          reponses: [
            { texte: 'Du carbone extrait de l’air', icone: '💨', correcte: true },
            { texte: 'Des minéraux puisés dans le sol', icone: '🟫' },
            { texte: 'De l’eau absorbée par les racines', icone: '💧' },
          ],
          explication:
            'Un arbre est en grande partie de l’air solidifié : le sol ne fournit que de l’eau et des minéraux.',
        },
      ],
    },
  },
  {
    cardId: 'le-coeur-et-le-sang',
    questions: {
      '3-5': [
        {
          id: 'coeur-role',
          question: 'À quoi sert ton cœur ?',
          reponses: [
            { texte: 'À pousser le sang partout dans le corps', icone: '❤️', correcte: true },
            { texte: 'À fabriquer le sang', icone: '🏭' },
          ],
          explication: 'Le cœur est un muscle qui pousse le sang sans jamais s’arrêter.',
        },
      ],
      '6-8': [
        {
          id: 'sang-bleu',
          question: 'Le sang dans tes veines est-il bleu ?',
          reponses: [
            { texte: 'Non, il est rouge sombre', icone: '🩸', correcte: true },
            { texte: 'Oui, il devient bleu sans oxygène', icone: '💙' },
            { texte: 'Oui, on le voit à travers la peau', icone: '👀' },
          ],
          explication:
            'Le sang n’est jamais bleu. Les veines paraissent bleutées à cause de la peau qui diffuse la lumière.',
        },
      ],
      '9-12': [
        {
          id: 'echange-capillaires',
          question: 'Où l’oxygène passe-t-il du sang vers les cellules ?',
          reponses: [
            { texte: 'Dans les capillaires', icone: '🕸️', correcte: true },
            { texte: 'Dans les grosses artères', icone: '🫀' },
            { texte: 'Directement dans le cœur', icone: '❤️' },
          ],
          explication:
            'Leur paroi ne fait qu’une cellule d’épaisseur : tout l’intérêt du système tient dans cet échange.',
        },
      ],
    },
  },
  {
    cardId: 'les-microbes',
    questions: {
      '3-5': [
        {
          id: 'microbes-gentils',
          question: 'Tous les microbes sont-ils méchants ?',
          reponses: [
            { texte: 'Non, beaucoup nous aident', icone: '😊', correcte: true },
            { texte: 'Oui, ils rendent tous malades', icone: '🤒' },
          ],
          explication: 'Ce sont des microbes qui font le yaourt, le pain et le fromage.',
        },
      ],
      '6-8': [
        {
          id: 'microbiote-role',
          question: 'À quoi servent les microbes de ton ventre ?',
          reponses: [
            { texte: 'Ils t’aident à digérer', icone: '🦠', correcte: true },
            { texte: 'Ils ne servent à rien', icone: '🚫' },
            { texte: 'Ils te rendent malade', icone: '🤒' },
          ],
          explication:
            'Ils digèrent ce que tes enzymes ne savent pas traiter et fabriquent des vitamines.',
        },
      ],
      '9-12': [
        {
          id: 'penicilline',
          question: 'D’où vient la pénicilline, le premier antibiotique ?',
          reponses: [
            { texte: 'D’une moisissure', icone: '🍄', correcte: true },
            { texte: 'D’une plante médicinale', icone: '🌿' },
            { texte: 'D’un minéral', icone: '🪨' },
          ],
          explication:
            'C’est un micro-organisme qui nous a donné de quoi combattre les autres : tout l’enjeu est l’équilibre, pas l’élimination.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-on-dort',
    questions: {
      '3-5': [
        {
          id: 'cerveau-nuit',
          question: 'Que fait ta tête pendant que tu dors ?',
          reponses: [
            { texte: 'Elle range ce que tu as appris', icone: '🧠', correcte: true },
            { texte: 'Elle s’éteint complètement', icone: '🌑' },
          ],
          explication: 'Le cerveau continue de travailler : il trie tes souvenirs.',
        },
      ],
      '6-8': [
        {
          id: 'sommeil-memoire',
          question: 'Pourquoi dormir aide-t-il à retenir une leçon ?',
          reponses: [
            { texte: 'Le cerveau rejoue et range les souvenirs', icone: '🧠', correcte: true },
            { texte: 'Parce qu’on se repose les yeux', icone: '👀' },
            { texte: 'Le sommeil n’a aucun effet dessus', icone: '🚫' },
          ],
          explication:
            'Ce qui a été appris est rejoué pendant la nuit et transféré vers la mémoire durable.',
        },
      ],
      '9-12': [
        {
          id: 'glymphatique',
          question: 'Que fait le système glymphatique pendant le sommeil ?',
          reponses: [
            { texte: 'Il évacue les déchets du cerveau', icone: '🧹', correcte: true },
            { texte: 'Il fabrique les rêves', icone: '💭' },
            { texte: 'Il ralentit le cœur', icone: '❤️' },
          ],
          explication:
            'L’espace entre les cellules s’élargit et le liquide circule davantage : le nettoyage est bien plus efficace la nuit.',
        },
      ],
    },
  },
  {
    cardId: 'pourquoi-on-ressemble-a-ses-parents',
    questions: {
      '3-5': [
        {
          id: 'moitie-moitie',
          question: 'D’où vient ta « notice » de fabrication ?',
          reponses: [
            { texte: 'Moitié de ta maman, moitié de ton papa', icone: '🧬', correcte: true },
            { texte: 'Entièrement de ta maman', icone: '👩' },
          ],
          explication: 'Tu reçois la moitié de chacun, ce qui te rend unique.',
        },
      ],
      '6-8': [
        {
          id: 'saut-generation',
          question: 'Un caractère peut-il sauter une génération ?',
          reponses: [
            { texte: 'Oui, on reçoit des versions entières de gènes', icone: '🔁', correcte: true },
            { texte: 'Non, tout se mélange comme deux peintures', icone: '🎨' },
            { texte: 'Non, on ressemble toujours à ses parents', icone: '👪' },
          ],
          explication:
            'L’hérédité n’est pas un mélange : un caractère peut être transmis sans s’exprimer, puis réapparaître.',
        },
      ],
      '9-12': [
        {
          id: 'mendel-darwin',
          question: 'Pourquoi l’hérédité par mélange posait-elle problème à Darwin ?',
          reponses: [
            { texte: 'Elle aurait dilué toute variation en quelques générations', icone: '💧', correcte: true },
            { texte: 'Elle rendait l’évolution trop rapide', icone: '⚡' },
            { texte: 'Elle contredisait l’existence des espèces', icone: '🦋' },
          ],
          explication:
            'L’hérédité particulaire de Mendel résout l’objection : les variations se conservent au lieu de se diluer.',
        },
      ],
    },
  },
  {
    cardId: 'comment-on-respire',
    questions: {
      '3-5': [
        {
          id: 'muscle-respire',
          question: 'Qu’est-ce qui fait entrer l’air dans ta poitrine ?',
          reponses: [
            { texte: 'Un muscle sous les poumons', icone: '💪', correcte: true },
            { texte: 'Les poumons se gonflent seuls', icone: '🎈' },
          ],
          explication: 'C’est le diaphragme : quand il descend, l’air entre tout seul.',
        },
      ],
      '6-8': [
        {
          id: 'diaphragme',
          question: 'Comment s’appelle le muscle de la respiration ?',
          reponses: [
            { texte: 'Le diaphragme', icone: '🫁', correcte: true },
            { texte: 'Le cœur', icone: '❤️' },
            { texte: 'L’estomac', icone: '🍽️' },
          ],
          explication:
            'En s’abaissant, il agrandit la poitrine, et l’air se précipite pour remplir le vide.',
        },
      ],
      '9-12': [
        {
          id: 'oxygene-pur',
          question: 'Respire-t-on de l’oxygène pur ?',
          reponses: [
            { texte: 'Non, l’air n’en contient qu’un cinquième', icone: '💨', correcte: true },
            { texte: 'Oui, on inspire de l’oxygène', icone: '🫧' },
            { texte: 'Oui, puis on rejette de l’oxygène', icone: '♻️' },
          ],
          explication:
            'L’air inspiré contient 21 % d’oxygène, l’air expiré encore 16 % : on n’en prélève qu’une fraction.',
        },
      ],
    },
  },  {
    cardId: 'le-voyage-de-la-nourriture',
    questions: {
      '3-5': [
        {
          id: 'tete-en-bas',
          question: 'Peux-tu avaler la tête en bas ?',
          reponses: [
            { texte: 'Oui, des muscles poussent', icone: '💪', correcte: true },
            { texte: 'Non, ça remonterait', icone: '🙃' },
          ],
          explication:
            'La nourriture ne tombe pas toute seule : des muscles la poussent tout au long du chemin.',
        },
      ],
      '6-8': [
        {
          id: 'ou-passe-sang',
          question: 'Où la nourriture passe-t-elle dans le sang ?',
          reponses: [
            { texte: 'Dans l’intestin grêle', icone: '🌀', correcte: true },
            { texte: 'Dans l’estomac', icone: '🫙' },
            { texte: 'Dans la bouche', icone: '👄' },
          ],
          explication:
            'L’estomac ne fait que broyer et préparer. C’est l’intestin grêle qui fait passer les nutriments dans le sang.',
        },
      ],
      '9-12': [
        {
          id: 'role-estomac',
          question: 'À quoi sert principalement l’estomac ?',
          reponses: [
            { texte: 'À broyer et attaquer chimiquement les aliments', icone: '⚗️', correcte: true },
            { texte: 'À absorber les nutriments', icone: '🩸' },
            { texte: 'À stocker l’eau du corps', icone: '💧' },
          ],
          explication:
            'À part l’alcool et quelques médicaments, presque rien n’y passe dans le sang : l’absorption se fait plus loin.',
        },
      ],
    },
  },  {
    cardId: 'le-cerveau',
    questions: {
      '3-5': [
        {
          id: 'cerveau-travaille',
          question: 'Ton cerveau travaille-t-il pendant que tu dors ?',
          reponses: [
            { texte: 'Oui, tout le temps', icone: '🌙', correcte: true },
            { texte: 'Non, il s’arrête', icone: '🛑' },
          ],
          explication: 'Il ne s’arrête jamais, même la nuit.',
        },
      ],
      '6-8': [
        {
          id: 'dix-pour-cent-mythe',
          question: 'N’utilise-t-on vraiment que dix pour cent de son cerveau ?',
          reponses: [
            { texte: 'Non, on l’utilise en entier', icone: '🧠', correcte: true },
            { texte: 'Oui, les génies en utilisent davantage', icone: '🎓' },
            { texte: 'Oui, le reste est en sommeil', icone: '😴' },
          ],
          explication:
            'Le cerveau consomme un cinquième de ton énergie : un corps ne paierait jamais ce prix pour un organe inutile aux neuf dixièmes.',
        },
      ],
      '9-12': [
        {
          id: 'gauche-droite-mythe',
          question: 'Existe-t-il des personnes « cerveau gauche » et « cerveau droit » ?',
          reponses: [
            { texte: 'Non, aucune dominance globale n’a jamais été trouvée', icone: '🔬', correcte: true },
            { texte: 'Oui : les logiques et les créatifs', icone: '🎨' },
            { texte: 'Oui, selon la main dominante', icone: '✋' },
          ],
          explication:
            'La latéralisation existe pour certaines fonctions, comme le langage, mais elle ne fonde aucune typologie de personnalité.',
        },
      ],
    },
  },  {
    cardId: 'les-os',
    questions: {
      '3-5': [
        {
          id: 'os-vivants',
          question: 'Tes os sont-ils vivants ?',
          reponses: [
            { texte: 'Oui, comme le reste de toi', icone: '❤️', correcte: true },
            { texte: 'Non, c’est comme des cailloux', icone: '🪨' },
          ],
          explication: 'Il y a du sang dedans, et ils se réparent tout seuls.',
        },
      ],
      '6-8': [
        {
          id: 'qui-repare',
          question: 'Qui répare un os cassé ?',
          reponses: [
            { texte: 'L’os lui-même', icone: '🦴', correcte: true },
            { texte: 'Le plâtre', icone: '🩹' },
            { texte: 'Le médecin, en le recollant', icone: '💉' },
          ],
          explication:
            'Le plâtre ne fait qu’immobiliser. C’est l’os, bien vivant, qui fabrique la réparation.',
        },
      ],
      '9-12': [
        {
          id: 'moelle-role',
          question: 'À quoi sert la moelle osseuse ?',
          reponses: [
            { texte: 'À fabriquer les cellules du sang', icone: '🩸', correcte: true },
            { texte: 'À amortir les chocs', icone: '🛡️' },
            { texte: 'À stocker uniquement de la graisse', icone: '🧈' },
          ],
          explication:
            'L’hématopoïèse y produit chaque jour des centaines de milliards de cellules sanguines.',
        },
      ],
    },
  },  {
    cardId: 'levolution',
    questions: {
      '3-5': [
        {
          id: 'singe-grand-parent',
          question: 'L’humain vient-il du singe ?',
          reponses: [
            { texte: 'Non, on a un grand-parent commun', icone: '👵', correcte: true },
            { texte: 'Oui, directement', icone: '🐒' },
          ],
          explication: 'Comme deux cousins : un ancêtre commun, mais l’un ne vient pas de l’autre.',
        },
      ],
      '6-8': [
        {
          id: 'girafe-cou',
          question: 'Comment la girafe a-t-elle eu un si long cou ?',
          reponses: [
            { texte: 'Celles nées avec un cou plus long ont eu plus de petits', icone: '🦒', correcte: true },
            { texte: 'À force de tendre le cou vers les feuilles', icone: '🌿' },
            { texte: 'Parce qu’elle en avait besoin', icone: '🎯' },
          ],
          explication:
            'Un individu ne s’adapte pas de son vivant : c’est la descendance qui change, sur des milliers de générations.',
        },
      ],
      '9-12': [
        {
          id: 'evolution-but',
          question: 'L’évolution poursuit-elle un but ?',
          reponses: [
            { texte: 'Non, aucun — et elle ne garantit aucun progrès', icone: '🎲', correcte: true },
            { texte: 'Oui, la perfection de chaque espèce', icone: '✨' },
            { texte: 'Oui, l’intelligence', icone: '🧠' },
          ],
          explication:
            'Plus de quatre-vingt-dix-neuf pour cent des espèces ayant existé sont éteintes. Parler d’espèce « plus évoluée » n’a pas de sens.',
        },
      ],
    },
  },
];
