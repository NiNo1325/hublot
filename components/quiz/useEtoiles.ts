'use client';

import { useCartesVues } from '@/components/cards/useCartesVues';

/**
 * Les étoiles : une par carte écoutée pour la première fois.
 *
 * Elles ne sont plus stockées : elles **se déduisent** du nombre de cartes
 * découvertes. Un compteur séparé ne pouvait que diverger de la réalité — et
 * c'est exactement ce qui est arrivé sous l'économie précédente, où chaque
 * bonne réponse en ajoutait sans plafond, si bien que le rang finissait par
 * mesurer l'endurance au quizz plutôt que la découverte.
 *
 * C'est la monnaie du plaisir : explorer librement rapporte, sans jamais avoir
 * à répondre à une question. Elle fait grandir Lumi et garnit son cabinet.
 * Comprendre, c'est l'autre monnaie — la clé, dans `lib/cles.ts`.
 *
 * Le hook garde son nom et sa forme pour tous ses appelants ; seul son moteur a
 * changé. Il n'a plus de mutateur : on ne décrète pas une étoile, on écoute une
 * carte.
 */
export function useEtoiles() {
  const { cartesVues } = useCartesVues();
  return { etoiles: cartesVues.size };
}
