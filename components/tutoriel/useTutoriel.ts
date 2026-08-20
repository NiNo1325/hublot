'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';
import { cleActive, souscrireProfils } from '@/lib/profils/store';

/**
 * État du tutoriel de présentation.
 *
 * `vu` est persisté (on ne présente qu'une fois, au premier lancement) ;
 * `ouvert` est un état de session, publié comme une source externe pour que
 * Réglages (« Revoir la présentation ») puisse le rouvrir depuis un autre écran.
 */
const NOM_VU = 'tutoVu.v1';

const abonnes = new Set<() => void>();
let ouvert = false;

function notifier() {
  for (const surChangement of abonnes) surChangement();
}
function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  const quitterProfils = souscrireProfils(surChangement);
  return () => {
    abonnes.delete(surChangement);
    quitterProfils();
  };
}
function lireOuvert() {
  return ouvert;
}
function lireServeur() {
  return false;
}

/** Ouvre le tutoriel (auto au 1er lancement, ou depuis Réglages). */
export function ouvrirTutoriel() {
  if (ouvert) return;
  ouvert = true;
  notifier();
}

/** Déjà vu ? (lecture directe du stockage, côté client uniquement) */
export function tutoDejaVu(): boolean {
  return readStored(cleActive(NOM_VU)) === '1';
}

export function useTutoriel() {
  const estOuvert = useSyncExternalStore(souscrire, lireOuvert, lireServeur);
  const fermer = useCallback(() => {
    writeStored(cleActive(NOM_VU), '1');
    ouvert = false;
    notifier();
  }, []);
  return { estOuvert, fermer };
}
