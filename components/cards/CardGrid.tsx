'use client';

import type { AgeRange, ScienceCard } from '@/lib/types';
import { CardTile } from './CardTile';

interface CardGridProps {
  cards: ScienceCard[];
  ageRange: AgeRange;
  onSelectCard: (card: ScienceCard) => void;
}

export function CardGrid({ cards, ageRange, onSelectCard }: CardGridProps) {
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
          onSelect={onSelectCard}
        />
      ))}
    </ul>
  );
}
