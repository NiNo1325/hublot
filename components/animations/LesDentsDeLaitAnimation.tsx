'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    petite: 'd’abord, une petite dent',
    grande: 'une grande pousse dessous',
    racine: 'la racine est rongée',
    tombe: 'elle tombe, la place est prise',
  },
  en: {
    petite: 'first, a little tooth',
    grande: 'a big one pushes up below',
    racine: 'the root is gnawed away',
    tombe: 'it falls, the place is taken',
  },
};

/**
 * Une gencive en coupe : la petite dent de lait est en surface, la grande
 * dent définitive pousse dessous, ronge sa racine, puis prend sa place. Rien
 * ne casse ni ne fait mal : la racine disparaît d'elle-même.
 */
export function LesDentsDeLaitAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  const racineRongee = phase >= 2;
  const tombee = phase === 3;
  // La dent définitive migre vers la surface au fil des phases.
  const yDefinitive = phase >= 3 ? 150 : phase >= 1 ? 172 : 200;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La gencive, en coupe */}
      <rect x="0" y="120" width="400" height="120" fill="#c2607f" />
      <rect x="0" y="114" width="400" height="8" fill="#f9a8d4" />

      {/* La dent définitive, plus grande, qui pousse vers le haut */}
      <g style={{ transform: `translateY(${yDefinitive - 200}px)`, transition: 'transform 700ms ease' }}>
        <path d="M172 200 Q200 176 228 200 L224 236 Q200 248 176 236 Z" fill="#fefce8" />
      </g>

      {/* La dent de lait, en surface, qui tombe à la phase 4 */}
      <g style={{ transform: tombee ? 'translateY(60px)' : 'translateY(0px)', opacity: tombee ? 0 : 1, transition: 'transform 700ms ease, opacity 700ms ease' }}>
        <path d="M180 118 Q200 104 220 118 L216 140 Q200 148 184 140 Z" fill="#ffffff" />
        {/* La racine, rongée peu à peu */}
        <path
          d={racineRongee ? 'M188 140 L192 150 L208 150 L212 140 Z' : 'M186 140 L190 176 L210 176 L214 140 Z'}
          fill="#f5d0c5"
          style={{ transition: 'all 600ms ease' }}
        />
      </g>

      {/* Phase 1 : la petite dent de lait */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <text x="20" y="34" fill="#f5f5f4" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.petite}</text>
      </g>

      {/* Phase 2 : la dent définitive pousse dessous */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M240 190 h20 M256 190 l-6 -5 M256 190 l-6 5" stroke="#fbbf24" strokeWidth="2.5" fill="none" />
        <text x="180" y="220" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.grande}</text>
      </g>

      {/* Phase 3 : elle ronge la racine */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={196 + i * 7} cy="146" r="2.5" fill="#f87171">
            {anime && (
              <animate attributeName="opacity" values="0.3;1;0.3" dur="1.4s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="20" y="200" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.racine}</text>
      </g>

      {/* Phase 4 : elle tombe, la grande dent prend sa place */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <text x="180" y="34" fill="#4ade80" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.tombe}</text>
      </g>
    </svg>
  );
}
