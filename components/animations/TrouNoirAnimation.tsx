'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['etoile-morte', 'lumiere', 'pas-aspirateur', 'invisible'] as const;

/**
 * Une orbite stable est dessinée à la phase « pas-aspirateur » : une étoile
 * tourne autour du trou noir sans y tomber, comme une planète autour du Soleil.
 * C'est le démenti visuel de l'idée d'aspirateur cosmique.
 */
export function TrouNoirAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const effondre = phase >= 1;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Étoiles de fond */}
      {[[40, 40], [340, 50], [70, 200], [360, 190], [200, 30]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#f5f0e6" opacity="0.7" />
      ))}

      {/* L'étoile qui s'effondre en trou noir */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle
          cx="200" cy="120"
          r={effondre ? 16 : 44}
          fill={effondre ? '#000000' : '#ffb627'}
          style={{ transition: 'r 1000ms ease, fill 1000ms ease' }}
        />
      </g>

      {/* Horizon des événements + lumière qui ne sort pas */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="200" cy="120" r="16" fill="#000000" />
        <circle cx="200" cy="120" r="24" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="4 4" />
        {/* Rayons qui partent puis rebroussent chemin */}
        {[0, 72, 144, 216, 288].map((a) => (
          <line
            key={a}
            x1="200" y1="120" x2="200" y2="96"
            stroke="#7dd3fc" strokeWidth="2" strokeLinecap="round"
            transform={`rotate(${a} 200 120)`}
            opacity="0.6"
          />
        ))}
      </g>

      {/* Orbite stable : rien n'est aspiré à distance */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <circle cx="200" cy="120" r="72" fill="none" stroke="#2c3f66" strokeWidth="2" strokeDasharray="5 7" />
        <circle cx="272" cy="120" r="8" fill="#ffb627">
          {anime && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 200 120" to="360 200 120"
              dur="7s" repeatCount="indefinite"
            />
          )}
        </circle>
        <text x="70" y="216" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          on tourne autour sans tomber
        </text>
      </g>

      {/* Disque de matière brillante : comment on le repère */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <ellipse cx="200" cy="120" rx="52" ry="16" fill="none" stroke="#fb923c" strokeWidth="4" opacity="0.8">
          {anime && (
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite" />
          )}
        </ellipse>
        <text x="230" y="40" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          repéré par sa lueur
        </text>
      </g>
    </svg>
  );
}
