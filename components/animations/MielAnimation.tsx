'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['nectar', 'transport', 'transformation', 'reserve'] as const;

const LEGENDES = {
  fr: {
    nectar: 'le jus sucré des fleurs',
    transport: 'vers la ruche',
    transformation: 'on évapore l’eau',
    reserve: 'la réserve d’hiver',
  },
  en: {
    nectar: 'the sweet juice of flowers',
    transport: 'to the hive',
    transformation: 'the water evaporates',
    reserve: 'the winter store',
  },
};

/** Petite abeille rayée avec deux ailes. */
function Abeille({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <ellipse cx="0" cy="0" rx="12" ry="8" fill="#f6c453" />
      <line x1="-4" y1="-7" x2="-4" y2="7" stroke="#1f2937" strokeWidth="3" />
      <line x1="2" y1="-7" x2="2" y2="7" stroke="#1f2937" strokeWidth="3" />
      <ellipse cx="10" cy="-2" rx="4" ry="3" fill="#1f2937" />
      <ellipse cx="-6" cy="-9" rx="7" ry="4" fill="#e0f2fe" opacity="0.8" />
      <ellipse cx="2" cy="-9" rx="7" ry="4" fill="#e0f2fe" opacity="0.8" />
    </g>
  );
}

/**
 * Le miel vient du nectar (pas du pollen), déshydraté par les abeilles, et sert
 * de réserve d'hiver (pas « pour nous »). L'évaporation de l'eau, matérialisée
 * par les gouttes qui montent, est la cause de l'épaississement.
 */
export function MielAnimation({
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
      <rect width="400" height="240" fill="#123a1e" />

      {/* fleur, à gauche */}
      <g>
        <line x1="66" y1="150" x2="66" y2="110" stroke="#3f7d34" strokeWidth="4" />
        {[0, 72, 144, 216, 288].map((a) => {
          const r = (a * Math.PI) / 180;
          return <ellipse key={a} cx={66 + Math.cos(r) * 14} cy={100 + Math.sin(r) * 14} rx="8" ry="12" fill="#e879a6" transform={`rotate(${a} ${66 + Math.cos(r) * 14} ${100 + Math.sin(r) * 14})`} />;
        })}
        <circle cx="66" cy="100" r="9" fill="#fbbf24" />
      </g>

      {/* ruche (rayons d'alvéoles), à droite */}
      <g>
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <path
              key={`${row}-${col}`}
              d={hexagone(300 + col * 22 + (row % 2) * 11, 84 + row * 20, 12)}
              fill="#2a2410"
              stroke="#a16207"
              strokeWidth="1.5"
            />
          )),
        )}
      </g>

      {/* Phase 1 : le nectar (liquide) — pollen distinct, sur les pattes */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <Abeille x={92} y={96} />
        <circle cx="78" cy="106" r="4" fill="#fde68a" />
        {/* pollen sur les pattes */}
        <circle cx="86" cy="106" r="2.5" fill="#f59e0b" />
        <circle cx="98" cy="106" r="2.5" fill="#f59e0b" />
        <text x="20" y="200" fill="#fde68a" fontSize="15" fontFamily={police}>{legende.nectar}</text>
      </g>

      {/* Phase 2 : le transport vers la ruche */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <Abeille x={190} y={70} />
        <line x1="110" y1="86" x2="270" y2="80" stroke="#fbbf24" strokeWidth="2.5" strokeDasharray="6 5" />
        <path d="M264 74 L276 80 L264 86 Z" fill="#fbbf24" />
        <text x="20" y="224" fill="#fbbf24" fontSize="15" fontFamily={police}>{legende.transport}</text>
      </g>

      {/* Phase 3 : la transformation — ventilation + évaporation de l'eau */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {/*
          L’abeille qui ventile, cause nommée par les trois textes.

          La phase montrait trois gouttelettes montant seules le long des
          alvéoles, sans une abeille près de la ruche : l’eau semblait
          s’évaporer d’elle-même, alors que c’est justement le battement des
          ailes qui fait le miel. Les traits de mouvement disent le battement,
          que l’image fixe ne peut pas rendre.
        */}
        <Abeille x={232} y={110} />
        <g stroke="#e0f2fe" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.75">
          <path d="M222 96 q-10 -5 -18 -3" />
          <path d="M226 92 q-9 -8 -17 -9" />
          <path d="M234 92 q-2 -11 4 -16" />
        </g>
        {[250, 268, 286].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 150 q-4 -12 0 -22`} stroke="#7dd3fc" strokeWidth="2" fill="none" />
            <circle cx={x} cy="128" r="3" fill="#7dd3fc">
              {anime && <animate attributeName="cy" values="150;120" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </circle>
          </g>
        ))}
        <text x="230" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police}>{legende.transformation}</text>
      </g>

      {/* Phase 4 : la réserve d'hiver */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((row) =>
          [0, 1, 2].map((col) => (
            <path key={`${row}-${col}`} d={hexagone(300 + col * 22 + (row % 2) * 11, 84 + row * 20, 11)} fill="#f6a821" />
          )),
        )}
        <text x="230" y="224" fill="#f6a821" fontSize="15" fontFamily={police}>{legende.reserve}</text>
      </g>
    </svg>
  );
}

/** Hexagone pointe en haut, centré sur (cx, cy). */
function hexagone(cx: number, cy: number, r: number): string {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)}`);
  }
  return `M${pts.join(' L')} Z`;
}
