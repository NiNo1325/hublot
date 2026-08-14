'use client';

import { useEffect, useState, type CSSProperties } from 'react';
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
function genConfettis(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const angle = (i / n) * Math.PI * 2;
    const distance = 90 + (i % 4) * 18;
    return {
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance - 20,
      rot: (i % 2 ? 1 : -1) * (160 + (i % 5) * 40),
      delai: (i % 5) * 0.04,
      emoji: EMOJIS_CONFETTI[i % EMOJIS_CONFETTI.length],
    };
  });
}
const CONFETTIS = genConfettis(14);
/*
  Gerbe graduée selon l'intensité d'une série : quelques éclats au premier
  palier, puis de plus en plus autour de Lumi. Les angles se répartissent sur
  tout le cercle quel que soit le nombre.
*/
const CONFETTIS_INTENSITE: Record<1 | 2 | 3, ReturnType<typeof genConfettis>> = {
  1: genConfettis(6),
  2: genConfettis(11),
  3: genConfettis(18),
};

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
/*
  Flammes graduées : aucune au premier palier (juste un peu de réaction),
  quelques petites au deuxième, le brasier complet au troisième.
*/
const FLAMMES_INTENSITE: Record<1 | 2 | 3, typeof FLAMMES> = {
  1: [],
  2: [
    { left: '50%', bottom: -10, taille: 22, delai: 0 },
    { left: '36%', bottom: -4, taille: 16, delai: 0.16 },
    { left: '64%', bottom: -4, taille: 16, delai: 0.24 },
  ],
  3: FLAMMES,
};

interface LumiCelebreProps {
  rang: number;
  /** Rang d'avant : présent et différent, il déclenche la métamorphose. */
  rangAvant?: number;
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
  /** Intensité d'une série (1 → 3) : gradue le nombre d'éléments autour de Lumi
   *  et les flammes à sa base (aucune à 1, quelques-unes à 2, le brasier à 3). */
  intensite?: 1 | 2 | 3;
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
  rangAvant,
  titre,
  sousTitre,
  embleme,
  variante = 'fete',
  autoFermerMs,
  recompense,
  intensite,
  onFermer,
}: LumiCelebreProps) {
  const leger = variante === 'leger';
  const feter = variante === 'fete' || recompense === true;
  const prefersReducedMotion = useReducedMotion();
  const anime = feter && !prefersReducedMotion;

  // Célébration graduée d'une série : plus l'enfant enchaîne, plus il y a
  // d'éléments autour de Lumi, et les flammes s'allument par paliers.
  const flammes = intensite ? FLAMMES_INTENSITE[intensite] : [];
  const enFeu = flammes.length > 0;
  const confettis = intensite ? CONFETTIS_INTENSITE[intensite] : CONFETTIS;
  const tailleLueur = intensite === 3 ? 'h-48 w-48' : 'h-32 w-32';

  // Métamorphose : quand on monte de rang, Lumi apparaît d'abord dans son
  // ancienne forme, puis un éclat l'engloutit et elle ressort au nouveau rang.
  // Le rang affiché bascule au pic de l'éclat (~650 ms), ou tout de suite sous
  // « animation réduite ». Le basculement vit dans la minuterie, pas dans le
  // corps de l'effet.
  const transforme = rangAvant != null && rangAvant !== rang && !leger;
  const [rangAffiche, setRangAffiche] = useState(transforme ? rangAvant : rang);
  useEffect(() => {
    if (!transforme) return;
    const t = setTimeout(() => setRangAffiche(rang), prefersReducedMotion ? 0 : 650);
    return () => clearTimeout(t);
  }, [transforme, prefersReducedMotion, rang]);

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
            className={`pointer-events-none absolute left-1/2 top-[62%] ${tailleLueur} -translate-x-1/2 -translate-y-1/2 rounded-full`}
            style={{
              background:
                'radial-gradient(circle, rgba(251,146,60,0.55), rgba(251,146,60,0.18) 55%, transparent 72%)',
            }}
          />
        )}

        {/* Éclat de métamorphose : un flash chaud qui engloutit Lumi au moment
            où elle change de rang. */}
        {transforme && anime && (
          <span
            aria-hidden="true"
            className="transformation-eclat pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(255,255,255,0.95), rgba(255,207,94,0.6) 40%, transparent 70%)',
            }}
          />
        )}

        {/* Lumi jaillit — ou se métamorphose d'un rang à l'autre. */}
        <span className={`inline-flex ${transforme ? 'lumi-transformation' : 'recompense-pop'}`}>
          <Lumi
            rang={rangAffiche}
            taille={leger ? 128 : 168}
            etat={transforme ? 'repos' : leger ? 'content' : 'fete'}
          />
        </span>

        {/* Flammes sur la tête de Lumi : elle est « en feu » ! */}
        {enFeu && (
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            {flammes.map((f, i) => (
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
            {confettis.map((c, i) => (
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
