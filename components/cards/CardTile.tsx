'use client';

import type { AgeRange, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';

interface CardTileProps {
  card: ScienceCard;
  ageRange: AgeRange;
  /** Rang dans la grille, pour l'allumage en séquence. */
  index: number;
  onSelect: (card: ScienceCard) => void;
}

/**
 * Un hublot : disque lumineux posé sur le fond encre. La cible tactile fait
 * 128px de côté minimum, bien au-delà des 44px recommandés — la précision
 * motrice d'un enfant de trois ans est faible.
 */
export function CardTile({ card, ageRange, index, onSelect }: CardTileProps) {
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
          className="flex h-32 w-32 items-center justify-center rounded-full border-4 text-5xl transition-shadow sm:h-36 sm:w-36"
          style={{
            borderColor: style.teinte,
            backgroundColor: 'var(--color-encre-clair)',
            boxShadow: `0 0 32px ${style.halo}`,
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
      </button>
    </li>
  );
}
