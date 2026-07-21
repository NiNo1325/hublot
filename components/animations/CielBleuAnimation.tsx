'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['regarder', 'lumiere-blanche', 'diffusion', 'couchant'] as const;

/** Molécules d'air dispersées dans le ciel, qui renvoient le bleu. */
const MOLECULES = [
  { x: 90, y: 60 },
  { x: 160, y: 100 },
  { x: 230, y: 62 },
  { x: 130, y: 148 },
  { x: 265, y: 130 },
];

/**
 * Le ciel change de couleur avec la position du Soleil : bleu quand il est
 * haut, orange quand il rase l'horizon. C'est l'argument de la carte rendu
 * visible — même lumière, même air, seule l'épaisseur traversée change.
 */
export function CielBleuAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const couchant = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le ciel : bleu de midi, orange au couchant */}
      <rect
        width="400" height="182"
        fill={couchant ? '#9a3412' : '#1d4ed8'}
        style={{ transition: 'fill 1600ms ease' }}
      />
      <rect y="182" width="400" height="58" fill="#1f2937" />

      {/* Le Soleil, haut puis rasant */}
      <circle
        cx={couchant ? 344 : 330}
        cy={couchant ? 174 : 44}
        r="22"
        fill="#fde047"
        style={{ transition: 'cy 1600ms ease, cx 1600ms ease' }}
      />

      {/* La lumière blanche contient toutes les couleurs */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {['#f87171', '#fb923c', '#fde047', '#4ade80', '#38bdf8', '#a78bfa'].map(
          (couleur, i) => (
            <line
              key={couleur}
              x1="312" y1="52"
              x2="214" y2={92 + i * 9}
              stroke={couleur}
              strokeWidth="3"
              strokeLinecap="round"
            />
          ),
        )}
        <text x="14" y="30" fill="#f8fafc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          toutes les couleurs à la fois
        </text>
      </g>

      {/* L'air renvoie le bleu dans toutes les directions */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {MOLECULES.map((m, i) => (
          <g key={`${m.x}-${m.y}`}>
            <circle cx={m.x} cy={m.y} r="4" fill="#bfdbfe" />
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <circle
                key={angle}
                cx={m.x + Math.cos((angle * Math.PI) / 180) * 16}
                cy={m.y + Math.sin((angle * Math.PI) / 180) * 16}
                r="3"
                fill="#38bdf8"
              >
                {anime && (
                  <animate
                    attributeName="r"
                    values="1;3.5;1"
                    dur="2.4s"
                    begin={`${i * 0.3 + angle / 400}s`}
                    repeatCount="indefinite"
                  />
                )}
              </circle>
            ))}
          </g>
        ))}
        <text x="14" y="210" fill="#bfdbfe" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le bleu part dans tous les sens
        </text>
      </g>

      {/* Au ras de l'horizon, la lumière traverse bien plus d'air */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <line x1="322" y1="174" x2="40" y2="150" stroke="#fdba74" strokeWidth="4" strokeLinecap="round" />
        <text x="14" y="234" fill="#fdba74" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          il ne reste que le rouge
        </text>
      </g>
    </svg>
  );
}
