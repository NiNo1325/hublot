'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['question', 'pas-camouflage', 'mouches', 'moins-piques'] as const;

const LEGENDES = {
  fr: {
    question: 'pourquoi ces rayures ?',
    camouflage: 'il se voit de loin',
    mouches: 'les mouches dérapent',
    piques: 'moins de piqûres',
  },
  en: {
    question: 'why these stripes?',
    camouflage: 'it is seen from afar',
    mouches: 'the flies skid off',
    piques: 'fewer bites',
  },
};

/**
 * Les rayures ne servent pas à se camoufler (le zèbre se voit de loin dans la
 * savane) mais gênent les mouches piqueuses, qui dérapent sur les rayures. Les
 * trajectoires des mouches matérialisent la cause.
 */
export function ZebreAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#c98a3a" />
      <rect y="150" width="400" height="90" fill="#a9702a" />

      {/* Le zèbre, toujours visible */}
      <g>
        <ellipse cx="170" cy="112" rx="62" ry="28" fill="#f5f5f5" />
        <ellipse cx="112" cy="86" rx="16" ry="20" fill="#f5f5f5" transform="rotate(-24 112 86)" />
        {/* pattes */}
        {[140, 160, 190, 210].map((x) => (
          <rect key={x} x={x} y="136" width="7" height="30" fill="#f5f5f5" />
        ))}
        {/* rayures du corps */}
        {[-40, -28, -16, -4, 8, 20, 32, 44].map((dx) => (
          <line key={dx} x1={170 + dx} y1={112 - Math.sqrt(Math.max(0, 784 - (dx * dx) * 0.19)) } x2={170 + dx} y2={112 + Math.sqrt(Math.max(0, 784 - (dx * dx) * 0.19))} stroke="#1f2937" strokeWidth="5" />
        ))}
        {/* rayures du cou */}
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={104 + i * 6} y1={72} x2={110 + i * 6} y2={100} stroke="#1f2937" strokeWidth="4" />
        ))}
        <circle cx="106" cy="80" r="2.4" fill="#1f2937" />
      </g>

      {/* Phase 1 : la question */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <text x="250" y="70" fill="#1f2937" fontSize="34" fontFamily={police}>?</text>
        <text x="20" y="200" fill="#1f2937" fontSize="15" fontFamily={police}>{legende.question}</text>
      </g>

      {/* Phase 2 : pas un camouflage — il se voit de loin */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <ellipse cx="170" cy="112" rx="80" ry="44" fill="none" stroke="#f43f5e" strokeWidth="3" strokeDasharray="7 6" />
        <text x="20" y="224" fill="#7f1d1d" fontSize="15" fontFamily={police}>{legende.camouflage}</text>
      </g>

      {/* Phase 3 : les mouches dérapent sur les rayures */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[[250, 70], [270, 120], [255, 150]].map(([x, y], i) => (
          <g key={i}>
            <path d={`M${x} ${y} Q${x - 30} ${y - 10} ${x - 52} ${y + 4}`} stroke="#0f172a" strokeWidth="2" fill="none" strokeDasharray="4 4" />
            <circle cx={x} cy={y} r="3.5" fill="#0f172a">
              {anime && <animate attributeName="cx" values={`${x};${x - 8};${x}`} dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </circle>
          </g>
        ))}
        <text x="230" y="200" fill="#0f172a" fontSize="15" fontFamily={police}>{legende.mouches}</text>
      </g>

      {/* Phase 4 : moins de piqûres */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(300 60)">
          <circle r="20" fill="#f5f5f5" />
          <path d="M-9 2 l6 6 l12 -14" stroke="#16a34a" strokeWidth="4" fill="none" />
        </g>
        <text x="230" y="224" fill="#14532d" fontSize="15" fontFamily={police}>{legende.piques}</text>
      </g>
    </svg>
  );
}
