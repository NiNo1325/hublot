'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['terre-tourne', 'cote-eclaire', 'cote-sombre', 'cycle'] as const;

/**
 * La Terre est dessinée avec sa moitié éclairée fixe, côté Soleil : c'est le
 * repère au sol qui tourne, jamais la lumière. Faire tourner l'éclairage
 * suggérerait que le Soleil se déplace autour de nous — l'erreur exacte que la
 * carte cherche à corriger.
 */
export function JourEtNuitAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id="disque-terre">
          <circle cx="250" cy="120" r="70" />
        </clipPath>
      </defs>
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Soleil, fixe : il n'est pas l'objet en mouvement. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="58" cy="120" r="30" fill="#ffb627" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="58" y1="120" x2="58" y2="66"
            stroke="#ffb627" strokeWidth="4" strokeLinecap="round"
            transform={`rotate(${i * 45} 58 120)`}
          />
        ))}
      </g>

      {/* Rayons parallèles : le Soleil est loin. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[80, 120, 160].map((y) => (
          <line
            key={y}
            x1="100" y1={y} x2="172" y2={y}
            stroke="#ffb627" strokeWidth="3" strokeDasharray="8 8"
            opacity="0.8"
          >
            {anime && (
              <animate
                attributeName="stroke-dashoffset"
                values="16;0" dur="1.2s" repeatCount="indefinite"
              />
            )}
          </line>
        ))}
      </g>

      <g clipPath="url(#disque-terre)">
        {/* Hémisphère nuit, puis hémisphère jour côté Soleil. */}
        <circle
          cx="250" cy="120" r="70" fill="#1b2a4a"
          style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}
        />
        <path
          d="M250 50 A70 70 0 0 0 250 190 Z"
          fill="#38bdf8"
          style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}
        />
        {/* Continent, pour rendre la rotation perceptible. */}
        <g style={{ opacity: phase === 0 || phase === 3 ? 1 : 0.45, transition: 'opacity 600ms ease' }}>
          <ellipse cx="250" cy="100" rx="26" ry="16" fill="#1f6f4e">
            {anime && (
              <animateTransform
                attributeName="transform" type="rotate"
                from="0 250 120" to="360 250 120"
                dur="9s" repeatCount="indefinite"
              />
            )}
          </ellipse>
        </g>
      </g>
      <circle cx="250" cy="120" r="70" fill="none" stroke="#2c3f66" strokeWidth="3" />

      {/*
        Le terminateur : la frontière jour/nuit, nommée dans l'explication du
        niveau 9-12.
      */}
      <line
        x1="250" y1="50" x2="250" y2="190"
        stroke="#f5f0e6" strokeWidth="2" strokeDasharray="6 6"
        style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}
      />

      {/* Repère au sol : c'est lui qui voyage du jour vers la nuit. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="250" cy="120" r="70" fill="none" />
        <circle cx="320" cy="120" r="7" fill="#ffb627">
          {anime && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 250 120" to="360 250 120"
              dur="9s" repeatCount="indefinite"
            />
          )}
        </circle>
      </g>
    </svg>
  );
}
