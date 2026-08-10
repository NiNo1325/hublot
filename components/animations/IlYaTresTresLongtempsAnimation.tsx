'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * La même ligne du temps, lue de deux façons : d'abord étirée en frise pour
 * situer dinosaures et humains, puis repliée en cercle d'une année pour
 * rendre sensible un écart trop grand pour une frise droite.
 */
export function IlYaTresTresLongtempsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La frise, décor permanent tant qu'on n'est pas au cercle-année */}
      <g style={{ opacity: phase === 3 ? 0 : 1, transition: 'opacity 500ms ease' }}>
        <line x1="30" y1="150" x2="374" y2="150" stroke="#3f3a55" strokeWidth="3" />
        <text x="20" y="176" fill="#7c7a94" fontSize="12" fontFamily={police}>hier</text>
        <text x="352" y="176" fill="#7c7a94" fontSize="12" fontFamily={police}>toi</text>

        {/* Phase 1 : les dinosaures occupent une large part de la frise */}
        <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
          <rect x="60" y="140" width="150" height="20" fill="#c8a97e" />
          <text x="60" y="128" fill="#c8a97e" fontSize="14" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>230 à 66 millions d&apos;années</text>
        </g>

        {/* Phase 2 : les humains, un tout petit point tout au bout */}
        <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
          <circle cx="360" cy="150" r="6" fill="#7dd3fc">
            {anime && phase === 1 && (
              <animate attributeName="r" values="6;9;6" dur="1.4s" repeatCount="indefinite" />
            )}
          </circle>
          <text x="238" y="128" fill="#7dd3fc" fontSize="14" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>les humains, bien plus tard</text>
        </g>

        {/* Phase 3 : l'écart immense entre les deux */}
        <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
          <line x1="214" y1="150" x2="354" y2="150" stroke="#f87171" strokeWidth="3" strokeDasharray="6 6">
            {anime && phase === 2 && (
              <animate attributeName="stroke-dashoffset" values="0;24" dur="1.2s" repeatCount="indefinite" />
            )}
          </line>
          <text x="214" y="198" fill="#f87171" fontSize="14" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>un temps presque impossible à imaginer</text>
        </g>
      </g>

      {/* Phase 4 : toute l'histoire de la Terre ramenée à une année */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="112" r="70" fill="none" stroke="#3f3a55" strokeWidth="20" />
        <path
          d="M200 42 A70 70 0 0 1 268 106"
          fill="none" stroke="#c8a97e" strokeWidth="20"
        />
        <path d="M266 100 A70 70 0 0 1 268 112" fill="none" stroke="#7dd3fc" strokeWidth="20" strokeLinecap="round" />
        <text x="200" y="42" textAnchor="middle" fill="#a8a29e" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>1er janvier</text>
        <text x="200" y="196" textAnchor="middle" fill="#a8a29e" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>31 décembre, 23h59</text>
        <text x="80" y="226" fill="#7dd3fc" fontSize="14" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>les humains : les toutes dernières minutes</text>
      </g>
    </svg>
  );
}
