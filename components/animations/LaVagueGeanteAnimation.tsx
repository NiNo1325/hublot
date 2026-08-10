'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * En coupe : une faille tremble au fond, soulève toute la colonne d'eau,
 * l'onde file à grande vitesse en pleine mer, puis grossit soudain en
 * approchant la côte — un mur d'eau né d'un séisme, pas du vent.
 */
export function LaVagueGeanteAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#08172a" />

      {/* Fond marin et côte, toujours visibles */}
      <path d="M0 190 h300 v50 H0 Z" fill="#1e293b" />
      <path d="M300 190 Q330 150 340 100 L400 100 L400 240 L300 240 Z" fill="#4b5b3f" />

      {/* Phase 1 : la faille tremble au fond de l'océan */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M60 190 L100 190 L112 178 L124 196 L136 182 L150 190 L300 190" stroke="#f97316" strokeWidth="4" fill="none">
          {anime && (
            <animate attributeName="opacity" values="1;0.3;1" dur="0.6s" repeatCount="indefinite" />
          )}
        </path>
        <text x="16" y="222" fill="#f97316" fontSize="14" fontFamily={police} style={legende(0)}>
          la terre tremble
        </text>
      </g>

      {/* Phase 2 : toute la colonne d'eau est soulevée d'un coup */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M70 190 L70 60 L150 60 L150 190" stroke="#38bdf8" strokeWidth="3" fill="none" strokeDasharray="5 4">
          {anime && (
            <animate attributeName="d" values="M70 190 L70 60 L150 60 L150 190;M70 190 L70 40 L150 40 L150 190;M70 190 L70 60 L150 60 L150 190" dur="2s" repeatCount="indefinite" />
          )}
        </path>
        <text x="16" y="30" fill="#38bdf8" fontSize="14" fontFamily={police} style={legende(1)}>
          l’eau est poussée
        </text>
      </g>

      {/* Phase 3 : l'onde file très vite en pleine mer, presque plate */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M20 96 Q60 90 100 96 T180 96 T260 96" stroke="#60a5fa" strokeWidth="2.5" fill="none">
          {anime && (
            <animateTransform attributeName="transform" type="translate" values="0 0;60 0;0 0" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        <text x="16" y="70" fill="#60a5fa" fontSize="14" fontFamily={police} style={legende(2)}>
          elle file très vite
        </text>
      </g>

      {/* Phase 4 : près de la côte, un mur d'eau se dresse */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M250 190 Q272 90 300 190 Z" fill="#93c5fd">
          {anime && (
            <animate attributeName="d" values="M250 190 Q272 90 300 190 Z;M250 190 Q272 60 300 190 Z;M250 190 Q272 90 300 190 Z" dur="2.2s" repeatCount="indefinite" />
          )}
        </path>
        <text x="16" y="46" fill="#93c5fd" fontSize="14" fontFamily={police} style={legende(3)}>
          un mur d’eau énorme
        </text>
      </g>
    </svg>
  );
}
