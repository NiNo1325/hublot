'use client';

import Image from 'next/image';
import type { SavantPrisonnier } from '@/content/savants-cartes';
import type { ScienceCard } from '@/lib/types';
import { prixSavant } from '@/lib/cles';
import { domainStyles } from '@/lib/domain-styles';
import { useLienAudio } from './useLienAudio';
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
  /** Ouvre la carte pour l'écouter, sans quitter le musée. */
  onEcouterCarte: (carte: ScienceCard) => void;
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
  onEcouterCarte,
  onFermer,
}: FicheSavantProps) {
  const { locale } = useLocale();
  const { ageRange } = useAgeRange();
  const t = useT();
  const { presenter, direPortrait, arreter, enLecture } = useLienAudio();
  const prix = prixSavant(savant);
  /* Le portrait a sa propre marque de lecture, sans quoi il partagerait celle
     d'une carte et les deux boutons s'allumeraient ensemble. */
  const ditPortrait = enLecture === `portrait-${savant.id}`;

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
              Qui il est, avant ce qu'il a fait ici.

              La fiche n'apprenait de Newton que la chute des corps et les
              marées — jamais qu'il a aussi décomposé la lumière et inventé le
              calcul infinitésimal. Elle donnait le détail sans jamais donner la
              mesure de l'homme, et le musée finissait par ne parler que de
              lui-même. Ce paragraphe vient donc en premier, et les cartes
              après : on présente quelqu'un avant de dire ce qu'il a fait pour
              nous.
            */}
            <div className="flex flex-col gap-3 rounded-2xl border-2 border-encre-bord bg-encre/40 p-4">
              <p className="text-base leading-relaxed text-craie">
                {localise(savant.portrait, locale)}
              </p>
              <button
                type="button"
                onClick={() =>
                  ditPortrait ? arreter() : direPortrait(savant.id)
                }
                aria-label={ditPortrait ? t('quizz.arreter') : t('musee.ecouter-portrait')}
                className="flex min-h-11 cursor-pointer items-center gap-2 self-start rounded-full border-2 border-encre-bord px-4 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
              >
                <span aria-hidden="true">{ditPortrait ? '⏸' : '🔊'}</span>
                {ditPortrait ? t('quizz.arreter') : t('musee.ecouter-portrait')}
              </button>
            </div>

            {/*
              Ce qu'il a fait, carte par carte, et surtout : écoutable sur place.
              Ces lignes renvoyaient vers la liste de son monde, ce qui laissait
              l'enfant chercher lui-même la carte dont on venait de lui parler —
              et l'écoute, qui est le cœur de l'application, devenait le geste le
              plus difficile à atteindre. La carte s'ouvre désormais ici même.
            */}
            <ul className="flex flex-col gap-3">
              {savant.cartes.map((c) => {
                const carte = cards.find((k) => k.id === c.id);
                const style = carte ? domainStyles[carte.domainId] : null;
                const dit = enLecture === c.id;
                return (
                  <li
                    key={c.id}
                    className="flex items-center gap-3 rounded-2xl border-2 border-encre-bord p-3"
                  >
                    {/*
                      Le hublot de la carte, en petit : c'est le même disque
                      coloré que dans Découvrir, et c'est lui qui fait le pont.
                      L'enfant reconnaît l'objet qu'il a déjà vu ailleurs, et
                      comprend sans qu'on lui dise que ce savant et cette carte
                      parlent de la même chose.
                    */}
                    <button
                      type="button"
                      onClick={() => carte && onEcouterCarte(carte)}
                      disabled={!carte}
                      aria-label={
                        carte && ageRange
                          ? t('musee.ouvrir-carte')(localise(carte.content, locale).title[ageRange])
                          : ''
                      }
                      className="flex h-14 w-14 shrink-0 cursor-pointer items-center justify-center rounded-full border-[3px] text-2xl transition-transform hover:scale-110 active:scale-95 disabled:cursor-default"
                      style={{
                        borderColor: style?.teinte ?? 'var(--color-encre-bord)',
                        backgroundColor: 'var(--color-encre)',
                        boxShadow: style ? `0 0 16px ${style.halo}` : 'none',
                      }}
                    >
                      <span aria-hidden="true">{carte?.thumbnail}</span>
                    </button>

                    <span className="flex flex-1 flex-col gap-1">
                      {carte && ageRange && (
                        <span className="font-display text-base text-soleil">
                          {localise(carte.content, locale).title[ageRange]}
                        </span>
                      )}
                      <span className="text-base leading-relaxed text-craie-douce">{localise(c.lien, locale)}</span>
                    </span>

                    {/*
                      Le son, sur son propre bouton. Il vivait à l'intérieur de
                      celui qui ouvre la carte — un bouton dans un bouton, ce qui
                      n'est pas du HTML valide — si bien qu'appuyer sur le
                      haut-parleur ouvrait la carte au lieu de lire le texte.
                    */}
                    <button
                      type="button"
                      onClick={() => (dit ? arreter() : presenter(savant.id, c.id))}
                      aria-label={dit ? t('quizz.arreter') : t('musee.ecouter-lien')}
                      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-lg transition-colors hover:border-soleil"
                    >
                      <span aria-hidden="true">{dit ? '⏸' : '🔊'}</span>
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
