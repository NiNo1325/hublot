'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { construirePlateau, sApparient, type TuileMemo, type VarianteMemo } from '@/lib/memo';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { jouerSonPaire, jouerSonRate, jouerSonRecompense } from '@/lib/sonRecompense';

interface MemoViewProps {
  cards: ScienceCard[];
  variante: VarianteMemo;
}

/** Temps pendant lequel une paire ratée reste visible avant de se retourner. */
const RETOURNEMENT_MS = 900;

/**
 * Le Mémo.
 *
 * Le seul mode où l'on ne compte rien : ni étoile, ni chrono, ni record. Les
 * deux autres jeux récompensent ; celui-ci se joue pour lui-même, et c'est
 * délibéré — il faut un endroit où l'enfant ne soit pas mesuré. Le nombre de
 * coups s'affiche parce qu'il aide à jouer, pas parce qu'il est conservé.
 *
 * La variante `cartes` demande de lire : elle est fermée aux 3-5 ans, à qui le
 * mode `images` reste entièrement ouvert. C'est ce qui évite de leur laisser
 * un onglet Joue vide, le Défi chrono leur étant déjà fermé.
 */
export function MemoView({ cards, variante }: MemoViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { locale } = useLocale();
  const { etoiles } = useEtoiles();
  const t = useT();

  const [plateau, setPlateau] = useState<TuileMemo[] | null>(null);
  const [retournees, setRetournees] = useState<string[]>([]);
  const [trouvees, setTrouvees] = useState<string[]>([]);
  const [coups, setCoups] = useState(0);
  const minuterieRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Une minuterie de retournement qui survivrait au démontage retournerait des
  // tuiles sur un plateau qui n'existe plus.
  useEffect(
    () => () => {
      if (minuterieRef.current) clearTimeout(minuterieRef.current);
    },
    [],
  );

  if (status === 'chargement' || !ageRange) return null;

  if (variante === 'cartes' && ageRange === '3-5') {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🃏
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('memo.trop-jeune.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">{t('memo.trop-jeune.texte')}</p>
        <button
          type="button"
          onClick={() => router.push('/joue/memo')}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('memo.vers-images')}
        </button>
      </main>
    );
  }

  const lancer = () => {
    if (minuterieRef.current) clearTimeout(minuterieRef.current);
    setPlateau(construirePlateau(cards, ageRange, variante, locale));
    setRetournees([]);
    setTrouvees([]);
    setCoups(0);
  };

  const retourner = (tuile: TuileMemo) => {
    if (!plateau) return;
    // Deux tuiles déjà en l'air : on attend qu'elles se referment.
    if (retournees.length >= 2) return;
    if (retournees.includes(tuile.id) || trouvees.includes(tuile.paire)) return;

    const ouvertes = [...retournees, tuile.id];
    setRetournees(ouvertes);
    if (ouvertes.length < 2) return;

    setCoups((n) => n + 1);
    const [a, b] = ouvertes.map((id) => plateau.find((tu) => tu.id === id)!);
    /*
      Le son porte le verdict. Sans lui, l'enfant devait déduire sa réussite du
      fait que les tuiles ne se retournaient pas — un signal en creux, qu'on ne
      comprend qu'en connaissant déjà la règle.
    */
    if (sApparient(a, b)) {
      const complet = trouvees.length + 1 === plateau.length / 2;
      // La dernière paire n'a pas droit à deux sons qui se chevauchent : c'est
      // la fanfare de fin qui l'emporte.
      if (complet) jouerSonRecompense();
      else jouerSonPaire();
      setTrouvees((liste) => [...liste, a.paire]);
      setRetournees([]);
      return;
    }
    jouerSonRate();
    minuterieRef.current = setTimeout(() => setRetournees([]), RETOURNEMENT_MS);
  };

  const titre = variante === 'images' ? t('memo.images.titre') : t('memo.cartes.titre');

  if (plateau === null) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🃏
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{titre}</h1>
        <p className="max-w-md text-craie-douce">
          {variante === 'images' ? t('memo.images.regle') : t('memo.cartes.regle')}
        </p>
        <button
          type="button"
          onClick={lancer}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('memo.demarrer')}
        </button>
      </main>
    );
  }

  const gagne = trouvees.length * 2 === plateau.length;

  if (gagne) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <Lumi rang={rangDepuisEtoiles(etoiles).rang.index} taille={120} etat="fete" />
        <div className="flex flex-col items-center gap-2">
          <p className="font-display text-lg text-soleil">{t('memo.bravo')}</p>
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            {t('memo.coups')(coups)}
          </h1>
        </div>
        <div className="flex w-full max-w-xs flex-col items-center gap-3">
          <button
            type="button"
            onClick={lancer}
            className="min-h-16 w-full cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('memo.rejouer')}
          </button>
          <button
            type="button"
            onClick={() => router.push('/joue')}
            className="min-h-14 w-full cursor-pointer rounded-full border-2 border-encre-bord px-6 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            {t('chrono.retour')}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-5 py-8">
      <header className="flex items-center justify-between gap-3">
        <h1 className="font-display text-lg text-craie">{titre}</h1>
        <span className="text-sm tabular-nums text-craie-douce">{t('memo.coups')(coups)}</span>
      </header>

      <ul className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {plateau.map((tuile) => {
          const ouverte = retournees.includes(tuile.id) || trouvees.includes(tuile.paire);
          const style = domainStyles[tuile.domainId];
          return (
            <li key={tuile.id}>
              <button
                type="button"
                onClick={() => retourner(tuile)}
                disabled={ouverte}
                aria-label={ouverte ? tuile.face : t('memo.tuile-cachee')}
                className="flex aspect-square w-full cursor-pointer items-center justify-center rounded-2xl border-2 p-1 transition-transform duration-150 hover:scale-105 active:scale-95 disabled:cursor-default disabled:hover:scale-100"
                style={{
                  borderColor: ouverte ? style.teinte : 'var(--color-encre-bord)',
                  backgroundColor: 'var(--color-encre-clair)',
                  boxShadow: ouverte ? `0 0 18px ${style.halo}` : 'none',
                  /* Une paire trouvée s'efface sans disparaître : la place reste
                     lisible, et l'enfant voit ce qu'il a déjà gagné. */
                  opacity: trouvees.includes(tuile.paire) ? 0.45 : 1,
                }}
              >
                {ouverte ? (
                  tuile.genre === 'emoji' ? (
                    <span className="text-3xl sm:text-4xl" aria-hidden="true">
                      {tuile.face}
                    </span>
                  ) : (
                    <span className="text-center text-[11px] font-medium leading-tight text-craie sm:text-xs">
                      {tuile.face}
                    </span>
                  )
                ) : (
                  <span className="text-2xl opacity-30" aria-hidden="true">
                    ✦
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
