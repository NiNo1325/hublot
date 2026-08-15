'use client';

import { useEffect, type ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { DomainId, ScienceCard } from '@/lib/types';
import { bilanGlobal } from '@/lib/prochaine-etape';
import { objetsCabinet } from '@/content/cabinet';
import { useCabinet } from '@/components/cabinet/useCabinet';
import { rangDepuisEtoiles, RANGS } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { Intitule } from '@/components/ui/Intitule';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';

interface LumiViewProps {
  cards: ScienceCard[];
  domainIds: DomainId[];
}

/** Une rangée de menu : une icône, un intitulé, ce qu'il y a derrière, un chevron. */
function Rangee({
  href,
  icone,
  label,
  detail,
}: {
  href: string;
  icone: ReactNode;
  label: string;
  detail: string;
}) {
  return (
    <Link
      href={href}
      className="flex min-h-16 items-center gap-4 px-5 py-3 transition-colors hover:bg-encre-bord/30"
    >
      <span aria-hidden="true" className="flex w-9 shrink-0 justify-center text-2xl">
        {icone}
      </span>
      <span className="flex flex-1 flex-col">
        <span className="font-display text-lg text-craie">{label}</span>
        <span className="text-sm text-craie-douce">{detail}</span>
      </span>
      <span aria-hidden="true" className="text-xl leading-none text-craie-douce">
        ›
      </span>
    </Link>
  );
}

/**
 * L'écran de Lumi : son portrait, puis un menu.
 *
 * Il portait tout à la file — le rang, l'échelle des six rangs, le cabinet, la
 * légende des médailles et les quinze mondes — et trois sujets empilés sur une
 * page se lisent moins bien qu'un seul. Chaque sujet a maintenant sa page, et
 * celle-ci ne garde que ce qui répond à « où en suis-je ? » : Lumi, son rang, et
 * la distance jusqu'au suivant.
 *
 * Les groupes reprennent exactement la forme des Réglages (intitulé en
 * capitales, carte de rangées) : deux menus qui se ressemblent doivent se
 * ressembler tout à fait.
 */
export function LumiView({ cards, domainIds }: LumiViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const { locale } = useLocale();
  const t = useT();
  const { possedes } = useCabinet();

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
  const reste = rangProchain ? rangProchain.seuil - etoiles : 0;
  const fraction = rangProchain
    ? Math.min(1, Math.max(0, (etoiles - rang.seuil) / (rangProchain.seuil - rang.seuil)))
    : 1;

  const bilan = bilanGlobal(cards, cartesVues, cartesMaitrisees, domainIds);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-10">
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        {t('lumi.titre')}
      </h1>

      <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 py-5">
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

      <section className="flex flex-col gap-3">
        <Intitule>{t('lumi.section-progression')}</Intitule>
        <div className="divide-y divide-encre-bord overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
          {/* Le compte de badges, court, tient sur une ligne ; le décompte en
              cartes est plus parlant mais trop long pour une rangée de menu, et
              il attend sur la page des mondes. */}
          <Rangee
            href="/lumi/mondes"
            icone="🧭"
            label={t('lumi.vers-mondes')}
            detail={t('lumi.bilan')(bilan.mondesExplores, bilan.mondesMaitrises, bilan.mondesTotal)}
          />
          {/* La mascotte plutôt qu'un emoji : la rangée qui parle de ses rangs
              montre celui qu'on porte. */}
          <Rangee
            href="/lumi/rangs"
            icone={<Lumi rang={rang.index} taille={30} etat="statique" />}
            label={t('lumi.rangs')}
            detail={t('lumi.vers-rangs-detail')(RANGS.length)}
          />
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <Intitule>{t('lumi.section-collection')}</Intitule>
        <div className="overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
          {/* Le cabinet : là où les étoiles se dépensent, à côté de là où elles se comptent. */}
          <Rangee
            href="/lumi/cabinet"
            icone="🗄️"
            label={t('lumi.vers-cabinet')}
            detail={t('lumi.vers-cabinet-detail')(possedes.length, objetsCabinet.length)}
          />
        </div>
      </section>
    </main>
  );
}
