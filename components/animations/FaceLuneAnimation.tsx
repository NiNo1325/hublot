'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = [
  'toujours-pareille',
  'elle-tourne',
  'verrouillage',
  'face-cachee',
] as const;

/** Trois positions d'orbite ; le repère reste tourné vers la Terre partout. */
const POSITIONS = [
  { x: 226, y: 108, repere: { x: -1, y: 0 } },
  { x: 150, y: 34, repere: { x: 0, y: 1 } },
  { x: 74, y: 108, repere: { x: 1, y: 0 } },
];

/**
 * Le repère rouge de la Lune pointe vers la Terre à chacune des trois
 * positions. Suivre ce repère d'une position à l'autre montre qu'il a pivoté :
 * c'est la démonstration que la Lune tourne bel et bien sur elle-même.
 */
export function FaceLuneAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'orbite et la Terre */}
      <circle cx="150" cy="108" r="76" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="5 7" />
      <circle cx="150" cy="108" r="26" fill="#1f6f4e" />

      {/* La Lune à trois positions, repère toujours tourné vers la Terre */}
      {POSITIONS.map((p, i) => (
        <g
          key={`${p.x}-${p.y}`}
          style={{
            opacity: i === 0 ? opacite(0) : opacite(1),
            transition: 'opacity 600ms ease',
          }}
        >
          <circle cx={p.x} cy={p.y} r="15" fill="#cbd5e1" />
          <circle cx={p.x + p.repere.x * 9} cy={p.y + p.repere.y * 9} r="4" fill="#fb7185">
            {anime && phase >= 1 && (
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            )}
          </circle>
        </g>
      ))}

      <text x="14" y="30" fill="#cbd5e1" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        toujours le même côté
      </text>

      {/* Le verrouillage : un tour sur soi par tour d'orbite */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path d="M150 196 q40 14 76 -6" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <path d="M220 184 L232 190 L220 198 Z" fill="#38bdf8" />
        <text x="14" y="210" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          un tour sur elle-même
        </text>
      </g>

      {/* La face cachée : éclairée, mais jamais tournée vers nous */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="330" cy="70" r="30" fill="#94a3b8" />
        {[
          { x: 320, y: 60, r: 6 },
          { x: 340, y: 78, r: 5 },
          { x: 328, y: 86, r: 4 },
        ].map((c) => (
          <circle key={`${c.x}-${c.y}`} cx={c.x} cy={c.y} r={c.r} fill="#64748b" />
        ))}
        <text x="286" y="122" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          vue en 1959
        </text>
        <text x="14" y="234" fill="#fde047" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          pas une face sombre
        </text>
      </g>
    </svg>
  );
}
