'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { useAgeRange } from '@/components/age/useAgeRange';
import { progressionDomaine } from '@/lib/progression';
import { MondeTile } from './MondeTile';
import { useAccrocheAudio } from './useAccrocheAudio';
import { useCartesVues } from './useCartesVues';

interface MondesViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

export function MondesView({ cards, domains }: MondesViewProps) {
  const router = useRouter();
  const { age, ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
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
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/')}
            className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">🏠</span> Menu
          </button>
          <button
            type="button"
            onClick={() => router.push('/?changer=1')}
            className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            Niveau&nbsp;: {age} ans — changer
          </button>
        </div>
      </header>

      <ul className="flex flex-wrap justify-center gap-6 sm:gap-8">
        {domains.map((domain, index) => {
          const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
          return (
            <MondeTile
              key={domain.id}
              domain={domain}
              vues={vues}
              total={total}
              index={index}
              onEcouter={() => jouer(domain.id)}
              enLecture={enLecture === domain.id}
            />
          );
        })}
      </ul>
    </main>
  );
}
