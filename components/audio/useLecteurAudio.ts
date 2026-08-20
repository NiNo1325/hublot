'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';
import { cheminAudio } from '@/lib/i18n/audio';
import { useLocale } from '@/components/i18n/useLocale';

/**
 * Lecture d'un court commentaire de Lumi, rangé par dossier.
 *
 * Un seul élément Audio réutilisé, qui joue `<dossier>/<id>.mp3` dans la langue
 * choisie. Un fichier absent échoue en silence — l'écran reste lisible et
 * utilisable sans le son, ce qui compte quand l'audio d'une langue n'est pas
 * encore généré. La voix se coupe si l'app passe en arrière-plan.
 *
 * Extrait du tutoriel, qui en fut le premier usage, le jour où l'écran de choix
 * du niveau a eu besoin exactement du même comportement.
 */
export function useLecteurAudio(dossier: string) {
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
      audio.src = cheminAudio(locale, `${dossier}/${id}.mp3`);
      audio.onerror = () => setEnLecture(null);
      audio.play().then(
        () => setEnLecture(id),
        () => setEnLecture(null),
      );
    },
    [dossier, locale],
  );

  usePauseEnArrierePlan(arreter);

  return { jouer, arreter, enLecture };
}
