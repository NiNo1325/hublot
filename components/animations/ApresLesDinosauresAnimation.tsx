'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    mammiferes: 'les petits mammifères grandissent',
    froid: 'une période de grand froid arrive',
    megafaune: 'le mammouth et le tigre à dents de sabre',
    dinosaures: 'dinosaures : -66 millions d’années',
    mammouths: 'mammouths : -10 000 ans',
    plusTard: 'des dizaines de millions d’années plus tard',
  },
  en: {
    mammiferes: 'the small mammals grow bigger',
    froid: 'a spell of great cold arrives',
    megafaune: 'the mammoth and the sabre-toothed tiger',
    dinosaures: 'dinosaurs: -66 million years',
    mammouths: 'mammoths: -10,000 years',
    plusTard: 'tens of millions of years later',
  },
};

/**
 * Le même petit mammifère grandit à travers les phases, jusqu'à devenir
 * mammouth : la carte montre une lignée qui prend sa place, pas une
 * coexistence avec les dinosaures, contrairement à une idée reçue fréquente.
 */
export function ApresLesDinosauresAnimation({
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
      <rect width="400" height="240" fill="#0f1b33" />
      <rect x="0" y="196" width="400" height="44" fill={phase >= 1 ? '#c7d2e0' : '#3b2a1d'} style={{ transition: 'fill 900ms ease' }} />

      {/* Phase 1 : les petits mammifères grandissent peu à peu */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[
          { x: 90, s: 0.5 }, { x: 170, s: 0.8 }, { x: 260, s: 1.15 },
        ].map((m) => (
          <g key={m.x} transform={`translate(${m.x} 196) scale(${m.s})`}>
            <ellipse cx="0" cy="-16" rx="22" ry="14" fill="#c8a97e" />
            <circle cx="20" cy="-24" r="7" fill="#c8a97e" />
          </g>
        ))}
        <text x="14" y="30" fill="#c8a97e" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.mammiferes}</text>
      </g>

      {/* Phase 2 : bien plus tard, le froid s'installe */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[60, 140, 220, 300].map((x, i) => (
          <text key={x} x={x} y="60" fontSize="18" fill="#e0f2fe">
            ❄
            {anime && (
              <animate attributeName="y" values="20;90" dur="2.4s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </text>
        ))}
        <text x="14" y="30" fill="#e0f2fe" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.froid}</text>
      </g>

      {/* Phase 3 : mammouth laineux et tigre à dents de sabre */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {/*
          Le mammouth. Un corps ovale surmonté d'une tête, sans pattes ni
          trompe, se lisait comme un phoque : ce sont les quatre pattes posées
          au sol, la bosse d'épaule et la trompe qui font l'animal. Les défenses
          seules n'y suffisaient pas.
        */}
        <g transform="translate(150 152)">
          {/* Les pattes d'abord, pour passer sous le corps. */}
          {[-28, -8, 12, 30].map((x) => (
            <rect key={x} x={x} y="18" width="12" height="26" rx="5" fill="#6f5a44" />
          ))}
          <ellipse cx="0" cy="0" rx="44" ry="26" fill="#8a7256" />
          {/* La bosse d'épaule, silhouette propre au mammouth laineux. */}
          <path d="M-34 -14 Q-26 -34 -6 -22 Z" fill="#8a7256" />
          <circle cx="-42" cy="-10" r="19" fill="#8a7256" />
          {/* La trompe descend, les défenses remontent. */}
          <path d="M-56 0 Q-68 14 -62 30" stroke="#8a7256" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M-54 2 Q-72 10 -70 -8 M-50 4 Q-66 12 -64 -4" stroke="#e8ddc8" strokeWidth="4" fill="none" strokeLinecap="round" />
          {/* La toison, à gros poils, sur le dos et le flanc. */}
          <path d="M-20 -22 l-4 8 M0 -25 l-4 8 M20 -22 l-4 8 M36 -12 l-6 6" stroke="#6f5a44" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g transform="translate(302 168)">
          {[-18, -4, 10, 22].map((x) => (
            <rect key={x} x={x} y="12" width="9" height="18" rx="4" fill="#8a857f" />
          ))}
          <ellipse cx="0" cy="0" rx="30" ry="15" fill="#a8a29e" />
          <circle cx="-26" cy="-6" r="13" fill="#a8a29e" />
          {/* Les deux crocs, ce qui nomme l'animal. */}
          <path d="M-32 2 L-34 20 M-24 3 L-26 20" stroke="#f5f0e6" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M28 -6 q14 -6 16 -18" stroke="#a8a29e" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <text x="14" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.megafaune}</text>
      </g>

      {/* Phase 4 : ils ont disparu bien après les dinosaures */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <line x1="30" y1="120" x2="370" y2="120" stroke="#3f3a55" strokeWidth="3" />
        <circle cx="50" cy="120" r="6" fill="#c8a97e" />
        <text x="30" y="106" fill="#c8a97e" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.dinosaures}</text>
        <circle cx="356" cy="120" r="6" fill="#7dd3fc" />
        <text x="230" y="146" fill="#7dd3fc" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.mammouths}</text>
        <text x="14" y="200" fill="#e5e7eb" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.plusTard}</text>
      </g>
    </svg>
  );
}
