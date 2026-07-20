'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['interrupteurs', 'deux-chiffres', 'combinaisons', 'tout-est-nombre'] as const;

/** 1011 en binaire vaut onze — la valeur citée dans l'explication 9-12. */
const MOTIF = [1, 0, 1, 1];

export function BinaireAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Quatre interrupteurs, allumés ou éteints. */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {MOTIF.map((bit, i) => {
          const x = 92 + i * 58;
          return (
            <g key={i}>
              <rect
                x={x - 22} y="52" width="44" height="52" rx="10"
                fill="#1b2a4a" stroke="#2c3f66" strokeWidth="3"
              />
              <circle cx={x} cy={bit ? 70 : 88} r="12" fill={bit ? '#22d3ee' : '#2c3f66'}>
                {anime && phase === 0 && (
                  <animate
                    attributeName="opacity" values="1;0.45;1"
                    dur="1.6s" begin={`${i * 0.25}s`} repeatCount="indefinite"
                  />
                )}
              </circle>
            </g>
          );
        })}
      </g>

      {/* La lecture en zéros et uns. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {MOTIF.map((bit, i) => (
          <text
            key={i}
            x={92 + i * 58} y="136"
            fill={bit ? '#22d3ee' : '#6b7280'}
            fontSize="30" fontFamily="monospace" textAnchor="middle"
          >
            {bit}
          </text>
        ))}
      </g>

      {/* Le poids de chaque rang : 8, 4, 2, 1. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[8, 4, 2, 1].map((poids, i) => (
          <text
            key={poids}
            x={92 + i * 58} y="166"
            fill="#b9c4da" fontSize="16" fontFamily="monospace" textAnchor="middle"
          >
            {poids}
          </text>
        ))}
        <text x="92" y="196" fill="#f5f0e6" fontSize="17" fontFamily="monospace">
          8 + 2 + 1 = 11
        </text>
      </g>

      {/* Les mêmes bits deviennent une image. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {Array.from({ length: 16 }).map((_, i) => {
          const allume = [1, 2, 4, 7, 8, 11, 13, 14].includes(i);
          return (
            <rect
              key={i}
              x={288 + (i % 4) * 22} y={140 + Math.floor(i / 4) * 22}
              width="18" height="18" rx="3"
              fill={allume ? '#22d3ee' : '#1b2a4a'}
            >
              {anime && phase === 3 && (
                <animate
                  attributeName="opacity" values="0;1"
                  dur="0.5s" begin={`${i * 0.05}s`} fill="freeze"
                />
              )}
            </rect>
          );
        })}
        <text x="288" y="130" fill="#b9c4da" fontSize="13" fontFamily="sans-serif">
          une image
        </text>
      </g>
    </svg>
  );
}
