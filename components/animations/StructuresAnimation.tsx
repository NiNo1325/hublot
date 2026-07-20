'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['poids', 'carre', 'triangle', 'repartition'] as const;

/**
 * Le carré se déforme visiblement en losange, le triangle reste immobile sous
 * la même poussée. La démonstration doit être visuelle : c'est la comparaison
 * côte à côte qui fait comprendre pourquoi les charpentes sont triangulées.
 */
export function StructuresAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const deformer = anime && phase === 1;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      <path d="M0 216 h400 v24 H0 Z" fill="#1b2a4a" />

      {/* Charge appliquée */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="168" y="24" width="64" height="26" rx="6" fill="#fb923c" />
        <circle cx="184" cy="54" r="7" fill="#1b2a4a" />
        <circle cx="216" cy="54" r="7" fill="#1b2a4a" />
        {[178, 200, 222].map((x) => (
          <g key={x}>
            <line x1={x} y1="66" x2={x} y2="86" stroke="#fb923c" strokeWidth="3" />
            <path d={`M${x - 5} 82 L${x} 92 L${x + 5} 82 Z`} fill="#fb923c" />
          </g>
        ))}
      </g>

      {/* Carré articulé : il s'affaisse. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <g>
          <polygon
            points="56,120 116,120 116,190 56,190"
            fill="none" stroke="#fb7185" strokeWidth="6" strokeLinejoin="round"
          >
            {deformer && (
              <animate
                attributeName="points"
                values="56,120 116,120 116,190 56,190; 84,124 144,124 116,190 56,190; 56,120 116,120 116,190 56,190"
                dur="2.4s" repeatCount="indefinite"
              />
            )}
          </polygon>
          <text x="60" y="208" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
            se déforme
          </text>
        </g>
      </g>

      {/* Triangle : indéformable à longueurs de côtés constantes. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <polygon
          points="196,190 256,190 226,124"
          fill="none" stroke="#34d399" strokeWidth="6" strokeLinejoin="round"
        />
        <text x="192" y="208" fill="#34d399" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          ne bouge pas
        </text>
      </g>

      {/* Arc : la charge glisse vers les appuis. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path
          d="M296 190 Q340 106 384 190"
          fill="none" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round"
        />
        <path
          d="M300 186 Q340 112 380 186"
          fill="none" stroke="#7dd3fc" strokeWidth="3" strokeDasharray="7 9"
        >
          {anime && (
            <animate
              attributeName="stroke-dashoffset" values="32;0"
              dur="1.5s" repeatCount="indefinite"
            />
          )}
        </path>
        <rect x="292" y="188" width="12" height="24" fill="#2c3f66" />
        <rect x="376" y="188" width="12" height="24" fill="#2c3f66" />
      </g>
    </svg>
  );
}
