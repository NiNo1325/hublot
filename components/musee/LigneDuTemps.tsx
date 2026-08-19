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
 * C'est une flèche, et elle descend : elle donne au mur une direction — de
 * l'Antiquité vers aujourd'hui — là où une colonne de pastilles ne disait que
 * « il y a sept groupes ». Sa hampe se remplit d'or à mesure qu'on délivre, si
 * bien qu'elle est aussi la jauge de progression, lisible sans qu'aucun total
 * ait à s'écrire.
 *
 * Chaque époque porte ses dates. Elles ne sont pas décoratives : c'est par elles
 * qu'un enfant voit que la Renaissance dure deux siècles et le XXᵉ soixante-dix
 * ans, et que la science s'accélère.
 *
 * Les intervalles restent égaux à l'écran, volontairement. Une échelle fidèle
 * écraserait tout le reste sous l'Antiquité et rendrait les six autres époques
 * illisibles — la flèche dit l'ordre et le sens, pas la durée.
 */
export function LigneDuTemps({ compte, active, onAller }: LigneDuTempsProps) {
  const t = useT();

  const totalLibres = EPOQUES.reduce((n, e) => n + compte[e.id].libres, 0);
  const totalSavants = EPOQUES.reduce((n, e) => n + compte[e.id].total, 0);
  const avancement = totalSavants > 0 ? totalLibres / totalSavants : 0;

  /** Les bornes d'une époque, dites comme on les dit à un enfant. */
  const dates = (i: number) => {
    const e = EPOQUES[i];
    if (i === 0) return t('musee.dates.avant')(e.fin);
    if (i === EPOQUES.length - 1) return t('musee.dates.depuis')(e.debut);
    return `${e.debut} – ${e.fin}`;
  };

  return (
    <nav
      aria-label={t('musee.ligne-du-temps')}
      className="sticky top-3 z-10 h-fit w-[104px] shrink-0 sm:w-40"
    >
      <ol className="relative flex flex-col">
        {/* La hampe, et sa part déjà délivrée. */}
        <span
          aria-hidden="true"
          className="absolute left-[13px] top-2 bottom-8 w-[3px] rounded-full bg-encre-bord"
        />
        <span
          aria-hidden="true"
          className="absolute left-[13px] top-2 w-[3px] rounded-full bg-soleil transition-[height] duration-700"
          style={{ height: `calc((100% - 40px) * ${avancement})` }}
        />

        {EPOQUES.map((epoque, i) => {
          const { libres, total } = compte[epoque.id];
          const complet = total > 0 && libres >= total;
          const entame = libres > 0;
          const courante = active === epoque.id;
          return (
            <li key={epoque.id} className="relative">
              <button
                type="button"
                onClick={() => onAller(epoque.id)}
                aria-current={courante ? 'true' : undefined}
                aria-label={`${t(CLE_EPOQUE[epoque.id])}, ${dates(i)} — ${libres}/${total}`}
                className={`flex w-full cursor-pointer items-start gap-2 rounded-lg py-2 pr-1 text-left transition-colors ${
                  courante ? 'bg-soleil/10' : ''
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`z-10 mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 text-[10px] font-semibold tabular-nums transition-colors ${
                    complet
                      ? 'border-soleil bg-soleil text-encre'
                      : entame
                        ? 'border-soleil bg-encre text-soleil'
                        : 'border-encre-bord bg-encre text-craie-douce/50'
                  }`}
                >
                  {libres}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-[11px] font-semibold leading-tight ${
                      courante ? 'text-craie' : 'text-craie-douce'
                    }`}
                  >
                    {t(CLE_EPOQUE[epoque.id])}
                  </span>
                  {/* Les dates : le cœur de la frise, en chiffres alignés. */}
                  <span className="block text-[10px] tabular-nums leading-tight text-craie-douce/70">
                    {dates(i)}
                  </span>
                  <span className="block text-[10px] tabular-nums leading-tight text-craie-douce/50">
                    {libres}/{total}
                  </span>
                </span>
              </button>
            </li>
          );
        })}

        {/* La pointe : c'est elle qui fait de la colonne une flèche, et qui dit
            dans quel sens le temps coule. */}
        <li aria-hidden="true" className="relative h-8">
          <span className="absolute left-[6px] top-0">
            <svg viewBox="0 0 18 24" className="h-6 w-[18px]">
              <path
                d="M9 24 L0 6 L9 10 L18 6 Z"
                fill={avancement >= 1 ? 'var(--color-soleil)' : 'var(--color-encre-bord)'}
              />
            </svg>
          </span>
        </li>
      </ol>
    </nav>
  );
}
