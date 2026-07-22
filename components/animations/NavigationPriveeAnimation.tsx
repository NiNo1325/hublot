'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['promesse', 'local', 'qui-voit', 'vraiment'] as const;

/** Les trois observateurs que le mode privé ne concerne pas. */
const OBSERVATEURS = [252, 306, 360];

/**
 * Le cadre pointillé s'arrête à l'appareil : tout le pouvoir du mode privé
 * tient à l'intérieur de ce rectangle. Les trois observateurs sont dessinés
 * dehors, et rien ne les masque — c'est exactement le périmètre réel.
 */
export function NavigationPriveeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'ordinateur, et le masque qu'on croit porter */}
      <rect x="66" y="86" width="104" height="66" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
      <rect x="52" y="152" width="132" height="8" rx="3" fill="#64748b" />
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path d="M92 112 q26 -12 52 0 q-6 18 -26 18 q-20 0 -26 -18 z" fill="#a78bfa" />
        <circle cx="106" cy="116" r="4" fill="#0f1b33" />
        <circle cx="130" cy="116" r="4" fill="#0f1b33" />
      </g>

      {/* Le périmètre réel : l'appareil, et rien d'autre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <rect x="36" y="66" width="164" height="108" rx="6" fill="none" stroke="#4ade80" strokeWidth="3" strokeDasharray="7 6" />
        <text x="14" y="42" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          seulement sur cet appareil
        </text>
      </g>

      {/* Les observateurs, dehors, qui voient tout comme avant */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {OBSERVATEURS.map((x, i) => (
          <g key={x}>
            <path d={`M${x - 22} 116 q22 -20 44 0 q-22 20 -44 0 z`} fill="#f87171" />
            <circle cx={x} cy="116" r="7" fill="#0f1b33">
              {anime && phase >= 2 && (
                <animate attributeName="r" values="7;3;7" dur="3.2s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
              )}
            </circle>
          </g>
        ))}
        {OBSERVATEURS.map((x) => (
          <line key={x} x1={x - 30} y1="140" x2="206" y2="124" stroke="#f87171" strokeWidth="2" strokeDasharray="4 4" />
        ))}
        <text x="238" y="190" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le site te voit
        </text>
        <text x="238" y="214" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le réseau aussi
        </text>
      </g>

      {/* La conclusion */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ce n’est pas l’anonymat
        </text>
      </g>
    </svg>
  );
}
