'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

/**
 * Le Soleil, allumé dès le début, s'éteint peu à peu avec la poussière : sa
 * disparition progressive est le fil conducteur qui relie l'impact à la fin
 * de la chaîne alimentaire, jusqu'au petit animal caché qui, lui, s'en passe.
 */
export function LeJourDeLasteroideAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le sol, permanent */}
      <rect x="0" y="196" width="400" height="44" fill="#3b2a1d" />

      {/* Le Soleil, qui s'éteint avec la poussière (phases 2 à 4) */}
      <circle
        cx="330" cy="50" r="26"
        fill="#fbbf24"
        style={{ opacity: phase >= 1 ? 0.25 : 1, transition: 'opacity 1200ms ease' }}
      />

      {/* Phase 1 : l'astéroïde percute la Terre */}
      <g style={{ opacity: opacite(0), transition: 'opacity 400ms ease' }}>
        <circle cx="70" cy="30" r="10" fill="#a3a3a3">
          {anime && phase === 0 && (
            <animateTransform attributeName="transform" type="translate" values="0 0; 190 168" dur="1.1s" begin="0s" fill="freeze" />
          )}
        </circle>
        {anime && phase === 0 && (
          <circle cx="260" cy="196" r="4" fill="#fed7aa">
            <animate attributeName="r" values="4;70" dur="0.6s" begin="1.05s" fill="freeze" />
            <animate attributeName="opacity" values="0.9;0" dur="0.6s" begin="1.05s" fill="freeze" />
          </circle>
        )}
        <text x="14" y="30" fill="#f87171" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>un astéroïde percute la Terre</text>
      </g>

      {/* Phase 2 : la poussière cache le Soleil */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3].map((i) => (
          <ellipse key={i} cx={80 + i * 70} cy={196 - i * 8} rx="46" ry="16" fill="#6b5343" opacity="0.8">
            {anime && phase === 1 && (
              <animate attributeName="cy" values={`${210 - i * 8};${150 - i * 10}`} dur="2.4s" begin={`${i * 0.2}s`} fill="freeze" />
            )}
          </ellipse>
        ))}
        <text x="14" y="30" fill="#a8a29e" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>la poussière voile le ciel</text>
      </g>

      {/* Phase 3 : sans lumière, les plantes et les grands animaux dépérissent */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path d="M64 196 L64 150 M64 160 l-16 -14 M64 154 l16 -12" stroke="#78350f" strokeWidth="4" fill="none" strokeLinecap="round" />
        <g stroke="#57534e" strokeWidth="3" fill="none" opacity="0.7">
          <path d="M180 196 q30 -50 20 -84 q-14 8 -18 30 M200 112 q18 -10 26 -30" />
        </g>
        <text x="14" y="228" fill="#78350f" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>plus rien ne pousse, plus rien à manger</text>
      </g>

      {/* Phase 4 : les petits animaux cachés survivent */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M320 196 q10 -26 40 -26 l0 26 Z" fill="#3b2a1d" />
        <circle cx="342" cy="188" r="7" fill="#c8a97e" />
        <circle cx="345" cy="186" r="1.4" fill="#0f1b33" />
        <text x="150" y="228" fill="#c8a97e" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>les plus petits survivent, cachés</text>
      </g>
    </svg>
  );
}
