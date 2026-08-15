'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['nourriture', 'depart', 'boussole', 'retour'] as const;

const LEGENDES = {
  fr: {
    nourriture: 'plus rien à manger',
    sud: 'sud',
    depart: 'vers les pays chauds',
    boussole: 'soleil, étoiles, aimant',
    retour: 'retour au printemps',
  },
  en: {
    nourriture: 'nothing left to eat',
    sud: 'south',
    depart: 'to the warm countries',
    boussole: 'sun, stars, magnet',
    retour: 'back in spring',
  },
};

/** Un oiseau stylisé (silhouette en « M »). */
function Oiseau({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      d={`M${x} ${y} Q${x + 7 * s} ${y - 7} ${x + 14 * s} ${y} Q${x + 21 * s} ${y - 7} ${x + 28 * s} ${y}`}
      stroke="#e5e7eb"
      strokeWidth="2.5"
      fill="none"
    />
  );
}

/**
 * La migration suit la nourriture, pas le froid : en phase « nourriture », le
 * thermomètre est barré et l'arbre nu montre la vraie cause. La boussole
 * matérialise l'invisible — soleil, étoiles, champ magnétique.
 */
export function MigrationAnimation({
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
      <rect width="400" height="240" fill="#101a2e" />
      <rect y="170" width="400" height="70" fill="#1b2a1a" />

      {/* Phase 1 : plus de nourriture (le froid n'est pas la cause) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {/* arbre nu */}
        <rect x="70" y="120" width="8" height="50" fill="#5b4028" />
        <path d="M74 122 L56 100 M74 122 L92 100 M74 118 L74 92" stroke="#5b4028" strokeWidth="4" />
        {/* thermomètre barré */}
        <g transform="translate(150 96)">
          <rect x="-4" y="-20" width="8" height="30" rx="4" fill="#93a4c4" />
          <circle cx="0" cy="14" r="8" fill="#f43f5e" />
          <line x1="-16" y1="-24" x2="18" y2="26" stroke="#f43f5e" strokeWidth="4" />
        </g>
        <text x="20" y="200" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.nourriture}</text>
      </g>

      {/* Phase 2 : départ vers le sud */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <Oiseau x={110} y={70} />
        <Oiseau x={150} y={58} />
        <Oiseau x={190} y={70} />
        <Oiseau x={230} y={58} />
        <line x1="120" y1="110" x2="300" y2="140" stroke="#fbbf24" strokeWidth="3" strokeDasharray="6 5" />
        <path d="M296 132 L308 142 L294 148 Z" fill="#fbbf24" />
        <text x="316" y="150" fill="#fbbf24" fontSize="15" fontFamily={police}>{legende.sud}</text>
        <text x="20" y="224" fill="#fbbf24" fontSize="15" fontFamily={police}>{legende.depart}</text>
      </g>

      {/* Phase 3 : la boussole — soleil, étoiles, champ magnétique */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <circle cx="52" cy="44" r="14" fill="#fbbf24" />
        {[star(120, 40), star(175, 62), star(150, 30)].map((p, i) => (
          <path key={i} d={p} fill="#fde68a" />
        ))}
        {/* lignes de champ magnétique */}
        {[92, 108, 124].map((y) => (
          <path key={y} d={`M20 ${y} Q200 ${y - 24} 380 ${y}`} stroke="#38bdf8" strokeWidth="1.6" fill="none" opacity="0.7" />
        ))}
        {/* aiguille de boussole */}
        <g transform="translate(300 60)">
          <circle r="20" fill="#0f1b33" stroke="#38bdf8" strokeWidth="2" />
          <path d="M0 -16 L5 0 L0 16 L-5 0 Z" fill="#f43f5e">
            {anime && <animateTransform attributeName="transform" type="rotate" values="-12;12;-12" dur="3s" repeatCount="indefinite" />}
          </path>
        </g>
        <text x="230" y="200" fill="#38bdf8" fontSize="15" fontFamily={police}>{legende.boussole}</text>
      </g>

      {/* Phase 4 : le retour au printemps */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {/* arbre feuillu */}
        <rect x="70" y="120" width="8" height="50" fill="#5b4028" />
        <circle cx="74" cy="108" r="24" fill="#3f7d34" />
        <Oiseau x={250} y={64} />
        <Oiseau x={210} y={54} />
        <line x1="300" y1="120" x2="120" y2="96" stroke="#a3e635" strokeWidth="3" strokeDasharray="6 5" />
        <path d="M126 88 L114 94 L128 102 Z" fill="#a3e635" />
        <text x="230" y="224" fill="#a3e635" fontSize="15" fontFamily={police}>{legende.retour}</text>
      </g>
    </svg>
  );
}

/** Petite étoile à quatre branches centrée sur (cx, cy). */
function star(cx: number, cy: number): string {
  return `M${cx} ${cy - 5} L${cx + 1.6} ${cy - 1.6} L${cx + 5} ${cy} L${cx + 1.6} ${cy + 1.6} L${cx} ${cy + 5} L${cx - 1.6} ${cy + 1.6} L${cx - 5} ${cy} L${cx - 1.6} ${cy - 1.6} Z`;
}
