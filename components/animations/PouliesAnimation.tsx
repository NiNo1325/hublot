'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['roue-corde', 'direction', 'plusieurs', 'echange'] as const;

const LEGENDES = {
  fr: {
    tirer: 'tu tires vers le bas',
    moinsForce: 'moins de force',
    plusCorde: 'mais beaucoup plus de corde à tirer',
  },
  en: {
    tirer: 'you pull downwards',
    moinsForce: 'less force',
    plusCorde: 'but far more rope to pull',
  },
};

/**
 * La phase « échange » montre la contrepartie : la main tire une longue
 * longueur de corde pour un petit déplacement de la charge — le même
 * compromis que le levier et l'engrenage.
 */
export function PouliesAnimation({ activeBeatId, locale }: CardAnimationProps) {
  // Animation statique : chaque phase révèle son groupe par simple opacité.
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Support en haut */}
      <rect x="60" y="34" width="280" height="10" rx="4" fill="#4a3527" />

      {/* Poulie fixe */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="150" cy="66" r="18" fill="#b9c4da" />
        <circle cx="150" cy="66" r="6" fill="#0f1b33" />
        {/* Corde qui passe dessus */}
        <path d="M132 66 v90 M168 66 v40" stroke="#e2e8f0" strokeWidth="3" fill="none" />
        {/* Charge */}
        <rect x="118" y="156" width="30" height="30" rx="4" fill="#64748b" />
      </g>

      {/* Direction changée : on tire vers le bas */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <line x1="168" y1="106" x2="168" y2="150" stroke="#ffb627" strokeWidth="4" />
        <path d="M162 144 L168 160 L174 144 Z" fill="#ffb627" />
        <text x="180" y="130" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.tirer}
        </text>
      </g>

      {/* Plusieurs poulies : moins de force */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {/*
          Un brin amarré à la poutre, et c'est lui qui divise la force.

          Les deux brins montaient à la poulie fixe sans que rien ne soit
          amarré : le câble formait une boucle sans ancrage, donc sans raison
          de porter la charge à deux. La corde part maintenant de la poutre,
          descend sous la poulie mobile, remonte sur la poulie fixe et retombe
          vers la main.
        */}
        <rect x="259" y="38" width="10" height="10" rx="2" fill="#8a6a4e" />
        <circle cx="312" cy="66" r="16" fill="#b9c4da" />
        <circle cx="312" cy="66" r="5" fill="#0f1b33" />
        {/* Poulie mobile, portée par les deux brins */}
        <circle cx="280" cy="150" r="16" fill="#38bdf8" />
        <circle cx="280" cy="150" r="5" fill="#0f1b33" />
        <path
          d="M264 44 V150 A16 16 0 0 0 296 150 V66 A16 16 0 0 1 328 66 V196"
          stroke="#e2e8f0" strokeWidth="3" fill="none"
        />
        <rect x="265" y="166" width="30" height="30" rx="4" fill="#64748b" />
        <text x="230" y="30" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.moinsForce}
        </text>
      </g>

      {/* L'échange : longue corde tirée */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <line x1="328" y1="140" x2="328" y2="204" stroke="#ffb627" strokeWidth="4" strokeDasharray="6 4" />
        <path d="M322 198 L328 214 L334 198 Z" fill="#ffb627" />
        <text x="120" y="230" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.plusCorde}
        </text>
      </g>
    </svg>
  );
}
