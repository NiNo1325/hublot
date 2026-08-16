import type { Localise } from '@/lib/types';

/**
 * Les expéditions : trois cartes, un fil, une fin.
 *
 * C'est la réponse au « pourquoi revenir demain ». Une expédition se termine —
 * trois cartes, pas une de plus — et ce n'est pas un détail : dans une
 * application pour enfants, celui qui décide du retour n'est pas l'utilisateur
 * mais le parent, et un parent ne relance que ce qui s'arrête tout seul. Une
 * application sans fin, il faut l'arracher des mains, et on ne la rouvre plus.
 *
 * Le fil traverse les mondes exprès : c'est ce qui donne l'impression d'une
 * science qui se tient, plutôt que de quinze rayons séparés. « Tout ce qui
 * vole » met l'avion, l'oiseau migrateur et le dinosaure à plumes côte à côte,
 * et c'est là que se fabrique l'idée qu'ils ont quelque chose en commun.
 *
 * Aucune récompense propre : les trois cartes rapportent leurs étoiles comme
 * n'importe quelles cartes. L'expédition ne paie pas mieux, elle propose mieux.
 */
export interface Expedition {
  id: string;
  emoji: string;
  titre: Localise<string>;
  /** Exactement trois cartes de `content/cards.ts` (vérifié par les tests). */
  cartes: readonly [string, string, string];
}

export const expeditions: Expedition[] = [
  {
    id: 'ce-qui-vole',
    emoji: '🕊️',
    titre: { fr: 'Tout ce qui vole', en: 'Everything that flies' },
    cartes: ['comment-vole-un-avion', 'la-migration-des-oiseaux', 'des-dinosaures-a-plumes'],
  },
  {
    id: 'leau',
    emoji: '💧',
    titre: { fr: 'L’eau dans tous ses états', en: 'Water in every state' },
    cartes: ['cycle-de-leau', 'les-etats-de-la-matiere', 'la-neige'],
  },
  {
    id: 'ce-qui-fait-du-bruit',
    emoji: '🔊',
    titre: { fr: 'Ce qui fait du bruit', en: 'Things that make noise' },
    cartes: [
      'comment-voyage-le-son',
      'la-foudre-et-le-tonnerre',
      'lecholocation-de-la-chauve-souris',
    ],
  },
  {
    id: 'les-couleurs',
    emoji: '🌈',
    titre: { fr: 'La lumière et les couleurs', en: 'Light and colours' },
    cartes: [
      'pourquoi-le-ciel-est-bleu',
      'pourquoi-on-voit-les-couleurs',
      'pourquoi-le-cameleon-change-de-couleur',
    ],
  },
  {
    id: 'le-froid',
    emoji: '❄️',
    titre: { fr: 'Le grand froid', en: 'The big freeze' },
    cartes: ['le-chaud-et-le-froid', 'le-givre', 'comment-marche-un-frigo'],
  },
  {
    id: 'ce-qui-brille',
    emoji: '✨',
    titre: { fr: 'Ce qui brille dans le noir', en: 'What glows in the dark' },
    cartes: ['les-animaux-qui-brillent', 'les-etoiles', 'le-feu'],
  },
  {
    id: 'sous-la-mer',
    emoji: '🌊',
    titre: { fr: 'Tout au fond de la mer', en: 'Deep down in the sea' },
    cartes: [
      'pourquoi-il-fait-noir-au-fond',
      'comment-les-poissons-respirent',
      'pourquoi-la-mer-est-salee',
    ],
  },
  {
    id: 'dans-ton-corps',
    emoji: '🫀',
    titre: { fr: 'Un voyage dans ton corps', en: 'A journey inside your body' },
    cartes: ['le-coeur-et-le-sang', 'pourquoi-on-eternue', 'le-voyage-de-la-nourriture'],
  },
  {
    id: 'tres-tres-grand',
    emoji: '🌌',
    titre: { fr: 'Très, très grand', en: 'Very, very big' },
    cartes: ['les-grands-nombres', 'les-trous-noirs', 'pourquoi-si-grands'],
  },
  {
    id: 'tout-petit',
    emoji: '🔬',
    titre: { fr: 'Tout, tout petit', en: 'Very, very small' },
    cartes: ['les-microbes', 'les-atomes', 'le-plancton-minuscule'],
  },
  {
    id: 'ca-tient-debout',
    emoji: '🌉',
    titre: { fr: 'Ce qui tient debout', en: 'What holds itself up' },
    cartes: ['pourquoi-les-ponts-tiennent', 'comment-on-tient-debout', 'les-os'],
  },
  {
    id: 'ca-gonfle',
    emoji: '🎆',
    titre: { fr: 'Ça gonfle et ça explose', en: 'It puffs up and it pops' },
    cartes: ['les-volcans', 'pourquoi-le-popcorn-explose', 'pourquoi-le-pain-gonfle'],
  },
  {
    id: 'le-temps-qui-passe',
    emoji: '⏳',
    titre: { fr: 'Le temps qui passe', en: 'Time passing' },
    cartes: ['il-y-a-tres-tres-longtemps', 'les-fossiles', 'pourquoi-la-pomme-brunit'],
  },
  {
    id: 'ca-flotte',
    emoji: '🛟',
    titre: { fr: 'Ça flotte ou ça coule', en: 'It floats or it sinks' },
    cartes: [
      'pourquoi-les-bateaux-flottent',
      'pourquoi-la-glace-flotte',
      'pourquoi-on-flotte-mieux-dans-la-mer',
    ],
  },
  {
    id: 'le-ciel-la-nuit',
    emoji: '🌙',
    titre: { fr: 'Le ciel de la nuit', en: 'The night sky' },
    cartes: ['jour-et-nuit', 'les-phases-de-la-lune', 'la-face-cachee-de-la-lune'],
  },
  {
    id: 'les-machines',
    emoji: '⚙️',
    titre: { fr: 'Les machines', en: 'Machines' },
    cartes: ['les-engrenages', 'les-leviers', 'quest-ce-quun-programme'],
  },
  {
    id: 'ca-pique',
    emoji: '🌶️',
    titre: { fr: 'Ça pique et ça brûle', en: 'It stings and it burns' },
    cartes: [
      'pourquoi-le-piment-brule',
      'pourquoi-loignon-fait-pleurer',
      'les-acides-et-les-bases',
    ],
  },
  {
    id: 'les-motifs',
    emoji: '🐝',
    titre: { fr: 'Les dessins de la nature', en: 'Nature’s patterns' },
    cartes: ['la-symetrie', 'comment-les-abeilles-font-le-miel', 'la-toile-de-laraignee'],
  },
  {
    id: 'les-ecrans',
    emoji: '💻',
    titre: { fr: 'L’électricité et les écrans', en: 'Electricity and screens' },
    cartes: ['lelectricite', 'comment-marche-un-ecran', 'le-wifi'],
  },
  {
    id: 'se-proteger',
    emoji: '🛡️',
    titre: { fr: 'Se protéger', en: 'Keeping safe' },
    cartes: ['la-peau-notre-bouclier', 'lhibernation', 'pourquoi-les-zebres-ont-des-rayures'],
  },
];
