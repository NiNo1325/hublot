'use client';

import type { CardAnimationProps } from './registry';
import { miseEnScene } from './shared/phases';

const PHASES = ['invisible', 'partout', 'utiles', 'certains'] as const;

/**
 * Les microbes utiles sont verts et nombreux, les pathogènes rouges et rares :
 * la proportion visuelle porte le message autant que le texte.
 */
export function MicrobesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;

  const utiles = [
    [96, 96], [134, 78], [168, 104], [116, 130], [196, 84], [152, 146],
    [212, 128], [88, 160], [244, 100], [180, 168],
  ];

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Loupe : ils existent, mais hors de portée de l'œil nu */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <circle cx="316" cy="72" r="34" fill="none" stroke="#b9c4da" strokeWidth="5" />
        <line x1="340" y1="96" x2="366" y2="124" stroke="#b9c4da" strokeWidth="7" strokeLinecap="round" />
        <circle cx="308" cy="66" r="6" fill="#a3e635" />
        <circle cx="326" cy="80" r="5" fill="#a3e635" />
        <circle cx="316" cy="56" r="4" fill="#a3e635" />
      </g>

      {/* Silhouette : le microbiote vit surtout à l'intérieur */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <ellipse cx="150" cy="128" rx="86" ry="66" fill="#1b2a4a" stroke="#2c3f66" strokeWidth="2" />
        <text x="102" y="212" fill="#b9c4da" fontSize="12" fontFamily="sans-serif">
          des milliers de milliards en toi
        </text>
      </g>

      {/* Les utiles : majorité écrasante */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {utiles.map(([cx, cy], i) => (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx="9" ry="6" fill="#a3e635" transform={`rotate(${i * 24} ${cx} ${cy})`}>
              {anime && (
                <animate
                  attributeName="cy" values={`${cy};${cy - 5};${cy}`}
                  dur={`${2 + (i % 3) * 0.5}s`} begin={`${i * 0.2}s`} repeatCount="indefinite"
                />
              )}
            </ellipse>
          </g>
        ))}
        <text x="252" y="164" fill="#a3e635" fontSize="12" fontFamily="sans-serif">
          utiles : la grande majorité
        </text>
      </g>

      {/* Les pathogènes : une infime minorité */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <circle cx="286" cy="196" r="8" fill="#fb7185" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={i}
            x1="286" y1="196" x2="286" y2="182"
            stroke="#fb7185" strokeWidth="2.5" strokeLinecap="round"
            transform={`rotate(${i * 60} 286 196)`}
          />
        ))}
        <text x="302" y="200" fill="#fb7185" fontSize="12" fontFamily="sans-serif">
          quelques-uns seulement
        </text>
      </g>
    </svg>
  );
}
