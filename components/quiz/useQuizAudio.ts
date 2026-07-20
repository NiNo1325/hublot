'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { AgeRange } from '@/lib/types';

/** Chemin déterministe, produit par `scripts/generer-audio-quiz.mjs`. */
function url(
  cardId: string,
  age: AgeRange,
  questionId: string,
  partie: 'question' | 'explication',
): string {
  return `/audio/quiz/${cardId}/${age}/${questionId}-${partie}.mp3`;
}

/**
 * Narration du quizz.
 *
 * Les 3-5 ans ne lisent pas : sans énoncé parlé, le mode leur est fermé. La
 * lecture est donc automatique pour eux, et proposée par un bouton aux plus
 * grands, qui ont déjà le texte sous les yeux.
 *
 * Un fichier absent n'est pas une panne : le quizz reste jouable en silence.
 */
export function useQuizAudio(age: AgeRange) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enLecture, setEnLecture] = useState(false);

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
    setEnLecture(false);
  }, []);

  const jouer = useCallback(
    (cardId: string, questionId: string, partie: 'question' | 'explication') => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.pause();
      audio.src = url(cardId, age, questionId, partie);
      audio.onended = () => setEnLecture(false);
      // Fichier manquant ou réseau coupé : on reste silencieux sans rien casser.
      audio.onerror = () => setEnLecture(false);

      audio.play().then(
        () => setEnLecture(true),
        () => setEnLecture(false),
      );
    },
    [age],
  );

  return { jouer, arreter, enLecture };
}
