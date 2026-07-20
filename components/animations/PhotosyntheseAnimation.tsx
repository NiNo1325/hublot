'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['lumiere', 'eau', 'fabrication', 'oxygene'] as const;

/**
 * Les flux sont représentés séparément — lumière depuis le haut, eau depuis le
 * bas, dioxyde de carbone depuis l'air — pour appuyer le point de la carte :
 * la plante ne « mange » pas la terre, elle assemble trois apports distincts.
 */
export function PhotosyntheseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      {/* Sol */}
      <path d="M0 190 h400 v50 H0 Z" fill="#3b2a1d" />

      {/* Soleil et lumière incidente */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="58" cy="46" r="24" fill="#ffb627" />
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={90 + i * 22} y1={62 + i * 6} x2={150 + i * 22} y2={104 + i * 6}
            stroke="#ffb627" strokeWidth="3" strokeDasharray="7 7"
          >
            {anime && (
              <animate
                attributeName="stroke-dashoffset"
                values="14;0" dur="1.1s" repeatCount="indefinite"
              />
            )}
          </line>
        ))}
      </g>

      {/* Tige et feuilles */}
      <path d="M200 190 L200 96" stroke="#1f6f4e" strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="164" cy="112" rx="34" ry="17" fill="#34d399" transform="rotate(-18 164 112)" />
      <ellipse cx="236" cy="126" rx="34" ry="17" fill="#34d399" transform="rotate(16 236 126)" />

      {/* Eau puisée par les racines */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path
          d="M200 190 q-16 16 -30 26 M200 190 q16 16 30 26 M200 190 v30"
          stroke="#a16207" strokeWidth="5" fill="none" strokeLinecap="round"
        />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="200" cy="196" r="4" fill="#38bdf8">
            {anime && (
              <animate
                attributeName="cy" values="206;110"
                dur="2.6s" begin={`${i * 0.8}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
      </g>

      {/* Dioxyde de carbone capté par les feuilles */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[0, 1].map((i) => (
          <g key={i}>
            <circle cx={340 - i * 30} cy={104 + i * 22} r="9" fill="#6b7280">
              {anime && (
                <animate
                  attributeName="cx" values={`${340 - i * 30};240`}
                  dur="3s" begin={`${i * 1}s`} repeatCount="indefinite"
                />
              )}
            </circle>
          </g>
        ))}
        <text x="316" y="80" fill="#9ca3af" fontSize="18" fontFamily="var(--font-atkinson), sans-serif">
          CO₂
        </text>
      </g>

      {/* Sucre fabriqué : l'énergie devient matière. */}
      <g style={{ opacity: dejaVu(2) ? opacite(2) : 0.1, transition: 'opacity 600ms ease' }}>
        <circle cx="200" cy="150" r="13" fill="#ffb627" opacity="0.9">
          {anime && (
            <animate attributeName="r" values="10;15;10" dur="2.2s" repeatCount="indefinite" />
          )}
        </circle>
      </g>

      {/* Oxygène rejeté */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={150 - i * 16} cy="104" r="6" fill="#7dd3fc">
            {anime && (
              <>
                <animate
                  attributeName="cy" values="104;40"
                  dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity" values="0;0.95;0"
                  dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite"
                />
              </>
            )}
          </circle>
        ))}
        <text x="96" y="34" fill="#7dd3fc" fontSize="18" fontFamily="var(--font-atkinson), sans-serif">
          O₂
        </text>
      </g>
    </svg>
  );
}
