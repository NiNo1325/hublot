'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { AgeRange, CardBeat } from '@/lib/types';

/** Durée d'affichage d'un beat quand l'audio est indisponible. */
const DUREE_BEAT_SILENCIEUX_MS = 6500;

export type NarrationStatus =
  | 'pret'
  | 'lecture'
  | 'pause'
  | 'termine'
  /** Audio injoignable : la carte défile en minuté, sans voix. */
  | 'silencieux';

export interface NarrationState {
  status: NarrationStatus;
  activeBeatId: string | null;
  activeIndex: number;
  isPlaying: boolean;
  isSilent: boolean;
}

/** Chemin déterministe, produit par `scripts/generer-audio.mjs`. */
function urlBeat(cardId: string, age: AgeRange, beatId: string): string {
  return `/audio/${cardId}/${age}/${beatId}.mp3`;
}

/**
 * Orchestre la narration beat par beat à partir des fichiers audio générés,
 * et expose le beat courant que l'animation consomme pour changer de phase.
 *
 * L'audio préenregistré remplace `speechSynthesis` : qualité identique sur
 * tous les appareils, et surtout une pause qui reprend réellement là où on
 * s'est arrêté — ce que l'API de synthèse ne permettait pas de façon fiable.
 */
export function useNarration(
  cardId: string,
  age: AgeRange,
  beats: CardBeat[],
  demarrageAuto = true,
) {
  const [status, setStatus] = useState<NarrationStatus>('pret');
  const [activeIndex, setActiveIndex] = useState(-1);
  const [estTermine, setEstTermine] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  /** Garde le prochain fichier en cache HTTP pour éviter un blanc entre beats. */
  const prechargeRef = useRef<HTMLAudioElement | null>(null);
  const minuterieRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Ignore les événements tardifs d'un beat abandonné ou d'une carte fermée. */
  const annuleRef = useRef(false);

  const arreterMinuterie = useCallback(() => {
    if (minuterieRef.current) {
      clearTimeout(minuterieRef.current);
      minuterieRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    annuleRef.current = true;
    arreterMinuterie();
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.removeAttribute('src');
    }
  }, [arreterMinuterie]);

  // Nettoyage au démontage : une narration qui survit à la fermeture de la
  // carte continuerait de parler par-dessus l'écran suivant.
  useEffect(() => stop, [stop]);

  const jouerBeatRef = useRef<(index: number, silencieux: boolean) => void>(null);

  const jouerBeat = useCallback(
    (index: number, silencieux: boolean) => {
      if (index >= beats.length) {
        setStatus(silencieux ? 'silencieux' : 'termine');
        setActiveIndex(beats.length - 1);
        setEstTermine(true);
        return;
      }

      arreterMinuterie();
      setActiveIndex(index);

      if (silencieux) {
        minuterieRef.current = setTimeout(() => {
          if (!annuleRef.current) jouerBeatRef.current?.(index + 1, true);
        }, DUREE_BEAT_SILENCIEUX_MS);
        return;
      }

      const audio = audioRef.current;
      if (!audio) return;

      /*
        `onerror` et le rejet de `play()` peuvent survenir tous les deux pour
        un même beat. Ce drapeau garantit qu'un seul l'emporte : sans lui, un
        refus d'autoplay arrivant après une bascule en minuté ramènerait la
        carte à « prêt » en laissant la minuterie tourner.
      */
      let traite = false;

      audio.src = urlBeat(cardId, age, beats[index].id);
      audio.onended = () => {
        if (annuleRef.current) return;
        jouerBeatRef.current?.(index + 1, false);
      };
      audio.onerror = () => {
        if (annuleRef.current || traite) return;
        traite = true;
        // Fichier absent ou réseau coupé : la carte continue en minuté plutôt
        // que de laisser l'enfant devant une animation figée.
        setStatus('silencieux');
        jouerBeatRef.current?.(index, true);
      };

      audio.play().then(
        () => {
          if (annuleRef.current || traite) return;
          traite = true;
          setStatus('lecture');
        },
        () => {
          if (annuleRef.current || traite) return;
          traite = true;
          /*
            Lecture refusée faute de geste utilisateur récent. On ne bascule
            pas en minuté : le son est disponible, il manque seulement une
            interaction. Revenir à « prêt » affiche le bouton « Écouter ».
          */
          setStatus('pret');
          setActiveIndex(-1);
        },
      );

      // Prépare le beat suivant pendant que celui-ci se joue.
      const suivant = beats[index + 1];
      if (suivant) {
        const precharge = new Audio(urlBeat(cardId, age, suivant.id));
        precharge.preload = 'auto';
        prechargeRef.current = precharge;
      }
    },
    [beats, cardId, age, arreterMinuterie],
  );

  useEffect(() => {
    jouerBeatRef.current = jouerBeat;
  }, [jouerBeat]);

  /*
    Création de l'élément audio et démarrage de la narration dans le même
    effet. Les séparer laisserait, après un cycle démontage/remontage, un
    élément audio neuf que rien ne relance — c'est exactement ce que provoque
    le double montage de React en développement.
  */
  useEffect(() => {
    audioRef.current = new Audio();
    annuleRef.current = false;

    if (demarrageAuto) jouerBeatRef.current?.(0, false);

    return () => {
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.removeAttribute('src');
      }
      annuleRef.current = true;
      audioRef.current = null;
      prechargeRef.current = null;
    };
    // Un changement de carte ou d'âge doit repartir du premier beat.
  }, [cardId, age, demarrageAuto]);

  const play = useCallback(
    (depuis = 0) => {
      annuleRef.current = false;
      arreterMinuterie();
      setEstTermine(false);
      jouerBeatRef.current?.(depuis, status === 'silencieux');
    },
    [arreterMinuterie, status],
  );

  /** Vraie pause : la reprise repart à la milliseconde près. */
  const pause = useCallback(() => {
    arreterMinuterie();
    audioRef.current?.pause();
    setStatus('pause');
  }, [arreterMinuterie]);

  const resume = useCallback(() => {
    const audio = audioRef.current;
    if (status === 'silencieux' || !audio?.src) {
      play(Math.max(0, activeIndex));
      return;
    }
    audio.play().then(
      () => setStatus('lecture'),
      () => setStatus('pret'),
    );
  }, [status, activeIndex, play]);

  const replay = useCallback(() => play(0), [play]);

  const isSilent = status === 'silencieux';
  const state: NarrationState = {
    status,
    activeBeatId: activeIndex >= 0 ? (beats[activeIndex]?.id ?? null) : null,
    activeIndex,
    isPlaying:
      !estTermine &&
      status !== 'pause' &&
      (status === 'lecture' || (isSilent && activeIndex >= 0)),
    isSilent,
  };

  return { state, play, pause, resume, replay, stop };
}
