'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Chaque grain renferme une goutte d'eau enfermée dans une coque étanche : la
 * vapeur sous pression finit par faire céder la coque. Le grain n'enfle pas
 * en cuisant tranquillement, il explose sous la pression.
 */
export function PourquoiLePopcornExploseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#131a24" />

      {/* La casserole, toujours visible */}
      <path d="M120 190 h160 v14 a10 10 0 0 1 -10 10 h-140 a10 10 0 0 1 -10 -10 Z" fill="#334155" />

      {/* Phase 1 : une goutte d'eau est cachée dans le grain */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="150" rx="26" ry="30" fill="#fde68a" stroke="#a16207" strokeWidth="3" />
        <ellipse cx="200" cy="154" rx="7" ry="9" fill="#7dd3fc" />
        <text x="76" y="210" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>une goutte d’eau dedans</text>
      </g>

      {/* Phase 2 : la vapeur chauffe et grossit */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="150" rx="26" ry="30" fill="#fde68a" stroke="#a16207" strokeWidth="3" />
        {[[192, 148], [208, 156], [198, 162]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#bae6fd">
            {anime && <animate attributeName="r" values="3;6;3" dur="1s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="82" y="210" fill="#bae6fd" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>la vapeur chauffe fort</text>
      </g>

      {/* Phase 3 : la pression pousse contre la coque */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="150" rx="29" ry="32" fill="#fde68a" stroke="#a16207" strokeWidth="3">
          {anime && phase === 2 && (
            <animate attributeName="rx" values="26;31;26" dur="0.6s" repeatCount="indefinite" />
          )}
        </ellipse>
        {[0, 1, 2, 3].map((i) => {
          const a = (i / 4) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * 12}
              y1={150 + Math.sin(a) * 12}
              x2={200 + Math.cos(a) * 34}
              y2={150 + Math.sin(a) * 34}
              stroke="#f87171"
              strokeWidth="2.5"
            />
          );
        })}
        <text x="86" y="210" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>ça pousse très fort</text>
      </g>

      {/* Phase 4 : la coque cède, le grain explose */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M170 140 Q200 96 230 140 Q246 170 200 176 Q154 170 170 140 Z" fill="#fde047" />
        <path d="M186 130 Q200 108 214 130 Q220 148 200 152 Q180 148 186 130 Z" fill="#fffbeb" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={200} cy={150} r="2" fill="#fffbeb" opacity="0">
            {anime && (
              <>
                <animate
                  attributeName="cx"
                  values={`200;${200 + (i - 1) * 46}`}
                  dur="0.9s"
                  repeatCount="indefinite"
                />
                <animate attributeName="cy" values="150;100" dur="0.9s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="1;0" dur="0.9s" repeatCount="indefinite" />
              </>
            )}
          </circle>
        ))}
        <text x="112" y="210" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>pop ! ça explose</text>
      </g>
    </svg>
  );
}
