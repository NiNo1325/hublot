'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    chaude: 'eau très chaude jaillit',
    mineraux: 'pleine de minéraux',
    bacteries: 'des bactéries s’en nourrissent',
    crabes: 'crabes et vers arrivent',
  },
  en: {
    chaude: 'scalding water gushes out',
    mineraux: 'full of minerals',
    bacteries: 'bacteria feed on it',
    crabes: 'crabs and worms move in',
  },
};

/**
 * Une cheminée hydrothermale crache une eau brûlante chargée de minéraux ;
 * des bactéries s'en nourrissent sans lumière, puis crabes et vers tubicoles
 * s'installent tout autour — la vie sans Soleil.
 */
export function LesSourcesChaudesDuFondAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const apparition = (i: number) => ({ opacity: phase === i ? 1 : 0, transition: 'opacity 300ms ease' });
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#060a14" />

      {/* Fond marin et cheminée, toujours visibles */}
      <path d="M0 210 h400 v30 H0 Z" fill="#2a1b14" />
      <path d="M186 210 L192 130 L208 130 L214 210 Z" fill="#3f2a1e" />

      {/* Phase 1 : de l'eau très chaude jaillit */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M198 130 Q184 90 198 50" stroke="#f97316" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.85">
          {anime && (
            <animate attributeName="d" values="M198 130 Q184 90 198 50;M198 130 Q212 90 198 50;M198 130 Q184 90 198 50" dur="2.2s" repeatCount="indefinite" />
          )}
        </path>
        <text x="16" y="40" fill="#fb923c" fontSize="14" fontFamily={police} style={apparition(0)}>
          {legende.chaude}
        </text>
      </g>

      {/* Phase 2 : elle est chargée de minéraux */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        {[190, 202, 210, 196].map((x, i) => (
          <circle key={x} cx={x} cy="120" r="3" fill="#fde68a">
            {anime && (
              <animate attributeName="cy" values="128;46" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="16" y="64" fill="#fde68a" fontSize="14" fontFamily={police} style={apparition(1)}>
          {legende.mineraux}
        </text>
      </g>

      {/* Phase 3 : des bactéries s'en nourrissent, sans lumière */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[
          [150, 190],
          [170, 200],
          [230, 196],
          [250, 188],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="4" fill="#a3e635" opacity="0.85" />
        ))}
        <text x="16" y="150" fill="#a3e635" fontSize="14" fontFamily={police} style={apparition(2)}>
          {legende.bacteries}
        </text>
      </g>

      {/* Phase 4 : crabes et vers tubicoles s'installent tout autour */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        {dejaVu(3) && (
          <>
            {/*
              Un crabe a des pinces. L’ellipse à deux pattes ne se distinguait
              pas des vers tubicoles voisins, qui eux étaient parfaitement
              lisibles.
            */}
            <g transform="translate(180 206)">
              <ellipse cx="0" cy="0" rx="12" ry="7" fill="#fb7185" />
              <path
                d="M-9 4 l-8 9 M-4 7 l-4 10 M4 7 l4 10 M9 4 l8 9"
                stroke="#fb7185" strokeWidth="2" fill="none" strokeLinecap="round"
              />
              <path
                d="M-11 -3 l-9 -7 M-20 -10 l-9 -3 M-20 -10 l-7 5 M11 -3 l9 -7 M20 -10 l9 -3 M20 -10 l7 5"
                stroke="#fb7185" strokeWidth="2.5" fill="none" strokeLinecap="round"
              />
              <circle cx="-4" cy="-8" r="1.8" fill="#0c2340" />
              <circle cx="4" cy="-8" r="1.8" fill="#0c2340" />
            </g>
            {[250, 268, 286].map((x, i) => (
              <path
                key={x}
                d={`M${x} 210 Q${x + 4} 186 ${x} 168`}
                stroke="#fca5a5"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              >
                {anime && (
                  <animate attributeName="d" values={`M${x} 210 Q${x + 4} 186 ${x} 168;M${x} 210 Q${x - 4} 186 ${x} 168;M${x} 210 Q${x + 4} 186 ${x} 168`} dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
                )}
              </path>
            ))}
          </>
        )}
        <text x="16" y="200" fill="#fca5a5" fontSize="13" fontFamily={police} style={apparition(3)}>
          {legende.crabes}
        </text>
      </g>
    </svg>
  );
}
