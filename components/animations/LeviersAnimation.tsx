'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['lourd', 'barre', 'distance', 'echange'] as const;

/**
 * Les deux flèches de déplacement sont dessinées à l'échelle : la main
 * parcourt une grande distance, la charge une petite. C'est l'illustration du
 * compromis — on ne gagne rien gratuitement.
 */
export function LeviersAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const abaisse = phase >= 2;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      <path d="M0 206 h400 v34 H0 Z" fill="#1b2a4a" />

      {/* Charge, trop lourde à mains nues */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect
          x="72" y={abaisse ? 132 : 152} width="52" height="42" rx="6" fill="#94a3b8"
          style={{ transition: 'y 900ms ease' }}
        />
        <text x="76" y={abaisse ? 124 : 144} fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif"
          style={{ transition: 'y 900ms ease' }}>
          lourd
        </text>
      </g>

      {/* Barre et pivot */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <g style={{ transformOrigin: '150px 186px', transform: abaisse ? 'rotate(-9deg)' : 'rotate(4deg)', transition: 'transform 900ms ease' }}>
          <rect x="66" y="180" width="284" height="10" rx="5" fill="#fb923c" />
        </g>
        <path d="M150 186 l-16 26 h32 z" fill="#b9c4da" />
        <text x="126" y="230" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          pivot
        </text>
      </g>

      {/* Bras de levier : la distance au pivot fait tout */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="98" y1="164" x2="150" y2="164" stroke="#34d399" strokeWidth="2.5" strokeDasharray="4 4" />
        <line x1="150" y1="164" x2="330" y2="164" stroke="#34d399" strokeWidth="2.5" strokeDasharray="4 4" />
        <text x="104" y="156" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">court</text>
        <text x="171" y="156" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">long : peu de force suffit</text>
        <circle cx="330" cy="176" r="11" fill="#38bdf8">
          {anime && phase === 2 && (
            <animate attributeName="cy" values="168;186;168" dur="2s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      {/* Le compromis : grand déplacement contre petit déplacement */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <g>
          <line x1="356" y1="130" x2="356" y2="200" stroke="#ffb627" strokeWidth="4" />
          <path d="M348 192 L356 208 L364 192 Z" fill="#ffb627" />
          <text x="188" y="122" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">ta main descend beaucoup</text>
        </g>
        <g>
          <line x1="52" y1="150" x2="52" y2="168" stroke="#ffb627" strokeWidth="4" />
          <path d="M44 156 L52 142 L60 156 Z" fill="#ffb627" />
          <text x="14" y="186" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">ça monte peu</text>
        </g>
      </g>
    </svg>
  );
}
