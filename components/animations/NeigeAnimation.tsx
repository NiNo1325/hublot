'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['pas-pluie-gelee', 'vapeur-au-froid', 'cristal-six', 'flocon'] as const;

const LEGENDES = {
  fr: {
    pasPluie: 'pas de la pluie gelée',
    vapeur: 'la vapeur devient glace',
    six: 'six branches',
    flocons: 'les flocons tombent',
  },
  en: {
    pasPluie: 'not frozen rain',
    vapeur: 'vapour turns into ice',
    six: 'six arms',
    flocons: 'the flakes fall',
  },
};

/** Flocon à six branches centré sur (cx, cy). */
function Flocon({ cx, cy, r, w = 2.5 }: { cx: number; cy: number; r: number; w?: number }) {
  return (
    <g stroke="#e0f2fe" strokeWidth={w} strokeLinecap="round">
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const a = (deg * Math.PI) / 180;
        const ex = cx + Math.cos(a) * r;
        const ey = cy + Math.sin(a) * r;
        const mx = cx + Math.cos(a) * r * 0.55;
        const my = cy + Math.sin(a) * r * 0.55;
        const b1 = ((deg + 45) * Math.PI) / 180;
        const b2 = ((deg - 45) * Math.PI) / 180;
        return (
          <g key={deg}>
            <line x1={cx} y1={cy} x2={ex} y2={ey} />
            <line x1={mx} y1={my} x2={mx + Math.cos(b1) * r * 0.28} y2={my + Math.sin(b1) * r * 0.28} />
            <line x1={mx} y1={my} x2={mx + Math.cos(b2) * r * 0.28} y2={my + Math.sin(b2) * r * 0.28} />
          </g>
        );
      })}
    </g>
  );
}

/**
 * La neige n'est pas de la pluie gelée (goutte gelée barrée) : la vapeur se
 * change directement en glace et pousse en cristal à six branches.
 */
export function NeigeAnimation({
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
      <rect width="400" height="240" fill="#15243d" />

      {/* Phase 1 : pas de la pluie gelée (goutte → glace ronde, barré) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {/*
          La goutte barrée n’est plus une larme pointue.

          Dans ce même monde, `la-forme-des-gouttes-de-pluie` enseigne que « les
          vraies gouttes n’ont jamais cette forme pointue » et barre exactement
          ce pictogramme : l’enfant voyait ici la larme que la carte voisine lui
          apprend à rejeter. Le barré, lui, reste — il porte sur la
          transformation, pas sur la forme.
        */}
        <path d="M66 74 q0 -18 14 -18 q14 0 14 18 q0 11 -14 11 q-14 0 -14 -11 z" fill="#38bdf8" />
        <line x1="120" y1="76" x2="150" y2="76" stroke="#93a4c4" strokeWidth="2" />
        <path d="M146 71 L156 76 L146 81 Z" fill="#93a4c4" />
        <circle cx="176" cy="76" r="12" fill="#bae6fd" />
        <line x1="62" y1="48" x2="192" y2="96" stroke="#f43f5e" strokeWidth="4" />
        <text x="20" y="200" fill="#fca5a5" fontSize="15" fontFamily={police}>{legende.pasPluie}</text>
      </g>

      {/* Phase 2 : la vapeur devient glace directement */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[[210, 60], [290, 66], [232, 118], [286, 120], [250, 52]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2="250" y2="90" stroke="#7dd3fc" strokeWidth="1.6" strokeDasharray="3 3" />
            <circle cx={x} cy={y} r="3" fill="#7dd3fc">
              {anime && <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
            </circle>
          </g>
        ))}
        <circle cx="250" cy="90" r="6" fill="#e0f2fe" />
        <text x="20" y="224" fill="#7dd3fc" fontSize="15" fontFamily={police}>{legende.vapeur}</text>
      </g>

      {/* Phase 3 : le cristal à six branches */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <Flocon cx={250} cy={90} r={44} />
        <text x="250" y="200" fill="#e0f2fe" fontSize="15" fontFamily={police}>{legende.six}</text>
      </g>

      {/* Phase 4 : les flocons tombent */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <Flocon cx={110} cy={70} r={16} w={2} />
        <Flocon cx={180} cy={110} r={13} w={2} />
        <Flocon cx={150} cy={150} r={18} w={2} />
        <Flocon cx={240} cy={140} r={12} w={2} />
        <text x="230" y="224" fill="#e0f2fe" fontSize="15" fontFamily={police}>{legende.flocons}</text>
      </g>
    </svg>
  );
}
