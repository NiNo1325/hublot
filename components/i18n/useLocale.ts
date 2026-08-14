'use client';

import { useCallback, useSyncExternalStore } from 'react';
import { LOCALES, type Locale } from '@/lib/types';
import { readStored, writeStored } from '@/lib/storage';

const CLE = 'science.locale.v1';
const DEFAUT: Locale = 'fr';

function parseLocale(valeur: string | null): Locale {
  return LOCALES.includes(valeur as Locale) ? (valeur as Locale) : DEFAUT;
}

/*
  La langue est une préférence utilisateur, choisie dans Réglages et persistée
  comme l'âge — pas un segment d'URL. On la publie via `useSyncExternalStore`
  pour que tout composant abonné (cartes, quiz, UI) se mette à jour au moment du
  changement, sans faire circuler l'information en props.
*/
const abonnes = new Set<() => void>();

function souscrire(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function lire(): Locale {
  return parseLocale(readStored(CLE));
}

/*
  Le serveur ne connaît pas la préférence (elle vit dans le localStorage) : il
  rend toujours le français par défaut, et le contenu bascule après hydratation.
*/
function lireServeur(): Locale {
  return DEFAUT;
}

/** Langue courante et moyen d'en changer. */
export function useLocale() {
  const locale = useSyncExternalStore(souscrire, lire, lireServeur);

  const choisirLocale = useCallback((valeur: Locale) => {
    writeStored(CLE, valeur);
    for (const notifier of abonnes) notifier();
  }, []);

  return { locale, choisirLocale };
}
