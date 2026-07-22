'use client';

import type { AgeRange, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';

interface CardTileProps {
  card: ScienceCard;
  ageRange: AgeRange;
  /** Rang dans la grille, pour l'allumage en séquence. */
  index: number;
  /** Carte déjà ouverte : son hublot s'éteint. */
  dejaJouee: boolean;
  onSelect: (card: ScienceCard) => void;
}

/**
 * Un hublot : disque lumineux posé sur le fond encre. La cible tactile fait
 * 128px de côté minimum, bien au-delà des 44px recommandés — la précision
 * motrice d'un enfant de trois ans est faible.
 *
 * Une carte déjà écoutée perd son halo et son anneau coloré, de sorte que
 * seules les cartes restantes brillent. L'emoji, lui, ne change pas : une
 * tuile grisée se lirait « indisponible », alors qu'une carte se réécoute
 * autant qu'on veut. Et comme éteindre est une variation de luminance et non
 * de teinte, le repère tient aussi sans distinguer les couleurs.
 */
export function CardTile({ card, ageRange, index, dejaJouee, onSelect }: CardTileProps) {
  const style = domainStyles[card.domainId];
  const titre = card.content.fr.title[ageRange];

  return (
    <li>
      <button
        type="button"
        onClick={() => onSelect(card)}
        className="group flex w-40 cursor-pointer flex-col items-center gap-3 rounded-3xl p-2 transition-transform duration-150 hover:scale-105 active:scale-95 sm:w-44"
        style={{
          animation: 'allumage 500ms ease-out backwards',
          animationDelay: `${index * 70}ms`,
        }}
      >
        <span
          className="flex h-32 w-32 items-center justify-center rounded-full border-4 text-5xl transition-[box-shadow,border-color] duration-500 sm:h-36 sm:w-36"
          style={{
            borderColor: dejaJouee ? 'var(--color-encre-bord)' : style.teinte,
            backgroundColor: 'var(--color-encre-clair)',
            boxShadow: dejaJouee ? 'none' : `0 0 32px ${style.halo}`,
          }}
        >
          {card.thumbnail}
        </span>

        {/*
          Les 3-5 ans ne lisent pas : le titre reste dans le DOM pour les
          lecteurs d'écran et les parents, mais n'encombre pas leur écran.
          La reconnaissance passe par l'emoji et la couleur du domaine.
        */}
        <span
          className={
            ageRange === '3-5'
              ? 'sr-only'
              : 'text-center font-display text-base font-medium text-craie'
          }
        >
          {titre}
        </span>

        {/*
          L'extinction est visuelle : pour qui n'y a pas accès, le repère doit
          être dit. C'est la redondance qu'impose la règle d'accessibilité du
          projet — jamais d'information portée par le seul rendu.
        */}
        {dejaJouee && <span className="sr-only">, déjà écoutée</span>}
      </button>
    </li>
  );
}
