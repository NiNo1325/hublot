'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['chaud', 'monte', 'remplace', 'vent'] as const;

/** Le circuit de convection complet : monte au chaud, redescend au froid. */
export function VentAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Sol chaud à gauche, mer fraîche à droite */}
      <path d="M0 186 h200 v54 H0 Z" fill="#7c4a2d" />
      <path d="M200 186 h200 v54 H200 Z" fill="#0c4a6e" />

      {/* Le Soleil chauffe inégalement */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="76" cy="42" r="20" fill="#ffb627" />
        {[0, 1, 2].map((i) => (
          <line
            key={i} x1={60 + i * 22} y1="66" x2={48 + i * 22} y2="170"
            stroke="#ffb627" strokeWidth="3" strokeDasharray="7 8"
          >
            {anime && (
              <animate attributeName="stroke-dashoffset" values="15;0" dur="1.1s" repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="24" y="212" fill="#fb923c" fontSize="12" fontFamily="sans-serif">chaud</text>
        <text x="330" y="212" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">frais</text>
      </g>

      {/* L'air chaud monte */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={90 + i * 22} cy="170" r="6" fill="#fb923c">
            {anime && (
              <>
                <animate attributeName="cy" values="176;70" dur="3s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.9;0" dur="3s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
              </>
            )}
          </circle>
        ))}
      </g>

      {/* L'air frais vient remplacer */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="300" cy={160 + i * 8} r="6" fill="#7dd3fc">
            {anime && (
              <animate attributeName="cx" values="320;110" dur="3.2s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="222" y="152" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">
          l&apos;air frais accourt
        </text>
      </g>

      {/* La boucle de convection */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path
          d="M108 160 q0 -80 90 -84 q90 -4 92 84"
          fill="none" stroke="#f5f0e6" strokeWidth="2.5" strokeDasharray="8 9" opacity="0.8"
        >
          {anime && (
            <animate attributeName="stroke-dashoffset" values="34;0" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        <text x="140" y="120" fill="#f5f0e6" fontSize="14" fontFamily="sans-serif">
          ce mouvement, c&apos;est le vent
        </text>
      </g>
    </svg>
  );
}
