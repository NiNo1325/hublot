'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';
import { cheminAudio } from '@/lib/i18n/audio';
import { useLocale } from '@/components/i18n/useLocale';

/**
 * La voix de Lumi sur l'histoire des savants.
 *
 * Un seul élément Audio réutilisé, qui joue `histoire/<id>.mp3` dans la langue
 * choisie. Un fichier absent échoue en silence — le récit reste lisible à
 * l'écrit — et la voix se coupe si l'application passe en arrière-plan.
 *
 * Les temps s'enchaînent tout seuls : l'histoire est un récit, pas une liste, et
 * demander à un enfant de rappuyer entre chaque phrase la casserait en morceaux.
 */
export function useHistoireAudio(suivant?: (id: string) => string | null) {
  const { locale } = useLocale();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enLecture, setEnLecture] = useState<string | null>(null);
  /*
    Le gestionnaire `onended` n'est posé qu'une fois, au montage : il fermerait
    sinon sur la première valeur, et l'enchaînement s'arrêterait au deuxième
    temps. On garde donc la suite et la langue dans des refs, tenues à jour par
    un effet — écrire une ref pendant le rendu est un effet de bord déguisé.
  */
  const suivantRef = useRef(suivant);
  const localeRef = useRef(locale);
  useEffect(() => {
    suivantRef.current = suivant;
    localeRef.current = locale;
  });

  const jouerId = useCallback((id: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = cheminAudio(localeRef.current, `histoire/${id}.mp3`);
    audio.onerror = () => setEnLecture(null);
    audio.play().then(
      () => setEnLecture(id),
      () => setEnLecture(null),
    );
  }, []);

  useEffect(() => {
    audioRef.current = new Audio();
    const audio = audioRef.current;
    audio.onended = () => {
      const encours = audio.src.split('/').pop()?.replace('.mp3', '') ?? '';
      const apres = suivantRef.current?.(encours) ?? null;
      if (apres) jouerId(apres);
      else setEnLecture(null);
    };
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [jouerId]);

  const arreter = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audio.paused) audio.pause();
    setEnLecture(null);
  }, []);

  usePauseEnArrierePlan(arreter);

  return { jouer: jouerId, arreter, enLecture };
}
