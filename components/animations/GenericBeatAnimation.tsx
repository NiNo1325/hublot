'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

/*
  Animation générique, pilotée par les quatre beats standard des nouvelles
  cartes (`un`, `deux`, `trois`, `quatre`). Le sujet (emoji) flotte au centre,
  cerclé d'une lueur à la teinte du domaine ; quatre pas s'allument au fil de la
  narration. Chaque carte se distingue par son emoji et sa couleur.

  C'est une base commune, volontairement sobre : elle donne à chaque nouvelle
  carte une illustration vivante et synchronisée, en attendant d'éventuelles
  animations sur mesure comme celles des cartes historiques.
*/
const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

interface GenericBeatAnimationProps extends CardAnimationProps {
  emoji: string;
  accent: string;
}

export function GenericBeatAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  emoji,
  accent,
}: GenericBeatAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Lueur du domaine, qui respire pendant la lecture. */}
      <circle cx="200" cy="106" r="72" fill={accent} opacity="0.16">
        {anime && (
          <animate attributeName="r" values="68;78;68" dur="3.4s" repeatCount="indefinite" />
        )}
      </circle>

      {/* Quatre repères en couronne : chacun s'installe à son beat et reste. */}
      {PHASES.map((_, i) => {
        const angle = (i / PHASES.length) * Math.PI * 2 - Math.PI / 2;
        const cx = 200 + Math.cos(angle) * 104;
        const cy = 106 + Math.sin(angle) * 66;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={phase === i ? 9 : 6}
            fill={accent}
            style={{
              opacity: dejaVu(i) ? (phase === i ? 1 : 0.35) : 0.08,
              transition: 'opacity 500ms ease, r 300ms ease',
            }}
          />
        );
      })}

      {/* Le sujet de la carte, qui flotte doucement. */}
      <text x="200" y="112" textAnchor="middle" dominantBaseline="central" fontSize="76">
        {emoji}
        {anime && (
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 -7; 0 0"
            dur="3.2s"
            repeatCount="indefinite"
          />
        )}
      </text>

      {/* Progression en quatre pas, synchronisée avec la narration. */}
      <g transform="translate(200 206)">
        {PHASES.map((_, i) => (
          <circle
            key={i}
            cx={(i - 1.5) * 28}
            cy="0"
            r="6"
            fill={accent}
            style={{ opacity: opacite(i), transition: 'opacity 400ms ease' }}
          />
        ))}
      </g>
    </svg>
  );
}
