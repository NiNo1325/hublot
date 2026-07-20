'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['lancer', 'memoire', 'chance-egale', 'beaucoup'] as const;

/** Cinq piles d'affilée : la série qui déclenche l'erreur du parieur. */
const SERIE = ['P', 'P', 'P', 'P', 'P'];

export function HasardAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* La pièce */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <g style={{
          transformOrigin: '68px 76px',
          animation: anime && phase === 0 ? 'lancer-piece 1.4s ease-in-out infinite' : undefined,
        }}>
          <circle cx="68" cy="76" r="26" fill="#ffb627" />
          <text x="60" y="84" fill="#0f1b33" fontSize="20" fontFamily="var(--font-atkinson), monospace">P</text>
        </g>
      </g>

      {/* La série passée */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {SERIE.map((f, i) => (
          <g key={i}>
            <circle cx={136 + i * 42} cy="76" r="17" fill="#ffb627" opacity="0.55" />
            <text x={130 + i * 42} y="82" fill="#0f1b33" fontSize="18" fontFamily="var(--font-atkinson), monospace">{f}</text>
          </g>
        ))}
        <text x="129" y="122" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          cinq piles de suite… et alors ?
        </text>
      </g>

      {/* Le lancer suivant : toujours moitié-moitié */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <circle cx="346" cy="76" r="20" fill="none" stroke="#f5f0e6" strokeWidth="2.5" strokeDasharray="5 5" />
        <text x="336" y="83" fill="#f5f0e6" fontSize="18" fontFamily="var(--font-atkinson), monospace">?</text>
        <rect x="150" y="146" width="100" height="22" rx="4" fill="#38bdf8" />
        <rect x="250" y="146" width="100" height="22" rx="4" fill="#fb7185" />
        <text x="176" y="162" fill="#0f1b33" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">pile 50 %</text>
        <text x="272" y="162" fill="#0f1b33" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">face 50 %</text>
        <text x="150" y="190" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          la pièce n&apos;a pas de mémoire
        </text>
      </g>

      {/* Beaucoup de lancers : la fréquence converge */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <line x1="30" y1="212" x2="370" y2="212" stroke="#2c3f66" strokeWidth="2" />
        <line x1="30" y1="196" x2="370" y2="196" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" />
        <path
          d="M30 172 L70 224 L110 186 L150 214 L190 192 L230 202 L270 194 L310 198 L350 196 L370 196"
          fill="none" stroke="#34d399" strokeWidth="2.5"
        >
          {anime && phase === 3 && (
            <animate attributeName="stroke-dasharray" values="0 400; 400 0" dur="2.4s" fill="freeze" />
          )}
        </path>
        <text x="292" y="188" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">50 %</text>
      </g>
    </svg>
  );
}
