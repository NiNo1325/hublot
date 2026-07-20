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
  },
  {
    id: 'astronomie',
    icon: '🪐',
    color: 'indigo',
    labels: { fr: "L'espace" },
  },
  {
    id: 'biologie',
    icon: '🌱',
    color: 'lime',
    labels: { fr: 'Le vivant' },
  },
  {
    id: 'physique',
    icon: '🧲',
    color: 'sky',
    labels: { fr: 'La physique' },
  },
  {
    id: 'chimie',
    icon: '⚗️',
    color: 'violet',
    labels: { fr: 'La chimie' },
  },
  {
    id: 'ingenierie',
    icon: '⚙️',
    color: 'orange',
    labels: { fr: 'Construire' },
  },
  {
    id: 'informatique',
    icon: '💻',
    color: 'cyan',
    labels: { fr: 'Les ordinateurs' },
  },
  {
    id: 'mathematiques',
    icon: '🔢',
    color: 'rose',
    labels: { fr: 'Les nombres' },
  },
];
