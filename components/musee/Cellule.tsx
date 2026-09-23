'use client';

import type { Ref } from 'react';
import Image from 'next/image';
import type { SavantPrisonnier } from '@/content/savants-cartes';
import { prixSavant } from '@/lib/cles';
import { useT } from '@/components/i18n/useT';

interface CelluleProps {
  savant: SavantPrisonnier;
  libere: boolean;
  /** Le trousseau suffit-il à ouvrir cette cellule ? */
  abordable: boolean;
  onOuvrir: (savant: SavantPrisonnier) => void;
  /*
    Le mur s'en sert pour emmener vers une cellule nommée par le bandeau.

    Il porte sur le `<li>` lui-même et non sur un enrobage : le premier essai
    passait par un `<span class="contents">` glissé entre la grille et la
    cellule, pour ne pas casser la relation `ul > li`. Un élément en
    `display: contents` n'a pas de boîte — son rectangle est nul et
    `scrollIntoView` ne fait rien du tout, sans erreur ni avertissement. Le
    bouton « Tu peux délivrer quelqu'un ! » ne menait donc nulle part.
  */
  ref?: Ref<HTMLLIElement>;
}

/** Positions des barreaux verticaux, en pourcentage de la largeur. */
const BARREAUX = [18, 39, 61, 82];

/**
 * Une cellule du mur.
 *
 * C'est une niche voûtée fermée par une grille : des barreaux verticaux tenus
 * par deux traverses, avec un reflet métallique sur leur arête gauche et leur
 * ombre portée sur le mur du fond. Le portrait est enfoncé dans le noir et pris
 * dans un vignettage, si bien qu'on devine une présence sans reconnaître
 * personne — la découverte du visage est la récompense, la révéler d'avance
 * viderait le geste de son sel.
 *
 * Une cellule à portée de clés porte son cadenas en or ; les autres l'ont terne.
 * Sans ce signal, l'enfant devrait toucher cent treize cellules pour savoir
 * laquelle il peut ouvrir.
 *
 * Délivré, tout change d'un coup : la grille disparaît, la lumière entre, et le
 * portrait se retrouve encadré d'or avec son nom sur une plaque, comme au musée.
 */
export function Cellule({ savant, libere, abordable, onOuvrir, ref }: CelluleProps) {
  const t = useT();
  const prix = prixSavant(savant);

  return (
    <li ref={ref} className="scroll-mt-24">
      <button
        type="button"
        onClick={() => onOuvrir(savant)}
        aria-label={
          libere ? t('musee.cellule-libre')(savant.nom) : t('musee.cellule-fermee')(prix)
        }
        className={`flex w-full cursor-pointer flex-col items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 ${
          libere || abordable ? '' : 'opacity-60'
        }`}
      >
        <span
          className={`relative block aspect-[3/4] w-full overflow-hidden rounded-b-lg rounded-t-[46%] border-2 transition-colors ${
            libere
              ? 'border-soleil/70 bg-[#2a2214] shadow-[0_0_16px_rgba(255,182,39,0.25)]'
              : 'border-[#39435c] bg-[#0a0f1c]'
          }`}
        >
          <Image
            src={`/images/wall-of-fame/${savant.id}.webp`}
            alt=""
            fill
            sizes="120px"
            className={`object-cover object-top transition-[filter] duration-700 ${
              libere ? '' : 'grayscale brightness-[0.3] contrast-125'
            }`}
          />

          {/* Le fond de niche : la lumière tombe du haut, le bas reste dans l'ombre. */}
          <span
            aria-hidden="true"
            className={`absolute inset-0 ${
              libere
                ? 'bg-[radial-gradient(ellipse_at_50%_15%,transparent_35%,rgba(10,15,28,0.55)_100%)]'
                : 'bg-[radial-gradient(ellipse_at_50%_20%,transparent_20%,rgba(4,7,14,0.85)_95%)]'
            }`}
          />

          {!libere && (
            <span aria-hidden="true" className="absolute inset-0">
              <svg viewBox="0 0 75 100" preserveAspectRatio="none" className="h-full w-full">
                <defs>
                  {/*
                    Le métal : sombre sur les flancs, clair sur l'arête qui prend
                    la lumière. C'est ce dégradé qui donne du volume aux barreaux
                    — quatre traits plats se lisaient comme une hachure.
                  */}
                  <linearGradient id={`fer-${savant.id}`} x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#41506e" />
                    <stop offset="0.3" stopColor="#8b9ab8" />
                    <stop offset="0.6" stopColor="#55617c" />
                    <stop offset="1" stopColor="#2b3348" />
                  </linearGradient>
                </defs>

                {/* L'ombre portée de la grille sur le mur du fond. */}
                {BARREAUX.map((x) => (
                  <rect
                    key={`ombre-${x}`}
                    x={x - 1}
                    y="0"
                    width="4.4"
                    height="100"
                    fill="#04070e"
                    opacity="0.55"
                  />
                ))}

                {/* Les traverses, qui tiennent la grille et lui donnent son air de porte. */}
                {[30, 70].map((y) => (
                  <rect
                    key={`traverse-${y}`}
                    x="0"
                    y={y}
                    width="75"
                    height="4"
                    fill={`url(#fer-${savant.id})`}
                  />
                ))}

                {BARREAUX.map((x) => (
                  <rect
                    key={x}
                    x={x - 2.2}
                    y="0"
                    width="4.4"
                    height="100"
                    fill={`url(#fer-${savant.id})`}
                  />
                ))}
              </svg>
            </span>
          )}

          {/* Le cadenas : doré quand la cellule est à portée de clés, terne sinon. */}
          {!libere && (
            <span
              aria-hidden="true"
              className={`absolute bottom-[6%] left-1/2 -translate-x-1/2 text-[15px] leading-none ${
                abordable
                  ? 'opacity-100 drop-shadow-[0_0_5px_rgba(255,182,39,0.9)]'
                  : 'opacity-45 grayscale'
              }`}
            >
              🔒
            </span>
          )}
        </span>

        {/* La plaque : le nom une fois délivré, le prix tant qu'il est enfermé. */}
        <span
          className={`w-full rounded-md px-1 py-1 text-center text-xs leading-tight ${
            libere
              ? 'bg-soleil/15 text-craie'
              : abordable
                ? 'text-soleil'
                : 'text-craie-douce/60'
          }`}
        >
          {libere ? (
            savant.nom
          ) : (
            <>
              {prix} <span aria-hidden="true">🔑</span>
            </>
          )}
        </span>
      </button>
    </li>
  );
}
