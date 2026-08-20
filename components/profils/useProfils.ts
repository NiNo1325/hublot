'use client';

import { useCallback, useSyncExternalStore } from 'react';
import {
  ajouterProfil,
  changerDeProfil,
  profilActif,
  profils as lireProfilsStockes,
  renommerProfil,
  souscrireProfils,
  supprimerProfil,
} from '@/lib/profils/store';
import { ecrireProfils, type Profil } from '@/lib/profils/serialisation';

/*
  `useSyncExternalStore` compare les instantanés par identité : rendre un
  tableau neuf à chaque lecture ferait boucler React. On garde donc la forme
  sérialisée comme instantané — c'est la même précaution que pour le podium du
  chrono — et on la relit au moment du rendu.
*/
function lireInstantane(): string {
  return ecrireProfils(lireProfilsStockes());
}

function lireInstantaneServeur(): string {
  return '[]';
}

function lireActif(): string {
  return profilActif();
}

function lireActifServeur(): string {
  return '';
}

/** La fratrie, l'enfant qui joue, et de quoi les faire évoluer. */
export function useProfils() {
  const serialises = useSyncExternalStore(souscrireProfils, lireInstantane, lireInstantaneServeur);
  const actif = useSyncExternalStore(souscrireProfils, lireActif, lireActifServeur);

  const profils: Profil[] = JSON.parse(serialises);

  return {
    profils,
    actif,
    courant: profils.find((p) => p.id === actif),
    /** Vrai dès qu'il y a une fratrie : c'est ce qui fait apparaître le sélecteur. */
    plusieurs: profils.length > 1,
    changer: useCallback((id: string) => changerDeProfil(id), []),
    ajouter: useCallback((prenom: string) => ajouterProfil(prenom), []),
    renommer: useCallback((id: string, prenom: string) => renommerProfil(id, prenom), []),
    supprimer: useCallback((id: string) => supprimerProfil(id), []),
  };
}
