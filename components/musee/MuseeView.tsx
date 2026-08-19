'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import type { SavantPrisonnier } from '@/content/savants-cartes';
import { EPOQUES, peutLiberer, savantsDeLEpoque, type IdEpoque } from '@/lib/cles';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { histoire } from '@/content/histoire';
import { Lumi } from '@/components/mascotte/Lumi';
import { Intitule } from '@/components/ui/Intitule';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCelebration } from '@/components/celebration/CelebrationProvider';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';
import { useMusee } from './useLiberes';
import { useHistoireAudio } from './useHistoireAudio';
import { Cellule } from './Cellule';
import { FicheSavant } from './FicheSavant';
import { LigneDuTemps } from './LigneDuTemps';

interface MuseeViewProps {
  cards: ScienceCard[];
}

/*
  Les intitulés d'époque, listés explicitement plutôt que construits à la volée :
  une clé fabriquée par concaténation échapperait au typage du dictionnaire, et
  une époque ajoutée sans sa traduction passerait inaperçue jusqu'à l'écran.
*/
const CLE_EPOQUE = {
  antiquite: 'musee.epoque.antiquite',
  'moyen-age': 'musee.epoque.moyen-age',
  renaissance: 'musee.epoque.renaissance',
  lumieres: 'musee.epoque.lumieres',
  'dix-neuvieme': 'musee.epoque.dix-neuvieme',
  vingtieme: 'musee.epoque.vingtieme',
  aujourdhui: 'musee.epoque.aujourdhui',
} as const;

/**
 * Le musée : le premier écran, et le fil conducteur de l'application.
 *
 * C'est par lui qu'on entre, et c'est voulu — un enfant qui lance Hublot tombe
 * d'abord sur les savants enfermés et sur ce que Lumi lui demande. Explorer et
 * jouer deviennent alors le moyen de les délivrer, au lieu d'être des fins en
 * soi.
 *
 * Le mur est aussi la carte de progression, et non un écran de plus : cent
 * treize niches, on voit d'un coup ce qui est éclairé et ce qui reste dans le
 * noir, sans qu'aucun pourcentage ait à le dire. Il se lit par époques, seul
 * découpage qui partitionne proprement — un savant a une date de naissance
 * unique, mais tient souvent des cartes de plusieurs mondes.
 */
