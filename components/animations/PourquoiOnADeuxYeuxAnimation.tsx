'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Deux yeux, un objet devant eux : chaque œil vise sous un angle légèrement
 * différent, l'objet « saute » quand on ferme un œil puis l'autre, et le
 * cerveau, en comparant les deux images, en déduit la distance — représentée
 * par des anneaux concentriques à la fin.
 */
export function PourquoiOnADeuxYeuxAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Les deux yeux */}
      <circle cx="130" cy="190" r="16" fill="#f5f5f4" />
      <circle cx="130" cy="190" r="7" fill="#7c4a34" />
      <circle cx="270" cy="190" r="16" fill="#f5f5f4" />
      <circle cx="270" cy="190" r="7" fill="#7c4a34" />

      {/* L'objet regardé */}
      <circle cx="200" cy="80" r="16" fill="#f9a8d4" />

      {/* Phase 1 : deux images légèrement différentes */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <line x1="130" y1="190" x2="200" y2="80" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="270" y1="190" x2="200" y2="80" stroke="#4ade80" strokeWidth="2" strokeDasharray="4 4" />
        <text x="60" y="34" fill="#a3a3a3" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>deux angles un peu différents</text>
      </g>

      {/* Phase 2 : ferme un œil, puis l'autre : l'objet saute */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="80" r="18" fill="none" stroke="#f9a8d4" strokeWidth="2">
          {anime && (
            <animate attributeName="cx" values="190;210;190" dur="1.8s" repeatCount="indefinite" />
          )}
        </circle>
        <rect x="118" y="182" width="24" height="16" fill="#0f1b33">
          {anime && (
            <animate attributeName="opacity" values="0;1;0;0" dur="1.8s" repeatCount="indefinite" />
          )}
        </rect>
        <rect x="258" y="182" width="24" height="16" fill="#0f1b33">
          {anime && (
            <animate attributeName="opacity" values="0;0;1;0" dur="1.8s" repeatCount="indefinite" />
          )}
        </rect>
        <text x="90" y="230" fill="#f9a8d4" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>l’objet a l’air de sauter</text>
      </g>

      {/* Phase 3 : le cerveau compare les deux images */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="150" r="20" fill="#1e1533" stroke="#38bdf8" strokeWidth="2" />
        <path d="M130 190 Q170 172 190 156" stroke="#38bdf8" strokeWidth="2" fill="none">
          {anime && (
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />
          )}
        </path>
        <path d="M270 190 Q230 172 210 156" stroke="#4ade80" strokeWidth="2" fill="none">
          {anime && (
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" repeatCount="indefinite" />
          )}
        </path>
        <text x="230" y="230" fill="#a3a3a3" fontSize="14" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>il compare, sans arrêt</text>
      </g>

      {/* Phase 4 : il en déduit la distance, le relief */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {phase === 3 && [26, 40, 54].map((r, i) => (
          <circle key={r} cx="200" cy="80" r={r} fill="none" stroke="#fbbf24" strokeWidth="2" opacity={0.7 - i * 0.2} />
        ))}
        <text x="70" y="34" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>et devine la distance</text>
      </g>
    </svg>
  );
}
