'use client';

import { useRouter } from 'next/navigation';
import { Lumi } from '@/components/mascotte/Lumi';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useT } from '@/components/i18n/useT';

/**
 * L'histoire que Lumi raconte : pourquoi les savants sont enfermés.
 *
 * Le geôlier n'est pas un méchant, c'est **l'oubli**. Un ravisseur qui séquestre
 * des savants serait angoissant pour un enfant de quatre ans, et surtout il ne
 * voudrait rien dire. L'oubli, si : on les a oubliés, et à mesure qu'on les
 * oublie ils s'effacent. Apprendre ce qu'ils ont trouvé, c'est se souvenir — et
 * se souvenir, c'est les délivrer.
 *
 * Toute la mécanique en découle : la clé, c'est la connaissance elle-même. Sans
 * ce sens, on aurait un simple compteur déguisé en cellules.
 *
 * Cinq temps, courts, sans audio pour l'instant : la narration viendra quand le
 * texte sera arrêté, pour ne pas régénérer des mp3 à chaque retouche.
 */
const TEMPS = ['un', 'deux', 'trois', 'quatre', 'cinq'] as const;

export function HistoireView() {
  const router = useRouter();
  const { etoiles } = useEtoiles();
  const t = useT();
  const { rang } = rangDepuisEtoiles(etoiles);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-6 px-6 py-10">
      <Lumi rang={rang.index} taille={112} etat="repos" interactif />
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        {t('histoire.titre')}
      </h1>

      <ol className="flex flex-col gap-4">
        {TEMPS.map((temps, i) => (
          <li
            key={temps}
            className="rounded-3xl border-2 border-encre-bord bg-encre-clair p-5 text-base leading-relaxed text-craie-douce"
          >
            <span aria-hidden="true" className="mr-2 font-display text-soleil">
              {i + 1}.
            </span>
            {t(`histoire.${temps}` as 'histoire.un')}
          </li>
        ))}
      </ol>

      <button
        type="button"
        onClick={() => router.push('/musee')}
        className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
      >
        {t('histoire.action')}
      </button>
    </main>
  );
}
