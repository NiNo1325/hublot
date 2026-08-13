'use client';

import { useState } from 'react';
import { Lumi } from '@/components/mascotte/Lumi';
import { useSwipeHorizontal } from '@/lib/useSwipeHorizontal';

interface EcranTuto {
  /** Rang de Lumi affiché : elle « grandit » au fil de la présentation. */
  rang: number;
  /** Emoji de l'onglet, repris de la barre du bas pour faire le lien. */
  emoji: string;
  titre: string;
  texte: string;
}

/*
  Lumi présente l'application, un écran par onglet. Elle parle à la première
  personne, d'un ton chaleureux et simple, et grandit d'un écran à l'autre
  jusqu'à se présenter elle-même à la fin.
*/
const ECRANS: EcranTuto[] = [
  {
    rang: 0,
    emoji: '🔭',
    titre: 'Découvrir',
    texte:
      "Coucou, moi c'est Lumi ! Ici, tu écoutes des cartes animées qui racontent le monde. Touche un hublot pour commencer.",
  },
  {
    rang: 1,
    emoji: '🗺️',
    titre: 'Parcours',
    texte:
      'Dans Parcours, je te guide : une carte, puis une petite question, et on avance ensemble, pas à pas.',
  },
  {
    rang: 2,
    emoji: '🎯',
    titre: 'Quizz',
    texte:
      "Au Quizz, tu joues avec des questions sur ce que tu as déjà écouté. Chaque bonne réponse te fait gagner des étoiles !",
  },
  {
    rang: 4,
    emoji: '🌟',
    titre: 'Et moi, Lumi',
    texte:
      'Plus tu explores et réussis, plus je grandis : des rangs, des badges, et une petite fête à chaque étape. On y va ?',
  },
];

export function Tutoriel({ onFermer }: { onFermer: () => void }) {
  const [index, setIndex] = useState(0);
  const dernier = index >= ECRANS.length - 1;
  const suivant = () =>
    dernier ? onFermer() : setIndex((n) => Math.min(ECRANS.length - 1, n + 1));
  const precedent = () => setIndex((n) => Math.max(0, n - 1));
  const swipe = useSwipeHorizontal({ onLeft: suivant, onRight: precedent });
  const ecran = ECRANS[index];

  return (
    <div
      role="dialog"
      aria-label="Présentation de Hublot"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-8 bg-encre px-6 text-center"
    >
      <button
        type="button"
        onClick={onFermer}
        className="absolute right-4 top-4 min-h-11 cursor-pointer rounded-full px-4 text-sm text-craie-douce transition-colors hover:text-soleil"
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
        </div>
      </div>

      {/* Points de progression. */}
      <div className="flex gap-2" aria-hidden="true">
        {ECRANS.map((_, k) => (
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
