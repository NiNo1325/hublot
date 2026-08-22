'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['vitesse', 'aile', 'reaction', 'main'] as const;

const LEGENDES = {
  fr: {
    airArrive: 'l’air arrive',
    ailePoussee: 'l’aile est poussée en haut',
    airPousse: 'l’air est poussé en bas',
    surLeDos: 'sur le dos, ça vole aussi',
  },
  en: {
    airArrive: 'the air comes in',
    ailePoussee: 'the wing is pushed up',
    airPousse: 'the air is pushed down',
    surLeDos: 'upside down, it flies too',
  },
};

/**
 * L'air est montré arrivant horizontalement et repartant vers le bas : c'est
 * la déviation qui explique la portance. La dernière phase affiche l'avion sur
 * le dos, qui suffit à réfuter l'explication par la seule forme de l'aile.
 */
export function PortanceAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/*
        La phase « vitesse » a maintenant sa propre image.

        Elle n'allumait rien : ce qu'on voyait était déjà celle de la phase
        suivante. L'air qui arrive, seul, lui appartient.
      */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[80, 104, 128].map((y, i) => (
          <g key={y}>
            <line x1="20" y1={y} x2="102" y2={y} stroke="#38bdf8" strokeWidth="3" />
            <path d={`M98 ${y - 7} L116 ${y} L98 ${y + 7} Z`} fill="#38bdf8">
              {anime && (
                <animate attributeName="opacity" values="0.25;1;0.25" dur="1.2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              )}
            </path>
          </g>
        ))}
        <text x="20" y="66" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.airArrive}
        </text>
      </g>

      {/* Profil d'aile, incliné : l'angle d'attaque compte autant que la forme. */}
      <g transform="translate(200 116) rotate(-10)">
        <path
          d="M-72 0 q30 -20 74 -12 q40 8 70 12 q-40 10 -76 12 q-44 2 -68 -12 z"
          fill="#b9c4da"
          style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}
        />
      </g>

      {/* Filets d'air : horizontaux en amont, déviés vers le bas en aval. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[80, 104, 128].map((y, i) => (
          <path
            key={y}
            d={`M20 ${y} h96 q70 6 130 ${46 + i * 6}`}
            fill="none" stroke="#38bdf8" strokeWidth="3" strokeDasharray="9 9"
          >
            {anime && (
              <animate
                attributeName="stroke-dashoffset" values="36;0"
                dur="1.1s" begin={`${i * 0.2}s`} repeatCount="indefinite"
              />
            )}
          </path>
        ))}
      </g>

      {/* Le couple action / réaction, montré comme deux flèches opposées. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <g>
          <line x1="200" y1="104" x2="200" y2="44" stroke="#34d399" strokeWidth="5" />
          <path d="M192 52 L200 34 L208 52 Z" fill="#34d399" />
          <text x="96" y="24" fill="#34d399" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
            {legende.ailePoussee}
          </text>
        </g>
        <g>
          <line x1="240" y1="132" x2="240" y2="186" stroke="#fb7185" strokeWidth="5" />
          <path d="M232 178 L240 196 L248 178 Z" fill="#fb7185" />
          <text x="104" y="228" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
            {legende.airPousse}
          </text>
        </g>
      </g>

      {/* Vol inversé : réfutation de l'explication par la forme seule. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <g transform="translate(60 176) scale(1 -1)">
          <path d="M-34 0 l40 -9 l30 0 l-6 9 z" fill="#ffb627" />
          <path d="M-6 -2 l10 -16 l8 0 l-4 16 z" fill="#ffb627" />
        </g>
        <text x="14" y="222" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.surLeDos}
        </text>

        {/*
          La main par la fenêtre, que le texte 3-5 est seul à décrire.

          La phase ne montrait qu'un avion sur le dos : elle servait les niveaux
          6-8 et 9-12, et le petit entendait « sors ta main par la fenêtre »
          sans main ni voiture. La main est plate et inclinée comme l'aile, elle
          dévie l'air vers le bas et se fait pousser vers le haut.
        */}
        <g transform="translate(288 168)">
          <rect x="30" y="-24" width="70" height="70" rx="6" fill="#1b2a4a" stroke="#94a3b8" strokeWidth="3" />
          <rect x="6" y="-6" width="34" height="13" rx="6" fill="#e3ad8f" />
          <g transform="rotate(-14)">
            <path d="M8 0 l-40 -6 q-8 1 -8 6 q0 5 8 6 l40 -6 z" fill="#e3ad8f" />
          </g>
          <path d="M-92 -6 h48" stroke="#38bdf8" strokeWidth="3" fill="none" strokeDasharray="7 5" />
          <path d="M-40 6 q-16 12 -32 18" stroke="#fb7185" strokeWidth="3" fill="none" />
          <line x1="-16" y1="-16" x2="-16" y2="-38" stroke="#34d399" strokeWidth="4" />
          <path d="M-22 -32 L-16 -46 L-10 -32 Z" fill="#34d399" />
        </g>
      </g>
    </svg>
  );
}
