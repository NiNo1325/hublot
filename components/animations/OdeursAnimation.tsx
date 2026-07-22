'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['molecules', 'voyage', 'nez', 'habitude'] as const;

/**
 * Les molécules quittent physiquement le gâteau et traversent le cadre
 * jusqu'au nez : le trajet est l'argument. Sentir n'est pas recevoir une image
 * à distance, c'est être touché.
 */
export function OdeursAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le gâteau, source des molécules */}
      <rect x="34" y="104" width="66" height="34" rx="4" fill="#b45309" />
      <rect x="34" y="96" width="66" height="12" rx="4" fill="#fbbf24" />

      {/* Le nez, à l'autre bout */}
      <path d="M330 84 q26 22 24 46 q-2 18 -24 18 z" fill="#fca5a5" />

      {/* Les molécules quittent le gâteau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="104" cy={92 - i * 8} r="4" fill="#a78bfa">
            {anime && phase <= 0 && (
              <animate attributeName="cy" values={`${96 - i * 8};${76 - i * 8};${96 - i * 8}`} dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="32" fill="#a78bfa" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          de vraies molécules
        </text>
      </g>

      {/* Le voyage dans l'air, lent et porté par les courants */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <circle key={i} cx="110" cy="120" r="4" fill="#a78bfa">
            {anime && phase >= 1 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;210 -8" dur="4s" begin={`${i * 1}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        <path d="M112 148 q60 18 118 -6 q40 -16 88 -6" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 6" />
        <text x="14" y="186" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          elles voyagent dans l’air
        </text>
      </g>

      {/* Les récepteurs, dans le nez */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[96, 112, 128].map((y, i) => (
          <g key={y}>
            <line x1="336" y1={y} x2="348" y2={y} stroke="#4ade80" strokeWidth="3" />
            <circle cx="352" cy={y} r="4" fill="#4ade80">
              {anime && phase === 2 && (
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              )}
            </circle>
          </g>
        ))}
        <text x="14" y="210" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des capteurs les attrapent
        </text>
      </g>

      {/* L'adaptation : le signal s'éteint */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="234" fill="#64748b" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          et on s’y habitue vite
        </text>
      </g>
    </svg>
  );
}
