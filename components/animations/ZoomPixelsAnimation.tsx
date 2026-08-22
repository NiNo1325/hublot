'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['zoomer', 'grille', 'inventer', 'compresser'] as const;

/** Quatre par quatre gros pixels : tout ce que contient la zone agrandie. */
const PIXELS = ['#cbd5e1', '#94a3b8', '#64748b', '#94a3b8'];

/*
  Les légendes de l'illustration sont du contenu, pas du décor : elles nomment
  ce que la scène montre. Les passer par `localise` fait plus que traduire — le
  typage impose à chaque langue de reprendre exactement les clés du français,
  donc une légende oubliée en cours de traduction ne compile pas.
*/
const LEGENDES = {
  fr: {
    agrandir: 'on agrandit',
    rien: 'rien à inventer',
    carres: 'des carrés, pas du détail',
    compression: 'et la compression en jette',
  },
  en: {
    agrandir: 'we zoom in',
    rien: 'nothing to find',
    carres: 'squares, not detail',
    compression: 'and compression drops more',
  },
};

/**
 * L'agrandissement montre les mêmes quatre couleurs, en plus gros : rien n'est
 * ajouté. Le point d'interrogation matérialise le détail que le spectateur
 * espère voir apparaître, et qui n'a jamais été enregistré.
 */
export function ZoomPixelsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La photo d'origine, et la zone qu'on veut agrandir */}
      <rect x="20" y="56" width="110" height="86" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <circle cx="60" cy="88" r="12" fill="#64748b" />
      <path d="M28 136 l30 -34 l24 26 l18 -16 l22 24 z" fill="#475569" />
      <rect x="72" y="96" width="24" height="24" fill="none" stroke="#fbbf24" strokeWidth="2" />

      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <line x1="98" y1="108" x2="196" y2="108" stroke="#fbbf24" strokeWidth="2" strokeDasharray="5 5" />
        <text x="14" y="32" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.agrandir}
        </text>
      </g>

      {/* La zone agrandie : quatre carrés, et rien d'autre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {PIXELS.map((couleur, i) => (
          <rect
            key={i}
            x={210 + (i % 2) * 76}
            y={62 + Math.floor(i / 2) * 76}
            width="74"
            height="74"
            fill={couleur}
          />
        ))}
      </g>

      {/* Le détail espéré, qui n'existe nulle part */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="252" y="130" fill="#0f1b33" fontSize="64" fontFamily="var(--font-atkinson), sans-serif">
          ?
        </text>
        <text x="252" y="30" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.rien}
        </text>
      </g>

      {/* La compression, qui en retire encore */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={210 + i * 38} y="196" width="34" height="10" fill="#f87171" opacity={0.9 - i * 0.2}>
            {anime && phase === 3 && (
              <animate attributeName="opacity" values="0.9;0.2;0.9" dur="2.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </rect>
        ))}
        {/*
          L’appareil qui s’approche du sujet.

          Le niveau 3-5 conclut « pour bien voir les petites choses, il faut
          prendre la photo de tout près », et la phase ne montrait que les
          artefacts de compression : elle ne servait que les niveaux 6-8 et
          9-12.
        */}
        <g transform="translate(24 168)">
          <rect x="0" y="-12" width="34" height="24" rx="4" fill="#1e293b" stroke="#fbbf24" strokeWidth="2" />
          <circle cx="17" cy="0" r="7" fill="none" stroke="#fbbf24" strokeWidth="2" />
          <rect x="6" y="-17" width="11" height="5" rx="2" fill="#fbbf24" />
        </g>
        <path d="M66 168 h42" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="5 4" fill="none" />
        <path d="M104 162 L118 168 L104 174 Z" fill="#fbbf24" />
        <circle cx="140" cy="168" r="14" fill="#64748b" />
        <text x="14" y="210" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.carres}
        </text>
        <text x="14" y="234" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.compression}
        </text>
      </g>
    </svg>
  );
}
