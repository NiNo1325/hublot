'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { useAgeRange } from '@/components/age/useAgeRange';
import { progressionDomaine } from '@/lib/progression';
import { badgesDomaine } from '@/lib/badges';
import { useT } from '@/components/i18n/useT';
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
  const t = useT();

  // Accès direct sans âge choisi : retour à l'accueil.
  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex flex-col items-center gap-3 text-center">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('decouvrir.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">{t('decouvrir.sous-titre')}</p>
        <Link
          href="/parcours"
          className="text-sm text-craie-douce underline-offset-4 transition-colors hover:text-soleil hover:underline"
        >
          {t('decouvrir.chemin-guide')}
        </Link>
      </header>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
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
