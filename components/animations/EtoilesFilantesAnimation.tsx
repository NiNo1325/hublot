'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['souhait', 'grain', 'chauffe', 'pluie'] as const;

const ETOILES = [
  { x: 40, y: 40 },
  { x: 110, y: 26 },
  { x: 250, y: 34 },
  { x: 330, y: 60 },
  { x: 70, y: 96 },
  { x: 300, y: 110 },
];

/**
 * Le grain est dessiné minuscule à côté de la lueur qu'il provoque : c'est le
 * cœur de la carte — ce qui brille n'est pas l'objet, mais l'air qu'il
 * comprime devant lui, et l'objet est plus petit qu'un grain de riz.
 */
export function EtoilesFilantesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le sol et la couche d'air, très haute */}
      <rect y="214" width="400" height="26" fill="#1f2937" />
      <line x1="0" y1="150" x2="400" y2="150" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" />

      {/* Étoiles fixes : elles, elles ne tombent pas */}
      {ETOILES.map((e) => (
        <circle key={`${e.x}-${e.y}`} cx={e.x} cy={e.y} r="2.5" fill="#e2e8f0" />
      ))}

      {/* La traînée */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <line x1="150" y1="70" x2="248" y2="126" stroke="#fef9c3" strokeWidth="3" strokeLinecap="round">
          {anime && phase <= 0 && (
            <animate attributeName="opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" />
          )}
        </line>
      </g>

      {/* Le grain, minuscule, agrandi à la loupe */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="70" cy="180" r="26" fill="none" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="70" cy="180" r="3" fill="#cbd5e1" />
        <text x="104" y="186" fill="#cbd5e1" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          un grain de poussière
        </text>
      </g>

      {/* L'air comprimé devant le grain s'échauffe et brille */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path d="M262 132 q22 4 34 20 q-24 -2 -34 -20 z" fill="#fb923c" />
        <circle cx="258" cy="128" r="4" fill="#fef08a" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={276 + i * 10} cy={144 + i * 7} r="2.5" fill="#fdba74">
            {anime && (
              <animate attributeName="opacity" values="1;0.2;1" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="142" fill="#fdba74" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          80 km : c’est l’air qui brille
        </text>
      </g>

      {/* La pluie : la Terre traverse une traînée de débris */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={200 + i * 46} y1={54 + i * 10}
            x2={232 + i * 46} y2={86 + i * 10}
            stroke="#fef9c3"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {anime && phase === 3 && (
              <animate attributeName="opacity" values="0;1;0" dur="1.8s" begin={`${i * 0.45}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="14" y="234" fill="#fef9c3" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des dizaines par heure, aux mêmes dates
        </text>
      </g>
    </svg>
  );
}
