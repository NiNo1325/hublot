'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['vibration', 'air', 'oreille', 'vide'] as const;

/**
 * Les particules sont dessinées en zones tantôt serrées tantôt espacées :
 * le son est une compression qui se propage, pas une vague qui monte et
 * descend comme on le représente trop souvent.
 */
export function SonAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const vide = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Source : un haut-parleur qui vibre */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="26" y="88" width="20" height="64" rx="4" fill="#b9c4da" />
        <path d="M46 96 l30 -22 v92 l-30 -22 z" fill="#b9c4da">
          {anime && phase === 0 && (
            <animateTransform
              attributeName="transform" type="translate"
              values="0 0; 4 0; 0 0" dur="0.25s" repeatCount="indefinite"
            />
          )}
        </path>
      </g>

      {/* Zones de compression : serré / espacé, qui se déplacent */}
      <g style={{ opacity: vide ? 0.12 : opacite(1), transition: 'opacity 700ms ease' }}>
        {Array.from({ length: 9 }).map((_, groupe) => (
          <g key={groupe}>
            {Array.from({ length: 4 }).map((_, i) => (
              <circle
                key={i}
                cx={96 + groupe * 30 + i * (groupe % 2 === 0 ? 4 : 8)}
                cy={120}
                r="3.5"
                fill="#7dd3fc"
              >
                {anime && !vide && (
                  <animate
                    attributeName="cx"
                    values={`${96 + groupe * 30 + i * (groupe % 2 === 0 ? 4 : 8)};${96 + groupe * 30 + i * (groupe % 2 === 0 ? 8 : 4)};${96 + groupe * 30 + i * (groupe % 2 === 0 ? 4 : 8)}`}
                    dur="0.9s" begin={`${groupe * 0.1}s`} repeatCount="indefinite"
                  />
                )}
              </circle>
            ))}
          </g>
        ))}
        <text x="120" y="90" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">
          l&apos;air se serre et se desserre
        </text>
      </g>

      {/* Oreille */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path
          d="M352 96 q22 -6 24 20 q2 24 -14 30 q-10 4 -12 16"
          fill="none" stroke="#f5f0e6" strokeWidth="6" strokeLinecap="round"
        />
        <circle cx="360" cy="120" r="4" fill="#f5f0e6">
          {anime && phase === 2 && (
            <animate attributeName="r" values="3;6;3" dur="0.5s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      {/* Le vide : plus de matière, plus de son */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <rect x="88" y="60" width="228" height="124" rx="12" fill="none" stroke="#fb7185" strokeWidth="2.5" strokeDasharray="7 7" />
        <text x="140" y="212" fill="#fb7185" fontSize="14" fontFamily="sans-serif">
          sans air : aucun son
        </text>
      </g>
    </svg>
  );
}
