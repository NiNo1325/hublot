'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['ballon', 'pousser', 'sans-air', 'etages'] as const;

/**
 * Les deux flèches opposées sont le cœur de la carte : le gaz descend, la
 * fusée monte. Rien n'est dessiné sous la fusée sur quoi elle pourrait
 * s'appuyer — c'est précisément l'idée reçue à défaire.
 */
export function FuseeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le ballon lâché : même principe, à la maison */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <g>
          <ellipse cx="70" cy="70" rx="26" ry="19" fill="#f472b6" />
          <path d="M96 70 l14 -6 l0 12 z" fill="#f472b6" />
          {anime && phase === 0 && (
            <animateTransform
              attributeName="transform" type="translate"
              values="60 0;0 0;60 0" dur="3s" repeatCount="indefinite"
            />
          )}
        </g>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={126 + i * 16} cy="70" r="3" fill="#f9a8d4">
            {anime && (
              <animate attributeName="opacity" values="1;0.1;1" dur="1.2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="32" fill="#f9a8d4" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le ballon part à l’envers
        </text>
      </g>

      {/* La fusée : corps, coiffe, et gaz éjecté vers le bas */}
      <g>
        <path d="M200 62 q14 18 14 40 l0 46 l-28 0 l0 -46 q0 -22 14 -40 z" fill="#e2e8f0" />
        <path d="M186 132 l-12 22 l12 0 z" fill="#94a3b8" />
        <path d="M214 132 l12 22 l-12 0 z" fill="#94a3b8" />
        <circle cx="200" cy="98" r="6" fill="#38bdf8" />
        <path d="M188 150 q12 30 12 44 q0 -14 12 -44 z" fill="#fb923c">
          {anime && (
            <animate attributeName="opacity" values="1;0.5;1" dur="0.6s" repeatCount="indefinite" />
          )}
        </path>
      </g>

      {/* Action et réaction, en deux flèches opposées */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <line x1="240" y1="140" x2="240" y2="184" stroke="#fb923c" strokeWidth="4" />
        <path d="M233 178 L240 194 L247 178 Z" fill="#fb923c" />
        <text x="252" y="176" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          vers le bas
        </text>

        <line x1="160" y1="120" x2="160" y2="76" stroke="#4ade80" strokeWidth="4" />
        <path d="M153 82 L160 66 L167 82 Z" fill="#4ade80" />
        <text x="24" y="112" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          vers le haut
        </text>
      </g>

      {/* Le vide : rien contre quoi pousser, et rien pour freiner */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="0" y1="52" x2="400" y2="52" stroke="#475569" strokeWidth="2" strokeDasharray="7 7" />
        {[40, 120, 300, 360].map((x, i) => (
          <circle key={x} cx={x} cy={24 + (i % 2) * 12} r="2" fill="#e2e8f0" />
        ))}
        <text x="14" y="210" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          au-dessus : plus d’air du tout
        </text>
      </g>

      {/* L'étage vide, largué en route */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <rect x="290" y="120" width="24" height="30" rx="3" fill="none" stroke="#94a3b8" strokeWidth="3">
          {anime && phase === 3 && (
            <animate attributeName="y" values="120;190" dur="2.6s" repeatCount="indefinite" />
          )}
        </rect>
        <text x="14" y="234" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          elle largue ses étages vides
        </text>
      </g>
    </svg>
  );
}
