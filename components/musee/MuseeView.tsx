'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import type { SavantPrisonnier } from '@/content/savants-cartes';
import { EPOQUES, peutLiberer, savantsDeLEpoque, type IdEpoque } from '@/lib/cles';
import { prochaineAction } from '@/lib/prochaine-action';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { histoire } from '@/content/histoire';
import { Lumi } from '@/components/mascotte/Lumi';
import { Intitule } from '@/components/ui/Intitule';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { CardModal } from '@/components/cards/CardModal';
import { useCelebration } from '@/components/celebration/CelebrationProvider';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';
import { useMusee } from './useLiberes';
import { useHistoireAudio } from './useHistoireAudio';
import { Bandeau } from './Bandeau';
import { Cellule } from './Cellule';
import { FicheSavant } from './FicheSavant';
import { JalonEpoque } from './JalonEpoque';

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
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const [ouvert, setOuvert] = useState<SavantPrisonnier | null>(null);
  /* La carte qu'on écoute depuis la fiche d'un savant, sans quitter le musée. */
  const [carteEcoutee, setCarteEcoutee] = useState<ScienceCard | null>(null);
  const cellules = useRef(new Map<string, HTMLElement>());
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
        {/*
          Lumi mène à ses rangs, et l'étoile du bandeau à son cabinet : on va chez
          elle en la touchant, et l'on suit sa monnaie jusqu'à là où elle se
          dépense. La liste qui traînait tout en bas de l'écran était enterrée
          sous cent treize cellules, où personne ne descend.
        */}
        <Link
          href="/lumi/rangs"
          aria-label={t('musee.vers-rangs')}
          className="rounded-full transition-transform hover:scale-105 active:scale-95"
        >
          <Lumi rang={rang.index} taille={80} etat={enLecture ? 'content' : 'repos'} />
        </Link>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('musee.titre')}</h1>

        <Bandeau
          raconter={liberes.length === 0}
          texteRecit={localise(histoire[indexDit].texte, locale)}
          enLecture={enLecture !== null}
          onEcouter={() => jouer(histoire[0].id)}
          onArreter={arreter}
          cles={solde}
          delivres={liberes.length}
          total={total}
          action={prochaineAction(cards, cartesVues, cartesMaitrisees, liberes, gagnees, depensees)}
          onAllerAuSavant={(id) =>
            cellules.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        />

        {/*
          La règle du jeu, juste sous le bouton de Lumi. Elle traînait tout en bas,
          après cent treize cellules : personne n'y descendait, et c'est pourtant la
          seule phrase qui dise ce que coûte une cellule.
        */}
        <p className="max-w-md px-2 text-center text-sm leading-relaxed text-craie-douce">
          {t('musee.legende')}
        </p>
      </header>

      {/*
        Le mur et sa ligne du temps, dans une seule grille à deux colonnes : une
        époque et sa galerie partagent la même ligne, donc la même hauteur. La
        frise était auparavant un rail fixe, collé en haut, dont les jalons
        étaient répartis à intervalles égaux sans aucun rapport avec la hauteur
        réelle des galeries — le XIXᵉ siècle et ses trente-six cellules occupaient
        autant de frise que le Moyen Âge et ses trois.
      */}
      <div className="grid grid-cols-[auto_1fr] gap-x-2 sm:gap-x-4">
        {EPOQUES.map((epoque, rang) => {
          const dedans = savantsDeLEpoque(epoque);
          if (dedans.length === 0) return null;
          return (
            <Fragment key={epoque.id}>
              <JalonEpoque
                epoque={epoque}
                rang={rang}
                dernier={rang === EPOQUES.length - 1}
                libres={compte[epoque.id].libres}
                total={compte[epoque.id].total}
                active={active === epoque.id}
              />

              <section
                data-epoque={epoque.id}
                ref={(el) => {
                  if (el) galeries.current.set(epoque.id, el);
                  else galeries.current.delete(epoque.id);
                }}
                className="flex min-w-0 scroll-mt-4 flex-col gap-2 pb-5"
              >
                <div className="flex items-baseline justify-between px-1">
                  <Intitule>{t(CLE_EPOQUE[epoque.id])}</Intitule>
                  <span className="text-xs tabular-nums text-craie-douce">
                    {compte[epoque.id].libres}/{dedans.length}
                  </span>
                </div>
                <ul className="grid grid-cols-3 gap-2 rounded-3xl border-2 border-encre-bord bg-[#0d1424] p-2.5 sm:grid-cols-4 sm:gap-3 sm:p-4">
                  {dedans.map((s) => (
                    <span
                      key={s.id}
                      ref={(el) => {
                        if (el) cellules.current.set(s.id, el);
                        else cellules.current.delete(s.id);
                      }}
                      className="contents"
                    >
                    <Cellule
                      savant={s}
                      libere={liberes.includes(s.id)}
                      abordable={abordable(s)}
                      onOuvrir={setOuvert}
                    />
                    </span>
                  ))}
                </ul>
              </section>
            </Fragment>
          );
        })}
      </div>

      {ouvert && (
        <FicheSavant
          savant={ouvert}
          libere={liberes.includes(ouvert.id)}
          abordable={abordable(ouvert)}
          solde={solde}
          cards={cards}
          onLiberer={() => delivrer(ouvert)}
          onEcouterCarte={(carte) => {
            // La fiche se ferme : deux surcouches empilées rendraient la
            // fermeture ambiguë, et l'enfant veut revenir au mur, pas à la fiche.
            setOuvert(null);
            setCarteEcoutee(carte);
          }}
          onFermer={() => setOuvert(null)}
        />
      )}

      {carteEcoutee && (
        <CardModal
          key={carteEcoutee.id}
          card={carteEcoutee}
          ageRange={ageRange}
          onClose={() => setCarteEcoutee(null)}
        />
      )}

    </main>
  );
}
