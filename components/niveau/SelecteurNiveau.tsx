'use client';

import { useState } from 'react';
import { NIVEAUX, presentationNiveaux, type NiveauDifficulte } from '@/content/niveaux';
import { LumiNiveau } from '@/components/mascotte/LumiNiveau';
import { useLecteurAudio } from '@/components/audio/useLecteurAudio';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';

interface SelecteurNiveauProps {
  niveauInitial: NiveauDifficulte | null;
  /** Appelé à chaque choix : toucher une carte enregistre, sans autre geste. */
  onChoisir: (niveau: NiveauDifficulte) => void;
  /** Bouton de sortie, pour la première entrée seulement. Absent, aucun bouton. */
  labelValider?: string;
  onValider?: () => void;
}

/**
 * Le choix du niveau de difficulté, partagé entre la première entrée et les
 * Réglages.
 *
 * Trois cartes empilées plutôt qu'une rangée : à 320 px, trois colonnes
 * écraseraient les textes, et c'est justement le texte qui dit ce que le choix
 * change. Chaque carte porte sa Lumi, son nom et sa conséquence — « des mots de
 * tous les jours », « les vrais mots des scientifiques » — parce qu'un enfant
 * ne choisit pas « niveau 2 », il choisit ce qu'il va entendre.
 *
 * Toucher une carte la sélectionne, **l'enregistre** et joue son commentaire :
 * c'est la seule façon pour un enfant qui ne lit pas encore de savoir ce qu'il
 * vient de choisir. Il n'y a rien à valider — un réglage qui demande un second
 * geste finit toujours par être à moitié fait.
 *
 * Le bouton de sortie n'existe que pour la première entrée, où il faut bien
 * quitter l'écran : le choix, lui, est déjà pris.
 */
export function SelecteurNiveau({
  niveauInitial,
  onChoisir,
  labelValider,
  onValider,
}: SelecteurNiveauProps) {
  const t = useT();
  const { locale } = useLocale();
  const { jouer, arreter, enLecture } = useLecteurAudio('niveaux');
  const [choisi, setChoisi] = useState<NiveauDifficulte>(niveauInitial ?? NIVEAUX[1]);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      {/* La présentation : trois niveaux, le quizz suit, et on peut changer d'avis. */}
      <div className="flex w-full max-w-md items-start gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair p-4">
        <p className="flex-1 text-base leading-relaxed text-craie-douce">
          {presentationNiveaux.texte[locale] ?? presentationNiveaux.texte.fr}
        </p>
        <button
          type="button"
          onClick={() =>
            enLecture === presentationNiveaux.id ? arreter() : jouer(presentationNiveaux.id)
          }
          aria-label={
            enLecture === presentationNiveaux.id ? t('niveau.arreter') : t('niveau.ecouter')
          }
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-lg transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">{enLecture === presentationNiveaux.id ? '⏸' : '🔊'}</span>
        </button>
      </div>

      <ul className="flex w-full max-w-md flex-col gap-3">
        {NIVEAUX.map((niveau) => {
          const actif = niveau.id === choisi.id;
          return (
            <li key={niveau.id}>
              <button
                type="button"
                onClick={() => {
                  setChoisi(niveau);
                  onChoisir(niveau);
                  jouer(niveau.id);
                }}
                aria-pressed={actif}
                /*
                  Le choix devait se voir, et il ne se voyait pas.

                  Une bordure orange et un nom orange, c'était tout — et le
                  fond, lui, jouait contre : `bg-soleil/10` posé sur l'encre
                  donne un ton plus **sombre** que le `bg-encre-clair` des deux
                  autres cartes, si bien que la carte choisie était la plus
                  discrète des trois. Les non-choisies reculent donc, la choisie
                  se réchauffe et s'auréole, et sa Lumi porte une coche.

                  Trois signaux redondants plutôt qu'un seul : la couleur ne
                  suffit jamais, et le halo ne survit pas à « animation
                  réduite ».
                */
                className={`relative flex w-full cursor-pointer items-center gap-3 rounded-3xl border-2 p-3 text-left transition-colors ${
                  actif
                    ? 'border-soleil bg-soleil/15 shadow-[0_0_24px_rgba(255,182,39,0.22)]'
                    : 'border-encre-bord bg-encre-clair/40 hover:border-soleil'
                }`}
              >
                <span className="relative flex h-24 w-20 shrink-0 items-end justify-center">
                  <LumiNiveau variante={niveau.variante} taille={72} />
                  {actif && (
                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-encre bg-soleil"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path
                          d="M5 13l4.5 4.5L19 7"
                          fill="none"
                          stroke="var(--color-encre)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span
                    className={`font-display text-lg font-semibold ${actif ? 'text-soleil' : 'text-craie'}`}
                  >
                    {niveau.nom[locale] ?? niveau.nom.fr}
                  </span>
                  <span className="text-base leading-snug text-craie-douce">
                    {niveau.texte[locale] ?? niveau.texte.fr}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {labelValider && (
        <button
          type="button"
          onClick={() => {
            arreter();
            onChoisir(choisi);
            onValider?.();
          }}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-xl text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {labelValider}
        </button>
      )}
    </div>
  );
}
