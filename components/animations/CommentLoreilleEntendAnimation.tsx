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
    entrer: 'le son entre dans l’oreille',
    tympan: 'le tympan se met à trembler',
    osselets: 'trois tout petits os',
    cerveau: 'un message pour ton cerveau',
  },
  en: {
    entrer: 'sound enters the ear',
    tympan: 'the eardrum starts to shake',
    osselets: 'three tiny bones',
    cerveau: 'a message for your brain',
  },
};

/**
 * Le pavillon n'est qu'une entrée : entendre est un travail qui se fait à
 * l'intérieur, du tympan jusqu'à la cochlée en passant par les osselets.
 */
/*
  La cochlée est une spirale, pas une masse.

  Les trois registres la nomment « coquille d'escargot », « escargot rempli
  d'eau », « organe en spirale » ; elle était dessinée en ovale plein. Sept
  demi-arcs de rayon décroissant lui rendent ses tours, et le même tracé sert
  au trait de contexte comme à la phase quatre.
*/
const COCHLEE =
  'M260 120 A31 31 0 0 1 322 120 A27 27 0 0 1 268 120 A23 23 0 0 1 314 120 A19 19 0 0 1 276 120 A15 15 0 0 1 306 120 A11 11 0 0 1 284 120 A7 7 0 0 1 298 120';

export function CommentLoreilleEntendAnimation({
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

      {/* Le trajet complet, en contexte discret, toujours visible */}
      <path d="M40 100 Q66 60 100 100 Q80 118 100 136 Q66 176 40 136 Z" fill="#3f2e4d" />
      <rect x="100" y="108" width="70" height="20" fill="#3f2e4d" />
      <line x1="176" y1="98" x2="176" y2="138" stroke="#6b5b7a" strokeWidth="4" />
      <circle cx="196" cy="100" r="8" fill="none" stroke="#6b5b7a" strokeWidth="3" />
      <circle cx="220" cy="118" r="7" fill="none" stroke="#6b5b7a" strokeWidth="3" />
      <circle cx="242" cy="132" r="6" fill="none" stroke="#6b5b7a" strokeWidth="3" />
      <path d={COCHLEE} fill="none" stroke="#6b5b7a" strokeWidth="3" strokeLinecap="round" />
      <path d="M320 136 Q342 112 360 118" stroke="#6b5b7a" strokeWidth="2" strokeDasharray="3 4" fill="none" />
      <circle cx="368" cy="118" r="12" fill="#3f2e4d" />

      {/* Phase 1 : le son entre par le conduit */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${0 + i * 12} 118 Q${8 + i * 12} 100 ${0 + i * 12} 82`} stroke="#38bdf8" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.15;1;0.15" dur="1.3s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="30" y="200" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.entrer}</text>
      </g>

      {/* Phase 2 : le tympan tremble */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <line x1="176" y1="98" x2="176" y2="138" stroke="#e879f9" strokeWidth="4">
          {anime && <animate attributeName="x1" values="176;180;176;172;176" dur="0.4s" repeatCount="indefinite" />}
          {anime && <animate attributeName="x2" values="176;180;176;172;176" dur="0.4s" repeatCount="indefinite" />}
        </line>
        <text x="86" y="176" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.tympan}</text>
      </g>

      {/* Phase 3 : trois osselets relaient la vibration */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[
          { cx: 196, cy: 100, r: 8, d: '0s' },
          { cx: 220, cy: 118, r: 7, d: '0.2s' },
          { cx: 242, cy: 132, r: 6, d: '0.4s' },
        ].map((o) => (
          <circle key={o.cx} cx={o.cx} cy={o.cy} r={o.r} fill="none" stroke="#fde047" strokeWidth="3">
            {anime && <animate attributeName="r" values={`${o.r - 1};${o.r + 2};${o.r - 1}`} dur="0.9s" begin={o.d} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="180" y="66" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.osselets}</text>
      </g>

      {/* Phase 4 : la cochlée transforme tout en message nerveux */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d={COCHLEE} fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" opacity="0.9">
          {anime && <animate attributeName="opacity" values="0.35;1;0.35" dur="1.2s" repeatCount="indefinite" />}
        </path>
        <circle cx="340" cy="122" r="3" fill="#a3e635">
          {anime && <animate attributeName="cx" values="322;362" dur="1s" repeatCount="indefinite" />}
          {anime && <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />}
        </circle>
        <text x="180" y="200" fill="#a3e635" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.cerveau}</text>
      </g>
    </svg>
  );
}
