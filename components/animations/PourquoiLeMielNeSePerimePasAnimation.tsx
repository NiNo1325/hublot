'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    sucre: 'plein de sucre dedans',
    microbes: 'les microbes veulent de l’eau',
    garde: 'le sucre garde l’eau',
    dure: 'le miel dure toujours',
  },
  en: {
    sucre: 'full of sugar inside',
    microbes: 'microbes want water',
    garde: 'the sugar keeps the water',
    dure: 'honey lasts for ever',
  },
};

/**
 * Le miel est si concentré en sucre, et si pauvre en eau, que les molécules
 * de sucre retiennent toute l'eau disponible : les microbes, qui en ont
 * besoin pour vivre, ne peuvent pas s'y développer. D'où sa conservation.
 */
export function PourquoiLeMielNeSePerimePasAnimation({
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
      <rect width="400" height="240" fill="#1a1305" />

      {/* Le pot de miel, toujours visible */}
      <path d="M160 78 h80 v14 h6 a8 8 0 0 1 8 8 v88 a12 12 0 0 1 -12 12 h-84 a12 12 0 0 1 -12 -12 V100 a8 8 0 0 1 8 -8 h6 Z" fill="none" stroke="#f59e0b" strokeWidth="3" />

      {/* Phase 1 : le miel est plein de sucre */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M154 108 h92 v82 a12 12 0 0 1 -12 12 h-68 a12 12 0 0 1 -12 -12 Z" fill="#d97706" />
        {[[176, 130], [200, 122], [222, 132], [186, 152], [212, 156], [198, 176]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#fde047" />
        ))}
        <text x="70" y="216" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.sucre}</text>
      </g>

      {/* Phase 2 : les microbes ont besoin d'eau */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M154 108 h92 v82 a12 12 0 0 1 -12 12 h-68 a12 12 0 0 1 -12 -12 Z" fill="#d97706" opacity="0.5" />
        <circle cx="290" cy="150" r="10" fill="#86efac">
          {anime && <animate attributeName="cx" values="310;250" dur="1.8s" repeatCount="indefinite" />}
        </circle>
        <circle cx="300" cy="146" r="3" fill="#0369a1" />
        <text x="56" y="216" fill="#86efac" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.microbes}</text>
      </g>

      {/* Phase 3 : le sucre garde toute l'eau pour lui */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M154 108 h92 v82 a12 12 0 0 1 -12 12 h-68 a12 12 0 0 1 -12 -12 Z" fill="#d97706" />
        {[[176, 130], [200, 122], [222, 132]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#fde047" />
        ))}
        <circle cx="200" cy="160" r="5" fill="#38bdf8">
          {anime && phase === 2 && <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" repeatCount="indefinite" />}
        </circle>
        {[[178, 130], [222, 132]].map(([cx, cy], i) => (
          <line key={i} x1={cx} y1={cy} x2="200" y2="160" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
        ))}
        <text x="60" y="216" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.garde}</text>
      </g>

      {/* Phase 4 : sans eau, les microbes ne survivent pas */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M154 108 h92 v82 a12 12 0 0 1 -12 12 h-68 a12 12 0 0 1 -12 -12 Z" fill="#d97706" />
        <circle cx="290" cy="150" r="6" fill="#4b5563" opacity="0.5" />
        <text x="42" y="216" fill="#f59e0b" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.dure}</text>
      </g>
    </svg>
  );
}
