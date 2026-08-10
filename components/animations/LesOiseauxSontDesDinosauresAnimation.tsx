'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Une seule petite silhouette traverse les quatre phases, du duvet à l'aile :
 * ce n'est jamais un autre animal qui « devient » oiseau, c'est le même corps
 * qui se transforme peu à peu, jusqu'à voler vraiment.
 */
export function LesOiseauxSontDesDinosauresAnimation({
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

      {/* Phase 1 : un petit dinosaure porte déjà un duvet pour se réchauffer */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="140" cy="176" rx="26" ry="18" fill="#8a7256" />
        <path d="M140 196 L134 196 M140 196 L146 196" stroke="#8a7256" strokeWidth="6" strokeLinecap="round" />
        <path d="M100 176 q-4 -12 8 -16 q-2 10 4 16 M108 168 q-2 -12 10 -14 q0 10 4 14" stroke="#c8a97e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="14" y="30" fill="#c8a97e" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>un duvet, pour se tenir chaud</text>
      </g>

      {/* Phase 2 : les plumes grandissent, il plane entre les branches */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M40 120 L40 196 M40 130 l-20 10 M40 118 l24 -10" stroke="#4a3527" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M320 96 L320 196 M320 108 l22 8 M320 92 l-24 -8" stroke="#4a3527" strokeWidth="5" fill="none" strokeLinecap="round" />
        <g>
          <ellipse cx="180" cy="130" rx="22" ry="14" fill="#8a7256" />
          <path d="M158 128 Q120 110 96 132" stroke="#7dd3fc" strokeWidth="6" strokeLinecap="round" fill="none" />
          {anime && phase === 1 && (
            <animateTransform attributeName="transform" type="translate" values="0 0; 90 -18; 0 0" dur="3.2s" repeatCount="indefinite" />
          )}
        </g>
        <text x="14" y="30" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>de vraies plumes pour planer</text>
      </g>

      {/* Phase 3 : petit et volant, il survivra au jour de l'astéroïde */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <rect x="0" y="0" width="400" height="196" fill="#1c1730" opacity="0.75" />
        <g>
          <ellipse cx="210" cy="86" rx="14" ry="9" fill="#c8a97e" />
          <path d="M198 84 Q170 70 150 86" stroke="#c8a97e" strokeWidth="4" strokeLinecap="round" fill="none">
            {anime && (
              <animate attributeName="d" values="M198 84 Q170 70 150 86;M198 84 Q170 96 150 86;M198 84 Q170 70 150 86" dur="0.9s" repeatCount="indefinite" />
            )}
          </path>
        </g>
        <text x="14" y="30" fill="#e5e7eb" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>petit et léger, il survit</text>
      </g>

      {/* Phase 4 : des millions d'années plus tard, tous les oiseaux */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {[
          { x: 70, s: 0.6, c: '#c8a97e' },
          { x: 140, s: 1, c: '#7dd3fc' },
          { x: 220, s: 0.8, c: '#f9a8d4' },
          { x: 300, s: 1.3, c: '#86efac' },
        ].map((b) => (
          <g key={b.x} transform={`translate(${b.x} 150) scale(${b.s})`}>
            <ellipse cx="0" cy="0" rx="14" ry="10" fill={b.c} />
            <path d="M-10 0 Q-24 -6 -34 2" stroke={b.c} strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M12 -4 L22 -10 L14 -2 Z" fill={b.c} />
          </g>
        ))}
        <text x="14" y="212" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>du moineau à l&apos;autruche</text>
      </g>
    </svg>
  );
}
