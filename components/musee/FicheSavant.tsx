'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { SavantPrisonnier } from '@/content/savants-cartes';
import type { ScienceCard } from '@/lib/types';
import { prixSavant } from '@/lib/cles';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';
import { useAgeRange } from '@/components/age/useAgeRange';

interface FicheSavantProps {
  savant: SavantPrisonnier;
  libere: boolean;
  /** Le trousseau suffit-il ? */
  abordable: boolean;
  solde: number;
  cards: ScienceCard[];
  onLiberer: () => void;
  onFermer: () => void;
}

/**
 * Ce qu'on voit quand on touche une cellule.
 *
 * Fermée, elle ne dit ni le nom ni le visage — seulement le prix et ce qu'il
 * manque. Révéler le savant avant de l'avoir délivré viderait le geste de tout
 * son sel.
 *
 * Libéré, il se présente, et surtout **il renvoie vers ses cartes**. C'est ce
 * qui referme la boucle : le fil conducteur ramène à l'exploration au lieu de
 * s'y substituer. Archimède délivré dit « j'ai aussi trouvé pourquoi les
 * bateaux flottent », et l'enfant y retourne.
 */
export function FicheSavant({
  savant,
  libere,
  abordable,
  solde,
  cards,
  onLiberer,
  onFermer,
}: FicheSavantProps) {
  const router = useRouter();
  const { locale } = useLocale();
  const { ageRange } = useAgeRange();
  const t = useT();
  const prix = prixSavant(savant);

  const dates =
    savant.mort === null
      ? t('musee.vivant')(savant.naissance)
      : `${savant.naissance} – ${savant.mort}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-end justify-center bg-encre/90 p-4 sm:items-center"
      onClick={onFermer}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-md flex-col gap-4 overflow-y-auto rounded-3xl border-2 border-encre-bord bg-encre-clair p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-4">
          <span className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-encre">
            <Image
                src={`/images/wall-of-fame/${savant.id}.webp`}
                alt=""
                fill
                sizes="96px"
                className={`object-cover ${libere ? '' : 'grayscale brightness-[0.22] contrast-125'}`}
              />
          </span>

          <div className="flex flex-1 flex-col gap-1">
            <h2 className="font-display text-xl text-craie">
              {libere ? savant.nom : t('musee.inconnu')}
            </h2>
            {libere && <p className="text-sm text-craie-douce">{dates}</p>}
            {!libere && (
              <p className="font-display text-lg text-soleil">
                {prix} <span aria-hidden="true">🔑</span>
              </p>
            )}
          </div>
        </div>

        {libere ? (
          <>
            {/*
              Ce qu'il a fait, carte par carte. C'est le contenu qui existe déjà
              et il est vrai : chaque ligne dit ce que ce savant a réellement
              apporté sur ce sujet précis.
            */}
            <ul className="flex flex-col gap-3">
              {savant.cartes.map((c) => {
                const carte = cards.find((k) => k.id === c.id);
                return (
                  <li key={c.id}>
                    <button
                      type="button"
                      onClick={() => router.push(`/decouvrir/${carte?.domainId ?? ''}`)}
                      disabled={!carte}
                      className="flex w-full cursor-pointer flex-col gap-1 rounded-2xl border-2 border-encre-bord p-3 text-left transition-colors hover:border-soleil disabled:cursor-default"
                    >
                      {carte && ageRange && (
                        <span className="font-display text-base text-soleil">
                          {localise(carte.content, locale).title[ageRange]}
                        </span>
                      )}
                      <span className="text-sm leading-relaxed text-craie-douce">{c.lien}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            <p className="text-base leading-relaxed text-craie-douce">
              {t('musee.enferme')(savant.cartes.length)}
            </p>
            {abordable ? (
              <button
                type="button"
                onClick={onLiberer}
                className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
              >
                {t('musee.liberer')}
              </button>
            ) : (
              <p className="text-sm text-craie-douce">{t('musee.manque')(prix - solde)}</p>
            )}
          </>
        )}

        <button
          type="button"
          onClick={onFermer}
          className="min-h-12 cursor-pointer self-center rounded-full border-2 border-encre-bord px-6 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          {t('musee.fermer')}
        </button>
      </div>
    </div>
  );
}
