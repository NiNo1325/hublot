'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['circuit', 'boucle', 'electrons', 'chaleur'] as const;

const LEGENDES = {
  fr: {
    electrons: 'les électrons avancent lentement',
    chaleur: 'ça chauffe, donc ça brille',
  },
  en: {
    electrons: 'the electrons creep along',
    chaleur: 'it heats up, so it glows',
  },
};

/**
 * Le circuit s'ouvre à la phase « boucle » et l'ampoule s'éteint : c'est la
 * démonstration qu'un circuit interrompu ne laisse rien passer.
 */
/**
 * Où se tiennent les électrons quand rien ne bouge.
 *
 * Cinq points régulièrement espacés le long des 522 pixels du circuit
 * (`M230 80 h80 v96 h-220 v-96 h30`), pour que l'image au repos montre une file
 * qui suit le fil, et non un tas dans un coin.
 */
const POSITIONS_ELECTRONS: [number, number][] = [
  [230, 80],
  [310, 104],
  [277, 176],
  [173, 176],
  [90, 154],
];

export function ElectriciteAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const ouvert = phase === 1;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le circuit */}
      <path
        d="M90 80 h100 M230 80 h80 v96 h-220 v-96 h30"
        fill="none" stroke="#b9c4da" strokeWidth="5" strokeLinecap="round"
      />

      {/* La pile */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="176" y="158" width="48" height="36" rx="5" fill="#1b2a4a" stroke="#ffb627" strokeWidth="3" />
        <text x="184" y="182" fill="#ffb627" fontSize="18" fontFamily="var(--font-atkinson), monospace">+ −</text>
      </g>

      {/* Interrupteur, ouvert à la phase 2 */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="120" cy="80" r="4" fill="#b9c4da" />
        <line
          x1="120" y1="80" x2={ouvert ? 152 : 156} y2={ouvert ? 58 : 80}
          stroke="#ffb627" strokeWidth="5" strokeLinecap="round"
          style={{ transition: 'all 500ms ease' }}
        />
        <circle cx="156" cy="80" r="4" fill="#b9c4da" />
      </g>

      {/*
        Électrons : lents, et arrêtés si le circuit est ouvert.

        Ils n'avaient ni `cx` ni `cy` : dès que l'animation ne tournait pas —
        circuit ouvert, lecture en pause, ou réglage système « mouvement
        réduit » — les cinq s'empilaient en 0,0, dans le coin de l'image. Un
        enfant qui a besoin de ce réglage voyait donc un circuit vide et une
        tache hors du fil.

        Attention au piège : `animateMotion` **s'ajoute** à la position propre
        de l'élément au lieu de la remplacer. On ne pose donc les coordonnées
        que lorsque le mouvement ne joue pas ; sinon les électrons partiraient
        au double de leur abscisse.
      */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {POSITIONS_ELECTRONS.map(([x, y], i) => {
          const enMouvement = anime && !ouvert;
          return (
            <circle
              key={i}
              r="5"
              fill="#38bdf8"
              cx={enMouvement ? 0 : x}
              cy={enMouvement ? 0 : y}
              opacity={enMouvement && i > 0 ? 0 : 1}
            >
              {enMouvement && (
                <animateMotion
                  dur="6s" begin={`${i * 1.2}s`} repeatCount="indefinite"
                  path="M230 80 h80 v96 h-220 v-96 h30"
                />
              )}
              {/*
                Tant que son `begin` n'est pas atteint, un électron reste à sa
                position propre — c'est-à-dire 0,0 pendant l'animation, dans le
                coin de l'image. On le garde donc invisible jusqu'à son départ,
                plutôt que de le laisser stationner hors du circuit.
              */}
              {enMouvement && i > 0 && (
                <animate
                  attributeName="opacity" from="0" to="1"
                  begin={`${i * 1.2}s`} dur="0.01s" fill="freeze"
                />
              )}
            </circle>
          );
        })}
        <text x="120" y="212" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.electrons}
        </text>
      </g>

      {/* L'ampoule */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle
          cx="210" cy="80" r="22"
          fill={ouvert ? '#2c3f66' : '#ffb627'}
          style={{ transition: 'fill 400ms ease' }}
        >
          {anime && !ouvert && phase === 3 && (
            <animate attributeName="r" values="21;24;21" dur="1.6s" repeatCount="indefinite" />
          )}
        </circle>
        <path d="M202 98 h16 v8 h-16 z" fill="#b9c4da" />
        {!ouvert && phase === 3 && (
          <text x="171" y="44" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
            {legende.chaleur}
          </text>
        )}
      </g>
    </svg>
  );
}
