'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['produire', 'conserver', 'degrader', 'soleil'] as const;

/**
 * La barre du bas garde exactement la même longueur d'un bout à l'autre : la
 * quantité se conserve. Seule la part grise — la chaleur diffuse — grandit.
 * C'est la distinction entre quantité et qualité, rendue visible.
 */
export function EnergieAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const degrade = phase >= 2;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La chaîne de conversions : soleil, éolienne, ampoule */}
      <circle cx="60" cy="88" r="20" fill="#fde047" />
      <g>
        <line x1="190" y1="70" x2="190" y2="112" stroke="#94a3b8" strokeWidth="4" />
        <g style={{ transformOrigin: '190px 70px' }}>
          {[0, 120, 240].map((a) => (
            <line
              key={a}
              x1="190" y1="70"
              x2={190 + Math.cos((a * Math.PI) / 180) * 26}
              y2={70 + Math.sin((a * Math.PI) / 180) * 26}
              stroke="#e2e8f0" strokeWidth="4"
            />
          ))}
          {anime && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 190 70" to="360 190 70" dur="3s" repeatCount="indefinite"
            />
          )}
        </g>
      </g>
      <g>
        <circle cx="320" cy="82" r="17" fill={degrade ? '#fde047' : '#64748b'} style={{ transition: 'fill 900ms ease' }} />
        <rect x="313" y="99" width="14" height="10" fill="#94a3b8" />
      </g>

      {/* Les flèches de conversion */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[[92, 148], [222, 286]].map(([x1, x2]) => (
          <g key={x1}>
            <line x1={x1} y1="88" x2={x2} y2="88" stroke="#4ade80" strokeWidth="3" />
            <path d={`M${x2 - 6} 82 L${x2 + 8} 88 L${x2 - 6} 94 Z`} fill="#4ade80" />
          </g>
        ))}
        <text x="14" y="132" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ça change de forme
        </text>
      </g>

      {/* La barre totale : longueur constante, part grise croissante */}
      <rect x="40" y="150" width="320" height="18" rx="3" fill="#4ade80" />
      <rect
        x={degrade ? 190 : 344}
        y="150"
        width={degrade ? 170 : 16}
        height="18"
        rx="3"
        fill="#64748b"
        style={{ transition: 'x 1400ms ease, width 1400ms ease' }}
      />

      <text x="14" y="32" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        rien ne se crée, rien ne se perd
      </text>

      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="14" y="210" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          une part part en chaleur
        </text>
      </g>
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#fde047" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          presque tout vient du Soleil
        </text>
      </g>
    </svg>
  );
}
