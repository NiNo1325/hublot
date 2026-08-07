import type { DomainId, ScienceCard } from './types';

export interface ProgressionDomaine {
  vues: number;
  total: number;
}

/**
 * Progression d'un domaine : nombre de cartes écoutées sur le total du domaine.
 * Fonction pure (aucun accès au navigateur), pour rester testable en node.
 */
export function progressionDomaine(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  domainId: DomainId,
): ProgressionDomaine {
  const duDomaine = cards.filter((c) => c.domainId === domainId);
  const vues = duDomaine.reduce((n, c) => (cartesVues.has(c.id) ? n + 1 : n), 0);
  return { vues, total: duDomaine.length };
}
