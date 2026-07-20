'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['deux-memoires', 'vive', 'stockage', 'enregistrer'] as const;

/**
 * À la phase finale, la mémoire vive se vide et le stockage conserve : c'est
 * la démonstration de ce qui arrive quand on n'enregistre pas.
 */
export function MemoireAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const coupure = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Mémoire vive : rapide, volatile */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <rect x="30" y="58" width="146" height="110" rx="10" fill="#1b2a4a" stroke="#22d3ee" strokeWidth="2.5" />
        <text x="46" y="46" fill="#22d3ee" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">mémoire vive</text>
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x={48 + (i % 3) * 40} y={78 + Math.floor(i / 3) * 42}
            width="30" height="30" rx="4" fill="#22d3ee"
            style={{ opacity: coupure ? 0 : 0.85, transition: 'opacity 700ms ease' }}
          >
            {anime && phase === 1 && (
              <animate attributeName="opacity" values="0.4;0.9;0.4" dur="1.2s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            )}
          </rect>
        ))}
        <text x="42" y="188" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          rapide, mais oublie tout
        </text>
      </g>

      {/* Stockage : lent, permanent */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="224" y="58" width="146" height="110" rx="10" fill="#1b2a4a" stroke="#34d399" strokeWidth="2.5" />
        <text x="248" y="46" fill="#34d399" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">stockage</text>
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x={242 + (i % 3) * 40} y={78 + Math.floor(i / 3) * 42}
            width="30" height="30" rx="4" fill="#34d399" opacity="0.85"
          />
        ))}
        <text x="213" y="188" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          lent, mais garde tout
        </text>
      </g>

      {/* L'enregistrement : recopier de l'une vers l'autre */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <line x1="182" y1="112" x2="216" y2="112" stroke="#ffb627" strokeWidth="3" />
        <path d="M210 105 L224 112 L210 119 Z" fill="#ffb627" />
      </g>

      {/* Coupure de courant */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="31" y="216" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          plus de courant : tout s&apos;efface à gauche
        </text>
      </g>
    </svg>
  );
}
