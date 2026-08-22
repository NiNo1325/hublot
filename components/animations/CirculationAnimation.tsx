'use client';

import type { CardAnimationProps } from './registry';
import { localise } from '@/lib/i18n/localise';
import { miseEnScene } from './shared/phases';

const PHASES = ['pompe', 'aller', 'livraison', 'retour'] as const;

/*
  Les légendes de l'illustration sont du contenu, pas du décor. Le typage
  impose à `en` de reprendre exactement les clés du français : une légende
  oubliée ne compile pas.
*/
const LEGENDES = {
  fr: {
    livre: 'O₂ livré',
  },
  en: {
    livre: 'O₂ delivered',
  },
};

/**
 * Le sang de retour est dessiné rouge sombre, jamais bleu : la carte affirme
 * que le sang veineux n'est pas bleu, l'image ne doit pas répéter la
 * convention trompeuse des schémas scolaires.
 */
export function CirculationAnimation({
  activeBeatId,
  isPlaying,
  prefersReducedMotion,
  locale,
}: CardAnimationProps) {
  const { phase, opacite } = miseEnScene(PHASES, activeBeatId);
  const anime = isPlaying && !prefersReducedMotion;
  const legende = localise(LEGENDES, locale);

  return (
    <svg viewBox="0 0 400 240" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="240" fill="#0f1b33" />

      {/* Silhouette */}
      <g opacity="0.28" fill="#b9c4da">
        <circle cx="200" cy="42" r="20" />
        <path d="M200 66 q-40 0 -44 44 l0 62 q0 10 10 10 l68 0 q10 0 10 -10 l0 -62 q-4 -44 -44 -44 z" />
        <path d="M158 118 l-26 62 M242 118 l26 62" stroke="#b9c4da" strokeWidth="11" strokeLinecap="round" />
        <path d="M182 182 l-6 52 M218 182 l6 52" stroke="#b9c4da" strokeWidth="12" strokeLinecap="round" />
      </g>

      {/* Le cœur, muscle qui se contracte */}
      <g style={{ opacity: opacite(0), transition: 'opacity 600ms ease' }}>
        {/*
          Battement en CSS et non en `animateTransform` : un `scale` SVG opère
          depuis l'origine du repère et ferait dériver le cœur vers un coin.
          `transformOrigin` le fait pulser sur lui-même.
        */}
        {/*
          Deux poumons, pâles, pour que le circuit droit ait où aller : la
          carte les nomme deux fois et n’en dessinait aucun.
        */}
        <path d="M150 112 q-32 8 -32 42 q0 22 20 24 q16 2 16 -24 z" fill="#f9a8d4" opacity="0.45" />
        <path d="M250 112 q32 8 32 42 q0 22 -20 24 q-16 2 -16 -24 z" fill="#f9a8d4" opacity="0.45" />

        <path
          d="M200 118 q-16 -22 -32 -8 q-14 12 2 28 l30 28 l30 -28 q16 -16 2 -28 q-16 -14 -32 8 z"
          fill="#dc2626"
          style={{
            transformOrigin: '200px 146px',
            animation: anime ? 'battement 1.1s ease-in-out infinite' : undefined,
          }}
        />
        {/*
          Une cloison, quatre cavités, et la paroi gauche plus épaisse.

          Le cœur était un cœur de Saint-Valentin uni : rien de ce que dit la
          phrase du niveau 9-12 — quatre cavités, deux pompes accolées, paroi
          gauche bien plus épaisse — n’était dessiné, et le symbole risquait de
          rester dans la tête de l’enfant comme la forme réelle de l’organe.
          La gauche anatomique est à droite de l’image, celle qui pousse le
          sang dans tout le corps.
        */}
        <g
          style={{
            transformOrigin: '200px 146px',
            animation: anime ? 'battement 1.1s ease-in-out infinite' : undefined,
          }}
        >
          <path d="M200 112 V172" stroke="#7f1d1d" strokeWidth="3" fill="none" />
          <path d="M172 138 H198 M202 138 H228" stroke="#7f1d1d" strokeWidth="2.5" fill="none" />
          <path d="M228 140 L204 162" stroke="#7f1d1d" strokeWidth="9" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* Artères : départ du sang oxygéné, rouge vif */}
      <g style={{ opacity: opacite(1), transition: 'opacity 600ms ease' }}>
        <path d="M186 132 q-52 6 -60 62" stroke="#ef4444" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M214 132 q52 6 60 62" stroke="#ef4444" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M200 160 q-8 40 -12 74" stroke="#ef4444" strokeWidth="5" fill="none" strokeLinecap="round" />
        {/*
          Position de repos sur la trajectoire.

          Sans `cx`/`cy`, un cercle mû par `animateMotion` retombe en 0,0 dès que
          l'animation ne joue pas — lecture en pause, ou réglage système
          « mouvement réduit ». On les pose donc sur leur parcours, et seulement
          alors : `animateMotion` s'ajoute à la position propre au lieu de la
          remplacer.
        */}
        {[[179, 138], [155, 153], [140, 177]].map(([x, y], i) => (
          <circle key={x} r="4.5" fill="#fca5a5" cx={anime ? 0 : x} cy={anime ? 0 : y}>
            {anime && (
              <animateMotion
                dur="2.6s" begin={`${i * 0.85}s`} repeatCount="indefinite"
                path="M200 132 q-56 10 -66 66"
              />
            )}
          </circle>
        ))}
      </g>

      {/* Capillaires : le vrai lieu de l'échange */}
      <g style={{ opacity: opacite(2), transition: 'opacity 600ms ease' }}>
        {[[126, 196], [274, 196], [188, 232]].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="11" fill="none" stroke="#7dd3fc" strokeWidth="2.5">
              {anime && phase === 2 && (
                <animate attributeName="r" values="8;13;8" dur="1.8s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
              )}
            </circle>
            <circle cx={cx} cy={cy} r="4" fill="#7dd3fc" />
          </g>
        ))}
        <text x="292" y="176" fill="#7dd3fc" fontSize="16" fontFamily="var(--font-atkinson), sans-serif">
          {legende.livre}
        </text>
      </g>

      {/* Retour veineux : rouge sombre, surtout pas bleu. */}
      <g style={{ opacity: opacite(3), transition: 'opacity 600ms ease' }}>
        <path d="M136 190 q40 -30 56 -58" stroke="#7f1d1d" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M264 190 q-40 -30 -56 -58" stroke="#7f1d1d" strokeWidth="5" fill="none" strokeLinecap="round" />
        {[[155, 174], [180, 150]].map(([x, y], i) => (
          <circle key={x} r="4.5" fill="#991b1b" cx={anime ? 0 : x} cy={anime ? 0 : y}>
            {anime && (
              <animateMotion
                dur="2.4s" begin={`${i * 1.2}s`} repeatCount="indefinite"
                path="M136 190 q40 -30 60 -58"
              />
            )}
          </circle>
        ))}
      </g>
    </svg>
  );
}
