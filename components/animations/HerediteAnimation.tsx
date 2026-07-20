'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['notice', 'moitie', 'combinaison', 'unique'] as const;

/**
 * Les jetons hérités gardent leur couleur d'origine au lieu de se fondre en
 * une teinte moyenne : l'hérédité est particulaire, et c'est ce qui permet à
 * un caractère de sauter une génération.
 */
export function HerediteAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La double hélice */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {Array.from({ length: 9 }).map((_, i) => {
          const y = 40 + i * 20;
          const dx = Math.sin(i * 0.7) * 22;
          return (
            <g key={i}>
              <line x1={54 - dx} y1={y} x2={54 + dx} y2={y} stroke="#a5b4fc" strokeWidth="3" />
              <circle cx={54 - dx} cy={y} r="4" fill="#c4b5fd" />
              <circle cx={54 + dx} cy={y} r="4" fill="#f472b6" />
            </g>
          );
        })}
        <text x="22" y="232" fill="#a5b4fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">ton ADN</text>
      </g>

      {/* Les deux parents */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[
          { x: 160, couleur: '#38bdf8', label: 'parent 1' },
          { x: 300, couleur: '#fb7185', label: 'parent 2' },
        ].map(({ x, couleur, label }) => (
          <g key={x}>
            <circle cx={x} cy="52" r="20" fill={couleur} opacity="0.9" />
            <text x={x - 26} y="88" fill={couleur} fontSize="16" fontFamily="var(--font-atkinson), sans-serif">{label}</text>
          </g>
        ))}
        <line x1="160" y1="76" x2="230" y2="128" stroke="#2c3f66" strokeWidth="2.5" />
        <line x1="300" y1="76" x2="230" y2="128" stroke="#2c3f66" strokeWidth="2.5" />
      </g>

      {/* L'enfant : des jetons entiers, pas un mélange */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <circle cx="230" cy="150" r="24" fill="#1b2a4a" stroke="#b9c4da" strokeWidth="2.5" />
        {[
          [218, 142, '#38bdf8'], [238, 142, '#fb7185'],
          [218, 158, '#fb7185'], [238, 158, '#38bdf8'],
        ].map(([cx, cy, c], i) => (
          <circle key={i} cx={cx as number} cy={cy as number} r="6" fill={c as string}>
            {anime && phase === 2 && (
              <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${i * 0.25}s`} fill="freeze" />
            )}
          </circle>
        ))}
        <text x="163" y="154" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          moitié-moitié, sans mélange
        </text>
      </g>

      {/* Unicité */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="112" y="216" fill="#c4b5fd" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          une combinaison unique au monde
        </text>
      </g>
    </svg>
  );
}
