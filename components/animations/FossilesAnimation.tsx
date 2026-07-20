'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['mort', 'enfouissement', 'pierre', 'rare'] as const;

/**
 * Les couches sédimentaires s'empilent au fil des phases : le temps est
 * l'ingrédient principal de la fossilisation, et l'empilement le rend visible.
 */
export function FossilesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  const squelette = (
    <g>
      <ellipse cx="150" cy="150" rx="34" ry="12" fill="none" strokeWidth="4" />
      <line x1="116" y1="150" x2="96" y2="140" strokeWidth="4" strokeLinecap="round" />
      <circle cx="90" cy="136" r="9" strokeWidth="4" fill="none" />
      {[-20, -6, 8, 22].map((dx) => (
        <line key={dx} x1={150 + dx} y1="160" x2={150 + dx} y2="172" strokeWidth="3.5" strokeLinecap="round" />
      ))}
    </g>
  );

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Couches sédimentaires, empilées au fil du temps */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[
          { y: 120, h: 24, c: '#5b4636', visible: dejaVu(1) },
          { y: 96, h: 24, c: '#6b5343', visible: dejaVu(2) },
          { y: 72, h: 24, c: '#7a6050', visible: dejaVu(3) },
        ].map((c, i) => (
          <rect
            key={i}
            x="0" y={c.y} width="400" height={c.h}
            fill={c.c}
            style={{ opacity: c.visible ? 1 : 0, transition: 'opacity 900ms ease' }}
          />
        ))}
        <rect x="0" y="144" width="400" height="96" fill="#4a3527" />
      </g>

      {/* L'animal, puis sa copie minérale */}
      <g
        stroke={phase >= 2 ? '#b9c4da' : '#f5f0e6'}
        style={{ opacity: opacite(0), transition: 'opacity 600ms ease, stroke 900ms ease' }}
      >
        {squelette}
      </g>

      {/* Minéralisation : l'eau dépose des minéraux */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[112, 150, 188].map((x, i) => (
          <circle key={x} cx={x} cy="96" r="3.5" fill="#7dd3fc">
            {anime && phase === 2 && (
              <>
                <animate attributeName="cy" values="80;146" dur="2.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0.9;0" dur="2.4s" begin={`${i * 0.7}s`} repeatCount="indefinite" />
              </>
            )}
          </circle>
        ))}
        <text x="206" y="166" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l&apos;os devient pierre
        </text>
      </g>

      {/* La rareté : presque tout disparaît sans trace */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="205" y="36" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          presque tout disparaît
        </text>
        <text x="188" y="54" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          un fossile est un hasard
        </text>
      </g>
    </svg>
  );
}
