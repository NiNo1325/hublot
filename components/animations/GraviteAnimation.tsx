'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['chute', 'attraction', 'plume', 'lune'] as const;

/**
 * La phase « plume » montre les deux objets côte à côte : avec air, la plume
 * traîne ; sans air, les deux descendent ensemble. C'est la démonstration
 * visuelle du point que la carte corrige — la masse ne change pas la vitesse
 * de chute.
 */
export function GraviteAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const sansAir = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      <path d="M0 206 h400 v34 H0 Z" fill="#1f6f4e" />

      {/* Pomme qui tombe */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="70" cy="60" r="15" fill="#fb7185">
          {anime && (
            <animate
              attributeName="cy" values="60;192" dur="1.5s" repeatCount="indefinite"
            />
          )}
        </circle>
      </g>

      {/* Attraction réciproque : deux flèches, pas une seule. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[150, 200, 250].map((x) => (
          <g key={x}>
            <line x1={x} y1="70" x2={x} y2="128" stroke="#38bdf8" strokeWidth="4" />
            <path d={`M${x - 7} 124 L${x} 136 L${x + 7} 124 Z`} fill="#38bdf8" />
          </g>
        ))}
        <text x="150" y="58" fill="#7dd3fc" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          la Terre attire
        </text>
      </g>

      {/* Bille et plume : même chute quand l'air ne s'en mêle plus. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <circle cx="300" cy="56" r="11" fill="#b9c4da">
          {anime && (
            <animate
              attributeName="cy" values="56;196" dur="1.4s" repeatCount="indefinite"
            />
          )}
        </circle>
        <path d="M348 56 q10 12 0 22 q-10 -10 0 -22 z" fill="#f5f0e6">
          {anime && (
            <animateTransform
              attributeName="transform" type="translate"
              values="0 0; 0 140"
              /* Sans air, la plume met le même temps que la bille. */
              dur={sansAir ? '1.4s' : '3.4s'}
              repeatCount="indefinite"
            />
          )}
        </path>
        <text x="58" y="34" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {sansAir ? 'sans air' : "avec l'air"}
        </text>
      </g>

      {/* La Lune en orbite : une chute permanente qui manque sa cible. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="200" cy="130" r="46" fill="none" stroke="#2c3f66" strokeWidth="2" strokeDasharray="5 7" />
        <circle cx="246" cy="130" r="10" fill="#b9c4da">
          {anime && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 200 130" to="360 200 130"
              dur="6s" repeatCount="indefinite"
            />
          )}
        </circle>
      </g>
    </svg>
  );
}
