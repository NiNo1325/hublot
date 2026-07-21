'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['observer', 'eau-air', 'transformation', 'protection'] as const;

/**
 * Les deux ingrédients — eau et air — sont montrés ensemble : la carte corrige
 * l'idée que l'eau seule ferait rouiller. Le clou vire de l'argenté à l'orange
 * pour dire que c'est le fer qui se transforme, pas une saleté déposée.
 */
export function RouilleAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const rouille = phase >= 2;
  const protege = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le clou, argenté puis orange */}
      <g transform="rotate(-30 200 120)">
        <rect
          x="150" y="112" width="120" height="16" rx="3"
          fill={rouille ? '#b45309' : '#94a3b8'}
          style={{ transition: 'fill 1400ms ease' }}
        />
        <path
          d="M150 108 l-16 12 l16 12 z"
          fill={rouille ? '#b45309' : '#94a3b8'}
          style={{ transition: 'fill 1400ms ease' }}
        />
        {/* Peinture protectrice */}
        {protege && (
          <rect x="150" y="108" width="120" height="24" rx="4" fill="none" stroke="#a855f7" strokeWidth="4" />
        )}
      </g>

      {/* Les deux ingrédients nécessaires */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {/* Gouttes d'eau */}
        {[120, 160, 200].map((x, i) => (
          <path key={x} d={`M${x} 40 q6 10 0 16 q-6 -6 0 -16 z`} fill="#38bdf8">
            {anime && (
              <animate attributeName="cy" values="0;6;0" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="96" y="34" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          eau
        </text>
        {/* Air / oxygène */}
        {[250, 285, 320].map((x, i) => (
          <circle key={x} cx={x} cy="46" r="5" fill="#7dd3fc" opacity="0.8">
            {anime && (
              <animate attributeName="cy" values="46;38;46" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="248" y="30" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          + oxygène de l’air
        </text>
      </g>

      {/* La transformation : particules de rouille qui s'écaillent */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[180, 210, 240].map((x, i) => (
          <rect key={x} x={x} y="150" width="6" height="6" rx="1" fill="#b45309">
            {anime && phase === 2 && (
              <animate attributeName="y" values="150;180" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </rect>
        ))}
        <text x="120" y="210" fill="#b45309" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le fer se transforme
        </text>
      </g>

      {/* La protection */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="120" y="230" fill="#a855f7" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la peinture le protège
        </text>
      </g>
    </svg>
  );
}
