'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Une grande boucle en coupe : l'eau chaude part de l'équateur en surface,
 * plonge en refroidissant près du pôle, revient au fond, puis remonte — un
 * courant marin permanent, distinct des vagues de vent.
 */
export function LesFleuvesDansLaMerAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0a2f4f" />

      {/* Soleil à l'équateur (gauche) et banquise au pôle (droite) */}
      <circle cx="36" cy="34" r="14" fill="#fbbf24" />
      <path d="M340 20 L376 20 L368 36 L348 36 Z" fill="#e0f2fe" />

      {/* Phase 1 : l'eau chaude part de l'équateur en surface */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M60 44 L320 44" stroke="#fb923c" strokeWidth="4" fill="none" markerEnd="url(#flecheChaude)" />
        {anime && (
          <circle cx="60" cy="44" r="4" fill="#fed7aa">
            <animate attributeName="cx" values="60;320" dur="2.4s" repeatCount="indefinite" />
          </circle>
        )}
        <text x="16" y="70" fill="#fb923c" fontSize="14" fontFamily={police} style={legende(0)}>
          eau chaude vers le pôle
        </text>
      </g>

      {/* Phase 2 : elle refroidit et plonge près du pôle */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M330 46 Q352 90 340 190" stroke="#38bdf8" strokeWidth="4" fill="none" />
        {anime && (
          <circle cx="330" cy="46" r="4" fill="#7dd3fc">
            <animateMotion path="M0 0 Q22 44 10 144" dur="2.2s" repeatCount="indefinite" />
          </circle>
        )}
        <text x="230" y="120" fill="#38bdf8" fontSize="14" fontFamily={police} style={legende(1)}>
          elle plonge, refroidie
        </text>
      </g>

      {/* Phase 3 : au fond, elle revient vers l'équateur */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M340 196 L70 196" stroke="#0ea5e9" strokeWidth="4" fill="none" />
        {anime && (
          <circle cx="340" cy="196" r="4" fill="#bae6fd">
            <animate attributeName="cx" values="340;70" dur="2.4s" repeatCount="indefinite" />
          </circle>
        )}
        <text x="16" y="222" fill="#0ea5e9" fontSize="14" fontFamily={police} style={legende(2)}>
          elle revient au fond
        </text>
      </g>

      {/* Phase 4 : la boucle complète, un fleuve invisible qui tourne */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path
          d="M60 44 L320 44 Q352 90 340 190 L70 196 Q46 140 60 44"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeDasharray="3 5"
          fill="none"
        />
        {dejaVu(3) && (
          <text x="120" y="130" fill="#60a5fa" fontSize="14" fontFamily={police} style={legende(3)}>
            une grande boucle
          </text>
        )}
      </g>

      <defs>
        <marker id="flecheChaude" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#fb923c" />
        </marker>
      </defs>
    </svg>
  );
}
