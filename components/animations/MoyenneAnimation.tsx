'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['calcul', 'trompe', 'mediane', 'dispersion'] as const;

/** Dix barres identiques, puis une onzième hors norme. */
const PETITES = Array.from({ length: 10 }, (_, i) => 30 + i * 20);

const SOL = 180;

/**
 * La ligne de la moyenne saute au-dessus de dix barres sur onze dès que la
 * valeur extrême apparaît, tandis que celle de la médiane ne bouge pas. Les
 * deux lignes côte à côte disent l'essentiel sans commentaire.
 */
export function MoyenneAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const extreme = phase >= 1;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Les dix valeurs ordinaires */}
      {PETITES.map((x) => (
        <rect key={x} x={x} y={SOL - 20} width="14" height="20" fill="#7dd3fc" />
      ))}

      {/* La valeur extrême, coupée en haut du cadre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <rect x="236" y="34" width="14" height={SOL - 34} fill="#f472b6" />
        <path d="M236 34 l4 -8 l4 8 l4 -8 l2 8 z" fill="#f472b6" />
      </g>

      {/* La moyenne, qui décolle dès que l'extrême entre */}
      <line
        x1="20" y1={extreme ? 71 : SOL - 20}
        x2="380" y2={extreme ? 71 : SOL - 20}
        stroke="#fbbf24" strokeWidth="3"
        style={{ transition: 'y1 1200ms ease, y2 1200ms ease' }}
      />
      <text x="270" y={extreme ? 66 : SOL - 26} fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif" style={{ transition: 'y 1200ms ease' }}>
        moyenne
      </text>

      {/* La médiane, qui ne bouge pas */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="20" y1={SOL - 20} x2="380" y2={SOL - 20} stroke="#4ade80" strokeWidth="3" strokeDasharray="6 5" />
        {/* Décalée en abscisse : au repos, la moyenne est à la même hauteur. */}
        <text x="140" y="152" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          médiane
        </text>
      </g>

      {/* Le sol */}
      <line x1="14" y1={SOL} x2="386" y2={SOL} stroke="#475569" strokeWidth="2" />

      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="14" y="210" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          dix personnes sur onze
        </text>
      </g>
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={300 + i * 22} cy="196" r="4" fill="#94a3b8">
            {anime && phase === 3 && (
              <animate attributeName="cy" values="196;188;196" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="234" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          un seul nombre ne suffit pas
        </text>
      </g>
    </svg>
  );
}
