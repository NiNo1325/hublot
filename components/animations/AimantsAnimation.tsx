'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['attraction', 'poles', 'pas-tout', 'boussole'] as const;

export function AimantsAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Aimant en fer à cheval et objets attirés */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <path
          d="M56 122 a34 34 0 0 1 68 0 v46 h-20 v-46 a14 14 0 0 0 -28 0 v46 h-20 z"
          fill="#38bdf8"
        />
        <rect x="56" y="160" width="20" height="14" fill="#fb7185" />
        <rect x="104" y="160" width="20" height="14" fill="#f5f0e6" />
        {[0, 1, 2].map((i) => (
          <rect key={i} x="150" y={112 + i * 22} width="16" height="6" rx="2" fill="#b9c4da">
            {anime && (
              <animate
                attributeName="x" values="164;128"
                dur="1.8s" begin={`${i * 0.4}s`} repeatCount="indefinite"
              />
            )}
          </rect>
        ))}
      </g>

      {/* Deux pôles identiques se repoussent */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <g>
          <rect x="188" y="60" width="44" height="20" fill="#fb7185" />
          <rect x="232" y="60" width="44" height="20" fill="#f5f0e6" />
          <text x="204" y="75" fill="#0f1b33" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">N</text>
          <text x="250" y="75" fill="#0f1b33" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">S</text>
        </g>
        <g>
          <rect x="292" y="60" width="44" height="20" fill="#f5f0e6" />
          <rect x="336" y="60" width="44" height="20" fill="#fb7185" />
          <text x="308" y="75" fill="#0f1b33" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">S</text>
          <text x="354" y="75" fill="#0f1b33" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">N</text>
          {anime && phase === 1 && (
            <animateTransform
              attributeName="transform" type="translate"
              values="0 0; 16 0; 0 0" dur="2s" repeatCount="indefinite"
            />
          )}
        </g>
        <text x="137" y="46" fill="#b9c4da" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          pôles opposés : ils s&apos;attirent
        </text>
      </g>

      {/*
        L'aluminium ne réagit pas : c'est le démenti que l'enfant peut vérifier
        lui-même avec une canette.
      */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="206" y="118" width="30" height="52" rx="6" fill="#94a3b8" />
        <text x="196" y="188" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          aluminium : rien
        </text>
        <rect x="292" y="118" width="30" height="52" rx="6" fill="#64748b" />
        <text x="288" y="188" fill="#34d399" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          fer : attiré
        </text>
        <path d="M276 144 h-28" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
        <path d="M252 138 l-8 6 l8 6" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Boussole : la Terre est un aimant */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="76" cy="196" r="30" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="3" />
        <g>
          <path d="M76 174 l7 22 l-7 8 l-7 -8 z" fill="#fb7185" />
          <path d="M76 218 l7 -22 l-7 -8 l-7 8 z" fill="#f5f0e6" />
          {anime && phase === 3 && (
            <animateTransform
              attributeName="transform" type="rotate"
              values="-24 76 196; 14 76 196; -6 76 196; 2 76 196; 0 76 196"
              dur="3.4s" repeatCount="indefinite"
            />
          )}
        </g>
      </g>
    </svg>
  );
}
