'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Les cellules ciliées de la cochlée ne se régénèrent pas chez l'humain : un
 * bruit trop fort peut donc les abîmer de façon définitive, d'où l'intérêt
 * des protections auditives.
 */
export function QuandLeBruitFaitMalAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#1c0b0f" />

      {/* La cochlée déroulée, toujours visible, avec ses cils au fond */}
      <rect x="90" y="120" width="220" height="50" rx="12" fill="#3f1f26" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={112 + i * 34}
          y1="164"
          x2={112 + i * 34}
          y2={phase >= 2 && i < 3 ? 154 : 144}
          stroke={phase >= 2 && i < 3 ? '#7f1d1d' : '#fca5a5'}
          strokeWidth="3"
          strokeLinecap="round"
          transform={phase >= 2 && i < 3 ? `rotate(${30 + i * 6} ${112 + i * 34} 164)` : undefined}
        />
      ))}
      <text x="94" y="188" fill="#fca5a5" fontSize="13" fontFamily={police}>la cochlée et ses cils</text>

      {/* Phase 1 : un bruit très fort */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <rect x="30" y="40" width="20" height="34" fill="#f87171" />
        <path d="M50 40 L80 24 L80 90 L50 74 Z" fill="#f87171" />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${92 + i * 14} 57 Q${100 + i * 14} 57 ${92 + i * 14} 57`} stroke="#f87171" strokeWidth="0" fill="none" />
        ))}
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${90 + i * 16} 30 Q${106 + i * 16} 57 ${90 + i * 16} 84`} stroke="#f87171" strokeWidth="3" fill="none">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="0.8s" begin={`${i * 0.15}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="160" y="34" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>un son très très fort</text>
      </g>

      {/* Phase 2 : ça secoue trop fort la cochlée */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <rect x="90" y="120" width="220" height="50" rx="12" fill="none" stroke="#f87171" strokeWidth="3">
          {anime && <animate attributeName="x" values="90;86;90;94;90" dur="0.2s" repeatCount="indefinite" />}
        </rect>
        <path d="M100 145 Q120 125 140 145 Q160 165 180 145 Q200 125 220 145 Q240 165 260 145 Q280 125 300 145" stroke="#fca5a5" strokeWidth="2" fill="none" />
        <text x="94" y="100" fill="#fca5a5" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>ça secoue trop fort l’escargot</text>
      </g>

      {/* Phase 3 : les cils, minuscules, peuvent se casser */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <text x="80" y="204" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>de minuscules cils se cassent</text>
        <text x="230" y="150" fill="#fecaca" fontSize="18" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>
          !
          {anime && <animate attributeName="opacity" values="0;1;0" dur="0.6s" repeatCount="indefinite" />}
        </text>
      </g>

      {/* Phase 4 : ils ne repoussent jamais, il faut se protéger */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(330 96)">
          <path d="M-16 0 Q-16 -22 0 -22 Q16 -22 16 0 L16 18 Q16 26 8 26 L-8 26 Q-16 26 -16 18 Z" fill="#93c5fd" opacity="0.9" />
          <circle cx="0" cy="2" r="7" fill="#1c0b0f" />
        </g>
        <text x="180" y="204" fill="#93c5fd" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>il faut protéger ses oreilles</text>
      </g>
    </svg>
  );
}
