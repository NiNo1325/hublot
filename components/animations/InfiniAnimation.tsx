'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['compter', 'jamais-fini', 'pas-un-nombre', 'entre'] as const;

const LEGENDES = {
  fr: {
    dernier: 'jamais de dernier : ce n’est pas un nombre',
    pairs: 'autant de pairs que d’entiers',
    plusGrands: 'et certains infinis sont plus grands que d’autres',
  },
  en: {
    dernier: 'never a last one: not a number',
    pairs: 'as many evens as integers',
    plusGrands: 'and some infinities are bigger than others',
  },
};

/**
 * La phase clé montre l'appariement entier ↔ double : c'est la démonstration
 * que deux ensembles infinis peuvent avoir la même taille alors que l'un
 * contient l'autre.
 */
export function InfiniAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  const entiers = [1, 2, 3, 4, 5];

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La suite qui ne s'arrête pas */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {entiers.map((n, i) => (
          <text
            key={n}
            x={40 + i * 46} y="60"
            fill="#f5f0e6" fontSize="22" fontFamily="var(--font-atkinson), monospace"
          >
            {n}
          </text>
        ))}
        <text x="270" y="60" fill="#b9c4da" fontSize="22" fontFamily="var(--font-atkinson), monospace">…</text>
        <text x="304" y="60" fill="#ffb627" fontSize="22" fontFamily="var(--font-atkinson), monospace">+1</text>
      </g>

      {/* L'infini n'est pas un nombre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="13" y="102" fill="#a5b4fc" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.dernier}
        </text>
      </g>

      {/* L'appariement entier / double */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {entiers.map((n, i) => (
          <g key={n}>
            <text x={40 + i * 66} y="146" fill="#f5f0e6" fontSize="18" fontFamily="var(--font-atkinson), monospace">{n}</text>
            <text x={40 + i * 66} y="196" fill="#34d399" fontSize="18" fontFamily="var(--font-atkinson), monospace">{n * 2}</text>
            <line
              x1={46 + i * 66} y1="152" x2={46 + i * 66} y2="182"
              stroke="#34d399" strokeWidth="2"
            >
              {anime && phase === 2 && (
                <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${i * 0.25}s`} fill="freeze" />
              )}
            </line>
          </g>
        ))}
        <text x="146" y="172" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.pairs}
        </text>
      </g>

      {/* Des infinis plus grands que d'autres */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="13" y="126" fill="#c4b5fd" fontSize="14" fontFamily="var(--font-atkinson), sans-serif">
          {legende.plusGrands}
        </text>

        {/*
          Un peigne dyadique entre 1 et 2.

          « Entre deux nombres tout proches, il y en a encore une infinité qui
          se cachent » se lisait au-dessus d’une file d’entiers séparés par du
          vide : la phase énonçait sa conclusion sans jamais la montrer. Chaque
          division en coupe une autre en deux, et la hauteur du trait dit à
          quel rang il est apparu.
        */}
        <text x="18" y="228" fill="#c4b5fd" fontSize="16" fontFamily="var(--font-atkinson), monospace">1</text>
        <text x="368" y="228" fill="#c4b5fd" fontSize="16" fontFamily="var(--font-atkinson), monospace">2</text>
        <line x1="40" y1="222" x2="360" y2="222" stroke="#c4b5fd" strokeWidth="2" />
        {Array.from({ length: 63 }).map((_, k) => {
          const i = k + 1;
          const rang = i % 32 === 0 ? 5 : i % 16 === 0 ? 4 : i % 8 === 0 ? 3 : i % 4 === 0 ? 2 : i % 2 === 0 ? 1 : 0;
          const demi = 2.5 + rang * 1.6;
          const x = 40 + (i * 320) / 64;
          return (
            <line
              key={`decimal-${i}`}
              x1={x} y1={222 - demi} x2={x} y2={222 + demi}
              stroke="#c4b5fd" strokeWidth="1.6" opacity={0.35 + rang * 0.13}
            />
          );
        })}
      </g>
    </svg>
  );
}
