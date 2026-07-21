'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['piquant', 'echelle', 'bases', 'neutraliser'] as const;

/** Quinze graduations, du rouge acide au bleu basique en passant par le vert. */
const GRADUATIONS = Array.from({ length: 15 }, (_, i) => i);

function couleurPh(ph: number) {
  if (ph < 7) return `hsl(${8 + ph * 6} 80% 55%)`;
  if (ph === 7) return '#4ade80';
  return `hsl(${190 + (ph - 7) * 8} 75% 55%)`;
}

/**
 * L'échelle est montrée entière dès le départ, avec ses deux extrémités
 * traitées à égalité : c'est la symétrie qui corrige l'idée que seul le côté
 * acide serait dangereux.
 */
export function AcideBaseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'échelle de pH */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {GRADUATIONS.map((ph) => (
          <rect key={ph} x={20 + ph * 24} y="100" width="23" height="26" fill={couleurPh(ph)} />
        ))}
        <text x="20" y="148" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          0
        </text>
        <text x="188" y="148" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          7
        </text>
        <text x="348" y="148" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          14
        </text>
      </g>

      {/* Le citron : un acide qu'on mange */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <ellipse cx="68" cy="66" rx="17" ry="12" fill="#facc15" />
        <path d="M68 92 l-6 -10 l12 0 z" fill="#facc15" />
        <text x="30" y="46" fill="#facc15" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          citron
        </text>
      </g>

      {/* La soude : l'autre extrémité, tout aussi corrosive */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="336" y="54" width="26" height="26" rx="3" fill="#38bdf8" />
        <path d="M349 92 l-6 -10 l12 0 z" fill="#38bdf8" />
        <text x="316" y="46" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          soude
        </text>
        <text x="14" y="210" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          les deux bouts brûlent
        </text>
      </g>

      {/* La neutralisation : les deux convergent vers sept */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <g>
          <line x1="60" y1="176" x2="176" y2="176" stroke="#4ade80" strokeWidth="3" />
          <path d="M170 170 L186 176 L170 182 Z" fill="#4ade80" />
          {anime && phase === 3 && (
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          )}
        </g>
        <g>
          <line x1="340" y1="176" x2="224" y2="176" stroke="#4ade80" strokeWidth="3" />
          <path d="M230 170 L214 176 L230 182 Z" fill="#4ade80" />
          {anime && phase === 3 && (
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
          )}
        </g>
        <text x="14" y="234" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ensemble : de l’eau et un sel
        </text>
      </g>
    </svg>
  );
}
