'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['observer', 'lune', 'deux-cotes', 'rythme'] as const;

/**
 * Deux bourrelets d'eau, l'un vers la Lune, l'autre à l'opposé : c'est
 * l'argument central de la carte. La Lune n'aspire pas l'eau d'un seul côté,
 * elle l'étire des deux.
 */
export function MareesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const etire = phase >= 2;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Océan étiré en ellipse quand les bourrelets se forment */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <ellipse
          cx="170" cy="120"
          rx={etire ? 96 : 76} ry="76"
          fill="#0c4a6e"
          style={{ transition: 'rx 900ms ease' }}
        />
      </g>
      {/* Terre */}
      <circle cx="170" cy="120" r="62" fill="#1f6f4e" />
      <circle cx="170" cy="120" r="62" fill="none" stroke="#2c3f66" strokeWidth="2" />

      {/* La Lune, à droite */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="352" cy="120" r="22" fill="#b9c4da" />
        <circle cx="346" cy="114" r="5" fill="#9aa7bd" />
        <circle cx="356" cy="126" r="4" fill="#9aa7bd" />
      </g>

      {/* Flèches d'attraction, plus fortes côté Lune */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[100, 120, 140].map((y) => (
          <g key={y}>
            <line x1="240" y1={y} x2="300" y2={y} stroke="#ffb627" strokeWidth="3" />
            <path d={`M294 ${y - 6} L306 ${y} L294 ${y + 6} Z`} fill="#ffb627" />
          </g>
        ))}
      </g>

      {/* Étiquettes des deux marées hautes */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="238" y="118" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          marée haute
        </text>
        <text x="10" y="118" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          marée haute
        </text>
      </g>

      {/* La Terre tourne sous les bourrelets : repère au sol */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="170" cy="58" r="6" fill="#fb7185">
          {anime && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 170 120" to="360 170 120"
              dur="8s" repeatCount="indefinite"
            />
          )}
        </circle>
        <text x="12" y="228" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          deux marées hautes par jour
        </text>
      </g>
    </svg>
  );
}
