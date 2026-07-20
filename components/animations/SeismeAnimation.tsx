'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['plaques', 'frottement', 'rupture', 'ondes'] as const;

/**
 * Le sol reste continu à la rupture : les deux blocs coulissent l'un contre
 * l'autre. Aucun gouffre ne s'ouvre — l'image de cinéma que la carte corrige.
 */
export function SeismeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const rompu = phase >= 2;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Deux plaques accolées, décalées après la rupture */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <g style={{ transform: rompu ? 'translateY(6px)' : 'none', transition: 'transform 500ms ease' }}>
          <path d="M0 118 h196 v122 H0 Z" fill="#4a3527" />
          <path d="M0 118 h196 v14 H0 Z" fill="#1f6f4e" />
        </g>
        <g style={{ transform: rompu ? 'translateY(-6px)' : 'none', transition: 'transform 500ms ease' }}>
          <path d="M204 118 h196 v122 H204 Z" fill="#4a3527" />
          <path d="M204 118 h196 v14 H204 Z" fill="#1f6f4e" />
        </g>
        {/* La faille : un contact, pas un gouffre. */}
        <line x1="200" y1="118" x2="200" y2="240" stroke="#0f1b33" strokeWidth="5" />
      </g>

      {/* Flèches de contrainte : les plaques poussent en sens contraires */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <g>
          <line x1="90" y1="176" x2="150" y2="176" stroke="#ffb627" strokeWidth="5" />
          <path d="M144 168 L162 176 L144 184 Z" fill="#ffb627" />
        </g>
        <g>
          <line x1="310" y1="204" x2="250" y2="204" stroke="#ffb627" strokeWidth="5" />
          <path d="M256 196 L238 204 L256 212 Z" fill="#ffb627" />
        </g>
        <text x="112" y="156" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          ça pousse, ça se bloque
        </text>
      </g>

      {/* Rupture : libération brutale */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M200 ${150 + i * 22} l-16 -10 l6 14 l-14 -4`}
            stroke="#fb7185" strokeWidth="3" fill="none" strokeLinecap="round"
          >
            {anime && phase === 2 && (
              <animate attributeName="opacity" values="0;1;0" dur="0.7s" begin={`${i * 0.15}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
      </g>

      {/* Ondes concentriques depuis le foyer */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="200" cy="182" r="20" fill="none" stroke="#38bdf8" strokeWidth="3">
            {anime && (
              <>
                <animate attributeName="r" values="12;120" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.9;0" dur="2.4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
              </>
            )}
          </circle>
        ))}
        <circle cx="200" cy="182" r="5" fill="#fb7185" />
        <text x="212" y="186" fill="#fb7185" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">foyer</text>
      </g>

      {/* Bâtiments : ce sont eux qui font le danger */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[64, 300].map((x, i) => (
          <g
            key={x}
            style={{
              transformOrigin: `${x + 16}px 132px`,
              animation: anime && phase === 3 ? `secousse 0.4s ease-in-out infinite ${i * 0.1}s` : undefined,
            }}
          >
            <rect x={x} y="76" width="32" height="46" fill="#b9c4da" />
            <rect x={x + 7} y="86" width="8" height="10" fill="#0f1b33" />
            <rect x={x + 19} y="86" width="8" height="10" fill="#0f1b33" />
          </g>
        ))}
      </g>
    </svg>
  );
}
