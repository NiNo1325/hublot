'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['vitesse', 'aile', 'reaction', 'main'] as const;

/**
 * L'air est montré arrivant horizontalement et repartant vers le bas : c'est
 * la déviation qui explique la portance. La dernière phase affiche l'avion sur
 * le dos, qui suffit à réfuter l'explication par la seule forme de l'aile.
 */
export function PortanceAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Profil d'aile, incliné : l'angle d'attaque compte autant que la forme. */}
      <g transform="translate(200 116) rotate(-10)">
        <path
          d="M-72 0 q30 -20 74 -12 q40 8 70 12 q-40 10 -76 12 q-44 2 -68 -12 z"
          fill="#b9c4da"
          style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}
        />
      </g>

      {/* Filets d'air : horizontaux en amont, déviés vers le bas en aval. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[80, 104, 128].map((y, i) => (
          <path
            key={y}
            d={`M20 ${y} h96 q70 6 130 ${46 + i * 6}`}
            fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="9 9"
          >
            {anime && (
              <animate
                attributeName="stroke-dashoffset" values="36;0"
                dur="1.1s" begin={`${i * 0.2}s`} repeatCount="indefinite"
              />
            )}
          </path>
        ))}
        <text x="20" y="66" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l&apos;air arrive
        </text>
      </g>

      {/* Le couple action / réaction, montré comme deux flèches opposées. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <g>
          <line x1="200" y1="104" x2="200" y2="44" stroke="#34d399" strokeWidth="5" />
          <path d="M192 52 L200 34 L208 52 Z" fill="#34d399" />
          <text x="96" y="24" fill="#34d399" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
            l&apos;aile est poussée en haut
          </text>
        </g>
        <g>
          <line x1="240" y1="132" x2="240" y2="186" stroke="#fb7185" strokeWidth="5" />
          <path d="M232 178 L240 196 L248 178 Z" fill="#fb7185" />
          <text x="104" y="228" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
            l&apos;air est poussé en bas
          </text>
        </g>
      </g>

      {/* Vol inversé : réfutation de l'explication par la forme seule. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <g transform="translate(60 186) scale(1 -1)">
          <path d="M-34 0 l40 -9 l30 0 l-6 9 z" fill="#ffb627" />
          <path d="M-6 -2 l10 -16 l8 0 l-4 16 z" fill="#ffb627" />
        </g>
        <text x="14" y="204" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          sur le dos, ça vole aussi
        </text>
      </g>
    </svg>
  );
}
