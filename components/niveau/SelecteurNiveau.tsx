'use client';

import { useState } from 'react';
import { NIVEAUX, presentationNiveaux, type NiveauDifficulte } from '@/content/niveaux';
import { LumiNiveau } from '@/components/mascotte/LumiNiveau';
import { useLecteurAudio } from '@/components/audio/useLecteurAudio';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';

interface SelecteurNiveauProps {
  niveauInitial: NiveauDifficulte | null;
  labelValider: string;
  onValider: (niveau: NiveauDifficulte) => void;
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
 * Toucher une carte la sélectionne **et** joue son commentaire : c'est la seule
 * façon pour un enfant qui ne lit pas encore de savoir ce qu'il vient de
 * choisir. Un bouton de validation sépare l'essai de la décision, pour qu'on
 * puisse écouter les trois avant de trancher.
 */
export function SelecteurNiveau({
  niveauInitial,
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
        <p className="flex-1 text-sm leading-relaxed text-craie-douce">
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
                  jouer(niveau.id);
                }}
                aria-pressed={actif}
                className={`flex w-full cursor-pointer items-center gap-3 rounded-3xl border-2 p-3 text-left transition-colors ${
                  actif
                    ? 'border-soleil bg-soleil/10'
                    : 'border-encre-bord bg-encre-clair hover:border-soleil'
                }`}
              >
                <span className="flex h-24 w-20 shrink-0 items-end justify-center">
                  <LumiNiveau variante={niveau.variante} taille={72} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span
                    className={`font-display text-lg font-semibold ${actif ? 'text-soleil' : 'text-craie'}`}
                  >
                    {niveau.nom[locale] ?? niveau.nom.fr}
                  </span>
                  <span className="text-sm leading-snug text-craie-douce">
                    {niveau.texte[locale] ?? niveau.texte.fr}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => {
          arreter();
          onValider(choisi);
        }}
        className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-xl text-soleil transition-transform hover:scale-105 active:scale-95"
      >
        {labelValider}
      </button>
    </div>
  );
}
