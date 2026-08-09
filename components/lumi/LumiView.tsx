'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { badgesDomaine } from '@/lib/badges';
import { progressionDomaine } from '@/lib/progression';
import { rangDepuisEtoiles, RANGS } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';

interface LumiViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

/**
 * L'écran de Lumi : tout le suivi statique de l'enfant. Lumi est la mascotte qui
 * suit son progrès — son rang, sa collection de badges, son avancée par monde,
 * et l'échelle des rangs à gravir. Le chemin guidé, lui, vit dans l'onglet
 * Parcours.
 */
export function LumiView({ cards, domains }: LumiViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
  const reste = rangProchain ? rangProchain.seuil - etoiles : 0;
  const fraction = rangProchain
    ? Math.min(1, Math.max(0, (etoiles - rang.seuil) / (rangProchain.seuil - rang.seuil)))
    : 1;

  const lignes = domains.map((domain) => {
    const { explore, maitrise } = badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
    const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
    const reussies = progressionDomaine(cards, cartesMaitrisees, domain.id).vues;
    return { domain, explore, maitrise, vues, total, reussies };
  });
  const nbExplore = lignes.filter((l) => l.explore).length;
  const nbMaitrise = lignes.filter((l) => l.maitrise).length;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col items-center gap-5">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">Ton évolution</h1>

        <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 py-5">
          <Lumi rang={rang.index} taille={104} />
          <p className="font-display text-lg text-craie">
            <span aria-hidden="true">{rang.icone}</span> {rang.nom} —{' '}
            <span aria-hidden="true">⭐</span> {etoiles}
          </p>
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
              <p className="mt-1.5 text-center text-sm text-soleil">Rang maximum atteint&nbsp;! 🎉</p>
            )}
          </div>
        </div>

        <p className="text-craie-douce">
          <span aria-hidden="true">🧭</span> {nbExplore}/{domains.length} explorés ·{' '}
          <span aria-hidden="true">🏅</span> {nbMaitrise}/{domains.length} maîtrisés
        </p>
      </header>

      {/* L'échelle des rangs : là où Lumi en est, et ce qui l'attend. Les six
          rangs tiennent dans la largeur (blocs à parts égales, pas de défilement).
          La différence de luminosité (atteint / à venir) suffit à situer
          l'enfant, sans bordure de couleur. */}
      <section className="flex flex-col gap-3">
        <h2 className="font-display text-lg text-craie">Les rangs de Lumi</h2>
        <ol className="flex gap-1.5">
          {RANGS.map((r) => {
            const atteint = etoiles >= r.seuil;
            return (
              <li
                key={r.index}
                className="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl border-2 border-encre-bord bg-encre-clair px-1 py-3 text-center"
                style={{ opacity: atteint ? 1 : 0.45 }}
              >
                <Lumi rang={r.index} taille={40} />
                <span className="break-words font-display text-[11px] leading-tight text-craie">
                  {r.nom}
                </span>
                <span className="text-[10px] text-craie-douce">
                  {r.seuil} <span aria-hidden="true">⭐</span>
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Progression par monde : écoute (→ 🧭) et réussite au quizz (→ 🏅). */}
      <ul className="flex flex-col gap-3">
        {lignes.map(({ domain, explore, maitrise, vues, total, reussies }) => {
          const style = domainStyles[domain.id];
          return (
            <li key={domain.id}>
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
                  <span aria-hidden="true" className="text-xl text-craie-douce">›</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
