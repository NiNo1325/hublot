'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['voit', 'cri', 'echo', 'image'] as const;

const LEGENDES = {
  fr: {
    voit: 'elle voit très bien',
    cri: 'elle crie dans le noir',
    echo: 'l’écho revient',
    image: 'elle voit avec le son',
  },
  en: {
    voit: 'it sees very well',
    cri: 'it calls in the dark',
    echo: 'the echo returns',
    image: 'it sees with sound',
  },
};

/**
 * La chauve-souris n'est pas aveugle (yeux ouverts en phase « voit ») : dans le
 * noir, elle émet des ondes (« cri ») qui rebondissent et reviennent (« echo »)
 * pour reconstruire la scène (« image »). Les ondes matérialisent l'invisible.
 */
export function EcholocationAnimation({
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
      <rect width="400" height="240" fill="#0d0b17" />

      {/* La chauve-souris, toujours visible, à gauche */}
      <g transform="translate(72 96)">
        <path d="M0 0 Q-30 -22 -44 -6 Q-30 -2 -26 8 Q-14 2 0 6 Q14 2 26 8 Q30 -2 44 -6 Q30 -22 0 0 Z" fill="#3b2f4a" />
        <ellipse cx="0" cy="2" rx="9" ry="12" fill="#2a2138" />
        <path d="M-6 -10 L-3 -3 M6 -10 L3 -3" stroke="#3b2f4a" strokeWidth="3" />
      </g>
      {/* le moustique, à droite */}
      <ellipse cx="320" cy="96" rx="6" ry="4" fill="#c4b5fd" />
      <path d="M314 92 Q308 86 312 94 M326 92 Q332 86 328 94" stroke="#8b7fc0" strokeWidth="1.5" fill="none" />

      {/* Phase 1 : elle voit — de jour, yeux ouverts (pas aveugle) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="330" cy="46" r="15" fill="#fbbf24" />
        <circle cx="69" cy="96" r="2" fill="#fde047" />
        <circle cx="75" cy="96" r="2" fill="#fde047" />
        <text x="20" y="200" fill="#fde047" fontSize="15" fontFamily={police}>{legende.voit}</text>
      </g>

      {/* Phase 2 : le cri — ondes qui partent vers la droite */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${120 + i * 26} 78 Q${132 + i * 26} 96 ${120 + i * 26} 114`} stroke="#38bdf8" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="20" y="224" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.cri}</text>
      </g>

      {/* Phase 3 : l'écho — ondes qui reviennent vers la gauche */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${290 - i * 26} 80 Q${278 - i * 26} 96 ${290 - i * 26} 112`} stroke="#a3e635" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="250" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.echo}</text>
      </g>

      {/* Phase 4 : l'image — l'obstacle localisé */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <line x1="96" y1="96" x2="312" y2="96" stroke="#c4b5fd" strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="320" cy="96" r="14" fill="none" stroke="#c4b5fd" strokeWidth="2" />
        <text x="230" y="224" fill="#c4b5fd" fontSize="15" fontFamily={police}>{legende.image}</text>
      </g>
    </svg>
  );
}
