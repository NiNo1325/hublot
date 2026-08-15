'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { ScienceCard } from '@/lib/types';
import type { Savant } from '@/content/savants';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { localise } from '@/lib/i18n/localise';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useSavantAudio } from './useSavantAudio';

interface SavantModalProps {
  savant: Savant;
  /** Les cartes que la fiche permet d'enchaîner, déjà résolues. */
  cartes: ScienceCard[];
  onOuvrirCarte: (card: ScienceCard) => void;
  onClose: () => void;
}

/**
 * La fiche d'un savant.
 *
 * L'anecdote est mise en avant autant que l'apport, et non reléguée en bas de
 * page : c'est elle qu'un enfant retient et raconte, et c'est par elle qu'il
 * se souvient du reste. Le portrait reste rond, comme les hublots — un savant
 * est une fenêtre de plus sur le monde.
 *
 * Les cartes liées ouvrent la carte elle-même, pas une liste où il faudrait la
 * retrouver : l'enfant vient de lire que Newton a compris la chute, l'entendre
 * expliquer doit être à un geste.
 */
export function SavantModal({ savant, cartes, onOuvrirCarte, onClose }: SavantModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { locale } = useLocale();
  const { ageRange } = useAgeRange();
  const t = useT();
  const { jouer, arreter, enLecture } = useSavantAudio(ageRange ?? '6-8');

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  // Sans âge connu, aucun registre à choisir : la vue parente ne rend d'ailleurs
  // rien tant qu'il manque.
  if (!ageRange) return null;

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby="nom-savant"
      className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto border-0 bg-encre p-0 text-craie backdrop:bg-encre/80 sm:m-auto sm:h-auto sm:max-h-[92vh] sm:w-[min(36rem,92vw)] sm:rounded-[2rem] sm:border-4 sm:border-soleil"
    >
      <div className="flex min-h-full flex-col items-center gap-5 p-6 sm:p-8">
        <div className="flex w-full items-start justify-between">
          {/* Écouter la fiche : l'apport puis l'anecdote, d'un seul appui. */}
          <button
            type="button"
            onClick={() => (enLecture ? arreter() : jouer(savant.id))}
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
            <span className="sr-only">
              {enLecture ? t('savants.arreter') : t('savants.ecouter')}
            </span>
          </button>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">✕</span>
            <span className="sr-only">{t('savants.fermer')}</span>
          </button>
        </div>

        <Image
          src={`/images/wall-of-fame/${savant.id}.webp`}
          alt=""
          width={640}
          height={640}
          className="h-40 w-40 rounded-full sm:h-48 sm:w-48"
          priority
        />

        <header className="flex flex-col items-center gap-1 text-center">
          <h2 id="nom-savant" className="font-display text-2xl font-semibold sm:text-3xl">
            {savant.nom}
          </h2>
          <p className="text-sm tabular-nums text-craie-douce">
            {savant.naissance} – {savant.mort ?? ''}
          </p>
        </header>

        <p className="text-base leading-relaxed text-craie">
          {localise(savant.apport, locale)[ageRange]}
        </p>

        {/* L'anecdote a son cadre : c'est la partie qu'on relit. */}
        <p className="rounded-3xl border-2 border-soleil/40 bg-soleil/5 p-5 text-base leading-relaxed text-craie-douce">
          <span aria-hidden="true">💡</span> {localise(savant.anecdote, locale)[ageRange]}
        </p>

        {cartes.length > 0 && (
          <section className="flex w-full flex-col gap-3">
            <h3 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-craie-douce">
              {t('savants.cartes')}
            </h3>
            <ul className="flex flex-col gap-2">
              {cartes.map((card) => (
                <li key={card.id}>
                  <button
                    type="button"
                    onClick={() => onOuvrirCarte(card)}
                    className="flex min-h-14 w-full cursor-pointer items-center gap-3 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 text-left transition-colors hover:border-soleil"
                  >
                    <span aria-hidden="true" className="text-2xl">
                      {card.thumbnail}
                    </span>
                    <span className="flex-1 text-craie">
                      {localise(card.content, locale).title[ageRange]}
                    </span>
                    <span aria-hidden="true" className="text-lg text-craie-douce">
                      ›
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </dialog>
  );
}
