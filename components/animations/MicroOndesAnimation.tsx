'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['de-linterieur', 'agiter-leau', 'deux-centimetres', 'metal'] as const;

/**
 * Le dégradé du plat est l'argument : bords chauds, cœur froid. C'est
 * exactement l'inverse de l'image d'une cuisson qui partirait du milieu.
 */
export function MicroOndesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le four et sa porte grillagée */}
      <rect x="40" y="56" width="320" height="132" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line key={i} x1={306 + i * 9} y1="60" x2={306 + i * 9} y2="184" stroke="#475569" strokeWidth="1.5" />
        ))}
      </g>

      {/* Le plat : bords chauds, cœur froid */}
      <ellipse cx="180" cy="128" rx="76" ry="40" fill="#b45309" />
      <ellipse cx="180" cy="128" rx="46" ry="24" fill="#7c2d12" />
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <ellipse cx="180" cy="128" rx="24" ry="13" fill="#38bdf8" />
        <text x="236" y="196" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          froid au cœur
        </text>
      </g>

      {/* Les ondes qui entrent par la gauche */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M${56 + i * 16} 104 q6 8 0 16 q-6 8 0 16`}
            fill="none"
            stroke="#fbbf24"
            strokeWidth="3"
          >
            {anime && (
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="14" y="32" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l’eau s’agite, ça chauffe
        </text>
      </g>

      {/* L'épaisseur réellement atteinte */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="104" y1="128" x2="134" y2="128" stroke="#e2e8f0" strokeWidth="2" />
        <line x1="104" y1="122" x2="104" y2="134" stroke="#e2e8f0" strokeWidth="2" />
        <line x1="134" y1="122" x2="134" y2="134" stroke="#e2e8f0" strokeWidth="2" />
        <text x="14" y="210" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          1 à 2 cm seulement
        </text>
      </g>

      {/* Le métal, et les étincelles */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M262 88 l10 -22 l4 2 l-8 20 z" fill="#cbd5e1" />
        {[0, 1].map((i) => (
          <path key={i} d={`M${268 + i * 12} 70 l6 -8 l-3 8 l6 -4`} fill="none" stroke="#f87171" strokeWidth="2">
            {anime && phase === 3 && (
              <animate attributeName="opacity" values="0;1;0" dur="0.9s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="14" y="234" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          jamais de métal
        </text>
      </g>
    </svg>
  );
}
