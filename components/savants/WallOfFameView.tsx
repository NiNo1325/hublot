'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { ScienceCard } from '@/lib/types';
import { savants } from '@/content/savants';
import { CardModal } from '@/components/cards/CardModal';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useT } from '@/components/i18n/useT';
import { SavantModal } from './SavantModal';

interface WallOfFameViewProps {
  cards: ScienceCard[];
}

/**
 * Le mur des savants : vingt portraits en médaillon.
 *
 * Rien n'est verrouillé ni compté ici. Les cartes s'éteignent quand on les a
 * écoutées, les mondes affichent un ratio ; ce mur, non — c'est une galerie où
 * l'on flâne, et transformer des personnes en cases à cocher retournerait
 * l'intention.
 *
 * L'ordre est chronologique, du plus ancien au plus récent : mis côte à côte,
 * Al-Khwârizmî et Grace Hopper racontent d'eux-mêmes que la science est une
 * conversation longue de mille ans.
 */
export function WallOfFameView({ cards }: WallOfFameViewProps) {
  const { ageRange, status } = useAgeRange();
  const t = useT();
  const [ouvert, setOuvert] = useState<string | null>(null);
  const [carteOuverte, setCarteOuverte] = useState<ScienceCard | null>(null);

  if (status === 'chargement' || !ageRange) return null;

  const savant = savants.find((s) => s.id === ouvert) ?? null;
  const parId = new Map(cards.map((c) => [c.id, c]));

  return (
    <>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-10">
        <header className="flex flex-col items-center gap-3 text-center">
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            {t('savants.titre')}
          </h1>
          <p className="max-w-md text-craie-douce">{t('savants.texte')}</p>
        </header>

        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {savants.map((s, index) => (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => setOuvert(s.id)}
                className="group flex w-full cursor-pointer flex-col items-center gap-2 rounded-3xl p-1 transition-transform duration-150 hover:scale-105 active:scale-95"
                style={{
                  animation: 'allumage 500ms ease-out backwards',
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <Image
                  src={`/images/wall-of-fame/${s.id}.webp`}
                  alt=""
                  width={640}
                  height={640}
                  className="h-24 w-24 rounded-full sm:h-28 sm:w-28"
                />
                <span className="text-center font-display text-sm font-medium leading-tight text-craie">
                  {s.nom}
                </span>
                <span className="text-xs tabular-nums text-craie-douce">
                  {s.naissance} – {s.mort ?? ''}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </main>

      {savant && !carteOuverte && (
        <SavantModal
          key={savant.id}
          savant={savant}
          cartes={savant.cartes.map((id) => parId.get(id)).filter((c) => c !== undefined)}
          onOuvrirCarte={setCarteOuverte}
          onClose={() => setOuvert(null)}
        />
      )}

      {/*
        La carte prend toute la place, la fiche attend derrière : en la fermant
        on revient au savant, pas au mur. C'est le fil qu'on suivait.
      */}
      {carteOuverte && (
        <CardModal
          key={carteOuverte.id}
          card={carteOuverte}
          ageRange={ageRange}
          onClose={() => setCarteOuverte(null)}
        />
      )}
    </>
  );
}
