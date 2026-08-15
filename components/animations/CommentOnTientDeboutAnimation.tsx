'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    tubes: 'des tubes remplis de liquide',
    liquide: 'le liquide se déplace',
    alerte: '« attention, tu penches ! »',
    rattrape: 'et il se rattrape seul',
  },
  en: {
    tubes: 'tubes filled with liquid',
    liquide: 'the liquid shifts',
    alerte: '“careful, you’re tipping!”',
    rattrape: 'and it catches itself',
  },
};

/**
 * Une tête, ses canaux remplis de liquide et un petit bonhomme en équilibre
 * se partagent l'écran : la tête penche, le liquide se déplace dans les
 * canaux, un signal part vers le cerveau, et le bonhomme se rattrape.
 */
export function CommentOnTientDeboutAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);
  const penche = phase >= 1 && phase <= 2;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La tête, qui penche pendant que le liquide bouge */}
      <g style={{ transform: penche ? 'rotate(16deg)' : 'rotate(0deg)', transformOrigin: '300px 150px', transition: 'transform 700ms ease' }}>
        <circle cx="300" cy="90" r="46" fill="#e3ad8f" />
        {/* Les trois canaux, remplis de liquide */}
        <circle cx="322" cy="76" r="16" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <circle cx="332" cy="94" r="16" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <circle cx="316" cy="98" r="16" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <circle cx={penche ? 330 : 322} cy={penche ? 82 : 68} r="4" fill="#f9a8d4" style={{ transition: 'all 700ms ease' }} />
      </g>

      {/* Le bonhomme, en bas, qui garde l'équilibre */}
      <g transform="translate(80 200)">
        <circle cx="0" cy="-46" r="10" fill="#a3a3a3" />
        <line x1="0" y1="-36" x2="0" y2="0" stroke="#a3a3a3" strokeWidth="6" strokeLinecap="round" />
        <g style={{ transform: phase === 3 ? 'rotate(0deg)' : penche ? 'rotate(10deg)' : 'rotate(0deg)', transformOrigin: '0px 0px', transition: 'transform 500ms ease' }}>
          <line x1="0" y1="-6" x2="-16" y2="18" stroke="#a3a3a3" strokeWidth="5" strokeLinecap="round" />
          <line x1="0" y1="-6" x2="16" y2="18" stroke="#a3a3a3" strokeWidth="5" strokeLinecap="round" />
        </g>
        <line x1="0" y1="0" x2="-10" y2="24" stroke="#a3a3a3" strokeWidth="6" strokeLinecap="round" />
        <line x1="0" y1="0" x2="10" y2="24" stroke="#a3a3a3" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Phase 1 : des tubes remplis de liquide */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <text x="180" y="34" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.tubes}</text>
      </g>

      {/* Phase 2 : le liquide bouge quand la tête bouge */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <text x="180" y="200" fill="#f9a8d4" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.liquide}</text>
      </g>

      {/* Phase 3 : ça prévient le cerveau */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M260 100 Q220 150 130 190" stroke="#4ade80" strokeWidth="2.5" strokeDasharray="4 4" fill="none">
          {anime && (
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.2s" repeatCount="indefinite" />
          )}
        </path>
        <text x="20" y="34" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.alerte}</text>
      </g>

      {/* Phase 4 : le corps se rattrape */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <text x="20" y="34" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.rattrape}</text>
      </g>
    </svg>
  );
}
