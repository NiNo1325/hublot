'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['inclinaison', 'ete', 'hiver', 'distance'] as const;

/** Terre inclinée, avec son axe et son hémisphère nord marqué. */
function Terre({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(-23)`}>
      <circle r="26" fill="#2563eb" />
      <path d="M-26 0 A26 26 0 0 1 26 0 Z" fill="#38bdf8" />
      <line x1="0" y1="-36" x2="0" y2="36" stroke="#f5f0e6" strokeWidth="2" strokeDasharray="4 4" />
      <text x="-6" y="-14" fill="#0f1b33" fontSize="11" fontFamily="sans-serif">N</text>
    </g>
  );
}

/**
 * L'axe garde la même direction aux deux positions de l'orbite : c'est
 * précisément ce qui produit les saisons. Le faisceau incident est dessiné
 * étroit côté été et étalé côté hiver — la surface éclairée est l'argument,
 * pas la distance.
 */
export function SaisonsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Soleil au centre */}
      <circle cx="200" cy="120" r="24" fill="#ffb627" />
      <ellipse cx="200" cy="120" rx="142" ry="86" fill="none" stroke="#2c3f66" strokeWidth="2" strokeDasharray="5 7" />

      {/* Été : rayons concentrés sur une petite surface */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <Terre x={62} y={120} />
        {[-10, 0, 10].map((dy) => (
          <line
            key={dy} x1="172" y1={120 + dy} x2="96" y2={120 + dy * 0.4}
            stroke="#ffb627" strokeWidth="3" strokeDasharray="6 6"
          >
            {anime && (
              <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="26" y="182" fill="#ffb627" fontSize="11" fontFamily="sans-serif">
          été : rayons droits
        </text>
      </g>

      {/* Hiver : même énergie étalée sur une plus grande surface */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <Terre x={338} y={120} />
        {[-26, 0, 26].map((dy) => (
          <line
            key={dy} x1="228" y1={120 + dy * 0.3} x2="304" y2={120 + dy}
            stroke="#7dd3fc" strokeWidth="3" strokeDasharray="6 6"
          >
            {anime && (
              <animate attributeName="stroke-dashoffset" values="12;0" dur="1s" repeatCount="indefinite" />
            )}
          </line>
        ))}
        <text x="268" y="182" fill="#7dd3fc" fontSize="11" fontFamily="sans-serif">
          hiver : rayons en biais
        </text>
      </g>

      {/* L'axe conserve sa direction sur toute l'orbite */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <text x="130" y="30" fill="#b9c4da" fontSize="12" fontFamily="sans-serif">
          l&apos;axe garde toujours la même direction
        </text>
      </g>

      {/* La distance n'explique rien : elle varie à peine, et à contretemps. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="96" y="216" fill="#fb7185" fontSize="13" fontFamily="sans-serif">
          la distance ne change presque pas
        </text>
        {phase === 3 && (
          <line x1="88" y1="120" x2="312" y2="120" stroke="#fb7185" strokeWidth="2" strokeDasharray="4 6" />
        )}
      </g>
    </svg>
  );
}
