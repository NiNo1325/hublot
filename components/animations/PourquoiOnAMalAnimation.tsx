'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    brulant: 'c’est brûlant !',
    capteur: 'un capteur le repère',
    signal: 'un signal file très vite',
    aie: 'aïe !',
    protege: 'la douleur te protège',
  },
  en: {
    brulant: 'that’s burning hot!',
    capteur: 'a sensor spots it',
    signal: 'a signal races off',
    aie: 'ouch!',
    protege: 'pain looks after you',
  },
};

/**
 * Une main s'approche d'une plaque brûlante, à l'autre bout un cerveau
 * schématique : le signal parcourt le bras du doigt jusqu'à la tête, puis la
 * main se retire d'elle-même. La douleur est montrée comme un aller-retour
 * utile, pas comme une punition.
 */
export function PourquoiOnAMalAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);
  const retiree = phase === 3;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La plaque brûlante */}
      <rect x="292" y="120" width="70" height="20" rx="4" fill="#7f1d1d" />
      <path d="M300 118 q4 -10 0 -18 M316 118 q4 -10 0 -18 M332 118 q4 -10 0 -18" stroke="#f97316" strokeWidth="2.5" fill="none" />

      {/* La tête, à l'autre bout */}
      <circle cx="60" cy="70" r="30" fill="#e3ad8f" />
      <circle cx="60" cy="70" r="12" fill="#f9a8d4" />

      {/* Le bras et la main, qui se retirent au bon moment */}
      <g style={{ transform: retiree ? 'translateX(-40px)' : 'translateX(0px)', transition: 'transform 500ms ease' }}>
        <line x1="80" y1="100" x2="260" y2="128" stroke="#e3ad8f" strokeWidth="16" strokeLinecap="round" />
        <circle cx="270" cy="130" r="14" fill="#e3ad8f" />
      </g>

      {/* Le nerf, entre la main et la tête */}
      <path d="M60 82 Q160 130 264 128" stroke="#a3a3a3" strokeWidth="2" strokeDasharray="4 4" fill="none" />

      {/* Phase 1 : le danger touche la peau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <circle cx="266" cy="128" r="16" fill="none" stroke="#f97316" strokeWidth="2">
          {anime && (
            <animate attributeName="r" values="14;20;14" dur="1.4s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="150" y="200" fill="#f97316" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.brulant}</text>
      </g>

      {/* Phase 2 : un capteur repère le danger */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M260 122 l6 -8 M266 132 l8 -4 M270 140 l4 8" stroke="#fbbf24" strokeWidth="2.5" />
        <text x="20" y="34" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.capteur}</text>
      </g>

      {/* Phase 3 : le signal file vers le cerveau */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {/*
          Position de repos sur la trajectoire.

          Sans `cx`/`cy`, un cercle mû par `animateMotion` retombe en 0,0 dès que
          l'animation ne joue pas — lecture en pause, ou réglage système
          « mouvement réduit ». On les pose donc sur leur parcours, et seulement
          alors : `animateMotion` s'ajoute à la position propre au lieu de la
          remplacer.
        */}
        <circle r="4" fill="#38bdf8" cx={anime ? 0 : 161} cy={anime ? 0 : 118}>
          {anime && (
            <animateMotion path="M264 128 Q160 130 60 82" dur="1s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="20" y="200" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.signal}</text>
      </g>

      {/* Phase 4 : la main se retire, la douleur protège */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <text x="118" y="34" fill="#f9a8d4" fontSize="18" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.aie}</text>
        <text x="150" y="60" fill="#a3a3a3" fontSize="14" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.protege}</text>
      </g>
    </svg>
  );
}
