'use client';

import Link from 'next/link';
import type { ScienceCard } from '@/lib/types';
import { expeditionDuJour, indexDuJour } from '@/lib/expedition';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';
import { useExpeditionFaite } from './useExpeditionFaite';

interface ExpeditionDuJourProps {
  cards: ScienceCard[];
}

/**
 * L'appel du jour, en tête de l'accueil.
 *
 * Il ne dit pas quelles cartes il contient : le thème seul suffit, et la
 * surprise fait partie de l'envie. Il dit en revanche combien il en reste —
 * trois — parce qu'une proposition sans fin visible n'est pas rassurante, ni
 * pour l'enfant ni pour le parent qui décide de tendre le téléphone.
 *
 * Une fois faite, la carte ne disparaît pas : elle se ferme, en annonçant celle
 * de demain. Retirer le bloc laisserait un trou dans l'écran et priverait
 * l'enfant du seul repère qui dit « tu as fini pour aujourd'hui ».
 */
export function ExpeditionDuJour({ cards }: ExpeditionDuJourProps) {
  const { cartesVues } = useCartesVues();
  const { locale } = useLocale();
  const t = useT();
  const { faite } = useExpeditionFaite();

  const expedition = expeditionDuJour(indexDuJour(new Date()), cartesVues);
  // Les cartes absentes du catalogue sont ignorées : un identifiant qui
  // disparaîtrait ne doit pas vider l'écran d'accueil.
  const trio = expedition.cartes.filter((id) => cards.some((c) => c.id === id));
  const dejaVues = trio.filter((id) => cartesVues.has(id)).length;

  if (faite) {
    return (
      <div className="flex items-center gap-4 rounded-3xl border-2 border-encre-bord bg-encre-clair px-5 py-4">
        <span aria-hidden="true" className="text-3xl opacity-60">
          {expedition.emoji}
        </span>
        <span className="flex flex-1 flex-col">
          <span className="font-display text-base text-craie">
            {t('expedition.faite')}
          </span>
          <span className="text-sm text-craie-douce">{t('expedition.demain')}</span>
        </span>
      </div>
    );
  }

  return (
    <Link
      href="/parcours"
      className="flex items-center gap-4 rounded-3xl border-2 border-soleil bg-soleil/10 px-5 py-4 transition-transform hover:scale-[1.01] active:scale-[0.99]"
    >
      <span aria-hidden="true" className="text-4xl">
        {expedition.emoji}
      </span>
      <span className="flex flex-1 flex-col">
        <span className="text-sm text-craie-douce">{t('expedition.titre')}</span>
        <span className="font-display text-lg text-soleil">
          {localise(expedition.titre, locale)}
        </span>
        <span className="text-sm text-craie-douce">
          {t('expedition.combien')(trio.length - dejaVues, trio.length)}
        </span>
      </span>
      <span aria-hidden="true" className="text-2xl text-soleil">
        ›
      </span>
    </Link>
  );
}
