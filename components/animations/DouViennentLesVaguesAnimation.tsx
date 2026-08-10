'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Le vent souffle sur l'eau, de petites rides naissent et grandissent en
 * vagues ; en phase finale, des points tournent sur place près de la plage
 * pour montrer que c'est l'énergie qui avance, pas l'eau elle-même.
 */
export function DouViennentLesVaguesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0c4a6e" />
      <rect width="400" height="108" fill="#155e8a" />

      {/* Plage, toujours visible à droite */}
      <path d="M350 240 L400 240 L400 158 Z" fill="#d8c48a" />

      {/* Phase 1 : le vent souffle sur l'eau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M${20 + i * 46} ${34 + i * 10} q18 -8 36 0`}
            stroke="#e0f2fe"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          >
            {anime && (
              <animate
                attributeName="opacity"
                values="0.25;1;0.25"
                dur="1.6s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            )}
          </path>
        ))}
        <text x="16" y="90" fill="#e0f2fe" fontSize="15" fontFamily={police} style={legende(0)}>
          le vent souffle fort
        </text>
      </g>

      {/* Phase 2 : de petites rides à la surface */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path
          d="M0 112 q10 -5 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0"
          stroke="#7dd3fc"
          strokeWidth="2.5"
          fill="none"
        />
        <text x="16" y="140" fill="#7dd3fc" fontSize="15" fontFamily={police} style={legende(1)}>
          de petites rides
        </text>
      </g>

      {/* Phase 3 : les rides grandissent en vagues */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path
          d="M-40 112 q17 -22 34 0 t34 0 t34 0 t34 0 t34 0 t34 0 t34 0 t34 0 t34 0 t34 0 t34 0"
          stroke="#38bdf8"
          strokeWidth="3.5"
          fill="none"
        >
          {anime && (
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;-68 0;0 0"
              dur="3s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <text x="16" y="196" fill="#38bdf8" fontSize="15" fontFamily={police} style={legende(2)}>
          les vagues grandissent
        </text>
      </g>

      {/* Phase 4 : l'eau tourne sur place, l'énergie avance vers la plage */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {[70, 150, 230].map((cx, i) => (
          <circle key={cx} cx={cx} cy="118" r="3.5" fill="#facc15">
            {anime && (
              <>
                <animate
                  attributeName="cx"
                  values={`${cx};${cx + 6};${cx};${cx - 6};${cx}`}
                  dur="2s"
                  begin={`${i * 0.25}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  values="118;112;118;124;118"
                  dur="2s"
                  begin={`${i * 0.25}s`}
                  repeatCount="indefinite"
                />
              </>
            )}
          </circle>
        ))}
        <line x1="16" y1="150" x2="340" y2="150" stroke="#facc15" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="16" y="210" fill="#facc15" fontSize="14" fontFamily={police} style={legende(3)}>
          l’eau reste sur place
        </text>
      </g>
    </svg>
  );
}
