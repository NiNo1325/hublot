'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['solide', 'liquide', 'gaz', 'reversible'] as const;

/** Trois grilles de particules : serrées, glissantes, dispersées. */
const RANGEE = [0, 1, 2, 3, 4];

export function EtatsMatiereAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Solide : particules ordonnées qui vibrent sur place */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <rect x="26" y="70" width="94" height="94" rx="8" fill="none" stroke="#2c3f66" strokeWidth="2" />
        {RANGEE.slice(0, 4).map((r) =>
          RANGEE.slice(0, 4).map((c) => (
            <circle key={`${r}-${c}`} cx={44 + c * 22} cy={88 + r * 22} r="7" fill="#7dd3fc">
              {anime && phase === 0 && (
                <animate
                  attributeName="cy"
                  values={`${88 + r * 22};${90 + r * 22};${88 + r * 22}`}
                  dur="0.7s" begin={`${(r + c) * 0.08}s`} repeatCount="indefinite"
                />
              )}
            </circle>
          )),
        )}
        <text x="42" y="186" fill="#7dd3fc" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">solide</text>
      </g>

      {/* Liquide : même densité, mais les particules glissent */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path d="M152 70 v94 h94 v-94" fill="none" stroke="#2c3f66" strokeWidth="2" />
        {RANGEE.slice(0, 3).map((r) =>
          RANGEE.slice(0, 4).map((c) => (
            <circle key={`${r}-${c}`} cx={168 + c * 22} cy={110 + r * 20} r="7" fill="#38bdf8">
              {anime && phase === 1 && (
                <animate
                  attributeName="cx"
                  values={`${168 + c * 22};${176 + c * 22};${164 + c * 22};${168 + c * 22}`}
                  dur="2.4s" begin={`${(r + c) * 0.15}s`} repeatCount="indefinite"
                />
              )}
            </circle>
          )),
        )}
        <text x="168" y="186" fill="#38bdf8" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">liquide</text>
      </g>

      {/* Gaz : dispersé, invisible — le nuage blanc n'en est pas */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <rect x="276" y="70" width="100" height="94" rx="8" fill="none" stroke="#2c3f66" strokeWidth="2" />
        {[[294, 92], [340, 84], [364, 118], [302, 138], [332, 152], [356, 96]].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" fill="#bae6fd" opacity="0.85">
            {anime && phase === 2 && (
              <animate
                attributeName="cy" values={`${cy};${cy - 22};${cy + 14};${cy}`}
                dur="3.2s" begin={`${i * 0.3}s`} repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        <text x="256" y="186" fill="#bae6fd" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">gaz (invisible)</text>
      </g>

      {/* Réversibilité : rien ne se perd */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M126 210 h146" stroke="#ffb627" strokeWidth="3" strokeLinecap="round" />
        <path d="M266 204 l8 6 l-8 6" fill="none" stroke="#ffb627" strokeWidth="3" strokeLinecap="round" />
        <path d="M132 204 l-8 6 l8 6" fill="none" stroke="#ffb627" strokeWidth="3" strokeLinecap="round" />
        <text x="128" y="232" fill="#ffb627" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          rien ne se perd, tout revient
        </text>
      </g>
    </svg>
  );
}
