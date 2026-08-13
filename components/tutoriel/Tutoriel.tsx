'use client';

import { useState } from 'react';
import { ecransTuto } from '@/content/tutoriel';
import { Lumi } from '@/components/mascotte/Lumi';
import { useSwipeHorizontal } from '@/lib/useSwipeHorizontal';
import { useTutorielAudio } from './useTutorielAudio';

/*
  Lumi présente l'application, un écran par onglet. Elle parle à la première
  personne, grandit d'un écran à l'autre, et chaque écran a une explication
  vocale (bouton d'écoute), comme les accroches de Découvrir.
*/
export function Tutoriel({ onFermer }: { onFermer: () => void }) {
  const [index, setIndex] = useState(0);
  const { jouer, arreter, enLecture } = useTutorielAudio();
  const dernier = index >= ecransTuto.length - 1;

  const suivant = () => {
    arreter();
    if (dernier) onFermer();
    else setIndex((n) => Math.min(ecransTuto.length - 1, n + 1));
  };
  const precedent = () => {
    arreter();
    setIndex((n) => Math.max(0, n - 1));
  };
  const swipe = useSwipeHorizontal({ onLeft: suivant, onRight: precedent });
  const ecran = ecransTuto[index];

  return (
    <div
      role="dialog"
      aria-label="Présentation de Hublot"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-encre px-6 text-center"
    >
      <button
        type="button"
        onClick={onFermer}
        className="absolute right-4 top-4 min-h-11 cursor-pointer rounded-full border-2 border-encre-bord bg-encre-clair px-5 font-display text-sm text-craie transition-colors hover:border-soleil hover:text-soleil"
      >
        Passer
      </button>

      <div {...swipe} style={{ touchAction: 'pan-y' }} className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center" aria-hidden="true">
          <Lumi rang={ecran.rang} taille={148} etat="repos" />
          <span className="absolute bottom-0 right-0 flex h-14 w-14 items-center justify-center rounded-full border-2 border-encre bg-encre-clair text-3xl">
            {ecran.emoji}
          </span>
        </div>
        <div aria-live="polite" className="flex flex-col items-center gap-3">
          <h2 className="font-display text-2xl text-soleil sm:text-3xl">{ecran.titre}</h2>
          <p className="max-w-xs text-base leading-relaxed text-craie">{ecran.texte}</p>
          {/* Explication vocale, comme les cartes de Découvrir. */}
          <button
            type="button"
            onClick={() => (enLecture === ecran.id ? arreter() : jouer(ecran.id))}
            aria-label={enLecture === ecran.id ? 'Arrêter la lecture' : 'Écouter'}
            className="mt-1 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-lg transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">{enLecture === ecran.id ? '⏸' : '🔊'}</span>
          </button>
        </div>
      </div>

      {/* Points de progression. */}
      <div className="flex gap-2" aria-hidden="true">
        {ecransTuto.map((_, k) => (
          <span
            key={k}
            className="h-2 w-2 rounded-full transition-colors"
            style={{ backgroundColor: k === index ? 'var(--color-soleil)' : 'var(--color-encre-bord)' }}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        {index > 0 && (
          <button
            type="button"
            onClick={precedent}
            className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-6 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            Retour
          </button>
        )}
        <button
          type="button"
          onClick={suivant}
          className="min-h-12 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {dernier ? "C'est parti !" : 'Suivant'}
        </button>
      </div>
    </div>
  );
}
