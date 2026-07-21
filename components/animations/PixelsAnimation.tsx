'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['points', 'trois-couleurs', 'melange', 'loupe'] as const;

/**
 * La phase « loupe » agrandit un pixel pour révéler ses trois sous-pixels
 * rouge, vert et bleu : la carte affirme que l'écran ne contient pas de jaune,
 * il le fabrique en additionnant rouge et vert.
 */
export function PixelsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  /* Petite image : un smiley grossier, en pixels colorés. */
  const grille = [
    '..YYYY..',
    '.YYYYYY.',
    'YRYYYYRY',
    'YYYYYYYY',
    'YBYYYYBY',
    'YYBBBBYY',
    '.YYYYYY.',
    '..YYYY..',
  ];
  const teinte: Record<string, string> = {
    Y: '#facc15',
    R: '#1b2a4a',
    B: '#1b2a4a',
    '.': '#0f1b33',
  };

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La grille de pixels */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {grille.flatMap((ligne, y) =>
          [...ligne].map((c, x) => (
            <rect
              key={`${x}-${y}`}
              x={40 + x * 18} y={40 + y * 18} width="16" height="16" rx="2"
              fill={teinte[c] ?? '#0f1b33'}
            />
          )),
        )}
      </g>

      {/* La loupe sur un pixel : trois sous-pixels R, V, B */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="300" cy="120" r="60" fill="#0f1b33" stroke="#b9c4da" strokeWidth="4" />
        <rect x="272" y="92" width="16" height="56" rx="2" fill="#ef4444" />
        <rect x="292" y="92" width="16" height="56" rx="2" fill="#22c55e" />
        <rect x="312" y="92" width="16" height="56" rx="2" fill="#3b82f6" />
        <line x1="343" y1="163" x2="366" y2="186" stroke="#b9c4da" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Les trois primaires */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="250" cy="50" r="12" fill="#ef4444" />
        <circle cx="284" cy="50" r="12" fill="#22c55e" />
        <circle cx="318" cy="50" r="12" fill="#3b82f6" />
        <text x="230" y="90" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          rouge, vert, bleu
        </text>
      </g>

      {/* Le mélange : rouge + vert = jaune */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="212" y="214" fill="#facc15" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          rouge + vert = jaune
        </text>
        {anime && phase === 2 && (
          <circle cx="330" cy="209" r="9" fill="#facc15">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
          </circle>
        )}
      </g>
    </svg>
  );
}
