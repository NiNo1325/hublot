'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    hier: 'hier',
    toi: 'toi',
    duree: '230 à 66 millions d’années',
    humains: 'les humains, bien plus tard',
    ecart: 'un temps presque impossible à imaginer',
    janvier: '1er janvier',
    decembre: '31 décembre, 23h59',
    minutes: 'les humains : les toutes dernières minutes',
  },
  en: {
    hier: 'long ago',
    toi: 'you',
    duree: '230 to 66 million years',
    humains: 'humans, far later',
    ecart: 'a stretch almost impossible to picture',
    janvier: '1 January',
    decembre: '31 December, 11.59pm',
    minutes: 'humans: the very last minutes',
  },
};

/**
 * La même ligne du temps, lue de deux façons : d'abord étirée en frise pour
 * situer dinosaures et humains, puis repliée en cercle d'une année pour
 * rendre sensible un écart trop grand pour une frise droite.
 */
export function IlYaTresTresLongtempsAnimation({
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

      {/* La frise, décor permanent tant qu'on n'est pas au cercle-année */}
      <g style={{ opacity: phase === 3 ? 0 : 1, transition: 'opacity 500ms ease' }}>
        <line x1="30" y1="150" x2="374" y2="150" stroke="#3f3a55" strokeWidth="3" />
        <text x="20" y="176" fill="#7c7a94" fontSize="12" fontFamily={police}>{legende.hier}</text>
        <text x="352" y="176" fill="#7c7a94" fontSize="12" fontFamily={police}>{legende.toi}</text>

        {/* Phase 1 : les dinosaures occupent une large part de la frise */}
        <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
          <rect x="60" y="140" width="150" height="20" fill="#c8a97e" />
          <text x="60" y="128" fill="#c8a97e" fontSize="14" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.duree}</text>
        </g>

        {/* Phase 2 : les humains, un tout petit point tout au bout */}
        <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
          <circle cx="360" cy="150" r="6" fill="#7dd3fc">
            {anime && phase === 1 && (
              <animate attributeName="r" values="6;9;6" dur="1.4s" repeatCount="indefinite" />
            )}
          </circle>
          <text x="212" y="128" fill="#7dd3fc" fontSize="14" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.humains}</text>
        </g>

        {/* Phase 3 : l'écart immense entre les deux */}
        <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
          <line x1="214" y1="150" x2="354" y2="150" stroke="#f87171" strokeWidth="3" strokeDasharray="6 6">
            {anime && phase === 2 && (
              <animate attributeName="stroke-dashoffset" values="0;24" dur="1.2s" repeatCount="indefinite" />
            )}
          </line>
          <text x="14" y="198" fill="#f87171" fontSize="14" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.ecart}</text>
        </g>
      </g>

      {/* Phase 4 : toute l'histoire de la Terre ramenée à une année */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="112" r="70" fill="none" stroke="#3f3a55" strokeWidth="20" />
        {/*
          L'histoire de la Terre couvre presque tout l'anneau, et les humains
          n'en occupent que les tout derniers degrés.

          L'arc s'arrêtait à trois heures — un quart du cercle — et la marque
          humaine avec lui : la carte plaçait les humains au premier quart de
          l'année, alors qu'elle enseigne « les toutes dernières minutes du
          31 décembre ». C'était l'intuition même qu'elle veut corriger.

          `1 1` : le grand arc, dans le sens des aiguilles, sur 355°.
        */}
        <path
          d="M200 42 A70 70 0 1 1 193.9 42.3"
          fill="none" stroke="#c8a97e" strokeWidth="20"
        />
        <path d="M184.3 43.8 A70 70 0 0 1 193.9 42.3" fill="none" stroke="#7dd3fc" strokeWidth="20" strokeLinecap="round" />
        {/* L'année boucle au sommet : décembre juste avant, janvier juste après. */}
        <text x="250" y="34" textAnchor="start" fill="#a8a29e" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.janvier}</text>
        <text x="150" y="34" textAnchor="end" fill="#a8a29e" fontSize="12" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.decembre}</text>
        <text x="80" y="226" fill="#7dd3fc" fontSize="14" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.minutes}</text>
      </g>
    </svg>
  );
}
