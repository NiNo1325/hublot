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
 * Le jalon vit dans la même ligne de grille que les cellules qu'il désigne : son
 * fil s'étire donc exactement sur la hauteur de l'époque, et le XIXᵉ siècle —
 * trente-six savants — occupe douze fois plus de frise que le Moyen Âge, qui en
 * compte trois.
 *
 * **Le nom se lit à la verticale, le long du fil.** Écrit à plat sous la
 * pastille, il exigeait une colonne large, et se retrouvait quand même coupé sur
 * trois lignes puis tronqué par la galerie voisine — « Le siècle des Lumières »
 * n'y tenait pas. À la verticale il court sur toute la hauteur de son époque,
 * quelle qu'elle soit : c'est la seule mise en page qui s'adapte d'elle-même à
 * un bloc qui va de trois à trente-six cellules.
 *
 * Les dates restent à l'horizontale, sous la pastille : quatre chiffres tiennent
 * partout, et ce sont eux qu'on vient chercher du regard.
 */
export function JalonEpoque({ epoque, rang, dernier, libres, total, active }: JalonEpoqueProps) {
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
    <div className="relative flex w-14 shrink-0 flex-col items-center pb-5 sm:w-16">
      {/* Le fil, qui court sur toute la hauteur de la galerie voisine. */}
      <span
        aria-hidden="true"
        className={`absolute left-1/2 w-[3px] -translate-x-1/2 ${
          entame ? 'bg-soleil' : 'bg-encre-bord'
        } ${rang === 0 ? 'top-3' : 'top-0'} ${dernier ? 'bottom-8' : 'bottom-0'}`}
      />

      <span
        aria-hidden="true"
        className={`relative z-10 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-semibold tabular-nums transition-colors ${
          complet
            ? 'border-soleil bg-soleil text-encre'
            : entame
              ? 'border-soleil bg-encre text-soleil'
              : 'border-encre-bord bg-encre text-craie-douce/50'
        } ${active ? 'ring-2 ring-soleil/40 ring-offset-2 ring-offset-encre' : ''}`}
      >
        {libres}
      </span>

      {/* Les dates, à plat : quatre chiffres tiennent dans n'importe quelle
          largeur, et c'est ce qu'on vient lire. */}
      <span className="relative z-10 mt-1 rounded bg-encre px-0.5 text-center text-[9px] tabular-nums leading-tight text-craie-douce/80 sm:text-[10px]">
        {dates}
      </span>

      {/*
        Le nom, à la verticale et de bas en haut, le long du fil : il s'étire
        avec l'époque au lieu de se faire couper.
      */}
      <span
        className={`relative z-10 mt-2 min-h-0 flex-1 overflow-hidden text-[11px] font-semibold uppercase tracking-wide sm:text-xs ${
          active ? 'text-craie' : 'text-craie-douce/70'
        }`}
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {t(CLE_EPOQUE[epoque.id])}
      </span>

      {/* La pointe : c'est elle qui fait de la colonne une flèche, et qui dit
          dans quel sens le temps coule. */}
      {dernier && (
        <span aria-hidden="true" className="absolute bottom-1 left-1/2 -translate-x-1/2">
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
