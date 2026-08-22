'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    minuscules: 'des êtres minuscules',
    lumiere: 'ils captent la lumière',
    air: 'ils fabriquent de l’air',
    ocean: 'ils nourrissent l’océan',
  },
  en: {
    minuscules: 'tiny living things',
    lumiere: 'they catch the light',
    air: 'they make the air',
    ocean: 'they feed the ocean',
  },
};

/**
 * Des points minuscules flottent en surface, captent le Soleil, relâchent
 * des bulles d'air, puis nourrissent une chaîne qui grandit jusqu'à un grand
 * poisson — le plancton, géant invisible de l'océan.
 */
export function LePlanctonMinusculeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const points = [60, 100, 140, 180, 220, 260, 300, 340];
  const apparition = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#083344" />
      <rect width="400" height="60" fill="#0e7490" opacity="0.5" />
      <circle cx="200" cy="24" r="14" fill="#fde68a" />

      {/* Phase 1 : des êtres minuscules flottent partout */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {points.map((x, i) => (
          <circle key={x} cx={x} cy="80" r="3" fill="#a3e635">
            {anime && (
              <animate attributeName="cy" values="76;86;76" dur="2.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="16" y="130" fill="#a3e635" fontSize="14" fontFamily={police} style={apparition(0)}>
          {legende.minuscules}
        </text>
      </g>

      {/* Phase 2 : ils captent la lumière du Soleil */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[100, 200, 300].map((x, i) => (
          <line key={x} x1="200" y1="30" x2={x} y2="80" stroke="#fde68a" strokeWidth="1.5">
            {anime && (
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="16" y="130" fill="#fde68a" fontSize="14" fontFamily={police} style={apparition(1)}>
          {legende.lumiere}
        </text>
      </g>

      {/* Phase 3 : ils fabriquent de l'air */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[90, 170, 250, 330].map((x, i) => (
          <circle key={x} cx={x} cy="80" r="4" fill="#7dd3fc" opacity="0.85">
            {anime && (
              <>
                <animate attributeName="cy" values="80;16" dur="2.2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0" dur="2.2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              </>
            )}
          </circle>
        ))}
        <text x="16" y="130" fill="#7dd3fc" fontSize="14" fontFamily={police} style={apparition(2)}>
          {legende.air}
        </text>
      </g>

      {/* Phase 4 : ils nourrissent presque tout l'océan */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <ellipse cx="130" cy="150" rx="8" ry="5" fill="#fbbf24" />
        {/*
          Une caudale, une dorsale et un œil suffisent à faire un poisson ; des
          nageoires en éventail et un souffle, une baleine. La phase qui nomme
          « poissons, baleines » ne montrait que deux amandes orange, sans
          queue, sans nageoire et sans œil.
        */}
        <g fill="#fb923c">
          <path d="M170 150 Q210 130 250 150 Q210 170 170 150 Z" />
          <path d="M174 150 l-20 -13 v26 z" />
          <path d="M202 140 q10 -12 20 -3 z" />
        </g>
        <circle cx="240" cy="148" r="2.6" fill="#0c2340" />
        <g fill="#f97316">
          <path d="M280 150 Q330 120 370 150 Q330 180 280 150 Z" />
          <path d="M284 150 q-18 -16 -30 -10 q12 10 12 10 q0 0 -12 10 q12 6 30 -10 z" />
          <path d="M326 164 q12 12 24 6 q-10 -8 -24 -6 z" />
        </g>
        <circle cx="357" cy="146" r="3" fill="#0c2340" />
        <path d="M340 130 q-3 -14 3 -20 M344 130 q5 -14 12 -18" stroke="#7dd3fc" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="16" y="200" fill="#f97316" fontSize="14" fontFamily={police} style={apparition(3)}>
          {legende.ocean}
        </text>
      </g>
    </svg>
  );
}
