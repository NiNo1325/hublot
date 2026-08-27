'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';
import { cheminAudio } from '@/lib/i18n/audio';
import { useLocale } from '@/components/i18n/useLocale';

/**
 * La voix sur un savant : son nom, puis ce qu'il a fait.
 *
 * Deux clips enchaînés d'un seul bouton — le nom, puis l'explication de la
 * carte — parce que c'est ainsi qu'on présente quelqu'un. Les séparer en deux
 * boutons obligerait un non-lecteur à deviner lequel appuyer, ce qu'il n'a
 * aucun moyen de faire.
 *
 * Un clip absent n'interrompt pas la suite : `onerror` enchaîne comme `onended`,
 * si bien qu'un nom manquant laisse quand même entendre l'explication, qui porte
 * l'essentiel. La voix se coupe quand l'application passe en arrière-plan.
 */
export function useLienAudio() {
  const { locale } = useLocale();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enLecture, setEnLecture] = useState<string | null>(null);
  /*
    Le clip qui suit, et la langue : lus par un gestionnaire posé une seule fois
    au montage. Sans ces refs, il fermerait sur les valeurs du premier rendu et
    l'explication ne suivrait jamais le nom.
  */
  const suiteRef = useRef<string | null>(null);
  const localeRef = useRef(locale);
  useEffect(() => {
    localeRef.current = locale;
  });

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    const enchainer = () => {
      const suite = suiteRef.current;
      suiteRef.current = null;
      if (!suite) {
        setEnLecture(null);
        return;
      }
      audio.src = cheminAudio(localeRef.current, suite);
      audio.play().catch(() => setEnLecture(null));
    };
    audio.onended = enchainer;
    audio.onerror = enchainer;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const lancer = useCallback((premier: string, suite: string | null, marque: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    suiteRef.current = suite;
    setEnLecture(marque);
    audio.src = cheminAudio(localeRef.current, premier);
    audio.play().catch(() => setEnLecture(null));
  }, []);

  const arreter = useCallback(() => {
    suiteRef.current = null;
    const audio = audioRef.current;
    if (audio && !audio.paused) audio.pause();
    setEnLecture(null);
  }, []);

  /** Le nom du savant, puis son explication sur cette carte. */
  const presenter = useCallback(
    (savantId: string, carteId: string) =>
      lancer(`savants/${savantId}/nom.mp3`, `savants/${savantId}/liens/${carteId}.mp3`, carteId),
    [lancer],
  );

  /**
   * Le nom du savant, puis qui il est.
   *
   * Même enchaînement que `presenter`, et pour la même raison : on se nomme
   * avant de se raconter. Le portrait commence souvent par « Il a montré
   * que… », qui ne veut rien dire si l'on n'a pas entendu de qui il s'agit.
   */
  const direPortrait = useCallback(
    (savantId: string) =>
      lancer(`savants/${savantId}/nom.mp3`, `savants/${savantId}/portrait.mp3`, `portrait-${savantId}`),
    [lancer],
  );

  /** Le nom seul — pour le jeu des liens, où l'explication viendrait trop tôt. */
  const direNom = useCallback(
    (savantId: string) => lancer(`savants/${savantId}/nom.mp3`, null, savantId),
    [lancer],
  );

  /**
   * Le titre d'une carte, seul.
   *
   * Il sert la colonne de droite du jeu des liens, qui était muette : un
   * non-lecteur ne pouvait pas y jouer sans qu'on lui lise les étiquettes. On
   * n'y met surtout pas l'explication du savant — elle le nomme, et l'entendre
   * donnerait la réponse avant qu'on ait cherché.
   */
  const direTitre = useCallback(
    (carteId: string) => lancer(`titres/${carteId}.mp3`, null, carteId),
    [lancer],
  );

  usePauseEnArrierePlan(arreter);

  return { presenter, direPortrait, direNom, direTitre, arreter, enLecture };
}
