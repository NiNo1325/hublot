'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { AGE_RANGES, type AgeRange } from '@/lib/types';
import { readStored, writeStored } from '@/lib/storage';

const STORAGE_KEY = 'science.ageRange.v1';

function parseAgeRange(value: string | null): AgeRange | null {
  return AGE_RANGES.includes(value as AgeRange) ? (value as AgeRange) : null;
}

/*
  Le stockage est une source externe au rendu React. On le publie via
  `useSyncExternalStore` pour que tout composant abonné se remette à jour quand
  l'âge change, sans faire circuler l'information en props.
*/
const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function lireInstantane(): string | null {
  return readStored(STORAGE_KEY);
}

/** Le serveur ne connaît aucun âge : l'écran de sélection est le rendu par défaut. */
function lireInstantaneServeur(): string | null {
  return null;
}

/**
 * Tranche d'âge courante.
 *
 * `status` distingue « pas encore lu côté client » de « lu, aucun âge
 * enregistré » : les deux produisent des écrans différents, sans quoi l'accueil
 * clignoterait à chaque visite de retour.
 */
export function useAgeRange() {
  const brut = useSyncExternalStore(
    souscrire,
    lireInstantane,
    lireInstantaneServeur,
  );
  const monte = useSyncExternalStore(
    souscrire,
    () => true,
    () => false,
  );

  const chooseAgeRange = useCallback((value: AgeRange) => {
    writeStored(STORAGE_KEY, value);
    for (const notifier of abonnes) notifier();
  }, []);

  return {
    ageRange: parseAgeRange(brut),
    status: monte ? ('pret' as const) : ('chargement' as const),
    chooseAgeRange,
  };
}
