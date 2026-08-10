'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Deux silhouettes bien réelles (ptérosaure, plésiosaure) précèdent la
 * preuve anatomique : ce n'est qu'après les avoir vues qu'on regarde la
 * hanche, pour ancrer la conclusion dans des animaux concrets.
 */
export function PasTousDesDinosauresAnimation({
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

      {/* Phase 1 : le ptérosaure vole avec une aile de peau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="70" rx="16" ry="8" fill="#e8ddc8" />
        <path d="M200 66 Q140 40 90 60 Q140 66 190 74 Z" fill="#a8a29e">
          {anime && (
            <animate attributeName="d" values="M200 66 Q140 40 90 60 Q140 66 190 74 Z;M200 66 Q140 56 90 50 Q140 68 190 74 Z;M200 66 Q140 40 90 60 Q140 66 190 74 Z" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        <path d="M200 66 Q260 40 310 60 Q260 66 210 74 Z" fill="#a8a29e">
          {anime && (
            <animate attributeName="d" values="M200 66 Q260 40 310 60 Q260 66 210 74 Z;M200 66 Q260 56 310 50 Q260 68 210 74 Z;M200 66 Q260 40 310 60 Q260 66 210 74 Z" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        <text x="14" y="30" fill="#a8a29e" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>le ptérosaure vole avec une aile de peau</text>
      </g>

      {/* Phase 2 : le plésiosaure nage dans la mer, long cou compris */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <rect x="0" y="60" width="400" height="140" fill="#0e3a5f" opacity="0.6" />
        <path d="M220 150 Q160 130 150 90" stroke="#7dd3fc" strokeWidth="14" strokeLinecap="round" fill="none" />
        <ellipse cx="220" cy="150" rx="30" ry="18" fill="#7dd3fc" />
        <path d="M210 165 Q200 185 214 190 M232 165 Q244 184 230 190" stroke="#7dd3fc" strokeWidth="8" strokeLinecap="round" fill="none" />
        <text x="14" y="30" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>le plésiosaure nage, long cou compris</text>
      </g>

      {/* Phase 3 : leur hanche ne ressemble pas à celle des dinosaures */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <g transform="translate(140 120)">
          <path d="M0 0 A20 20 0 1 1 0 0.1" fill="none" stroke="#4ade80" strokeWidth="4" />
          <text x="-38" y="42" fill="#4ade80" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>dinosaure</text>
        </g>
        <g transform="translate(260 120)">
          <path d="M-18 -12 L18 12 M18 -12 L-18 12" stroke="#f87171" strokeWidth="4" />
          <circle r="20" fill="none" stroke="#f87171" strokeWidth="4" />
          <text x="-30" y="42" fill="#f87171" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>ptéro / plésio</text>
        </g>
        <text x="14" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>une hanche très différente</text>
      </g>

      {/* Phase 4 : des cousins de la même époque, pas des dinosaures */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="180" r="7" fill="#e5e7eb" />
        <path d="M200 174 Q160 130 140 96" stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <path d="M200 174 Q240 130 260 96" stroke="#e5e7eb" strokeWidth="3" fill="none" />
        <circle cx="140" cy="90" r="9" fill="#4ade80" />
        <circle cx="260" cy="90" r="9" fill="#f87171" />
        <text x="96" y="76" fill="#4ade80" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>dinosaures</text>
        <text x="222" y="76" fill="#f87171" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>cousins</text>
        <text x="14" y="220" fill="#e5e7eb" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>des cousins, pas des dinosaures</text>
      </g>
    </svg>
  );
}
