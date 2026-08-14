import type { DomainDefinition } from '@/lib/types';

/**
 * Les domaines scientifiques proposés au filtrage.
 * L'ordre de ce tableau est l'ordre d'affichage des pastilles.
 */
export const domains: DomainDefinition[] = [
  {
    id: 'sciences-de-la-terre',
    icon: '🌍',
    color: 'emerald',
    labels: { fr: 'La Terre', en: 'Earth' },
    accroche: {
      fr: 'Sous tes pieds, la Terre tremble et crache du feu.',
      en: 'Under your feet, the Earth shakes and spits fire.',
    },
  },
  {
    id: 'astronomie',
    icon: '🪐',
    color: 'indigo',
    labels: { fr: "L'espace", en: 'Space' },
    accroche: {
      fr: 'Chaque nuit, la Lune change de visage.',
      en: 'Every night, the Moon changes face.',
    },
  },
  {
    id: 'biologie',
    icon: '🌱',
    color: 'lime',
    labels: { fr: 'Le vivant', en: 'Life' },
    accroche: {
      fr: "Dans ta poitrine, un moteur bat sans jamais s'arrêter.",
      en: 'Inside your chest, an engine beats and never stops.',
    },
  },
  {
    id: 'physique',
    icon: '🧲',
    color: 'sky',
    labels: { fr: 'La physique', en: 'Physics' },
    accroche: {
      fr: 'Des forces invisibles font tomber, coller et flotter.',
      en: 'Invisible forces make things fall, stick and float.',
    },
  },
  {
    id: 'chimie',
    icon: '⚗️',
    color: 'violet',
    labels: { fr: 'La chimie', en: 'Chemistry' },
    accroche: {
      fr: 'Le pain gonfle, le fer rouille : la matière se transforme.',
      en: 'Bread rises, iron rusts: matter changes.',
    },
  },
  {
    id: 'ingenierie',
    icon: '⚙️',
    color: 'orange',
    labels: { fr: 'Construire', en: 'Building' },
    accroche: {
      fr: "Des ponts qui tiennent, des avions qui volent — rien n'est magique.",
      en: 'Bridges that hold, planes that fly — none of it is magic.',
    },
  },
  {
    id: 'informatique',
    icon: '💻',
    color: 'cyan',
    labels: { fr: 'Les ordinateurs', en: 'Computers' },
    accroche: {
      fr: 'Avec des 0 et des 1, la machine compte et se souvient.',
      en: 'With 0s and 1s, a machine counts and remembers.',
    },
  },
  {
    id: 'mathematiques',
    icon: '🔢',
    color: 'rose',
    labels: { fr: 'Les nombres', en: 'Numbers' },
    accroche: {
      fr: 'Le zéro et l\'infini cachent de drôles de secrets.',
      en: 'Zero and infinity hide some funny secrets.',
    },
  },
  {
    id: 'animaux',
    icon: '🦊',
    color: 'amber',
    labels: { fr: 'Les animaux', en: 'Animals' },
    accroche: {
      fr: 'Le chat retombe sur ses pattes, chaque animal a sa ruse.',
      en: 'A cat lands on its feet — every animal has its trick.',
    },
  },
  {
    id: 'meteo',
    icon: '🌦️',
    color: 'teal',
    labels: { fr: 'La météo', en: 'Weather' },
    accroche: {
      fr: 'Neige, foudre, brouillard : le ciel fabrique tout ça.',
      en: 'Snow, lightning, fog: the sky makes it all.',
    },
  },
  {
    id: 'le-son',
    icon: '🎵',
    color: 'fuchsia',
    labels: { fr: 'Le son', en: 'Sound' },
    accroche: {
      fr: 'La même corde peut chanter grave ou aigu, il suffit de la raccourcir.',
      en: 'The same string can sing low or high — just make it shorter.',
    },
  },
  {
    id: 'les-dinosaures',
    icon: '🦕',
    color: 'stone',
    labels: { fr: 'Les dinosaures', en: 'Dinosaurs' },
    accroche: {
      fr: 'Sous nos pieds dort un monde de géants disparus il y a des millions d’années.',
      en: 'Under our feet sleeps a world of giants, gone for millions of years.',
    },
  },
  {
    id: 'le-corps',
    icon: '🧍',
    color: 'pink',
    labels: { fr: 'Le corps', en: 'The body' },
    accroche: {
      fr: 'Sous ta peau, des muscles tirent et des capteurs veillent sans que tu y penses.',
      en: 'Under your skin, muscles pull and sensors keep watch without you noticing.',
    },
  },
  {
    id: 'les-oceans',
    icon: '🌊',
    color: 'blue',
    labels: { fr: 'Les océans', en: 'Oceans' },
    accroche: {
      fr: 'Tout au fond, dans le noir glacé, des animaux fabriquent leur propre lumière.',
      en: 'Far below, in the freezing dark, animals make their own light.',
    },
  },
  {
    id: 'la-cuisine',
    icon: '🍳',
    color: 'yellow',
    labels: { fr: 'La cuisine', en: 'Cooking' },
    accroche: {
      fr: 'Dans la casserole, la matière change de couleur, de goût et de forme.',
      en: 'In the pan, matter changes colour, taste and shape.',
    },
  },
];
