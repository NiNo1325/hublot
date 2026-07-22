'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['pas-internet', 'ondes-radio', 'portee', 'partage'] as const;

/**
 * Le trait plein s'arrête à la box et le câble part vers la droite : la
 * frontière entre le wifi et internet est dessinée, ce qui est tout l'objet de
 * la carte. Les appareils partagent visiblement les mêmes arcs.
 */
export function WifiAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La box, et le câble qui part vers internet */}
      <rect x="46" y="104" width="44" height="30" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
      <circle cx="58" cy="126" r="3" fill="#4ade80" />
      <path d="M90 118 q40 -40 96 -40 q60 0 84 -14" fill="none" stroke="#475569" strokeWidth="3" />
      <text x="288" y="70" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        internet
      </text>

      {/* Les ondes : le wifi, sur quelques mètres */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[26, 46, 66].map((r, i) => (
          <circle
            key={`arc-${r}`}
            cx="68" cy="119" r={r}
            fill="none" stroke="#38bdf8" strokeWidth="3"
            strokeDasharray={`${r * 1.1} ${r * 5}`}
            transform={`rotate(-40 68 119)`}
          >
            {anime && (
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2.1s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="32" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le wifi : quelques mètres
        </text>
      </g>

      {/* Le mur, qui absorbe */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="196" y="96" width="14" height="92" fill="#57534e" />
        {[0, 1, 2].map((i) => (
          <line key={i} x1="212" y1={110 + i * 28} x2="238" y2={110 + i * 28} stroke="#f87171" strokeWidth="2" strokeDasharray="3 5" />
        ))}
        <text x="14" y="210" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          les murs absorbent
        </text>
      </g>

      {/* Les appareils, qui se partagent le canal */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[110, 150, 190].map((y, i) => (
          <rect key={y} x="256" y={y} width="22" height="32" rx="3" fill="#7dd3fc">
            {anime && phase === 3 && (
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            )}
          </rect>
        ))}
        <text x="14" y="234" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          tout le monde partage
        </text>
      </g>
    </svg>
  );
}
