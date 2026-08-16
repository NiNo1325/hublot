'use client';

import type { DomainId, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { constellations, etatEtoile, traitVisible, type EtatEtoile } from '@/lib/ciel';

interface ConstellationProps {
  domainId: DomainId;
  /** Les cartes du monde, dans l'ordre du catalogue : la n-ième est la n-ième étoile. */
  cards: ScienceCard[];
  cartesVues: Set<string>;
  cartesMaitrisees: Set<string>;
  /** Grossit les étoiles pour la vue d'un seul monde. */
  grande?: boolean;
}

/** Rayon et opacité d'une étoile selon son état. */
const ALLURE: Record<EtatEtoile, { r: number; opacite: number }> = {
  /*
    Le point éteint doit rester perceptible : trop discret, le ciel a l'air
    vide au lieu d'avoir l'air plein de choses à découvrir — et c'est toute la
    différence entre un écran d'accueil qui appelle et un écran qui décourage.
    Assez visible pour deviner la figure à venir, pas assez pour la croire
    acquise.
  */
  eteinte: { r: 2, opacite: 0.32 },
  allumee: { r: 2.9, opacite: 0.9 },
  brillante: { r: 3.6, opacite: 1 },
};

/**
 * La constellation d'un monde : dix étoiles, une par carte.
 *
 * Éteinte, une étoile reste visible mais à peine — assez pour qu'on devine la
 * figure à venir, pas assez pour qu'on la croie acquise. C'est ce contraste qui
 * porte tout l'écran d'accueil : le vide se voit.
 */
export function Constellation({
  domainId,
  cards,
  cartesVues,
  cartesMaitrisees,
  grande = false,
}: ConstellationProps) {
  const figure = constellations[domainId];
  const { teinte } = domainStyles[domainId];
  const etats = cards.map((c) => etatEtoile(c.id, cartesVues, cartesMaitrisees));
  const echelle = grande ? 1.6 : 1;

  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full overflow-visible"
      aria-hidden="true"
      focusable="false"
    >
      {figure.traits.map(([a, b], i) => {
        if (!traitVisible([a, b], etats)) return null;
        const [x1, y1] = figure.points[a];
        const [x2, y2] = figure.points[b];
        // Le trait s'appuie sur les deux étoiles : il est d'autant plus net que
        // les deux brillent.
        const net = etats[a] === 'brillante' && etats[b] === 'brillante';
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={teinte}
            strokeWidth={net ? 0.9 : 0.6}
            strokeOpacity={net ? 0.55 : 0.28}
            strokeLinecap="round"
          />
        );
      })}

      {figure.points.map(([x, y], i) => {
        const etat = etats[i] ?? 'eteinte';
        const { r, opacite } = ALLURE[etat];
        return (
          <g key={i}>
            {/* Le halo n'existe que pour les étoiles réussies : il doit rester
                l'exception, sinon le ciel devient une soupe lumineuse. */}
            {etat === 'brillante' && (
              <circle cx={x} cy={y} r={r * echelle * 2.6} fill={teinte} opacity={0.16} />
            )}
            <circle
              cx={x}
              cy={y}
              r={r * echelle}
              fill={etat === 'eteinte' ? '#a8bcdd' : etat === 'allumee' ? '#f4f7ff' : teinte}
              opacity={opacite}
            />
          </g>
        );
      })}
    </svg>
  );
}
