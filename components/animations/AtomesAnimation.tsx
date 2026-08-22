'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['decouper', 'atome', 'vide', 'assembler'] as const;

const LEGENDES = {
  fr: {
    couper: 'on ne peut plus couper',
    noyau: 'noyau',
    vide: 'le reste est vide',
    repulsion: 'les électrons se repoussent',
  },
  en: {
    couper: 'you cannot cut further',
    noyau: 'nucleus',
    vide: 'the rest is empty',
    repulsion: 'the electrons push apart',
  },
};

/**
 * Le noyau est dessiné volontairement minuscule au centre d'un très grand
 * cercle vide : c'est le rapport, et non le dessin habituel des orbites
 * serrées, qui porte l'argument de la carte.
 */
export function AtomesAnimation({
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

      {/* On coupe, on recoupe : trois morceaux de plus en plus petits */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {[
          { x: 16, taille: 44 },
          { x: 70, taille: 24 },
          { x: 104, taille: 12 },
        ].map((m) => (
          <rect key={m.x} x={m.x} y={124 - m.taille / 2} width={m.taille} height={m.taille} rx="3" fill="#d4a373" />
        ))}
        <text x="14" y="32" fill="#d4a373" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.couper}
        </text>
      </g>

      {/* L'atome : un très grand cercle presque vide */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <circle cx="256" cy="118" r="78" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 6" />
        <circle cx="256" cy="118" r="4" fill="#f87171" />
        <text x="266" y="112" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.noyau}
        </text>
      </g>

      {/* Les électrons, très loin, comme une probabilité de présence */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[20, 95, 165, 250, 320].map((angle, i) => (
          <circle
            key={angle}
            cx={256 + Math.cos((angle * Math.PI) / 180) * 78}
            cy={118 + Math.sin((angle * Math.PI) / 180) * 78}
            r="3.5"
            fill="#38bdf8"
          >
            {anime && (
              <animate attributeName="opacity" values="0.2;1;0.2" dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="14" y="210" fill="#64748b" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.vide}
        </text>
      </g>

      {/* Ce qui rend la matière impénétrable : la répulsion */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {/*
          Deux atomes qui s'écartent, et non trois flèches parallèles.

          Elles pointaient toutes dans le même sens, dans une zone vide : une
          poussée à sens unique, alors qu'une répulsion est mutuelle — et rien
          ne montrait ce qui repousse quoi. La phrase parle de deux surfaces
          qui ne se traversent pas ; il fallait donc deux atomes.
        */}
        {[86, 176].map((cx) => (
          <g key={cx}>
            <circle cx={cx} cy="76" r="20" fill="none" stroke="#334155" strokeWidth="2" strokeDasharray="4 6" />
            <circle cx={cx} cy="76" r="3.5" fill="#f87171" />
          </g>
        ))}
        {[
          { d: 'M126 76 h-16', tete: 'M114 70 L104 76 L114 82 Z' },
          { d: 'M136 76 h16', tete: 'M148 70 L158 76 L148 82 Z' },
        ].map(({ d, tete }, i) => (
          <g key={d}>
            <path d={d} stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" />
            <path d={tete} fill="#38bdf8">
              {anime && phase === 3 && (
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.8s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              )}
            </path>
          </g>
        ))}
        <text x="14" y="234" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.repulsion}
        </text>
      </g>
    </svg>
  );
}
