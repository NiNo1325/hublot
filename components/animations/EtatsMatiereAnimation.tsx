'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['solide', 'liquide', 'gaz', 'reversible'] as const;

/** Trois grilles de particules : serrées, glissantes, dispersées. */
const RANGEE = [0, 1, 2, 3, 4];

/**
 * Décalages du liquide : de quoi rompre l'alignement sans séparer les
 * particules. Fixes et non tirés au hasard, pour que l'image ne bouge pas d'un
 * rendu à l'autre.
 */
const DESORDRE: [number, number][] = [
  [0, 0], [6, 3], [-4, 2], [3, -3],
  [5, 1], [-3, 4], [2, -2], [-5, 0],
  [4, 3], [0, -4], [-2, 2], [6, -1],
  [-4, -2], [3, 4], [-6, 1], [1, -3],
];

/** Les seize mêmes particules, dispersées dans le volume du gaz. */
const GAZ: [number, number][] = [
  [290, 96], [318, 80], [346, 92], [364, 110],
  [300, 124], [330, 106], [356, 134], [288, 146],
  [312, 150], [340, 142], [362, 84], [296, 110],
  [324, 130], [352, 112], [336, 152], [306, 88],
];

/* Les trois états sont nommés sous leur grille : c'est du contenu. Le typage
   impose à `en` de reprendre exactement les clés de `fr`. */
const LEGENDES = {
  fr: {
    solide: 'solide',
    liquide: 'liquide',
    gaz: 'gaz (invisible)',
    reversible: 'rien ne se perd, tout revient',
  },
  en: {
    solide: 'solid',
    liquide: 'liquid',
    gaz: 'gas (invisible)',
    reversible: 'nothing is lost, all comes back',
  },
};

export function EtatsMatiereAnimation({
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

      {/* Solide : particules ordonnées qui vibrent sur place */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="26" y="70" width="94" height="94" rx="8" fill="none" stroke="#2c3f66" strokeWidth="2" />
        {RANGEE.slice(0, 4).map((r) =>
          RANGEE.slice(0, 4).map((c) => (
            <circle key={`${r}-${c}`} cx={44 + c * 22} cy={88 + r * 22} r="7" fill="#7dd3fc">
              {anime && phase === 0 && (
                <animate
                  attributeName="cy"
                  values={`${88 + r * 22};${90 + r * 22};${88 + r * 22}`}
                  dur="0.7s" begin={`${(r + c) * 0.08}s`} repeatCount="indefinite"
                />
              )}
            </circle>
          )),
        )}
        <text x="42" y="186" fill="#7dd3fc" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">{legende.solide}</text>
      </g>

      {/*
        Liquide : seize particules, comme le solide et le gaz.

        Elles étaient douze contre seize et six — la matière semblait
        disparaître d'un état à l'autre, sous une légende qui dit « rien ne se
        perd, tout revient ». C'est exactement l'idée reçue que la carte
        corrige.

        Le désordre vient de `DESORDRE` : rangées désalignées, particules
        toujours au contact. Une grille parfaite ne distinguait le liquide du
        solide que par son récipient.
      */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path d="M152 70 v94 h94 v-94" fill="none" stroke="#2c3f66" strokeWidth="2" />
        {RANGEE.slice(0, 4).map((r) =>
          RANGEE.slice(0, 4).map((c) => {
            const [dx, dy] = DESORDRE[r * 4 + c];
            const x = 168 + c * 22 + dx;
            const y = 88 + r * 20 + dy;
            return (
              <circle key={`${r}-${c}`} cx={x} cy={y} r="7" fill="#38bdf8">
                {anime && phase === 1 && (
                  <animate
                    attributeName="cx"
                    values={`${x};${x + 8};${x - 4};${x}`}
                    dur="2.4s" begin={`${(r + c) * 0.15}s`} repeatCount="indefinite"
                  />
                )}
              </circle>
            );
          }),
        )}
        <text x="168" y="186" fill="#38bdf8" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">{legende.liquide}</text>
      </g>

      {/* Gaz : dispersé, invisible — le nuage blanc n'en est pas */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="276" y="70" width="100" height="94" rx="8" fill="none" stroke="#2c3f66" strokeWidth="2" />
        {GAZ.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="#bae6fd" opacity="0.85">
            {anime && phase === 2 && (
              <animate
                attributeName="cy" values={`${cy};${cy - 22};${cy + 14};${cy}`}
                dur="3.2s" begin={`${i * 0.3}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        <text x="256" y="186" fill="#bae6fd" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">{legende.gaz}</text>
      </g>

      {/* Réversibilité : rien ne se perd */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M126 210 h146" stroke="#ffb627" strokeWidth="3" strokeLinecap="round" />
        <path d="M266 204 l8 6 l-8 6" fill="none" stroke="#ffb627" strokeWidth="3" strokeLinecap="round" />
        <path d="M132 204 l-8 6 l8 6" fill="none" stroke="#ffb627" strokeWidth="3" strokeLinecap="round" />
        <text x="128" y="232" fill="#ffb627" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.reversible}
        </text>
      </g>
    </svg>
  );
}
