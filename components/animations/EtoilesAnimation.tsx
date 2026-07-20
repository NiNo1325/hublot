'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['soleils', 'notre-soleil', 'voyage', 'passe'] as const;

export function EtoilesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  const etoiles = [
    [56, 44], [128, 30], [196, 58], [268, 36], [336, 62],
    [92, 88], [232, 96], [304, 110], [40, 128],
  ];

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Champ d'étoiles : chacune est un soleil */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {etoiles.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={1.8 + (i % 3) * 0.7} fill="#f5f0e6">
            {anime && (
              <animate
                attributeName="opacity" values="0.4;1;0.4"
                dur={`${1.8 + (i % 4) * 0.6}s`} begin={`${i * 0.2}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
      </g>

      {/* Notre Soleil : la même chose, mais proche */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="66" cy="180" r="26" fill="#ffb627" />
        <text x="26" y="222" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          notre Soleil, tout près
        </text>
      </g>

      {/* Le trajet de la lumière */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <circle cx="344" cy="160" r="7" fill="#f5f0e6" />
        <line x1="330" y1="160" x2="130" y2="160" stroke="#7dd3fc" strokeWidth="2.5" strokeDasharray="8 10" />
        <circle r="5" fill="#7dd3fc">
          {anime && (
            <animateMotion dur="3.6s" repeatCount="indefinite" path="M330 160 L134 160" />
          )}
        </circle>
        <text x="150" y="146" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la lumière voyage des années
        </text>
      </g>

      {/* On voit le passé */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M112 176 q-10 12 0 24 q10 -12 0 -24 z" fill="#b9c4da" />
        <text x="121" y="200" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          tu la vois telle qu&apos;elle était
        </text>
        <text x="126" y="218" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          il y a des années
        </text>
      </g>
    </svg>
  );
}
