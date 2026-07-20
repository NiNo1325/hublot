'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['trois', 'reaction', 'etouffer', 'pas-chose'] as const;

/**
 * Le triangle du feu est dessiné explicitement, et l'un de ses côtés
 * disparaît à la phase « étouffer » en même temps que la flamme : la règle
 * devient une démonstration.
 */
export function FeuAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const etouffe = phase === 2;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le triangle du feu */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <polygon
          points="96,58 40,166 152,166"
          fill="none" stroke="#fb923c" strokeWidth="3"
          style={{ opacity: etouffe ? 0.25 : 1, transition: 'opacity 600ms ease' }}
        />
        <text x="66" y="46" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">chaleur</text>
        <text x="4" y="186" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">bois</text>
        <text
          x="128" y="186" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif"
          style={{ opacity: etouffe ? 0.2 : 1, transition: 'opacity 600ms ease' }}
        >
          oxygène
        </text>
      </g>

      {/* La bûche et la flamme */}
      <rect x="236" y="176" width="96" height="20" rx="6" fill="#5b4636" />
      <g style={{ opacity: etouffe ? 0.12 : opacite(1), transition: 'opacity 700ms ease' }}>
        <path d="M284 176 q-26 -30 -6 -56 q4 22 18 28 q10 -16 4 -34 q28 26 16 62 z" fill="#f97316">
          {anime && !etouffe && (
            <animate attributeName="opacity" values="0.85;1;0.85" dur="0.7s" repeatCount="indefinite" />
          )}
        </path>
        <path d="M284 176 q-14 -18 -2 -34 q2 14 10 18 q4 -10 2 -20 q16 16 8 36 z" fill="#ffb627" />
      </g>

      {/* Le couvercle qui prive d'oxygène */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect
          x="228" y={etouffe ? 116 : 74} width="112" height="12" rx="4" fill="#94a3b8"
          style={{ transition: 'y 700ms ease' }}
        />
        <text x="180" y="216" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          sans oxygène, ça s&apos;arrête
        </text>
      </g>

      {/* Le feu n'est pas une matière */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="18" y="216" fill="#b9c4da" fontSize="15" fontFamily="var(--font-atkinson), sans-serif">
          le feu n&apos;est pas une chose : c&apos;est une réaction
        </text>
      </g>
    </svg>
  );
}
