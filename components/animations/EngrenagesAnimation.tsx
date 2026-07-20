'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['dents', 'sens', 'vitesse', 'echange'] as const;

/** Roue dentée générée : rayon, nombre de dents et sens de rotation. */
function Roue({
  cx, cy, rayon, dents, couleur, duree, inverse, anime,
}: {
  cx: number; cy: number; rayon: number; dents: number;
  couleur: string; duree: number; inverse: boolean; anime: boolean;
}) {
  const hauteurDent = rayon * 0.22;
  return (
    <g>
      <g>
        {Array.from({ length: dents }).map((_, i) => (
          <rect
            key={i}
            x={cx - rayon * 0.09}
            y={cy - rayon - hauteurDent}
            width={rayon * 0.18}
            height={hauteurDent + 2}
            rx="1.5"
            fill={couleur}
            transform={`rotate(${(360 / dents) * i} ${cx} ${cy})`}
          />
        ))}
        <circle cx={cx} cy={cy} r={rayon} fill={couleur} />
        <circle cx={cx} cy={cy} r={rayon * 0.32} fill="#0f1b33" />
        {/* Repère pour rendre la rotation lisible. */}
        <rect x={cx - 2} y={cy - rayon * 0.9} width="4" height={rayon * 0.5} fill="#0f1b33" />
        {anime && (
          <animateTransform
            attributeName="transform" type="rotate"
            from={`0 ${cx} ${cy}`} to={`${inverse ? -360 : 360} ${cx} ${cy}`}
            dur={`${duree}s`} repeatCount="indefinite"
          />
        )}
      </g>
    </g>
  );
}

export function EngrenagesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Petit pignon : 10 dents, rapide */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <Roue cx={126} cy={120} rayon={38} dents={10} couleur="#fb923c" duree={3} inverse={false} anime={anime} />
        <text x="98" y="192" fill="#fb923c" fontSize="12" fontFamily="sans-serif">10 dents</text>
      </g>

      {/* Grande roue : 30 dents, trois fois plus lente, sens inverse */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <Roue cx={248} cy={120} rayon={72} dents={30} couleur="#38bdf8" duree={9} inverse anime={anime} />
        <text x="222" y="212" fill="#38bdf8" fontSize="12" fontFamily="sans-serif">30 dents</text>
      </g>

      {/* Le rapport */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="20" y="34" fill="#b9c4da" fontSize="13" fontFamily="sans-serif">
          3 tours du petit = 1 tour du grand
        </text>
      </g>

      {/* Le compromis, identique à celui du levier */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="20" y="58" fill="#ffb627" fontSize="12" fontFamily="sans-serif">
          3 fois plus lent, 3 fois plus fort
        </text>
      </g>
    </svg>
  );
}
