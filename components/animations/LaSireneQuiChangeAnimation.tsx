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
    arrivee: 'l’ambulance arrive, sirène allumée',
    devant: 'devant : les ondes tassées, aigu',
    passage: 'vroum ! elle passe devant toi',
    derriere: 'derrière : les ondes étirées, grave',
  },
  en: {
    arrivee: 'the ambulance comes, siren on',
    devant: 'in front: waves squashed, high',
    passage: 'vroom! it goes right past you',
    derriere: 'behind: waves stretched, low',
  },
};

/**
 * Effet Doppler : la sirène émet toujours le même son, c'est le mouvement du
 * véhicule qui tasse les ondes à l'avant (aigu) et les étire à l'arrière
 * (grave). Le conducteur n'y est pour rien.
 */
export function LaSireneQuiChangeAnimation({
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

      {/* La route et l'observateur, toujours visibles */}
      <line x1="0" y1="176" x2="400" y2="176" stroke="#3f2e4d" strokeWidth="3" />
      <g transform="translate(360 158)">
        <circle cx="0" cy="0" r="10" fill="#fbcfe8" />
        <rect x="-8" y="10" width="16" height="20" fill="#a78bfa" />
      </g>

      {/* Phase 1 : l'ambulance approche */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <g transform="translate(40 150)">
          <rect x="0" y="0" width="46" height="22" rx="4" fill="#f87171" />
          <circle cx="10" cy="24" r="6" fill="#1f2937" />
          <circle cx="36" cy="24" r="6" fill="#1f2937" />
          <rect x="18" y="-6" width="10" height="6" fill="#fde047" />
        </g>
        <text x="16" y="60" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.arrivee}</text>
      </g>

      {/* Phase 2 : devant elle, les ondes se tassent : aigu */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g transform="translate(140 150)">
          <rect x="0" y="0" width="46" height="22" rx="4" fill="#f87171" />
          <circle cx="10" cy="24" r="6" fill="#1f2937" />
          <circle cx="36" cy="24" r="6" fill="#1f2937" />
        </g>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${196 + i * 14} 138 Q${204 + i * 14} 161 ${196 + i * 14} 184`} stroke="#38bdf8" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="0.8s" begin={`${i * 0.15}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="16" y="60" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.devant}</text>
      </g>

      {/* Phase 3 : elle te dépasse */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <g transform="translate(316 150)">
          <rect x="0" y="0" width="46" height="22" rx="4" fill="#f87171" />
          <circle cx="10" cy="24" r="6" fill="#1f2937" />
          <circle cx="36" cy="24" r="6" fill="#1f2937" />
        </g>
        <text x="70" y="60" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.passage}</text>
      </g>

      {/* Phase 4 : derrière elle, les ondes s'étirent : grave */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(330 150)">
          <rect x="0" y="0" width="46" height="22" rx="4" fill="#f87171" />
          <circle cx="10" cy="24" r="6" fill="#1f2937" />
          <circle cx="36" cy="24" r="6" fill="#1f2937" />
        </g>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${240 - i * 34} 130 Q${256 - i * 34} 161 ${240 - i * 34} 192`} stroke="#fb923c" strokeWidth="2.5" fill="none">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="1.6s" begin={`${i * 0.25}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="16" y="60" fill="#fb923c" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.derriere}</text>
      </g>
    </svg>
  );
}
