'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Affirmation } from '@/lib/types';
import { construireManche, peutJouer } from '@/lib/vrai-faux';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { localise } from '@/lib/i18n/localise';
import { cheminAudio } from '@/lib/i18n/audio';
import { usePauseEnArrierePlan } from '@/lib/usePauseEnArrierePlan';
import { jouerSonPaire, jouerSonRate, jouerSonRecompense } from '@/lib/sonRecompense';

/**
 * Vrai ou faux : Lumi affirme, l'enfant tranche.
 *
 * C'est le seul format de l'application où il faut **contredire quelqu'un**.
 * Cocher la bonne case dans une liste de trois se fait à moitié au flair ;
 * répondre « non, c'est faux » à une phrase qu'on vient d'entendre demande d'y
 * croire un peu. C'est pour ça que le jeu vise les idées reçues, et rien
 * d'autre.
 *
 * L'affirmation est lue à voix haute dès qu'elle s'affiche : sans cela le jeu
 * serait réservé aux lecteurs, alors que les idées fausses commencent bien
 * avant la lecture. La réponse de Lumi se lit ensuite, juste ou faux — c'est le
 * moment où le jeu enseigne, et il ne doit surtout pas être réservé à ceux qui
 * se sont trompés.
 *
 * On ne compte pas les erreurs : on compte les affirmations vues. Le score
 * final dit ce qui a été trouvé, jamais ce qui a été raté.
 */
export function VraiFauxView() {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const { locale } = useLocale();
  const t = useT();

  const [manche, setManche] = useState<Affirmation[] | null>(null);
  const [index, setIndex] = useState(0);
  const [verdict, setVerdict] = useState<'juste' | 'rate' | null>(null);
  const [trouvees, setTrouvees] = useState(0);

  /*
    La voix, montée une seule fois : deux clips se succèdent — l'affirmation,
    puis la réponse de Lumi — et un nouvel objet Audio à chaque rendu couperait
    le précédent en plein milieu.
  */
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const localeRef = useRef(locale);
  useEffect(() => {
    localeRef.current = locale;
  });
  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const dire = useCallback((suffixe: string) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = cheminAudio(localeRef.current, suffixe);
    audio.play().catch(() => {});
  }, []);

  const arreter = useCallback(() => {
    const audio = audioRef.current;
    if (audio && !audio.paused) audio.pause();
  }, []);
  usePauseEnArrierePlan(arreter);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  const courante = manche?.[index] ?? null;

  // L'affirmation se dit dès qu'elle paraît : le jeu doit s'entendre, pas se lire.
  useEffect(() => {
    if (courante && verdict === null) dire(`affirmations/${courante.cardId}.mp3`);
  }, [courante, verdict, dire]);

  if (status === 'chargement' || !ageRange) return null;

  const lancer = () => {
    setManche(construireManche(cartesVues, ageRange));
    setIndex(0);
    setVerdict(null);
    setTrouvees(0);
  };

  const repondre = (reponse: boolean) => {
    if (!courante || verdict !== null) return;
    const juste = reponse === courante.vrai;
    if (juste) {
      setTrouvees((n) => n + 1);
      jouerSonPaire();
    } else {
      jouerSonRate();
    }
    setVerdict(juste ? 'juste' : 'rate');
    // La réponse de Lumi tombe dans les deux cas : c'est là que le jeu enseigne.
    dire(`affirmations/${courante.cardId}-reponse.mp3`);
  };

  const suivante = () => {
    if (!manche) return;
    if (index + 1 >= manche.length) {
      jouerSonRecompense();
      setIndex(manche.length);
    } else {
      setIndex((i) => i + 1);
    }
    setVerdict(null);
  };

  const rang = rangDepuisEtoiles(etoiles).rang.index;

  /* Rien d'écouté : le jeu n'a pas de matière, et la question serait un tirage au sort. */
  if (!peutJouer(cartesVues)) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
        <Lumi rang={rang} taille={110} etat="repos" />
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">
          {t('vrai-faux.vide.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">{t('vrai-faux.vide.texte')}</p>
        <Link
          href="/decouvrir"
          className="flex min-h-14 items-center rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('vrai-faux.vide.action')}
        </Link>
      </main>
    );
  }

  if (manche === null) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🤔
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('vrai-faux.titre')}</h1>
        <p className="max-w-md text-craie-douce">{t('vrai-faux.regle')}</p>
        <button
          type="button"
          onClick={lancer}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('vrai-faux.demarrer')}
        </button>
      </main>
    );
  }

  if (index >= manche.length) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <Lumi rang={rang} taille={120} etat="fete" />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('vrai-faux.fini')(trouvees, manche.length)}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={lancer}
            className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('vrai-faux.rejouer')}
          </button>
          <button
            type="button"
            onClick={() => router.push('/joue')}
            className="min-h-14 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            {t('vrai-faux.retour')}
          </button>
        </div>
      </main>
    );
  }

  if (!courante) return null;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-8">
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t('vrai-faux.titre')}</h1>
        <p className="text-sm text-craie-douce">
          {t('vrai-faux.progression')(index + 1, manche.length)}
        </p>
      </header>

      {/* Lumi et sa phrase : c'est elle qui affirme, et c'est elle qu'on contredit. */}
      <section className="flex flex-col items-center gap-4 text-center">
        <Lumi rang={rang} taille={90} etat={verdict === 'juste' ? 'fete' : 'repos'} />
        <div className="flex w-full items-start gap-2 rounded-3xl border-2 border-encre-bord bg-encre-clair p-4">
          <p className="flex-1 text-left font-display text-lg leading-snug text-craie">
            {localise(courante.texte, locale)}
          </p>
          <button
            type="button"
            onClick={() => dire(`affirmations/${courante.cardId}.mp3`)}
            aria-label={t('vrai-faux.reecouter')}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord transition-colors hover:border-soleil"
          >
            <span aria-hidden="true">🔊</span>
          </button>
        </div>
      </section>

      {verdict === null ? (
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => repondre(true)}
            className="flex min-h-20 flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-3xl border-2 border-[#a3e635] bg-[#a3e635]/10 font-display text-lg text-[#a3e635] transition-transform hover:scale-105 active:scale-95"
          >
            <span aria-hidden="true" className="text-2xl">
              👍
            </span>
            {t('vrai-faux.vrai')}
          </button>
          <button
            type="button"
            onClick={() => repondre(false)}
            className="flex min-h-20 flex-1 cursor-pointer flex-col items-center justify-center gap-1 rounded-3xl border-2 border-[#fb7185] bg-[#fb7185]/10 font-display text-lg text-[#fb7185] transition-transform hover:scale-105 active:scale-95"
          >
            <span aria-hidden="true" className="text-2xl">
              👎
            </span>
            {t('vrai-faux.faux')}
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <p
            aria-live="polite"
            className={`text-center font-display text-lg ${
              verdict === 'juste' ? 'text-[#a3e635]' : 'text-soleil'
            }`}
          >
            {verdict === 'juste' ? t('vrai-faux.bravo') : t('vrai-faux.rate')}
          </p>
          {/* La réponse tombe même quand l'enfant a bon : c'est elle qui apprend. */}
          <p className="rounded-3xl border-2 border-encre-bord bg-encre-clair p-4 text-center leading-relaxed text-craie-douce">
            {localise(courante.reponse, locale)}
          </p>
          <button
            type="button"
            onClick={suivante}
            className="min-h-14 cursor-pointer self-center rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('vrai-faux.suivante')}
          </button>
        </div>
      )}
    </main>
  );
}
