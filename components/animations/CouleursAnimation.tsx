'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['lumiere-blanche', 'decomposition', 'absorption', 'noir'] as const;

const SPECTRE = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#38bdf8', '#6366f1', '#a855f7'];

/**
 * La pomme est dessinée grise sous le faisceau, et seul le rayon rouge en
 * repart : la couleur n'est pas dans l'objet, elle est ce qu'il renvoie.
 */
export function CouleursAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const eteint = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Faisceau blanc */}
      <g style={{ opacity: eteint ? 0.08 : opacite(0), transition: 'opacity 700ms ease' }}>
        <circle cx="34" cy="88" r="18" fill="#f5f0e6" />
        <path d="M52 82 L134 96 L134 108 L52 94 Z" fill="#f5f0e6" opacity="0.75" />
      </g>

      {/* Prisme et décomposition */}
      <g style={{ opacity: eteint ? 0.08 : opacite(1), transition: 'opacity 700ms ease' }}>
        <path d="M136 68 L176 136 L96 136 Z" fill="#1b2a4a" stroke="#7dd3fc" strokeWidth="2.5" />
        {SPECTRE.map((c, i) => (
          <line
            key={c}
            x1="168" y1={116 + i * 2} x2="270" y2={78 + i * 13}
            stroke={c} strokeWidth="4" strokeLinecap="round"
          >
            {anime && phase === 1 && (
              <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${i * 0.12}s`} fill="freeze" />
            )}
          </line>
        ))}
      </g>

      {/* Pomme : absorbe tout sauf le rouge */}
      <g style={{ opacity: eteint ? 0.15 : opacite(2), transition: 'opacity 700ms ease' }}>
        <path
          d="M312 128 q-22 -16 -34 2 q-12 22 6 40 q14 14 28 4 q14 10 28 -4 q18 -18 6 -40 q-12 -18 -34 -2 z"
          /* Grise tant que la phase « absorption » n'est pas atteinte. */
          fill={phase >= 2 && !eteint ? '#ef4444' : '#64748b'}
          style={{ transition: 'fill 700ms ease' }}
        />
        <path d="M312 126 q4 -14 14 -18" stroke="#1f6f4e" strokeWidth="4" fill="none" strokeLinecap="round" />
        {phase === 2 && (
          <>
            <line x1="286" y1="150" x2="238" y2="150" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
            <path d="M244 142 L230 150 L244 158 Z" fill="#ef4444" />
            <text x="216" y="182" fill="#ef4444" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
              seul le rouge repart
            </text>
          </>
        )}
      </g>

      {/* Sans lumière, pas de couleur */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="120" y="220" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          sans lumière, aucune couleur
        </text>
      </g>
    </svg>
  );
}
