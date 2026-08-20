'use client';

import { useState } from 'react';
import { emojiAvatar } from '@/lib/profils/avatars';
import { useProfils } from '@/components/profils/useProfils';
import { useT } from '@/components/i18n/useT';

/**
 * « Qui utilise Hublot » — la fratrie, dans Réglages.
 *
 * Un enfant se renomme sur place, se choisit d'un geste, et ne se supprime que
 * s'il en reste un autre. La suppression demande confirmation : elle emporte
 * les cartes écoutées et les savants libérés, ce qui ne se répare pas.
 */
export function SectionFamille() {
  const { profils, actif, changer, ajouter, renommer, supprimer } = useProfils();
  const t = useT();
  const [nouveau, setNouveau] = useState('');
  const [aSupprimer, setASupprimer] = useState<string | null>(null);

  return (
    <div className="divide-y divide-encre-bord overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
      {profils.map((p) => {
        const courant = p.id === actif;
        return (
          <div key={p.id} className="flex flex-col gap-2 px-5 py-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => changer(p.id)}
                aria-pressed={courant}
                title={t('famille.jouer')}
                className={`flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-2xl border-2 text-2xl transition-colors ${
                  courant ? 'border-soleil bg-soleil/10' : 'border-encre-bord hover:border-soleil'
                }`}
              >
                <span aria-hidden="true">{emojiAvatar(p.avatar)}</span>
              </button>

              <input
                type="text"
                value={p.prenom}
                maxLength={20}
                placeholder={t('profils.sans-nom')}
                onChange={(e) => renommer(p.id, e.target.value)}
                aria-label={t('famille.prenom')}
                className="min-h-11 w-0 min-w-0 flex-1 rounded-2xl border-2 border-transparent bg-transparent px-3 text-craie transition-colors focus:border-encre-bord"
              />

              {profils.length > 1 && (
                <button
                  type="button"
                  onClick={() => setASupprimer(aSupprimer === p.id ? null : p.id)}
                  className="min-h-11 shrink-0 cursor-pointer px-2 text-sm text-craie-douce/70 transition-colors hover:text-craie"
                >
                  {t('famille.supprimer')}
                </button>
              )}
            </div>

            {aSupprimer === p.id && (
              <div className="flex flex-wrap items-center gap-2 pl-15">
                <span className="text-sm text-craie-douce">{t('famille.supprimer.avertir')}</span>
                <button
                  type="button"
                  onClick={() => {
                    supprimer(p.id);
                    setASupprimer(null);
                  }}
                  className="min-h-10 cursor-pointer rounded-full bg-soleil/15 px-4 text-sm text-soleil"
                >
                  {t('famille.supprimer.confirmer')}
                </button>
              </div>
            )}
          </div>
        );
      })}

      {/*
        `min-w-0` sur le champ et `shrink-0` sur le bouton : sans quoi le champ
        réclame la largeur de son texte indicatif et pousse le bouton hors de
        l'écran sur un téléphone étroit — il devenait invisible en dessous de
        360 px, alors qu'il est la seule façon d'ajouter un enfant.
      */}
      <form
        className="flex items-center gap-2 px-5 py-4"
        onSubmit={(e) => {
          e.preventDefault();
          if (!nouveau.trim()) return;
          ajouter(nouveau);
          setNouveau('');
        }}
      >
        <span aria-hidden="true" className="text-xl">
          ＋
        </span>
        <input
          type="text"
          value={nouveau}
          maxLength={20}
          placeholder={t('famille.ajouter.champ')}
          onChange={(e) => setNouveau(e.target.value)}
          aria-label={t('famille.ajouter.champ')}
          className="min-h-11 w-0 min-w-0 flex-1 rounded-2xl border-2 border-encre-bord bg-transparent px-3 text-craie"
        />
        <button
          type="submit"
          disabled={!nouveau.trim()}
          className="min-h-11 shrink-0 cursor-pointer rounded-2xl border-2 border-encre-bord px-4 text-craie transition-colors hover:border-soleil disabled:cursor-default disabled:opacity-40"
        >
          {t('famille.ajouter')}
        </button>
      </form>
    </div>
  );
}
