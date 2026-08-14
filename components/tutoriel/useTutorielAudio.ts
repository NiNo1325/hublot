'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';
import { cheminAudio } from '@/lib/i18n/audio';
import { useLocale } from '@/components/i18n/useLocale';

/**
 * Lecture de l'explication vocale d'un écran de tutoriel : un seul élément Audio
 * réutilisé, qui joue le `tutoriel/<id>.mp3` de la langue choisie. Un fichier
 * absent échoue en silence (le tuto reste lisible), et la voix se coupe si
 * l'app passe en arrière-plan.
 */
export function useTutorielAudio() {
  const { locale } = useLocale();
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

  const arreter = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audio.paused) {
      audio.pause();
      setEnLecture(null);
    }
  }, []);

  const jouer = useCallback(
    (id: string) => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.pause();
      audio.src = cheminAudio(locale, `tutoriel/${id}.mp3`);
      audio.onerror = () => setEnLecture(null);
      audio.play().then(
        () => setEnLecture(id),
        () => setEnLecture(null),
      );
    },
    [locale],
  );

  usePauseEnArrierePlan(arreter);

  return { jouer, arreter, enLecture };
}
