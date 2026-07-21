'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['avaler', 'estomac', 'intestin', 'sortie'] as const;

/**
 * L'onde qui descend le long de l'œsophage est dessinée comme un
 * resserrement qui pousse la bouchée : c'est ce que la carte corrige — la
 * nourriture ne tombe pas, elle est poussée. L'intestin grêle occupe
 * volontairement plus de place que l'estomac, à l'inverse de l'image courante.
 */
export function DigestionAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Bouche et œsophage */}
      <circle cx="136" cy="26" r="14" fill="#fca5a5" />
      <rect x="128" y="38" width="16" height="54" rx="8" fill="#7f1d1d" />

      {/* La bouchée, poussée par une onde musculaire */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="136" cy="48" r="7" fill="#fbbf24">
          {anime && (
            <animate attributeName="cy" values="44;88;44" dur="3.2s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="196" y="46" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des muscles poussent
        </text>
      </g>

      {/* L'estomac : un broyeur, pas une destination */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path
          d="M128 92 q34 -4 40 22 q6 30 -22 36 q-26 4 -26 -22 z"
          fill="#b45309"
        >
          {anime && phase === 1 && (
            <animateTransform
              attributeName="transform" type="rotate"
              values="-3 140 118;3 140 118;-3 140 118"
              dur="1.8s" repeatCount="indefinite"
            />
          )}
        </path>
        <text x="196" y="116" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l’estomac malaxe
        </text>
      </g>

      {/* L'intestin grêle : sept mètres repliés, et le passage dans le sang */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path
          d="M126 150 q-34 0 -34 14 t34 14 t34 14 t-34 14"
          fill="none"
          stroke="#f472b6"
          strokeWidth="11"
          strokeLinecap="round"
        />
        {[168, 182, 196].map((y, i) => (
          <g key={y}>
            <line x1="150" y1={y} x2="172" y2={y} stroke="#38bdf8" strokeWidth="3" />
            <path d={`M168 ${y - 5} L178 ${y} L168 ${y + 5} Z`} fill="#38bdf8">
              {anime && (
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              )}
            </path>
          </g>
        ))}
        <text x="186" y="176" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ça passe dans le sang
        </text>
      </g>

      {/* Le côlon et la sortie */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path
          d="M126 206 q30 6 46 -2"
          fill="none"
          stroke="#a16207"
          strokeWidth="12"
          strokeLinecap="round"
        />
        <text x="14" y="234" fill="#a3a3a3" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          environ un jour
        </text>
      </g>
    </svg>
  );
}
