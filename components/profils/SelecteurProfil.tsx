'use client';

import { emojiAvatar } from '@/lib/profils/avatars';
import { useT } from '@/components/i18n/useT';
import { useProfils } from './useProfils';

/**
 * « Qui joue ? » — l'écran de choix au lancement.
 *
 * N'apparaît qu'à partir de deux profils. Une famille avec un seul enfant, ou
 * tous ceux déjà installés au moment de la mise à jour, ne le verront jamais :
 * ajouter un écran entre l'enfant et ses cartes ne se justifie que s'il y a
 * vraiment un choix à faire.
 *
 * L'avatar prime sur le prénom, en grand : à trois ans on ne lit pas, mais on
 * reconnaît son renard.
 */
export function SelecteurProfil({ onChoisi }: { onChoisi?: () => void }) {
  const { profils, actif, changer } = useProfils();
  const t = useT();

  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
        {t('profils.qui-joue')}
      </h2>

      <ul className="flex flex-wrap justify-center gap-4">
        {profils.map((p) => {
          const choisi = p.id === actif;
          return (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => {
                  changer(p.id);
                  onChoisi?.();
                }}
                aria-pressed={choisi}
                className={`flex min-h-32 w-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-3xl border-2 transition-colors ${
                  choisi
                    ? 'border-soleil bg-soleil/10'
                    : 'border-encre-bord bg-encre-clair hover:border-soleil'
                }`}
              >
                <span aria-hidden="true" className="text-5xl leading-none">
                  {emojiAvatar(p.avatar)}
                </span>
                <span
                  className={`px-2 text-center text-sm ${choisi ? 'text-soleil' : 'text-craie'}`}
                >
                  {p.prenom || t('profils.sans-nom')}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
