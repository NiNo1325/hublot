'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import type { SavantPrisonnier } from '@/content/savants-cartes';
import {
  EPOQUES,
  epoqueAOuvrir,
  epoqueDuSavant,
  peutLiberer,
  savantsDeLEpoque,
  type IdEpoque,
} from '@/lib/cles';
import { prochaineAction } from '@/lib/prochaine-action';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { histoire } from '@/content/histoire';
import { Lumi } from '@/components/mascotte/Lumi';
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
 * Le mur est aussi la carte de progression, et non un écran de plus : on voit
 * ce qui est éclairé et ce qui reste dans le noir, sans qu'aucun pourcentage ait
 * à le dire. Il se lit par époques, seul découpage qui partitionne proprement —
 * un savant a une date de naissance unique, mais tient souvent des cartes de
 * plusieurs mondes.
 *
 * **Une galerie ouverte à la fois.** Les cent treize niches déployées d'un seul
 * tenant faisaient un mur de vignettes où le regard ne se posait nulle part —
 * les testeurs l'ont dit ainsi : « encombré ». Repliée, une époque garde
 * pourtant tout ce qu'elle disait : son nom, son compte, et une jauge qui montre
 * d'un coup d'œil ce qui y reste enfermé. On perd le panorama, on gagne de
 * pouvoir le lire.
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
  /*
    La galerie ouverte.

    `null` tant que l'enfant n'a touché à rien : le mur s'ouvre alors de lui-même
    sur la première époque encore incomplète, et suit la progression sans qu'on
    ait à l'enregistrer nulle part. Dès le premier geste, son choix prime — y
    compris « tout replié », qui doit rester atteignable sous peine d'un chevron
    qui ne referme rien.
  */
  const [choix, setChoix] = useState<IdEpoque | 'aucune' | null>(null);
  /*
    Le savant que le bandeau désigne, gardé le temps que son époque s'ouvre.

    Une référence et non un état : rien ne s'affiche à partir de lui, et le
    remettre à zéro depuis l'effet imposerait un rendu de plus pour une valeur
    que personne ne lit.
  */
  const aRejoindre = useRef<string | null>(null);

  const apres = (id: string) => {
    const i = histoire.findIndex((h) => h.id === id);
    return i >= 0 && i + 1 < histoire.length ? histoire[i + 1].id : null;
  };
  const { jouer, arreter, enLecture } = useHistoireAudio(apres);

  /* L'époque dépliée : le choix de l'enfant, ou la première encore incomplète. */
  const ouverte = choix === null ? epoqueAOuvrir(liberes) : choix === 'aucune' ? null : choix;

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  /*
    Rejoindre le savant que le bandeau propose de délivrer.

    Il dort peut-être dans une époque repliée, dont les cellules ne sont même pas
    rendues : on ouvre d'abord, on défile ensuite. D'où ce report plutôt qu'un
    `scrollIntoView` immédiat — l'effet ne s'exécute qu'après le rendu qui a fait
    exister la cellule.

    Cet aller-vers remplace l'observateur de défilement qui marquait autrefois
    l'époque « regardée » : avec une seule galerie ouverte, l'époque regardée est
    celle qui est ouverte, et il n'y a plus rien à déduire de la position.
  */
  useEffect(() => {
    const id = aRejoindre.current;
    if (!id) return;
    aRejoindre.current = null;
    cellules.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [ouverte]);

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

  const allerAuSavant = (id: string) => {
    const epoque = epoqueDuSavant(id);
    /* Époque déjà ouverte : la cellule existe, on y va sans attendre un rendu. */
    if (!epoque || epoque === ouverte) {
      cellules.current.get(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    aRejoindre.current = id;
    setChoix(epoque);
  };

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
          onAllerAuSavant={allerAuSavant}
        />

        {/*
          La règle du jeu, juste sous le bouton de Lumi. Elle traînait tout en bas,
          après cent treize cellules : personne n'y descendait, et c'est pourtant la
          seule phrase qui dise ce que coûte une cellule.
        */}
        <p className="max-w-md px-2 text-center text-base leading-relaxed text-craie-douce">
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
          const { libres } = compte[epoque.id];
          const deplie = ouverte === epoque.id;
          const nom = t(CLE_EPOQUE[epoque.id]);
          return (
            <Fragment key={epoque.id}>
              <JalonEpoque
                epoque={epoque}
                rang={rang}
                dernier={rang === EPOQUES.length - 1}
                libres={libres}
                total={dedans.length}
                deplie={deplie}
              />

              <section className="flex min-w-0 scroll-mt-4 flex-col gap-2 pb-5">
                {/*
                  L'intitulé est devenu la poignée de l'époque. Il porte tout ce
                  qu'il faut pour décider d'ouvrir sans ouvrir : le nom, le
                  compte, et la jauge — la forme courte du mur qu'elle cache.
                */}
                <h2>
                  <button
                    type="button"
                    onClick={() => setChoix(deplie ? 'aucune' : epoque.id)}
                    aria-expanded={deplie}
                    aria-controls={`galerie-${epoque.id}`}
                    aria-label={t('musee.epoque-etat')(nom, libres, dedans.length)}
                    className={`flex min-h-[4.5rem] w-full cursor-pointer items-center gap-3 rounded-3xl border-2 px-4 py-3 text-left transition-colors ${
                      deplie
                        ? 'border-soleil/50 bg-soleil/5'
                        : 'border-encre-bord bg-encre-clair/40 hover:border-soleil/50'
                    }`}
                  >
                    <span aria-hidden="true" className="flex min-w-0 flex-1 flex-col gap-2">
                      <span className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-craie">
                        {nom}
                      </span>
                      <span className="h-1.5 w-full overflow-hidden rounded-full bg-encre">
                        <span
                          className="block h-full rounded-full bg-soleil transition-[width] duration-500"
                          style={{ width: `${(libres / dedans.length) * 100}%` }}
                        />
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 font-display text-base tabular-nums text-craie"
                    >
                      {libres}
                      <span className="text-craie-douce/60">/{dedans.length}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-xl leading-none text-craie-douce transition-transform duration-200 ${
                        deplie ? 'rotate-90' : ''
                      }`}
                    >
                      ›
                    </span>
                  </button>
                </h2>

                {deplie && (
                  <ul
                    id={`galerie-${epoque.id}`}
                    className="grid grid-cols-3 gap-3 rounded-3xl border-2 border-encre-bord bg-[#0d1424] p-3 sm:grid-cols-4 sm:gap-4 sm:p-4"
                  >
                    {dedans.map((s) => (
                      <Cellule
                        key={s.id}
                        ref={(el) => {
                          if (el) cellules.current.set(s.id, el);
                          else cellules.current.delete(s.id);
                        }}
                        savant={s}
                        libere={liberes.includes(s.id)}
                        abordable={abordable(s)}
                        onOuvrir={setOuvert}
                      />
                    ))}
                  </ul>
                )}
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
