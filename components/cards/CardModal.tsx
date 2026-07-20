'use client';

import { Component, useEffect, useRef, type ReactNode } from 'react';
import type { AgeRange, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { animationRegistry } from '@/components/animations/registry';
import { useReducedMotion } from '@/components/animations/shared/useReducedMotion';
import { useSpeech } from '@/components/narration/useSpeech';
import { NarrationControls } from '@/components/narration/NarrationControls';

/**
 * Isole les pannes d'animation : un SVG qui plante ne doit pas emporter la
 * modale ni interrompre la narration, qui porte l'essentiel du contenu.
 */
class AnimationBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { enPanne: boolean }
> {
  state = { enPanne: false };

  static getDerivedStateFromError() {
    return { enPanne: true };
  }

  render() {
    return this.state.enPanne ? this.props.fallback : this.props.children;
  }
}

interface CardModalProps {
  card: ScienceCard;
  ageRange: AgeRange;
  onClose: () => void;
}

export function CardModal({ card, ageRange, onClose }: CardModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const beats = card.content.fr.explanation[ageRange].beats;
  const { state, play, pause, resume, replay } = useSpeech(beats);

  const Animation = animationRegistry[card.animationId];
  const style = domainStyles[card.domainId];

  /*
    `showModal()` plutôt qu'un focus trap maison : le dialog natif piège le
    focus, rend le reste de la page inerte et gère Escape sans code.
  */
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  /*
    La narration démarre seule dès que la voix est prête : ouvrir une carte doit
    suffire à ce qu'elle se raconte. Safari peut refuser ce premier `speak()`
    hors geste utilisateur — le bouton « Écouter » reste alors le filet, et
    `demarrageAutoRef` garantit qu'on ne relance pas par-dessus une lecture que
    l'enfant a mise en pause.
  */
  const demarrageAutoRef = useRef(false);
  useEffect(() => {
    if (state.status === 'pret' && !demarrageAutoRef.current) {
      demarrageAutoRef.current = true;
      play(0);
    }
  }, [state.status, play]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby="titre-carte"
      className="m-auto max-h-[92vh] w-[min(44rem,92vw)] overflow-y-auto rounded-[2rem] border-4 bg-encre p-0 text-craie backdrop:bg-encre/80"
      style={{ borderColor: style.teinte }}
    >
      <div className="flex flex-col gap-6 p-6 sm:p-8">
        <header className="flex items-start justify-between gap-4">
          <h2 id="titre-carte" className="font-display text-3xl font-semibold">
            {card.content.fr.title[ageRange]}
          </h2>
          {/* Toujours visible, taille tactile pleine, jamais masqué pendant la lecture. */}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-2xl transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">✕</span>
            <span className="sr-only">Fermer la carte</span>
          </button>
        </header>

        <div
          className="overflow-hidden rounded-3xl border-2"
          style={{ borderColor: style.teinte, boxShadow: `0 0 40px ${style.halo}` }}
        >
          <AnimationBoundary
            fallback={
              <div className="flex h-56 items-center justify-center bg-encre-clair text-7xl">
                <span aria-hidden="true">{card.thumbnail}</span>
              </div>
            }
          >
            {Animation ? (
              <Animation
                activeBeatId={state.activeBeatId}
                isPlaying={state.isPlaying}
                prefersReducedMotion={prefersReducedMotion}
              />
            ) : (
              <div className="flex h-56 items-center justify-center bg-encre-clair text-7xl">
                <span aria-hidden="true">{card.thumbnail}</span>
              </div>
            )}
          </AnimationBoundary>
        </div>

        {/*
          Le texte reste dans le DOM pour tous les âges — lecteurs d'écran et
          parents qui lisent par-dessus l'épaule. `aria-live` annonce le beat
          courant sans exiger que l'utilisateur cherche où le texte a changé.
        */}
        <div aria-live="polite" className="min-h-24">
          {beats.map((beat, index) => (
            <p
              key={beat.id}
              className="text-lg leading-relaxed transition-opacity duration-500 sm:text-xl"
              style={{
                opacity: state.activeIndex === -1 || state.activeIndex === index ? 1 : 0.3,
                display:
                  state.activeIndex === -1 || state.activeIndex === index
                    ? 'block'
                    : 'none',
              }}
            >
              {beat.text}
            </p>
          ))}
        </div>

        <NarrationControls
          state={state}
          onPlay={() => play(0)}
          onPause={pause}
          onResume={resume}
          onReplay={replay}
        />
      </div>
    </dialog>
  );
}
