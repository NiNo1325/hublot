'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['orage', 'monte-descend', 'couches', 'tombe'] as const;

const LEGENDES = {
  fr: {
    orage: 'un orage violent',
    monteDescend: 'il monte et descend',
    couches: 'des couches de glace',
    tombe: 'trop lourd, il tombe',
  },
  en: {
    orage: 'a violent storm',
    monteDescend: 'it goes up and down',
    couches: 'layers of ice',
    tombe: 'too heavy, it falls',
  },
};

/**
 * La grêle n'est pas de la neige en boule : dans un orage, le grêlon monte et
 * descend, porté par les courants d'air, et s'entoure à chaque tour d'une couche
 * de glace, jusqu'à tomber. Les allers-retours et les couches sont la cause.
 */
export function GreleAnimation({
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
      <rect width="400" height="240" fill="#141d31" />
      <rect y="178" width="400" height="62" fill="#243049" />

      {/* nuage d'orage */}
      <g>
        <ellipse cx="160" cy="52" rx="70" ry="26" fill="#39445c" />
        <ellipse cx="112" cy="60" rx="34" ry="18" fill="#39445c" />
        <ellipse cx="208" cy="60" rx="34" ry="18" fill="#39445c" />
      </g>

      {/* Phase 1 : un orage violent (courant ascendant) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[120, 160, 200].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="168" x2={x} y2="86" stroke="#7dd3fc" strokeWidth="2.5" />
            <path d={`M${x - 5} 94 L${x} 82 L${x + 5} 94 Z`} fill="#7dd3fc">
              {anime && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </path>
          </g>
        ))}
        <text x="20" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police}>{legende.orage}</text>
      </g>

      {/* Phase 2 : le grêlon monte et descend */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <line x1="250" y1="168" x2="250" y2="86" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="250" cy="120" r="9" fill="#dbeafe">
          {anime && <animate attributeName="cy" values="150;92;150" dur="3s" repeatCount="indefinite" />}
        </circle>
        <text x="20" y="224" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.monteDescend}</text>
      </g>

      {/* Phase 3 : les couches de glace */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <circle cx="250" cy="104" r="26" fill="#bae6fd" />
        <circle cx="250" cy="104" r="19" fill="none" stroke="#7dd3fc" strokeWidth="2" />
        <circle cx="250" cy="104" r="12" fill="none" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="250" cy="104" r="5" fill="#0ea5e9" />
        <text x="240" y="200" fill="#bae6fd" fontSize="15" fontFamily={police}>{legende.couches}</text>
      </g>

      {/* Phase 4 : trop lourd, il tombe */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="150" cy="110" r="12" fill="#e0f2fe">
          {anime && <animate attributeName="cy" values="80;168" dur="1.4s" repeatCount="indefinite" />}
        </circle>
        <text x="230" y="224" fill="#e0f2fe" fontSize="15" fontFamily={police}>{legende.tombe}</text>
      </g>
    </svg>
  );
}
