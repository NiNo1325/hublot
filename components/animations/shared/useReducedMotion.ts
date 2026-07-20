'use client';

import { useSyncExternalStore } from 'react';

const REQUETE = '(prefers-reduced-motion: reduce)';

function souscrire(surChangement: () => void) {
  const requete = window.matchMedia(REQUETE);
  requete.addEventListener('change', surChangement);
  return () => requete.removeEventListener('change', surChangement);
}

/**
 * Suit `prefers-reduced-motion`. Les composants d'animation s'en servent pour
 * remplacer les déplacements par des changements d'état en fondu — jamais pour
 * supprimer le visuel, qui porte ici tout le contenu pédagogique.
 *
 * `useSyncExternalStore` plutôt qu'un `useState` + `useEffect` : la préférence
 * est une source externe au rendu React, et cette API évite le rendu
 * intermédiaire à une valeur fausse. Le serveur suppose « pas de réduction ».
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    souscrire,
    () => window.matchMedia(REQUETE).matches,
    () => false,
  );
}
