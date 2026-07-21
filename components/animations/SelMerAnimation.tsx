'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['gout', 'roches', 'rivieres', 'equilibre'] as const;

/**
 * Le sel est dessiné comme des grains qui partent de la montagne, descendent
 * par la rivière et s'accumulent dans la mer pendant que l'eau, elle, remonte
 * en vapeur. Le trajet est l'argument : le sel vient de la terre ferme, pas du
 * fond de l'océan.
 */
export function SelMerAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La montagne, la rivière, la mer */}
      <path d="M0 150 L70 54 L140 150 z" fill="#44403c" />
      <path d="M70 150 q30 20 60 24 q60 8 90 14" fill="none" stroke="#38bdf8" strokeWidth="6" />
      <rect x="216" y="186" width="184" height="54" fill="#0c4a6e" />

      {/* Le contraste des goûts */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <text x="14" y="110" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          rivière : eau douce
        </text>
        <text x="280" y="140" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          mer : salée
        </text>
      </g>

      {/* La pluie attaque les roches et libère le sel */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[40, 62, 84].map((x, i) => (
          <line key={x} x1={x} y1="14" x2={x - 6} y2="34" stroke="#7dd3fc" strokeWidth="2">
            {anime && (
              <animate attributeName="opacity" values="1;0.2;1" dur="1.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        {[62, 78, 94].map((x, i) => (
          <rect key={x} x={x} y={90 + i * 8} width="4" height="4" fill="#fbbf24" />
        ))}
        <text x="14" y="32" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la pluie use les roches
        </text>
      </g>

      {/* Les rivières charrient les grains jusqu'à la mer */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <rect key={i} x="90" y="156" width="5" height="5" fill="#fbbf24">
            {anime && phase === 2 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;150 34" dur="3s" begin={`${i * 0.9}s`} repeatCount="indefinite"
              />
            )}
          </rect>
        ))}
      </g>

      {/* L'eau s'évapore, le sel reste — et il s'en redépose autant */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[250, 300, 350].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="182" x2={x} y2="156" stroke="#7dd3fc" strokeWidth="3" />
            <path d={`M${x - 6} 162 L${x} 148 L${x + 6} 162 Z`} fill="#7dd3fc">
              {anime && (
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              )}
            </path>
          </g>
        ))}
        {[240, 268, 296, 324, 352].map((x) => (
          <rect key={x} x={x} y="230" width="5" height="5" fill="#fbbf24" />
        ))}
        <text x="14" y="210" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le sel reste, l’eau part
        </text>
        <text x="14" y="234" fill="#a8a29e" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          il s’en redépose autant
        </text>
      </g>
    </svg>
  );
}
