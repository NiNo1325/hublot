'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['air-humide', 'nuit-froide', 'condense', 'matin'] as const;

const LEGENDES = {
  fr: {
    eauDansAir: 'de l’eau dans l’air',
    feuilleRefroidit: 'la feuille refroidit',
    surPlace: 'des gouttes sur place',
    matin: 'au matin, la rosée',
  },
  en: {
    eauDansAir: 'water in the air',
    feuilleRefroidit: 'the leaf cools down',
    surPlace: 'drops form on the spot',
    matin: 'in the morning, dew',
  },
};

/**
 * La rosée ne tombe pas du ciel : la vapeur de l'air (points) se condense sur la
 * feuille refroidie la nuit (les gouttes se forment sur place). La flèche « du
 * ciel » est barrée pour réfuter l'idée reçue.
 */
export function RoseeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  // Une feuille avec sa nervure, toujours visible.
  const feuille = (
    <g>
      <path d="M120 150 Q200 70 290 120 Q210 150 120 150 Z" fill="#3f7d34" />
      <path d="M120 150 Q210 128 290 120" stroke="#2c5624" strokeWidth="2" fill="none" />
    </g>
  );

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#131f33" />
      <rect y="150" width="400" height="90" fill="#1b2f1a" />
      {feuille}

      {/* Phase 1 : de l'eau (vapeur) dans l'air */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[[150, 70], [220, 56], [280, 74], [180, 90], [250, 96], [120, 96]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#7dd3fc" opacity="0.8">
            {anime && <animate attributeName="cy" values={`${y};${y - 5};${y}`} dur="3s" begin={`${i * 0.2}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="20" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police}>{legende.eauDansAir}</text>
      </g>

      {/* Phase 2 : la nuit, la feuille refroidit */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="330" cy="42" r="13" fill="#e2e8f0" />
        <circle cx="324" cy="38" r="11" fill="#131f33" />
        {[160, 210, 260].map((x) => (
          <line key={x} x1={x} y1="118" x2={x} y2="132" stroke="#38bdf8" strokeWidth="2" />
        ))}
        <text x="20" y="224" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.feuilleRefroidit}</text>
      </g>

      {/* Phase 3 : les gouttes se forment sur place (pas du ciel) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {/* flèche « du ciel » barrée */}
        <line x1="330" y1="40" x2="330" y2="80" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M325 74 L330 84 L335 74 Z" fill="#64748b" />
        <line x1="316" y1="44" x2="344" y2="84" stroke="#f43f5e" strokeWidth="4" />
        {/* gouttes sur la feuille */}
        {[[160, 128], [195, 120], [230, 126], [258, 120]].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y - 7} q-5 7 0 11 a5 5 0 0 0 0 -11 Z`} fill="#bae6fd">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="222" y="200" fill="#bae6fd" fontSize="15" fontFamily={police}>{legende.surPlace}</text>
      </g>

      {/* Phase 4 : au matin, la rosée */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="66" cy="44" r="13" fill="#fbbf24" />
        {[[150, 130], [180, 122], [212, 126], [244, 121], [270, 128]].map(([x, y], i) => (
          <path key={i} d={`M${x} ${y - 7} q-5 7 0 11 a5 5 0 0 0 0 -11 Z`} fill="#e0f2fe" />
        ))}
        <text x="230" y="224" fill="#fbbf24" fontSize="15" fontFamily={police}>{legende.matin}</text>
      </g>
    </svg>
  );
}
