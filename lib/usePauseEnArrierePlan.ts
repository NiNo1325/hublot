'use client';

import { useEffect, useRef } from 'react';

/**
 * Appelle `surArrierePlan` dès que l'application cesse d'être au premier plan :
 * écran verrouillé, bascule vers une autre application, ouverture de la vue des
 * applications récentes. Sans cela, la voix d'une carte ou d'un quizz continue
 * de parler alors que l'enfant a posé le téléphone.
 *
 * Le rappel est conservé dans une ref, pour ne pas ré-abonner les écouteurs à
 * chaque rendu tout en appelant toujours sa version la plus récente.
 */
export function usePauseEnArrierePlan(surArrierePlan: () => void) {
  const rappelRef = useRef(surArrierePlan);
  useEffect(() => {
    rappelRef.current = surArrierePlan;
  }, [surArrierePlan]);

  useEffect(() => {
    const surMasquage = () => {
      if (document.visibilityState === 'hidden') rappelRef.current();
    };
    document.addEventListener('visibilitychange', surMasquage);
    // `pagehide` couvre la mise en cache de la page (bfcache) et la fermeture,
    // où `visibilitychange` peut ne pas se déclencher à temps.
    window.addEventListener('pagehide', surMasquage);
    return () => {
      document.removeEventListener('visibilitychange', surMasquage);
      window.removeEventListener('pagehide', surMasquage);
    };
  }, []);
}
