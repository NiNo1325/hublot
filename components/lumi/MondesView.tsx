'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { badgesDomaine } from '@/lib/badges';
import { progressionDomaine } from '@/lib/progression';
import { bilanGlobal, prochaineEtapeDomaine } from '@/lib/prochaine-etape';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';

interface MondesViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

/**
 * L'avancée monde par monde, sur sa propre page.
 *
 * Quinze rangées font une liste qu'on fait défiler ; les laisser sous le
 * portrait de Lumi et l'échelle des rangs enterrait les trois sujets à la fois.
 * Ici elles sont seules, avec ce qu'il faut pour les lire : à quoi servent les
 * deux médailles, et où en est l'enfant en tout.
 */
export function MondesView({ cards, domains }: MondesViewProps) {
  const router = useRouter();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const { locale } = useLocale();
  const t = useT();

  const lignes = domains.map((domain) => {
    const { explore, maitrise } = badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
    const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
    const reussies = progressionDomaine(cards, cartesMaitrisees, domain.id).vues;
    const manque = prochaineEtapeDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
    return { domain, explore, maitrise, vues, total, reussies, manque };
  });
  const bilan = bilanGlobal(
    cards,
    cartesVues,
    cartesMaitrisees,
    domains.map((d) => d.id),
  );

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-5 px-6 py-10">
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        {t('lumi.vers-mondes')}
      </h1>

      <div className="flex flex-col items-center gap-1 text-center">
        <p className="text-craie-douce">
          <span aria-hidden="true">🧭</span>{' '}
          {t('lumi.bilan')(bilan.mondesExplores, bilan.mondesMaitrises, bilan.mondesTotal)}
        </p>
        {/*
          Le compte de badges ne dit rien de la distance parcourue : quinze
          mondes non terminés s'affichent « 0/15 » qu'on ait écouté deux cartes
          ou cent quarante. Le décompte en cartes situe l'enfant pour de bon.
        */}
        <p className="text-sm text-craie-douce">
          {t('lumi.bilan-cartes')(bilan.cartesEcoutees, bilan.cartesReussies, bilan.cartesTotal)}
        </p>
      </div>

      {/*
        Les deux médailles étaient affichées sans jamais être expliquées, et sans
        dire ce qui manquait pour les décrocher.
      */}
      <p className="text-sm leading-relaxed text-craie-douce">{t('lumi.badges-legende')}</p>

      <ul className="flex flex-col gap-3">
        {lignes.map(({ domain, explore, maitrise, vues, total, reussies, manque }) => {
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
                    style={{
                      backgroundColor: 'var(--color-encre)',
                      boxShadow: `0 0 16px ${style.halo}`,
                    }}
                  >
                    {domain.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-lg text-craie">
                      {localise(domain.labels, locale)}
                    </span>
                    <span className="text-sm text-craie-douce">
                      <span aria-hidden="true">🧭</span> {t('lumi.monde')(vues, reussies, total)}
                    </span>
                    {/* Ce qui est à portée : la seule ligne qui appelle à revenir. */}
                    <span
                      className={`text-sm ${
                        manque.type === 'complet' ? 'text-soleil' : 'text-craie-douce/80'
                      }`}
                    >
                      {manque.type === 'complet'
                        ? t('lumi.monde-complet')
                        : manque.type === 'ecouter'
                          ? t('lumi.reste-ecouter')(manque.combien)
                          : t('lumi.reste-reussir')(manque.combien)}
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
                      <span className="sr-only">
                        {maitrise ? 'maîtrisé' : 'pas encore maîtrisé'}
                      </span>
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

      <button
        type="button"
        onClick={() => router.push('/lumi')}
        className="min-h-12 cursor-pointer self-center rounded-full border-2 border-encre-bord px-6 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
      >
        {t('lumi.retour')}
      </button>
    </main>
  );
}
