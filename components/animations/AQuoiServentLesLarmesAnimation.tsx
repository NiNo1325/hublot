'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    humide: 'toujours un peu humide',
    intrus: 'un intrus, et ça rince',
    emotion: 'une grosse émotion',
    protege: 'ça nettoie et protège',
  },
  en: {
    humide: 'always a little moist',
    intrus: 'an intruder, and it rinses',
    emotion: 'a big emotion',
    protege: 'it cleans and protects',
  },
};

/**
 * Un seul œil reste à l'écran d'un bout à l'autre : d'abord un film discret
 * et permanent, puis un intrus rincé par une grosse larme, puis un flot plus
 * abondant déclenché par l'émotion. Deux causes, un même geste protecteur.
 */
export function AQuoiServentLesLarmesAnimation({
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
      <rect width="400" height="240" fill="#0f1b33" />

      {/* L'œil, toujours présent */}
      <path d="M110 120 Q200 68 290 120 Q200 172 110 120 Z" fill="#f5f5f4" />
      <circle cx="200" cy="120" r="26" fill="#7c4a34" />
      <circle cx="200" cy="120" r="12" fill="#1e1533" />
      <circle cx="193" cy="112" r="4" fill="#f5f5f4" />
      {/* Le canal lacrymal, au coin de l'œil */}
      <circle cx="112" cy="122" r="4" fill="#f9a8d4" />

      {/* Phase 1 : un film discret et permanent */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M120 108 Q200 78 280 108" stroke="#7dd3fc" strokeWidth="2" fill="none" opacity="0.7">
          {anime && (
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.6s" repeatCount="indefinite" />
          )}
        </path>
        <text x="20" y="34" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.humide}</text>
      </g>

      {/* Phase 2 : un intrus, rincé par une larme */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="230" cy="106" r="3" fill="#a8a29e" />
        <path d="M114 124 q-6 10 0 20 q6 10 0 20" fill="#7dd3fc">
          {anime && (
            <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
          )}
          {anime && (
            <animateTransform attributeName="transform" type="translate" values="0 0; 0 30" dur="1.8s" repeatCount="indefinite" />
          )}
        </path>
        <text x="20" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.intrus}</text>
      </g>

      {/* Phase 3 : une émotion forte, un flot plus abondant */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M200 40 q8 -10 16 0 q8 10 -16 20 q-24 -10 -16 -20 q8 -10 16 0 Z" fill="#f9a8d4">
          {anime && (
            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.4s" repeatCount="indefinite" />
          )}
        </path>
        {[104, 116, 128].map((x, i) => (
          <path key={x} d={`M${x} 128 q-5 10 0 20 q5 10 0 20`} fill="#38bdf8">
            {anime && (
              <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
            {anime && (
              <animateTransform attributeName="transform" type="translate" values="0 0; 0 34" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="180" y="34" fill="#f9a8d4" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.emotion}</text>
      </g>

      {/* Phase 4 : dans tous les cas, ça nettoie et protège */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M164 92 Q200 66 236 92 L236 118 Q200 150 164 118 Z" fill="none" stroke="#a3e635" strokeWidth="3" />
        <text x="20" y="216" fill="#a3e635" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.protege}</text>
      </g>
    </svg>
  );
}
