'use client';

import { useState } from 'react';
import { Lumi } from '@/components/mascotte/Lumi';
import { useT } from '@/components/i18n/useT';

interface SelecteurAgeProps {
  ageInitial: number;
  /** Rang de Lumi affiché (0 par défaut) : reflète la progression dans Réglages. */
  rangLumi?: number;
  labelValider: string;
  onValider: (age: number) => void;
}

/**
 * Pas-à-pas de l'âge, partagé entre la première entrée et les Réglages.
 *
 * Lumi tient lieu d'avatar — non genré, il n'impose aucune identité, là où une
 * figure d'enfant poussait certains à ne pas s'y reconnaître. Le grand chiffre
 * sert l'adulte qui règle ; la mascotte, l'enfant qui s'y attache.
 */
export function SelecteurAge({
  ageInitial,
  rangLumi = 0,
  labelValider,
  onValider,
}: SelecteurAgeProps) {
  const t = useT();
  const [ageEdite, setAgeEdite] = useState(ageInitial);

  return (
    <div className="flex flex-col items-center gap-8">
      <span className="flex h-44 w-44 items-center justify-center rounded-full bg-encre-clair">
        <Lumi rang={rangLumi} taille={150} etat="repos" />
      </span>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => setAgeEdite((a) => Math.max(3, a - 1))}
          disabled={ageEdite <= 3}
          aria-label={t('age.moins')}
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 border-encre-bord font-display text-4xl text-craie transition-colors hover:border-soleil hover:text-soleil disabled:cursor-default disabled:opacity-30"
        >
          −
        </button>
        <span
          aria-hidden="true"
          className="w-32 text-center font-display text-6xl font-semibold text-craie"
        >
          {ageEdite}
          {ageEdite >= 12 ? ' +' : ''}
        </span>
        <button
          type="button"
          onClick={() => setAgeEdite((a) => Math.min(12, a + 1))}
          disabled={ageEdite >= 12}
          aria-label={t('age.plus')}
          className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 border-encre-bord font-display text-4xl text-craie transition-colors hover:border-soleil hover:text-soleil disabled:cursor-default disabled:opacity-30"
        >
          +
        </button>
      </div>
      <span className="sr-only" aria-live="polite">
        {ageEdite >= 12 ? '12 ans et plus' : `${ageEdite} ans`}
      </span>

      <button
        type="button"
        onClick={() => onValider(ageEdite)}
        className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-xl text-soleil transition-transform hover:scale-105 active:scale-95"
      >
        {labelValider}
      </button>
    </div>
  );
}
