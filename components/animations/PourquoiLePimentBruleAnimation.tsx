'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    capsaicine: 'la capsaïcine est dedans',
    colle: 'elle se colle à la langue',
    cerveau: 'le cerveau croit : « ça brûle »',
    chaleur: 'aucune vraie chaleur',
  },
  en: {
    capsaicine: 'the capsaicin is inside',
    colle: 'it sticks to the tongue',
    cerveau: 'the brain thinks: “it burns”',
    chaleur: 'no real heat at all',
  },
};

/**
 * La capsaïcine du piment active les mêmes capteurs nerveux que la vraie
 * chaleur : le cerveau reçoit un signal de brûlure alors que rien n'a
 * vraiment chauffé. C'est une illusion sensorielle, pas une brûlure réelle.
 */
export function PourquoiLePimentBruleAnimation({
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
      <rect width="400" height="240" fill="#200b0b" />

      {/* Le piment, toujours visible, à gauche */}
      <path d="M70 90 Q60 130 78 160 Q94 180 106 158 Q112 130 96 96 Q86 80 70 90 Z" fill="#dc2626" />
      <path d="M84 92 Q80 76 92 70" stroke="#4d7c0f" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* La langue, toujours visible, à droite */}
      <path d="M270 150 Q300 130 330 150 Q330 180 300 190 Q270 180 270 150 Z" fill="#fb7185" />
      {[[286, 152], [300, 148], [314, 152], [292, 166], [308, 166]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="#fecdd3" />
      ))}

      {/* Phase 1 : la capsaïcine est dans le piment */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="86" cy="128" r="8" fill="#fde047">
          {anime && <animate attributeName="r" values="6;9;6" dur="1.8s" repeatCount="indefinite" />}
        </circle>
        <text x="20" y="210" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.capsaicine}</text>
      </g>

      {/* Phase 2 : elle se colle sur un capteur de la langue */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="86" cy="128" r="7" fill="#fde047">
          {anime && <animate attributeName="cx" values="86;300;300" dur="1.8s" repeatCount="indefinite" />}
          {anime && <animate attributeName="cy" values="128;148;148" dur="1.8s" repeatCount="indefinite" />}
        </circle>
        <circle cx="300" cy="148" r="5" fill="none" stroke="#fde047" strokeWidth="2" />
        <text x="20" y="210" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.colle}</text>
      </g>

      {/* Phase 3 : le cerveau reçoit un signal d'alerte */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M300 145 L320 100 L280 70 L330 60" stroke="#f97316" strokeWidth="3" fill="none" strokeLinecap="round">
          {anime && phase === 2 && (
            <animate attributeName="opacity" values="0.3;1;0.3" dur="0.8s" repeatCount="indefinite" />
          )}
        </path>
        <circle cx="340" cy="52" r="14" fill="#fb923c" />
        <text x="10" y="210" fill="#f97316" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.cerveau}</text>
      </g>

      {/* Phase 4 : mais rien n'a vraiment chauffé */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <rect x="290" y="30" width="14" height="40" rx="7" fill="#e5e7eb" />
        <circle cx="297" cy="72" r="10" fill="#93c5fd" />
        <rect x="293" y="38" width="8" height="24" rx="4" fill="#93c5fd" />
        <text x="14" y="210" fill="#93c5fd" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.chaleur}</text>
      </g>
    </svg>
  );
}
