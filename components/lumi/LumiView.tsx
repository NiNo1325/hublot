'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { badgesDomaine } from '@/lib/badges';
import { progressionDomaine } from '@/lib/progression';
import { bilanGlobal, prochaineEtapeDomaine } from '@/lib/prochaine-etape';
import { objetsCabinet } from '@/content/cabinet';
import { useCabinet } from '@/components/cabinet/useCabinet';
import { rangDepuisEtoiles, RANGS } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';

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
  const { locale } = useLocale();
  const t = useT();
  const { possedes } = useCabinet();
  const [rangSel, setRangSel] = useState<number | null>(null);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
  const reste = rangProchain ? rangProchain.seuil - etoiles : 0;
  const fraction = rangProchain
    ? Math.min(1, Math.max(0, (etoiles - rang.seuil) / (rangProchain.seuil - rang.seuil)))
    : 1;

  // Remplissage de la frise des rangs : segments franchis (index du rang) plus
  // la fraction en cours, sur les cinq intervalles entre six pastilles.
  const derniersRangs = RANGS.length - 1;
  const fractionFrise = rangProchain ? Math.min(1, (rang.index + fraction) / derniersRangs) : 1;
  // Rang mis en avant sous la frise : celui qu'on touche, sinon le rang courant.
  const selection = RANGS[rangSel ?? rang.index];
  const selectionAtteinte = etoiles >= selection.seuil;

  const lignes = domains.map((domain) => {
    const { explore, maitrise } = badgesDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
    const { vues, total } = progressionDomaine(cards, cartesVues, domain.id);
    const reussies = progressionDomaine(cards, cartesMaitrisees, domain.id).vues;
    const manque = prochaineEtapeDomaine(cards, cartesVues, cartesMaitrisees, domain.id);
    return { domain, explore, maitrise, vues, total, reussies, manque };
  });
  const nbExplore = lignes.filter((l) => l.explore).length;
  const nbMaitrise = lignes.filter((l) => l.maitrise).length;
  const bilan = bilanGlobal(cards, cartesVues, cartesMaitrisees);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col items-center gap-5">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('lumi.titre')}</h1>

        <div className="flex w-full max-w-sm flex-col items-center gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 py-5">
          <Lumi rang={rang.index} taille={104} etat="repos" interactif />
          <p className="font-display text-lg text-craie">
            <span aria-hidden="true">{rang.icone}</span> {localise(rang.nom, locale)}{' '}
            <span aria-hidden="true">⭐</span> {etoiles}
          </p>
          <div className="w-full">
            <div
              className="h-3 w-full overflow-hidden rounded-full bg-encre"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(fraction * 100)}
              aria-label={t('lumi.progression-rang')}
            >
              <div
                className="h-full rounded-full bg-soleil transition-[width] duration-500"
                style={{ width: `${fraction * 100}%` }}
              />
            </div>
            {rangProchain ? (
              <p className="mt-1.5 text-center text-sm text-craie-douce">
                {t('lumi.reste')(reste)} <span aria-hidden="true">⭐</span> {t('lumi.pour')}{' '}
                <span aria-hidden="true">{rangProchain.icone}</span>{' '}
                {localise(rangProchain.nom, locale)}
              </p>
            ) : (
              <p className="mt-1.5 text-center text-sm text-soleil">{t('lumi.rang-max')}</p>
            )}
          </div>
        </div>

        <p className="text-craie-douce">
          <span aria-hidden="true">🧭</span>{' '}
          {t('lumi.bilan')(nbExplore, nbMaitrise, domains.length)}
        </p>
        {/*
          Le compte de badges ne dit rien de la distance parcourue : quinze
          mondes non terminés s'affichent « 0/15 » qu'on ait écouté deux cartes
          ou cent quarante. Le décompte en cartes situe l'enfant pour de bon.
        */}
        <p className="text-sm text-craie-douce">
          {t('lumi.bilan-cartes')(bilan.cartesEcoutees, bilan.cartesReussies, bilan.cartesTotal)}
        </p>
      </header>

      {/* L'échelle des rangs, en frise : une rangée de pastilles (une par rang),
          puis la barre de progression SOUS les personnages (et non au travers),
          puis les seuils alignés sous chaque pastille. Le nom du rang s'affiche
          en légende, pour celui qu'on touche — les six noms côte à côte se
          chevauchaient. Les trois rangées partagent `justify-between` avec des
          éléments de 36 px, donc pastilles, barre et seuils restent alignés. */}
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-lg text-craie">{t('lumi.rangs')}</h2>
        {/*
          D'où viennent les étoiles. Rien ne le disait, et l'enfant qui écoutait
          des cartes sans voir son rang bouger pouvait croire le compteur cassé.
        */}
        <p className="text-sm leading-relaxed text-craie-douce">
          {t('lumi.origine-etoiles')}
        </p>
        <div className="flex flex-col gap-2">
          {/* Les personnages. */}
          <ol className="flex justify-between">
            {RANGS.map((r) => {
              const atteint = etoiles >= r.seuil;
              const courant = r.index === rang.index;
              const actif = (rangSel ?? rang.index) === r.index;
              return (
                <li key={r.index}>
                  <button
                    type="button"
                    onClick={() => setRangSel(r.index)}
                    aria-pressed={actif}
                    aria-label={t('lumi.rang-aria')(localise(r.nom, locale), r.seuil, atteint)}
                    className="flex cursor-pointer items-center justify-center"
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${
                        actif ? 'ring-2 ring-soleil ring-offset-2 ring-offset-encre' : ''
                      }`}
                      style={{ opacity: atteint ? 1 : 0.4 }}
                    >
                      <Lumi rang={r.index} taille={36} etat={courant ? 'repos' : 'statique'} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* La barre, sous les personnages, entre les centres des pastilles. */}
          <div className="relative h-1.5">
            <span
              aria-hidden="true"
              className="absolute inset-x-[18px] top-0 h-1.5 rounded-full bg-encre-bord"
            />
            <span
              aria-hidden="true"
              className="absolute left-[18px] top-0 h-1.5 rounded-full bg-soleil transition-[width] duration-500"
              style={{ width: `calc((100% - 36px) * ${fractionFrise})` }}
            />
          </div>

          {/* Les seuils, alignés sous chaque pastille. */}
          <ol className="flex justify-between">
            {RANGS.map((r) => (
              <li
                key={r.index}
                className="w-9 text-center text-[11px] tabular-nums text-craie-douce"
              >
                {r.seuil}
              </li>
            ))}
          </ol>
        </div>

        {/* Légende du rang sélectionné (le rang courant par défaut). */}
        <p aria-live="polite" className="text-center text-sm text-craie">
          <span aria-hidden="true">{selection.icone}</span>{' '}
          <span className="font-display">{localise(selection.nom, locale)}</span>
          {' '}
          {selectionAtteinte ? (
            t('lumi.rang-atteint')
          ) : (
            <>
              {t('lumi.reste')(selection.seuil - etoiles)} <span aria-hidden="true">⭐</span>
            </>
          )}
        </p>
      </section>

      {/* Le cabinet : là où les étoiles se dépensent, à côté de là où elles se comptent. */}
      <Link
        href="/lumi/cabinet"
        className="flex min-h-16 items-center gap-4 rounded-3xl border-2 border-soleil/50 bg-soleil/5 px-5 transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        <span aria-hidden="true" className="text-3xl">
          🗄️
        </span>
        <span className="flex flex-1 flex-col">
          <span className="font-display text-lg text-craie">{t('lumi.vers-cabinet')}</span>
          <span className="text-sm text-craie-douce">
            {t('lumi.vers-cabinet-detail')(possedes.length, objetsCabinet.length)}
          </span>
        </span>
        <span aria-hidden="true" className="text-2xl text-craie-douce">
          ›
        </span>
      </Link>

      {/*
        Progression par monde : écoute (→ 🧭) et réussite au quizz (→ 🏅). Les
        deux médailles étaient affichées sans jamais être expliquées, et sans
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
                    style={{ backgroundColor: 'var(--color-encre)', boxShadow: `0 0 16px ${style.halo}` }}
                  >
                    {domain.icon}
                  </span>
                  <span className="flex flex-col">
                    <span className="font-display text-lg text-craie">
                      {localise(domain.labels, locale)}
                    </span>
                    <span className="text-sm text-craie-douce">
                      <span aria-hidden="true">🧭</span>{' '}
                      {t('lumi.monde')(vues, reussies, total)}
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
