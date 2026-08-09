'use client';

import { Lumi } from '@/components/mascotte/Lumi';

interface LumiCelebreProps {
  rang: number;
  titre: string;
  sousTitre?: string;
  /** Emblème du progrès, posé sur Lumi (🧭, 🏅, 🏆…). */
  embleme?: string;
  onFermer: () => void;
}

/**
 * Lumi surgit pour féliciter l'enfant : elle saute, entourée d'étincelles, avec
 * un message. Purement positif (ADN non-punitif). On ferme d'une tape n'importe
 * où, ou sur le bouton.
 */
export function LumiCelebre({ rang, titre, sousTitre, embleme, onFermer }: LumiCelebreProps) {
  return (
    <div
      role="dialog"
      aria-label={titre}
      onClick={onFermer}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-encre/95 px-6 text-center backdrop-blur"
    >
      <div className="relative flex items-center justify-center">
        <Lumi rang={rang} taille={168} etat="fete" />
        {embleme && (
          <span
            className="absolute bottom-3 right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-encre bg-encre-clair text-3xl"
            aria-hidden="true"
          >
            {embleme}
          </span>
        )}
        <span className="lumi-scintille pointer-events-none absolute -left-4 top-2 text-3xl" aria-hidden="true">
          ✨
        </span>
        <span
          className="lumi-scintille pointer-events-none absolute -right-4 top-8 text-2xl"
          style={{ animationDelay: '0.4s' }}
          aria-hidden="true"
        >
          ⭐
        </span>
        <span
          className="lumi-scintille pointer-events-none absolute -top-6 text-2xl"
          style={{ animationDelay: '0.7s' }}
          aria-hidden="true"
        >
          🎉
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-display text-2xl text-soleil">{titre}</p>
        {sousTitre && <p className="font-display text-xl text-craie">{sousTitre}</p>}
      </div>

      <button
        type="button"
        onClick={onFermer}
        className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
      >
        Super&nbsp;!
      </button>
    </div>
  );
}
