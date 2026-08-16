'use client';

import { useEffect } from 'react';
import { etoilesReprises, reprisNecessaire } from '@/lib/migration-etoiles';
import { maitriseesStockees } from '@/components/cards/useCartesMaitrisees';
import { useEtoiles } from './useEtoiles';

/**
 * Remet les compteurs d'avant à l'échelle de la nouvelle économie.
 *
 * Ne rend rien : il ne s'agit que de corriger un total au premier démarrage
 * suivant la mise à jour. Monté dans la coquille de l'application pour être
 * traversé quel que soit l'écran d'arrivée — y compris un raccourci posé sur
 * l'écran d'accueil du téléphone, qui n'ouvre pas forcément la page d'accueil.
 */
export function RepriseEtoiles() {
  const { etoiles, poserEtoiles } = useEtoiles();

  useEffect(() => {
    const maitrisees = maitriseesStockees().size;
    if (!reprisNecessaire(etoiles, maitrisees)) return;
    poserEtoiles(etoilesReprises(etoiles, maitrisees));
  }, [etoiles, poserEtoiles]);

  return null;
}
