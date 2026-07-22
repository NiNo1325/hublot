'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['pas-inerte', 'habitants', 'fabrication', 'fragile'] as const;

/** Habitants du sol, répartis dans l'épaisseur plutôt qu'en surface. */
const HABITANTS = [
  { x: 60, y: 122 },
  { x: 130, y: 150 },
  { x: 200, y: 128 },
  { x: 268, y: 160 },
  { x: 330, y: 134 },
];

/**
 * Le sol est dessiné en coupe et peuplé : c'est l'inverse de l'image d'un
 * support inerte. La règle de droite rappelle l'échelle de temps, qui est
 * l'argument le moins intuitif de la carte.
 */
export function SolAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La litière en surface, puis l'épaisseur du sol */}
      <rect y="96" width="400" height="104" fill="#44403c" />
      <rect y="88" width="400" height="10" fill="#78350f" />
      {[40, 110, 190, 300].map((x) => (
        <path key={x} d={`M${x} 88 q8 -10 16 0 z`} fill="#a16207" />
      ))}

      {/* Racines et filaments */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[90, 220, 320].map((x) => (
          <path
            key={x}
            d={`M${x} 96 q-8 24 -2 44 q6 18 -6 34`}
            fill="none"
            stroke="#4ade80"
            strokeWidth="2"
          />
        ))}
        <text x="14" y="32" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ce n’est pas de la poussière
        </text>
      </g>

      {/* Le peuple du sol */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {HABITANTS.map((h, i) => (
          <g key={`${h.x}-${h.y}`}>
            <path
              d={`M${h.x} ${h.y} q10 -8 20 0 q10 8 20 0`}
              fill="none"
              stroke="#fb7185"
              strokeWidth="4"
              strokeLinecap="round"
            >
              {anime && (
                <animate attributeName="opacity" values="0.35;1;0.35" dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              )}
            </path>
          </g>
        ))}
        <text x="14" y="70" fill="#fb7185" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des milliards par cuillerée
        </text>
      </g>

      {/* La fabrication : la feuille morte devient terre */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={150 + i * 60} cy="92" r="4" fill="#a16207">
            {anime && phase === 2 && (
              <animate attributeName="cy" values="92;168" dur="3.2s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="210" fill="#a16207" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          les vers fabriquent la terre
        </text>
      </g>

      {/* L'échelle de temps, et sa fragilité */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <line x1="366" y1="96" x2="366" y2="120" stroke="#e2e8f0" strokeWidth="2" />
        <line x1="360" y1="96" x2="372" y2="96" stroke="#e2e8f0" strokeWidth="2" />
        <line x1="360" y1="120" x2="372" y2="120" stroke="#e2e8f0" strokeWidth="2" />
        <text x="14" y="234" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          un siècle par centimètre
        </text>
      </g>
    </svg>
  );
}
