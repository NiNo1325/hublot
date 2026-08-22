'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['decoupage', 'voyage', 'cables', 'reassemblage'] as const;

/*
  Les légendes de l'illustration sont du contenu, pas du décor : elles nomment
  ce que la scène montre. Les passer par `localise` fait plus que traduire — le
  typage impose à chaque langue de reprendre exactement les clés du français,
  donc une légende oubliée en cours de traduction ne compile pas.
*/
const LEGENDES = {
  fr: {
    cables: 'câbles sous l’océan',
    ordre: 'remis dans l’ordre',
  },
  en: {
    cables: 'cables under the ocean',
    ordre: 'put back in order',
  },
};

/**
 * Les paquets empruntent deux routes distinctes vers le même destinataire :
 * c'est le point le moins intuitif du réseau, et le plus important — aucun
 * nœud ne connaît le trajet complet.
 */
export function InternetAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Océan : l'infrastructure est physique, pas aérienne. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path d="M0 150 h400 v90 H0 Z" fill="#0c2a4d" />
        <path d="M0 150 q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 v8 H0 Z" fill="#123a66" />
        <text x="150" y="230" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.cables}
        </text>
      </g>

      {/* Appareil source, image découpée en paquets */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="14" y="60" width="58" height="44" rx="5" fill="#1b2a4a" stroke="#22d3ee" strokeWidth="2.5" />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={22 + (i % 2) * 24} y={68 + Math.floor(i / 2) * 20}
            width="20" height="16" rx="3" fill="#22d3ee" opacity={0.55 + i * 0.12}
          />
        ))}
      </g>

      {/* Routeurs et deux chemins concurrents */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path d="M78 82 q60 -40 120 0 q60 40 120 0" fill="none" stroke="#2c3f66" strokeWidth="2.5" strokeDasharray="6 6" />
        <path d="M78 92 q60 60 120 20 q60 -40 120 10" fill="none" stroke="#2c3f66" strokeWidth="2.5" strokeDasharray="6 6" />
        {[[138, 62], [198, 82], [258, 62], [198, 132]].map(([cx, cy], i) => (
          <g key={i}>
            <rect x={cx - 13} y={cy - 9} width="26" height="18" rx="4" fill="#1b2a4a" stroke="#22d3ee" strokeWidth="2" />
            <circle cx={cx} cy={cy} r="3" fill="#22d3ee" />
          </g>
        ))}
        {/* Deux paquets, deux routes, même destination. */}
        {/*
          Position de repos sur la trajectoire.

          Sans `cx`/`cy`, un cercle mû par `animateMotion` retombe en 0,0 dès que
          l'animation ne joue pas — lecture en pause, ou réglage système
          « mouvement réduit ». On les pose donc sur leur parcours, et seulement
          alors : `animateMotion` s'ajoute à la position propre au lieu de la
          remplacer.
        */}
        <circle r="5" fill="#a5f3fc" cx={anime ? 0 : 138} cy={anime ? 0 : 62}>
          {anime && (
            <animateMotion dur="2.6s" repeatCount="indefinite" path="M78 82 q60 -40 120 0 q60 40 120 0" />
          )}
        </circle>
        <circle r="5" fill="#67e8f9" cx={anime ? 0 : 138} cy={anime ? 0 : 127}>
          {anime && (
            <animateMotion dur="3.2s" begin="0.5s" repeatCount="indefinite" path="M78 92 q60 60 120 20 q60 -40 120 10" />
          )}
        </circle>
      </g>

      {/* Destinataire : les paquets sont remis dans l'ordre */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <rect x="328" y="60" width="58" height="44" rx="5" fill="#1b2a4a" stroke="#34d399" strokeWidth="2.5" />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={336 + (i % 2) * 24} y={68 + Math.floor(i / 2) * 20}
            width="20" height="16" rx="3" fill="#34d399" opacity={0.55 + i * 0.12}
          >
            {anime && phase === 3 && (
              <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${i * 0.18}s`} fill="freeze" />
            )}
          </rect>
        ))}
        <text x="239" y="124" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.ordre}
        </text>
      </g>
    </svg>
  );
}
