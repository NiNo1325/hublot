'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['dinosaures', 'plancton', 'enfoui', 'epuisable'] as const;

/**
 * Le dinosaure est barré dès la première phase, et le plancton tombe ensuite
 * dans la mer : la correction se joue dans l'ordre des images avant d'être
 * dite. Les couches de sédiments s'épaississent pour figurer la durée.
 */
export function PetroleAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La mer, puis les couches enfouies */}
      <rect y="48" width="400" height="74" fill="#0c4a6e" />
      <rect y="122" width="400" height="26" fill="#57534e" />
      <rect y="148" width="400" height="26" fill="#44403c" />
      <rect y="174" width="400" height="26" fill="#292524" />

      {/* Le dinosaure, barré */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path d="M262 40 q10 -22 30 -18 q16 4 14 18 l14 0 l-6 8 l-46 0 z" fill="#4ade80" />
        <line x1="252" y1="46" x2="332" y2="6" stroke="#f87171" strokeWidth="4" />
        <text x="14" y="32" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          pas les dinosaures
        </text>
      </g>

      {/* Le plancton, qui tombe au fond */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[70, 130, 190, 250, 310].map((x, i) => (
          <circle key={x} cx={x} cy="66" r="3.5" fill="#a7f3d0">
            {anime && (
              <animate attributeName="cy" values="60;118;60" dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="112" fill="#a7f3d0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          du plancton
        </text>
      </g>

      {/* L'enfouissement, et la poche de pétrole */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <ellipse cx="200" cy="186" rx="52" ry="11" fill="#1c1917" stroke="#a16207" strokeWidth="2" />
        <g>
          <line x1="360" y1="130" x2="360" y2="182" stroke="#a16207" strokeWidth="3" />
          <path d="M354 176 L360 192 L366 176 Z" fill="#a16207" />
        </g>
        <text x="14" y="210" fill="#a16207" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des millions d’années
        </text>
      </g>

      {/* La combustion, immédiate */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M300 226 q6 -18 14 -22 q-2 12 6 16 q6 -6 4 -14 q10 12 4 20 z" fill="#fb923c">
          {anime && phase === 3 && (
            <animate attributeName="opacity" values="1;0.4;1" dur="0.7s" repeatCount="indefinite" />
          )}
        </path>
        <text x="14" y="234" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          brûlé en quelques secondes
        </text>
      </g>
    </svg>
  );
}
