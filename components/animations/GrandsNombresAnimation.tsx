'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['compter', 'million', 'milliard', 'imaginer'] as const;

const LEGENDES = {
  fr: {
    million: 'un million de secondes',
    jours: '≈ 11 jours',
    milliard: 'un milliard de secondes',
    ans: '≈ 32 ans — mille fois plus',
    ecart: '11 jours contre 32 ans : voilà l’écart',
  },
  en: {
    million: 'one million seconds',
    jours: '≈ 11 days',
    milliard: 'one billion seconds',
    ans: '≈ 32 years — a thousand times more',
    ecart: '11 days against 32 years: that’s the gap',
  },
};

/**
 * Mille unités, dont une seule est le million.
 *
 * C'était deux barres, de 20 et 360 pixels : un rapport de dix-huit pour un,
 * sous un texte qui dit « mille fois plus ». La carte existe pour corriger
 * l'intuition « un milliard, c'est un peu plus qu'un million », et son seul
 * élément graphique chiffrait l'écart à dix-huit. Aucune barre ne peut rendre
 * mille pour un : à 360 pixels, le million ferait un tiers de pixel.
 *
 * D'où le pavé : dix lignes de cent tirets, soit mille unités, en face d'un
 * unique tiret cerclé. Le rapport est exact, et il se voit. Dix `<line>`
 * pointillées suffisent à dessiner les mille — un millier de rectangles aurait
 * été inutilement lourd.
 */
export function GrandsNombresAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { opacite } = miseEnScene(PHASES, activeBeatId);
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Échelle des zéros */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        <text x="20" y="42" fill="#b9c4da" fontSize="17" fontFamily="var(--font-atkinson), monospace">
          10 · 100 · 1000 …
        </text>
      </g>

      {/* Un million : petite barre */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <text x="20" y="88" fill="#38bdf8" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.million}
        </text>
        {/* Le million : une seule unité, cerclée pour qu'on la retrouve. */}
        <line
          x1="20" y1="106" x2="22.6" y2="106"
          stroke="#38bdf8" strokeWidth="6" strokeLinecap="butt"
        />
        <circle cx="21.3" cy="106" r="9" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
        <text x="38" y="112" fill="#38bdf8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.jours}
        </text>
      </g>

      {/* Un milliard : barre mille fois plus longue (symbolisée) */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        <text x="20" y="148" fill="#fb7185" fontSize="17" fontFamily="var(--font-atkinson), sans-serif">
          {legende.milliard}
        </text>
        {/*
          Mille unités : dix lignes de cent tirets, à la même échelle que
          l'unique tiret du million. `2 1.6` sur 360 pixels donne exactement
          cent tirets par ligne.
        */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((r) => (
          <line
            key={r}
            x1="20" y1={158 + r * 5} x2="380" y2={158 + r * 5}
            stroke="#fb7185" strokeWidth="3.4" strokeDasharray="2 1.6"
          >
            {isPlaying && !prefersReducedMotion && (
              <animate
                attributeName="x2" values="22.6;380" dur="1.4s"
                begin={`${r * 0.08}s`} fill="freeze"
              />
            )}
          </line>
        ))}
        <text x="20" y="218" fill="#fb7185" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.ans}
        </text>
      </g>

      {/* La conclusion */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="20" y="236" fill="#ffb627" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.ecart}
        </text>
      </g>
    </svg>
  );
}
