'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * La peau en coupe, en bas de l'écran, sert aux deux rôles montrés par la
 * carte : elle arrête d'abord des microbes, puis une glande y fabrique une
 * goutte de sueur qui s'évapore et fait baisser la température.
 */
export function LaPeauNotreBouclierAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Peau en coupe : derme puis épiderme en surface */}
      <rect x="0" y="176" width="400" height="64" fill="#7c3f56" />
      <rect x="0" y="170" width="400" height="6" fill="#f9a8d4" />

      {/* La glande sudoripare, un petit tube enroulé */}
      <path d="M204 236 q-14 -4 -10 -16 q4 -12 16 -8 q10 4 6 -14" fill="none" stroke="#fbbf24" strokeWidth="3" />
      <line x1="216" y1="198" x2="200" y2="170" stroke="#fbbf24" strokeWidth="3" />

      {/* Phase 1 : la peau bouclier, les microbes déviés */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx={90 + i * 110} cy="90" r="5" fill="#4ade80">
              {anime && (
                <animate attributeName="cy" values="60;164;60" dur="2.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              )}
            </circle>
            <path d="M-4 0 h8 M0 -4 v8" transform={`translate(${90 + i * 110} 90)`} stroke="#166534" strokeWidth="1.5" />
          </g>
        ))}
        <text x="20" y="30" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>elle arrête les microbes</text>
      </g>

      {/* Phase 2 : la glande fabrique une goutte de sueur */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="170" r={phase === 1 ? 6 : 4} fill="#7dd3fc">
          {anime && (
            <animate attributeName="cy" values="200;168" dur="1.8s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="20" y="220" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>une glande fait la sueur</text>
      </g>

      {/* Phase 3 : la sueur s'évapore */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[-14, 0, 14].map((dx, i) => (
          <path key={dx} d={`M${200 + dx} 168 q6 -14 0 -28`} stroke="#e0f2fe" strokeWidth="2" fill="none">
            {anime && (
              <animate attributeName="opacity" values="1;0" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
            {anime && (
              <animateTransform attributeName="transform" type="translate" values="0 0; 0 -20" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="240" y="140" fill="#e0f2fe" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>elle devient vapeur</text>
      </g>

      {/* Phase 4 : la température baisse */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <rect x="60" y="60" width="14" height="80" rx="7" fill="none" stroke="#a3a3a3" strokeWidth="2" />
        <rect
          x="64" y={dejaVu(3) ? 100 : 70} width="6" height={dejaVu(3) ? 36 : 66} rx="3"
          fill="#38bdf8"
          style={{ transition: 'y 700ms ease, height 700ms ease' }}
        />
        <circle cx="67" cy="140" r="9" fill="#38bdf8" />
        <text x="20" y="200" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>ça rafraîchit</text>
      </g>
    </svg>
  );
}
