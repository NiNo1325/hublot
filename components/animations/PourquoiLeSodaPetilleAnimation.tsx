'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    dissous: 'le gaz est dissous',
    bouchon: 'le bouchon le garde',
    bulles: 'les bulles remontent',
    plat: 'il devient plat',
  },
  en: {
    dissous: 'the gas is dissolved',
    bouchon: 'the cap holds it in',
    bulles: 'the bubbles rise up',
    plat: 'it goes flat',
  },
};

/**
 * Du gaz est dissous sous forte pression dans la boisson fermée. Ouvrir la
 * bouteille fait chuter la pression : le gaz redevient moins soluble et
 * remonte en bulles, jusqu'à s'épuiser peu à peu.
 */
export function PourquoiLeSodaPetilleAnimation({
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
      <rect width="400" height="240" fill="#071a24" />

      {/* La bouteille, toujours visible */}
      <path d="M180 40 h40 v22 l16 20 v112 a10 10 0 0 1 -10 10 h-52 a10 10 0 0 1 -10 -10 V82 l16 -20 Z" fill="none" stroke="#38bdf8" strokeWidth="3" />

      {/* Phase 1 : le gaz est dissous sous pression */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M186 88 h28 v96 h-28 Z" fill="#0c4a6e" opacity="0.6" />
        {[[192, 110], [206, 130], [196, 150], [210, 170]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#7dd3fc">
            {anime && <animate attributeName="r" values="2;3.5;2" dur="1.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="66" y="212" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.dissous}</text>
      </g>

      {/* Phase 2 : le bouchon garde le gaz enfermé */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M186 88 h28 v96 h-28 Z" fill="#0c4a6e" opacity="0.6" />
        {[[192, 110], [206, 130], [196, 150], [210, 170]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="#7dd3fc" />
        ))}
        <rect x="182" y="40" width="36" height="16" rx="3" fill="#fbbf24" />
        <text x="70" y="212" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.bouchon}</text>
      </g>

      {/* Phase 3 : la pression chute, les bulles remontent */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M186 88 h28 v96 h-28 Z" fill="#0c4a6e" opacity="0.6" />
        <rect x="182" y="30" width="36" height="16" rx="3" fill="#fbbf24">
          {anime && phase === 2 && <animate attributeName="y" values="40;20" dur="1.2s" repeatCount="indefinite" />}
        </rect>
        {[194, 202, 210].map((x, i) => (
          <circle key={x} cx={x} cy="180" r="3.5" fill="#fde047">
            {anime && <animate attributeName="cy" values="180;92" dur="1.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="62" y="212" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.bulles}</text>
      </g>

      {/* Phase 4 : à force de s'échapper, le soda devient plat */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M186 130 h28 v54 h-28 Z" fill="#0c4a6e" opacity="0.4" />
        <line x1="188" y1="130" x2="214" y2="130" stroke="#64748b" strokeWidth="2" strokeDasharray="4 3" />
        <text x="92" y="212" fill="#64748b" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.plat}</text>
      </g>
    </svg>
  );
}
