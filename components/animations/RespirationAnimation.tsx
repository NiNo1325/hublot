'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['muscle', 'poumons', 'oxygene', 'expirer'] as const;

/*
  Les légendes de l'illustration sont du contenu, pas du décor. Le typage
  impose à `en` de reprendre exactement les clés du français : une légende
  oubliée ne compile pas.
*/
const LEGENDES = {
  fr: {
    diaphragme: 'le diaphragme commande',
    oxygene: 'O₂ vers le sang',
    co2: 'CO₂ ressort',
  },
  en: {
    diaphragme: 'the diaphragm is in charge',
    oxygene: 'O₂ to the blood',
    co2: 'CO₂ goes out',
  },
};

/**
 * Le diaphragme s'abaisse à l'inspiration et les poumons se gonflent en même
 * temps : la carte insiste sur le fait que ce muscle commande, les poumons ne
 * se gonflent pas seuls.
 */
export function RespirationAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Cage thoracique */}
      <path d="M120 40 q80 -18 160 0 v120 q-80 18 -160 0 z" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="2" />

      {/* Trachée */}
      <rect x="192" y="20" width="16" height="40" rx="6" fill="#b9c4da" />

      {/* Deux poumons qui se gonflent au rythme du diaphragme */}
      <g
        style={{
          transformOrigin: '200px 100px',
          animation: anime ? 'respire 3.4s ease-in-out infinite' : undefined,
          opacity: opacite(1),
          transition: 'opacity 600ms ease',
        }}
      >
        <path d="M196 58 q-52 6 -52 60 q0 30 30 32 q22 2 22 -30 z" fill="#f472b6" />
        <path d="M204 58 q52 6 52 60 q0 30 -30 32 q-22 2 -22 -30 z" fill="#f472b6" />
      </g>

      {/* Diaphragme : dôme qui s'abaisse */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path
          d="M126 158 q74 -30 148 0"
          fill="none" stroke="#fb923c" strokeWidth="6" strokeLinecap="round"
        >
          {anime && (
            <animate
              attributeName="d"
              values="M126 158 q74 -30 148 0; M126 166 q74 -8 148 0; M126 158 q74 -30 148 0"
              dur="3.4s" repeatCount="indefinite"
            />
          )}
        </path>
        <text x="128" y="192" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.diaphragme}
        </text>
      </g>

      {/* Oxygène qui entre, CO2 qui sort */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <circle cx="300" cy="90" r="6" fill="#7dd3fc">
          {anime && (
            <animate attributeName="cx" values="320;250" dur="2.4s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="286" y="70" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.oxygene}
        </text>
      </g>

      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="100" cy="90" r="6" fill="#6b7280">
          {anime && (
            <animate attributeName="cx" values="150;70" dur="2.4s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="14" y="70" fill="#9ca3af" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.co2}
        </text>
      </g>
    </svg>
  );
}
