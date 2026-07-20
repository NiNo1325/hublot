'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['flotte', 'gravite-existe', 'chute', 'orbite'] as const;

/**
 * La flèche de gravité reste présente à toutes les phases : la carte affirme
 * que la gravité ne disparaît pas en orbite, l'image ne doit jamais la faire
 * disparaître non plus.
 */
export function ApesanteurAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Terre */}
      <circle cx="200" cy="300" r="180" fill="#2563eb" />
      <path d="M120 148 q40 -18 78 -4 q34 12 8 26 q-46 16 -86 -22 z" fill="#1f6f4e" opacity="0.85" />

      {/* Station et astronaute qui flottent à l'intérieur */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <g>
          <rect x="168" y="52" width="64" height="30" rx="8" fill="#b9c4da" />
          <rect x="140" y="60" width="24" height="14" rx="3" fill="#38bdf8" />
          <rect x="236" y="60" width="24" height="14" rx="3" fill="#38bdf8" />
          <circle cx="200" cy="67" r="7" fill="#f5f0e6">
            {anime && (
              <animate attributeName="cy" values="63;71;63" dur="3s" repeatCount="indefinite" />
            )}
          </circle>
          {anime && phase === 3 && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 200 300" to="360 200 300"
              dur="10s" repeatCount="indefinite"
            />
          )}
        </g>
      </g>

      {/* La gravité, toujours présente */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <line x1="300" y1="70" x2="300" y2="128" stroke="#ffb627" strokeWidth="4" />
        <path d="M292 120 L300 138 L308 120 Z" fill="#ffb627" />
        <text x="247" y="58" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la gravité est là
        </text>
        <text x="256" y="74" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          à 90 %
        </text>
      </g>

      {/* Ils tombent ensemble */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="26" y="112" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ils tombent…
        </text>
        <text x="26" y="130" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la station aussi
        </text>
      </g>

      {/* L'orbite : une chute qui manque la Terre */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="200" cy="300" r="238" fill="none" stroke="#2c3f66" strokeWidth="2" strokeDasharray="6 8" />
        <text x="61" y="222" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          si vite qu&apos;ils ratent toujours la Terre
        </text>
      </g>
    </svg>
  );
}
