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
    labels: { fr: 'La Terre' },
    accroche: { fr: 'Sous tes pieds, la Terre tremble et crache du feu.' },
  },
  {
    id: 'astronomie',
    icon: '🪐',
    color: 'indigo',
    labels: { fr: "L'espace" },
    accroche: { fr: 'Chaque nuit, la Lune change de visage.' },
  },
  {
    id: 'biologie',
    icon: '🌱',
    color: 'lime',
    labels: { fr: 'Le vivant' },
    accroche: { fr: "Dans ta poitrine, un moteur bat sans jamais s'arrêter." },
  },
  {
    id: 'physique',
    icon: '🧲',
    color: 'sky',
    labels: { fr: 'La physique' },
    accroche: { fr: 'Des forces invisibles font tomber, coller et flotter.' },
  },
  {
    id: 'chimie',
    icon: '⚗️',
    color: 'violet',
    labels: { fr: 'La chimie' },
    accroche: { fr: 'Le pain gonfle, le fer rouille : la matière se transforme.' },
  },
  {
    id: 'ingenierie',
    icon: '⚙️',
    color: 'orange',
    labels: { fr: 'Construire' },
    accroche: { fr: "Des ponts qui tiennent, des avions qui volent — rien n'est magique." },
  },
  {
    id: 'informatique',
    icon: '💻',
    color: 'cyan',
    labels: { fr: 'Les ordinateurs' },
    accroche: { fr: 'Avec des 0 et des 1, la machine compte et se souvient.' },
  },
  {
    id: 'mathematiques',
    icon: '🔢',
    color: 'rose',
    labels: { fr: 'Les nombres' },
    accroche: { fr: 'Le zéro et l\'infini cachent de drôles de secrets.' },
  },
  {
    id: 'animaux',
    icon: '🦊',
    color: 'amber',
    labels: { fr: 'Les animaux' },
    accroche: { fr: 'Le chat retombe sur ses pattes, chaque animal a sa ruse.' },
  },
  {
    id: 'meteo',
    icon: '🌦️',
    color: 'teal',
    labels: { fr: 'La météo' },
    accroche: { fr: 'Neige, foudre, brouillard : le ciel fabrique tout ça.' },
  },
  {
    id: 'le-son',
    icon: '🎵',
    color: 'fuchsia',
    labels: { fr: 'Le son' },
    accroche: { fr: 'La même corde peut chanter grave ou aigu, il suffit de la raccourcir.' },
  },
  {
    id: 'les-dinosaures',
    icon: '🦕',
    color: 'stone',
    labels: { fr: 'Les dinosaures' },
    accroche: { fr: 'Sous nos pieds dort un monde de géants disparus il y a des millions d’années.' },
  },
  {
    id: 'le-corps',
    icon: '🧍',
    color: 'pink',
    labels: { fr: 'Le corps' },
    accroche: { fr: 'Sous ta peau, des muscles tirent et des capteurs veillent sans que tu y penses.' },
  },
  {
    id: 'les-oceans',
    icon: '🌊',
    color: 'blue',
    labels: { fr: 'Les océans' },
    accroche: { fr: 'Tout au fond, dans le noir glacé, des animaux fabriquent leur propre lumière.' },
  },
  {
    id: 'la-cuisine',
    icon: '🍳',
    color: 'yellow',
    labels: { fr: 'La cuisine' },
    accroche: { fr: 'Dans la casserole, la matière change de couleur, de goût et de forme.' },
  },
];
