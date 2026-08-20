'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';
import { cleActive, souscrireProfils } from '@/lib/profils/store';
import { ajouterScore, ecrireScores, estUnRecord, lireScores } from '@/lib/scores';

const NOM = 'chrono.v1';

/*
  Même plomberie que `useEtoiles` : un abonnement partagé, pour que deux écrans
  affichant le podium ne se contredisent pas après une partie.
*/
const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  const quitterProfils = souscrireProfils(surChangement);
  return () => {
    abonnes.delete(surChangement);
    quitterProfils();
  };
}

/*
  `useSyncExternalStore` compare les instantanés par identité : rendre un
  tableau neuf à chaque lecture ferait boucler React à l'infini. On garde donc
  la chaîne brute comme instantané, et on l'analyse au moment du rendu.
*/
function lireBrut(): string {
  return readStored(cleActive(NOM)) ?? '';
}

function lireServeur(): string {
  return '';
}

/** Le podium des meilleurs scores du Défi chrono, et de quoi l'enrichir. */
export function useMeilleursScores() {
  const brut = useSyncExternalStore(souscrire, lireBrut, lireServeur);
  const scores = lireScores(brut);

  const enregistrerScore = useCallback((score: number) => {
    const podium = ajouterScore(lireScores(readStored(cleActive(NOM))), score);
    writeStored(cleActive(NOM), ecrireScores(podium));
    for (const notifier of abonnes) notifier();
  }, []);

  return {
    scores,
    meilleur: scores[0] ?? 0,
    estUnRecord: (score: number) => estUnRecord(scores, score),
    enregistrerScore,
  };
}
