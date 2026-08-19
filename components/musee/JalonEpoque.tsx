'use client';

import type { Epoque } from '@/lib/cles';
import { useT } from '@/components/i18n/useT';

interface JalonEpoqueProps {
  epoque: Epoque;
  /** Rang dans la frise : le premier n'a pas de fil au-dessus. */
  rang: number;
  /** Le dernier porte la pointe de la flèche. */
  dernier: boolean;
  libres: number;
  total: number;
  active: boolean;
}

/*
  Les intitulés, listés explicitement plutôt que construits à la volée : une clé
  fabriquée par concaténation échapperait au typage du dictionnaire, et une
  époque ajoutée sans sa traduction passerait inaperçue jusqu'à l'écran.
*/
const CLE_EPOQUE = {
  antiquite: 'musee.epoque.antiquite',
  'moyen-age': 'musee.epoque.moyen-age',
  renaissance: 'musee.epoque.renaissance',
  lumieres: 'musee.epoque.lumieres',
  'dix-neuvieme': 'musee.epoque.dix-neuvieme',
  vingtieme: 'musee.epoque.vingtieme',
  aujourdhui: 'musee.epoque.aujourdhui',
} as const;

/**
 * Un jalon de la ligne du temps, à hauteur de sa galerie.
 *
 * Le jalon vit dans la même ligne de grille que les cellules qu'il désigne :
 * son fil s'étire donc exactement sur la hauteur de l'époque, et le XIXᵉ siècle
 * — trente-six savants — occupe douze fois plus de frise que le Moyen Âge, qui
 * en compte trois. C'est ce qui manquait au rail fixe d'avant, dont les jalons
 * étaient répartis à intervalles égaux : il annonçait sept groupes, sans jamais
 * dire qu'ils n'ont pas du tout la même taille.
 *
 * Les dates ne décorent pas : c'est par elles qu'un enfant voit que la
 * Renaissance dure deux siècles et le XXᵉ soixante-dix ans.
 */
export function JalonEpoque({
  epoque,
  rang,
  dernier,
  libres,
  total,
  active,
}: JalonEpoqueProps) {
  const t = useT();
  const complet = total > 0 && libres >= total;
  const entame = libres > 0;

  /** Les bornes, dites comme on les dit à un enfant. */
  const dates =
    rang === 0
      ? t('musee.dates.avant')(epoque.fin)
      : dernier
        ? t('musee.dates.depuis')(epoque.debut)
        : `${epoque.debut} – ${epoque.fin}`;

  return (
    <div className="relative flex w-[74px] flex-col items-start pb-5 sm:w-28">
      {/* Le fil, qui court sur toute la hauteur de la galerie voisine. */}
      <span
        aria-hidden="true"
        className={`absolute left-[11px] w-[3px] ${
          entame ? 'bg-soleil' : 'bg-encre-bord'
        } ${rang === 0 ? 'top-3' : 'top-0'} ${dernier ? 'bottom-8' : 'bottom-0'}`}
      />

      <span
        aria-hidden="true"
        className={`relative z-10 mt-1 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-semibold tabular-nums transition-colors ${
          complet
            ? 'border-soleil bg-soleil text-encre'
            : entame
              ? 'border-soleil bg-encre text-soleil'
              : 'border-encre-bord bg-encre text-craie-douce/50'
        } ${active ? 'ring-2 ring-soleil/40 ring-offset-2 ring-offset-encre' : ''}`}
      >
        {libres}
      </span>

      <span className="mt-1 pl-0.5">
        <span
          className={`block text-[10px] font-semibold leading-tight sm:text-[11px] ${
            active ? 'text-craie' : 'text-craie-douce'
          }`}
        >
          {t(CLE_EPOQUE[epoque.id])}
        </span>
        <span className="block text-[10px] tabular-nums leading-tight text-craie-douce/70">
          {dates}
        </span>
      </span>

      {/* La pointe : c'est elle qui fait de la colonne une flèche, et qui dit
          dans quel sens le temps coule. */}
      {dernier && (
        <span aria-hidden="true" className="absolute bottom-1 left-[3px]">
          <svg viewBox="0 0 18 24" className="h-6 w-[18px]">
            <path
              d="M9 24 L0 6 L9 10 L18 6 Z"
              fill={complet ? 'var(--color-soleil)' : 'var(--color-encre-bord)'}
            />
          </svg>
        </span>
      )}
    </div>
  );
}
