'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['invisible', 'matiere', 'melange', 'pression'] as const;

/**
 * La proportion des gaz est dessinée à l'échelle : l'azote occupe presque
 * tout, l'oxygène un cinquième. Voir la barre suffit à corriger l'idée que
 * l'air serait « de l'oxygène ».
 */
export function AirAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Molécules en mouvement permanent */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[[70, 60], [140, 44], [206, 70], [104, 96], [176, 108], [250, 50], [40, 108]].map(
          ([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="#7dd3fc" opacity="0.8">
              {anime && (
                <animate
                  attributeName="cy" values={`${cy};${cy - 14};${cy + 10};${cy}`}
                  dur={`${2.4 + (i % 3) * 0.6}s`} begin={`${i * 0.25}s`} repeatCount="indefinite"
                />
              )}
            </circle>
          ),
        )}
      </g>

      {/* La balance : l'air a une masse */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="316" cy="70" r="26" fill="none" stroke="#fb7185" strokeWidth="3" />
        <path d="M316 96 l-4 12 h8 z" fill="#fb7185" />
        <rect x="274" y="112" width="84" height="30" rx="6" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="2" />
        <text x="284" y="133" fill="#34d399" fontSize="18" fontFamily="var(--font-atkinson), monospace">1,2 g/L</text>
        <text x="180" y="112" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l&apos;air pèse vraiment
        </text>
      </g>

      {/* Composition, à l'échelle */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="30" y="152" width="222" height="26" rx="4" fill="#6366f1" />
        <rect x="252" y="152" width="60" height="26" rx="4" fill="#38bdf8" />
        <rect x="312" y="152" width="10" height="26" rx="2" fill="#f5f0e6" />
        <text x="92" y="170" fill="#f5f0e6" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">azote 78 %</text>
        <text x="256" y="170" fill="#0f1b33" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">O₂ 21 %</text>
        <text x="30" y="198" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l&apos;oxygène n&apos;en est qu&apos;un cinquième
        </text>
      </g>

      {/* La pression : le poids de la colonne d'air */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[70, 140, 210, 280].map((x) => (
          <g key={x}>
            <line x1={x} y1="196" x2={x} y2="216" stroke="#ffb627" strokeWidth="3" />
            <path d={`M${x - 5} 212 L${x} 224 L${x + 5} 212 Z`} fill="#ffb627" />
          </g>
        ))}
        <text x="247" y="222" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ça appuie sur toi
        </text>
      </g>
    </svg>
  );
}
