'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['recette', 'ordre', 'exact', 'bug'] as const;

const INSTRUCTIONS = ['avance', 'tourne', 'avance', 'ramasse'];

/**
 * Le robot exécute la liste pas à pas, puis fonce dans le mur à la phase
 * « bug » : l'instruction était mauvaise, la machine l'a suivie exactement.
 */
export function AlgorithmeAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La liste d'instructions */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="18" y="44" width="140" height="150" rx="10" fill="#1b2a4a" stroke="#22d3ee" strokeWidth="2.5" />
        {INSTRUCTIONS.map((mot, i) => (
          <g key={i}>
            <text x="34" y={78 + i * 32} fill="#67e8f9" fontSize="18" fontFamily="var(--font-atkinson), monospace">
              {i + 1}. {mot}
            </text>
            {/* Surlignage de l'instruction courante, phase « ordre ». */}
            {anime && phase === 1 && (
              <rect x="26" y={62 + i * 32} width="124" height="24" rx="4" fill="#22d3ee" opacity="0">
                <animate
                  attributeName="opacity" values="0;0.25;0"
                  dur="3.2s" begin={`${i * 0.8}s`} repeatCount="indefinite"
                />
              </rect>
            )}
          </g>
        ))}
      </g>

      {/* Le terrain et le robot */}
      <path d="M182 186 h200" stroke="#2c3f66" strokeWidth="3" />
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <g>
          <rect x="194" y="150" width="30" height="28" rx="5" fill="#b9c4da" />
          <circle cx="203" cy="160" r="3.5" fill="#0f1b33" />
          <circle cx="215" cy="160" r="3.5" fill="#0f1b33" />
          <line x1="209" y1="150" x2="209" y2="140" stroke="#b9c4da" strokeWidth="2.5" />
          <circle cx="209" cy="137" r="3" fill="#22d3ee" />
          {anime && phase >= 2 && (
            <animateTransform
              attributeName="transform" type="translate"
              values="0 0; 120 0; 120 0"
              dur={phase === 3 ? '2.2s' : '3.4s'}
              repeatCount="indefinite"
            />
          )}
        </g>
      </g>

      {/* Le mur : l'obstacle que l'instruction n'a pas prévu */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <rect x="340" y="132" width="18" height="54" fill="#fb7185" />
        {phase === 3 && (
          <>
            {[0, 1, 2].map((i) => (
              <path
                key={i}
                d={`M334 ${144 + i * 16} l-12 -6 l4 10 l-10 -2`}
                stroke="#fb7185" strokeWidth="2.5" fill="none" strokeLinecap="round"
              >
                {anime && (
                  <animate attributeName="opacity" values="0;1;0" dur="2.2s" begin={`${1.2 + i * 0.1}s`} repeatCount="indefinite" />
                )}
              </path>
            ))}
            <text x="69" y="222" fill="#fb7185" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
              il fait ce qui est écrit, rien d&apos;autre
            </text>
          </>
        )}
      </g>
    </svg>
  );
}
