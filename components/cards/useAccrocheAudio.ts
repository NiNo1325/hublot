'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';

/**
 * Lecture des accroches : un seul élément Audio réutilisé, qui coupe la
 * précédente avant d'en jouer une nouvelle. Un fichier absent (avant génération
 * ou réseau coupé) échoue silencieusement — jamais de blocage.
 */
export function useAccrocheAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enLecture, setEnLecture] = useState<string | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    audio.onended = () => setEnLecture(null);
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const jouer = useCallback((domainId: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = `/audio/accroches/${domainId}.mp3`;
    audio.onerror = () => setEnLecture(null);
    audio.play().then(
      () => setEnLecture(domainId),
      () => setEnLecture(null),
    );
  }, []);

  // L'application passe en arrière-plan : on coupe l'accroche en cours.
  usePauseEnArrierePlan(
    useCallback(() => {
      const audio = audioRef.current;
      if (audio && !audio.paused) {
        audio.pause();
        setEnLecture(null);
      }
    }, []),
  );

  return { jouer, enLecture };
}
