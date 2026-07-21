'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['lancer', 'frottement', 'glace', 'espace'] as const;

/**
 * Trois pistes superposées, parcourues par la même poussée de départ : c'est
 * la comparaison qui fait l'argument. Moins il y a de frottement, plus la
 * bille va loin — et sur la dernière piste, elle sort du cadre.
 */
export function InertieAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Piste rugueuse : la bille s'arrête vite */}
      <line x1="20" y1="100" x2="380" y2="100" stroke="#78716c" strokeWidth="4" />
      {[40, 70, 100, 130].map((x) => (
        <circle key={x} cx={x} cy="96" r="2" fill="#a8a29e" />
      ))}
      <circle cx="40" cy="90" r="9" fill="#f8fafc">
        {anime && phase <= 1 && (
          <animate attributeName="cx" values="40;140;140;40" keyTimes="0;0.45;0.85;1" dur="4s" repeatCount="indefinite" />
        )}
      </circle>

      {/* Ce qui la freine : des forces, pas une fatalité */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <line x1={96 - i * 4} y1={78 - i * 12} x2={60 - i * 4} y2={78 - i * 12} stroke="#f87171" strokeWidth="3" />
            <path d={`M66 ${72 - i * 12} L54 ${78 - i * 12} L66 ${84 - i * 12} Z`} fill="#f87171" />
          </g>
        ))}
        <text x="150" y="64" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le sol et l’air freinent
        </text>
      </g>

      {/* Piste de glace : bien moins de frottement */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="20" y1="160" x2="380" y2="160" stroke="#7dd3fc" strokeWidth="4" />
        <circle cx="40" cy="150" r="9" fill="#f8fafc">
          {anime && phase === 2 && (
            <animate attributeName="cx" values="40;330;330;40" keyTimes="0;0.6;0.85;1" dur="5s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="14" y="138" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          sur la glace : bien plus loin
        </text>
      </g>

      {/* Le vide : plus rien pour freiner, la sonde sort du cadre */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[60, 150, 250, 340].map((x, i) => (
          <circle key={x} cx={x} cy={196 + (i % 2) * 8} r="1.8" fill="#e2e8f0" />
        ))}
        <g>
          <rect x="30" y="192" width="22" height="10" rx="2" fill="#cbd5e1" />
          <rect x="52" y="195" width="8" height="4" fill="#94a3b8" />
          {anime && phase === 3 && (
            <animateTransform
              attributeName="transform" type="translate"
              values="0 0;360 0" dur="6s" repeatCount="indefinite"
            />
          )}
        </g>
        <text x="14" y="232" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          dans l’espace : rien ne freine
        </text>
      </g>
    </svg>
  );
}
