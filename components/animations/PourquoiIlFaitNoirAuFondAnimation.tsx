'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Une colonne de profondeur : la lumière entre par le haut, s'absorbe peu à
 * peu, le rouge disparaît en premier puis chaque couleur à son tour, jusqu'au
 * noir complet — la coupe verticale rend l'ordre des couleurs lisible.
 */
export function PourquoiIlFaitNoirAuFondAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#020617" />

      {/* Repère de profondeur, toujours visible */}
      <line x1="40" y1="14" x2="40" y2="228" stroke="#334155" strokeWidth="2" />

      {/* Phase 1 : la lumière du Soleil entre dans l'eau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="18" r="12" fill="#fde68a" />
        {[60, 140, 220, 300].map((x, i) => (
          <line key={x} x1={x} y1="30" x2={x} y2="220" stroke="#fef3c7" strokeWidth="2">
            {anime && (
              <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="60" y="236" fill="#fef3c7" fontSize="14" fontFamily={police} style={legende(0)}>
          la lumière entre
        </text>
      </g>

      {/* Phase 2 : l'eau l'absorbe peu à peu */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[60, 140, 220, 300].map((x, i) => (
          <line key={x} x1={x} y1="30" x2={x} y2="120" stroke="#fde68a" strokeWidth="2">
            {anime && (
              <animate attributeName="y2" values="220;80;220" dur="2.4s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="60" y="140" fill="#fde68a" fontSize="14" fontFamily={police} style={legende(1)}>
          l’eau l’absorbe
        </text>
      </g>

      {/* Phase 3 : chaque couleur disparaît à son tour, le rouge d'abord */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <rect x="60" y="30" width="300" height="18" fill="#ef4444" />
        <rect x="60" y="52" width="300" height="18" fill="#f97316" />
        <rect x="60" y="74" width="300" height="18" fill="#facc15" />
        <rect x="60" y="96" width="300" height="26" fill="#22c55e" />
        <rect x="60" y="126" width="300" height="60" fill="#0ea5e9" />
        <text x="60" y="210" fill="#ef4444" fontSize="14" fontFamily={police} style={legende(2)}>
          le rouge s’efface
        </text>
      </g>

      {/* Phase 4 : au-delà, obscurité totale */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <rect x="40" y="186" width="320" height="42" fill="#000000" />
        <text x="60" y="212" fill="#94a3b8" fontSize="14" fontFamily={police} style={legende(3)}>
          nuit noire, tout en bas
        </text>
      </g>
    </svg>
  );
}
