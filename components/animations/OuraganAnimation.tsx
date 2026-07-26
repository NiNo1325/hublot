'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['mer-chaude', 'spirale', 'oeil', 'structure'] as const;

const CX = 196;
const CY = 100;

/**
 * Un ouragan n'est pas un vent désordonné : c'est une spirale géante et
 * organisée qui tourne autour d'un œil calme, nourrie par une mer chaude. La
 * spirale ordonnée réfute l'idée d'un vent « n'importe comment ».
 */
export function OuraganAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const montreSpirale = phase >= 1;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0b1c2e" />
      {/* mer */}
      <rect y="168" width="400" height="72" fill="#0c4a6e" />

      {/* La spirale de nuages, tournante (phases 2+) */}
      <g style={{ opacity: montreSpirale ? 1 : 0.15, transition: 'opacity 400ms ease' }}>
        <g>
          {[0, 120, 240].map((deg) => (
            <path
              key={deg}
              d={`M${CX} ${CY} C ${CX + 34} ${CY - 10} ${CX + 48} ${CY + 22} ${CX + 30} ${CY + 46} C ${CX + 20} ${CY + 62} ${CX - 8} ${CY + 60} ${CX - 22} ${CY + 46}`}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.85"
              transform={`rotate(${deg} ${CX} ${CY})`}
            />
          ))}
          {anime && (
            <animateTransform attributeName="transform" type="rotate" from={`0 ${CX} ${CY}`} to={`360 ${CX} ${CY}`} dur="7s" repeatCount="indefinite" />
          )}
        </g>
      </g>

      {/* Phase 1 : une mer chaude (vapeur qui monte) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="340" cy="40" r="12" fill="#fbbf24" />
        {[150, 200, 250].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="168" x2={x} y2="130" stroke="#fca5a5" strokeWidth="2" />
            <path d={`M${x - 4} 136 L${x} 126 L${x + 4} 136 Z`} fill="#fca5a5">
              {anime && <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </path>
          </g>
        ))}
        <text x="20" y="200" fill="#fca5a5" fontSize="15" fontFamily={police}>une mer chaude</text>
      </g>

      {/* Phase 2 : une spirale géante */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <text x="20" y="224" fill="#cbd5e1" fontSize="15" fontFamily={police}>une spirale géante</text>
      </g>

      {/* Phase 3 : un œil calme au centre */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <circle cx={CX} cy={CY} r="14" fill="#0b1c2e" stroke="#7dd3fc" strokeWidth="2" />
        <circle cx={CX} cy={CY} r="4" fill="#7dd3fc" />
        <text x="230" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police}>un œil calme au centre</text>
      </g>

      {/* Phase 4 : tout est bien rangé (ordre, pas chaos) */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {/* flèches suivant la spirale */}
        {[30, 150, 270].map((deg) => {
          const a = (deg * Math.PI) / 180;
          const x = CX + Math.cos(a) * 52;
          const y = CY + Math.sin(a) * 52;
          const ta = a + Math.PI / 2;
          return (
            <path key={deg} d={`M${x - Math.cos(ta) * 8} ${y - Math.sin(ta) * 8} L${x + Math.cos(ta) * 8} ${y + Math.sin(ta) * 8} L${x + Math.cos(ta) * 8 + Math.cos(a) * 6} ${y + Math.sin(ta) * 8 + Math.sin(a) * 6}`} fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          );
        })}
        <text x="240" y="224" fill="#a3e635" fontSize="15" fontFamily={police}>tout est bien rangé</text>
      </g>
    </svg>
  );
}
