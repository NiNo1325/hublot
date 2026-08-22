'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['un', 'deux', 'trois', 'quatre'] as const;

const LEGENDES = {
  fr: {
    declencheur: 'froid ou peur',
    muscle: 'un muscle tire',
    bosse: 'la chair de poule',
    souvenir: 'chez toi, un souvenir',
  },
  en: {
    declencheur: 'cold or fear',
    muscle: 'a muscle pulls',
    bosse: 'goose bumps',
    souvenir: 'on you, a leftover',
  },
};

/**
 * Le poil et son minuscule muscle sont vus en coupe : le muscle se
 * raccourcit et redresse le poil, formant la bosse. La silhouette poilue de
 * la dernière phase montre à quoi ce réflexe sert vraiment, chez un animal.
 */
export function LaChairDePouleAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite, dejaVu } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const police = 'var(--font-atkinson), sans-serif';
  const legende = localise(LEGENDES, locale);
  const tire = dejaVu(1);
  const dresse = dejaVu(2);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Peau en coupe : épiderme au-dessus, derme en dessous */}
      <rect x="0" y="150" width="400" height="90" fill="#7c3f56" />
      <rect x="0" y="146" width="400" height="6" fill="#f9a8d4" />

      {/* La bosse, qui se gonfle autour du poil */}
      <ellipse
        cx="200" cy="148" rx={dresse ? 26 : 13} ry={dresse ? 9 : 3}
        fill="#f9a8d4"
        style={{ transition: 'rx 500ms ease, ry 500ms ease' }}
      />

      {/*
        Le follicule : la racine du poil, plantée dans le derme.

        Sans elle, le poil semblait posé sur la peau et le muscle tirait sur le
        vide — or « tirer sur la racine de chaque poil » est la phrase même de
        la carte. La racine remonte un peu quand le poil se dresse : c'est ce
        que le muscle produit.
      */}
      <line
        x1="200" y1="152" x2="200" y2={dresse ? 194 : 200}
        stroke="#e7d9c4" strokeWidth="5" strokeLinecap="round"
        style={{ transition: 'all 600ms ease' }}
      />

      {/*
        Le muscle arrecteur, qui se raccourcit et s'épaissit en tirant.

        Il faisait exactement l'inverse : long de 30 au repos, de 67 « contracté ».
        L'enfant entendait « se contracte » et voyait un muscle s'allonger — à
        rebours de ce qu'enseigne la carte voisine sur les muscles. Il court
        désormais de l'épiderme jusqu'au bas du follicule, et sa longueur tombe
        de 58 à 46 en tirant la racine vers le haut.
      */}
      <line
        x1="152" y1="166" x2="200" y2={tire ? 174 : 198}
        stroke="#fbbf24" strokeWidth={tire ? 7 : 4} strokeLinecap="round"
        style={{ transition: 'all 500ms ease' }}
      />

      {/* Le poil, qui se redresse quand le muscle tire */}
      <line
        x1="200" y1="150" x2={dresse ? 208 : 256} y2={dresse ? 74 : 100}
        stroke="#f5f5f4" strokeWidth="4" strokeLinecap="round"
        style={{ transition: 'all 600ms ease' }}
      />

      {/* Phase 1 : le déclencheur, froid ou peur */}
      <g style={{ opacity: opacite(0), transition: 'opacity 500ms ease' }}>
        <path d="M336 36 v26 M324 42 l24 14 M324 56 l24 -14" stroke="#7dd3fc" strokeWidth="3" fill="none" />
        <text x="20" y="34" fill="#7dd3fc" fontSize="15" fontFamily={police} style={{ opacity: phase === 0 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.declencheur}</text>
      </g>

      {/* Phase 2 : le muscle tire sur la racine */}
      <g style={{ opacity: opacite(1), transition: 'opacity 500ms ease' }}>
        <text x="20" y="200" fill="#fbbf24" fontSize="15" fontFamily={police} style={{ opacity: phase === 1 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.muscle}</text>
      </g>

      {/* Phase 3 : le poil se dresse, la bosse apparaît */}
      <g style={{ opacity: opacite(2), transition: 'opacity 500ms ease' }}>
        <text x="222" y="200" fill="#f9a8d4" fontSize="15" fontFamily={police} style={{ opacity: phase === 2 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.bosse}</text>
      </g>

      {/* Phase 4 : chez un animal poilu, ça réchauffe vraiment */}
      <g style={{ opacity: opacite(3), transition: 'opacity 500ms ease' }}>
        <path d="M50 100 q16 -34 42 -12 q10 -22 30 2 q16 -16 30 8 q4 26 -26 28 q-48 6 -76 -26 Z" fill="#a8a29e" />
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={78 + i * 22} cy="72" r="4" fill="#fb923c" opacity="0.85">
            {anime && (
              <animate attributeName="cy" values="72;58;72" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        <text x="20" y="224" fill="#a3a3a3" fontSize="14" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.souvenir}</text>
      </g>
    </svg>
  );
}
