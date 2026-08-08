'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';
import { lireEtoiles } from '@/lib/etoiles';

const CLE = 'science.etoiles.v1';

const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function lire(): string {
  return readStored(CLE) ?? '0';
}

function lireServeur(): string {
  return '0';
}

function publier(valeur: string) {
  writeStored(CLE, valeur);
  for (const notifier of abonnes) notifier();
}

/**
 * Total d'étoiles gagnées au quizz, source de la progression.
 *
 * Publié comme les cartes vues : tout composant abonné (l'écran de quizz, le
 * menu) se met à jour dès qu'on gagne une étoile.
 */
export function useEtoiles() {
  const brut = useSyncExternalStore(souscrire, lire, lireServeur);

  const gagnerEtoiles = useCallback((n: number) => {
    if (n <= 0) return;
    const total = lireEtoiles(readStored(CLE)) + Math.floor(n);
    publier(String(total));
  }, []);

  const oublierEtoiles = useCallback(() => {
    publier('0');
  }, []);

  return { etoiles: lireEtoiles(brut), gagnerEtoiles, oublierEtoiles };
}
