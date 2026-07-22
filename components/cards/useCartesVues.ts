'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';

const CLE = 'science.cartesVues.v1';

/*
  Sérialisation : les identifiants séparés par des virgules. Du JSON serait
  cérémonieux pour une liste de slugs sans espace ni virgule, et ce format
  reste lisible à l'œil dans les outils de développement.

  Exposées séparément du hook parce qu'elles en sont la seule partie testable
  sans navigateur — le reste tient au stockage et au cycle de vie React.
*/
export function lireVues(brut: string): Set<string> {
  return new Set(brut.split(',').filter(Boolean));
}

export function ecrireVues(vues: Set<string>): string {
  return [...vues].join(',');
}

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

function publier(valeur: string) {
  writeStored(CLE, valeur);
  for (const notifier of abonnes) notifier();
}

/**
 * Cartes que l'enfant a déjà ouvertes.
 *
 * Deux usages, et c'est pourquoi le hook vit ici plutôt qu'avec le quizz : la
 * grille de Découvrir éteint les tuiles correspondantes, et le quizz ne pose
 * de questions que sur celles-ci — interroger sur un contenu jamais entendu
 * n'évalue rien et décourage.
 */
export function useCartesVues() {
  const brut = useSyncExternalStore(souscrire, lire, lireServeur);

  const marquerVue = useCallback((cardId: string) => {
    const actuelles = lireVues(readStored(CLE) ?? '');
    if (actuelles.has(cardId)) return;
    actuelles.add(cardId);
    publier(ecrireVues(actuelles));
  }, []);

  /*
    Un appareil passe souvent d'un enfant à l'autre. Sans cela, le cadet
    hériterait des cartes de l'aîné, et la grille lui mentirait dès le premier
    écran.
  */
  const oublierToutesLesVues = useCallback(() => {
    publier('');
  }, []);

  return {
    cartesVues: lireVues(brut),
    marquerVue,
    oublierToutesLesVues,
  };
}
