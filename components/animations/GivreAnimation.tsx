'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['pas-rosee-gelee', 'surface-glacee', 'depot-direct', 'cristaux'] as const;

/** Une fronde de givre : une tige avec des branches obliques. */
function Plume({ x, y, dx, dy }: { x: number; y: number; dx: number; dy: number }) {
  const branches = [];
  for (let t = 0.25; t <= 1; t += 0.25) {
    const bx = x + dx * t;
    const by = y + dy * t;
    branches.push(
      <g key={t}>
        <line x1={bx} y1={by} x2={bx - dy * 0.28 + dx * 0.12} y2={by + dx * 0.28 + dy * 0.12} stroke="#e0f2fe" strokeWidth="1.5" />
        <line x1={bx} y1={by} x2={bx + dy * 0.28 + dx * 0.12} y2={by - dx * 0.28 + dy * 0.12} stroke="#e0f2fe" strokeWidth="1.5" />
      </g>,
    );
  }
  return (
    <g>
      <line x1={x} y1={y} x2={x + dx} y2={y + dy} stroke="#e0f2fe" strokeWidth="2" />
      {branches}
    </g>
  );
}

/**
 * Le givre n'est pas de la rosée gelée : sur une surface sous zéro, la vapeur se
 * dépose directement en glace (déposition), sans goutte, et forme des cristaux
 * en plumes. La goutte gelée est barrée pour opposer l'idée reçue.
 */
export function GivreAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#14243d" />
      {/* la vitre (surface froide) */}
      <rect x="96" y="96" width="208" height="70" rx="4" fill="#1e3a5f" stroke="#3b6ea5" strokeWidth="3" />

      {/* Phase 1 : pas de la rosée gelée (goutte gelée barrée) */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M150 108 q-6 8 0 13 a6 6 0 0 0 0 -13 Z" fill="#7dd3fc" />
        <circle cx="150" cy="118" r="6.5" fill="none" stroke="#bae6fd" strokeWidth="1.5" />
        <line x1="134" y1="100" x2="168" y2="132" stroke="#f43f5e" strokeWidth="4" />
        <text x="20" y="200" fill="#fca5a5" fontSize="15" fontFamily={police}>pas de la rosée gelée</text>
      </g>

      {/* Phase 2 : la surface est sous zéro */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <g transform="translate(330 96)">
          <rect x="-4" y="-16" width="8" height="26" rx="4" fill="#334155" />
          <rect x="-2" y="4" width="4" height="6" fill="#38bdf8" />
          <circle cx="0" cy="14" r="7" fill="#38bdf8" />
        </g>
        <text x="322" y="70" fill="#38bdf8" fontSize="14" fontFamily={police} textAnchor="middle">0°</text>
        <text x="20" y="224" fill="#38bdf8" fontSize="15" fontFamily={police}>surface sous zéro</text>
      </g>

      {/* Phase 3 : la vapeur se dépose en glace, sans goutte */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[[150, 60], [200, 52], [250, 62]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2="96" stroke="#7dd3fc" strokeWidth="1.6" strokeDasharray="3 3" />
            <circle cx={x} cy={y} r="3" fill="#7dd3fc">
              {anime && <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
            </circle>
            {/* petite étoile de glace directement sur la vitre */}
            <g stroke="#e0f2fe" strokeWidth="1.5">
              <line x1={x - 5} y1="104" x2={x + 5} y2="104" />
              <line x1={x} y1="99" x2={x} y2="109" />
              <line x1={x - 4} y1="100" x2={x + 4} y2="108" />
              <line x1={x + 4} y1="100" x2={x - 4} y2="108" />
            </g>
          </g>
        ))}
        <text x="222" y="200" fill="#bae6fd" fontSize="15" fontFamily={police}>vapeur → glace directe</text>
      </g>

      {/* Phase 4 : des cristaux en plumes */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <Plume x={120} y={158} dx={26} dy={-40} />
        <Plume x={175} y={160} dx={-18} dy={-44} />
        <Plume x={210} y={158} dx={30} dy={-38} />
        <Plume x={270} y={160} dx={-24} dy={-42} />
        <text x="228" y="224" fill="#e0f2fe" fontSize="15" fontFamily={police}>des cristaux en plumes</text>
      </g>
    </svg>
  );
}
