'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    couteau: 'le couteau coupe',
    gaz: 'un gaz s’échappe',
    monte: 'il monte vers l’œil',
    larmes: 'l’œil pleure pour se laver',
  },
  en: {
    couteau: 'the knife cuts',
    gaz: 'a gas escapes',
    monte: 'it rises to the eye',
    larmes: 'the eye cries to wash itself',
  },
};

/**
 * La coupe brise les cellules de l'oignon et libère une substance soufrée qui
 * se transforme en gaz irritant. Ce gaz n'existe qu'à partir de la coupe : ce
 * n'est ni l'odeur ni le jus qui piquent les yeux.
 */
export function PourquoiLoignonFaitPleurerAnimation({
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
      <rect width="400" height="240" fill="#10190f" />

      {/* L'oignon coupé en deux, toujours visible, à gauche */}
      <g transform="translate(100 150)">
        <path d="M-40 0 A40 40 0 0 1 40 0 Z" fill="#f3e8ff" />
        {[10, 20, 30].map((r) => (
          <path key={r} d={`M${-r} 0 A${r} ${r} 0 0 1 ${r} 0`} stroke="#d8b4fe" strokeWidth="2" fill="none" />
        ))}
      </g>

      {/* Le visage, toujours visible, à droite */}
      <g transform="translate(300 130)">
        <circle cx="0" cy="0" r="8" fill="#fde68a" />
        <circle cx="0" cy="0" r="2" fill="#1c1410" />
      </g>

      {/* Phase 1 : le couteau coupe l'oignon */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M60 100 L110 148 L64 152 Z" fill="#cbd5e1">
          {anime && <animate attributeName="opacity" values="1;0.4;1" dur="1.4s" repeatCount="indefinite" />}
        </path>
        <text x="20" y="200" fill="#cbd5e1" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.couteau}</text>
      </g>

      {/* Phase 2 : un gaz soufré s'échappe de la coupe */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[90, 100, 110].map((x, i) => (
          <circle key={x} cx={x} cy="140" r="4" fill="#a3e635">
            {anime && <animate attributeName="cy" values="140;120" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <text x="20" y="200" fill="#a3e635" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.gaz}</text>
      </g>

      {/* Phase 3 : le gaz monte jusqu'au visage */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M110 130 Q200 60 292 122" stroke="#86efac" strokeWidth="2" strokeDasharray="6 5" fill="none" />
        {/*
          Position de repos sur la trajectoire.

          Sans `cx`/`cy`, un cercle mû par `animateMotion` retombe en 0,0 dès que
          l'animation ne joue pas — lecture en pause, ou réglage système
          « mouvement réduit ». On les pose donc sur leur parcours, et seulement
          alors : `animateMotion` s'ajoute à la position propre au lieu de la
          remplacer.
        */}
        {[[146, 107], [200, 93], [255, 102]].map(([x, y], i) => (
          <circle key={x} r="4" fill="#86efac" cx={anime ? 0 : x} cy={anime ? 0 : y}>
            {anime && (
              <animateMotion path="M110 130 Q200 60 292 122" dur="2.2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="20" y="200" fill="#86efac" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.monte}</text>
      </g>

      {/* Phase 4 : les larmes coulent pour rincer l'œil */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M300 138 Q296 154 300 166 Q304 154 300 138 Z" fill="#7dd3fc">
          {anime && phase === 3 && (
            <animate attributeName="opacity" values="0;1;1;0" dur="1.8s" repeatCount="indefinite" />
          )}
        </path>
        <text x="20" y="200" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.larmes}</text>
      </g>
    </svg>
  );
}
