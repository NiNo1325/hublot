'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { badgesDomaine } from '@/lib/badges';
import { useCartesVues } from './useCartesVues';
import { useCartesMaitrisees } from './useCartesMaitrisees';

interface CollectionViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

export function CollectionView({ cards, domains }: CollectionViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const badges = domains.map((domain) => ({
    domain,
    ...badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id),
  }));
  const nbExplore = badges.filter((b) => b.explore).length;
  const nbMaitrise = badges.filter((b) => b.maitrise).length;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">Ma collection</h1>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">🏠</span> Menu
        </button>
        <p className="text-craie-douce">
          <span aria-hidden="true">🧭</span> {nbExplore}/{domains.length} explorés ·{' '}
          <span aria-hidden="true">🏅</span> {nbMaitrise}/{domains.length} maîtrisés
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {badges.map(({ domain, explore, maitrise }) => {
          const style = domainStyles[domain.id];
          return (
            <li
              key={domain.id}
              className="flex items-center justify-between gap-4 rounded-3xl border-2 border-encre-bord bg-encre-clair p-4"
            >
              <span className="flex items-center gap-3 font-display text-lg text-craie">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-2xl"
                  style={{ backgroundColor: 'var(--color-encre)', boxShadow: `0 0 16px ${style.halo}` }}
                >
                  {domain.icon}
                </span>
                {domain.labels.fr}
              </span>
              <span className="flex items-center gap-3 text-2xl">
                <span className={explore ? '' : 'opacity-20'}>
                  <span aria-hidden="true">🧭</span>
                  <span className="sr-only">{explore ? 'exploré' : 'pas encore exploré'}</span>
                </span>
                <span className={maitrise ? '' : 'opacity-20'}>
                  <span aria-hidden="true">🏅</span>
                  <span className="sr-only">{maitrise ? 'maîtrisé' : 'pas encore maîtrisé'}</span>
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
