'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['profondeur', 'remontee', 'pression', 'eruption'] as const;

/**
 * La lave est orange vif et la chambre magmatique rouge sombre : le contraste
 * appuie l'idée que la couleur traduit la température, et non un « feu ».
 */
export function VolcanAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Croûte et cône */}
      <path d="M0 150 h400 v90 H0 Z" fill="#3b2a1d" />
      <path d="M120 150 L200 52 L280 150 Z" fill="#4a3527" />
      <path d="M186 52 h28 l10 14 h-48 Z" fill="#0f1b33" />

      {/* Manteau : la roche fond en profondeur */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path d="M0 214 h400 v26 H0 Z" fill="#7f1d1d" />
        <text x="12" y="232" fill="#fca5a5" fontSize="12" fontFamily="sans-serif">
          roche fondue
        </text>
      </g>

      {/* Cheminée : le magma remonte car il est moins dense */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path d="M194 214 L194 150 L200 92 L206 150 L206 214 Z" fill="#b91c1c" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="200" cy="210" r="5" fill="#fb923c">
            {anime && (
              <animate
                attributeName="cy" values="212;100"
                dur="3s" begin={`${i * 0.9}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
      </g>

      {/* Chambre magmatique sous pression */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <ellipse cx="200" cy="196" rx="56" ry="24" fill="#dc2626">
          {anime && phase === 2 && (
            <animate attributeName="rx" values="52;60;52" dur="2.4s" repeatCount="indefinite" />
          )}
        </ellipse>
        {/* Les gaz dissous, moteur de l'explosion */}
        {[176, 200, 224].map((x, i) => (
          <circle key={x} cx={x} cy="196" r="4" fill="#fed7aa" opacity="0.9">
            {anime && phase === 2 && (
              <animate attributeName="r" values="3;6;3" dur="1.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
      </g>

      {/* Éruption : gaz détendus, lave projetée puis coulée */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[-26, -10, 6, 22].map((dx, i) => (
          <circle key={dx} cx={200 + dx} cy="56" r={5 - Math.abs(dx) / 16} fill="#fb923c">
            {anime && phase === 3 && (
              <>
                <animate
                  attributeName="cy" values="56;16"
                  dur="1.5s" begin={`${i * 0.2}s`} repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity" values="1;0"
                  dur="1.5s" begin={`${i * 0.2}s`} repeatCount="indefinite"
                />
              </>
            )}
          </circle>
        ))}
        {dejaVu(3) && (
          <>
            <path d="M196 56 q-22 46 -44 94" stroke="#f97316" strokeWidth="9" strokeLinecap="round" fill="none" />
            <path d="M206 56 q20 46 40 94" stroke="#f97316" strokeWidth="7" strokeLinecap="round" fill="none" />
          </>
        )}
      </g>
    </svg>
  );
}
