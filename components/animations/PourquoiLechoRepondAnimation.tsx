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
    crier: 'tu cries : « Hou hou ! »',
    foncer: 'le son fonce vers le mur',
    rebondir: 'il rebondit dessus',
    revenir: 'ça revient, un peu plus tard',
  },
  en: {
    crier: 'you shout: “Hoo hoo!”',
    foncer: 'the sound races to the wall',
    rebondir: 'it bounces off it',
    revenir: 'it comes back, a little later',
  },
};

/**
 * L'écho n'est pas une voix qui répond : c'est ton propre cri qui voyage
 * jusqu'à la paroi, rebondit dessus comme une balle, puis te revient avec un
 * léger retard dû au temps du trajet aller-retour.
 */
export function PourquoiLechoRepondAnimation({
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

      {/* L'enfant, toujours visible, à gauche */}
      <g transform="translate(56 140)">
        <circle cx="0" cy="0" r="16" fill="#fbcfe8" />
        <path d="M-14 18 Q0 10 14 18 L14 46 L-14 46 Z" fill="#c084fc" />
        <circle cx="-5" cy="-3" r="1.6" fill="#3b0764" />
        <circle cx="5" cy="-3" r="1.6" fill="#3b0764" />
      </g>

      {/* La paroi rocheuse, toujours visible, à droite */}
      <path
        d="M340 50 L354 76 L344 100 L358 124 L346 150 L360 174 L344 198 L344 224 L400 224 L400 40 Z"
        fill="#3f2e4d"
      />

      {/* Phase 1 : le cri part dans l'air */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M56 148 Q66 155 56 162" stroke="#fde047" strokeWidth="2.5" fill="none" />
        {[0, 1].map((i) => (
          <circle key={i} cx={92 + i * 16} cy="150" r={4 + i * 3} fill="none" stroke="#fde047" strokeWidth="1.5" opacity="0.7" />
        ))}
        <text x="16" y="200" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.crier}</text>
      </g>

      {/* Phase 2 : le son fonce en ligne droite vers la paroi */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${96 + i * 68} 132 Q${108 + i * 68} 150 ${96 + i * 68} 168`} stroke="#38bdf8" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.15;1;0.15" dur="1.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="16" y="222" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.foncer}</text>
      </g>

      {/* Phase 3 : il rebondit sur la paroi, comme une balle */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <rect x="340" y="50" width="60" height="174" fill="#e879f9" opacity="0.18">
          {anime && <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1s" repeatCount="indefinite" />}
        </rect>
        <defs>
          <marker id="fleche-echo-1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#e879f9" />
          </marker>
        </defs>
        <path d="M300 150 L332 150" stroke="#e879f9" strokeWidth="3" markerEnd="url(#fleche-echo-1)" />
        <path d="M300 126 L268 126" stroke="#e879f9" strokeWidth="3" markerEnd="url(#fleche-echo-1)" />
        <text x="220" y="200" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.rebondir}</text>
      </g>

      {/* Phase 4 : l'écho revient, un peu plus tard */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${288 - i * 68} 132 Q${276 - i * 68} 150 ${288 - i * 68} 168`} stroke="#a3e635" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.15;1;0.15" dur="1.4s" begin={`${0.5 + i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <g transform="translate(84 192)">
          <circle r="9" fill="none" stroke="#a3e635" strokeWidth="1.5" />
          <path d="M0 -5 L0 0 L4 2" stroke="#a3e635" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
        <text x="100" y="196" fill="#a3e635" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.revenir}</text>
      </g>
    </svg>
  );
}
