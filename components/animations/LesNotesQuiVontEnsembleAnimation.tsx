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
    note: 'une corde vibre → une note',
    moitie: 'corde 2 fois plus courte, 2 fois plus vite',
    octave: 'même note, une octave plus haut',
    rapport: 'rapport 2 pour 1 : ça sonne joli',
  },
  en: {
    note: 'a string vibrates → a note',
    moitie: 'string half as long, twice as fast',
    octave: 'same note, one octave higher',
    rapport: 'a 2 to 1 ratio: it sounds lovely',
  },
};

/**
 * Deux notes sonnent bien ensemble quand leurs fréquences forment un rapport
 * simple de nombres entiers, comme l'octave (2:1) : ce n'est pas qu'une
 * question de goût, c'est un phénomène physique mesurable.
 */
export function LesNotesQuiVontEnsembleAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);

  // La phase qui parle de l'octave allume ses deux bouts, celle de l'accord ses
  // trois notes ; partout ailleurs le clavier reste ivoire.
  const touche = (i: number) => {
    if (phase === 2 && (i === 0 || i === 7)) return '#fde047';
    if (phase === 3 && (i === 0 || i === 2 || i === 4)) return '#a3e635';
    return '#f5f3ff';
  };

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#140b1f" />

      {/*
        Un vrai clavier : huit touches blanches jointives et leurs cinq noires.

        Sept carrés blancs espacés, sans touches noires et jamais allumés :
        l'instrument était privé de son trait le plus identifiable, et sept
        touches suggéraient une octave de sept notes. Les touches s'allument
        maintenant à la phase qui les nomme — les deux bouts de l'octave, puis
        les trois notes qui s'emboîtent.
      */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <rect
          key={i}
          x={80 + i * 30} y="196" width="30" height="40" rx="2"
          fill={touche(i)} stroke="#3f2e4d" strokeWidth="1.5"
          style={{ transition: 'fill 400ms ease' }}
        />
      ))}
      {[0, 1, 3, 4, 5].map((i) => (
        <rect key={i} x={80 + (i + 1) * 30 - 9} y="196" width="18" height="25" rx="2" fill="#1c1129" />
      ))}

      {/* Phase 1 : une corde vibre, une note naît */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M80 70 Q200 60 320 70" stroke="#e879f9" strokeWidth="2.5" fill="none">
          {anime && (
            <animate
              attributeName="d"
              values="M80 70 L320 70;M80 70 Q200 60 320 70;M80 70 L320 70;M80 70 Q200 80 320 70;M80 70 L320 70"
              dur="0.6s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <text x="150" y="50" fill="#e879f9" fontSize="20" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>♪</text>
        <text x="16" y="176" fill="#e879f9" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.note}</text>
      </g>

      {/* Phase 2 : une corde deux fois plus courte, deux fois plus vite */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M80 70 Q200 60 320 70" stroke="#78716c" strokeWidth="2" fill="none" opacity="0.4" />
        <path d="M140 108 Q200 100 260 108" stroke="#38bdf8" strokeWidth="2.5" fill="none">
          {anime && (
            <animate
              attributeName="d"
              values="M140 108 L260 108;M140 108 Q200 100 260 108;M140 108 L260 108;M140 108 Q200 116 260 108;M140 108 L260 108"
              dur="0.3s"
              repeatCount="indefinite"
            />
          )}
        </path>
        <text x="16" y="176" fill="#38bdf8" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.moitie}</text>
      </g>

      {/* Phase 3 : la même note, une octave plus haut */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M80 60 Q140 42 200 60 Q260 78 320 60" stroke="#e879f9" strokeWidth="2" fill="none" opacity="0.8" />
        <path d="M140 96 Q170 82 200 96 Q230 110 260 96" stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.8" />
        <text x="150" y="40" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.octave}</text>
      </g>

      {/* Phase 4 : ça s'emboîte bien, ça sonne joli */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path
          d="M80 78 Q110 60 140 78 Q170 96 200 78 Q230 60 260 78 Q290 96 320 78"
          stroke="#a3e635" strokeWidth="3" fill="none"
        >
          {anime && <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />}
        </path>
        <text x="160" y="44" fill="#a3e635" fontSize="18" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>✨</text>
        <text x="16" y="176" fill="#a3e635" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.rapport}</text>
      </g>
    </svg>
  );
}
