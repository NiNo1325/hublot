'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['dix-pour-cent', 'partout', 'gauche-droite', 'plasticite'] as const;

/** Régions réparties sur les deux hémisphères, toutes actives à leur tour. */
const REGIONS = [
  { x: 156, y: 84 },
  { x: 176, y: 112 },
  { x: 150, y: 136 },
  { x: 232, y: 84 },
  { x: 252, y: 112 },
  { x: 226, y: 136 },
];

/**
 * Le « 10 % » est montré barré, puis l'ensemble des régions s'allume : la
 * réfutation est visuelle avant d'être dite. Les deux hémisphères échangent
 * ensuite dans les deux sens, ce qui interdit de lire l'image comme une
 * dominance.
 */
export function CerveauAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le cerveau, ses deux hémisphères séparés par un sillon */}
      <ellipse cx="204" cy="112" rx="86" ry="62" fill="#be5b7a" />
      <line x1="204" y1="52" x2="204" y2="172" stroke="#7f2b45" strokeWidth="4" />

      {/* Le mythe des dix pour cent, barré */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="132" y="140" width="144" height="30" fill="#7f2b45" opacity="0.7" />
        <line x1="126" y1="176" x2="282" y2="132" stroke="#f87171" strokeWidth="4" />
        <text x="14" y="30" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          « 10 % » : faux
        </text>
      </g>

      {/* Toutes les régions s'activent */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {REGIONS.map((r, i) => (
          <circle key={`${r.x}-${r.y}`} cx={r.x} cy={r.y} r="9" fill="#fde047">
            {anime && (
              <animate attributeName="opacity" values="0.25;1;0.25" dur="2.2s" begin={`${i * 0.35}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="230" y="30" fill="#fde047" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          20 % de l’énergie
        </text>
      </g>

      {/* Les deux moitiés échangent, dans les deux sens */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[96, 112, 128].map((y, i) => (
          <g key={y}>
            <line x1="178" y1={y} x2="230" y2={y} stroke="#38bdf8" strokeWidth="3" />
            <path d={`M226 ${y - 5} L236 ${y} L226 ${y + 5} Z`} fill="#38bdf8">
              {anime && (
                <animate attributeName="opacity" values="0.2;1;0.2" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              )}
            </path>
            <path d={`M182 ${y - 5} L172 ${y} L182 ${y + 5} Z`} fill="#38bdf8">
              {anime && (
                <animate attributeName="opacity" values="1;0.2;1" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              )}
            </path>
          </g>
        ))}
        <text x="14" y="210" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          les deux moitiés échangent
        </text>
      </g>

      {/* La plasticité : les connexions utilisées s'épaississent */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1={150 + i * 34} y1="188"
            x2={168 + i * 34} y2="172"
            stroke="#4ade80"
            strokeWidth={i + 1}
          >
            {anime && phase === 3 && (
              <animate attributeName="stroke-width" values="1;5;1" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="14" y="234" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          apprendre change le réseau
        </text>
      </g>
    </svg>
  );
}
