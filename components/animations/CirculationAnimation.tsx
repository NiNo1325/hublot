'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['pompe', 'aller', 'livraison', 'retour'] as const;

/**
 * Le sang de retour est dessiné rouge sombre, jamais bleu : la carte affirme
 * que le sang veineux n'est pas bleu, l'image ne doit pas répéter la
 * convention trompeuse des schémas scolaires.
 */
export function CirculationAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Silhouette */}
      <g opacity="0.28" fill="#b9c4da">
        <circle cx="200" cy="42" r="20" />
        <path d="M200 66 q-40 0 -44 44 l0 62 q0 10 10 10 l68 0 q10 0 10 -10 l0 -62 q-4 -44 -44 -44 z" />
        <path d="M158 118 l-26 62 M242 118 l26 62" stroke="#b9c4da" strokeWidth="11" strokeLinecap="round" />
        <path d="M182 182 l-6 52 M218 182 l6 52" stroke="#b9c4da" strokeWidth="12" strokeLinecap="round" />
      </g>

      {/* Le cœur, muscle qui se contracte */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {/*
          Battement en CSS et non en `animateTransform` : un `scale` SVG opère
          depuis l'origine du repère et ferait dériver le cœur vers un coin.
          `transformOrigin` le fait pulser sur lui-même.
        */}
        <path
          d="M200 118 q-16 -22 -32 -8 q-14 12 2 28 l30 28 l30 -28 q16 -16 2 -28 q-16 -14 -32 8 z"
          fill="#dc2626"
          style={{
            transformOrigin: '200px 146px',
            animation: anime ? 'battement 1.1s ease-in-out infinite' : undefined,
          }}
        />
      </g>

      {/* Artères : départ du sang oxygéné, rouge vif */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path d="M186 132 q-52 6 -60 62" stroke="#ef4444" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M214 132 q52 6 60 62" stroke="#ef4444" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M200 160 q-8 40 -12 74" stroke="#ef4444" strokeWidth="5" fill="none" strokeLinecap="round" />
        {[0, 1, 2].map((i) => (
          <circle key={i} r="4.5" fill="#fca5a5">
            {anime && (
              <animateMotion
                dur="2.6s" begin={`${i * 0.85}s`} repeatCount="indefinite"
                path="M200 132 q-56 10 -66 66"
              />
            )}
          </circle>
        ))}
      </g>

      {/* Capillaires : le vrai lieu de l'échange */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[[126, 196], [274, 196], [188, 232]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="11" fill="none" stroke="#7dd3fc" strokeWidth="2.5">
              {anime && phase === 2 && (
                <animate attributeName="r" values="8;13;8" dur="1.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              )}
            </circle>
            <circle cx={cx} cy={cy} r="4" fill="#7dd3fc" />
          </g>
        ))}
        <text x="292" y="176" fill="#7dd3fc" fontSize="12" fontFamily="sans-serif">
          O₂ livré
        </text>
      </g>

      {/* Retour veineux : rouge sombre, surtout pas bleu. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M136 190 q40 -30 56 -58" stroke="#7f1d1d" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M264 190 q-40 -30 -56 -58" stroke="#7f1d1d" strokeWidth="5" fill="none" strokeLinecap="round" />
        {[0, 1].map((i) => (
          <circle key={i} r="4.5" fill="#991b1b">
            {anime && (
              <animateMotion
                dur="2.4s" begin={`${i * 1.2}s`} repeatCount="indefinite"
                path="M136 190 q40 -30 60 -58"
              />
            )}
          </circle>
        ))}
      </g>
    </svg>
  );
}
