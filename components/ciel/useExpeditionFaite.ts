'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';
import { jourStocke } from '@/lib/expedition';

const CLE = 'science.expedition.v1';

/*
  Même plomberie que les autres stockages : un abonnement partagé, pour que
  l'accueil et la page du parcours ne se contredisent pas sur l'état du jour.
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
 * L'expédition du jour est-elle déjà faite ?
 *
 * On stocke la date de la dernière expédition terminée, pas un drapeau : un
 * booléen exigerait de le remettre à zéro à minuit, donc une minuterie, donc un
 * bug le jour où l'application reste ouverte. Comparer deux dates ne peut pas
 * se désynchroniser.
 */
export function useExpeditionFaite() {
  const stocke = useSyncExternalStore(souscrire, lire, lireServeur);
  const aujourdhui = jourStocke(new Date());

  const marquerFaite = useCallback(() => {
    writeStored(CLE, jourStocke(new Date()));
    for (const notifier of abonnes) notifier();
  }, []);

  return { faite: stocke === aujourdhui, marquerFaite };
}
