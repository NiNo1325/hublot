'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Le même petit mammifère grandit à travers les phases, jusqu'à devenir
 * mammouth : la carte montre une lignée qui prend sa place, pas une
 * coexistence avec les dinosaures, contrairement à une idée reçue fréquente.
 */
export function ApresLesDinosauresAnimation({
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
      <rect x="0" y="196" width="400" height="44" fill={phase >= 1 ? '#c7d2e0' : '#3b2a1d'} style={{ transition: 'fill 900ms ease' }} />

      {/* Phase 1 : les petits mammifères grandissent peu à peu */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[
          { x: 90, s: 0.5 }, { x: 170, s: 0.8 }, { x: 260, s: 1.15 },
        ].map((m) => (
          <g key={m.x} transform={`translate(${m.x} 196) scale(${m.s})`}>
            <ellipse cx="0" cy="-16" rx="22" ry="14" fill="#c8a97e" />
            <circle cx="20" cy="-24" r="7" fill="#c8a97e" />
          </g>
        ))}
        <text x="14" y="30" fill="#c8a97e" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>les petits mammifères grandissent</text>
      </g>

      {/* Phase 2 : bien plus tard, le froid s'installe */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[60, 140, 220, 300].map((x, i) => (
          <text key={x} x={x} y="60" fontSize="18" fill="#e0f2fe">
            ❄
            {anime && (
              <animate attributeName="y" values="20;90" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </text>
        ))}
        <text x="14" y="30" fill="#e0f2fe" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>une période de grand froid arrive</text>
      </g>

      {/* Phase 3 : mammouth laineux et tigre à dents de sabre */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <g transform="translate(150 176)">
          <ellipse cx="0" cy="0" rx="46" ry="30" fill="#8a7256" />
          <circle cx="-40" cy="-14" r="20" fill="#8a7256" />
          <path d="M-56 -6 Q-70 6 -60 24 M-52 -8 Q-64 4 -56 20" stroke="#e8ddc8" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <g transform="translate(300 186)">
          <ellipse cx="0" cy="0" rx="30" ry="16" fill="#a8a29e" />
          <circle cx="-24" cy="-8" r="12" fill="#a8a29e" />
          <path d="M-30 -2 L-40 20" stroke="#f5f0e6" strokeWidth="3" strokeLinecap="round" />
        </g>
        <text x="14" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>le mammouth et le tigre à dents de sabre</text>
      </g>

      {/* Phase 4 : ils ont disparu bien après les dinosaures */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <line x1="30" y1="120" x2="370" y2="120" stroke="#3f3a55" strokeWidth="3" />
        <circle cx="50" cy="120" r="6" fill="#c8a97e" />
        <text x="30" y="106" fill="#c8a97e" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>dinosaures : -66 millions d&apos;années</text>
        <circle cx="356" cy="120" r="6" fill="#7dd3fc" />
        <text x="230" y="146" fill="#7dd3fc" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>mammouths : -10 000 ans</text>
        <text x="14" y="200" fill="#e5e7eb" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>des dizaines de millions d&apos;années plus tard</text>
      </g>
    </svg>
  );
}
