'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    forme: 'on regarde la forme de la dent',
    pointue: 'pointue : elle découpait la viande',
    plate: 'plate : elle broyait les plantes',
    carnivore: 'carnivore',
    herbivore: 'herbivore',
    repas: 'on devine son repas',
  },
  en: {
    forme: 'we look at the shape of the tooth',
    pointue: 'pointed: it sliced meat',
    plate: 'flat: it ground up plants',
    carnivore: 'carnivore',
    herbivore: 'herbivore',
    repas: 'we work out its meal',
  },
};

/**
 * Une seule dent, sous la loupe, change de forme selon la phase : pointue
 * pour la viande, plate pour la plante. La forme est l'indice, jamais un
 * dinosaure vu en train de manger.
 */
export function CarnivoreOuHerbivoreAnimation({
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
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La loupe, décor permanent centré sur la dent */}
      <circle cx="200" cy="110" r="58" fill="#1c2440" stroke="#e8ddc8" strokeWidth="4" />
      <line x1="240" y1="150" x2="270" y2="180" stroke="#e8ddc8" strokeWidth="8" strokeLinecap="round" />

      {/* Phase 1 : on examine la forme de la dent fossilisée */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M200 84 L212 132 L200 144 L188 132 Z" fill="#e8ddc8" />
        <text x="30" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.forme}</text>
      </g>

      {/* Phase 2 : pointue et recourbée, elle a découpé de la viande */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[-18, 0, 18].map((dx, i) => (
          <path key={dx} d={`M${200 + dx} 82 Q${210 + dx} 110 ${200 + dx} 146 Q${192 + dx} 110 ${200 + dx} 82 Z`} fill="#f87171">
            {anime && (
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="30" y="30" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.pointue}</text>
      </g>

      {/* Phase 3 : plate et large, elle a broyé des plantes */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[-18, 0, 18].map((dx, i) => (
          <path key={dx} d={`M${188 + dx} 90 Q${200 + dx} 82 ${212 + dx} 90 L${212 + dx} 138 Q${200 + dx} 146 ${188 + dx} 138 Z`} fill="#86efac">
            {anime && (
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="30" y="30" fill="#86efac" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.plate}</text>
      </g>

      {/* Phase 4 : la dentition seule révèle le menu */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <g transform="translate(90 190)">
          <path d="M-10 -8 L2 -8 L2 8 L-10 8 Z" fill="#f87171" />
          <text x="-30" y="28" fill="#f87171" fontSize="13" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.carnivore}</text>
        </g>
        <g transform="translate(300 190)">
          <path d="M-8 -10 Q4 -10 4 10 Q-8 10 -8 -10 Z" fill="#86efac" />
          <text x="-32" y="28" fill="#86efac" fontSize="13" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.herbivore}</text>
        </g>
        <text x="110" y="30" fill="#e8ddc8" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.repas}</text>
      </g>
    </svg>
  );
}
