import type { DomainId, ScienceCard } from '@/lib/types';

/**
 * Socle gratuit du freemium.
 *
 * Toujours ouvert : le domaine « L'espace » (astronomie) en entier — l'accroche
 * la plus forte pour un enfant — plus une carte phare par autre domaine, pour
 * donner un aperçu de chaque thème. Le premium est tout le reste.
 *
 * Une seule source ici plutôt qu'un drapeau sur chacune des ~100 cartes : plus
 * simple à ajuster, et une future carte d'astronomie sera gratuite sans effort.
 */
export const DOMAINE_GRATUIT: DomainId = 'astronomie';

export const EXTRAS_GRATUITS: ReadonlySet<string> = new Set([
  'les-volcans', // La Terre
  'le-coeur-et-le-sang', // Le vivant
  'pourquoi-tout-tombe', // La physique
  'le-volcan-de-vinaigre', // La chimie
  'comment-vole-un-avion', // Construire
  'comment-marche-internet', // Les ordinateurs
  'la-symetrie', // Les nombres
  'la-metamorphose-du-papillon', // Les animaux
  'la-foudre-et-le-tonnerre', // La météo
]);

export function estGratuite(card: Pick<ScienceCard, 'id' | 'domainId'>): boolean {
  return card.domainId === DOMAINE_GRATUIT || EXTRAS_GRATUITS.has(card.id);
}

export function estPremium(card: Pick<ScienceCard, 'id' | 'domainId'>): boolean {
  return !estGratuite(card);
}
