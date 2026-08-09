'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { badgesDomaine } from '@/lib/badges';
import { progressionDomaine } from '@/lib/progression';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useEtoiles } from '@/components/quiz/useEtoiles';
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
  const { etoiles } = useEtoiles();

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const lignes = domains.map((domain) => {
    const { explore, maitrise } = badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
    const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
    // On réutilise progressionDomaine : compter les cartes d'un domaine présentes
    // dans un ensemble, c'est exactement ce qu'elle fait — ici l'ensemble des
    // cartes maîtrisées plutôt que des cartes vues.
    const reussies = progressionDomaine(cards, cartesMaitrisees, domain.id).vues;
    return { domain, explore, maitrise, vues, total, reussies };
  });
  const nbExplore = lignes.filter((b) => b.explore).length;
  const nbMaitrise = lignes.filter((b) => b.maitrise).length;
  const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
  const reste = rangProchain ? rangProchain.seuil - etoiles : 0;
  // Remplissage de la barre : la part parcourue entre le seuil du rang actuel et
  // celui du suivant. Au dernier rang, la barre est pleine.
  const fraction = rangProchain
    ? Math.min(1, Math.max(0, (etoiles - rang.seuil) / (rangProchain.seuil - rang.seuil)))
    : 1;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col items-center gap-5">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">Mon parcours</h1>

        {/* Carte de rang : Lumi grandit avec l'enfant. C'est l'invitation à
            rejouer, remontée ici depuis l'ancien menu d'accueil. */}
        <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 py-5">
          <Lumi rang={rang.index} taille={88} />
          <p className="font-display text-lg text-craie">
            <span aria-hidden="true">{rang.icone}</span> {rang.nom} —{' '}
            <span aria-hidden="true">⭐</span> {etoiles}
          </p>

          {/* Barre de progression vers le rang suivant : on voit ce qu'il reste
              à remplir, ce qui donne envie de le remplir. */}
          <div className="w-full">
            <div
              className="h-3 w-full overflow-hidden rounded-full bg-encre"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(fraction * 100)}
              aria-label="Progression vers le rang suivant"
            >
              <div
                className="h-full rounded-full bg-soleil transition-[width] duration-500"
                style={{ width: `${fraction * 100}%` }}
              />
            </div>
            {rangProchain ? (
              <p className="mt-1.5 text-center text-sm text-craie-douce">
                plus que {reste} <span aria-hidden="true">⭐</span> pour{' '}
                <span aria-hidden="true">{rangProchain.icone}</span> {rangProchain.nom}
              </p>
            ) : (
              <p className="mt-1.5 text-center text-sm text-soleil">
                Rang maximum atteint&nbsp;! 🎉
              </p>
            )}
          </div>
        </div>

        <p className="text-craie-douce">
          <span aria-hidden="true">🧭</span> {nbExplore}/{domains.length} explorés ·{' '}
          <span aria-hidden="true">🏅</span> {nbMaitrise}/{domains.length} maîtrisés
        </p>
      </header>

      <ul className="flex flex-col gap-3">
        {lignes.map(({ domain, explore, maitrise, vues, total, reussies }) => {
          const style = domainStyles[domain.id];
          return (
            <li key={domain.id}>
              {/* La ligne mène au détail du sujet : un monde n'est pas qu'un
                  compteur, c'est une porte vers ses cartes. Le chevron le dit. */}
              <Link
                href={`/decouvrir/${domain.id}`}
                className="flex items-center justify-between gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair p-4 transition-colors hover:border-soleil active:scale-[0.99]"
              >
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl"
                    style={{ backgroundColor: 'var(--color-encre)', boxShadow: `0 0 16px ${style.halo}` }}
                  >
                    {domain.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-lg text-craie">{domain.labels.fr}</span>
                    {/* Deux progressions, écrites pour tous les âges : l'écoute (mène
                        au 🧭) et la réussite au quizz (mène au 🏅). Rendre la seconde
                        visible évite qu'une bonne réponse semble « ne pas compter ». */}
                    <span className="text-sm text-craie-douce">
                      <span aria-hidden="true">🧭</span> {vues}/{total} écoutée{total > 1 ? 's' : ''}
                      {' · '}
                      <span aria-hidden="true">🏅</span> {reussies}/{total} réussie{total > 1 ? 's' : ''}
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-3">
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
                  <span aria-hidden="true" className="text-xl text-craie-douce">
                    ›
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
