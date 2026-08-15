'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    tire: 'un muscle tire, ne pousse pas',
    biceps: 'le biceps raccourcit',
    corde: 'et tire l’os comme une corde',
    triceps: 'le triceps le retend',
  },
  en: {
    tire: 'a muscle pulls, never pushes',
    biceps: 'the biceps shortens',
    corde: 'and pulls the bone like a rope',
    triceps: 'the triceps straightens it',
  },
};

/**
 * Un bras entier reste visible, coudé au centre : le biceps se raccourcit et
 * plie l'avant-bras, puis le triceps, de l'autre côté, se raccourcit à son
 * tour pour le retendre. Aucun muscle ne pousse jamais, seulement la corde
 * qui tire.
 */
export function CommentLesMusclesBougentAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  // Angle de l'avant-bras autour du coude : plié pendant la phase 3.
  const angle = phase === 2 ? -78 : -18;
  const bicepsContracte = phase === 1 || phase === 2;
  const tricepsContracte = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Bras haut : humérus, fixe */}
      <line x1="120" y1="70" x2="200" y2="150" stroke="#e2e8f0" strokeWidth="14" strokeLinecap="round" />
      <circle cx="120" cy="70" r="12" fill="#e2e8f0" />

      {/* Biceps, à l'avant du bras */}
      <path
        d={bicepsContracte
          ? 'M126 84 Q150 96 176 118 Q150 122 118 108 Z'
          : 'M124 80 Q148 100 178 128 Q146 128 116 104 Z'}
        fill="#f9a8d4"
        style={{ transition: 'all 500ms ease' }}
      />
      {/* Triceps, à l'arrière du bras */}
      <path
        d={tricepsContracte
          ? 'M126 92 Q156 92 182 112 Q152 108 116 100 Z'
          : 'M126 92 Q160 100 190 122 Q154 116 116 100 Z'}
        fill="#be5b7a"
        style={{ transition: 'all 500ms ease' }}
      />

      {/* Avant-bras, qui pivote au coude */}
      <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: '200px 150px', transition: 'transform 600ms ease' }}>
        <line x1="200" y1="150" x2="200" y2="230" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
        <circle cx="200" cy="230" r="9" fill="#e2e8f0" />
      </g>
      <circle cx="200" cy="150" r="9" fill="#a3a3a3" />

      {/* Le tendon, qui relie le muscle à l'os, tendu quand ça tire */}
      <line x1="176" y1="118" x2="198" y2="146" stroke="#fbbf24" strokeWidth="3">
        {anime && (bicepsContracte || tricepsContracte) && (
          <animate attributeName="stroke-width" values="3;6;3" dur="1s" repeatCount="indefinite" />
        )}
      </line>

      {/* Phase 1 : un muscle ne sait que tirer */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M280 100 h40 M320 100 l-8 -6 M320 100 l-8 6" stroke="#4ade80" strokeWidth="3" fill="none" />
        <path d="M280 128 h40" stroke="#f87171" strokeWidth="3" strokeDasharray="2 4" />
        <line x1="290" y1="118" x2="310" y2="138" stroke="#f87171" strokeWidth="3" />
        <text x="180" y="34" fill="#a3a3a3" fontSize="14" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.tire}</text>
      </g>

      {/* Phase 2 : il se contracte, raccourcit, durcit */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <text x="230" y="90" fill="#f9a8d4" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.biceps}</text>
      </g>

      {/* Phase 3 : il tire sur l'os, le bras se plie */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <text x="180" y="200" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.corde}</text>
      </g>

      {/* Phase 4 : le triceps, de l'autre côté, retend le bras */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <text x="230" y="216" fill="#be5b7a" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.triceps}</text>
      </g>
    </svg>
  );
}
