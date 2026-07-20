'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['lourd', 'boule', 'creux', 'place'] as const;

/**
 * La boule coule et la coque flotte, avec la même matière : c'est la
 * démonstration que la masse ne décide pas, mais le volume occupé.
 */
export function FlottaisonAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'eau */}
      <path d="M0 108 h400 v132 H0 Z" fill="#0c4a6e" />
      <path d="M0 108 q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 v8 H0 Z" fill="#38bdf8" opacity="0.55" />

      {/* La boule : même matière, elle coule */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="88" cy="96" r="20" fill="#94a3b8">
          {anime && phase === 1 && (
            <animate attributeName="cy" values="90;208" dur="2.6s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="46" y="228" fill="#94a3b8" fontSize="12" fontFamily="sans-serif">
          en boule : coule
        </text>
      </g>

      {/* La coque creuse : même matière, elle flotte */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path d="M204 100 h96 l-16 40 h-64 z" fill="#94a3b8">
          {anime && phase >= 2 && (
            <animate attributeName="opacity" values="0.9;1;0.9" dur="2.4s" repeatCount="indefinite" />
          )}
        </path>
        <text x="196" y="84" fill="#34d399" fontSize="12" fontFamily="sans-serif">
          en coque : flotte
        </text>
      </g>

      {/* L'eau déplacée et la poussée */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[228, 252, 276].map((x) => (
          <g key={x}>
            <line x1={x} y1="168" x2={x} y2="146" stroke="#7dd3fc" strokeWidth="4" />
            <path d={`M${x - 6} 152 L${x} 138 L${x + 6} 152 Z`} fill="#7dd3fc" />
          </g>
        ))}
        <text x="312" y="164" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">
          l&apos;eau
        </text>
        <text x="312" y="180" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">
          repousse
        </text>
        <text x="150" y="34" fill="#b9c4da" fontSize="13" fontFamily="sans-serif">
          ce qui compte : la place occupée
        </text>
      </g>
    </svg>
  );
}
