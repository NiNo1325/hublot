'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['corde', 'long-et-fin', 'carre', 'rond'] as const;

/**
 * Les trois formes sont dessinées à la même échelle, neuf pixels par mètre, et
 * ont toutes vingt mètres de tour. La démonstration est donc dans le dessin
 * lui-même : les surfaces se comparent à l'œil, sans qu'il faille croire les
 * chiffres sur parole.
 */
export function PerimetreAireAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La ficelle : vingt mètres, la même pour les trois enclos */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <line x1="20" y1="26" x2="200" y2="26" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round">
          {anime && phase === 0 && (
            <animate attributeName="x2" values="20;200" dur="1.4s" fill="freeze" />
          )}
        </line>
        <text x="214" y="32" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          20 m de tour
        </text>
      </g>

      {/* Neuf mètres sur un : le tour y est, la place n'y est pas */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <rect x="20" y="70" width="81" height="9" fill="#f59e0b" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="3" />
        <text x="20" y="120" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          9 m²
        </text>
      </g>

      {/* Cinq sur cinq : même ficelle, presque trois fois plus de place */}
      <g style={{ opacity: dejaVu(2) ? opacite(2) : 0, transition: 'opacity 600ms ease' }}>
        <rect x="140" y="52" width="45" height="45" fill="#f59e0b" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="3" />
        <text x="140" y="120" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          25 m²
        </text>
      </g>

      {/* Le disque : le maximum possible pour ce tour */}
      <g style={{ opacity: dejaVu(3) ? opacite(3) : 0, transition: 'opacity 600ms ease' }}>
        <circle cx="300" cy="75" r="28.6" fill="#f59e0b" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="3" />
        <text x="272" y="120" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          32 m²
        </text>
      </g>

      <text x="14" y="210" fill="#cbd5e1" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        même ficelle, trois enclos
      </text>
      <text x="14" y="234" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        le tour ne dit pas la place
      </text>
    </svg>
  );
}
