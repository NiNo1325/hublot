'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Aigu et grave dépendent de la vitesse de vibration de la corde, sa
 * fréquence, pas de son volume : une corde qui tremble vite chante aigu,
 * une corde qui tremble lentement chante grave.
 */
export function AiguOuGraveAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#140b1f" />

      {/* Les deux chevilles du sonomètre, toujours visibles */}
      <rect x="52" y="88" width="12" height="24" rx="2" fill="#57534e" />
      <rect x="336" y="88" width="12" height="24" rx="2" fill="#57534e" />

      {/* Phase 1 : on pince la corde */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M64 100 Q200 100 336 100" stroke="#e879f9" strokeWidth="2.5" fill="none" />
        <path d="M195 100 L205 118 L215 100" fill="none" stroke="#fbcfe8" strokeWidth="2.5" strokeLinecap="round" />
        <text x="86" y="150" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>tu pinces la corde</text>
      </g>

      {/* Phase 2 : elle vibre vite, le son est aigu */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M64 100 Q200 84 336 100" stroke="#38bdf8" strokeWidth="2.5" fill="none">
          {anime && (
            <animate
              attributeName="d"
              values="M64 100 L336 100;M64 100 Q200 84 336 100;M64 100 L336 100;M64 100 Q200 116 336 100;M64 100 L336 100"
              dur="0.5s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <path
          d="M64 168 Q79 153 94 168 Q109 183 124 168 Q139 153 154 168 Q169 183 184 168 Q199 153 214 168 Q229 183 244 168 Q259 153 274 168 Q289 183 304 168 Q319 153 336 168"
          stroke="#38bdf8" strokeWidth="2" fill="none"
        />
        <text x="60" y="212" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>vite : un son aigu, un sifflet</text>
      </g>

      {/* Phase 3 : elle vibre lentement, le son est grave */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M64 100 Q200 74 336 100" stroke="#fb923c" strokeWidth="2.5" fill="none">
          {anime && (
            <animate
              attributeName="d"
              values="M64 100 L336 100;M64 100 Q200 74 336 100;M64 100 L336 100;M64 100 Q200 126 336 100;M64 100 L336 100"
              dur="1.6s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <path
          d="M64 168 Q104 128 144 168 Q184 208 224 168 Q264 128 304 168 Q324 148 336 168"
          stroke="#fb923c" strokeWidth="2" fill="none"
        />
        <text x="48" y="212" fill="#fb923c" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>lentement : un son grave, un tambour</text>
      </g>

      {/* Phase 4 : plus courte et plus tendue, elle vibre plus vite */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M64 100 Q100 100 130 100" stroke="#78716c" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M270 100 Q300 100 336 100" stroke="#78716c" strokeWidth="2" fill="none" opacity="0.4" />
        <rect x="130" y="88" width="10" height="24" rx="2" fill="#57534e" />
        <rect x="260" y="88" width="10" height="24" rx="2" fill="#e879f9" />
        <path d="M140 100 Q200 88 260 100" stroke="#e879f9" strokeWidth="2.5" fill="none">
          {anime && (
            <animate
              attributeName="d"
              values="M140 100 L260 100;M140 100 Q200 88 260 100;M140 100 L260 100;M140 100 Q200 112 260 100;M140 100 L260 100"
              dur="0.35s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <text x="66" y="150" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>courte et tendue → plus aigu</text>
      </g>
    </svg>
  );
}
