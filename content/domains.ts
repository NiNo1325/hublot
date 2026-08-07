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
    accroche: { fr: 'Pourquoi la Terre tremble et crache du feu ?' },
  },
  {
    id: 'astronomie',
    icon: '🪐',
    color: 'indigo',
    labels: { fr: "L'espace" },
    accroche: { fr: 'Pourquoi la Lune change de forme ?' },
  },
  {
    id: 'biologie',
    icon: '🌱',
    color: 'lime',
    labels: { fr: 'Le vivant' },
    accroche: { fr: "Qu'est-ce qui fait battre ton cœur ?" },
  },
  {
    id: 'physique',
    icon: '🧲',
    color: 'sky',
    labels: { fr: 'La physique' },
    accroche: { fr: 'Pourquoi les choses tombent et les aimants collent ?' },
  },
  {
    id: 'chimie',
    icon: '⚗️',
    color: 'violet',
    labels: { fr: 'La chimie' },
    accroche: { fr: 'Pourquoi le pain gonfle et le fer rouille ?' },
  },
  {
    id: 'ingenierie',
    icon: '⚙️',
    color: 'orange',
    labels: { fr: 'Construire' },
    accroche: { fr: 'Comment tiennent les ponts et volent les avions ?' },
  },
  {
    id: 'informatique',
    icon: '💻',
    color: 'cyan',
    labels: { fr: 'Les ordinateurs' },
    accroche: { fr: 'Comment un ordinateur compte et se souvient ?' },
  },
  {
    id: 'mathematiques',
    icon: '🔢',
    color: 'rose',
    labels: { fr: 'Les nombres' },
    accroche: { fr: "Le zéro, l'infini, le hasard : les secrets des nombres." },
  },
  {
    id: 'animaux',
    icon: '🦊',
    color: 'amber',
    labels: { fr: 'Les animaux' },
    accroche: { fr: 'Pourquoi le chat retombe toujours sur ses pattes ?' },
  },
  {
    id: 'meteo',
    icon: '🌦️',
    color: 'teal',
    labels: { fr: 'La météo' },
    accroche: { fr: "D'où viennent la neige et la foudre ?" },
  },
];
