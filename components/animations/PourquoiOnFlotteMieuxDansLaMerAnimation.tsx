'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    eauDouce: 'eau douce',
    eauSalee: 'eau salée',
    sel: 'le sel se dissout',
    pousse: 'ça pousse plus fort',
    flotte: 'on flotte plus haut',
    merMorte: 'la mer Morte, sans effort',
  },
  en: {
    eauDouce: 'fresh water',
    eauSalee: 'salt water',
    sel: 'the salt dissolves',
    pousse: 'it pushes up harder',
    flotte: 'you float higher',
    merMorte: 'the Dead Sea, no effort',
  },
};

/**
 * Deux colonnes côte à côte, eau douce et eau salée : le sel qui se dissout
 * densifie l'eau, ce qui pousse plus fort vers le haut — un corps flotte donc
 * plus haut à droite, jusqu'à l'exemple extrême de la mer Morte.
 */
export function PourquoiOnFlotteMieuxDansLaMerAnimation({
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
      <rect width="400" height="240" fill="#0c1f33" />
      <rect x="20" y="40" width="160" height="180" fill="#155e8a" opacity="0.55" />
      <rect x="220" y="40" width="160" height="180" fill="#0369a1" opacity="0.85" />
      {/* Étiquettes permanentes des deux colonnes */}
      <text x="42" y="34" fill="#93c5fd" fontSize="13" fontFamily={police}>
        {legende.eauDouce}
      </text>
      <text x="242" y="34" fill="#facc15" fontSize="13" fontFamily={police}>
        {legende.eauSalee}
      </text>

      {/* Phase 1 : le sel se dissout dans l'eau de mer */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[[250, 90], [270, 130], [300, 80], [320, 150], [340, 100], [260, 170]].map(([cx, cy], i) => (
          <rect key={cx} x={cx} y={cy} width="6" height="6" fill="#fde68a">
            {anime && (
              <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            )}
          </rect>
        ))}
        <text x="20" y="228" fill="#facc15" fontSize="13" fontFamily={police} style={apparition(0)}>
          {legende.sel}
        </text>
      </g>

      {/* Phase 2 : ça pousse plus fort vers le haut */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <line x1="100" y1="180" x2="100" y2="150" stroke="#60a5fa" strokeWidth="4" markerEnd="url(#flecheDouce)" />
        <line x1="300" y1="180" x2="300" y2="78" stroke="#facc15" strokeWidth="4" markerEnd="url(#flecheSalee)" />
        <text x="20" y="228" fill="#facc15" fontSize="13" fontFamily={police} style={apparition(1)}>
          {legende.pousse}
        </text>
      </g>

      {/* Phase 3 : le corps flotte plus haut dans l'eau salée */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="100" cy="150" rx="26" ry="9" fill="#e0f2fe" />
        <ellipse cx="300" cy="76" rx="26" ry="9" fill="#e0f2fe">
          {anime && (
            <animate attributeName="cy" values="76;70;76" dur="2.4s" repeatCount="indefinite" />
          )}
        </ellipse>
        <text x="20" y="228" fill="#e0f2fe" fontSize="13" fontFamily={police} style={apparition(2)}>
          {legende.flotte}
        </text>
      </g>

      {/*
        Phase 4 : la mer Morte, on flotte presque sans effort.

        Le corps restait cinquante-six pixels sous la surface (tracée à y=40) :
        l'image montrait quelqu'un qui coule un peu moins, quand le texte dit
        « allongé à la surface ». Il chevauche maintenant la ligne d'eau,
        moitié dedans, moitié dehors.
      */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <ellipse cx="300" cy="40" rx="30" ry="8" fill="#fef9c3" />
        <text x="20" y="228" fill="#fef9c3" fontSize="13" fontFamily={police} style={apparition(3)}>
          {legende.merMorte}
        </text>
      </g>

      <defs>
        {/*
          Pointes dessinées vers +x, et non vers le haut.

          Avec `orient="auto"`, le marqueur s'aligne sur la direction du trait :
          son axe x local devient le sens de la flèche. Une pointe dessinée
          vers le haut (`M0 8 L4 0 L8 8 Z`) se retrouvait donc couchée à
          l'horizontale sur un trait montant — et la poussée d'Archimède,
          dont la direction est tout l'enseignement de la phase, semblait
          latérale.
        */}
        <marker id="flecheDouce" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#60a5fa" />
        </marker>
        <marker id="flecheSalee" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0 0 L8 4 L0 8 Z" fill="#facc15" />
        </marker>
      </defs>
    </svg>
  );
}
