'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['lune-eclairee', 'moitie', 'tour', 'formes'] as const;

/**
 * La dernière phase montre les quatre aspects vus depuis la Terre, avec des
 * limites droites : une ombre portée par une sphère serait toujours courbe.
 * C'est l'argument visuel qui distingue une phase d'une éclipse.
 */
export function PhasesLuneAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id="disque-lune">
          <circle cx="196" cy="104" r="34" />
        </clipPath>
      </defs>
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Soleil, source unique de lumière */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="40" cy="104" r="22" fill="#ffb627" />
        {[86, 104, 122].map((y) => (
          <line
            key={y} x1="66" y1={y} x2="140" y2={y}
            stroke="#ffb627" strokeWidth="3" strokeDasharray="7 7"
          >
            {anime && (
              <animate attributeName="stroke-dashoffset" values="14;0" dur="1.2s" repeatCount="indefinite" />
            )}
          </line>
        ))}
      </g>

      {/* Terre */}
      <circle cx="196" cy="104" r="20" fill="#2563eb" style={{ opacity: 0.9 }} />

      {/* Orbite lunaire et Lune, dont la moitié éclairée fait toujours face au Soleil */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <circle cx="196" cy="104" r="62" fill="none" stroke="#2c3f66" strokeWidth="2" strokeDasharray="5 7" />
      </g>
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <g>
          <circle cx="258" cy="104" r="14" fill="#1b2a4a" />
          {/* Demi-disque clair tourné vers le Soleil. */}
          <path d="M258 90 A14 14 0 0 0 258 118 Z" fill="#f5f0e6" />
          {anime && phase >= 2 && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 196 104" to="360 196 104"
              dur="14s" repeatCount="indefinite"
            />
          )}
        </g>
      </g>

      {/*
        Les quatre aspects vus depuis la Terre. La limite entre clair et sombre
        est droite ou courbée vers l'intérieur — jamais l'arc d'une ombre.
      */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[
          { cx: 316, label: 'nouvelle', clair: '' },
          { cx: 348, label: 'quartier', clair: 'M348 176 A16 16 0 0 1 348 208 Z' },
          { cx: 380, label: 'gibbeuse', clair: 'M380 176 A16 16 0 0 1 380 208 Z M380 176 A9 16 0 0 0 380 208 Z' },
        ].map(({ cx, clair }) => (
          <g key={cx}>
            <circle cx={cx} cy="192" r="16" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="1.5" />
            {clair && <path d={clair} fill="#f5f0e6" />}
          </g>
        ))}
        <circle cx="284" cy="192" r="16" fill="#f5f0e6" />
        <text x="239" y="222" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          vu depuis la Terre
        </text>
      </g>
    </svg>
  );
}
