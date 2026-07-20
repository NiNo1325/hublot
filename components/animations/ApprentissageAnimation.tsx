'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['exemples', 'erreurs', 'ajuste', 'comprend-pas'] as const;

/**
 * La courbe d'erreur descend sans jamais atteindre zéro, et la dernière phase
 * rappelle que la machine ne comprend pas : elle a trouvé une corrélation,
 * pas un sens.
 */
export function ApprentissageAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Les exemples étiquetés */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={22 + i * 34} y="42" width="28" height="28" rx="5" fill="#1b2a4a" stroke="#22d3ee" strokeWidth="2" />
            <text x={30 + i * 34} y="62" fontSize="18">🐱</text>
          </g>
        ))}
        <text x="22" y="94" fill="#22d3ee" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des milliers d&apos;exemples
        </text>
      </g>

      {/* La boîte de calcul */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="178" y="34" width="92" height="76" rx="10" fill="#1b2a4a" stroke="#a5b4fc" strokeWidth="2.5" />
        {Array.from({ length: 9 }).map((_, i) => (
          <circle
            key={i}
            cx={196 + (i % 3) * 28} cy={54 + Math.floor(i / 3) * 24} r="5" fill="#a5b4fc"
          >
            {anime && phase === 2 && (
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin={`${i * 0.12}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="176" y="128" fill="#a5b4fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des réglages qu&apos;on ajuste
        </text>
      </g>

      {/* L'erreur qui diminue */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <line x1="292" y1="36" x2="292" y2="112" stroke="#2c3f66" strokeWidth="2" />
        <line x1="292" y1="112" x2="382" y2="112" stroke="#2c3f66" strokeWidth="2" />
        <path
          d="M292 42 q22 44 44 54 q26 10 46 12"
          fill="none" stroke="#fb7185" strokeWidth="3"
        >
          {anime && phase === 1 && (
            <animate attributeName="stroke-dasharray" values="0 200; 200 0" dur="2.2s" fill="freeze" />
          )}
        </path>
        <text x="264" y="132" fill="#fb7185" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l&apos;erreur baisse
        </text>
      </g>

      {/* Elle ne comprend pas */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <rect x="34" y="158" width="332" height="58" rx="10" fill="#1b2a4a" stroke="#fb7185" strokeWidth="2" />
        <text x="10" y="184" fill="#f5f0e6" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          elle trouve des régularités dans des chiffres
        </text>
        <text x="52" y="204" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          elle ne sait pas ce qu&apos;est un chat
        </text>
      </g>
    </svg>
  );
}
