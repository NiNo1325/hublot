'use client';

import { useRouter } from 'next/navigation';
import { histoire } from '@/content/histoire';
import { Lumi } from '@/components/mascotte/Lumi';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';
import { useHistoireAudio } from './useHistoireAudio';

/**
 * L'histoire que Lumi raconte : pourquoi les savants sont enfermés.
 *
 * Le texte reste à l'écran en entier — un enfant qui lit veut pouvoir relire,
 * et un adulte veut savoir ce que son enfant écoute. La voix, elle, enchaîne
 * les cinq temps d'une traite : c'est un récit, pas une liste, et rappuyer
 * entre chaque phrase le casserait en morceaux.
 *
 * Le temps en cours de lecture s'éclaire, pour que le non-lecteur sache où en
 * est la voix.
 */
export function HistoireView() {
  const router = useRouter();
  const { etoiles } = useEtoiles();
  const { locale } = useLocale();
  const t = useT();
  const { rang } = rangDepuisEtoiles(etoiles);

  const apres = (id: string) => {
    const i = histoire.findIndex((h) => h.id === id);
    return i >= 0 && i + 1 < histoire.length ? histoire[i + 1].id : null;
  };
  const { jouer, arreter, enLecture } = useHistoireAudio(apres);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-6 px-6 py-10">
      <Lumi rang={rang.index} taille={112} etat={enLecture ? 'content' : 'repos'} interactif />
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        {t('histoire.titre')}
      </h1>

      <button
        type="button"
        onClick={() => (enLecture ? arreter() : jouer(histoire[0].id))}
        className="flex min-h-14 cursor-pointer items-center gap-3 rounded-full border-2 border-soleil bg-soleil/10 px-7 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
      >
        <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
        {enLecture ? t('histoire.arreter') : t('histoire.ecouter')}
      </button>

      <ol className="flex w-full flex-col gap-3">
        {histoire.map((temps) => (
          <li
            key={temps.id}
            className={`rounded-3xl border-2 p-5 text-base leading-relaxed transition-colors ${
              enLecture === temps.id
                ? 'border-soleil bg-soleil/10 text-craie'
                : 'border-encre-bord bg-encre-clair text-craie-douce'
            }`}
          >
            {localise(temps.texte, locale)}
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={() => {
          arreter();
          router.push('/musee');
        }}
        className="min-h-14 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
      >
        {t('histoire.action')}
      </button>
    </main>
  );
}
