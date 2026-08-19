'use client';

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
}

/**
 * Une cellule du mur.
 *
 * Enfermé, le savant n'est qu'une ombre derrière ses barreaux : on ne voit pas
 * qui c'est, et c'est tout l'intérêt — la découverte du visage est la
 * récompense. Pour les portraits déjà dessinés, l'ombre est celle du vrai
 * portrait, noirci ; pour les autres, une silhouette générique en attendant
 * l'illustration.
 *
 * Une cellule qu'on peut ouvrir se signale d'elle-même, par un halo doré et son
 * prix en clair. Sans ce signal, l'enfant devrait toucher les cent treize
 * cellules pour savoir laquelle est à sa portée.
 */
export function Cellule({ savant, libere, abordable, onOuvrir }: CelluleProps) {
  const t = useT();
  const prix = prixSavant(savant);

  return (
    <li>
      <button
        type="button"
        onClick={() => onOuvrir(savant)}
        aria-label={
          libere
            ? t('musee.cellule-libre')(savant.nom)
            : t('musee.cellule-fermee')(prix)
        }
        className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-2xl p-1.5 transition-[transform,opacity] hover:scale-105 active:scale-95 ${
          libere || abordable ? '' : 'opacity-45'
        }`}
      >
        <span className="relative block aspect-square w-full overflow-hidden rounded-xl bg-[#1b2540]">
          <Image
              src={`/images/wall-of-fame/${savant.id}.webp`}
              alt=""
              fill
              sizes="120px"
              className={`object-cover transition-[filter] duration-500 ${
                libere ? '' : 'grayscale brightness-[0.22] contrast-125'
              }`}
            />

          {/* Les barreaux : dessinés par-dessus, pas dans l'image, pour qu'ils
              disparaissent d'un coup à la libération. */}
          {!libere && (
            <span aria-hidden="true" className="absolute inset-0">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                {[18, 34, 50, 66, 82].map((x) => (
                  <line
                    key={x}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="100"
                    stroke="#64748b"
                    strokeWidth="4"
                    strokeOpacity="0.85"
                  />
                ))}
              </svg>
            </span>
          )}
        </span>

        <span
          className={`text-center text-[10px] leading-tight ${
            libere ? 'text-craie' : abordable ? 'text-soleil' : 'text-craie-douce/60'
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
