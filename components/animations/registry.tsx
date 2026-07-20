'use client';

import type { ComponentType } from 'react';
import { CycleDeLEauAnimation } from './CycleDeLEauAnimation';

export interface CardAnimationProps {
  /** Beat en cours de narration, ou `null` au repos (avant lecture). */
  activeBeatId: string | null;
  isPlaying: boolean;
  prefersReducedMotion: boolean;
}

/**
 * Associe `ScienceCard.animationId` à son composant. Ce découplage permet au
 * contenu (`content/`) de rester des données pures, importables côté serveur
 * sans embarquer de JSX.
 *
 * Une carte dont l'`animationId` manque ici est rattrapée par un test
 * d'intégrité du contenu.
 */
export const animationRegistry: Record<string, ComponentType<CardAnimationProps>> = {
  'cycle-de-leau': CycleDeLEauAnimation,
};
