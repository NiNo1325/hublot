'use client';

import type { SpeechState } from './useSpeech';

interface NarrationControlsProps {
  state: SpeechState;
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onReplay: () => void;
}

const BOUTON =
  'flex min-h-16 min-w-16 cursor-pointer items-center justify-center gap-2 rounded-full border-2 border-encre-bord bg-encre-clair px-6 font-display text-lg text-craie transition-transform hover:scale-105 hover:border-soleil active:scale-95';

export function NarrationControls({
  state,
  onPlay,
  onPause,
  onResume,
  onReplay,
}: NarrationControlsProps) {
  const { status, isPlaying, activeIndex } = state;

  if (status === 'initialisation') {
    return <p className="text-craie-douce">Préparation de la voix…</p>;
  }

  /*
    L'action affichée dépend de la progression réelle, pas du seul `status` :
    en mode minuté le statut reste « silencieux » alors que la carte défile
    toujours, et proposer « Réécouter » à ce moment-là serait faux.
    Un seul bouton principal à la fois — un enfant ne doit jamais arbitrer
    entre deux commandes qui se ressemblent.
  */
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
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
          La voix n&apos;est pas disponible sur cet appareil. L&apos;explication
          défile à l&apos;écrit.
        </p>
      )}
    </div>
  );
}
