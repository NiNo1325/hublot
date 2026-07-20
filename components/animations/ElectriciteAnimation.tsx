'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['circuit', 'boucle', 'electrons', 'chaleur'] as const;

/**
 * Le circuit s'ouvre à la phase « boucle » et l'ampoule s'éteint : c'est la
 * démonstration qu'un circuit interrompu ne laisse rien passer.
 */
export function ElectriciteAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const ouvert = phase === 1;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le circuit */}
      <path
        d="M90 80 h100 M230 80 h80 v96 h-220 v-96 h30"
        fill="none" stroke="#b9c4da" strokeWidth="5" strokeLinecap="round"
      />

      {/* La pile */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="176" y="158" width="48" height="36" rx="5" fill="#1b2a4a" stroke="#ffb627" strokeWidth="3" />
        <text x="184" y="182" fill="#ffb627" fontSize="16" fontFamily="monospace">+ −</text>
      </g>

      {/* Interrupteur, ouvert à la phase 2 */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="120" cy="80" r="4" fill="#b9c4da" />
        <line
          x1="120" y1="80" x2={ouvert ? 152 : 156} y2={ouvert ? 58 : 80}
          stroke="#ffb627" strokeWidth="5" strokeLinecap="round"
          style={{ transition: 'all 500ms ease' }}
        />
        <circle cx="156" cy="80" r="4" fill="#b9c4da" />
      </g>

      {/* Électrons : lents, et arrêtés si le circuit est ouvert */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} r="5" fill="#38bdf8">
            {anime && !ouvert && (
              <animateMotion
                dur="6s" begin={`${i * 1.2}s`} repeatCount="indefinite"
                path="M230 80 h80 v96 h-220 v-96 h30"
              />
            )}
          </circle>
        ))}
        <text x="240" y="212" fill="#38bdf8" fontSize="11" fontFamily="sans-serif">
          les électrons avancent lentement
        </text>
      </g>

      {/* L'ampoule */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle
          cx="210" cy="80" r="22"
          fill={ouvert ? '#2c3f66' : '#ffb627'}
          style={{ transition: 'fill 400ms ease' }}
        >
          {anime && !ouvert && phase === 3 && (
            <animate attributeName="r" values="21;24;21" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>
        <path d="M202 98 h16 v8 h-16 z" fill="#b9c4da" />
        {!ouvert && phase === 3 && (
          <text x="248" y="44" fill="#ffb627" fontSize="12" fontFamily="sans-serif">
            ça chauffe, donc ça brille
          </text>
        )}
      </g>
    </svg>
  );
}
