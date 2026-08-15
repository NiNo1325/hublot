'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['depart', 'plie', 'sans-appui', 'pattes'] as const;

const LEGENDES = {
  fr: {
    gravite: 'gravité',
    depart: 'le dos en premier',
    plie: 'il se plie en deux',
    rotation: 'l’avant et l’arrière tournent',
    chute: 'il tombe quand même',
  },
  en: {
    gravite: 'gravity',
    depart: 'back first',
    plie: 'it folds in two',
    rotation: 'front and back turn',
    chute: 'it still falls',
  },
};

/**
 * Le chat se retourne en pliant le corps et en faisant tourner l'avant et
 * l'arrière en sens opposés, sans point d'appui (les deux flèches de rotation
 * sont la cause). La flèche de gravité, constante, rappelle qu'il tombe bel et
 * bien : se retourner ne le rend pas invincible.
 */
export function ChatRetombeAnimation({ activeBeatId, locale }: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  /*
    Une patte, coussinet compris. Le trait gris fin d'avant se perdait sur le
    fond sombre, et le chat n'en portait que trois — dans les deux phases où il
    en avait. Ailleurs, il se réduisait à deux ovales, ce qui est bien peu pour
    une carte qui parle justement de ses pattes.
  */
  const patte = (x: number, y: number, dy: number) => (
    <g key={`${x}-${y}`}>
      <line x1={x} y1={y} x2={x} y2={y + dy} stroke="#6b5433" strokeWidth="4" strokeLinecap="round" />
      <circle cx={x} cy={y + dy} r="3.5" fill="#e8ddc8" />
    </g>
  );

  /** La queue, qui donne au chat sa silhouette même de dos. */
  const queue = (d: string) => (
    <path d={d} stroke="#8a6a3a" strokeWidth="5" fill="none" strokeLinecap="round" />
  );

  /** L'oreille pointue : c'est elle qui dit « chat » plutôt que « rongeur ». */
  const oreilles = (x: number, y: number) => (
    <path
      d={`M${x - 6} ${y - 6} l3 -9 l6 6 M${x + 4} ${y - 8} l4 -8 l4 8`}
      fill="#8a6a3a"
      stroke="#8a6a3a"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  );

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#141726" />
      <rect y="170" width="400" height="70" fill="#20243a" />

      {/* Flèche de gravité, toujours présente : il tombe pour de vrai */}
      <g>
        <line x1="32" y1="46" x2="32" y2="150" stroke="#f43f5e" strokeWidth="3" />
        <path d="M26 144 L32 156 L38 144 Z" fill="#f43f5e" />
        <text x="10" y="42" fill="#f43f5e" fontSize="13" fontFamily={police}>{legende.gravite}</text>
      </g>

      {/* Phase 1 : départ, dos en premier (pattes en l'air) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <g transform="translate(190 44)">
          <ellipse cx="0" cy="0" rx="34" ry="15" fill="#8a6a3a" />
          <circle cx="-40" cy="0" r="10" fill="#8a6a3a" />
          {oreilles(-40, -8)}
          {queue('M32 -4 q18 -8 16 -22')}
          {[-22, -6, 10, 24].map((x) => patte(x, -12, -14))}
        </g>
        <text x="20" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.depart}</text>
      </g>

      {/* Phase 2 : il se plie en deux */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g transform="translate(190 90)">
          <ellipse cx="-18" cy="0" rx="22" ry="12" fill="#8a6a3a" transform="rotate(-28 -18 0)" />
          <ellipse cx="18" cy="0" rx="22" ry="12" fill="#8a6a3a" transform="rotate(28 18 0)" />
          <circle cx="-40" cy="-14" r="9" fill="#8a6a3a" />
          {oreilles(-40, -22)}
          {queue('M36 6 q18 -4 18 -20')}
          {/* Pattes repliées vers le pli : c'est le geste qui fait tourner le chat. */}
          {[-26, -12].map((x) => patte(x, -8, -12))}
          {[14, 26].map((x) => patte(x, 8, 12))}
        </g>
        <text x="20" y="224" fill="#fbbf24" fontSize="15" fontFamily={police}>{legende.plie}</text>
      </g>

      {/* Phase 3 : avant et arrière tournent en sens opposés (la cause) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <g transform="translate(190 126)">
          <ellipse cx="-20" cy="0" rx="20" ry="11" fill="#8a6a3a" />
          <ellipse cx="20" cy="0" rx="20" ry="11" fill="#8a6a3a" />
          <circle cx="-40" cy="-6" r="9" fill="#8a6a3a" />
          {oreilles(-40, -14)}
          {queue('M38 2 q16 -6 14 -20')}
          {[-26, -14].map((x) => patte(x, 8, 10))}
          {[14, 26].map((x) => patte(x, 8, 10))}
          {/* flèche de rotation avant (sens horaire) */}
          <path d="M-20 -18 A18 18 0 1 1 -38 0" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
          <path d="M-42 -4 L-38 2 L-32 -3 Z" fill="#38bdf8" />
          {/* flèche de rotation arrière (sens antihoraire) */}
          <path d="M20 -18 A18 18 0 1 0 38 0" fill="none" stroke="#a3e635" strokeWidth="2.5" />
          <path d="M42 -4 L38 2 L32 -3 Z" fill="#a3e635" />
        </g>
        <text x="208" y="200" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.rotation}</text>
      </g>

      {/* Phase 4 : pattes en bas, mais il tombe quand même */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(190 158)">
          <ellipse cx="0" cy="0" rx="34" ry="14" fill="#8a6a3a" />
          <circle cx="-40" cy="0" r="10" fill="#8a6a3a" />
          {oreilles(-40, -8)}
          {queue('M32 -2 q20 -6 18 -22')}
          {[-22, -6, 10, 24].map((x) => patte(x, 12, 14))}
        </g>
        <text x="208" y="224" fill="#f43f5e" fontSize="15" fontFamily={police}>{legende.chute}</text>
      </g>
    </svg>
  );
}
