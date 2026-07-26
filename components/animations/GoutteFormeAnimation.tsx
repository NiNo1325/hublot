'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['image-larme', 'petite-ronde', 'air-dessous', 'coussin'] as const;

/**
 * Une goutte de pluie n'a pas la forme d'une larme (barrée) : petite, elle est
 * ronde ; en tombant, l'air la pousse par en dessous (flèche) et l'aplatit en
 * coussin. La larme et le coussin s'opposent côte à côte.
 */
export function GoutteFormeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f2036" />

      {/* Phase 1 : l'image de la larme (fausse, barrée) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M200 54 Q234 108 200 132 Q166 108 200 54 Z" fill="#38bdf8" />
        <line x1="160" y1="52" x2="240" y2="134" stroke="#f43f5e" strokeWidth="5" />
        <text x="20" y="200" fill="#fca5a5" fontSize="15" fontFamily={police}>pas une larme</text>
      </g>

      {/* Phase 2 : petite goutte = ronde */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="96" r="28" fill="#7dd3fc" />
        <circle cx="190" cy="86" r="7" fill="#bae6fd" opacity="0.7" />
        <text x="20" y="224" fill="#7dd3fc" fontSize="15" fontFamily={police}>petite = ronde</text>
      </g>

      {/* Phase 3 : en tombant, l'air pousse par en dessous */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="92" rx="28" ry="24" fill="#7dd3fc" />
        {[176, 200, 224].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="150" x2={x} y2="124" stroke="#a3e635" strokeWidth="3" />
            <path d={`M${x - 5} 130 L${x} 118 L${x + 5} 130 Z`} fill="#a3e635">
              {anime && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
            </path>
          </g>
        ))}
        <text x="222" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>l’air pousse dessous</text>
      </g>

      {/* Phase 4 : la vraie forme, un coussin */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M168 104 Q168 70 200 70 Q232 70 232 104 Q232 116 200 116 Q168 116 168 104 Z" fill="#38bdf8" />
        <path d="M186 82 q8 -6 16 0" stroke="#bae6fd" strokeWidth="3" fill="none" opacity="0.7" />
        <text x="232" y="224" fill="#38bdf8" fontSize="15" fontFamily={police}>comme un coussin</text>
      </g>
    </svg>
  );
}
