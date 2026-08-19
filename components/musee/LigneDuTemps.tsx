'use client';

import { EPOQUES, type IdEpoque } from '@/lib/cles';
import { useT } from '@/components/i18n/useT';

interface LigneDuTempsProps {
  /** Savants délivrés et total, par époque. */
  compte: Record<IdEpoque, { libres: number; total: number }>;
  /** L'époque dont la galerie est à l'écran, mise en avant. */
  active: IdEpoque | null;
  onAller: (id: IdEpoque) => void;
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
 * La ligne du temps, le long du mur.
 *
 * Elle fait deux choses qu'un simple empilement de galeries ne fait pas : elle
 * donne au mur une **direction** — on descend de l'Antiquité à aujourd'hui — et
 * elle rend le trajet navigable, ce qui compte dès que cent treize cellules
 * s'étendent sur plusieurs écrans.
 *
 * Chaque jalon se remplit à mesure qu'on délivre, si bien que la ligne devient
 * le résumé de la progression : plein pour une époque entièrement libérée,
 * cerclé dès qu'elle est entamée, éteint tant qu'on n'y a touché personne.
 *
 * Sur téléphone, elle se réduit aux pastilles — les noms d'époques mangeraient
 * le tiers de la largeur, et un mur illisible avec une jolie frise vaut moins
 * qu'un mur lisible sans.
 */
export function LigneDuTemps({ compte, active, onAller }: LigneDuTempsProps) {
  const t = useT();

  return (
    <nav
      aria-label={t('musee.ligne-du-temps')}
      className="sticky top-3 z-10 h-fit w-9 shrink-0 sm:w-32"
    >
      <ol className="relative flex flex-col">
        {/* Le fil, qui court derrière les jalons d'un bout à l'autre. */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 left-[11px] top-4 w-0.5 bg-encre-bord"
        />
        {EPOQUES.map((epoque) => {
          const { libres, total } = compte[epoque.id];
          const complet = total > 0 && libres >= total;
          const entame = libres > 0;
          return (
            <li key={epoque.id} className="relative">
              <button
                type="button"
                onClick={() => onAller(epoque.id)}
                aria-current={active === epoque.id ? 'true' : undefined}
                aria-label={`${t(CLE_EPOQUE[epoque.id])} — ${libres}/${total}`}
                className="flex w-full cursor-pointer items-center gap-2 py-2 text-left"
              >
                <span
                  aria-hidden="true"
                  className={`z-10 h-6 w-6 shrink-0 rounded-full border-2 transition-colors ${
                    complet
                      ? 'border-soleil bg-soleil'
                      : entame
                        ? 'border-soleil bg-encre'
                        : 'border-encre-bord bg-encre'
                  } ${active === epoque.id ? 'ring-2 ring-soleil/40 ring-offset-2 ring-offset-encre' : ''}`}
                />
                <span
                  aria-hidden="true"
                  className={`hidden text-[11px] leading-tight sm:block ${
                    active === epoque.id ? 'text-craie' : 'text-craie-douce'
                  }`}
                >
                  {t(CLE_EPOQUE[epoque.id])}
                  <span className="block tabular-nums opacity-70">
                    {libres}/{total}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
