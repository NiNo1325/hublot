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
        {/*
          Un animal reconnaissable, et l'air chaud pris entre ses poils.

          La phase montrait une tache grise à trois bosses, sans tête ni patte,
          surmontée de points orange flottant au-dessus d'elle — donc hors de la
          fourrure, alors que le mécanisme énoncé est précisément une couche
          d'air retenue contre la peau. L'animal a maintenant une silhouette, ses
          poils sont dressés, et les points de chaleur logent entre eux.
        */}
        {/*
          L'animal vit dans le ciel de l'image, au-dessus de la ligne de peau :
          la coupe de peau occupe tout le bas du cadre, et un animal posé dessus
          semblait à demi enterré dedans.
        */}
        <g transform="translate(0 -68)">
        <g fill="#a8a29e">
          <path d="M66 128 q40 -12 78 4 q14 6 14 22 q0 22 -18 26 l-70 0 q-16 -4 -16 -24 q0 -20 12 -28 z" />
          <circle cx="52" cy="126" r="19" />
          <path d="M34 130 q-14 2 -14 10 q0 6 10 6 q10 0 14 -8 z" />
          <path d="M42 110 l-4 -18 l16 10 z" />
          <path d="M60 110 l4 -18 l12 12 z" />
          <rect x="70" y="176" width="9" height="28" rx="4" />
          <rect x="92" y="176" width="9" height="28" rx="4" />
          <rect x="128" y="176" width="9" height="28" rx="4" />
          <rect x="146" y="176" width="9" height="28" rx="4" />
          <path d="M158 140 q22 -6 26 -28 q1 -6 -5 -7 q-6 -1 -7 6 q-3 16 -18 21 z" />
        </g>
        <circle cx="45" cy="121" r="2.6" fill="#0f1b33" />
        <circle cx="24" cy="139" r="2.4" fill="#0f1b33" />

        {/* Les poils dressés, en peigne sur le dos */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <line
            key={`poil-${i}`}
            x1={72 + i * 12} y1="126" x2={70 + i * 12} y2="100"
            stroke="#d6d3d1" strokeWidth="2.5" strokeLinecap="round"
          />
        ))}

        {/* L'air chaud, retenu entre les poils et contre la peau */}
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <circle key={`air-${i}`} cx={78 + i * 12} cy="114" r="3.4" fill="#fb923c" opacity="0.85">
            {anime && (
              <animate attributeName="cy" values="114;108;114" dur="2s" begin={`${i * 0.25}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}
        </g>
        <text x="20" y="224" fill="#a3a3a3" fontSize="14" fontFamily={police} style={{ opacity: phase === 3 ? 1 : 0, transition: 'opacity 300ms ease' }}>{legende.souvenir}</text>
      </g>
    </svg>
  );
}
