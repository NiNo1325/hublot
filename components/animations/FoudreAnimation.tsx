'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['charge', 'etincelle', 'lumiere-avant', 'compter'] as const;

const LEGENDES = {
  fr: {
    charge: 'l’électricité s’accumule',
    etincelle: 'une étincelle géante',
    lumiere: 'la lumière va plus vite',
    compter: 'compter = la distance',
  },
  en: {
    charge: 'electricity builds up',
    etincelle: 'a giant spark',
    lumiere: 'light travels faster',
    compter: 'counting = the distance',
  },
};

/**
 * La foudre est une étincelle électrique (charges séparées dans le nuage). La
 * lumière arrive avant le son : les deux fronts, l'un instantané, l'autre lent,
 * matérialisent l'écart de vitesse. Compter les secondes donne la distance.
 */
export function FoudreAnimation({
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
      <rect width="400" height="240" fill="#0c1526" />
      <rect y="178" width="400" height="62" fill="#20243a" />

      {/* nuage d'orage */}
      <g>
        <ellipse cx="150" cy="58" rx="60" ry="26" fill="#3b4252" />
        <ellipse cx="110" cy="66" rx="34" ry="20" fill="#3b4252" />
        <ellipse cx="196" cy="66" rx="34" ry="20" fill="#3b4252" />
      </g>

      {/* maison, en bas à droite */}
      <g>
        <rect x="286" y="150" width="40" height="28" fill="#7a5a3a" />
        <path d="M282 150 L306 132 L330 150 Z" fill="#5b3a18" />
      </g>

      {/* Phase 1 : l'électricité s'accumule */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[110, 150, 190].map((x) => (
          <text key={x} x={x} y="46" fill="#fca5a5" fontSize="14" fontFamily={police}>+</text>
        ))}
        {[120, 150, 180].map((x) => (
          <text key={x} x={x} y="80" fill="#93c5fd" fontSize="16" fontFamily={police}>−</text>
        ))}
        <text x="20" y="200" fill="#e2e8f0" fontSize="15" fontFamily={police}>{legende.charge}</text>
      </g>

      {/* Phase 2 : l'étincelle géante (l'éclair) */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M150 80 L138 112 L158 120 L142 150 L152 176" fill="none" stroke="#fde047" strokeWidth="4" strokeLinejoin="round">
          {anime && <animate attributeName="opacity" values="1;0.4;1" dur="0.9s" repeatCount="indefinite" />}
        </path>
        <text x="20" y="224" fill="#fde047" fontSize="15" fontFamily={police}>{legende.etincelle}</text>
      </g>

      {/* Phase 3 : la lumière va plus vite que le son */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M150 80 L138 112 L158 120 L142 150 L152 176" fill="none" stroke="#fde047" strokeWidth="3" />
        {/* rayon de lumière, instantané jusqu'à la maison */}
        <line x1="150" y1="120" x2="300" y2="150" stroke="#fde047" strokeWidth="2" strokeDasharray="3 3" />
        {/* fronts sonores, lents */}
        {[26, 46, 66].map((r, i) => (
          <path key={r} d={`M${150 - r} 118 A${r} ${r} 0 0 1 ${150 + r} 118`} fill="none" stroke="#94a3b8" strokeWidth="2">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="216" y="200" fill="#fde047" fontSize="15" fontFamily={police}>{legende.lumiere}</text>
      </g>

      {/* Phase 4 : compter les secondes = la distance */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <text x="150" y="120" fill="#94a3b8" fontSize="18" fontFamily={police}>1·2·3</text>
        <line x1="180" y1="120" x2="286" y2="150" stroke="#a3e635" strokeWidth="2" strokeDasharray="5 4" />
        <path d="M280 142 L292 152 L278 156 Z" fill="#a3e635" />
        <text x="216" y="224" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.compter}</text>
      </g>
    </svg>
  );
}
