'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['balance', 'deux-choses', 'sur-la-lune', 'apesanteur'] as const;

/** Trois lieux, une seule masse, trois poids. */
const LIEUX = [
  { x: 50, nom: 'Terre', poids: '600 N' },
  { x: 180, nom: 'Lune', poids: '100 N' },
  { x: 306, nom: 'orbite', poids: '0 N' },
];

/**
 * La ligne des masses est identique dans les trois colonnes, celle des poids
 * change à chaque fois : la comparaison est l'argument, et elle se lit sans
 * qu'il faille suivre le texte.
 */
export function PoidsMasseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {LIEUX.map((lieu, i) => (
        <g key={lieu.nom}>
          {/* Le sol de chaque lieu, absent en orbite */}
          {i < 2 && (
            <line x1={lieu.x - 8} y1="126" x2={lieu.x + 62} y2="126" stroke="#475569" strokeWidth="3" />
          )}
          {/* La même personne partout */}
          <g
            style={{
              transform: i === 2 ? 'rotate(-16deg)' : 'none',
              transformOrigin: `${lieu.x + 26}px 104px`,
            }}
          >
            <circle cx={lieu.x + 26} cy="84" r="10" fill="#fca5a5" />
            <rect x={lieu.x + 18} y="96" width="16" height="28" rx="5" fill="#7dd3fc" />
            {anime && i === 2 && phase === 3 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;0 -8;0 0" dur="3.4s" repeatCount="indefinite"
              />
            )}
          </g>
          <text x={lieu.x} y="60" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
            {lieu.nom}
          </text>
          {/* La masse : identique partout */}
          <text x={lieu.x} y="154" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
            60 kg
          </text>
          {/* Le poids : propre à chaque astre */}
          <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
            <text x={lieu.x} y="182" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
              {lieu.poids}
            </text>
          </g>
        </g>
      ))}

      <text x="14" y="32" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        la masse ne change jamais
      </text>

      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="14" y="210" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le poids dépend de l’astre
        </text>
      </g>
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          en orbite, tout tombe ensemble
        </text>
      </g>
    </svg>
  );
}
