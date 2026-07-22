'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['pas-du-singe', 'variation', 'selection', 'pas-de-but'] as const;

/** Individus d'une même génération : la variation est le point de départ. */
const INDIVIDUS = [
  { x: 44, r: 7, retenu: false },
  { x: 88, r: 10, retenu: true },
  { x: 132, r: 6, retenu: false },
  { x: 176, r: 11, retenu: true },
  { x: 220, r: 8, retenu: false },
];

/**
 * L'arbre montre deux branches issues d'un même point : ni l'une ne descend de
 * l'autre. Les branches qui s'arrêtent net rappellent que l'évolution n'a pas
 * de direction — la plupart des lignées finissent par disparaître.
 */
export function EvolutionAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'ancêtre commun, et les deux branches cousines */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="300" cy="188" r="7" fill="#a3a3a3" />
        <path d="M300 182 q-24 -34 -34 -66" fill="none" stroke="#a3a3a3" strokeWidth="3" />
        <path d="M300 182 q24 -34 34 -66" fill="none" stroke="#a3a3a3" strokeWidth="3" />
        <circle cx="266" cy="112" r="9" fill="#4ade80" />
        <circle cx="334" cy="112" r="9" fill="#fbbf24" />
        <text x="256" y="212" fill="#a3a3a3" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ancêtre commun
        </text>
      </g>

      {/* La variation : personne n'est identique */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {INDIVIDUS.map((ind, i) => (
          <circle key={ind.x} cx={ind.x} cy="96" r={ind.r} fill="#7dd3fc">
            {anime && phase === 1 && (
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="60" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          tous différents
        </text>
      </g>

      {/* La sélection : certains laissent plus de descendants */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {INDIVIDUS.filter((i) => i.retenu).map((ind) => (
          <g key={ind.x}>
            <line x1={ind.x} y1="108" x2={ind.x} y2="140" stroke="#4ade80" strokeWidth="3" />
            {[0, 1, 2].map((k) => (
              <circle key={k} cx={ind.x - 14 + k * 14} cy="152" r="5" fill="#4ade80" />
            ))}
          </g>
        ))}
        <text x="14" y="32" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          plus de descendants
        </text>
      </g>

      {/* Aucune direction : des branches s'arrêtent */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[60, 130, 200].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="166" x2={x + 10} y2="192" stroke="#64748b" strokeWidth="2" />
            <line x1={x + 4} y1="188" x2={x + 16} y2="196" stroke="#f87171" strokeWidth="3">
              {anime && phase === 3 && (
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              )}
            </line>
          </g>
        ))}
        <text x="14" y="234" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          aucun but, aucun progrès
        </text>
      </g>
    </svg>
  );
}
