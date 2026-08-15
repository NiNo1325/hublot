'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    roche: 'la roche garde la trace des plumes',
    grains: 'de minuscules grains de couleur',
    fossile: 'fossile',
    oiseau: 'oiseau d’aujourd’hui',
    comparaison: 'même grain, même couleur',
    couleurs: 'rayé de roux et de blanc',
  },
  en: {
    roche: 'the rock keeps the trace of feathers',
    grains: 'tiny grains of colour',
    fossile: 'fossil',
    oiseau: 'bird of today',
    comparaison: 'same grain, same colour',
    couleurs: 'striped ginger and white',
  },
};

/**
 * Les mêmes petits grains (mélanosomes) traversent les phases : d'abord vus
 * au microscope sans couleur connue, puis comparés à ceux d'un oiseau actuel,
 * avant de livrer enfin la couleur du dinosaure.
 */
export function DesDinosauresAPlumesAnimation({
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

      {/* Phase 1 : la roche a conservé la trace fine des plumes */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <rect x="60" y="70" width="280" height="100" rx="6" fill="#3f3a55" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${100 + i * 45} 90 q10 30 0 60`} stroke="#c8a97e" strokeWidth="2" fill="none" opacity="0.8" />
        ))}
        <text x="60" y="54" fill="#c8a97e" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.roche}</text>
      </g>

      {/* Phase 2 : au microscope, de minuscules grains apparaissent */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <circle cx="200" cy="118" r="66" fill="#1c2440" stroke="#e8ddc8" strokeWidth="4" />
        {[
          [180, 100], [204, 96], [222, 112], [186, 128], [212, 138], [168, 118],
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="6" ry="9" fill="#a8a29e">
            {anime && (
              <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            )}
          </ellipse>
        ))}
        <text x="30" y="30" fill="#a8a29e" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.grains}</text>
      </g>

      {/* Phase 3 : on les compare à ceux des oiseaux actuels */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <g transform="translate(90 118)">
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#a8a29e" />
          <ellipse cx="0" cy="10" rx="5" ry="8" fill="#a8a29e" />
          <text x="-34" y="46" fill="#a8a29e" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.fossile}</text>
        </g>
        <path d="M130 118 L270 118" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 5">
          {anime && (
            <animate attributeName="stroke-dashoffset" values="0;18" dur="1s" repeatCount="indefinite" />
          )}
        </path>
        <g transform="translate(310 118)">
          <ellipse cx="0" cy="-10" rx="5" ry="8" fill="#f97316" />
          <ellipse cx="0" cy="10" rx="5" ry="8" fill="#f97316" />
          <text x="-46" y="46" fill="#f97316" fontSize="12" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.oiseau}</text>
        </g>
        <text x="30" y="30" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.comparaison}</text>
      </g>

      {/* Phase 4 : on retrouve les vraies couleurs du dinosaure */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M140 170 Q150 110 210 100 Q250 96 270 120 Q280 140 260 156 Q220 176 170 172 Z" fill="#f97316" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${160 + i * 26} 108 q-4 32 -2 58`} stroke="#fff7ed" strokeWidth="6" opacity="0.85" />
        ))}
        <text x="30" y="30" fill="#f97316" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.couleurs}</text>
      </g>
    </svg>
  );
}
