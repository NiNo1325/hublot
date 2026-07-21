'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['famille', 'distances', 'vide', 'rocheuses-gazeuses'] as const;

/** Le rang schématique des manuels : planètes serrées, régulièrement espacées. */
const SCHEMA = [60, 96, 132, 168, 214, 258, 302, 346];

/**
 * Les deux rangées disent tout : en haut le schéma des manuels, en bas les
 * mêmes planètes à leur distance réelle, tassées à gauche et suivies d'un vide
 * qui occupe presque toute la largeur.
 */
const REEL = [24, 30, 38, 48, 106, 176, 300, 380];

const TAILLES = [3, 4.5, 4.5, 3.5, 12, 10, 7, 7];
const GAZEUSE = [false, false, false, false, true, true, true, true];

export function PlanetesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const typees = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le Soleil, à gauche des deux rangées */}
      <circle cx="14" cy="72" r="16" fill="#fde047" />
      <circle cx="14" cy="176" r="16" fill="#fde047" />

      {/* Rangée du haut : le schéma trompeur */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {SCHEMA.map((x, i) => (
          <circle key={x} cx={x} cy="72" r={TAILLES[i]} fill="#94a3b8" />
        ))}
        <text x="14" y="30" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          sur les dessins
        </text>
      </g>

      {/* Rangée du bas : les vraies distances */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {REEL.map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy="176"
            r={TAILLES[i]}
            fill={typees ? (GAZEUSE[i] ? '#f59e0b' : '#a8a29e') : '#94a3b8'}
            style={{ transition: 'fill 900ms ease' }}
          >
            {anime && phase === 1 && (
              <animate attributeName="opacity" values="0.3;1" dur="0.8s" begin={`${i * 0.12}s`} fill="freeze" />
            )}
          </circle>
        ))}
        <text x="14" y="140" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          à la vraie échelle
        </text>
      </g>

      {/* Le vide, qui occupe presque toute la rangée */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="60" y1="196" x2="376" y2="196" stroke="#475569" strokeWidth="2" strokeDasharray="5 7" />
        <text x="14" y="210" fill="#64748b" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          surtout du vide
        </text>
      </g>

      {/* Quatre rocheuses, quatre géantes */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#f59e0b" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          4 rocheuses, 4 géantes
        </text>
      </g>
    </svg>
  );
}
