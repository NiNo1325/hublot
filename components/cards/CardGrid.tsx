'use client';

import type { AgeRange, ScienceCard } from '@/lib/types';
import { CardTile } from './CardTile';

interface CardGridProps {
  cards: ScienceCard[];
  ageRange: AgeRange;
  /** Cartes déjà écoutées : elles portent la coche de validation. */
  cartesVues: Set<string>;
  /**
   * Cartes dont le hublot doit être éteint. Distinct de `cartesVues` : quand
   * tout le catalogue est exploré, l'extinction est levée alors que les cartes
   * restent validées. Confondre les deux ferait disparaître toutes les coches
   * à l'instant même où l'enfant vient de tout terminer.
   */
  cartesEteintes: Set<string>;
  onSelectCard: (card: ScienceCard) => void;
}

export function CardGrid({
  cards,
  ageRange,
  cartesVues,
  cartesEteintes,
  onSelectCard,
}: CardGridProps) {
  if (cards.length === 0) {
    return (
      <p className="py-16 text-center text-craie-douce">
        Aucune carte dans ces domaines. Choisis-en un autre pour continuer.
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
      {cards.map((card, index) => (
        <CardTile
          key={card.id}
          card={card}
          ageRange={ageRange}
          index={index}
          dejaJouee={cartesVues.has(card.id)}
          eteinte={cartesEteintes.has(card.id)}
          onSelect={onSelectCard}
        />
      ))}
    </ul>
  );
}
