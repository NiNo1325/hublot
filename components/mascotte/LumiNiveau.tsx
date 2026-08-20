'use client';

import { useId } from 'react';

/**
 * Lumi à trois âges, pour illustrer les trois niveaux de difficulté.
 *
 * Une mascotte, deux axes visuels, et il faut absolument qu'ils ne se marchent
 * pas dessus : dans le reste de l'application, ce sont les **accessoires et le
 * halo** de Lumi qui disent le rang gagné à force d'écouter des cartes. Ici,
 * rien de tout ça — même halo discret pour les trois, aucun chapeau, aucune
 * lunette. Seule la **maturité du corps** change : la silhouette s'allonge, les
 * yeux se calment, les joues s'affinent, la mèche pousse.
 *
 * Un enfant lit donc immédiatement « petite Lumi, grande Lumi » sans y voir une
 * récompense, et l'évolution qu'il gagne vraiment garde tout son sens.
 */
export type VarianteLumi = 'petite' | 'jeune' | 'ado';

/**
 * Échelle appliquée à chaque figure.
 *
 * La silhouette suffisait à distinguer la grande des deux autres, mais pas la
 * toute-petite de la jeune : à 72 px, quelques pixels de largeur ne se voient
 * pas. La taille, si — c'est même le signal le plus immédiat qu'un enfant
 * possède pour ordonner trois personnages. Appliquée ici plutôt que laissée à
 * l'appelant, pour que la progression soit vraie partout où ces figures
 * apparaîtront.
 */
const ECHELLE: Record<VarianteLumi, number> = {
  petite: 0.78,
  jeune: 1,
  ado: 1.16,
};

interface LumiNiveauProps {
  variante: VarianteLumi;
  /** Côté du carré de rendu, en pixels. */
  taille?: number;
  className?: string;
}

const LEGENDES: Record<VarianteLumi, string> = {
  petite: 'Lumi toute petite',
  jeune: 'Lumi jeune',
  ado: 'Lumi grande',
};

export function LumiNiveau({ variante, taille = 96, className }: LumiNiveauProps) {
  const uid = useId();
  const corps = `${uid}-corps`;
  const halo = `${uid}-halo`;
  const cote = Math.round(taille * ECHELLE[variante]);

  return (
    <svg
      viewBox="0 0 120 130"
      width={cote}
      height={(cote * 130) / 120}
      className={className}
      role="img"
      aria-label={LEGENDES[variante]}
    >
      <defs>
        <linearGradient id={corps} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf8" />
          <stop offset="1" stopColor="#efe4cc" />
        </linearGradient>
        {/* Un seul halo, identique aux trois : il ne doit rien signifier ici. */}
        <radialGradient id={halo}>
          <stop offset="0" stopColor="#ffb627" stopOpacity="0.4" />
          <stop offset="1" stopColor="#ffb627" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="60" cy="74" r="46" fill={`url(#${halo})`} />
      {variante === 'petite' && <Petite corps={corps} />}
      {variante === 'jeune' && <Jeune corps={corps} />}
      {variante === 'ado' && <Ado corps={corps} />}
    </svg>
  );
}

/*
  Toute petite : basse, large et ronde, de grands yeux qui mangent le visage,
  des joues pleines et une seule mèche en tire-bouchon. Les proportions d'un
  tout-petit tiennent surtout à ça — une tête énorme et un corps ramassé.
*/
function Petite({ corps }: { corps: string }) {
  return (
    <>
      <ellipse cx="21" cy="94" rx="7.8" ry="9.4" fill={`url(#${corps})`} />
      <ellipse cx="99" cy="94" rx="7.8" ry="9.4" fill={`url(#${corps})`} />
      <path
        d="M60 38 C 71 53 96 57 96 81 C 96 101 80 113 60 113 C 40 113 24 101 24 81 C 24 57 49 53 60 38 Z"
        fill={`url(#${corps})`}
      />
      <ellipse cx="38" cy="93" rx="7.6" ry="4.6" fill="#ffb627" opacity="0.45" />
      <ellipse cx="82" cy="93" rx="7.6" ry="4.6" fill="#ffb627" opacity="0.45" />
      <g>
        <ellipse cx="48" cy="82" rx="7.2" ry="9.2" fill="#0f1b33" />
        <ellipse cx="72" cy="82" rx="7.2" ry="9.2" fill="#0f1b33" />
        <circle cx="50.8" cy="78" r="2.6" fill="#fff" />
        <circle cx="74.8" cy="78" r="2.6" fill="#fff" />
      </g>
      <path d="M54 97 Q 60 102 66 97" stroke="#0f1b33" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {/* la mèche unique du tout-petit */}
      <path
        d="M60 38 Q 57 30 62 27 Q 66 25 64 31"
        stroke="#efe4cc"
        strokeWidth="3.4"
        fill="none"
        strokeLinecap="round"
      />
    </>
  );
}

/* Jeune : les proportions de référence de Lumi, yeux ronds et rieurs. */
function Jeune({ corps }: { corps: string }) {
  return (
    <>
      <ellipse cx="25" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <ellipse cx="95" cy="88" rx="7.5" ry="10" fill={`url(#${corps})`} />
      <path
        d="M60 24 C 69 40 92 46 92 74 C 92 96 78 108 60 108 C 42 108 28 96 28 74 C 28 46 51 40 60 24 Z"
        fill={`url(#${corps})`}
      />
      <ellipse cx="40" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
      <ellipse cx="80" cy="82" rx="6.6" ry="4" fill="#ffb627" opacity="0.4" />
      <g>
        <ellipse cx="50" cy="71" rx="6" ry="8" fill="#0f1b33" />
        <ellipse cx="70" cy="71" rx="6" ry="8" fill="#0f1b33" />
        <circle cx="52.4" cy="67.6" r="2.1" fill="#fff" />
        <circle cx="72.4" cy="67.6" r="2.1" fill="#fff" />
      </g>
      <path d="M53 84 Q 60 90 67 84" stroke="#0f1b33" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path
        d="M60 24 Q 55 15 61 11 Q 67 8 65 16"
        stroke="#efe4cc"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </>
  );
}

/*
  Grande : la goutte s'étire et s'affine, les bras remontent, les yeux
  s'apaisent en arcs et la mèche se couche sur le côté. Rien d'autre — pas de
  lunettes ni de coiffe, qui appartiennent aux rangs.
*/
function Ado({ corps }: { corps: string }) {
  return (
    <>
      <ellipse cx="30" cy="82" rx="6.8" ry="10.6" fill={`url(#${corps})`} />
      <ellipse cx="90" cy="82" rx="6.8" ry="10.6" fill={`url(#${corps})`} />
      <path
        d="M60 12 C 67 33 87 44 87 73 C 87 96 75 108 60 108 C 45 108 33 96 33 73 C 33 44 53 33 60 12 Z"
        fill={`url(#${corps})`}
      />
      <ellipse cx="43" cy="79" rx="5.4" ry="3.2" fill="#ffb627" opacity="0.35" />
      <ellipse cx="77" cy="79" rx="5.4" ry="3.2" fill="#ffb627" opacity="0.35" />
      <g>
        <path d="M45 67 Q 51 61 57 67" stroke="#0f1b33" strokeWidth="2.6" fill="none" strokeLinecap="round" />
        <path d="M63 67 Q 69 61 75 67" stroke="#0f1b33" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      </g>
      <path d="M54 80 Q 60 85 66 80" stroke="#0f1b33" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      {/* mèche longue, couchée sur le côté */}
      <path
        d="M60 12 Q 52 18 50 28 Q 49 34 54 36"
        stroke="#efe4cc"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
    </>
  );
}
