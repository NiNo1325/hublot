'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    brille: 'il brille dans le noir',
    chimie: 'réaction chimique',
    froide: 'froide, sans chaleur',
    proie: 'ça attire une proie',
  },
  en: {
    brille: 'it glows in the dark',
    chimie: 'chemical reaction',
    froide: 'cold, giving no heat',
    proie: 'it lures in prey',
  },
};

/**
 * Un poisson-abysse à la lanterne, dans le noir complet : sa lumière naît
 * d'une réaction chimique interne, reste froide (un thermomètre ne bouge
 * pas), et finit par attirer une petite proie vers le leurre.
 */
export function LesAnimauxQuiBrillentAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const apparition = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#010208" />

      {/* Le poisson-abysse, toujours visible */}
      <g transform="translate(150 130)">
        <path d="M-30 0 Q-10 -22 30 -10 Q46 0 30 10 Q-10 22 -30 0 Z" fill="#1e2130" />
        <path d="M28 -6 Q46 -14 40 0 Q46 14 28 6 Z" fill="#1e2130" />
        <path d="M-6 -18 Q10 -40 26 -46" stroke="#1e2130" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>

      {/* Phase 1 : dans le noir, un point s'allume */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="176" cy="84" r="6" fill="#bef264">
          {anime && (
            <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="16" y="46" fill="#bef264" fontSize="14" fontFamily={police} style={apparition(0)}>
          {legende.brille}
        </text>
      </g>

      {/* Phase 2 : une réaction chimique produit la lumière */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="150" cy="128" r="3" fill="#a3e635">
          {anime && (
            <animate attributeName="cx" values="140;150;140" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="158" cy="128" r="3" fill="#fef08a">
          {anime && (
            <animate attributeName="cx" values="168;158;168" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>
        <circle cx="176" cy="84" r="8" fill="#bef264">
          {anime && (
            <animate attributeName="r" values="6;10;6" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="16" y="70" fill="#a3e635" fontSize="14" fontFamily={police} style={apparition(1)}>
          {legende.chimie}
        </text>
      </g>

      {/* Phase 3 : une lumière froide, contrairement à une flamme */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <rect x="30" y="90" width="10" height="40" rx="5" fill="#0c4a6e" stroke="#93c5fd" strokeWidth="1.5" />
        <circle cx="35" cy="132" r="7" fill="#38bdf8" />
        <rect x="32" y="100" width="6" height="24" fill="#38bdf8" />
        <text x="16" y="150" fill="#93c5fd" fontSize="13" fontFamily={police} style={apparition(2)}>
          {legende.froide}
        </text>
      </g>

      {/* Phase 4 : la lumière attire une petite proie */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <ellipse cx="320" cy="90" rx="9" ry="5" fill="#7dd3fc">
          {anime && (
            <animate attributeName="cx" values="330;186;330" dur="3.2s" repeatCount="indefinite" />
          )}
        </ellipse>
        <text x="16" y="200" fill="#7dd3fc" fontSize="14" fontFamily={police} style={apparition(3)}>
          {legende.proie}
        </text>
      </g>
    </svg>
  );
}
