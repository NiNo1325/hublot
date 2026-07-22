'use client';

import { Component, useEffect, useRef, type ReactNode } from 'react';
import type { AgeRange, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { animationRegistry } from '@/components/animations/registry';
import { useReducedMotion } from '@/components/animations/shared/useReducedMotion';
import { useNarration } from '@/components/narration/useNarration';
import { NarrationControls } from '@/components/narration/NarrationControls';
import { useCartesVues } from './useCartesVues';

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

  const { marquerVue } = useCartesVues();
  const beats = card.content.fr.explanation[ageRange].beats;
  const { state, play, pause, resume, replay } = useNarration(
    card.id,
    ageRange,
    beats,
  );

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
    Ouvrir une carte la fait entrer dans la collection : le quizz n'interroge
    que là-dessus. Marquer à l'ouverture plutôt qu'à la fin de la narration
    évite qu'un enfant qui écoute puis ferme perde le bénéfice.
  */
  useEffect(() => {
    marquerVue(card.id);
  }, [card.id, marquerVue]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby="titre-carte"
      /*
        Plein écran sur mobile, fenêtre centrée à partir du format tablette.
        Sur un téléphone, les marges d'une modale flottante coûtaient une
        soixantaine de pixels de largeur — pris directement sur l'illustration,
        puisque c'est elle qui contraint le rapport hauteur/largeur.
      */
      className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto border-0 bg-encre p-0 text-craie backdrop:bg-encre/80 sm:m-auto sm:h-auto sm:max-h-[92vh] sm:w-[min(44rem,92vw)] sm:rounded-[2rem] sm:border-4"
      style={{ borderColor: style.teinte }}
    >
      {/*
        Contenu centré verticalement sur mobile : la modale occupant tout
        l'écran, aligner en haut laissait un vide sous le texte et repoussait
        les commandes hors de portée du pouce.
      */}
      <div className="flex min-h-full flex-col justify-center gap-4 p-4 sm:justify-start sm:gap-6 sm:p-8">
        <header className="flex items-start justify-between gap-3">
          <h2
            id="titre-carte"
            className="font-display text-xl font-semibold sm:text-3xl"
          >
            {card.content.fr.title[ageRange]}
          </h2>
          {/* Toujours visible, taille tactile pleine, jamais masqué pendant la lecture. */}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil sm:h-14 sm:w-14 sm:text-2xl"
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
          Un seul beat à l'écran à la fois, y compris avant le démarrage : les
          afficher tous formerait un mur de texte, décourageant pour un enfant
          et incohérent avec une narration qui progresse phrase après phrase.
          `aria-live` annonce chaque changement aux lecteurs d'écran.

          Le texte est volontairement plus discret que l'illustration : il
          accompagne la narration, il ne la remplace pas. Sur mobile, un texte
          à la même échelle que sur grand écran reléguait l'animation au rang
          de vignette.
        */}
        <div aria-live="polite" className="min-h-20 sm:min-h-24">
          <p className="text-base leading-relaxed text-craie/90 sm:text-xl sm:text-craie">
            {beats[Math.max(0, state.activeIndex)].text}
          </p>
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
