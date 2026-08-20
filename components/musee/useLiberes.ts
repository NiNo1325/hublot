'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { readStored, writeStored } from '@/lib/storage';
import { cleActive, souscrireProfils } from '@/lib/profils/store';
import { savantsPrisonniers } from '@/content/savants-cartes';
import { clesDepensees, ecrireLiberes, lireLiberes, soldeCles } from '@/lib/cles';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';

const NOM = 'liberes.v1';

/*
  Même plomberie que les autres stockages : un abonnement partagé, pour que le
  mur et le compteur de clés affiché ailleurs ne se contredisent pas après une
  libération.
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
  L'instantané reste la chaîne brute : `useSyncExternalStore` compare par
  identité, et rendre un tableau neuf à chaque lecture ferait boucler React.
*/
function lire(): string {
  return readStored(cleActive(NOM)) ?? '';
}

function lireServeur(): string {
  return '';
}

/**
 * Les savants libérés, et le trousseau de clés.
 *
 * Les clés **gagnées** se déduisent des cartes réussies : une carte comprise,
 * une clé. Rien n'est donc stocké en double, et un compteur ne peut pas
 * diverger de la réalité — c'est la même précaution que pour le cabinet, et
 * pour la même raison : un enfant débité d'un savant encore enfermé ne
 * comprendrait pas, et n'aurait aucun moyen de le récupérer.
 */
export function useMusee() {
  const brut = useSyncExternalStore(souscrire, lire, lireServeur);
  const { cartesMaitrisees } = useCartesMaitrisees();

  const liberes = lireLiberes(brut);
  const gagnees = cartesMaitrisees.size;
  const depensees = clesDepensees(liberes);

  const liberer = useCallback((id: string) => {
    const actuels = lireLiberes(readStored(cleActive(NOM)));
    if (actuels.includes(id)) return;
    writeStored(cleActive(NOM), ecrireLiberes([...actuels, id]));
    for (const notifier of abonnes) notifier();
  }, []);

  return {
    liberes,
    /** Clés gagnées à vie : une par carte comprise. */
    gagnees,
    depensees,
    solde: soldeCles(gagnees, depensees),
    total: savantsPrisonniers.length,
    liberer,
  };
}
