'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['calcul', 'trompe', 'mediane', 'dispersion'] as const;

const LEGENDES = {
  fr: {
    moyenne: 'moyenne',
    mediane: 'médiane',
    dixSurOnze: 'dix personnes sur onze',
    unSeul: 'un seul nombre ne suffit pas',
  },
  en: {
    moyenne: 'average',
    mediane: 'median',
    dixSurOnze: 'ten people out of eleven',
    unSeul: 'one number is not enough',
  },
};

/** Dix barres identiques, puis une onzième hors norme. */
const PETITES = Array.from({ length: 10 }, (_, i) => 30 + i * 20);

const SOL = 180;

/**
 * La ligne de la moyenne saute au-dessus de dix barres sur onze dès que la
 * valeur extrême apparaît, tandis que celle de la médiane ne bouge pas. Les
 * deux lignes côte à côte disent l'essentiel sans commentaire.
 */
export function MoyenneAnimation({
  activeBeatId,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const extreme = phase >= 1;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Les dix valeurs ordinaires */}
      {PETITES.map((x) => (
        <rect key={x} x={x} y={SOL - 20} width="14" height="20" fill="#7dd3fc" />
      ))}

      {/* La valeur extrême, coupée en haut du cadre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <rect x="236" y="34" width="14" height={SOL - 34} fill="#f472b6" />
        <path d="M236 34 l4 -8 l4 8 l4 -8 l2 8 z" fill="#f472b6" />
      </g>

      {/* La moyenne, qui décolle dès que l'extrême entre */}
      <line
        x1="20" y1={extreme ? 71 : SOL - 20}
        x2="380" y2={extreme ? 71 : SOL - 20}
        stroke="#fbbf24" strokeWidth="3"
        style={{ transition: 'y1 1200ms ease, y2 1200ms ease' }}
      />
      <text x="270" y={extreme ? 66 : SOL - 26} fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif" style={{ transition: 'y 1200ms ease' }}>
        {legende.moyenne}
      </text>

      {/* La médiane, qui ne bouge pas */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <line x1="20" y1={SOL - 20} x2="380" y2={SOL - 20} stroke="#4ade80" strokeWidth="3" strokeDasharray="6 5" />
        {/* Décalée en abscisse : au repos, la moyenne est à la même hauteur. */}
        <text x="140" y="152" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.mediane}
        </text>
      </g>

      {/* Le sol */}
      <line x1="14" y1={SOL} x2="386" y2={SOL} stroke="#475569" strokeWidth="2" />

      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="14" y="210" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.dixSurOnze}
        </text>
      </g>
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {/*
          Deux séries de même moyenne, l’une serrée, l’autre étalée.

          Trois points presque alignés ne portaient pas l’idée : c’est la
          comparaison de deux dispersions autour du *même* trait qui dit
          pourquoi un seul nombre ne suffit pas.
        */}
        <line x1="312" y1="186" x2="312" y2="228" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />
        {[300, 306, 312, 318, 324].map((x) => (
          <circle key={`serre-${x}`} cx={x} cy="196" r="4" fill="#7dd3fc" />
        ))}
        {[264, 288, 312, 336, 360].map((x) => (
          <circle key={`etale-${x}`} cx={x} cy="220" r="4" fill="#c4b5fd" />
        ))}
        <text x="14" y="234" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.unSeul}
        </text>
      </g>
    </svg>
  );
}
