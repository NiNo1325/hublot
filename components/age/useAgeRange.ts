'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { AGE_RANGES, type AgeRange } from '@/lib/types';
import { readStored, writeStored } from '@/lib/storage';
import { ageDepuisTranche, trancheDepuisAge } from '@/lib/age';

const KEY_AGE = 'science.age.v1';
// Ancienne clé (tranche). Encore lue pour migrer les utilisateurs existants,
// jamais écrite : la source de vérité est désormais l'âge exact.
const KEY_TRANCHE = 'science.ageRange.v1';

function parseAgeRange(value: string | null): AgeRange | null {
  return AGE_RANGES.includes(value as AgeRange) ? (value as AgeRange) : null;
}

function ageValide(value: string | null): number | null {
  if (value == null) return null;
  const n = Number(value);
  return Number.isInteger(n) && n >= 3 && n <= 12 ? n : null;
}

/*
  Âge résolu : la nouvelle clé si elle existe, sinon dérivé de l'ancienne tranche
  (migration douce, en lecture seule). Pur : aucune écriture ici, pour rester un
  `getSnapshot` valide.
*/
function lireAge(): number | null {
  const direct = ageValide(readStored(KEY_AGE));
  if (direct != null) return direct;
  const tranche = parseAgeRange(readStored(KEY_TRANCHE));
  return tranche ? ageDepuisTranche(tranche) : null;
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

function lireInstantane(): number | null {
  return lireAge();
}

/** Le serveur ne connaît aucun âge : l'écran de sélection est le rendu par défaut. */
function lireInstantaneServeur(): number | null {
  return null;
}

/**
 * Âge exact (3–12) et tranche dérivée.
 *
 * `status` distingue « pas encore lu côté client » de « lu, aucun âge » : les
 * deux produisent des écrans différents, sans quoi l'accueil clignoterait à
 * chaque visite de retour.
 */
export function useAgeRange() {
  const age = useSyncExternalStore(souscrire, lireInstantane, lireInstantaneServeur);
  const monte = useSyncExternalStore(
    souscrire,
    () => true,
    () => false,
  );

  const choisirAge = useCallback((valeur: number) => {
    writeStored(KEY_AGE, String(valeur));
    for (const notifier of abonnes) notifier();
  }, []);

  return {
    age,
    ageRange: age != null ? trancheDepuisAge(age) : null,
    status: monte ? ('pret' as const) : ('chargement' as const),
    choisirAge,
  };
}
