import type { DomainId } from './types';

/**
 * Couleurs de domaine, en valeurs littérales plutôt qu'en classes Tailwind :
 * Tailwind ne détecte pas les noms de classes construits dynamiquement, et ces
 * couleurs sont appliquées en style inline sur les hublots (fond, halo, bordure).
 *
 * `teinte` est la couleur pleine du hublot, `halo` sa lueur portée. Les deux
 * sont assez claires pour porter du texte encre en contraste AA.
 */
export interface DomainStyle {
  teinte: string;
  halo: string;
}

export const domainStyles: Record<DomainId, DomainStyle> = {
  'sciences-de-la-terre': { teinte: '#34d399', halo: 'rgba(52, 211, 153, 0.45)' },
  astronomie: { teinte: '#a5b4fc', halo: 'rgba(165, 180, 252, 0.45)' },
  biologie: { teinte: '#a3e635', halo: 'rgba(163, 230, 53, 0.45)' },
  physique: { teinte: '#38bdf8', halo: 'rgba(56, 189, 248, 0.45)' },
  chimie: { teinte: '#c4b5fd', halo: 'rgba(196, 181, 253, 0.45)' },
  ingenierie: { teinte: '#fb923c', halo: 'rgba(251, 146, 60, 0.45)' },
  informatique: { teinte: '#22d3ee', halo: 'rgba(34, 211, 238, 0.45)' },
  mathematiques: { teinte: '#fb7185', halo: 'rgba(251, 113, 133, 0.45)' },
  animaux: { teinte: '#fbbf24', halo: 'rgba(251, 191, 36, 0.45)' },
  meteo: { teinte: '#2dd4bf', halo: 'rgba(45, 212, 191, 0.45)' },
  'le-son': { teinte: '#e879f9', halo: 'rgba(232, 121, 249, 0.45)' },
  'les-dinosaures': { teinte: '#c8a97e', halo: 'rgba(200, 169, 126, 0.45)' },
  'le-corps': { teinte: '#f9a8d4', halo: 'rgba(249, 168, 212, 0.45)' },
  'les-oceans': { teinte: '#60a5fa', halo: 'rgba(96, 165, 250, 0.45)' },
  'la-cuisine': { teinte: '#fde047', halo: 'rgba(253, 224, 71, 0.45)' },
};
