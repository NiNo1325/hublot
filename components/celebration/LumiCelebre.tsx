'use client';

import { useEffect, type CSSProperties } from 'react';
import { Lumi } from '@/components/mascotte/Lumi';
import { useReducedMotion } from '@/components/animations/shared/useReducedMotion';
import { jouerSonRecompense } from '@/lib/sonRecompense';

/*
  Gerbe de confettis : quatorze éclats répartis en cercle, avec distances,
  rotations et retards échelonnés selon l'indice. Volontairement déterministe
  (aucun aléatoire pendant le rendu) — la variété entre les éclats suffit à
  l'effet, et le tir reste identique d'une fête à l'autre, ce qui n'a aucune
  importance à l'écran.
*/
const EMOJIS_CONFETTI = ['✨', '⭐', '🎉', '🌟', '💫', '🎊'];
const CONFETTIS = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const distance = 90 + (i % 4) * 18;
  return {
    dx: Math.cos(angle) * distance,
    dy: Math.sin(angle) * distance - 20,
    rot: (i % 2 ? 1 : -1) * (160 + (i % 5) * 40),
    delai: (i % 5) * 0.04,
    emoji: EMOJIS_CONFETTI[i % EMOJIS_CONFETTI.length],
  };
});

/*
  Lumi en feu : cinq flammes à sa base, la plus grande au centre, comme un
  brasier d'où elle s'élève. `bottom` est en pixels depuis le bas du personnage
  (négatif = sous ses pieds).
*/
const FLAMMES = [
  { left: '50%', bottom: -14, taille: 32, delai: 0 },
  { left: '32%', bottom: -8, taille: 24, delai: 0.14 },
  { left: '68%', bottom: -8, taille: 24, delai: 0.22 },
  { left: '18%', bottom: 0, taille: 19, delai: 0.34 },
  { left: '82%', bottom: 0, taille: 19, delai: 0.08 },
];

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
  /** Son + gerbe de confettis. Vrai par défaut pour `fete`. */
  recompense?: boolean;
  /** Embrase Lumi (flammes sur la tête) au lieu de l'emblème dans le coin. */
  enFeu?: boolean;
  onFermer: () => void;
}

/**
 * Lumi surgit pour féliciter l'enfant. Purement positif (ADN non-punitif).
 *
 * Une vraie petite fête, sur environ trois secondes : Lumi jaillit (pop), une
 * onde s'échappe d'elle, une gerbe de confettis retombe, et un arpège de
 * récompense se joue. Deux intensités : `fete` pour un vrai palier (on ferme
 * d'une tape ou sur le bouton) ; `leger` pour un encouragement (se referme
 * seul). L'accueil (`recompense` faux) garde le pop mais reste sobre et muet.
 */
export function LumiCelebre({
  rang,
  titre,
  sousTitre,
  embleme,
  variante = 'fete',
  autoFermerMs,
  recompense,
  enFeu,
  onFermer,
}: LumiCelebreProps) {
  const leger = variante === 'leger';
  const feter = variante === 'fete' || recompense === true;
  const prefersReducedMotion = useReducedMotion();
  const anime = feter && !prefersReducedMotion;

  useEffect(() => {
    if (feter) jouerSonRecompense();
  }, [feter]);

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
        {/* Onde qui s'échappe de Lumi. */}
        {anime && (
          <span
            aria-hidden="true"
            className="recompense-onde pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 rounded-full border-2 border-soleil"
          />
        )}

        {/* Lueur chaude, derrière Lumi, quand elle est en feu. */}
        {enFeu && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[62%] h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(251,146,60,0.55), rgba(251,146,60,0.18) 55%, transparent 72%)',
            }}
          />
        )}

        {/* Lumi jaillit. */}
        <span className="recompense-pop inline-flex">
          <Lumi rang={rang} taille={leger ? 128 : 168} etat={leger ? 'content' : 'fete'} />
        </span>

        {/* Flammes sur la tête de Lumi : elle est « en feu » ! */}
        {enFeu && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {FLAMMES.map((f, i) => (
              <span
                key={i}
                className={prefersReducedMotion ? 'absolute' : 'flamme absolute'}
                style={{
                  left: f.left,
                  bottom: f.bottom,
                  fontSize: f.taille,
                  transform: 'translateX(-50%)',
                  animationDelay: `${f.delai}s`,
                }}
              >
                🔥
              </span>
            ))}
          </div>
        )}

        {embleme && !enFeu && (
          <span
            className="recompense-pop absolute bottom-3 right-2 flex h-14 w-14 items-center justify-center rounded-full border-2 border-encre bg-encre-clair text-3xl"
            style={{ animationDelay: '0.15s' }}
            aria-hidden="true"
          >
            {embleme}
          </span>
        )}

        {/* Gerbe de confettis : jaillit puis retombe. */}
        {anime && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {CONFETTIS.map((c, i) => (
              <span
                key={i}
                className="recompense-confetti absolute left-1/2 top-1/2 text-2xl"
                style={
                  {
                    '--dx': `${c.dx}px`,
                    '--dy': `${c.dy}px`,
                    '--rot': `${c.rot}deg`,
                    animationDelay: `${c.delai}s`,
                  } as CSSProperties
                }
              >
                {c.emoji}
              </span>
            ))}
          </div>
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
