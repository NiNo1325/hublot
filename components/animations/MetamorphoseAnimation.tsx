'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['oeuf', 'chenille', 'chrysalide', 'papillon'] as const;

const LEGENDES = {
  fr: {
    oeuf: 'un œuf',
    chenille: 'elle mange et grandit',
    chrysalide: 'le corps se défait',
    papillon: 'un corps tout neuf',
  },
  en: {
    oeuf: 'an egg',
    chenille: 'it eats and grows',
    chrysalide: 'the body comes apart',
    papillon: 'a brand-new body',
  },
};

/**
 * L'argument central : dans la chrysalide, la chenille ne grandit pas, elle se
 * défait (cellules dispersées) puis un corps neuf s'assemble. Les phases
 * chrysalide et papillon sont l'explication — elles réfutent « la chenille
 * grandit en papillon ».
 */
export function MetamorphoseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#132218" />
      {/* Feuille support */}
      <path d="M30 205 Q200 160 370 205" stroke="#2f5d3a" strokeWidth="6" fill="none" />

      {/* Phase 1 : l'œuf */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="92" cy="160" r="10" fill="#e7e2c8" />
        <text x="30" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>
          {legende.oeuf}
        </text>
      </g>

      {/* Phase 2 : la chenille qui mange et grandit */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={150 + i * 15} cy="158" r="11" fill="#7cb342" />
        ))}
        <circle cx="145" cy="154" r="2.5" fill="#1f3a1f" />
        <text x="30" y="224" fill="#a3e635" fontSize="15" fontFamily={police}>
          {legende.chenille}
        </text>
      </g>

      {/* Phase 3 : la chrysalide — le corps se défait (cellules dispersées) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse
          cx="205"
          cy="118"
          rx="26"
          ry="44"
          fill="#4e6b3a"
          stroke="#8fae5d"
          strokeWidth="2"
        />
        {[
          [192, 100],
          [216, 108],
          [198, 126],
          [214, 140],
          [205, 116],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#d8e6b0">
            {anime && (
              <animate
                attributeName="cy"
                values={`${cy};${cy - 6};${cy}`}
                dur="2s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        <text x="150" y="200" fill="#f6c453" fontSize="15" fontFamily={police}>
          {legende.chrysalide}
        </text>
      </g>

      {/* Phase 4 : le papillon — un corps neuf assemblé */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g>
          <g transform="translate(305 108)">
            <ellipse cx="0" cy="0" rx="5" ry="22" fill="#3b2b1a" />
            <path d="M-2 -8 Q-42 -34 -34 4 Q-30 26 -2 10 Z" fill="#f08a3c" />
            <path d="M2 -8 Q42 -34 34 4 Q30 26 2 10 Z" fill="#f08a3c" />
            <circle cx="-18" cy="-6" r="4" fill="#7a3d12" />
            <circle cx="18" cy="-6" r="4" fill="#7a3d12" />
          </g>
          {anime && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 0 -14; 0 0"
              dur="2.4s"
              repeatCount="indefinite"
            />
          )}
        </g>
        <text x="250" y="224" fill="#f6c453" fontSize="15" fontFamily={police}>
          {legende.papillon}
        </text>
      </g>
    </svg>
  );
}
