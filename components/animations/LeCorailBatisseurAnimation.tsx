'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    animal: 'un tout petit animal',
    coque: 'il fabrique une coque',
    millions: 'des millions collés',
    recif: 'un récif plein de vie',
  },
  en: {
    animal: 'a tiny little animal',
    coque: 'it builds a hard case',
    millions: 'millions stuck together',
    recif: 'a reef full of life',
  },
};

/**
 * Zoom qui part d'un unique polype (un animal, pas une roche), lui voit
 * pousser sa coque calcaire, puis se multiplie en colonie, jusqu'au récif
 * entier qui abrite d'autres animaux marins.
 */
export function LeCorailBatisseurAnimation({
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

  const polype = (cx: number, cy: number, scale: number, key: number) => (
    <g key={key} transform={`translate(${cx} ${cy}) scale(${scale})`}>
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1="0"
            y1="0"
            x2={Math.cos(rad) * 14}
            y2={Math.sin(rad) * 14 - 4}
            stroke="#fb7185"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
      <circle cx="0" cy="0" r="6" fill="#fda4af" />
    </g>
  );

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0e3b52" />

      {/* Phase 1 : le corail est un tout petit animal */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <g>
          {polype(200, 110, 1.6, 0)}
          {anime && (
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.08;1"
              dur="2.4s"
              repeatCount="indefinite"
            />
          )}
        </g>
        <text x="120" y="196" fill="#fda4af" fontSize="15" fontFamily={police} style={apparition(0)}>
          {legende.animal}
        </text>
      </g>

      {/* Phase 2 : il fabrique une coque dure autour de lui */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <path d="M182 118 L182 100 Q200 88 218 100 L218 118 Z" fill="#fef3c7" opacity="0.85" />
        {polype(200, 106, 1.2, 1)}
        <text x="120" y="196" fill="#fef3c7" fontSize="15" fontFamily={police} style={apparition(1)}>
          {legende.coque}
        </text>
      </g>

      {/* Phase 3 : des millions vivent collés les uns aux autres */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        {[
          [140, 96],
          [180, 84],
          [220, 84],
          [260, 96],
          [160, 132],
          [200, 130],
          [240, 132],
        ].map(([cx, cy], i) => (
          <g key={cx}>
            <path
              d={`M${cx - 12} ${cy + 10} L${cx - 12} ${cy - 4} Q${cx} ${cy - 14} ${cx + 12} ${cy - 4} L${cx + 12} ${cy + 10} Z`}
              fill="#fde68a"
              opacity="0.7"
            />
            {polype(cx, cy, 0.6, i + 2)}
          </g>
        ))}
        <text x="110" y="196" fill="#fde68a" fontSize="15" fontFamily={police} style={apparition(2)}>
          {legende.millions}
        </text>
      </g>

      {/* Phase 4 : ensemble, un récif qui abrite la vie marine */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path
          d="M60 200 Q120 150 180 190 Q220 130 280 178 Q320 150 360 200 L360 220 L60 220 Z"
          fill="#fb923c"
        />
        {dejaVu(3) &&
          [90, 210, 300].map((x, i) => (
            <g key={x} transform={`translate(${x} ${70 + i * 10})`}>
              {/*
                Les « animaux marins » du récif étaient trois ellipses bleues,
                indistinguables de bulles d’air. Queue, dorsale et œil les
                nomment. Le va-et-vient est passé de `cx` à une translation de
                groupe, pour emporter le poisson entier.
              */}
              <g>
                <g fill="#7dd3fc">
                  <ellipse cx="0" cy="0" rx="9" ry="5" />
                  <path d="M-7 0 l-10 -7 v14 z" />
                  <path d="M-2 -4 q5 -7 10 -1 z" />
                </g>
                <circle cx="5" cy="-1" r="1.7" fill="#0c2340" />
                {anime && (
                  <animateTransform
                    attributeName="transform" type="translate"
                    values="0 0;18 0;0 0;-18 0;0 0" dur="3s" begin={`${i * 0.4}s`} repeatCount="indefinite"
                  />
                )}
              </g>
            </g>
          ))}
        <text x="130" y="216" fill="#fb923c" fontSize="15" fontFamily={police} style={apparition(3)}>
          {legende.recif}
        </text>
      </g>
    </svg>
  );
}
