'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { AgeRange, Locale } from '@/lib/types';
import { VERDICTS, cheminVerdict, type Verdict } from '@/content/quiz/verdicts';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';
import { cheminAudio } from '@/lib/i18n/audio';
import { localise } from '@/lib/i18n/localise';
import { useLocale } from '@/components/i18n/useLocale';

/** Chemin déterministe, produit par `scripts/generer-audio-quiz.mjs`. */
function url(
  locale: Locale,
  cardId: string,
  age: AgeRange,
  questionId: string,
  partie: 'question' | 'explication',
): string {
  return cheminAudio(locale, `quiz/${cardId}/${age}/${questionId}-${partie}.mp3`);
}

function urlVerdict(locale: Locale, age: AgeRange, verdict: Verdict): string {
  // Une formulation au hasard : huit fois la même phrase dans une série
  // transformerait l'encouragement en ritournelle.
  const formulations = localise(VERDICTS, locale)[age][verdict];
  const rang = Math.floor(Math.random() * formulations.length);
  return cheminAudio(locale, `quiz/${cheminVerdict(age, verdict, rang)}.mp3`);
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
  const { locale } = useLocale();
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

  // L'application passe en arrière-plan : on coupe la voix du quizz.
  usePauseEnArrierePlan(arreter);

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
      jouerSuite([url(locale, cardId, age, questionId, partie)]);
    },
    [locale, age, jouerSuite],
  );

  /*
    Écoute d'une proposition isolée (bouton par réponse, en 6-8). L'index est
    celui de la source, pas de l'affichage mélangé : `QuizView` passe le même,
    de sorte que la voix colle toujours à la réponse pointée.
  */
  const jouerProposition = useCallback(
    (cardId: string, questionId: string, index: number) => {
      jouerSuite([
        cheminAudio(locale, `quiz/${cardId}/${age}/${questionId}-prop-${index}.mp3`),
      ]);
    },
    [locale, age, jouerSuite],
  );

  /*
    Le verdict précède l'explication. Sans lui, un non-lecteur ne sait pas s'il
    a trouvé : « Bravo, c'est ça ! » n'existait qu'à l'écran, donc précisément
    là où il ne peut pas le lire.
  */
  const jouerVerdict = useCallback(
    (cardId: string, questionId: string, verdict: Verdict) => {
      jouerSuite([
        urlVerdict(locale, age, verdict),
        url(locale, cardId, age, questionId, 'explication'),
      ]);
    },
    [locale, age, jouerSuite],
  );

  return { jouer, jouerProposition, jouerVerdict, arreter, enLecture };
}
