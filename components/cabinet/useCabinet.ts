'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';
import { objetsCabinet } from '@/content/cabinet';
import { ecrireAchats, lireAchats, solde, totalDepense } from '@/lib/portefeuille';
import { useEtoiles } from '@/components/quiz/useEtoiles';

const CLE = 'science.achats.v1';

/*
  Même plomberie que `useEtoiles` : un abonnement partagé, pour que l'étagère et
  le solde affichés ailleurs ne se contredisent pas après un achat.
*/
const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

/*
  L'instantané reste la chaîne brute : `useSyncExternalStore` compare par
  identité, et rendre un tableau neuf à chaque lecture ferait boucler React.
*/
function lireBrut(): string {
  return readStored(CLE) ?? '';
}

function lireServeur(): string {
  return '';
}

/**
 * Le porte-monnaie et l'étagère.
 *
 * Le total dépensé n'est pas stocké : il se recalcule depuis les objets
 * possédés. Un compteur séparé pourrait diverger de la liste après un achat
 * enregistré à moitié, et l'enfant se retrouverait débité d'un objet qu'il n'a
 * pas. La liste fait foi.
 */
export function useCabinet() {
  const brut = useSyncExternalStore(souscrire, lireBrut, lireServeur);
  const { etoiles } = useEtoiles();
  const possedes = lireAchats(brut);
  const depensees = totalDepense(possedes, objetsCabinet);

  const acheter = useCallback((id: string) => {
    const actuels = lireAchats(readStored(CLE));
    if (actuels.includes(id)) return;
    writeStored(CLE, ecrireAchats([...actuels, id]));
    for (const notifier of abonnes) notifier();
  }, []);

  return {
    possedes,
    /** Étoiles gagnées à vie : elles font le rang, et ne baissent jamais. */
    gagnees: etoiles,
    solde: solde(etoiles, depensees),
    depensees,
    acheter,
  };
}
