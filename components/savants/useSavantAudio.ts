'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { AgeRange } from '@/lib/types';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';
import { cheminAudio } from '@/lib/i18n/audio';
import { useLocale } from '@/components/i18n/useLocale';

/**
 * Lecture d'une fiche de savant : l'apport, puis l'anecdote, à la file.
 *
 * Deux fichiers plutôt qu'un seul enregistrement : la coupure fait entendre une
 * pause franche entre les deux, ce sont deux idées et non une phrase longue.
 * Un seul bouton les enchaîne — un enfant appuie une fois et écoute la fiche.
 *
 * Un fichier absent n'est pas une panne : la fiche reste lisible en silence.
 */
export function useSavantAudio(age: AgeRange) {
  const { locale } = useLocale();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enLecture, setEnLecture] = useState<string | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    return () => {
      audio.pause();
      audio.removeAttribute('src');
      audioRef.current = null;
    };
  }, []);

  const arreter = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setEnLecture(null);
  }, []);

  usePauseEnArrierePlan(arreter);

  const jouer = useCallback(
    (savantId: string) => {
      const audio = audioRef.current;
      if (!audio) return;

      const sources = ['apport', 'anecdote'].map((partie) =>
        cheminAudio(locale, `savants/${savantId}/${age}/${partie}.mp3`),
      );

      let rang = 0;
      const suivant = () => {
        if (rang >= sources.length) {
          setEnLecture(null);
          return;
        }
        audio.src = sources[rang];
        rang += 1;
        audio.play().then(
          () => setEnLecture(savantId),
          () => setEnLecture(null),
        );
      };

      audio.pause();
      audio.onended = suivant;
      // Fichier manquant : on passe au suivant plutôt que d'interrompre la file.
      audio.onerror = suivant;
      suivant();
    },
    [locale, age],
  );

  /**
   * Le seul nom, prononcé quand une paire tombe au Mémo. Il ne dépend pas de
   * l'âge : un nom propre se dit pareil à tous les âges.
   */
  const jouerNom = useCallback(
    (savantId: string) => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.pause();
      audio.onended = null;
      audio.onerror = null;
      audio.src = cheminAudio(locale, `savants/${savantId}/nom.mp3`);
      void audio.play().catch(() => {});
    },
    [locale],
  );

  return { jouer, jouerNom, arreter, enLecture };
}
