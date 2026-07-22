'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['intuition', 'paires', 'vingt-trois', 'coincidences'] as const;

const CENTRE = { x: 244, y: 112 };
const RAYON = 76;

/** Vingt-trois personnes disposées en cercle. */
const GENS = Array.from({ length: 23 }, (_, i) => {
  const a = ((i * 360) / 23 - 90) * (Math.PI / 180);
  return {
    x: CENTRE.x + Math.cos(a) * RAYON,
    y: CENTRE.y + Math.sin(a) * RAYON,
  };
});

/** Les 253 paires — c'est leur nombre, dessiné, qui fait l'argument. */
const PAIRES = GENS.flatMap((a, i) => GENS.slice(i + 1).map((b) => ({ a, b })));

/**
 * D'abord les vingt-deux traits partant d'une seule personne, puis les deux
 * cent cinquante-trois traits de toutes les paires. L'écart entre les deux
 * images est exactement l'écart entre l'intuition et le calcul.
 */
export function AnniversairesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Toutes les paires : le vrai nombre d'occasions */}
      <g style={{ opacity: opacite(2) * 0.5, transition: 'opacity 600ms ease' }}>
        {PAIRES.map((p, i) => (
          <line
            key={i}
            x1={p.a.x} y1={p.a.y} x2={p.b.x} y2={p.b.y}
            stroke="#4ade80" strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Les comparaisons vues depuis une seule personne */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {GENS.slice(1).map((g, i) => (
          <line
            key={i}
            x1={GENS[0].x} y1={GENS[0].y} x2={g.x} y2={g.y}
            stroke="#fbbf24" strokeWidth="1.5"
          />
        ))}
      </g>

      {/* Les vingt-trois personnes */}
      {GENS.map((g, i) => (
        <circle key={i} cx={g.x} cy={g.y} r={i === 0 ? 7 : 5} fill={i === 0 ? '#fbbf24' : '#7dd3fc'}>
          {anime && phase === 3 && i % 4 === 0 && (
            <animate attributeName="r" values="5;8;5" dur="2.4s" begin={`${i * 0.12}s`} repeatCount="indefinite" />
          )}
        </circle>
      ))}

      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="14" y="32" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          22 comparaisons
        </text>
      </g>
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="14" y="60" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          253 paires
        </text>
        <text x="14" y="210" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          23 personnes : 1 sur 2
        </text>
      </g>
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          les coïncidences sont fréquentes
        </text>
      </g>
    </svg>
  );
}
