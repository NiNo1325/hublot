'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Les os fouillés en phase 1 sont exactement ceux qui s'assemblent en phase 2 :
 * la même forme traverse les phases pour montrer que le puzzle part d'indices
 * réels, et non d'une reconstitution inventée.
 */
export function LePuzzleDesOsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La roche, décor permanent */}
      <rect x="0" y="176" width="400" height="64" fill="#4a3527" />
      <rect x="0" y="176" width="400" height="10" fill="#5b4636" />

      {/* Phase 1 : on déterre de vieux os dans la roche */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M50 176 L74 130" stroke="#9ca3af" strokeWidth="4" strokeLinecap="round">
          {anime && phase === 0 && (
            <animateTransform attributeName="transform" type="rotate" values="0 74 130;-24 74 130;0 74 130" dur="1.2s" repeatCount="indefinite" />
          )}
        </path>
        <ellipse cx="130" cy="204" rx="20" ry="8" fill="#e8ddc8" stroke="#c8a97e" strokeWidth="2" />
        <ellipse cx="210" cy="212" rx="14" ry="7" fill="#e8ddc8" stroke="#c8a97e" strokeWidth="2" />
        <ellipse cx="280" cy="200" rx="17" ry="7" fill="#e8ddc8" stroke="#c8a97e" strokeWidth="2" />
        <text x="14" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>on déterre de vieux os</text>
      </g>

      {/* Phase 2 : en laboratoire, les os s'assemblent comme un puzzle */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g>
          {[
            'M104 108 q40 -18 84 0',
            'M188 108 q40 8 70 4',
            'M258 112 q22 -6 34 -2',
          ].map((d, i) => (
            <path key={d} d={d} stroke="#c8a97e" strokeWidth="6" strokeLinecap="round" fill="none">
              {anime && phase === 1 && (
                <animateTransform
                  attributeName="transform" type="translate"
                  values={`0 90; 0 0`} dur="1.3s" begin={`${i * 0.2}s`} fill="freeze"
                />
              )}
            </path>
          ))}
        </g>
        <text x="14" y="30" fill="#c8a97e" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>on les assemble</text>
      </g>

      {/* Squelette assemblé, garde sa place dès qu'il existe */}
      {phase >= 2 && (
        <g>
          <ellipse cx="150" cy="98" rx="16" ry="10" fill="none" stroke="#e8ddc8" strokeWidth="3" />
          <path d="M104 108 q40 -18 84 0" stroke="#e8ddc8" strokeWidth="4" fill="none" />
          <path d="M188 108 q40 8 70 4" stroke="#e8ddc8" strokeWidth="4" fill="none" />
        </g>
      )}

      {/* Phase 3 : il manque un os — on compare avec oiseau et crocodile */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path
          d="M258 112 q22 -6 34 -2"
          stroke={phase >= 2 ? '#4ade80' : '#e8ddc8'}
          strokeWidth="4" strokeDasharray={phase === 2 ? '3 4' : '0'} fill="none"
          style={{ transition: 'stroke 700ms ease' }}
        />
        <g transform="translate(46 46)">
          <path d="M0 0 q10 -10 20 -2 q-4 6 -14 8 Z" fill="#7dd3fc" />
          <text x="-8" y="20" fill="#7dd3fc" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>oiseau</text>
        </g>
        <g transform="translate(320 40)">
          <path d="M0 8 q14 -10 30 0 q-6 6 -14 6 q-8 0 -16 -6 Z" fill="#86efac" />
          <text x="-4" y="30" fill="#86efac" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>crocodile</text>
        </g>
        <text x="14" y="30" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>on complète les indices</text>
      </g>

      {/* Phase 4 : muscles et peau lui redonnent vie */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path
          d="M96 118 Q120 84 154 88 Q190 82 200 96 Q234 92 262 106 Q286 112 292 128 Q292 150 262 156 Q220 168 170 158 Q120 156 100 138 Z"
          fill="#c8a97e" opacity="0.85"
        />
        <circle cx="150" cy="98" r="3" fill="#0f1b33" />
        <text x="14" y="222" fill="#c8a97e" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>et on lui redonne vie</text>
      </g>
    </svg>
  );
}
