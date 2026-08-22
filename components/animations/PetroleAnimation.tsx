'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['dinosaures', 'plancton', 'enfoui', 'epuisable'] as const;

const LEGENDES = {
  fr: {
    dinosaures: 'pas les dinosaures',
    plancton: 'du plancton',
    duree: 'des millions d’années',
    combustion: 'brûlé en quelques secondes',
  },
  en: {
    dinosaures: 'not the dinosaurs',
    plancton: 'plankton',
    duree: 'millions of years',
    combustion: 'burnt in a few seconds',
  },
};

/**
 * Le dinosaure est barré dès la première phase, et le plancton tombe ensuite
 * dans la mer : la correction se joue dans l'ordre des images avant d'être
 * dite. Les couches de sédiments s'épaississent pour figurer la durée.
 */
export function PetroleAnimation({
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

      {/* La mer, puis les couches enfouies */}
      <rect y="48" width="400" height="74" fill="#0c4a6e" />
      <rect y="122" width="400" height="26" fill="#57534e" />
      <rect y="148" width="400" height="26" fill="#44403c" />
      <rect y="174" width="400" height="26" fill="#292524" />

      {/* Le dinosaure, barré */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {/*
          Toute la phase consiste à barrer *le dinosaure* : la silhouette
          n’avait ni tête, ni cou, ni pattes, et la démonstration ne portait
          donc sur rien d’identifiable.
        */}
        <g fill="#4ade80">
          <ellipse cx="292" cy="30" rx="24" ry="11" />
          <path d="M276 26 q-13 -10 -17 -19 q-2 -5 3 -6 q5 -1 7 4 q4 9 13 15 z" />
          <ellipse cx="259" cy="8" rx="7" ry="4.5" />
          <path d="M312 28 q18 -3 27 -11 q4 -3 1 -6 q-4 -3 -8 1 q-8 7 -21 9 z" />
          <rect x="280" y="38" width="7" height="8" rx="2" />
          <rect x="298" y="38" width="7" height="8" rx="2" />
        </g>
        <line x1="248" y1="46" x2="336" y2="4" stroke="#f87171" strokeWidth="4" />
        <text x="14" y="32" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.dinosaures}
        </text>
      </g>

      {/* Le plancton, qui tombe au fond */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[70, 130, 190, 250, 310].map((x, i) => (
          <circle key={x} cx={x} cy="66" r="3.5" fill="#a7f3d0">
            {anime && (
              <animate attributeName="cy" values="60;118;60" dur="4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="112" fill="#a7f3d0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.plancton}
        </text>
      </g>

      {/* L'enfouissement, et la poche de pétrole */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <ellipse cx="200" cy="186" rx="52" ry="11" fill="#1c1917" stroke="#a16207" strokeWidth="2" />
        <g>
          <line x1="360" y1="130" x2="360" y2="182" stroke="#a16207" strokeWidth="3" />
          <path d="M354 176 L360 192 L366 176 Z" fill="#a16207" />
        </g>
        <text x="14" y="210" fill="#a16207" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.duree}
        </text>
      </g>

      {/* La combustion, immédiate */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {/*
          « Le charbon, lui, vient bien de forêts » n’avait aucune trace
          visuelle : ni forêt, ni couche végétale enfouie. Trois arbres et une
          veine sombre, reliés par une flèche, la donnent.
        */}
        <g>
          {[176, 204, 232].map((x) => (
            <g key={x} fill="#22c55e">
              <path d={`M${x} 12 l11 20 h-22 z`} />
              <path d={`M${x} 26 l13 20 h-26 z`} />
              <rect x={x - 2.5} y="44" width="5" height="6" fill="#78350f" />
            </g>
          ))}
          <path d="M204 56 V170" stroke="#a3e635" strokeWidth="2" strokeDasharray="5 5" fill="none" />
          <path d="M198 164 L204 178 L210 164 Z" fill="#a3e635" />
          <rect x="166" y="180" width="76" height="12" rx="3" fill="#0c0a09" stroke="#a3e635" strokeWidth="2" />
        </g>
        <path d="M300 226 q6 -18 14 -22 q-2 12 6 16 q6 -6 4 -14 q10 12 4 20 z" fill="#fb923c">
          {anime && phase === 3 && (
            <animate attributeName="opacity" values="1;0.4;1" dur="0.7s" repeatCount="indefinite" />
          )}
        </path>
        <text x="14" y="234" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.combustion}
        </text>
      </g>
    </svg>
  );
}
