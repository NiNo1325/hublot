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
};
