'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['vapeur-invisible', 'refroidit', 'gouttelettes', 'flotte'] as const;

const LEGENDES = {
  fr: {
    vapeur: 'vapeur : invisible',
    refroidit: 'l’air se refroidit',
    gouttelettes: 'gouttelettes : visible',
    flotte: 'si léger que ça flotte',
  },
  en: {
    vapeur: 'vapour: invisible',
    refroidit: 'the air cools down',
    gouttelettes: 'droplets: visible',
    flotte: 'so light it floats',
  },
};

const GOUTTES = [
  [150, 74],
  [172, 66],
  [196, 72],
  [220, 66],
  [242, 76],
  [162, 86],
  [188, 88],
  [214, 86],
  [236, 92],
];

/**
 * Un nuage n'est pas de la vapeur (invisible) : c'est une nuée de gouttelettes
 * qui apparaissent quand l'air se refroidit en altitude, et que l'air porte car
 * elles sont minuscules.
 */
export function NuagesAnimation({
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
      <rect width="400" height="240" fill="#0e2036" />
      <rect y="168" width="400" height="72" fill="#1c3a24" />

      {/* Phase 1 : la vapeur invisible qui monte */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[140, 180, 220].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="160" x2={x} y2="96" stroke="#64748b" strokeWidth="2" strokeDasharray="5 5" />
            <path d={`M${x - 5} 104 L${x} 92 L${x + 5} 104 Z`} fill="#64748b">
              {anime && <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </path>
          </g>
        ))}
        <text x="20" y="200" fill="#94a3b8" fontSize="15" fontFamily={police}>{legende.vapeur}</text>
      </g>

      {/* Phase 2 : l'air se refroidit en montant */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g transform="translate(350 60)">
          <rect x="-4" y="-26" width="8" height="40" rx="4" fill="#334155" />
          <rect x="-2" y="6" width="4" height="8" fill="#38bdf8" />
          <circle cx="0" cy="18" r="7" fill="#38bdf8" />
        </g>
        <path d="M60 150 L60 80" stroke="#7dd3fc" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M55 88 L60 76 L65 88 Z" fill="#7dd3fc" />
        <text x="20" y="224" fill="#7dd3fc" fontSize="15" fontFamily={police}>{legende.refroidit}</text>
      </g>

      {/* Phase 3 : les gouttelettes apparaissent (le nuage visible) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {GOUTTES.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="7" fill="#dbeafe" opacity="0.92" />
        ))}
        <text x="200" y="200" fill="#dbeafe" fontSize="15" fontFamily={police}>{legende.gouttelettes}</text>
      </g>

      {/* Phase 4 : si léger que ça flotte */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {[160, 196, 232].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="112" x2={x} y2="100" stroke="#a3e635" strokeWidth="2" />
            <path d={`M${x - 4} 104 L${x} 96 L${x + 4} 104 Z`} fill="#a3e635">
              {anime && <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </path>
          </g>
        ))}
        <text x="210" y="224" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.flotte}</text>
      </g>
    </svg>
  );
}
