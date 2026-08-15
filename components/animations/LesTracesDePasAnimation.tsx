'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    boue: 'un pas dans la boue molle',
    pierre: 'la boue devient pierre',
    mesure: 'on mesure la distance des pas',
    groupe: 'ils marchaient en groupe',
  },
  en: {
    boue: 'a step in the soft mud',
    pierre: 'the mud turns to stone',
    mesure: 'we measure the steps',
    groupe: 'they walked in a group',
  },
};

/**
 * La même piste de trois empreintes traverse les quatre phases : fraîche
 * dans la boue, puis durcie en pierre, puis mesurée — la trace, jamais l'os,
 * reste le fil de la démonstration.
 */
export function LesTracesDePasAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);
  const empreintes = [90, 190, 290];

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />
      <rect x="0" y="150" width="400" height="90" fill={phase >= 1 ? '#5b6472' : '#6b5343'} style={{ transition: 'fill 900ms ease' }} />

      {/* Phase 1 : un pas dans la boue molle, au bord de l'eau */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <rect x="0" y="150" width="70" height="90" fill="#38bdf8" opacity="0.5" />
        <path d="M180 130 L170 172 M180 130 l-16 10 M180 128 l14 6" stroke="#4a3527" strokeWidth="6" strokeLinecap="round" fill="none">
          {anime && phase === 0 && (
            <animateTransform attributeName="transform" type="translate" values="0 -18;0 0;0 -18" dur="1.6s" repeatCount="indefinite" />
          )}
        </path>
        <ellipse cx="170" cy="176" rx="16" ry="7" fill="#3b2a1d" />
        <text x="14" y="30" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.boue}</text>
      </g>

      {/* Empreintes, présentes dès la phase 1, dont la couleur change avec le temps */}
      {phase >= 0 && (
        <g>
          {empreintes.map((x) => (
            <ellipse key={x} cx={x} cy="176" rx="16" ry="7" fill={phase >= 1 ? '#9ca3af' : '#3b2a1d'} style={{ transition: 'fill 900ms ease' }} />
          ))}
        </g>
      )}

      {/* Phase 2 : la boue durcit en pierre au fil du temps */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <rect x="0" y="150" width="400" height="14" fill="#4a4f5c">
          {anime && phase === 1 && (
            <animate attributeName="width" values="0;400" dur="2.2s" repeatCount="indefinite" />
          )}
        </rect>
        <text x="14" y="30" fill="#9ca3af" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.pierre}</text>
      </g>

      {/* Phase 3 : on mesure la distance entre chaque pas */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <line x1="90" y1="200" x2="190" y2="200" stroke="#fbbf24" strokeWidth="2" />
        <line x1="190" y1="200" x2="290" y2="200" stroke="#fbbf24" strokeWidth="2" />
        {[90, 190, 290].map((x) => (
          <line key={x} x1={x} y1="192" x2={x} y2="208" stroke="#fbbf24" strokeWidth="2" />
        ))}
        <text x="14" y="30" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.mesure}</text>
      </g>

      {/* Phase 4 : plusieurs pistes côte à côte révèlent un groupe */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {[210, 232].map((y, r) => (
          <g key={y}>
            {empreintes.map((x, i) => (
              <ellipse key={x} cx={x - 20 + i * 4} cy={y} rx="10" ry="4.5" fill="#86efac" opacity={0.9 - r * 0.2} />
            ))}
          </g>
        ))}
        <text x="14" y="30" fill="#86efac" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.groupe}</text>
      </g>
    </svg>
  );
}
