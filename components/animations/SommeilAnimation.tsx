'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['repos', 'memoire', 'grandir', 'reves'] as const;

/**
 * Le cerveau est représenté actif pendant tout le sommeil : la carte affirme
 * qu'il ne s'éteint pas, l'image ne doit pas montrer une tête au repos.
 */
export function SommeilAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Dormeur */}
      <g opacity="0.9">
        <rect x="40" y="150" width="200" height="46" rx="10" fill="#1b2a4a" />
        <circle cx="96" cy="136" r="26" fill="#b9c4da" />
        <path d="M84 138 q12 8 24 0" stroke="#0f1b33" strokeWidth="3" fill="none" strokeLinecap="round" />
        <rect x="120" y="146" width="120" height="30" rx="8" fill="#2c3f66" />
      </g>

      {/* Le cerveau reste actif */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="96" cy="120" r="34" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeDasharray="4 5" />
        {[0, 1, 2, 3, 4].map((i) => (
          <circle
            key={i}
            cx={78 + (i % 3) * 18} cy={108 + Math.floor(i / 3) * 16} r="3.5" fill="#a5b4fc"
          >
            {anime && (
              <animate
                attributeName="opacity" values="0.3;1;0.3"
                dur="1.6s" begin={`${i * 0.28}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        <text x="150" y="112" fill="#a5b4fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le cerveau travaille
        </text>
      </g>

      {/* Tri des souvenirs : rangement dans des cases */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={276 + i * 36} y="44" width="28" height="28" rx="5" fill="#1b2a4a" stroke="#34d399" strokeWidth="2" />
            <rect x={282 + i * 36} y="50" width="16" height="16" rx="3" fill="#34d399" opacity="0.8">
              {anime && phase === 1 && (
                <animate attributeName="opacity" values="0;0.8" dur="0.5s" begin={`${i * 0.5}s`} fill="freeze" />
              )}
            </rect>
          </g>
        ))}
        <text x="188" y="94" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          les souvenirs se rangent
        </text>
      </g>

      {/* Réparation du corps */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path d="M300 140 l10 -18 l10 18 l18 4 l-14 14 l4 18 l-18 -10 l-18 10 l4 -18 l-14 -14 z" fill="#a3e635" opacity="0.9" />
        <text x="239" y="196" fill="#a3e635" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le corps se répare
        </text>
      </g>

      {/* Rêves */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={132 + i * 22} cy={80 - i * 16} r={4 + i * 3} fill="#c4b5fd" opacity="0.85">
            {anime && phase === 3 && (
              <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="186" y="46" fill="#c4b5fd" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          et parfois, on rêve
        </text>
      </g>
    </svg>
  );
}
