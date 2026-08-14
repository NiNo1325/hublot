'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/*
  Les légendes de l'illustration sont du contenu, pas du décor : elles nomment
  ce que la scène montre. Les passer par `localise` fait plus que traduire — le
  typage impose à chaque langue de reprendre exactement les clés du français,
  donc une légende oubliée en cours de traduction ne compile pas.
*/
const LEGENDES = {
  fr: {
    infrasons: 'infrasons',
    ultrasons: 'ultrasons',
    partie: 'tu entends une partie des sons',
    sifflet: 'un sifflet à chien : pour toi, rien',
    chien: 'le chien, lui, l’entend très bien',
    grave: 'trop grave pour toi, pas pour eux',
  },
  en: {
    infrasons: 'infrasound',
    ultrasons: 'ultrasound',
    partie: 'you hear only some sounds',
    sifflet: 'a dog whistle: nothing for you',
    chien: 'the dog hears it perfectly well',
    grave: 'too low for you, not for them',
  },
};

/**
 * L'oreille humaine ne capte qu'une plage de fréquences parmi d'autres :
 * ultrasons et infrasons existent bel et bien, d'autres espèces les perçoivent.
 */
export function LesSonsQuonNentendPasAnimation({
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
      <rect width="400" height="240" fill="#140b1f" />

      {/* La règle des fréquences, toujours visible */}
      <rect x="30" y="190" width="340" height="14" rx="7" fill="#3f2e4d" />
      <text x="30" y="222" fill="#a78bfa" fontSize="13" fontFamily={police}>{legende.infrasons}</text>
      <text x="316" y="222" fill="#a78bfa" fontSize="13" fontFamily={police}>{legende.ultrasons}</text>

      {/* Phase 1 : ton oreille entend une partie des sons */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <rect x="150" y="188" width="100" height="18" rx="9" fill="#e879f9">
          {anime && <animate attributeName="opacity" values="0.6;1;0.6" dur="1.6s" repeatCount="indefinite" />}
        </rect>
        <g transform="translate(200 130)">
          <path d="M-14 0 Q-14 -22 0 -22 Q14 -22 14 0 L14 16 Q14 24 6 24 L-6 24 Q-14 24 -14 16 Z" fill="#fbcfe8" />
        </g>
        <text x="90" y="90" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.partie}</text>
      </g>

      {/* Phase 2 : le sifflet à chien, trop aigu pour toi */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g transform="translate(330 130)">
          <rect x="-6" y="-6" width="24" height="12" rx="4" fill="#94a3b8" />
        </g>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${340 + i * 12} 118 Q${348 + i * 12} 130 ${340 + i * 12} 142`} stroke="#94a3b8" strokeWidth="2" fill="none">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="0.6s" begin={`${i * 0.1}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="60" y="90" fill="#94a3b8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.sifflet}</text>
      </g>

      {/* Phase 3 : le chien, lui, l’entend très bien */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <g transform="translate(330 100)">
          <ellipse cx="0" cy="10" rx="16" ry="12" fill="#fbbf24" />
          <path d="M-14 0 L-20 -14 L-6 -4 Z" fill="#fbbf24" />
          <path d="M14 0 L20 -14 L6 -4 Z" fill="#fbbf24" />
        </g>
        <rect x="300" y="182" width="60" height="20" rx="10" fill="#fbbf24" opacity="0.5">
          {anime && <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1s" repeatCount="indefinite" />}
        </rect>
        <text x="70" y="90" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.chien}</text>
      </g>

      {/* Phase 4 : infrasons, éléphants et baleines */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(64 110)">
          <ellipse cx="0" cy="14" rx="22" ry="16" fill="#60a5fa" />
          <path d="M-20 8 Q-32 8 -34 -4" stroke="#60a5fa" strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        <rect x="34" y="182" width="60" height="20" rx="10" fill="#60a5fa" opacity="0.5">
          {anime && <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.8s" repeatCount="indefinite" />}
        </rect>
        <text x="110" y="90" fill="#60a5fa" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.grave}</text>
      </g>
    </svg>
  );
}
