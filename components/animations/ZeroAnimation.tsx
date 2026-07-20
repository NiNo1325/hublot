'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['rien', 'place', 'invention', 'division'] as const;

/**
 * La comparaison 15 / 105 montre le rôle positionnel : sans un symbole pour
 * le rang vide, les deux nombres deviendraient indistinguables.
 */
export function ZeroAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le panier vide */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path d="M36 60 h68 l-10 46 h-48 z" fill="none" stroke="#b9c4da" strokeWidth="3" />
        <text x="52" y="140" fill="#b9c4da" fontSize="15" fontFamily="sans-serif">
          rien du tout
        </text>
        <text x="58" y="94" fill="#ffb627" fontSize="26" fontFamily="monospace">0</text>
      </g>

      {/* Le rôle de position */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="160" y="84" fill="#f5f0e6" fontSize="34" fontFamily="monospace">1 5</text>
        <text x="160" y="140" fill="#f5f0e6" fontSize="34" fontFamily="monospace">1</text>
        <text x="196" y="140" fill="#ffb627" fontSize="34" fontFamily="monospace">0</text>
        <text x="232" y="140" fill="#f5f0e6" fontSize="34" fontFamily="monospace">5</text>
        <text x="286" y="120" fill="#b9c4da" fontSize="12" fontFamily="sans-serif">
          sans lui, on confond
        </text>
        {anime && phase === 1 && (
          <rect x="192" y="112" width="30" height="34" fill="#ffb627" opacity="0">
            <animate attributeName="opacity" values="0;0.3;0" dur="1.8s" repeatCount="indefinite" />
          </rect>
        )}
      </g>

      {/* Une invention tardive */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="30" y1="180" x2="370" y2="180" stroke="#2c3f66" strokeWidth="2" />
        <circle cx="120" cy="180" r="5" fill="#b9c4da" />
        <text x="76" y="202" fill="#b9c4da" fontSize="11" fontFamily="sans-serif">on compte</text>
        <circle cx="286" cy="180" r="6" fill="#ffb627" />
        <text x="242" y="202" fill="#ffb627" fontSize="11" fontFamily="sans-serif">le zéro arrive</text>
      </g>

      {/* La division impossible */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="98" y="228" fill="#fb7185" fontSize="17" fontFamily="monospace">
          12 ÷ 0 = pas de réponse
        </text>
      </g>
    </svg>
  );
}
