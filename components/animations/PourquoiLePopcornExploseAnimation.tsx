'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    goutte: 'une goutte d’eau dedans',
    vapeur: 'la vapeur chauffe fort',
    pousse: 'ça pousse très fort',
    pop: 'pop ! ça explose',
  },
  en: {
    goutte: 'a drop of water inside',
    vapeur: 'the steam gets very hot',
    pousse: 'it pushes very hard',
    pop: 'pop! it bursts',
  },
};

/**
 * Chaque grain renferme une goutte d'eau enfermée dans une coque étanche : la
 * vapeur sous pression finit par faire céder la coque. Le grain n'enfle pas
 * en cuisant tranquillement, il explose sous la pression.
 */
export function PourquoiLePopcornExploseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#131a24" />

      {/* La casserole, toujours visible */}
      <path d="M120 190 h160 v14 a10 10 0 0 1 -10 10 h-140 a10 10 0 0 1 -10 -10 Z" fill="#334155" />

      {/* Phase 1 : une goutte d'eau est cachée dans le grain */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="150" rx="26" ry="30" fill="#fde68a" stroke="#a16207" strokeWidth="3" />
        <ellipse cx="200" cy="154" rx="7" ry="9" fill="#7dd3fc" />
        <text x="76" y="210" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.goutte}</text>
      </g>

      {/* Phase 2 : la vapeur chauffe et grossit */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="150" rx="26" ry="30" fill="#fde68a" stroke="#a16207" strokeWidth="3" />
        {[[192, 148], [208, 156], [198, 162]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#bae6fd">
            {anime && <animate attributeName="r" values="3;6;3" dur="1s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="82" y="210" fill="#bae6fd" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.vapeur}</text>
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
        <text x="86" y="210" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.pousse}</text>
      </g>

      {/* Phase 4 : la coque cède, le grain explose */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {/*
          Le grain faisait 58 unités de large ; la forme éclatée en fait 110 et
          n’a plus de contour régulier. L’ancienne gardait la largeur du grain,
          alors que l'expansion est tout le propos de la phase.
        */}
        <g fill="#fde047">
          <circle cx="176" cy="140" r="25" />
          <circle cx="216" cy="132" r="27" />
          <circle cx="200" cy="164" r="25" />
          <circle cx="236" cy="160" r="21" />
          <circle cx="166" cy="166" r="20" />
        </g>
        <g fill="#fffbeb">
          <circle cx="186" cy="138" r="15" />
          <circle cx="212" cy="146" r="16" />
          <circle cx="200" cy="126" r="12" />
        </g>
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
        <text x="112" y="210" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.pop}</text>
      </g>
    </svg>
  );
}
