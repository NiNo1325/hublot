import type { DomainId, ScienceCard } from './types';

/**
 * Badges d'un domaine :
 * - `explore` : toutes ses cartes ont été écoutées ;
 * - `maitrise` : toutes ses cartes ont été réussies au moins une fois au quizz.
 * Fonction pure, testable en node.
 */
export function badgesDomaine(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  cartesMaitrisees: Set<string>,
  domainId: DomainId,
): { explore: boolean; maitrise: boolean } {
  const duDomaine = cards.filter((c) => c.domainId === domainId);
  if (duDomaine.length === 0) return { explore: false, maitrise: false };
  return {
    explore: duDomaine.every((c) => cartesVues.has(c.id)),
    maitrise: duDomaine.every((c) => cartesMaitrisees.has(c.id)),
  };
}
