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
    air: 'l’air remonte de tes poumons',
    cordes: 'les cordes vocales vibrent',
    colorer: 'la bouche et le nez la colorent',
    unique: 'chaque voix est unique',
  },
  en: {
    air: 'air rises from your lungs',
    cordes: 'the vocal cords vibrate',
    colorer: 'mouth and nose colour it',
    unique: 'every voice is unique',
  },
};

/**
 * La voix naît sur les cordes vocales, dans la gorge, pas dans la bouche.
 * La gorge, la bouche et le nez ne font que colorer ce son ensuite, et comme
 * personne n'a exactement la même forme, chaque voix est unique.
 */
export function PourquoiLesVoixSontDifferentesAnimation({
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

      {/* Le profil, toujours visible : poumons, gorge, tête */}
      <path d="M104 178 L176 178 L168 226 L112 226 Z" fill="#3f2e4d" />
      <rect x="128" y="112" width="24" height="70" fill="#4a3a5c" />
      <circle cx="140" cy="80" r="34" fill="#fbcfe8" />
      <path d="M168 76 L182 84 L168 92 Z" fill="#fbcfe8" />
      <path d="M154 96 Q140 102 128 96" stroke="#7c3a8a" strokeWidth="2" fill="none" />

      {/* Phase 1 : l'air remonte des poumons vers la gorge */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx="140" cy="200" r="3.5" fill="#38bdf8">
            {anime && <animate attributeName="cy" values="212;118" dur="1.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" />}
            {anime && <animate attributeName="opacity" values="0;1;0" dur="1.6s" begin={`${i * 0.5}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="200" y="210" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.air}</text>
      </g>

      {/* Phase 2 : les cordes vocales vibrent, au fond de la gorge */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <ellipse cx="140" cy="140" rx="16" ry="4" fill="#e879f9">
          {anime && <animate attributeName="ry" values="2;6;2" dur="0.4s" repeatCount="indefinite" />}
        </ellipse>
        <text x="190" y="140" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.cordes}</text>
      </g>

      {/* Phase 3 : la bouche et le nez colorent le son */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <circle cx="150" cy="80" r="26" fill="#fde047" opacity="0.22">
          {anime && <animate attributeName="r" values="22;30;22" dur="1.8s" repeatCount="indefinite" />}
        </circle>
        {[0, 1].map((i) => (
          <path key={i} d={`M186 ${80 - i * 6} Q198 ${74 - i * 6} 210 ${80 - i * 6}`} stroke="#fde047" strokeWidth="2" fill="none" opacity="0.8">
            {anime && <animate attributeName="opacity" values="0.2;1;0.2" dur="1.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </path>
        ))}
        <text x="200" y="176" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.colorer}</text>
      </g>

      {/* Phase 4 : deux silhouettes, deux voix bien différentes */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <circle cx="264" cy="70" r="14" fill="#93c5fd" />
        <path
          d="M282 66 Q296 60 310 66 Q296 72 310 78 Q296 84 310 90"
          stroke="#93c5fd" strokeWidth="2" fill="none"
        />
        <circle cx="264" cy="140" r="14" fill="#fca5a5" />
        <path
          d="M282 134 Q310 128 306 140 Q310 152 282 146"
          stroke="#fca5a5" strokeWidth="2" fill="none"
        />
        <text x="220" y="188" fill="#f9a8d4" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.unique}</text>
      </g>
    </svg>
  );
}
