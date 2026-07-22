'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['pas-de-froid', 'deplacer', 'grille-chaude', 'porte-ouverte'] as const;

/**
 * Les points de chaleur sortent de l'intérieur et ressortent par la grille,
 * dans la même pièce : le trajet complet est dessiné, ce qui rend le paradoxe
 * de la porte ouverte lisible sans avoir à le démontrer.
 */
export function FrigoAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const ouverte = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le frigo, et sa porte qui s'ouvre au dernier temps */}
      <rect x="120" y="52" width="120" height="136" rx="6" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
      <rect x="132" y="64" width="96" height="112" rx="4" fill="#0c4a6e" />
      <g
        style={{
          transform: ouverte ? 'rotate(-38deg)' : 'rotate(0deg)',
          transformOrigin: '120px 120px',
          transition: 'transform 1200ms ease',
        }}
      >
        <rect x="120" y="52" width="18" height="136" rx="4" fill="#94a3b8" />
      </g>

      {/* La chaleur quitte l'intérieur */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[86, 116, 146].map((y, i) => (
          <circle key={y} cx="170" cy={y} r="5" fill="#fb923c">
            {anime && (
              <animate attributeName="opacity" values="1;0.2;1" dur="2s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="32" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          il enlève la chaleur
        </text>
      </g>

      {/* Le transfert à contre-courant, vers la grille */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="196" cy="116" r="5" fill="#fb923c">
            {anime && phase >= 1 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;80 -20" dur="3s" begin={`${i * 0.9}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        <text x="14" y="132" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          du froid vers le chaud
        </text>
      </g>

      {/* La grille arrière, qui rejette la chaleur dans la pièce */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path
          d="M256 70 h34 v14 h-34 v14 h34 v14 h-34 v14 h34 v14 h-34"
          fill="none"
          stroke="#f87171"
          strokeWidth="4"
        />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${300 + i * 14} 84 q6 8 0 16 q-6 8 0 16`} fill="none" stroke="#fb923c" strokeWidth="2">
            {anime && (
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="300" y="60" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          dehors
        </text>
        <text x="14" y="210" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la grille est tiède
        </text>
      </g>

      {/* Le paradoxe */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          porte ouverte : ça réchauffe
        </text>
      </g>
    </svg>
  );
}
