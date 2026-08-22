'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['chute', 'attraction', 'plume', 'lune'] as const;

const LEGENDES = {
  fr: {
    attire: 'la Terre attire',
    airFreine: "l'air freine",
    sansAir: 'sur la Lune : sans air',
    avecAir: "sur Terre : avec l'air",
  },
  en: {
    attire: 'the Earth pulls',
    airFreine: 'the air slows it',
    sansAir: 'on the Moon: no air',
    avecAir: 'on Earth: with air',
  },
};

/**
 * La phase « plume » montre les deux objets côte à côte : avec air, la plume
 * traîne ; sans air, les deux descendent ensemble. C'est la démonstration
 * visuelle du point que la carte corrige — la masse ne change pas la vitesse
 * de chute.
 *
 * Une flèche de résistance de l'air pousse vers le haut sur la plume, tant
 * qu'il y a de l'air. Sur la Lune, elle disparaît : c'est cette différence de
 * flèche, et non le seul changement de vitesse, qui explique pourquoi la plume
 * traînait.
 */
export function GraviteAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const sansAir = phase === 3;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      <path d="M0 206 h400 v34 H0 Z" fill="#1f6f4e" />

      {/* Pomme qui tombe */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="70" cy="60" r="15" fill="#fb7185">
          {anime && (
            <animate
              attributeName="cy" values="60;192" dur="1.5s" repeatCount="indefinite"
            />
          )}
        </circle>
      </g>

      {/* Attraction réciproque : deux flèches, pas une seule. */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[150, 200, 250].map((x) => (
          <g key={x}>
            <line x1={x} y1="70" x2={x} y2="128" stroke="#38bdf8" strokeWidth="4" />
            <path d={`M${x - 7} 124 L${x} 136 L${x + 7} 124 Z`} fill="#38bdf8" />
          </g>
        ))}
        <text x="150" y="58" fill="#7dd3fc" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.attire}
        </text>
      </g>

      {/* Marteau et plume : même chute quand l'air ne s'en mêle plus. */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {/*
          Un marteau et une plume, et non une bille et une amande crème.

          Deux registres sur trois nomment le marteau — c’est l’expérience
          d’Apollo 15 — et l’image montrait une bille ; la plume, elle, se
          lisait plutôt comme une feuille ou une goutte. Le marteau a sa tête
          et son manche, la plume son rachis et ses barbes.
        */}
        <g>
          <rect x="286" y="46" width="30" height="12" rx="2" fill="#b9c4da" />
          <path d="M316 46 l7 6 l-7 6 z" fill="#b9c4da" />
          <rect x="297" y="58" width="7" height="28" rx="2.5" fill="#a16207" />
          {anime && (
            <animateTransform
              attributeName="transform" type="translate"
              values="0 0; 0 140" dur="1.4s" repeatCount="indefinite"
            />
          )}
        </g>
        <g>
          <path d="M348 48 q11 12 8 26 q-2 10 -8 14 q-6 -4 -8 -14 q-3 -14 8 -26 z" fill="#f5f0e6" />
          <path d="M348 50 V88" stroke="#94a3b8" strokeWidth="1.6" fill="none" />
          <path
            d="M348 58 l-7 6 M348 58 l7 6 M348 68 l-6 6 M348 68 l6 6 M348 78 l-4 5 M348 78 l4 5"
            stroke="#94a3b8" strokeWidth="1.2" fill="none"
          />
          {anime && (
            <animateTransform
              attributeName="transform" type="translate"
              values="0 0; 0 140"
              /* Sans air, la plume met le même temps que le marteau. */
              dur={sansAir ? '1.4s' : '3.4s'}
              repeatCount="indefinite"
            />
          )}
        </g>

        {/* La résistance de l'air : une flèche vers le haut, sur la plume. */}
        {!sansAir && (
          <g>
            <line x1="366" y1="150" x2="366" y2="108" stroke="#fb923c" strokeWidth="4" />
            <path d="M359 114 L366 98 L373 114 Z" fill="#fb923c" />
            <text x="248" y="150" fill="#fb923c" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
              {legende.airFreine}
            </text>
          </g>
        )}

        <text x="58" y="34" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {sansAir ? legende.sansAir : legende.avecAir}
        </text>
      </g>

      {/* La Lune en orbite : une chute permanente qui manque sa cible. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="200" cy="130" r="46" fill="none" stroke="#2c3f66" strokeWidth="2" strokeDasharray="5 7" />
        {/*
          La Terre, au centre de l'orbite.

          Elle manquait : la Lune tournait autour de rien, alors que la phrase
          dit « la Terre tire même sur la Lune ». Le corps qui attire, seul
          sujet du texte, n'était pas dessiné.
        */}
        <circle cx="200" cy="130" r="18" fill="#2563eb" />
        <g>
          <circle cx="246" cy="130" r="10" fill="#b9c4da" />
          {/* La flèche d'attraction tourne avec la Lune : elle vise toujours la Terre. */}
          <path d="M232 130 h-8" stroke="#ffb627" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M228 126 l-5 4 l5 4" fill="none" stroke="#ffb627" strokeWidth="2.5" strokeLinecap="round" />
          {anime && (
            <animateTransform
              attributeName="transform" type="rotate"
              from="0 200 130" to="360 200 130"
              dur="6s" repeatCount="indefinite"
            />
          )}
        </g>
      </g>
    </svg>
  );
}
