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
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useSavantAudio } from '@/components/savants/useSavantAudio';
import Image from 'next/image';
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
 * mode `savants` reste entièrement ouvert. C'est ce qui évite de leur laisser
 * un onglet Joue vide, le Défi chrono leur étant déjà fermé.
 *
 * Quand une paire de savants tombe, le nom s'affiche et se prononce. C'est ce
 * qui transforme un jeu de mémoire en rencontre : on croise vingt visages et
 * vingt noms sans avoir à aller les chercher.
 */
export function MemoView({ cards, variante }: MemoViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { locale } = useLocale();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const t = useT();
  const { jouerNom } = useSavantAudio(ageRange ?? '6-8');

  const [plateau, setPlateau] = useState<TuileMemo[] | null>(null);
  const [retournees, setRetournees] = useState<string[]>([]);
  const [trouvees, setTrouvees] = useState<string[]>([]);
  const [coups, setCoups] = useState(0);
  /** Nom de la dernière paire trouvée, annoncé sous le plateau. */
  const [dernierNom, setDernierNom] = useState<string | null>(null);
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

  /*
    La variante « cartes » ne pioche que dans les cartes déjà écoutées : sans
    cela, le lien entre un dessin et un titre n'est pas déductible et le jeu
    se finit par épuisement plutôt que par mémoire.
  */
  const disponibles =
    variante === 'cartes' ? cards.filter((c) => cartesVues.has(c.id)) : cards;

  const lancer = () => {
    if (minuterieRef.current) clearTimeout(minuterieRef.current);
    setDernierNom(null);
    setPlateau(construirePlateau(disponibles, ageRange, variante, locale));
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
      if (a.nom) {
        setDernierNom(a.nom);
        jouerNom(a.paire);
      }
      setTrouvees((liste) => [...liste, a.paire]);
      setRetournees([]);
      return;
    }
    jouerSonRate();
    minuterieRef.current = setTimeout(() => setRetournees([]), RETOURNEMENT_MS);
  };

  const titre = variante === 'savants' ? t('memo.savants.titre') : t('memo.cartes.titre');

  if (plateau === null) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🃏
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{titre}</h1>
        <p className="max-w-md text-craie-douce">
          {variante === 'savants' ? t('memo.savants.regle') : t('memo.cartes.regle')}
        </p>
        {disponibles.length >= 2 ? (
          <button
            type="button"
            onClick={lancer}
            className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('memo.demarrer')}
          </button>
        ) : (
          /* Deux cartes écoutées au minimum : en dessous, il n'y a pas de partie. */
          <p className="max-w-md text-craie-douce">{t('memo.pas-assez')}</p>
        )}
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

      {/* Le nom de la dernière paire trouvée, annoncé aussi à la voix. */}
      {dernierNom && (
        <p aria-live="polite" className="text-center font-display text-lg text-soleil">
          {dernierNom}
        </p>
      )}

      <ul
        className={
          variante === 'cartes' ? 'grid grid-cols-2 gap-3' : 'grid grid-cols-4 gap-2.5 sm:gap-3'
        }
      >
        {plateau.map((tuile) => {
          const ouverte = retournees.includes(tuile.id) || trouvees.includes(tuile.paire);
          // Un savant n'appartient à aucun domaine : il porte la teinte du soleil.
          const style = tuile.domainId ? domainStyles[tuile.domainId] : null;
          const teinte = style?.teinte ?? 'var(--color-soleil)';
          const halo = style?.halo ?? 'rgba(255,182,39,0.35)';
          return (
            <li key={tuile.id}>
              <button
                type="button"
                onClick={() => retourner(tuile)}
                disabled={ouverte}
                aria-label={ouverte ? (tuile.nom ?? tuile.face) : t('memo.tuile-cachee')}
                className={`flex w-full cursor-pointer items-center justify-center rounded-2xl border-2 p-1 transition-transform duration-150 hover:scale-105 active:scale-95 disabled:cursor-default disabled:hover:scale-100 ${
                  variante === 'cartes' ? 'min-h-20' : 'aspect-square'
                }`}
                style={{
                  borderColor: ouverte ? teinte : 'var(--color-encre-bord)',
                  backgroundColor: 'var(--color-encre-clair)',
                  boxShadow: ouverte ? `0 0 18px ${halo}` : 'none',
                  /* Une paire trouvée s'efface sans disparaître : la place reste
                     lisible, et l'enfant voit ce qu'il a déjà gagné. */
                  opacity: trouvees.includes(tuile.paire) ? 0.45 : 1,
                }}
              >
                {ouverte ? (
                  tuile.genre === 'portrait' ? (
                    <Image
                      src={tuile.face}
                      alt=""
                      width={640}
                      height={640}
                      className="h-full w-full rounded-xl object-cover"
                    />
                  ) : tuile.genre === 'emoji' ? (
                    <span className="text-3xl sm:text-4xl" aria-hidden="true">
                      {tuile.face}
                    </span>
                  ) : (
                    <span className="px-1 text-center text-xs font-medium leading-snug text-craie sm:text-sm">
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
