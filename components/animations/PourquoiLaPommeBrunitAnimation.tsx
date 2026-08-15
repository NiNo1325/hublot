'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    chair: 'la chair touche l’air',
    oxygene: 'l’oxygène les rencontre',
    marron: 'ça devient marron',
    citron: 'le citron la ralentit',
  },
  en: {
    chair: 'the flesh meets the air',
    oxygene: 'oxygen meets them',
    marron: 'it turns brown',
    citron: 'lemon slows it down',
  },
};

/**
 * Couper la pomme met en contact ses enzymes et l'oxygène de l'air, qui
 * réagissent pour produire des pigments bruns : ce n'est pas un signe de
 * pourriture. Le citron ralentit la réaction, sans l'empêcher totalement.
 */
export function PourquoiLaPommeBrunitAnimation({
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
      <rect width="400" height="240" fill="#150f08" />

      {/* La pomme coupée en deux, toujours visible */}
      <path d="M200 70 Q140 70 140 140 Q140 200 200 200 Q260 200 260 140 Q260 70 200 70 Z" fill="#dc2626" />
      <path d="M200 76 Q150 78 150 140 Q150 194 200 194 Z" fill="#fef3c7" />
      <path d="M196 76 q0 -12 -6 -18" stroke="#78350f" strokeWidth="3" fill="none" />

      {/* Phase 1 : la coupe expose la chair à l'air */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <line x1="200" y1="70" x2="200" y2="200" stroke="#fefce8" strokeWidth="3" strokeDasharray="6 4">
          {anime && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.4s" repeatCount="indefinite" />}
        </line>
        <text x="40" y="222" fill="#fefce8" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.chair}</text>
      </g>

      {/* Phase 2 : l'oxygène rencontre les enzymes */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[[168, 110], [178, 150], [188, 130]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#7dd3fc">
            {anime && <animate attributeName="cx" values={`${cx - 30};${cx}`} dur="1.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />}
          </circle>
        ))}
        <circle cx="180" cy="130" r="6" fill="none" stroke="#fbbf24" strokeWidth="2" />
        <text x="34" y="222" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.oxygene}</text>
      </g>

      {/* Phase 3 : ça devient marron */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <path d="M200 76 Q150 78 150 140 Q150 194 200 194 Z" fill="#92400e">
          {anime && phase === 2 && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />}
        </path>
        <text x="86" y="222" fill="#92400e" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.marron}</text>
      </g>

      {/* Phase 4 : le citron ralentit le brunissement */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M200 76 Q150 78 150 140 Q150 194 200 194 Z" fill="#d6a35c" />
        <circle cx="170" cy="100" r="10" fill="#fde047" />
        <path d="M164 100 q6 -8 12 0" stroke="#a16207" strokeWidth="2" fill="none" />
        <text x="56" y="222" fill="#fde047" fontSize="15" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.citron}</text>
      </g>
    </svg>
  );
}
