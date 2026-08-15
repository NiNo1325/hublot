'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    pliees: 'les protéines sont pliées',
    deplie: 'la chaleur les déplie',
    accrochent: 'elles s’accrochent entre elles',
    dur: 'le blanc devient dur',
  },
  en: {
    pliees: 'the proteins are folded',
    deplie: 'the heat unfolds them',
    accrochent: 'they hook on to each other',
    dur: 'the white turns hard',
  },
};

/**
 * La chaleur déplie les protéines du blanc, repliées en pelotes à l'état cru ;
 * elles s'accrochent alors entre elles et forment un réseau solide. C'est une
 * transformation irréversible, contrairement à un beurre qui refond.
 */
export function PourquoiLoeufDurcitAnimation({
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
      <rect width="400" height="240" fill="#1a1610" />

      {/* La coquille d'œuf ouverte, toujours visible */}
      <path d="M140 90 Q200 60 260 90 L268 120 L132 120 Z" fill="#78716c" />
      <ellipse cx="200" cy="170" rx="70" ry="46" fill="none" stroke="#78716c" strokeWidth="3" />

      {/* Phase 1 : le blanc cru, protéines pliées en pelotes */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="170" rx="66" ry="42" fill="#e0e7ff" opacity="0.6" />
        {[[176, 158], [206, 168], [188, 186], [220, 182]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 2" />
        ))}
        <text x="60" y="216" fill="#818cf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.pliees}</text>
      </g>

      {/* Phase 2 : la chaleur les déplie */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="170" rx="66" ry="42" fill="#e0e7ff" opacity="0.7" />
        {[152, 200, 248].map((x, i) => (
          <path key={x} d={`M${x} 210 q-6 -14 0 -28`} stroke="#f87171" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        {[[176, 158], [206, 168]].map(([cx, cy], i) => (
          <path key={i} d={`M${cx - 10} ${cy} q10 -10 20 0`} stroke="#818cf8" strokeWidth="2.5" fill="none" />
        ))}
        <text x="76" y="216" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.deplie}</text>
      </g>

      {/* Phase 3 : elles s'accrochent en un réseau */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="170" rx="66" ry="42" fill="#eef2ff" opacity="0.85" />
        {[[172, 154], [200, 160], [228, 154], [180, 182], [216, 182]].map(([cx, cy], i, arr) => {
          const next = arr[(i + 1) % arr.length];
          return <line key={i} x1={cx} y1={cy} x2={next[0]} y2={next[1]} stroke="#6366f1" strokeWidth="2" />;
        })}
        {[[172, 154], [200, 160], [228, 154], [180, 182], [216, 182]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#6366f1" />
        ))}
        <text x="66" y="216" fill="#6366f1" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.accrochent}</text>
      </g>

      {/* Phase 4 : le blanc devient solide et opaque, pour toujours */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="170" rx="66" ry="42" fill="#fde047" />
        <ellipse cx="200" cy="170" rx="26" ry="18" fill="#fbbf24" />
        <text x="88" y="216" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.dur}</text>
      </g>
    </svg>
  );
}
