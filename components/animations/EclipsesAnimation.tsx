'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = [
  'pourquoi-pas-tous-les-mois',
  'inclinaison',
  'deux-sortes',
  'coincidence',
] as const;

/**
 * L'orbite lunaire est dessinée nettement inclinée par rapport à la ligne
 * Soleil-Terre : la Lune passe visiblement au-dessus de l'alignement. C'est
 * la réponse à la question que pose la carte des phases sans la traiter.
 */
export function EclipsesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const alignee = phase >= 2;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le Soleil, la Terre, et la ligne d'alignement */}
      <circle cx="34" cy="130" r="22" fill="#fde047" />
      <line x1="56" y1="130" x2="386" y2="130" stroke="#334155" strokeWidth="2" strokeDasharray="6 6" />
      <circle cx="212" cy="130" r="20" fill="#1f6f4e" />

      {/* L'orbite inclinée : la Lune manque l'alignement */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <ellipse
          cx="212" cy="130" rx="86" ry="26"
          fill="none" stroke="#475569" strokeWidth="2"
          transform="rotate(-18 212 130)"
        />
        <circle
          cx="126"
          cy={alignee ? 130 : 104}
          r="10"
          fill="#cbd5e1"
          style={{ transition: 'cy 1400ms ease' }}
        />
        <text x="14" y="70" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l’orbite est penchée
        </text>
      </g>

      <text x="14" y="32" fill="#e2e8f0" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
        pas à chaque pleine Lune
      </text>

      {/* L'ombre de la Terre, et la Lune qui rougit dedans */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <path d="M232 114 L360 124 L360 136 L232 146 z" fill="#1e293b" />
        <circle cx="326" cy="130" r="11" fill="#b91c1c">
          {anime && phase === 2 && (
            <animate attributeName="fill-opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="14" y="210" fill="#b91c1c" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          l’ombre rougit la Lune
        </text>
      </g>

      {/* Les deux disques de même taille apparente */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="298" cy="66" r="24" fill="#fde047" />
        <circle cx="298" cy="66" r="22" fill="#0f1b33">
          {anime && phase === 3 && (
            <animate attributeName="cx" values="274;298;322" dur="4s" repeatCount="indefinite" />
          )}
        </circle>
        <text x="14" y="234" fill="#fde047" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          même taille apparente : hasard
        </text>
      </g>
    </svg>
  );
}
