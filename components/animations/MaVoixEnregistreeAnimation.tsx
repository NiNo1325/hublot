'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Le micro ne déforme rien : c'est notre propre perception qui est enrichie
 * par la conduction osseuse. Les autres nous entendent depuis toujours comme
 * l'enregistrement.
 */
export function MaVoixEnregistreeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#140b1f" />

      {/* La tête, de profil, toujours visible */}
      <ellipse cx="170" cy="110" rx="55" ry="64" fill="#3f2e4d" />
      <path d="M218 118 Q236 112 236 100 Q236 128 220 130 Z" fill="#3f2e4d" />
      <path d="M118 130 Q134 138 148 136" stroke="#7c3a8a" strokeWidth="2" fill="none" />

      {/* Phase 1 : le son voyage dans l'air jusqu'aux oreilles */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M128 132 Q90 150 70 190" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <path d="M70 190 Q170 220 226 108" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <circle r="4" fill="#38bdf8">
          {anime && (
            <animateMotion
              dur="2.2s"
              repeatCount="indefinite"
              path="M128 132 Q90 150 70 190 Q170 220 226 108"
            />
          )}
        </circle>
        <text x="16" y="46" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>le son voyage dans l’air, vers l’oreille</text>
      </g>

      {/* Phase 2 : il traverse aussi les os du crâne */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M132 128 Q170 150 222 110" stroke="#e879f9" strokeWidth="2.5" fill="none" strokeDasharray="2 5" />
        <circle r="4" fill="#e879f9">
          {anime && <animateMotion dur="1s" repeatCount="indefinite" path="M132 128 Q170 150 222 110" />}
        </circle>
        <text x="16" y="46" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>il traverse aussi les os du crâne</text>
      </g>

      {/* Phase 3 : les os ajoutent des graves */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M100 176 Q130 150 160 176 Q190 202 220 176" stroke="#fb923c" strokeWidth="3" fill="none" />
        <text x="16" y="46" fill="#fb923c" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>les os ajoutent plein de graves</text>
      </g>

      {/* Phase 4 : le micro ne capte que l'air, plus aigu */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(300 90)">
          <rect x="-9" y="-22" width="18" height="30" rx="9" fill="#a3e635" />
          <path d="M-14 4 Q-14 20 0 20 Q14 20 14 4" stroke="#a3e635" strokeWidth="2" fill="none" />
          <line x1="0" y1="20" x2="0" y2="30" stroke="#a3e635" strokeWidth="2" />
        </g>
        <path d="M270 150 Q285 140 300 150 Q315 160 330 150" stroke="#a3e635" strokeWidth="2" fill="none" />
        <text x="16" y="46" fill="#a3e635" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>le micro capte moins de graves : ça sonne différent</text>
      </g>
    </svg>
  );
}
