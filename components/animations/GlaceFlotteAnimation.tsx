'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['anomalie', 'liaisons', 'quatre-degres', 'lacs'] as const;

/**
 * Le réseau hexagonal ouvert est dessiné à côté du liquide désordonné et
 * compact : le trou au milieu de l'hexagone est toute l'explication. À droite,
 * le lac gelé en surface montre ce que l'anomalie rend possible.
 */
export function GlaceFlotteAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  const hexagone = Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60 * Math.PI) / 180;
    return `${170 + Math.cos(a) * 26},${112 + Math.sin(a) * 26}`;
  }).join(' ');

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le verre, et le glaçon qui dépasse */}
      <path d="M30 76 L96 76 L88 178 L38 178 z" fill="none" stroke="#64748b" strokeWidth="3" />
      <rect x="34" y="112" width="58" height="64" fill="#0c4a6e" />
      <rect x="44" y="98" width="34" height="28" rx="3" fill="#bae6fd">
        {anime && (
          <animate attributeName="y" values="98;102;98" dur="3.4s" repeatCount="indefinite" />
        )}
      </rect>

      <text x="14" y="32" fill="#bae6fd" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        ça devrait couler
      </text>

      {/* Le réseau ouvert de la glace, face au liquide compact */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <polygon points={hexagone} fill="none" stroke="#7dd3fc" strokeWidth="3" />
        {Array.from({ length: 6 }, (_, i) => {
          const a = (i * 60 * Math.PI) / 180;
          return (
            <circle
              key={i}
              cx={170 + Math.cos(a) * 26}
              cy={112 + Math.sin(a) * 26}
              r="5"
              fill="#7dd3fc"
            />
          );
        })}
        <text x="132" y="70" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des trous
        </text>
      </g>

      {/* Le maximum de densité à quatre degrés */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="130" y1="168" x2="212" y2="168" stroke="#475569" strokeWidth="2" />
        <circle cx="158" cy="168" r="6" fill="#38bdf8" />
        <text x="14" y="210" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          densité maximale à 4 °C
        </text>
      </g>

      {/* Le lac : glace au-dessus, vie en dessous */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <rect x="246" y="112" width="140" height="76" fill="#0c4a6e" />
        <rect x="246" y="104" width="140" height="12" fill="#bae6fd" />
        {[276, 322, 360].map((x, i) => (
          <path key={x} d={`M${x} 150 q10 -6 18 0 q-8 6 -18 0 z`} fill="#fbbf24">
            {anime && phase === 3 && (
              <animateTransform
                attributeName="transform" type="translate"
                values="0 0;10 8;0 0" dur="3s" begin={`${i * 0.6}s`} repeatCount="indefinite"
              />
            )}
          </path>
        ))}
        <text x="14" y="234" fill="#bae6fd" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          le lac gèle par le haut
        </text>
      </g>
    </svg>
  );
}
