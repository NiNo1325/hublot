'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    bacteries: 'on ajoute des bactéries',
    sucre: 'elles mangent le sucre',
    acide: 'ça fabrique de l’acide',
    yaourt: 'c’est un yaourt !',
  },
  en: {
    bacteries: 'we add bacteria',
    sucre: 'they eat the sugar',
    acide: 'that makes acid',
    yaourt: 'it’s a yoghurt!',
  },
};

/**
 * Des bactéries lactiques mangent le sucre du lait tiède et produisent de
 * l'acide lactique, qui resserre les protéines en un gel : c'est le yaourt.
 * Toutes les bactéries ne sont pas nuisibles, certaines nous sont précieuses.
 */
export function PourquoiLeLaitDevientYaourtAnimation({
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
      <rect width="400" height="240" fill="#131320" />

      {/* Le pot, toujours visible */}
      <path d="M150 90 h100 l-10 100 a40 20 0 0 1 -80 0 Z" fill="none" stroke="#818cf8" strokeWidth="3" />

      {/* Phase 1 : on ajoute de bonnes bactéries */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M156 96 h88 l-8 40 h-72 Z" fill="#f5f3ff" />
        {[[180, 110], [200, 118], [220, 108]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#c084fc">
            {anime && <animate attributeName="cy" values={`${cy - 30};${cy}`} dur="1.4s" begin={`${i * 0.2}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="60" y="210" fill="#c084fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.bacteries}</text>
      </g>

      {/* Phase 2 : elles mangent le sucre du lait */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M154 96 h92 l-8 56 h-76 Z" fill="#f5f3ff" />
        <path d="M192 118 h16 l-4 6 h8 l-4 6 h16" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
        <circle cx="200" cy="120" r="5" fill="#c084fc">
          {anime && <animate attributeName="cx" values="180;220;180" dur="2.2s" repeatCount="indefinite" />}
        </circle>
        <text x="66" y="210" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.sucre}</text>
      </g>

      {/* Phase 3 : elles fabriquent de l'acide */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M152 96 h96 l-8 72 h-80 Z" fill="#ede9fe" />
        {[[184, 140], [200, 150], [216, 140]].map(([cx, cy], i) => (
          <path key={i} d={`M${cx} ${cy} q-4 8 0 14 q4 -6 0 -14 Z`} fill="#f472b6">
            {anime && phase === 2 && (
              <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="72" y="210" fill="#f472b6" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.acide}</text>
      </g>

      {/* Phase 4 : le lait épaissit en yaourt */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M150 96 h100 l-10 96 a40 20 0 0 1 -80 0 Z" fill="#fde047" />
        {[105, 122, 139, 156, 173].map((y) => (
          <line key={y} x1="162" y1={y} x2="238" y2={y} stroke="#fef9c3" strokeWidth="2" />
        ))}
        <text x="80" y="212" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.yaourt}</text>
      </g>
    </svg>
  );
}
