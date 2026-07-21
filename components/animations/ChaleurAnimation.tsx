'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['sens', 'pas-de-froid', 'manteau', 'equilibre'] as const;

/**
 * Les particules d'agitation passent toujours du chaud vers le froid, jamais
 * l'inverse. Aucune flèche « froid » n'entre : la carte affirme que le froid
 * ne se déplace pas, seule la chaleur voyage.
 */
export function ChaleurAnimation({ activeBeatId }: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const equilibre = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Objet chaud à gauche, froid à droite ; couleurs qui convergent */}
      <rect
        x="30" y="70" width="130" height="100" rx="12"
        fill={equilibre ? '#a16207' : '#dc2626'}
        style={{ transition: 'fill 1200ms ease' }}
      />
      <rect
        x="240" y="70" width="130" height="100" rx="12"
        fill={equilibre ? '#a16207' : '#0ea5e9'}
        style={{ transition: 'fill 1200ms ease' }}
      />

      {/* Flèche unique : la chaleur va du chaud vers le froid */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[100, 120, 140].map((y) => (
          <g key={y}>
            <line x1="166" y1={y} x2="228" y2={y} stroke="#fb923c" strokeWidth="4" />
            <path d={`M222 ${y - 6} L234 ${y} L222 ${y + 6} Z`} fill="#fb923c" />
          </g>
        ))}
        <text x="150" y="90" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la chaleur part vers le froid
        </text>
      </g>

      {/* Le froid n'entre pas : une flèche barrée */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <line x1="228" y1="196" x2="172" y2="196" stroke="#64748b" strokeWidth="3" strokeDasharray="5 5" />
        <line x1="188" y1="184" x2="212" y2="208" stroke="#fb7185" strokeWidth="4" strokeLinecap="round" />
        <text x="120" y="222" fill="#fb7185" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le froid n’« entre » pas
        </text>
      </g>

      {/* Le manteau : garde la chaleur */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="18" y="58" width="154" height="124" rx="16" fill="none" stroke="#a3e635" strokeWidth="3" strokeDasharray="7 5" />
        <text x="24" y="52" fill="#a3e635" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le manteau ralentit la fuite
        </text>
      </g>

      {/* Équilibre : même température */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="70" y="30" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          tout finit à la même température
        </text>
      </g>
    </svg>
  );
}
