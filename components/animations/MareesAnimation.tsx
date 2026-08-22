'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['observer', 'lune', 'deux-cotes', 'rythme'] as const;

const LEGENDES = {
  fr: {
    mareeHaute: 'marée haute',
    rythme: 'deux marées hautes par jour',
  },
  en: {
    mareeHaute: 'high tide',
    rythme: 'two high tides a day',
  },
};

/**
 * Deux bourrelets d'eau, l'un vers la Lune, l'autre à l'opposé : c'est
 * l'argument central de la carte. La Lune n'aspire pas l'eau d'un seul côté,
 * elle l'étire des deux.
 */
export function MareesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const etire = phase >= 2;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Océan étiré en ellipse quand les bourrelets se forment */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <ellipse
          cx="170" cy="120"
          rx={etire ? 96 : 76} ry="76"
          fill="#0c4a6e"
          style={{ transition: 'rx 900ms ease' }}
        />
      </g>
      {/* Terre */}
      <circle cx="170" cy="120" r="62" fill="#1f6f4e" />
      <circle cx="170" cy="120" r="62" fill="none" stroke="#2c3f66" strokeWidth="2" />

      {/* La Lune, à droite */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="352" cy="120" r="22" fill="#b9c4da" />
        <circle cx="346" cy="114" r="5" fill="#9aa7bd" />
        <circle cx="356" cy="126" r="4" fill="#9aa7bd" />
      </g>

      {/* Flèches d'attraction, plus fortes côté Lune */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {/*
          Trois flèches de longueurs décroissantes, posées sur l’axe
          Terre-Lune.

          Elles étaient identiques et toutes du même côté : la différence
          d’attraction entre la face tournée vers la Lune, le centre et la
          face opposée — le seul objet du texte 9-12 — n’était pas figurée.
        */}
        {[[232, 66], [170, 42], [110, 20]].map(([x, longueur]) => (
          <g key={x}>
            <circle cx={x} cy="120" r="3" fill="#ffb627" />
            <line x1={x} y1="120" x2={x + longueur - 8} y2="120" stroke="#ffb627" strokeWidth="3" />
            <path d={`M${x + longueur - 12} 114 L${x + longueur} 120 L${x + longueur - 12} 126 Z`} fill="#ffb627" />
          </g>
        ))}
      </g>

      {/* Étiquettes des deux marées hautes */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="238" y="118" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.mareeHaute}
        </text>
        <text x="10" y="118" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.mareeHaute}
        </text>
      </g>

      {/* La Terre tourne sous les bourrelets : repère au sol */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="170" cy="58" r="6" fill="#fb7185">
          {anime && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 170 120" to="360 170 120"
              dur="8s" repeatCount="indefinite"
            />
          )}
        </circle>
        <text x="12" y="228" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.rythme}
        </text>
      </g>
    </svg>
  );
}
