'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { rangDepuisEtoiles, RANGS } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';

/**
 * L'échelle des rangs de Lumi, sur sa propre page.
 *
 * Elle vivait au milieu de l'écran de Lumi, entre le portrait et la liste des
 * mondes ; trois sujets à la file font une page qu'on parcourt sans la lire.
 *
 * La frise : une rangée de pastilles (une par rang), puis la barre de
 * progression SOUS les personnages (et non au travers), puis les seuils alignés
 * sous chaque pastille. Le nom du rang s'affiche en légende, pour celui qu'on
 * touche — les six noms côte à côte se chevauchaient. Les trois rangées
 * partagent `justify-between` avec des éléments de 36 px, donc pastilles, barre
 * et seuils restent alignés.
 */
export function RangsView() {
  const router = useRouter();
  const { etoiles } = useEtoiles();
  const { locale } = useLocale();
  const t = useT();
  const [rangSel, setRangSel] = useState<number | null>(null);

  const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
  const fraction = rangProchain
    ? Math.min(1, Math.max(0, (etoiles - rang.seuil) / (rangProchain.seuil - rang.seuil)))
    : 1;

  // Remplissage de la frise : segments franchis (index du rang) plus la
  // fraction en cours, sur les cinq intervalles entre six pastilles.
  const derniersRangs = RANGS.length - 1;
  const fractionFrise = rangProchain ? Math.min(1, (rang.index + fraction) / derniersRangs) : 1;
  // Rang mis en avant sous la frise : celui qu'on touche, sinon le rang courant.
  const selection = RANGS[rangSel ?? rang.index];
  const selectionAtteinte = etoiles >= selection.seuil;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-6 py-10">
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        {t('lumi.rangs')}
      </h1>

      {/*
        D'où viennent les étoiles. Rien ne le disait, et l'enfant qui écoutait
        des cartes sans voir son rang bouger pouvait croire le compteur cassé.
      */}
      <p className="text-center text-sm leading-relaxed text-craie-douce">
        {t('lumi.origine-etoiles')}
      </p>

      <section className="flex flex-col gap-2 rounded-3xl border-2 border-encre-bord bg-encre-clair p-5">
        {/* Les personnages. */}
        <ol className="flex justify-between">
          {RANGS.map((r) => {
            const atteint = etoiles >= r.seuil;
            const courant = r.index === rang.index;
            const actif = (rangSel ?? rang.index) === r.index;
            return (
              <li key={r.index}>
                <button
                  type="button"
                  onClick={() => setRangSel(r.index)}
                  aria-pressed={actif}
                  aria-label={t('lumi.rang-aria')(localise(r.nom, locale), r.seuil, atteint)}
                  className="flex cursor-pointer items-center justify-center"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      actif ? 'ring-2 ring-soleil ring-offset-2 ring-offset-encre-clair' : ''
                    }`}
                    style={{ opacity: atteint ? 1 : 0.4 }}
                  >
                    <Lumi rang={r.index} taille={36} etat={courant ? 'repos' : 'statique'} />
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* La barre, sous les personnages, entre les centres des pastilles. */}
        <div className="relative h-1.5">
          <span
            aria-hidden="true"
            className="absolute inset-x-[18px] top-0 h-1.5 rounded-full bg-encre-bord"
          />
          <span
            aria-hidden="true"
            className="absolute left-[18px] top-0 h-1.5 rounded-full bg-soleil transition-[width] duration-500"
            style={{ width: `calc((100% - 36px) * ${fractionFrise})` }}
          />
        </div>

        {/* Les seuils, alignés sous chaque pastille. */}
        <ol className="flex justify-between">
          {RANGS.map((r) => (
            <li key={r.index} className="w-9 text-center text-[11px] tabular-nums text-craie-douce">
              {r.seuil}
            </li>
          ))}
        </ol>

        {/* Légende du rang sélectionné (le rang courant par défaut). */}
        <p aria-live="polite" className="mt-2 text-center text-sm text-craie">
          <span aria-hidden="true">{selection.icone}</span>{' '}
          <span className="font-display">{localise(selection.nom, locale)}</span>{' '}
          {selectionAtteinte ? (
            t('lumi.rang-atteint')
          ) : (
            <>
              {t('lumi.reste-cartes')(selection.seuil - etoiles)}
            </>
          )}
        </p>
      </section>

      <button
        type="button"
        onClick={() => router.push('/musee')}
        className="min-h-12 cursor-pointer self-center rounded-full border-2 border-encre-bord px-6 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
      >
        {t('lumi.retour')}
      </button>
    </main>
  );
}
