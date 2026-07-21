'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['secret', 'essais', 'longueur', 'un-par-porte'] as const;

/** Portes du dernier temps, chacune avec sa propre clé. */
const PORTES = [
  { x: 232, couleur: '#38bdf8' },
  { x: 288, couleur: '#4ade80' },
  { x: 344, couleur: '#f472b6' },
];

/**
 * Les deux barres sont l'argument entier de la carte : le mot de passe tordu
 * est court, la suite de mots ordinaires est longue. Leur rapport visuel dit
 * ce que l'intuition refuse — la longueur protège, pas la ruse.
 */
export function MotDePasseAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le cadenas : le secret qui ferme la porte */}
      <g>
        <path d="M28 36 a12 12 0 0 1 24 0 l0 8 l-7 0 l0 -8 a5 5 0 0 0 -10 0 l0 8 l-7 0 z" fill="#94a3b8" />
        <rect x="22" y="44" width="36" height="26" rx="4" fill="#facc15" />
        <circle cx="40" cy="57" r="4" fill="#78350f" />
      </g>

      {/* La machine essaie, en commençant par les mots de passe connus */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={296 + (i % 3) * 32} y={26 + Math.floor(i / 3) * 20} width="26" height="12" rx="2" fill="#f87171">
            {anime && (
              <animate attributeName="opacity" values="1;0.15;1" dur="0.7s" begin={`${i * 0.13}s`} repeatCount="indefinite" />
            )}
          </rect>
        ))}
        <text x="76" y="44" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          des milliards d’essais
        </text>
      </g>

      {/* Court et tordu contre long et ordinaire */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="14" y="92" fill="#fca5a5" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          P@ssw0rd!
        </text>
        <rect x="14" y="100" width="30" height="14" rx="3" fill="#f87171" />

        <text x="14" y="148" fill="#86efac" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          chat lune bateau pomme
        </text>
        <rect x="14" y="156" width="330" height="14" rx="3" fill="#4ade80">
          {anime && phase === 2 && (
            <animate attributeName="width" values="30;330" dur="1.6s" fill="freeze" />
          )}
        </rect>
      </g>

      {/* Une clé différente par porte */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        {PORTES.map((porte, i) => (
          <g key={porte.x}>
            <rect x={porte.x} y="184" width="40" height="44" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <circle cx={porte.x + 30} cy="208" r="3" fill="#94a3b8" />
            <rect x={porte.x + 8} y="196" width="14" height="7" rx="2" fill={porte.couleur}>
              {anime && (
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              )}
            </rect>
          </g>
        ))}
        <text x="14" y="206" fill="#cbd5e1" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          un secret par porte
        </text>
      </g>
    </svg>
  );
}
