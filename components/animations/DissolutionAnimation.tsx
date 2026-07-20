'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['avant', 'melange', 'toujours-la', 'retour'] as const;

/**
 * La balance affiche la même valeur avant et après : c'est la preuve visuelle
 * que rien n'a disparu, plus convaincante qu'une affirmation.
 */
export function DissolutionAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const disperse = phase >= 1;

  /* Grains groupés au fond, puis répartis dans tout le volume. */
  const grains = Array.from({ length: 18 }, (_, i) => ({
    groupe: [128 + (i % 6) * 8, 176 + Math.floor(i / 6) * 8],
    disperse: [104 + ((i * 37) % 84), 108 + ((i * 53) % 78)],
  }));

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Verre et eau */}
      <path d="M92 84 h108 l-10 112 h-88 Z" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="3" />
      <path d="M98 108 h96 l-8 86 h-80 Z" fill="#38bdf8" opacity="0.35" />

      {/* Sucre : groupé puis dispersé */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {grains.map((g, i) => {
          const [x, y] = disperse ? g.disperse : g.groupe;
          return (
            <rect
              key={i}
              x={x} y={y} width={disperse ? 3 : 6} height={disperse ? 3 : 6} rx="1"
              fill="#f5f0e6"
              style={{ transition: 'all 900ms ease', transitionDelay: `${i * 25}ms` }}
              opacity={phase >= 2 ? 0.5 : 1}
            >
              {anime && phase === 1 && (
                <animate
                  attributeName="opacity" values="1;0.5"
                  dur="1.2s" begin={`${i * 0.05}s`} fill="freeze"
                />
              )}
            </rect>
          );
        })}
      </g>

      {/* Cuillère qui remue */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <line x1="146" y1="60" x2="146" y2="150" stroke="#b9c4da" strokeWidth="5" strokeLinecap="round">
          {anime && phase === 1 && (
            <animateTransform
              attributeName="transform" type="rotate"
              values="-12 146 60; 12 146 60; -12 146 60"
              dur="1.4s" repeatCount="indefinite"
            />
          )}
        </line>
      </g>

      {/* Balance : même masse avant et après */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="242" y="150" width="118" height="46" rx="8" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="2.5" />
        <text x="258" y="180" fill="#34d399" fontSize="22" fontFamily="var(--font-atkinson), monospace">
          110 g
        </text>
        <text x="196" y="140" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          avant et après : pareil
        </text>
      </g>

      {/* Évaporation : le sucre revient intact */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[262, 292, 322].map((x, i) => (
          <circle key={x} cx={x} cy="100" r="4" fill="#7dd3fc">
            {anime && phase === 3 && (
              <>
                <animate attributeName="cy" values="104;56" dur="2.2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.9;0" dur="2.2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              </>
            )}
          </circle>
        ))}
        <text x="171" y="222" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l&apos;eau part, le sucre reste
        </text>
      </g>
    </svg>
  );
}
