'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';

const CLE = 'science.cartesVues.v1';

/*
  Source externe au rendu React, publiée comme la tranche d'âge : tout
  composant abonné se met à jour dès qu'une carte est écoutée.
*/
const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function lire(): string {
  return readStored(CLE) ?? '';
}

function lireServeur(): string {
  return '';
}

/**
 * Cartes que l'enfant a déjà ouvertes.
 *
 * Le quizz ne pose de questions que sur celles-ci : interroger sur un contenu
 * jamais entendu n'évalue rien et décourage. C'est aussi ce qui donne une
 * raison d'explorer davantage.
 */
export function useCartesVues() {
  const brut = useSyncExternalStore(souscrire, lire, lireServeur);

  const marquerVue = useCallback((cardId: string) => {
    const actuelles = new Set((readStored(CLE) ?? '').split(',').filter(Boolean));
    if (actuelles.has(cardId)) return;
    actuelles.add(cardId);
    writeStored(CLE, [...actuelles].join(','));
    for (const notifier of abonnes) notifier();
  }, []);

  return {
    cartesVues: new Set(brut.split(',').filter(Boolean)),
    marquerVue,
  };
}
