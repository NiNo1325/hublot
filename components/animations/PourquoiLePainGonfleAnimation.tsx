'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    levure: 'la levure vit dedans',
    sucre: 'elle mange le sucre',
    bulles: 'des bulles arrivent',
    gonfle: 'la pâte gonfle bien',
  },
  en: {
    levure: 'the yeast lives in it',
    sucre: 'it eats the sugar',
    bulles: 'bubbles appear',
    gonfle: 'the dough puffs up',
  },
};

/**
 * La levure est vivante : elle mange le sucre de la pâte et rejette du gaz
 * carbonique, dont les bulles gonflent la pâte avant même la cuisson. Le four
 * fixe cette structure déjà formée, il ne la crée pas.
 */
export function PourquoiLePainGonfleAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#1c1410" />

      {/* Le saladier, toujours visible */}
      <path d="M110 190 Q200 220 290 190 L280 150 Q200 170 120 150 Z" fill="#4a3527" />
      <ellipse cx="200" cy="150" rx="90" ry="16" fill="#2a1d14" />

      {/* Phase 1 : la levure vit dans la pâte */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="140" rx="68" ry="24" fill="#fde68a" />
        <circle cx="200" cy="134" r="7" fill="#a78bfa">
          {anime && <animate attributeName="r" values="6;8;6" dur="2.2s" repeatCount="indefinite" />}
        </circle>
        <text x="64" y="200" fill="#a78bfa" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.levure}</text>
      </g>

      {/* Phase 2 : elle mange le sucre de la farine */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="140" rx="68" ry="24" fill="#fde68a" />
        {[176, 224].map((x, i) => (
          <rect key={x} x={x} y="128" width="7" height="7" fill="#fbbf24">
            {anime && (
              <animate attributeName="x" values={`${x};197;197`} dur="1.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            )}
          </rect>
        ))}
        <circle cx="200" cy="134" r="8" fill="#a78bfa" />
        <text x="70" y="200" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.sucre}</text>
      </g>

      {/* Phase 3 : plein de bulles de gaz apparaissent */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="136" rx="72" ry="28" fill="#fde68a" />
        {[
          [176, 130],
          [200, 120],
          [224, 132],
          [210, 146],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#7dd3fc">
            {anime && <animate attributeName="r" values="3;6;3" dur="1.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="62" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.bulles}</text>
      </g>

      {/* Phase 4 : la pâte gonfle et déborde du saladier */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M116 150 Q120 88 200 76 Q280 88 284 150 Z" fill="#fde047" />
        {[
          [160, 108],
          [200, 94],
          [236, 110],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#fef3c7" opacity="0.85">
            {anime && (
              <animate attributeName="cy" values={`${cy};${cy - 8};${cy}`} dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="80" y="212" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.gonfle}</text>
      </g>
    </svg>
  );
}
