'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';

const CLE = 'science.cartesMaitrisees.v1';

/** Sérialisation : identifiants séparés par des virgules (comme les cartes vues). */
export function lireMaitrisees(brut: string): Set<string> {
  return new Set(brut.split(',').filter(Boolean));
}

export function ecrireMaitrisees(set: Set<string>): string {
  return [...set].join(',');
}

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

function publier(valeur: string) {
  writeStored(CLE, valeur);
  for (const notifier of abonnes) notifier();
}

/**
 * Cartes réussies au moins une fois au quizz.
 *
 * Alimente les badges « maîtrisé » de chaque domaine. Publié comme les cartes
 * vues : la grille des mondes et l'écran collection se mettent à jour dès qu'une
 * carte est maîtrisée.
 */
export function useCartesMaitrisees() {
  const brut = useSyncExternalStore(souscrire, lire, lireServeur);

  const marquerMaitrisee = useCallback((cardId: string) => {
    const actuelles = lireMaitrisees(readStored(CLE) ?? '');
    if (actuelles.has(cardId)) return;
    actuelles.add(cardId);
    publier(ecrireMaitrisees(actuelles));
  }, []);

  const oublierMaitrisees = useCallback(() => {
    publier('');
  }, []);

  return { cartesMaitrisees: lireMaitrisees(brut), marquerMaitrisee, oublierMaitrisees };
}
