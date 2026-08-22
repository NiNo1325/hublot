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
        {/*
          Un chien, et non un chat.

          Deux oreilles triangulaires dressées sur une tête ronde, sans museau
          ni truffe : la silhouette se lisait au moins autant comme un chat.
          Museau allongé, truffe sombre et oreilles tombantes tranchent.
        */}
        <g transform="translate(330 100)">
          <path d="M-8 -2 q-10 -6 -12 8 q-2 14 8 14 q4 -12 4 -22 z" fill="#d97706" />
          <path d="M10 -2 q10 -6 12 8 q2 14 -8 14 q-4 -12 -4 -22 z" fill="#d97706" />
          <ellipse cx="0" cy="10" rx="17" ry="13" fill="#fbbf24" />
          <path d="M-13 8 q-16 0 -19 8 q-1 7 8 7 q13 0 16 -9 z" fill="#fbbf24" />
          <circle cx="-30" cy="16" r="3.4" fill="#7c2d12" />
          <circle cx="-6" cy="6" r="2.2" fill="#3f2914" />
        </g>
        <rect x="300" y="182" width="60" height="20" rx="10" fill="#fbbf24" opacity="0.5">
          {anime && <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1s" repeatCount="indefinite" />}
        </rect>
        <text x="70" y="90" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.chien}</text>
      </g>

      {/* Phase 4 : infrasons, éléphants et baleines */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {/*
          Un éléphant, reconnaissable comme tel.

          La phase des infrasons montrait un ovale bleu surmonté d'un appendice
          recourbé — ni éléphant, ni baleine. Grande oreille, trompe qui pend,
          défense et pattes en piliers le nomment sans légende.
        */}
        <g transform="translate(66 112)">
          <ellipse cx="6" cy="6" rx="30" ry="22" fill="#60a5fa" />
          <circle cx="-18" cy="0" r="18" fill="#60a5fa" />
          <path d="M-16 -12 q-18 -8 -22 8 q-3 16 12 18 q8 -10 10 -26 z" fill="#3b82f6" />
          <path d="M-32 4 q-10 10 -6 24 q2 8 8 6 q5 -2 3 -8 q-3 -12 3 -18 z" fill="#60a5fa" />
          <path d="M-26 12 q-6 8 -12 10" stroke="#e2e8f0" strokeWidth="3" fill="none" strokeLinecap="round" />
          <rect x="-6" y="22" width="10" height="18" rx="3" fill="#60a5fa" />
          <rect x="16" y="22" width="10" height="18" rx="3" fill="#60a5fa" />
          <circle cx="-22" cy="-4" r="2.2" fill="#0f1b33" />
        </g>
        <rect x="34" y="182" width="60" height="20" rx="10" fill="#60a5fa" opacity="0.5">
          {anime && <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.8s" repeatCount="indefinite" />}
        </rect>
        <text x="110" y="90" fill="#60a5fa" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.grave}</text>
      </g>
    </svg>
  );
}
