'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['miroir', 'pliage', 'nature', 'presque'] as const;

/* Deux lobes par aile — sans l'aile inférieure, la silhouette ne se lit pas. */
const AILE_HAUTE = 'M0 -20 C -34 -62 -78 -46 -66 -12 C -58 8 -24 4 0 -4 Z';
const AILE_BASSE = 'M0 2 C -30 2 -54 22 -42 42 C -32 58 -10 32 0 16 Z';

function Aile({ couleur }: { couleur: string }) {
  return (
    <>
      <path d={AILE_HAUTE} fill={couleur} />
      <path d={AILE_BASSE} fill={couleur} opacity="0.85" />
    </>
  );
}

/**
 * La dernière phase décale légèrement l'aile droite : la carte affirme que la
 * symétrie naturelle n'est jamais exacte, l'image doit le montrer plutôt que
 * de présenter un papillon parfait qui contredirait le texte.
 */
export function SymetrieAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const imparfait = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Papillon : deux ailes en miroir autour de l'axe. */}
      <g transform="translate(150 118)">
        <g transform="translate(-5 0)">
          <Aile couleur="#fb7185" />
        </g>
        <g
          /* En phase finale, l'aile droite est légèrement différente. */
          transform={`translate(5 0) scale(-1 1) ${imparfait ? 'rotate(7) scale(1.08 0.94)' : ''}`}
          style={{ transition: 'transform 900ms ease' }}
        >
          <Aile couleur="#f472b6" />
          {anime && phase === 1 && (
            <animateTransform
              attributeName="transform" type="scale"
              values="1 1; 0.06 1; 1 1"
              dur="3s" repeatCount="indefinite" additive="sum"
            />
          )}
        </g>
        <ellipse cx="0" cy="0" rx="6" ry="26" fill="#1b2a4a" />
        <circle cx="0" cy="-26" r="7" fill="#1b2a4a" />
        <path d="M-2 -32 q-8 -12 -14 -16 M2 -32 q8 -12 14 -16" stroke="#1b2a4a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>

      {/* L'axe de symétrie */}
      <line
        x1="150" y1="46" x2="150" y2="196"
        stroke="#ffb627" strokeWidth="2.5" strokeDasharray="8 7"
        style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}
      />

      {/* Autres symétries : le flocon a six axes. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <g transform="translate(310 92)">
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 60})`}>
              <line x1="0" y1="0" x2="0" y2="-34" stroke="#7dd3fc" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="0" y1="-22" x2="-9" y2="-31" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" />
              <line x1="0" y1="-22" x2="9" y2="-31" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" />
            </g>
          ))}
          {anime && phase === 2 && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0" to="360" dur="18s" repeatCount="indefinite" additive="sum"
            />
          )}
        </g>
        <text x="278" y="150" fill="#7dd3fc" fontSize="13" fontFamily="sans-serif">
          six axes
        </text>
      </g>

      {/* L'écart au modèle, mesuré. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="240" y="196" fill="#b9c4da" fontSize="14" fontFamily="sans-serif">
          jamais exactement pareil
        </text>
      </g>
    </svg>
  );
}
