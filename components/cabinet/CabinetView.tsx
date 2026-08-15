'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { OBJETS_PAR_PLANCHE, objetsCabinet, type ObjetCabinet } from '@/content/cabinet';
import { peutAcheter } from '@/lib/portefeuille';
import { jouerSonRecompense } from '@/lib/sonRecompense';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { localise } from '@/lib/i18n/localise';
import { useCabinet } from './useCabinet';

/**
 * Le cabinet de curiosités de Lumi.
 *
 * Une étagère, littéralement : des planches, et sur chacune les objets à leur
 * place. Les emplacements vides restent visibles avec leur prix — c'est ce qui
 * fait une collection plutôt qu'une boutique. L'enfant voit d'un coup d'œil ce
 * qu'il possède et ce qui manque, et le trou dans la rangée fait plus envie
 * qu'une liste d'articles.
 *
 * Toucher un objet donne son explication ; toucher un emplacement vide
 * l'achète, si les étoiles suffisent. Un seul geste, le même partout.
 *
 * Rien de ce qui s'achète ici n'est du contenu d'apprentissage. Aucune carte,
 * aucune question ne se débloque contre des étoiles — c'est la règle qui tient
 * tout le reste : on dépense sur le décor, jamais sur le savoir.
 */
export function CabinetView() {
  const router = useRouter();
  const { locale } = useLocale();
  const t = useT();
  const { possedes, gagnees, solde, depensees, acheter } = useCabinet();
  const [ouvert, setOuvert] = useState<string | null>(null);

  const toucher = (objet: ObjetCabinet) => {
    if (possedes.includes(objet.id)) {
      setOuvert(ouvert === objet.id ? null : objet.id);
      return;
    }
    if (peutAcheter(gagnees, depensees, possedes, objet)) {
      acheter(objet.id);
      jouerSonRecompense();
      // Le fait s'ouvre aussitôt : l'objet acheté doit apprendre quelque chose
      // sur-le-champ, sinon ce n'est qu'un jeton de plus.
      setOuvert(objet.id);
      return;
    }
    setOuvert(objet.id);
  };

  // Les objets sont rangés par prix : les planches se remplissent du bas vers
  // le haut de la collection, ce qui donne une progression lisible.
  const planches: ObjetCabinet[][] = [];
  for (let i = 0; i < objetsCabinet.length; i += OBJETS_PAR_PLANCHE) {
    planches.push(objetsCabinet.slice(i, i + OBJETS_PAR_PLANCHE));
  }

  const objetOuvert = objetsCabinet.find((o) => o.id === ouvert) ?? null;
  const possedeOuvert = objetOuvert ? possedes.includes(objetOuvert.id) : false;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-6 py-10">
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('cabinet.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">{t('cabinet.texte')}</p>
        <p className="font-display text-xl text-soleil">
          {t('cabinet.solde')(solde)} <span aria-hidden="true">⭐</span>
        </p>
        <p className="text-sm text-craie-douce">
          {t('cabinet.etagere')(possedes.length, objetsCabinet.length)}
        </p>
      </header>

      {/* Le meuble : un encadrement de bois, et des planches à l'intérieur. */}
      <div className="rounded-3xl border-4 border-[#5a4632] bg-[#2a2118] p-3 shadow-inner sm:p-4">
        {planches.map((planche, rang) => (
          <div key={rang} className="flex flex-col">
            <ul className="flex items-end justify-around gap-1 px-1">
              {planche.map((objet) => {
                const possede = possedes.includes(objet.id);
                const abordable = peutAcheter(gagnees, depensees, possedes, objet);
                return (
                  <li key={objet.id} className="flex flex-1 flex-col items-center">
                    <button
                      type="button"
                      onClick={() => toucher(objet)}
                      aria-label={
                        possede
                          ? localise(objet.nom, locale)
                          : t('cabinet.emplacement')(localise(objet.nom, locale), objet.prix)
                      }
                      className="flex w-full cursor-pointer flex-col items-center rounded-xl pt-3 transition-transform hover:scale-110 active:scale-95"
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-12 w-12 items-center justify-center rounded-full text-3xl transition-opacity sm:h-14 sm:w-14 sm:text-4xl ${
                          possede
                            ? 'drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]'
                            : // Le rond pointillé dit « ici, il manque quelque chose ».
                              // Grisé seul, l'objet passait pour un décor éteint.
                              'border-2 border-dashed border-craie-douce/25 opacity-30 grayscale'
                        }`}
                      >
                        {objet.emoji}
                      </span>
                      {/*
                        Ligne de hauteur fixe : sans elle, les objets acquis (sans
                        prix) ne reposeraient pas sur la planche à la même hauteur
                        que les places vides.
                      */}
                      <span
                        className={`flex h-5 items-center font-display text-xs tabular-nums ${
                          abordable ? 'text-soleil' : 'text-craie-douce/60'
                        }`}
                      >
                        {!possede && (
                          <>
                            {objet.prix} <span aria-hidden="true">&nbsp;⭐</span>
                          </>
                        )}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
            {/* La planche elle-même, sous les objets qui s'y posent. */}
            <div
              aria-hidden="true"
              className="mb-3 h-2 rounded-full bg-[#5a4632] shadow-[0_2px_6px_rgba(0,0,0,0.5)] last:mb-0"
            />
          </div>
        ))}
      </div>

      {/* Ce que dit l'objet touché. */}
      {objetOuvert && (
        <div
          aria-live="polite"
          className="flex flex-col gap-2 rounded-3xl border-2 border-soleil/40 bg-soleil/5 p-5"
        >
          <p className="font-display text-lg text-craie">
            <span aria-hidden="true">{objetOuvert.emoji} </span>
            {localise(objetOuvert.nom, locale)}
          </p>
          {possedeOuvert ? (
            <p className="text-base leading-relaxed text-craie-douce">
              {localise(objetOuvert.fait, locale)}
            </p>
          ) : (
            /*
              Pas encore acquis : on dit ce qui manque, jamais le fait. Livrer
              l'explication sans l'objet viderait l'étagère de son sens.
            */
            <p className="text-base leading-relaxed text-craie-douce">
              {t('cabinet.manque')(objetOuvert.prix - solde)}
            </p>
          )}
        </div>
      )}

      <p className="text-center text-sm leading-relaxed text-craie-douce">
        {t('cabinet.gagner')}
      </p>

      <button
        type="button"
        onClick={() => router.push('/lumi')}
        className="min-h-12 cursor-pointer self-center rounded-full border-2 border-encre-bord px-6 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
      >
        {t('cabinet.retour')}
      </button>
    </main>
  );
}
