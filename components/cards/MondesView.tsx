'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { useAgeRange } from '@/components/age/useAgeRange';
import { progressionDomaine } from '@/lib/progression';
import { badgesDomaine } from '@/lib/badges';
import { MondeTile } from './MondeTile';
import { useAccrocheAudio } from './useAccrocheAudio';
import { useCartesVues } from './useCartesVues';
import { useCartesMaitrisees } from './useCartesMaitrisees';

interface MondesViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

export function MondesView({ cards, domains }: MondesViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const { jouer, enLecture } = useAccrocheAudio();

  // Accès direct sans âge choisi : retour à l'accueil.
  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Qu&apos;est-ce qui t&apos;intéresse&nbsp;?
        </h1>
      </header>

      <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {domains.map((domain, index) => {
          const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
          const { maitrise } = badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
          return (
            <MondeTile
              key={domain.id}
              domain={domain}
              vues={vues}
              total={total}
              index={index}
              onEcouter={() => jouer(domain.id)}
              enLecture={enLecture === domain.id}
              maitrise={maitrise}
            />
          );
        })}
      </ul>
    </main>
  );
}
