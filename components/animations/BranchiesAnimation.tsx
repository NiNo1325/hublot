'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['oxygene-dans-leau', 'avale', 'branchies', 'rejet'] as const;

const LEGENDES = {
  fr: {
    oxygene: 'de l’oxygène caché',
    avale: 'l’eau entre par la bouche',
    branchies: 'les branchies le captent',
    rejet: 'l’eau ressort, appauvrie',
  },
  en: {
    oxygene: 'hidden oxygen',
    avale: 'water enters by the mouth',
    branchies: 'the gills capture it',
    rejet: 'water leaves, drained',
  },
};

/** Points d'oxygène dissous dispersés dans l'eau. */
const OXYGENE = [
  [40, 60],
  [90, 40],
  [300, 54],
  [340, 96],
  [60, 140],
  [280, 150],
  [350, 40],
  [320, 120],
];

/**
 * Il y a bien de l'oxygène dans l'eau (points dissous) : les branchies le
 * captent au passage. Le poisson ne respire pas l'eau, il en extrait l'oxygène.
 */
export function BranchiesAnimation({
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
      <rect width="400" height="240" fill="#0c3550" />

      {/* Oxygène dissous, présent dès le repos : réfute « pas d'air dans l'eau » */}
      {OXYGENE.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="4" fill="#7dd3fc">
            {anime && <animate attributeName="cy" values={`${cy};${cy - 5};${cy}`} dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />}
          </circle>
        </g>
      ))}

      {/* Le poisson, tourné vers la gauche */}
      <g>
        <ellipse cx="180" cy="110" rx="60" ry="28" fill="#e8934a" />
        <path d="M240 110 L272 90 L272 130 Z" fill="#e8934a" />
        <circle cx="132" cy="104" r="4" fill="#0f1b12" />
        {/* bouche */}
        <path d="M120 112 q-6 2 0 6" stroke="#7a3d12" strokeWidth="3" fill="none" />
        {/* fentes des branchies */}
        {[150, 158, 166].map((x) => (
          <path key={x} d={`M${x} 92 Q${x - 4} 110 ${x} 128`} stroke="#b45309" strokeWidth="2" fill="none" />
        ))}
      </g>

      {/* Phase 1 : de l'oxygène caché dans l'eau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="40" cy="60" r="8" fill="none" stroke="#7dd3fc" strokeWidth="2" />
        <text x="20" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police}>{legende.oxygene}</text>
      </g>

      {/* Phase 2 : l'eau entre par la bouche */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <line x1="70" y1="114" x2="112" y2="114" stroke="#38bdf8" strokeWidth="3" />
        <path d="M106 108 L118 114 L106 120 Z" fill="#38bdf8" />
        <text x="20" y="224" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.avale}</text>
      </g>

      {/* Phase 3 : les branchies captent l'oxygène (points → sang) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[[150, 96], [158, 116], [150, 126]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#a3e635">
            {anime && <animate attributeName="r" values="4;2;4" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <line x1="168" y1="110" x2="196" y2="110" stroke="#a3e635" strokeWidth="2.5" />
        <path d="M190 105 L200 110 L190 115 Z" fill="#a3e635" />
        <text x="220" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.branchies}</text>
      </g>

      {/* Phase 4 : l'eau ressort sans oxygène */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M150 128 Q150 150 130 158" stroke="#93a4c4" strokeWidth="3" fill="none" />
        <path d="M136 150 L128 160 L142 160 Z" fill="#93a4c4" />
        <text x="220" y="224" fill="#93a4c4" fontSize="15" fontFamily={police}>{legende.rejet}</text>
      </g>
    </svg>
  );
}
