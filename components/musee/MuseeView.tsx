'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import type { SavantPrisonnier } from '@/content/savants-cartes';
import { EPOQUES, peutLiberer, savantsDeLEpoque } from '@/lib/cles';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { Intitule } from '@/components/ui/Intitule';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCelebration } from '@/components/celebration/CelebrationProvider';
import { useT } from '@/components/i18n/useT';
import { useMusee } from './useLiberes';
import { Cellule } from './Cellule';
import { FicheSavant } from './FicheSavant';

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
 * Le musée : le mur des savants, et le fil conducteur de l'application.
 *
 * Ce n'est pas un écran de progression de plus — c'en est un par construction.
 * Cent treize niches : on voit d'un coup ce qui est éclairé et ce qui reste dans
 * le noir, sans qu'aucun pourcentage ait à le dire.
 *
 * Le mur se lit par époques, de l'Antiquité à aujourd'hui. C'est le seul
 * découpage qui partitionne proprement — un savant a une seule date de
 * naissance, mais tient souvent des cartes de plusieurs mondes. Le résultat est
 * très déséquilibré, et c'est tant mieux : le déséquilibre est vrai, la science
 * explose au XIXᵉ siècle, et l'enfant le voit avant qu'on le lui dise.
 */
export function MuseeView({ cards }: MuseeViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { liberes, gagnees, depensees, solde, total, liberer } = useMusee();
  const celebrer = useCelebration();
  const t = useT();
  const [ouvert, setOuvert] = useState<SavantPrisonnier | null>(null);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const { rang } = rangDepuisEtoiles(etoiles);
  const abordable = (s: SavantPrisonnier) => peutLiberer(gagnees, depensees, liberes, s);
  const rangee =
    'flex min-h-14 items-center gap-3 px-5 py-3 transition-colors hover:bg-encre-bord/30';

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
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8">
      <header className="flex flex-col items-center gap-3 text-center">
        <Lumi rang={rang.index} taille={72} etat="repos" interactif />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('musee.titre')}</h1>
        <p className="max-w-md text-craie-douce">{t('musee.texte')}</p>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <p className="font-display text-lg text-craie">
            {t('musee.compte')(liberes.length, total)}
          </p>
          <p className="font-display text-lg text-soleil">
            {solde} <span aria-hidden="true">🔑</span>
          </p>
        </div>

        <Link
          href="/musee/histoire"
          className="rounded-full border-2 border-encre-bord px-5 py-2 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          {t('musee.vers-histoire')}
        </Link>
      </header>

      {EPOQUES.map((epoque) => {
        const dedans = savantsDeLEpoque(epoque);
        if (dedans.length === 0) return null;
        const libresIci = dedans.filter((s) => liberes.includes(s.id)).length;
        return (
          <section key={epoque.id} className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between px-1">
              <Intitule>{t(CLE_EPOQUE[epoque.id])}</Intitule>
              <span className="text-xs tabular-nums text-craie-douce">
                {libresIci}/{dedans.length}
              </span>
            </div>
            <ul className="grid grid-cols-4 gap-2 rounded-3xl border-2 border-encre-bord bg-[#0d1424] p-3 sm:grid-cols-6">
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

      {ouvert && (
        <FicheSavant
          savant={ouvert}
          libere={liberes.includes(ouvert.id)}
          abordable={abordable(ouvert)}
          solde={solde}
          cards={cards}
          onLiberer={() => {
            delivrer(ouvert);
            // La fiche reste ouverte : on veut voir le visage apparaître, et
            // lire aussitôt ce que ce savant a trouvé.
          }}
          onFermer={() => setOuvert(null)}
        />
      )}

      <p className="px-2 text-center text-xs leading-relaxed text-craie-douce/80">
        {t('musee.legende')}
      </p>

      {/*
        Lumi habite le musée : ses rangs et son cabinet sont ici, à un geste, au
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
          <Link href="/lumi/mondes" className={rangee}>
            <span aria-hidden="true" className="text-2xl">
              🧭
            </span>
            <span className="flex-1 text-craie">{t('lumi.vers-mondes')}</span>
            <span aria-hidden="true" className="text-xl text-craie-douce">
              ›
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
