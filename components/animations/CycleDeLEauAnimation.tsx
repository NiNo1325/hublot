'use client';

import type { CardAnimationProps } from './registry';

/**
 * Les quatre phases correspondent aux `id` de beats de la carte. Chaque phase
 * met en avant les éléments qu'elle concerne et estompe les autres, de sorte
 * que le regard de l'enfant suit ce que la voix raconte.
 */
const PHASES = ['evaporation', 'condensation', 'precipitation', 'ruissellement'] as const;
type Phase = (typeof PHASES)[number];

function indexDePhase(beatId: string | null): number {
  const i = PHASES.indexOf(beatId as Phase);
  return i === -1 ? -1 : i;
}

export function CycleDeLEauAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const phase = indexDePhase(activeBeatId);
  const auRepos = phase === -1;

  /** Opacité d'un élément selon qu'il appartient ou non à la phase courante. */
  const miseEnAvant = (indexPhase: number) => {
    if (auRepos) return 0.55;
    return phase === indexPhase ? 1 : 0.2;
  };

  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg
      viewBox="0 0 400 240"
      className="h-full w-full"
      aria-hidden="true"
      role="presentation"
    >
      <defs>
        <linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1b2a4a" />
          <stop offset="100%" stopColor="#0f1b33" />
        </linearGradient>
        <linearGradient id="mer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
      </defs>

      <rect width="400" height="240" fill="url(#ciel)" />

      {/* Soleil — moteur de l'évaporation */}
      <g
        style={{ opacity: miseEnAvant(0), transition: 'opacity 600ms ease' }}
        transform="translate(58 54)"
      >
        <circle r="26" fill="#ffb627" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            y1="-34"
            x2="0"
            y2="-44"
            stroke="#ffb627"
            strokeWidth="4"
            strokeLinecap="round"
            transform={`rotate(${i * 45})`}
          />
        ))}
        {anime && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0"
            to="360"
            dur="24s"
            repeatCount="indefinite"
            additive="sum"
          />
        )}
      </g>

      {/* Vapeur qui monte de la mer */}
      <g style={{ opacity: miseEnAvant(0), transition: 'opacity 600ms ease' }}>
        {[130, 170, 210].map((x, i) => (
          <circle key={x} cx={x} cy="186" r="5" fill="#7dd3fc">
            {anime && (
              <>
                <animate
                  attributeName="cy"
                  values="190;96"
                  dur="3.2s"
                  begin={`${i * 0.7}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0;0.9;0"
                  dur="3.2s"
                  begin={`${i * 0.7}s`}
                  repeatCount="indefinite"
                />
              </>
            )}
          </circle>
        ))}
      </g>

      {/* Nuage — la condensation le fait grossir */}
      <g
        style={{
          opacity: phase >= 1 || auRepos ? miseEnAvant(1) : 0.15,
          transform: `scale(${phase >= 1 ? 1 : 0.82})`,
          transformOrigin: '250px 88px',
          transition: 'opacity 600ms ease, transform 900ms ease',
        }}
      >
        <circle cx="220" cy="92" r="24" fill="#e2e8f0" />
        <circle cx="252" cy="80" r="32" fill="#f1f5f9" />
        <circle cx="288" cy="94" r="22" fill="#e2e8f0" />
        <rect x="216" y="92" width="76" height="22" rx="11" fill="#e2e8f0" />
      </g>

      {/* Pluie */}
      <g style={{ opacity: miseEnAvant(2), transition: 'opacity 600ms ease' }}>
        {[228, 252, 276].map((x, i) => (
          <path
            key={x}
            d={`M${x} 122 q4 7 0 11 q-4 -4 0 -11 z`}
            fill="#7dd3fc"
            transform="scale(1.6) translate(0 0)"
            style={{ transformOrigin: `${x}px 122px`, transformBox: 'fill-box' }}
          >
            {anime && (
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 0 56"
                dur="1.5s"
                begin={`${i * 0.35}s`}
                repeatCount="indefinite"
              />
            )}
          </path>
        ))}
      </g>

      {/* Ruissellement : la colline ramène l'eau vers la mer */}
      <g style={{ opacity: miseEnAvant(3), transition: 'opacity 600ms ease' }}>
        <path d="M400 192 L400 118 Q340 148 300 192 Z" fill="#1f6f4e" />
        <path
          d="M366 136 Q350 166 330 192"
          stroke="#7dd3fc"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={anime ? '10 12' : undefined}
        >
          {anime && (
            <animate
              attributeName="stroke-dashoffset"
              values="44;0"
              dur="1.4s"
              repeatCount="indefinite"
            />
          )}
        </path>
      </g>

      {/* Mer */}
      <path d="M0 190 h400 v50 H0 Z" fill="url(#mer)" />
      <path
        d="M0 190 q25 -10 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 v10 H0 Z"
        fill="#7dd3fc"
        opacity="0.7"
      />
    </svg>
  );
}
