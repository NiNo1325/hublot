'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    eauDessus: 'plus d’eau au-dessus',
    pousse: 'ça pousse partout',
    ecrase: 'ça écraserait un corps mou',
    coque: 'une coque très solide',
  },
  en: {
    eauDessus: 'more water above',
    pousse: 'it pushes everywhere',
    ecrase: 'it would crush a soft body',
    coque: 'a very strong hull',
  },
};

/**
 * Un objet mou descend le long d'une colonne d'eau : des flèches le pressent
 * de tous côtés, de plus en plus fort, jusqu'à l'écraser — puis un sous-marin
 * à coque épaisse résiste là où l'objet mou avait cédé.
 */
export function LaPressionQuiEcraseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const apparition = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0b2039" />

      {/* Règle de profondeur, toujours visible */}
      {[40, 100, 160, 220].map((y) => (
        <line key={y} x1="24" y1={y} x2="34" y2={y} stroke="#475569" strokeWidth="2" />
      ))}
      <line x1="34" y1="20" x2="34" y2="228" stroke="#475569" strokeWidth="2" />

      {/* Phase 1 : chaque mètre ajoute de l'eau au-dessus */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <rect x="34" y="20" width="6" height="60" fill="#38bdf8">
          {anime && <animate attributeName="height" values="10;60;10" dur="2.4s" repeatCount="indefinite" />}
        </rect>
        <circle cx="200" cy="70" r="12" fill="#e0f2fe" />
        <text x="60" y="46" fill="#e0f2fe" fontSize="14" fontFamily={police} style={apparition(0)}>
          {legende.eauDessus}
        </text>
      </g>

      {/* Phase 2 : ça pousse de tous les côtés */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="110" r="14" fill="#e0f2fe" />
        {[0, 90, 180, 270].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = 200 + Math.cos(rad) * 34;
          const y1 = 110 + Math.sin(rad) * 34;
          const x2 = 200 + Math.cos(rad) * 18;
          const y2 = 110 + Math.sin(rad) * 18;
          return (
            <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#60a5fa" strokeWidth="3">
              {anime && (
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              )}
            </line>
          );
        })}
        <text x="60" y="160" fill="#60a5fa" fontSize="14" fontFamily={police} style={apparition(1)}>
          {legende.pousse}
        </text>
      </g>

      {/* Phase 3 : très profond, ça écrase */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="150" rx="20" ry={phase === 2 ? 6 : 14} fill="#fca5a5">
          {anime && phase === 2 && (
            <animate attributeName="ry" values="14;5;14" dur="1.8s" repeatCount="indefinite" />
          )}
        </ellipse>
        <text x="60" y="190" fill="#fca5a5" fontSize="14" fontFamily={police} style={apparition(2)}>
          {legende.ecrase}
        </text>
      </g>

      {/* Phase 4 : un sous-marin à coque épaisse résiste */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <ellipse cx="200" cy="150" rx="30" ry="18" fill="#1e293b" stroke="#93c5fd" strokeWidth="4" />
        <circle cx="200" cy="150" r="6" fill="#93c5fd" />
        <text x="60" y="216" fill="#93c5fd" fontSize="14" fontFamily={police} style={apparition(3)}>
          {legende.coque}
        </text>
      </g>
    </svg>
  );
}
