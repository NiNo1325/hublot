'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { objetsCabinet, type ObjetCabinet } from '@/content/cabinet';
import { peutAcheter } from '@/lib/portefeuille';
import { jouerSonRecompense } from '@/lib/sonRecompense';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { localise } from '@/lib/i18n/localise';
import { useCabinet } from './useCabinet';

/**
 * Le cabinet de curiosités de Lumi.
 *
 * Les étoiles y deviennent une collection. Chaque objet acheté reste sur
 * l'étagère et porte un fait scientifique : la récompense continue d'enseigner
 * au lieu de seulement décorer, ce qui limite le risque qu'une récompense
 * matérielle érode l'envie d'apprendre.
 *
 * Rien de ce qui s'achète ici n'est du contenu d'apprentissage. Aucune carte,
 * aucune question ne se débloque contre des étoiles — c'est la règle qui tient
 * tout le reste : on dépense sur le décor, jamais sur le savoir.
 */
export function CabinetView() {
  const router = useRouter();
  const { locale } = useLocale();
  const t = useT();
  const { possedes, gagnees, solde, acheter } = useCabinet();
  const [ouvert, setOuvert] = useState<string | null>(null);

  const acquerir = (objet: ObjetCabinet) => {
    if (!peutAcheter(gagnees, gagnees - solde, possedes, objet)) return;
    acheter(objet.id);
    jouerSonRecompense();
    // On ouvre le fait aussitôt : l'objet acheté doit apprendre quelque chose
    // sur-le-champ, sinon ce n'est qu'un jeton de plus.
    setOuvert(objet.id);
  };

  const collection = objetsCabinet.filter((o) => possedes.includes(o.id));

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col items-center gap-3 text-center">
        <span className="text-6xl" aria-hidden="true">
          🗄️
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('cabinet.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">{t('cabinet.texte')}</p>
        <p className="font-display text-xl text-soleil">
          {t('cabinet.solde')(solde)} <span aria-hidden="true">⭐</span>
        </p>
      </header>

      {/* L'étagère : ce qui est déjà là, pour qu'on voie sa collection grandir. */}
      {collection.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-craie-douce">
            {t('cabinet.etagere')(collection.length, objetsCabinet.length)}
          </h2>
          <ul className="grid grid-cols-4 gap-3 rounded-3xl border-2 border-soleil/30 bg-soleil/5 p-4 sm:grid-cols-6">
            {collection.map((objet) => (
              <li key={objet.id}>
                <button
                  type="button"
                  onClick={() => setOuvert(ouvert === objet.id ? null : objet.id)}
                  aria-label={localise(objet.nom, locale)}
                  className="flex aspect-square w-full cursor-pointer items-center justify-center rounded-2xl text-3xl transition-transform hover:scale-110 active:scale-95 sm:text-4xl"
                >
                  <span aria-hidden="true">{objet.emoji}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Le fait de l'objet touché : c'est ce que l'objet vaut vraiment. */}
      {ouvert && (
        <p
          aria-live="polite"
          className="rounded-3xl border-2 border-soleil/40 bg-soleil/5 p-5 text-base leading-relaxed text-craie"
        >
          <span aria-hidden="true">
            {objetsCabinet.find((o) => o.id === ouvert)?.emoji}{' '}
          </span>
          {localise(objetsCabinet.find((o) => o.id === ouvert)!.fait, locale)}
        </p>
      )}

      <section className="flex flex-col gap-3">
        <h2 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-craie-douce">
          {t('cabinet.a-decouvrir')}
        </h2>
        <ul className="flex flex-col gap-2">
          {objetsCabinet
            .filter((o) => !possedes.includes(o.id))
            .map((objet) => {
              const abordable = peutAcheter(gagnees, gagnees - solde, possedes, objet);
              return (
                <li key={objet.id}>
                  <button
                    type="button"
                    onClick={() => acquerir(objet)}
                    disabled={!abordable}
                    className={`flex min-h-16 w-full items-center gap-4 rounded-2xl border-2 bg-encre-clair px-4 text-left transition-transform ${
                      abordable
                        ? 'cursor-pointer border-soleil hover:scale-[1.01] active:scale-[0.99]'
                        : 'cursor-default border-encre-bord opacity-60'
                    }`}
                  >
                    <span aria-hidden="true" className="text-3xl">
                      {objet.emoji}
                    </span>
                    <span className="flex-1 text-craie">{localise(objet.nom, locale)}</span>
                    <span
                      className={`font-display text-lg ${
                        abordable ? 'text-soleil' : 'text-craie-douce'
                      }`}
                    >
                      {objet.prix} <span aria-hidden="true">⭐</span>
                    </span>
                  </button>
                </li>
              );
            })}
        </ul>
        {/*
          Dit une fois, plutôt que sur chaque objet trop cher : l'enfant sait
          comment gagner des étoiles, il n'a pas besoin qu'on le lui répète
          douze fois.
        */}
        <p className="text-sm leading-relaxed text-craie-douce">{t('cabinet.gagner')}</p>
      </section>

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