export function MuseeView({ cards }: MuseeViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { liberes, gagnees, depensees, solde, total, liberer } = useMusee();
  const celebrer = useCelebration();
  const { locale } = useLocale();
  const t = useT();
  const [ouvert, setOuvert] = useState<SavantPrisonnier | null>(null);
  const [active, setActive] = useState<IdEpoque | null>(null);
  const galeries = useRef(new Map<IdEpoque, HTMLElement>());

  const apres = (id: string) => {
    const i = histoire.findIndex((h) => h.id === id);
    return i >= 0 && i + 1 < histoire.length ? histoire[i + 1].id : null;
  };
  const { jouer, arreter, enLecture } = useHistoireAudio(apres);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  /*
    L'époque qu'on regarde suit le défilement : c'est ce qui fait de la ligne du
    temps une position, et pas seulement un menu. On observe une bande haute de
    l'écran, là où l'œil se pose.
  */
  useEffect(() => {
    const observateur = new IntersectionObserver(
      (entrees) => {
        const visible = entrees.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.getAttribute('data-epoque') as IdEpoque);
      },
      { rootMargin: '-10% 0px -70% 0px' },
    );
    for (const element of galeries.current.values()) observateur.observe(element);
    return () => observateur.disconnect();
  }, [status, ageRange]);

  if (status === 'chargement' || !ageRange) return null;

  const { rang } = rangDepuisEtoiles(etoiles);
  const abordable = (s: SavantPrisonnier) => peutLiberer(gagnees, depensees, liberes, s);
  const rangee =
    'flex min-h-14 items-center gap-3 px-5 py-3 transition-colors hover:bg-encre-bord/30';

  const compte = Object.fromEntries(
    EPOQUES.map((e) => {
      const dedans = savantsDeLEpoque(e);
      return [
        e.id,
        { libres: dedans.filter((s) => liberes.includes(s.id)).length, total: dedans.length },
      ];
    }),
  ) as Record<IdEpoque, { libres: number; total: number }>;

  const indexDit = enLecture ? histoire.findIndex((h) => h.id === enLecture) : 0;

  const delivrer = (savant: SavantPrisonnier) => {
    liberer(savant.id);
    celebrer({
      rang: rang.index,
      titre: t('musee.delivre'),
      sousTitre: savant.nom,
      recompense: true,
    });
  };

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-5 px-3 py-8 sm:px-4">
      <header className="flex flex-col items-center gap-3 text-center">
        <Lumi rang={rang.index} taille={80} etat={enLecture ? 'content' : 'repos'} interactif />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('musee.titre')}</h1>

        {/*
          L'histoire, racontée d'emblée : c'est le seul endroit où la règle du jeu
          se dit en mots. Un enfant de quatre ans ne la lira pas, donc la voix de
          Lumi enchaîne les cinq temps d'une traite ; le texte suit à l'écran pour
          celui qui lit, et pour l'adulte qui veut savoir ce qu'on raconte.
        */}
        <div className="flex w-full max-w-md flex-col items-center gap-3 rounded-3xl border-2 border-soleil/40 bg-soleil/5 p-4">
          <p aria-live="polite" className="text-base leading-relaxed text-craie-douce">
            {localise(histoire[indexDit].texte, locale)}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => (enLecture ? arreter() : jouer(histoire[0].id))}
              className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
              {enLecture ? t('histoire.arreter') : t('histoire.ecouter')}
            </button>
            <Link
              href="/musee/histoire"
              className="min-h-12 rounded-full border-2 border-encre-bord px-5 py-3 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
            >
              {t('musee.vers-histoire')}
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <p className="font-display text-lg text-craie">
            {t('musee.compte')(liberes.length, total)}
          </p>
          <p className="font-display text-lg text-soleil">
            {solde} <span aria-hidden="true">🔑</span>
          </p>
        </div>
      </header>

      {/* Le mur, longé par sa ligne du temps. */}
      <div className="flex gap-2 sm:gap-4">
        <LigneDuTemps
          compte={compte}
          active={active}
          onAller={(id) =>
            galeries.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        />

        <div className="flex min-w-0 flex-1 flex-col gap-5">
          {EPOQUES.map((epoque) => {
            const dedans = savantsDeLEpoque(epoque);
            if (dedans.length === 0) return null;
            return (
              <section
                key={epoque.id}
                data-epoque={epoque.id}
                ref={(el) => {
                  if (el) galeries.current.set(epoque.id, el);
                  else galeries.current.delete(epoque.id);
                }}
                className="flex scroll-mt-4 flex-col gap-2"
              >
                <div className="flex items-baseline justify-between px-1">
                  <Intitule>{t(CLE_EPOQUE[epoque.id])}</Intitule>
                  <span className="text-xs tabular-nums text-craie-douce">
                    {compte[epoque.id].libres}/{dedans.length}
                  </span>
                </div>
                <ul className="grid grid-cols-4 gap-2 rounded-3xl border-2 border-encre-bord bg-[#0d1424] p-3 sm:grid-cols-5">
                  {dedans.map((s) => (
                    <Cellule
                      key={s.id}
                      savant={s}
                      libere={liberes.includes(s.id)}
                      abordable={abordable(s)}
                      onOuvrir={setOuvert}
                    />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      {ouvert && (
        <FicheSavant
          savant={ouvert}
          libere={liberes.includes(ouvert.id)}
          abordable={abordable(ouvert)}
          solde={solde}
          cards={cards}
          onLiberer={() => delivrer(ouvert)}
          onFermer={() => setOuvert(null)}
        />
      )}

      <p className="px-2 text-center text-xs leading-relaxed text-craie-douce/80">
        {t('musee.legende')}
      </p>

      {/*
        Lumi habite le musée : son cabinet et ses rangs sont ici, à un geste, au
        lieu d'occuper un onglet à eux. C'est le même lieu — elle vous accueille
        à l'entrée, son cabinet est une salle, le mur est la galerie.
      */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('musee.chez-lumi')}</Intitule>
        <div className="divide-y divide-encre-bord overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
          <Link href="/lumi/cabinet" className={rangee}>
            <span aria-hidden="true" className="text-2xl">
              🗄️
            </span>
            <span className="flex-1 text-craie">{t('lumi.vers-cabinet')}</span>
            <span className="font-display text-sm text-soleil">
              {etoiles} <span aria-hidden="true">⭐</span>
            </span>
            <span aria-hidden="true" className="text-xl text-craie-douce">
              ›
            </span>
          </Link>
          <Link href="/lumi/rangs" className={rangee}>
            <span aria-hidden="true" className="flex w-8 justify-center">
              <Lumi rang={rang.index} taille={26} etat="statique" />
            </span>
            <span className="flex-1 text-craie">{t('lumi.rangs')}</span>
            <span aria-hidden="true" className="text-xl text-craie-douce">
              ›
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
