'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Un profil de tête reste visible en permanence : la poussière entre par la
 * narine, un signal file le long du nerf jusqu'au cerveau, puis en repart
 * pour ordonner l'expulsion d'air qui chasse l'intrus.
 */
export function PourquoiOnEternueAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const eclate = dejaVu(3);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Profil de tête, tourné vers la gauche */}
      <ellipse cx="240" cy="118" rx="66" ry="78" fill="#e3ad8f" />
      <path d="M162 108 Q140 118 152 138 Q162 144 172 132 Z" fill="#e3ad8f" stroke="#c98b6b" strokeWidth="2" />
      <ellipse cx="156" cy="122" rx="3.5" ry="5" fill="#7c4a34" />
      <path
        d={eclate ? 'M156 150 Q176 172 196 150' : 'M160 152 Q176 160 190 152'}
        stroke="#7c4a34" strokeWidth="3" fill="none" strokeLinecap="round"
      />

      {/* Le cerveau, relié à la narine par un nerf */}
      <circle cx="248" cy="86" r="18" fill="#f9a8d4" opacity="0.85" />
      <path d="M156 122 Q198 76 240 84" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="4 4" fill="none" />

      {/* Phase 1 : une poussière chatouille le nez */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="60" cy="122" r="4" fill="#a8a29e">
          {anime && (
            <animate attributeName="cx" values="40;150" dur="2.4s" repeatCount="indefinite" />
          )}
          {anime && (
            <animate attributeName="cy" values="122;116;126;118" dur="2.4s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="20" y="34" fill="#a3a3a3" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>une poussière chatouille</text>
      </g>

      {/* Phase 2 : le nerf prévient le cerveau */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M156 122 Q198 76 240 84" stroke="#38bdf8" strokeWidth="3" fill="none">
          {anime && (
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.4s" repeatCount="indefinite" />
          )}
        </path>
        <circle cx="248" cy="86" r="22" fill="none" stroke="#38bdf8" strokeWidth="2">
          {anime && (
            <animate attributeName="r" values="18;26;18" dur="1.4s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="20" y="200" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>un capteur prévient le cerveau</text>
      </g>

      {/* Phase 3 : le cerveau ordonne l'expulsion */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M240 84 Q198 76 156 122" stroke="#4ade80" strokeWidth="3" fill="none">
          {anime && (
            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.2s" repeatCount="indefinite" />
          )}
        </path>
        <text x="200" y="34" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>« expulse-la ! »</text>
      </g>

      {/* Phase 4 : atchoum, l'air chasse l'intrus */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="150" y1={98 + i * 18} x2="30" y2={90 + i * 22}
            stroke="#fbbf24" strokeWidth="3" strokeLinecap="round"
          >
            {anime && (
              <animate attributeName="opacity" values="0;1;0" dur="1s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
            )}
          </line>
        ))}
        <circle cx="150" cy="132" r="3" fill="#a8a29e">
          {anime && (
            <animate attributeName="cx" values="150;20" dur="1s" repeatCount="indefinite" />
          )}
          {anime && (
            <animate attributeName="opacity" values="1;0" dur="1s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="150" y="200" fill="#fbbf24" fontSize="18" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>Atchoum !</text>
      </g>
    </svg>
  );
}
