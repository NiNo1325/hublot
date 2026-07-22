'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { AgeRange } from '@/lib/types';
import { VERDICTS, cheminVerdict, type Verdict } from '@/content/quiz/verdicts';

/** Chemin déterministe, produit par `scripts/generer-audio-quiz.mjs`. */
function url(
  cardId: string,
  age: AgeRange,
  questionId: string,
  partie: 'question' | 'explication',
): string {
  return `/audio/quiz/${cardId}/${age}/${questionId}-${partie}.mp3`;
}

function urlVerdict(age: AgeRange, verdict: Verdict): string {
  // Une formulation au hasard : huit fois la même phrase dans une série
  // transformerait l'encouragement en ritournelle.
  const rang = Math.floor(Math.random() * VERDICTS[age][verdict].length);
  return `/audio/quiz/${cheminVerdict(age, verdict, rang)}.mp3`;
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

  /**
   * Joue une suite de fichiers à la file.
   *
   * Un seul élément audio réutilisé, enchaîné sur `ended` : deux éléments
   * concurrents finiraient par se parler dessus si l'enfant répond vite.
   * Un fichier absent n'interrompt pas la file — le verdict peut manquer sans
   * emporter l'explication avec lui.
   */
  const jouerSuite = useCallback((sources: string[]) => {
    const audio = audioRef.current;
    if (!audio || sources.length === 0) return;

    let rang = 0;
    const suivant = () => {
      if (rang >= sources.length) {
        setEnLecture(false);
        return;
      }
      audio.src = sources[rang];
      rang += 1;
      audio.play().then(
        () => setEnLecture(true),
        () => setEnLecture(false),
      );
    };

    audio.pause();
    audio.onended = suivant;
    // Fichier manquant ou réseau coupé : on passe au suivant sans rien casser.
    audio.onerror = suivant;
    suivant();
  }, []);

  const jouer = useCallback(
    (cardId: string, questionId: string, partie: 'question' | 'explication') => {
      jouerSuite([url(cardId, age, questionId, partie)]);
    },
    [age, jouerSuite],
  );

  /*
    Le verdict précède l'explication. Sans lui, un non-lecteur ne sait pas s'il
    a trouvé : « Bravo, c'est ça ! » n'existait qu'à l'écran, donc précisément
    là où il ne peut pas le lire.
  */
  const jouerVerdict = useCallback(
    (cardId: string, questionId: string, verdict: Verdict) => {
      jouerSuite([
        urlVerdict(age, verdict),
        url(cardId, age, questionId, 'explication'),
      ]);
    },
    [age, jouerSuite],
  );

  return { jouer, jouerVerdict, arreter, enLecture };
}
