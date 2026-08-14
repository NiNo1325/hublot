import type { Locale, Localise } from '@/lib/types';

/**
 * Lit une valeur déclinée par langue, avec repli sur le français.
 *
 * Tout le contenu passe par ici plutôt que par un `valeur[locale] ?? valeur.fr`
 * recopié partout : la traduction avance domaine par domaine, et une carte pas
 * encore traduite doit s'afficher en français au lieu de laisser un trou. La
 * règle de repli tient donc en un seul endroit.
 */
export function localise<T>(valeur: Localise<T>, locale: Locale): T {
  return valeur[locale] ?? valeur.fr;
}
