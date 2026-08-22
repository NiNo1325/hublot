'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['pedale', 'adherence', 'bloquer', 'carre-vitesse'] as const;

const LEGENDES = {
  fr: {
    freins: 'les freins chauffent',
    accroche: 'tout dépend de l’accroche',
    roulante: 'roue qui roule',
    bloquee: 'roue bloquée : plus loin',
    cinquante: '50 km/h',
    cent: '100 km/h : ×4',
  },
  en: {
    freins: 'the brakes heat up',
    accroche: 'it all rests on the grip',
    roulante: 'rolling wheel',
    bloquee: 'locked wheel: further',
    cinquante: '50 km/h',
    cent: '100 km/h: ×4',
  },
};

/**
 * Les deux barres du bas sont à l'échelle : celle de cent kilomètres par heure
 * fait exactement quatre fois la longueur de celle de cinquante. Elles partent
 * de x = 160 pour laisser la place à leur étiquette, que la plus longue
 * recouvrait. C'est le
 * rapport dessiné qui corrige l'intuition du « deux fois plus vite, deux fois
 * plus loin ».
 */
export function FreinageAnimation({
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

      {/* La roue et son frein, qui convertissent le mouvement en chaleur */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="316" cy="56" r="34" fill="none" stroke="#94a3b8" strokeWidth="8" />
        <circle cx="316" cy="56" r="14" fill="#475569" />
        <rect x="294" y="20" width="8" height="16" rx="2" fill="#f87171" />
        <rect x="330" y="20" width="8" height="16" rx="2" fill="#f87171" />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${356 + i * 10} 46 q5 6 0 12`} fill="none" stroke="#fb923c" strokeWidth="2">
            {anime && (
              <animate attributeName="opacity" values="0.2;1;0.2" dur="1.4s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </path>
        ))}
        <text x="14" y="32" fill="#fb923c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.freins}
        </text>
      </g>

      {/* L'adhérence entre le pneu et le sol : la vraie limite */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <line x1="270" y1="94" x2="366" y2="94" stroke="#78716c" strokeWidth="4" />
        {[288, 310, 332].map((x, i) => (
          <g key={x}>
            <line x1={x} y1="88" x2={x} y2="76" stroke="#4ade80" strokeWidth="3" />
            <path d={`M${x - 5} 80 L${x} 70 L${x + 5} 80 Z`} fill="#4ade80">
              {anime && (
                <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              )}
            </path>
          </g>
        ))}
        <text x="14" y="106" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.accroche}
        </text>
      </g>

      {/* La roue bloquée glisse : traces au sol, et plus de direction */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {/*
          Deux distances d'arrêt, et non des traces seules.

          Les traces de glissement disaient qu'il y a glissement, pas que la
          distance d'arrêt s'allonge : la surprise annoncée par le texte ne
          tenait qu'à la légende. Les deux barres partent du même trait et
          celle de la roue bloquée va plus loin ; en pointillé, parce qu'elle
          glisse.
        */}
        <line x1="218" y1="108" x2="218" y2="158" stroke="#94a3b8" strokeWidth="2" strokeDasharray="3 3" />
        <rect x="224" y="118" width="90" height="10" rx="3" fill="#4ade80" />
        <line x1="224" y1="145" x2="368" y2="145" stroke="#f87171" strokeWidth="10" strokeDasharray="14 6" />
        <text x="14" y="127" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.roulante}
        </text>
        <text x="14" y="150" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.bloquee}
        </text>
      </g>

      {/* Les distances d'arrêt, au carré de la vitesse */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <rect x="160" y="176" width="45" height="14" rx="3" fill="#7dd3fc" />
        <text x="14" y="188" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.cinquante}
        </text>
        <rect x="160" y="206" width="180" height="14" rx="3" fill="#f87171">
          {anime && phase === 3 && (
            <animate attributeName="width" values="45;180" dur="1.8s" fill="freeze" />
          )}
        </rect>
        <text x="14" y="218" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.cent}
        </text>
      </g>
    </svg>
  );
}
