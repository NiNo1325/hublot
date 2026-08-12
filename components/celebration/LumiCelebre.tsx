'use client';

import { useEffect } from 'react';
import { Lumi } from '@/components/mascotte/Lumi';

interface LumiCelebreProps {
  rang: number;
  titre: string;
  sousTitre?: string;
  /** Emblème du progrès, posé sur Lumi (🧭, 🏅, 🏆…). */
  embleme?: string;
  /** `fete` : plein écran + bouton ; `leger` : encouragement bref sans bouton. */
  variante?: 'fete' | 'leger';
  /** Referme seul après ce délai (ms) — utilisé par la variante légère. */
  autoFermerMs?: number;
  onFermer: () => void;
}

/**
 * Lumi surgit pour féliciter l'enfant. Purement positif (ADN non-punitif).
 *
 * Deux intensités : `fete` pour un vrai palier (Lumi saute, étincelles, on
 * ferme d'une tape ou sur le bouton) ; `leger` pour un encouragement de passage
 * (Lumi rebondit, message court, se referme seul). On peut toujours fermer d'une
 * tape.
 */
export function LumiCelebre({
  rang,
  titre,
  sousTitre,
  embleme,
  variante = 'fete',
  autoFermerMs,
  onFermer,
}: LumiCelebreProps) {
  const leger = variante === 'leger';

  useEffect(() => {
    if (!autoFermerMs) return;
    const t = setTimeout(onFermer, autoFermerMs);
    return () => clearTimeout(t);
  }, [autoFermerMs, onFermer]);

  return (
    <div
      role="dialog"
      aria-label={titre}
      onClick={onFermer}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 px-6 text-center backdrop-blur ${
        leger ? 'bg-encre/70' : 'bg-encre/95'
      }`}
    >
      <div className="relative flex items-center justify-center">
        <Lumi rang={rang} taille={leger ? 128 : 168} etat={leger ? 'content' : 'fete'} />
        {embleme && (
          <span
            className="absolute bottom-3 right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-encre bg-encre-clair text-3xl"
            aria-hidden="true"
          >
            {embleme}
          </span>
        )}
        {!leger && (
          <>
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
          </>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <p className="font-display text-2xl text-soleil">{titre}</p>
        {sousTitre && <p className="font-display text-xl text-craie">{sousTitre}</p>}
      </div>

      {!leger && (
        <button
          type="button"
          onClick={onFermer}
          className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          Super&nbsp;!
        </button>
      )}
    </div>
  );
}
