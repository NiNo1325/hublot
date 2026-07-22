'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['pas-morts', 'vivant', 'moelle', 'reparation'] as const;

/**
 * L'os est dessiné en coupe, avec ses vaisseaux et sa moelle apparents : c'est
 * l'inverse de l'image du squelette sec de musée, qui est le point que la
 * carte corrige.
 */
export function OsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const casse = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'os en coupe : paroi dure, moelle au centre */}
      <rect x="60" y="100" width="280" height="44" rx="22" fill="#e2e8f0" />
      <rect x="86" y="112" width="228" height="20" rx="10" fill="#be5b7a" />

      {/* Les vaisseaux : il est irrigué, donc vivant */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[110, 170, 230, 290].map((x, i) => (
          <line key={x} x1={x} y1="100" x2={x + 8} y2="144" stroke="#dc2626" strokeWidth="2">
            {anime && (
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="14" y="32" fill="#dc2626" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          un os est vivant
        </text>
      </g>

      {/* Le remodelage : démolition et reconstruction simultanées */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[130, 200, 270].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="94" r="5" fill="#f87171">
              {anime && phase === 1 && (
                <animate attributeName="cy" values="94;88;94" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              )}
            </circle>
            <circle cx={x + 22} cy="150" r="5" fill="#4ade80">
              {anime && phase === 1 && (
                <animate attributeName="cy" values="150;156;150" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              )}
            </circle>
          </g>
        ))}
        <text x="14" y="72" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          démoli et refait sans cesse
        </text>
      </g>

      {/* La moelle, usine à cellules sanguines */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx={150 + i * 40} cy="122" r="4" fill="#dc2626">
            {anime && phase === 2 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;60 46" dur="2.6s" begin={`${i * 0.5}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        <text x="14" y="190" fill="#be5b7a" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la moelle fait ton sang
        </text>
      </g>

      {/* La fracture, et le cal qui la ressoude */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <line
          x1="210" y1="96" x2="196" y2="148"
          stroke="#0f1b33"
          strokeWidth={casse ? 5 : 0}
          style={{ transition: 'stroke-width 800ms ease' }}
        />
        <ellipse cx="203" cy="122" rx="20" ry="30" fill="none" stroke="#fbbf24" strokeWidth="3">
          {anime && phase === 3 && (
            <animate attributeName="rx" values="8;20;8" dur="3s" repeatCount="indefinite" />
          )}
        </ellipse>
        <text x="14" y="214" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          et il se ressoude seul
        </text>
      </g>
    </svg>
  );
}
