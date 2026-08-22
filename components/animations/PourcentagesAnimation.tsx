'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['part', 'de-quoi', 'aller-retour', 'points'] as const;

const LEGENDES = {
  fr: {
    quart: '75 € : il manque un quart',
    multiplie: 'ça se multiplie, pas s’ajoute',
  },
  en: {
    quart: '75 €: a quarter is missing',
    multiplie: 'it multiplies, it doesn’t add',
  },
};

/**
 * Les trois barres sont à l'échelle : trois cents pixels pour cent euros. La
 * troisième s'arrête visiblement avant la première, et le quart manquant est
 * dessiné en creux — c'est l'écart, et non le calcul, qui doit se voir.
 */
export function PourcentagesAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Le prix de départ */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {/*
          Cent parts, dont vingt allumées.

          La phase définit « vingt sur cent » et la barre était pleine et sans
          graduation : elle montrait le tout, jamais le morceau. Les traits
          font les cent parts, le bloc clair en prend vingt.
        */}
        <rect x="100" y="62" width="290" height="18" rx="3" fill="#0c4a6e" />
        <rect x="100" y="62" width="58" height="18" rx="3" fill="#7dd3fc" />
        {Array.from({ length: 99 }).map((_, i) => (
          <line
            key={`part-${i}`}
            x1={100 + ((i + 1) * 290) / 100} y1="62"
            x2={100 + ((i + 1) * 290) / 100} y2="80"
            stroke="#0f1b33" strokeWidth="0.6" opacity="0.8"
          />
        ))}
        <rect x="100" y="62" width="290" height="18" rx="3" fill="none" stroke="#7dd3fc" strokeWidth="1.5" />
        <text x="14" y="76" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          100 €
        </text>
      </g>

      {/* Moins cinquante pour cent */}
      <g style={{ opacity: dejaVu(1) ? opacite(1) : 0, transition: 'opacity 600ms ease' }}>
        <rect x="100" y="112" width="145" height="18" rx="3" fill="#fbbf24">
          {anime && phase === 1 && (
            <animate attributeName="width" values="290;145" dur="1.4s" fill="freeze" />
          )}
        </rect>
        <text x="14" y="126" fill="#fbbf24" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          − 50 %
        </text>

        {/*
          Une seconde base, petite, et sa moitié.

          « La moitié d’un grand gâteau, ce n’est pas la moitié d’un petit » se
          disait devant une seule base : la comparaison, qui est toute la
          phase, n’était jamais dessinée.
        */}
        <rect x="100" y="136" width="29" height="12" rx="2" fill="none" stroke="#7dd3fc" strokeWidth="1.5" />
        <rect x="100" y="136" width="14.5" height="12" rx="2" fill="#fbbf24" />
        <text x="14" y="147" fill="#7dd3fc" fontSize="14" fontFamily="var(--font-atkinson), sans-serif">
          10 €
        </text>
        <text x="138" y="147" fill="#fbbf24" fontSize="14" fontFamily="var(--font-atkinson), sans-serif">
          − 50 % → 5 €
        </text>
      </g>

      {/* Plus cinquante pour cent : la hausse porte sur cinquante, pas sur cent */}
      <g style={{ opacity: dejaVu(2) ? opacite(2) : 0, transition: 'opacity 600ms ease' }}>
        <rect x="100" y="162" width="217" height="18" rx="3" fill="#4ade80">
          {anime && phase === 2 && (
            <animate attributeName="width" values="145;217" dur="1.4s" fill="freeze" />
          )}
        </rect>
        <rect x="317" y="162" width="73" height="18" rx="3" fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="4 4" />
        <text x="14" y="176" fill="#4ade80" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          + 50 %
        </text>
      </g>

      {/* Le quart manquant, et la règle qui l'explique */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <text x="14" y="210" fill="#f87171" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.quart}
        </text>
        <text x="14" y="234" fill="#94a3b8" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.multiplie}
        </text>
      </g>
    </svg>
  );
}
