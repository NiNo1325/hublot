'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CardBeat } from '@/lib/types';
import { loadVoices, pickFrenchVoice } from '@/lib/voices';

/** Durée d'affichage d'un beat quand la narration n'est pas disponible. */
const DUREE_BEAT_SILENCIEUX_MS = 6500;

/**
 * Durée de lecture estimée d'un texte, à ~14 caractères par seconde.
 * Sert de garde-fou : certains environnements acceptent `speak()` sans jamais
 * déclencher `onend` ni `onerror` (aucune voix réellement installée, moteur
 * distant injoignable). Sans cette estimation, la carte resterait figée sur son
 * premier beat, sans erreur visible.
 */
function dureeEstimeeMs(texte: string): number {
  return Math.max(3000, (texte.length / 14) * 1000);
}

/** Marge avant de considérer que la voix ne répondra jamais. */
const MARGE_GARDE_MS = 4000;

/**
 * Le support de l'API ne change pas au cours de la vie de la page : il est lu
 * à l'initialisation plutôt que dans un effet, ce qui évite un premier rendu à
 * une valeur fausse. Le hook n'est monté que dans la modale, donc jamais rendu
 * côté serveur.
 */
function supporteSynthese(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export type SpeechStatus =
  | 'initialisation'
  | 'pret'
  | 'lecture'
  | 'pause'
  | 'termine'
  /** API absente ou en échec : l'app bascule en lecture silencieuse minutée. */
  | 'silencieux';

export interface SpeechState {
  status: SpeechStatus;
  activeBeatId: string | null;
  activeIndex: number;
  isPlaying: boolean;
  /** Vrai quand la progression est minutée plutôt que pilotée par la voix. */
  isSilent: boolean;
}

/**
 * Orchestre la narration beat par beat et expose le beat courant, que
 * l'animation consomme pour changer de phase.
 *
 * Deux modes coexistent derrière la même interface : narration réelle via
 * `speechSynthesis`, ou repli minuté quand la voix est indisponible. Les
 * composants consommateurs n'ont pas à savoir lequel est actif.
 */
export function useSpeech(beats: CardBeat[]) {
  const [status, setStatus] = useState<SpeechStatus>(() =>
    supporteSynthese() ? 'initialisation' : 'silencieux',
  );
  const [activeIndex, setActiveIndex] = useState(-1);
  /*
    Suivi séparé de la fin de lecture : en mode minuté, `status` reste
    « silencieux » aussi bien pendant qu'après le défilement, et ne suffit donc
    pas à décider si la carte est encore en train de se raconter.
  */
  const [estTermine, setEstTermine] = useState(false);

  const voixRef = useRef<SpeechSynthesisVoice | null>(null);
  const supporteRef = useRef(supporteSynthese());
  /**
   * Garde-fou contre les callbacks tardifs : `onend` peut se déclencher après
   * le démontage ou après un `cancel()`, et enchaînerait alors sur un beat
   * d'une carte déjà fermée.
   */
  const annuleRef = useRef(false);
  const minuterieRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const arreterMinuterie = useCallback(() => {
    if (minuterieRef.current) {
      clearTimeout(minuterieRef.current);
      minuterieRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    annuleRef.current = true;
    arreterMinuterie();
    if (supporteRef.current) window.speechSynthesis.cancel();
  }, [arreterMinuterie]);

  // Chargement des voix, une fois au montage.
  useEffect(() => {
    if (!supporteRef.current) return;

    let vivant = true;
    loadVoices().then((voix) => {
      if (!vivant) return;
      voixRef.current = pickFrenchVoice(voix);
      setStatus('pret');
    });

    return () => {
      vivant = false;
    };
  }, []);

  // Nettoyage au démontage : une narration qui survit à la fermeture de la
  // carte continuerait de parler par-dessus l'écran suivant.
  useEffect(() => stop, [stop]);

  /*
    La chaîne de lecture est récursive : chaque beat enchaîne le suivant depuis
    un callback asynchrone. On passe par une ref pour que la fonction puisse
    s'appeler elle-même sans figer une version périmée de ses dépendances.
  */
  const jouerBeatRef = useRef<(index: number, silencieux: boolean) => void>(null);

  /** Enchaîne le beat `index`, en voix ou en minuté selon le mode. */
  const jouerBeat = useCallback(
    (index: number, silencieux: boolean) => {
      if (index >= beats.length) {
        setStatus(silencieux ? 'silencieux' : 'termine');
        setActiveIndex(beats.length - 1);
        setEstTermine(true);
        return;
      }

      setActiveIndex(index);
      arreterMinuterie();

      if (silencieux) {
        minuterieRef.current = setTimeout(() => {
          if (!annuleRef.current) jouerBeatRef.current?.(index + 1, true);
        }, DUREE_BEAT_SILENCIEUX_MS);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(beats[index].text);
      utterance.lang = 'fr-FR';
      if (voixRef.current) utterance.voice = voixRef.current;
      // Léger ralentissement : le débit par défaut est trop rapide pour de
      // jeunes enfants.
      utterance.rate = 0.95;
      utterance.pitch = 1.05;

      /*
        `cancel()` déclenche lui-même `onend` sur l'utterance en cours. Sans
        détacher les handlers au préalable, toute annulation relance la chaîne
        et la narration s'emballe. On neutralise donc systématiquement avant
        d'annuler.
      */
      const neutraliser = () => {
        utterance.onend = null;
        utterance.onerror = null;
      };

      const basculerEnSilencieux = (depuis: number) => {
        neutraliser();
        arreterMinuterie();
        window.speechSynthesis.cancel();
        setStatus('silencieux');
        jouerBeatRef.current?.(depuis, true);
      };

      // Filet si la voix ne rend jamais la main.
      minuterieRef.current = setTimeout(
        () => {
          if (annuleRef.current) return;
          basculerEnSilencieux(index + 1);
        },
        dureeEstimeeMs(beats[index].text) + MARGE_GARDE_MS,
      );

      const debut = Date.now();
      utterance.onend = () => {
        if (annuleRef.current) return;
        arreterMinuterie();

        /*
          Un `onend` quasi instantané signifie que rien n'a été prononcé : le
          navigateur a accepté l'utterance sans voix audible. Sans ce contrôle,
          les quatre beats défileraient en une seconde, en silence. On rejoue
          alors le même beat en minuté.
        */
        if (Date.now() - debut < dureeEstimeeMs(beats[index].text) * 0.4) {
          basculerEnSilencieux(index);
          return;
        }

        jouerBeatRef.current?.(index + 1, false);
      };

      utterance.onerror = () => {
        if (annuleRef.current) return;
        // La voix a lâché en cours de route : on poursuit la carte en minuté
        // plutôt que de laisser l'enfant devant une animation figée.
        basculerEnSilencieux(index);
      };

      window.speechSynthesis.speak(utterance);
    },
    [beats, arreterMinuterie],
  );
  // Assignée dans un effet, jamais pendant le rendu. L'effet du montage
  // s'exécute avant toute interaction, la ref est donc prête au premier clic.
  useEffect(() => {
    jouerBeatRef.current = jouerBeat;
  }, [jouerBeat]);

  /**
   * À appeler directement dans le gestionnaire de clic, sans `await` ni
   * `setTimeout` en amont : Safari exige que le premier `speak()` de la session
   * soit synchrone dans le geste utilisateur, sinon il reste muet.
   */
  const play = useCallback(
    (depuis = 0) => {
      annuleRef.current = false;
      arreterMinuterie();
      setEstTermine(false);

      const silencieux = !supporteRef.current || status === 'silencieux';
      if (!silencieux) window.speechSynthesis.cancel();

      setStatus(silencieux ? 'silencieux' : 'lecture');
      jouerBeat(depuis, silencieux);
    },
    [arreterMinuterie, jouerBeat, status],
  );

  /**
   * `speechSynthesis.pause()` est notoirement instable sur Chrome desktop, où
   * la reprise peut ne jamais survenir. On annule donc et on relance le beat
   * courant depuis son début : la reprise en milieu de phrase est perdue, la
   * fiabilité est acquise.
   */
  const pause = useCallback(() => {
    stop();
    annuleRef.current = false;
    setStatus('pause');
  }, [stop]);

  const resume = useCallback(() => {
    play(Math.max(0, activeIndex));
  }, [play, activeIndex]);

  const replay = useCallback(() => play(0), [play]);

  const isSilent = status === 'silencieux';
  const state: SpeechState = {
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
