'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['melange', 'reaction', 'gaz', 'mousse'] as const;

/**
 * La mousse est volontairement dessinée en blanc et bleu pâle, jamais en
 * rouge-orange : la carte explique que ce n'est ni chaud ni de la lave, et
 * l'image ne doit pas dire le contraire du texte.
 */
export function ReactionChimiqueAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      <path d="M0 206 h400 v34 H0 Z" fill="#1b2a4a" />

      {/* Le bocal */}
      <path
        d="M158 106 h84 l-10 100 h-64 Z"
        fill="#1b2a4a" stroke="#2c3f66" strokeWidth="3"
      />

      {/* Bicarbonate au fond */}
      <path
        d="M172 186 h56 l-2 20 h-52 Z"
        fill="#f5f0e6"
        style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}
      />

      {/* Vinaigre versé */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path d="M96 66 q26 -14 42 6 l-14 22 q-16 -16 -34 -6 Z" fill="#c4b5fd" />
        <line x1="132" y1="94" x2="168" y2="132" stroke="#c4b5fd" strokeWidth="6" strokeLinecap="round">
          {anime && (
            <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" />
          )}
        </line>
      </g>

      {/* Liquide en réaction */}
      <path
        d="M168 150 h64 l-6 56 h-52 Z"
        fill="#a78bfa"
        style={{
          opacity: dejaVu(1) ? 0.85 : 0.15,
          transition: 'opacity 600ms ease',
        }}
      />

      {/* Bulles de dioxyde de carbone */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[180, 200, 220, 190, 212].map((x, i) => (
          <circle key={`${x}-${i}`} cx={x} cy="196" r={4 + (i % 3)} fill="#e0f2fe">
            {anime && (
              <>
                <animate
                  attributeName="cy" values="196;120"
                  dur="1.9s" begin={`${i * 0.34}s`} repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity" values="0;0.95;0"
                  dur="1.9s" begin={`${i * 0.34}s`} repeatCount="indefinite"
                />
              </>
            )}
          </circle>
        ))}
        <text x="252" y="150" fill="#e0f2fe" fontSize="18" fontFamily="var(--font-atkinson), sans-serif">
          CO₂
        </text>
      </g>

      {/* Débordement : de la mousse, pas de la lave. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[
          [162, 104, 16], [186, 96, 20], [214, 98, 18], [238, 106, 15],
          [150, 122, 13], [250, 124, 13],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#e0f2fe" opacity="0.9">
            {anime && phase === 3 && (
              <animate
                attributeName="r" values={`${r * 0.5};${r}`}
                dur="0.9s" begin={`${i * 0.12}s`} fill="freeze"
              />
            )}
          </circle>
        ))}
        <path d="M150 128 q-14 34 -20 78" stroke="#e0f2fe" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.75" />
        <path d="M250 130 q14 34 20 76" stroke="#e0f2fe" strokeWidth="9" strokeLinecap="round" fill="none" opacity="0.75" />
      </g>
    </svg>
  );
}
