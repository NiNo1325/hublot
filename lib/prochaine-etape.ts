import type { DomainId, ScienceCard } from './types';
import { badgesDomaine } from './badges';

/**
 * Ce qu'il reste à faire pour décrocher le prochain badge d'un monde.
 *
 * L'écran de Lumi affichait les deux badges sans jamais dire ce qui manquait
 * pour les obtenir. Un enfant y voyait donc deux médailles grises, sans savoir
 * si elles étaient à trois cartes ou à trente : rien ne l'appelait à revenir.
 *
 * Le calcul est volontairement ordonné — on écoute avant de répondre, donc le
 * badge d'exploration passe toujours en premier. Annoncer les deux à la fois
 * demanderait à l'enfant d'arbitrer, là où il n'y a qu'un chemin.
 */
export type Manque =
  /** Rien à faire : les deux badges sont acquis. */
  | { type: 'complet' }
  /** Il reste des cartes à écouter avant le badge 🧭. */
  | { type: 'ecouter'; combien: number }
  /** Toutes écoutées : il reste des questions à réussir avant le badge 🏅. */
  | { type: 'reussir'; combien: number };

export function prochaineEtapeDomaine(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  cartesMaitrisees: Set<string>,
  domainId: DomainId,
): Manque {
  const duDomaine = cards.filter((c) => c.domainId === domainId);
  const aEcouter = duDomaine.filter((c) => !cartesVues.has(c.id)).length;
  if (aEcouter > 0) return { type: 'ecouter', combien: aEcouter };

  const aReussir = duDomaine.filter((c) => !cartesMaitrisees.has(c.id)).length;
  if (aReussir > 0) return { type: 'reussir', combien: aReussir };

  return { type: 'complet' };
}

export interface BilanGlobal {
  cartesEcoutees: number;
  cartesTotal: number;
  cartesReussies: number;
  /** Mondes dont toutes les cartes sont écoutées (badge 🧭). */
  mondesExplores: number;
  /** Mondes dont toutes les questions sont réussies (badge 🏅). */
  mondesMaitrises: number;
  mondesTotal: number;
}

/**
 * Le bilan sur tout le catalogue, pour situer l'enfant dans l'ensemble et pas
 * seulement dans un monde.
 *
 * Les deux comptes de mondes sortent d'ici plutôt que de chaque écran : le menu
 * de Lumi et la page des mondes affichent le même chiffre, et deux calculs
 * jumeaux finissent toujours par diverger.
 */
export function bilanGlobal(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  cartesMaitrisees: Set<string>,
  domainIds: DomainId[],
): BilanGlobal {
  // Les badges viennent de `badgesDomaine`, la même règle que les rangées de la
  // page des mondes : une seconde définition de « exploré » finirait par dire
  // autre chose que les médailles affichées juste à côté.
  const badges = domainIds.map((id) => badgesDomaine(cards, cartesVues, cartesMaitrisees, id));

  return {
    cartesEcoutees: cards.reduce((n, c) => (cartesVues.has(c.id) ? n + 1 : n), 0),
    cartesTotal: cards.length,
    cartesReussies: cards.reduce((n, c) => (cartesMaitrisees.has(c.id) ? n + 1 : n), 0),
    mondesExplores: badges.filter((b) => b.explore).length,
    mondesMaitrises: badges.filter((b) => b.maitrise).length,
    mondesTotal: domainIds.length,
  };
}
