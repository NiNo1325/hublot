'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['gras', 'deux-bouts', 'entourer', 'emporter'] as const;

/** Douze molécules réparties autour de la goutte : la micelle. */
const ANGLES = Array.from({ length: 12 }, (_, i) => (i * 360) / 12);

/**
 * La molécule de savon est dessinée deux fois : agrandie sur le côté pour
 * montrer ses deux bouts, puis répétée tout autour de la goutte de gras. C'est
 * la même forme aux deux échelles, pour que la micelle se lise comme une
 * conséquence de la molécule, et non comme un dessin de plus.
 */
export function SavonAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const emporte = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      <g
        style={{
          transform: emporte ? 'translateX(120px)' : 'translateX(0)',
          transition: 'transform 1800ms ease',
        }}
      >
        {/* La goutte de gras */}
        <circle cx="140" cy="122" r="32" fill="#facc15" />

        {/* Les molécules de savon en couronne : queues dedans, têtes dehors */}
        <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
          {ANGLES.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const cos = Math.cos(rad);
            const sin = Math.sin(rad);
            return (
              <g key={angle}>
                <line
                  x1={140 + cos * 24} y1={122 + sin * 24}
                  x2={140 + cos * 42} y2={122 + sin * 42}
                  stroke="#fb923c" strokeWidth="3"
                />
                <circle cx={140 + cos * 47} cy={122 + sin * 47} r="6" fill="#38bdf8" />
              </g>
            );
          })}
        </g>
      </g>

      {/* L'eau seule glisse sur le gras */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[86, 112, 138].map((y, i) => (
          <path key={y} d={`M40 ${y} q7 11 0 18 q-7 -7 0 -18 z`} fill="#38bdf8">
            {anime && phase === 0 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;40 26;0 0" dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite"
              />
            )}
          </path>
        ))}
        <text x="14" y="30" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l’eau glisse sur le gras
        </text>
      </g>

      {/* La molécule agrandie : une tête, une queue */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="286" cy="60" r="12" fill="#38bdf8" />
        <path d="M286 74 q10 12 0 22 q-10 12 0 22" fill="none" stroke="#fb923c" strokeWidth="4" strokeLinecap="round" />
        <text x="306" y="52" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          eau
        </text>
        <text x="306" y="118" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          gras
        </text>
      </g>

      {/* La saleté enfermée, puis emportée par le rinçage */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="14" y="210" fill="#facc15" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          enfermé dans une bulle
        </text>
      </g>
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <line x1="240" y1="196" x2="330" y2="196" stroke="#7dd3fc" strokeWidth="3" />
        <path d="M324 189 L340 196 L324 203 Z" fill="#7dd3fc" />
        <text x="14" y="234" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le rinçage l’emporte
        </text>
      </g>
    </svg>
  );
}
