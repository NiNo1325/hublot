'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Le même long cou sert deux fois : il mâche sans relâche en phase 1, puis
 * se déploie en phase 2 pour atteindre la cime — deux usages d'un seul et
 * même atout, avant que la phase 4 ne révèle sa vraie longueur.
 */
export function PourquoiSiGrandsAnimation({
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
      <rect x="0" y="196" width="400" height="44" fill="#3b2a1d" />

      {/* Phase 1 : il mange des plantes presque toute la journée */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="220" cy="176" rx="60" ry="24" fill="#c8a97e" />
        <path d="M160 172 Q120 150 108 176" stroke="#c8a97e" strokeWidth="18" strokeLinecap="round" fill="none" />
        <path d="M96 176 q-2 -14 10 -18 q2 10 -2 18 M110 176 q4 -16 16 -18 q0 12 -8 18" fill="#4ade80" />
        <text x="14" y="30" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>il mange presque toute la journée</text>
      </g>

      {/* Phase 2 : son long cou atteint les feuilles sans bouger le corps */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <ellipse cx="220" cy="176" rx="60" ry="24" fill="#c8a97e" />
        <path
          d="M160 172 Q110 90 100 40"
          stroke="#c8a97e" strokeWidth="18" strokeLinecap="round" fill="none"
        >
          {anime && phase === 1 && (
            <animate attributeName="d" values="M160 172 Q110 90 100 40;M160 172 Q140 90 130 42;M160 172 Q110 90 100 40" dur="2.6s" repeatCount="indefinite" />
          )}
        </path>
        <path d="M60 30 q40 -14 70 6 q-30 14 -70 -6 Z" fill="#4ade80" />
        <text x="14" y="30" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>le cou atteint la cime</text>
      </g>

      {/* Phase 3 : ses os sont creux, comme des pailles */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <rect x="130" y="90" width="140" height="30" rx="15" fill="#e8ddc8" />
        <circle cx="200" cy="105" r="8" fill="#0f1b33" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={150 + i * 50} cy="105" r="8" fill="#0f1b33" opacity="0.9" />
        ))}
        <text x="14" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>ses os sont creux, comme des pailles</text>
        <text x="14" y="150" fill="#a8a29e" fontSize="13" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>plus légers, malgré la taille</text>
      </g>

      {/* Phase 4 : plus long que plusieurs bus mis bout à bout */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path
          d="M20 176 Q70 150 110 176 L260 176 Q300 176 320 150 Q340 140 350 150 L350 190 L20 190 Z"
          fill="#c8a97e"
        />
        <circle cx="60" cy="196" r="8" fill="#4a3527" />
        <circle cx="300" cy="196" r="8" fill="#4a3527" />
        <g fill="none" stroke="#7dd3fc" strokeWidth="2">
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={30 + i * 82} y="182" width="70" height="18" rx="3" />
          ))}
        </g>
        <text x="14" y="228" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>long comme plusieurs bus</text>
      </g>
    </svg>
  );
}
