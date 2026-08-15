'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['reserves', 'ralenti', 'economie', 'reveil'] as const;

const LEGENDES = {
  fr: {
    reserves: 'faire des réserves',
    ralenti: 'cœur lent, corps froid',
    economie: 'presque zéro énergie',
    reveil: 'réveil au printemps',
  },
  en: {
    reserves: 'building up reserves',
    ralenti: 'slow heart, cold body',
    economie: 'almost zero energy',
    reveil: 'waking up in spring',
  },
};

/**
 * L'hibernation n'est pas un long sommeil : le corps se met au ralenti extrême.
 * En phase « ralenti », le cœur lent (battement espacé) et le thermomètre bas
 * sont la cause ; en « économie », le « Zzz » barré réfute le simple sommeil.
 */
export function HibernationAnimation({
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
      <rect width="400" height="240" fill="#1a1408" />
      {/* terrier */}
      <path d="M120 168 Q200 120 280 168 Z" fill="#3a2c17" />
      <path d="M120 168 Q200 120 280 168" stroke="#5b4028" strokeWidth="4" fill="none" />
      {/* animal roulé en boule */}
      <circle cx="200" cy="150" r="26" fill="#8a6a3a" />
      {[210, 230, 250, 270, 290, 310, 330].map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <line key={a} x1={200 + Math.cos(r) * 24} y1={150 + Math.sin(r) * 24} x2={200 + Math.cos(r) * 34} y2={150 + Math.sin(r) * 34} stroke="#5b4028" strokeWidth="3" />
        );
      })}

      {/* Phase 1 : les réserves */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="120" cy="80" rx="12" ry="14" fill="#8a5a2b" />
        <rect x="114" y="64" width="12" height="6" rx="2" fill="#5b3a18" />
        <line x1="132" y1="88" x2="176" y2="128" stroke="#a3e635" strokeWidth="3" />
        <path d="M170 120 L180 130 L166 132 Z" fill="#a3e635" />
        <text x="20" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.reserves}</text>
      </g>

      {/* Phase 2 : le ralenti — cœur lent + thermomètre bas */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g transform="translate(70 60)">
          <path d="M0 6 C-10 -6 -24 4 0 24 C24 4 10 -6 0 6 Z" fill="#f43f5e">
            {anime && <animate attributeName="opacity" values="1;0.5;1" dur="2.6s" repeatCount="indefinite" />}
          </path>
        </g>
        {/* thermomètre bas */}
        <g transform="translate(320 52)">
          <rect x="-4" y="-20" width="8" height="34" rx="4" fill="#334155" />
          <rect x="-2" y="4" width="4" height="10" fill="#38bdf8" />
          <circle cx="0" cy="18" r="7" fill="#38bdf8" />
        </g>
        <text x="20" y="224" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.ralenti}</text>
      </g>

      {/* Phase 3 : l'économie — presque zéro énergie, pas un simple dodo */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {/* jauge d'énergie quasi immobile */}
        <g transform="translate(300 96)">
          <rect x="0" y="0" width="60" height="16" rx="4" fill="#0f2a1a" stroke="#a3e635" strokeWidth="1.5" />
          <rect x="2" y="2" width="6" height="12" rx="2" fill="#a3e635" />
        </g>
        {/* Zzz barré */}
        <g transform="translate(120 70)">
          <text x="0" y="0" fill="#93a4c4" fontSize="20" fontFamily={police}>Zzz</text>
          <line x1="-6" y1="-16" x2="42" y2="6" stroke="#f43f5e" strokeWidth="4" />
        </g>
        <text x="220" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.economie}</text>
      </g>

      {/* Phase 4 : le réveil au printemps */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="60" cy="46" r="14" fill="#fbbf24" />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const r = (a * Math.PI) / 180;
          return <line key={a} x1={60 + Math.cos(r) * 18} y1={46 + Math.sin(r) * 18} x2={60 + Math.cos(r) * 26} y2={46 + Math.sin(r) * 26} stroke="#fbbf24" strokeWidth="2.5" />;
        })}
        <circle cx="192" cy="146" r="2.6" fill="#0f1b12" />
        <circle cx="208" cy="146" r="2.6" fill="#0f1b12" />
        <text x="220" y="224" fill="#fbbf24" fontSize="15" fontFamily={police}>{legende.reveil}</text>
      </g>
    </svg>
  );
}
