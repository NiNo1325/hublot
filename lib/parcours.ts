import type { DomainDefinition, ScienceCard } from './types';

/**
 * Le chemin guidé : toutes les cartes dans l'ordre des domaines, en conservant
 * l'ordre d'origine des cartes à l'intérieur de chaque domaine. Fonction pure
 * (aucun accès au navigateur), pour rester testable en node.
 */
export function ordreParcours(
  cards: ScienceCard[],
  domains: DomainDefinition[],
): ScienceCard[] {
  const resultat: ScienceCard[] = [];
  for (const domaine of domains) {
    for (const carte of cards) {
      if (carte.domainId === domaine.id) resultat.push(carte);
    }
  }
  return resultat;
}

/**
 * La prochaine étape du parcours : la première carte de l'ordre qui n'a pas
 * encore été découverte. `null` quand tout est découvert.
 */
export function prochaineEtape(
  ordre: ScienceCard[],
  cartesVues: Set<string>,
): ScienceCard | null {
  return ordre.find((c) => !cartesVues.has(c.id)) ?? null;
}
