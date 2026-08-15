'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    surface: 'la surface chauffe',
    sucres: 'sucres et protéines',
    nouveau: 'ça devient nouveau',
    dore: 'doré et parfumé',
  },
  en: {
    surface: 'the surface heats up',
    sucres: 'sugars and proteins',
    nouveau: 'something new forms',
    dore: 'golden and fragrant',
  },
};

/**
 * La réaction de Maillard transforme sucres et protéines en surface, sous
 * l'effet de la chaleur, en molécules nouvelles : couleur dorée et arômes.
 * Rien à voir avec du brûlé, réaction différente et plus tardive.
 */
export function PourquoiCaDoreAnimation({
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
      <rect width="400" height="240" fill="#1a120a" />

      {/* Le grill, toujours visible */}
      <rect x="90" y="176" width="220" height="10" rx="4" fill="#3f2a18" />
      {[110, 140, 170, 200, 230, 260, 290].map((x) => (
        <rect key={x} x={x} y="176" width="6" height="14" fill="#2a1a0e" />
      ))}

      {/* Phase 1 : la surface chauffe */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <rect x="140" y="140" width="120" height="36" rx="8" fill="#f5e9c8" />
        {[160, 200, 240].map((x, i) => (
          <path key={x} d={`M${x} 176 q-6 -14 0 -28`} stroke="#f87171" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="90" y="210" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.surface}</text>
      </g>

      {/* Phase 2 : sucres et protéines se rencontrent */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <rect x="140" y="140" width="120" height="36" rx="8" fill="#f5e9c8" />
        <circle cx="170" cy="158" r="6" fill="#fbbf24">
          {anime && <animate attributeName="cx" values="170;196;196" dur="1.8s" repeatCount="indefinite" />}
        </circle>
        <circle cx="230" cy="158" r="6" fill="#f472b6">
          {anime && <animate attributeName="cx" values="230;204;204" dur="1.8s" repeatCount="indefinite" />}
        </circle>
        <text x="82" y="210" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.sucres}</text>
      </g>

      {/* Phase 3 : une réaction crée des molécules nouvelles */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <rect x="140" y="140" width="120" height="36" rx="8" fill="#e8c98a" />
        <circle cx="200" cy="158" r="10" fill="#fb923c">
          {anime && <animate attributeName="r" values="7;12;7" dur="1.4s" repeatCount="indefinite" />}
        </circle>
        {[0, 1, 2, 3].map((i) => {
          const a = (i / 4) * Math.PI * 2;
          return (
            <line
              key={i}
              x1={200 + Math.cos(a) * 12}
              y1={158 + Math.sin(a) * 12}
              x2={200 + Math.cos(a) * 20}
              y2={158 + Math.sin(a) * 20}
              stroke="#fed7aa"
              strokeWidth="2"
            />
          );
        })}
        <text x="76" y="210" fill="#fb923c" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.nouveau}</text>
      </g>

      {/* Phase 4 : c'est doré, et ça sent bon */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <rect x="140" y="140" width="120" height="36" rx="8" fill="#b45309" />
        {[164, 200, 236].map((x, i) => (
          <path key={x} d={`M${x} 134 q8 -10 0 -20 q-8 -10 0 -20`} stroke="#fde047" strokeWidth="2" fill="none" opacity="0.8">
            {anime && (
              <animate attributeName="opacity" values="0.2;0.9;0.2" dur="2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="100" y="210" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.dore}</text>
      </g>
    </svg>
  );
}
