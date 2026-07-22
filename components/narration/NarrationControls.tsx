'use client';

import type { NarrationState } from './useNarration';

interface NarrationControlsProps {
  state: NarrationState;
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onReplay: () => void;
  onReculer: () => void;
}

const BOUTON =
  'flex min-h-16 min-w-16 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-encre-bord bg-encre-clair px-6 font-display text-lg text-craie transition-transform hover:scale-105 hover:border-soleil active:scale-95';

/** Même hauteur tactile que la commande principale, mais sans la concurrencer. */
const BOUTON_SECONDAIRE =
  'flex min-h-16 min-w-16 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord px-5 font-display text-lg text-craie-douce transition-transform hover:scale-105 hover:border-soleil hover:text-soleil active:scale-95';

export function NarrationControls({
  state,
  onPlay,
  onPause,
  onResume,
  onReplay,
  onReculer,
}: NarrationControlsProps) {
  const { status, isPlaying, activeIndex } = state;

  /*
    L'action affichée dépend de la progression réelle, pas du seul `status` :
    en mode minuté le statut reste « silencieux » alors que la carte défile
    toujours, et proposer « Réécouter » à ce moment-là serait faux.
    Un seul bouton principal à la fois — un enfant ne doit jamais arbitrer
    entre deux commandes qui se ressemblent.
  */
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {/*
        Reculer n'a de sens qu'une fois la narration commencée : avant, le
        bouton ne désignerait rien et ferait un troisième objet à comprendre.
      */}
      {activeIndex >= 0 && (
        <button
          type="button"
          onClick={onReculer}
          className={BOUTON_SECONDAIRE}
          aria-label="Étape précédente"
        >
          <span aria-hidden="true">⏮</span>
        </button>
      )}

      {isPlaying ? (
        <button type="button" onClick={onPause} className={BOUTON}>
          <span aria-hidden="true">⏸</span> Pause
        </button>
      ) : status === 'pause' ? (
        <button type="button" onClick={onResume} className={BOUTON}>
          <span aria-hidden="true">▶</span> Reprendre
        </button>
      ) : activeIndex === -1 ? (
        <button type="button" onClick={onPlay} className={BOUTON}>
          <span aria-hidden="true">▶</span> Écouter
        </button>
      ) : (
        <button type="button" onClick={onReplay} className={BOUTON}>
          <span aria-hidden="true">↻</span> Réécouter
        </button>
      )}

      {state.isSilent && (
        <p className="w-full text-center text-sm text-craie-douce">
          Le son n&apos;a pas pu être chargé. L&apos;explication défile à
          l&apos;écrit.
        </p>
      )}
    </div>
  );
}
