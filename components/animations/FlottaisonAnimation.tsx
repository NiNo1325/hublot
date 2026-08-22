'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['lourd', 'boule', 'creux', 'place'] as const;

const LEGENDES = {
  fr: {
    boule: 'en boule : coule',
    coque: 'en coque : flotte',
    eau: 'l’eau',
    repousse: 'repousse',
    place: 'ce qui compte : la place occupée',
  },
  en: {
    boule: 'a ball: it sinks',
    coque: 'a hull: it floats',
    eau: 'the water',
    repousse: 'pushes up',
    place: 'what counts: the room taken up',
  },
};

/**
 * La boule coule et la coque flotte, avec la même matière : c'est la
 * démonstration que la masse ne décide pas, mais le volume occupé.
 */
export function FlottaisonAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'eau */}
      <path d="M0 108 h400 v132 H0 Z" fill="#0c4a6e" />
      <path d="M0 108 q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 v8 H0 Z" fill="#38bdf8" opacity="0.55" />

      {/* La boule : même matière, elle coule */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="88" cy="96" r="20" fill="#94a3b8">
          {anime && phase === 1 && (
            <animate attributeName="cy" values="90;208" dur="2.6s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="46" y="228" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.boule}
        </text>
      </g>

      {/* La coque creuse : même matière, elle flotte */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {/*
          Une coque, c'est-à-dire une paroi et de l'air dedans.

          Le trapèze était uniformément plein, de la teinte exacte de la boule
          qui vient de couler : ni paroi, ni creux. Or le creux est le seul
          changement entre l'objet qui coule et celui qui flotte, et c'est tout
          le propos de la phase.
        */}
        {/* L'air enfermé, peint de la couleur du ciel : sans lui, le creux
            laissait voir la mer et la coque semblait pleine d'eau. */}
        <path d="M211 100 L224 133 L280 133 L293 100 Z" fill="#0f1b33" />
        <path d="M204 100 L220 140 L284 140 L300 100 L293 100 L280 133 L224 133 L211 100 Z" fill="#94a3b8">
          {anime && phase >= 2 && (
            <animate attributeName="opacity" values="0.9;1;0.9" dur="2.4s" repeatCount="indefinite" />
          )}
        </path>
        {[[240, 118], [258, 112], [268, 124]].map(([cx, cy]) => (
          <circle key={cx} cx={cx} cy={cy} r="3.5" fill="#e0f2fe" opacity="0.5" />
        ))}
        <text x="196" y="84" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.coque}
        </text>
      </g>

      {/* L'eau déplacée et la poussée */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[228, 252, 276].map((x) => (
          <g key={x}>
            <line x1={x} y1="168" x2={x} y2="146" stroke="#7dd3fc" strokeWidth="4" />
            <path d={`M${x - 6} 152 L${x} 138 L${x + 6} 152 Z`} fill="#7dd3fc" />
          </g>
        ))}
        <text x="312" y="164" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.eau}
        </text>
        <text x="312" y="180" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.repousse}
        </text>
        <text x="103" y="34" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.place}
        </text>
      </g>
    </svg>
  );
}
