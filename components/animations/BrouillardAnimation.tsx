'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['soir', 'condense', 'nuage-au-sol', 'leve'] as const;

/**
 * Le brouillard ne descend pas du ciel : c'est un nuage au sol. L'air près du
 * sol refroidit, sa vapeur se condense sur place (la flèche « du ciel » est
 * barrée). Le soleil le dissipe au matin.
 */
export function BrouillardAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#17233a" />
      <rect y="158" width="400" height="82" fill="#20321f" />
      {/* maison repère */}
      <rect x="60" y="128" width="34" height="30" fill="#5b4028" />
      <path d="M56 128 L77 110 L98 128 Z" fill="#3f2c18" />

      {/* Phase 1 : le sol refroidit l'air (nuit) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="330" cy="44" r="14" fill="#e2e8f0" />
        <circle cx="324" cy="40" r="12" fill="#17233a" />
        <g transform="translate(300 120)">
          <rect x="-4" y="-16" width="8" height="26" rx="4" fill="#334155" />
          <circle cx="0" cy="14" r="7" fill="#38bdf8" />
        </g>
        <text x="20" y="200" fill="#93c5fd" fontSize="15" fontFamily={police}>le sol refroidit l’air</text>
      </g>

      {/* Phase 2 : des gouttes se forment ici (pas venues du ciel) */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {/* flèche « du ciel » barrée */}
        <line x1="200" y1="40" x2="200" y2="90" stroke="#64748b" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M195 84 L200 94 L205 84 Z" fill="#64748b" />
        <line x1="184" y1="44" x2="216" y2="92" stroke="#f43f5e" strokeWidth="4" />
        {/* gouttelettes au ras du sol */}
        {[[150, 150], [180, 146], [210, 152], [240, 145], [270, 151], [130, 148]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="#dbeafe">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="20" y="224" fill="#dbeafe" fontSize="15" fontFamily={police}>des gouttes se forment ici</text>
      </g>

      {/* Phase 3 : un nuage au sol (même chose qu'un nuage en haut) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {/* nuage en altitude */}
        <ellipse cx="300" cy="56" rx="34" ry="14" fill="#cbd5e1" />
        {/* bande de brouillard au sol */}
        <rect x="110" y="132" width="240" height="26" rx="12" fill="#e2e8f0" opacity="0.75" />
        {/* lien « = » */}
        <text x="300" y="100" fill="#cbd5e1" fontSize="20" fontFamily={police} textAnchor="middle">=</text>
        <text x="250" y="200" fill="#e2e8f0" fontSize="15" fontFamily={police}>un nuage au sol</text>
      </g>

      {/* Phase 4 : le soleil le dissipe */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="70" cy="46" r="14" fill="#fbbf24" />
        {[150, 200, 250].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="150" x2={x} y2="120" stroke="#93c5fd" strokeWidth="2" />
            <path d={`M${x - 4} 126 L${x} 116 L${x + 4} 126 Z`} fill="#93c5fd">
              {anime && <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </path>
          </g>
        ))}
        <text x="240" y="224" fill="#fbbf24" fontSize="15" fontFamily={police}>le soleil le dissipe</text>
      </g>
    </svg>
  );
}
