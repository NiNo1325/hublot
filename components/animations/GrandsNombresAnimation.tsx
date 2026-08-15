'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['compter', 'million', 'milliard', 'imaginer'] as const;

const LEGENDES = {
  fr: {
    million: 'un million de secondes',
    jours: '≈ 11 jours',
    milliard: 'un milliard de secondes',
    ans: '≈ 32 ans — mille fois plus',
    ecart: '11 jours contre 32 ans : voilà l’écart',
  },
  en: {
    million: 'one million seconds',
    jours: '≈ 11 days',
    milliard: 'one billion seconds',
    ans: '≈ 32 years — a thousand times more',
    ecart: '11 days against 32 years: that’s the gap',
  },
};

/**
 * Deux barres à l'échelle du temps : un million de secondes fait onze jours,
 * un milliard en fait trente-deux ans. La comparaison visuelle porte l'idée
 * qu'un milliard n'est pas « un peu plus » qu'un million, mais mille fois plus.
 */
export function GrandsNombresAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Échelle des zéros */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <text x="20" y="42" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), monospace">
          10 · 100 · 1000 …
        </text>
      </g>

      {/* Un million : petite barre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="20" y="88" fill="#38bdf8" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.million}
        </text>
        <rect x="20" y="96" width="20" height="20" rx="3" fill="#38bdf8" />
        <text x="48" y="112" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.jours}
        </text>
      </g>

      {/* Un milliard : barre mille fois plus longue (symbolisée) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="20" y="152" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.milliard}
        </text>
        <rect x="20" y="160" width="360" height="20" rx="3" fill="#fb7185">
          {isPlaying && !prefersReducedMotion && (
            <animate attributeName="width" values="20;360" dur="1.4s" fill="freeze" />
          )}
        </rect>
        <text x="20" y="200" fill="#fb7185" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.ans}
        </text>
      </g>

      {/* La conclusion */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="20" y="228" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.ecart}
        </text>
      </g>
    </svg>
  );
}
