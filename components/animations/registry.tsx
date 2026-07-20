'use client';

import type { ComponentType } from 'react';
import { CycleDeLEauAnimation } from './CycleDeLEauAnimation';
import { JourEtNuitAnimation } from './JourEtNuitAnimation';
import { PhotosyntheseAnimation } from './PhotosyntheseAnimation';
import { GraviteAnimation } from './GraviteAnimation';
import { ReactionChimiqueAnimation } from './ReactionChimiqueAnimation';
import { StructuresAnimation } from './StructuresAnimation';
import { BinaireAnimation } from './BinaireAnimation';
import { SymetrieAnimation } from './SymetrieAnimation';
import { PhasesLuneAnimation } from './PhasesLuneAnimation';
import { VolcanAnimation } from './VolcanAnimation';
import { CirculationAnimation } from './CirculationAnimation';
import { AimantsAnimation } from './AimantsAnimation';
import { EtatsMatiereAnimation } from './EtatsMatiereAnimation';
import { PortanceAnimation } from './PortanceAnimation';
import { InternetAnimation } from './InternetAnimation';
import { FractalesAnimation } from './FractalesAnimation';

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
  'jour-et-nuit': JourEtNuitAnimation,
  photosynthese: PhotosyntheseAnimation,
  gravite: GraviteAnimation,
  'reaction-chimique': ReactionChimiqueAnimation,
  structures: StructuresAnimation,
  binaire: BinaireAnimation,
  symetrie: SymetrieAnimation,
  'phases-lune': PhasesLuneAnimation,
  volcan: VolcanAnimation,
  circulation: CirculationAnimation,
  aimants: AimantsAnimation,
  'etats-matiere': EtatsMatiereAnimation,
  portance: PortanceAnimation,
  internet: InternetAnimation,
  fractales: FractalesAnimation,
};
