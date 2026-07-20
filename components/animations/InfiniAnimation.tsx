'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['compter', 'jamais-fini', 'pas-un-nombre', 'entre'] as const;

/**
 * La phase clé montre l'appariement entier ↔ double : c'est la démonstration
 * que deux ensembles infinis peuvent avoir la même taille alors que l'un
 * contient l'autre.
 */
export function InfiniAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  const entiers = [1, 2, 3, 4, 5];

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La suite qui ne s'arrête pas */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {entiers.map((n, i) => (
          <text
            key={n}
            x={40 + i * 46} y="60"
            fill="#f5f0e6" fontSize="22" fontFamily="var(--font-atkinson), monospace"
          >
            {n}
          </text>
        ))}
        <text x="270" y="60" fill="#b9c4da" fontSize="22" fontFamily="var(--font-atkinson), monospace">…</text>
        <text x="304" y="60" fill="#ffb627" fontSize="22" fontFamily="var(--font-atkinson), monospace">+1</text>
      </g>

      {/* L'infini n'est pas un nombre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="13" y="102" fill="#a5b4fc" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          jamais de dernier : ce n&apos;est pas un nombre
        </text>
      </g>

      {/* L'appariement entier / double */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {entiers.map((n, i) => (
          <g key={n}>
            <text x={40 + i * 66} y="146" fill="#f5f0e6" fontSize="18" fontFamily="var(--font-atkinson), monospace">{n}</text>
            <text x={40 + i * 66} y="196" fill="#34d399" fontSize="18" fontFamily="var(--font-atkinson), monospace">{n * 2}</text>
            <line
              x1={46 + i * 66} y1="152" x2={46 + i * 66} y2="182"
              stroke="#34d399" strokeWidth="2"
            >
              {anime && phase === 2 && (
                <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${i * 0.25}s`} fill="freeze" />
              )}
            </line>
          </g>
        ))}
        <text x="146" y="172" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          autant de pairs que d&apos;entiers
        </text>
      </g>

      {/* Des infinis plus grands que d'autres */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="28" y="226" fill="#c4b5fd" fontSize="14" fontFamily="var(--font-atkinson), sans-serif">
          et certains infinis sont plus grands que d&apos;autres
        </text>
      </g>
    </svg>
  );
}
