'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { AgeRange } from '@/lib/types';
import { useAgeRange } from './useAgeRange';

/**
 * Silhouettes de tailles croissantes : un enfant qui ne lit pas peut se
 * reconnaître à sa taille. Le libellé texte est là pour l'adulte qui accompagne,
 * jamais comme seul moyen de choisir.
 */
const CHOIX: { range: AgeRange; diametre: number; label: string }[] = [
  { range: '3-5', diametre: 108, label: '3 à 5 ans' },
  { range: '6-8', diametre: 136, label: '6 à 8 ans' },
  { range: '9-12', diametre: 164, label: '9 à 12 ans' },
];

function Silhouette({ echelle }: { echelle: number }) {
  // Dessinée depuis les pieds : l'échelle fait grandir l'enfant vers le haut,
  // comme une toise, plutôt que de le rétrécir depuis le centre.
  const hauteurTete = 26 * echelle;
  const yTete = 108 - 64 * echelle;
  return (
    <svg viewBox="0 0 100 120" className="h-full w-full" aria-hidden="true">
      <circle cx="50" cy={yTete} r={hauteurTete / 2} fill="currentColor" />
      <path
        d={`M50 ${yTete + hauteurTete / 2 + 2}
            c ${-18 * echelle} 0 ${-24 * echelle} ${14 * echelle} ${-24 * echelle} ${34 * echelle}
            L ${50 - 24 * echelle} 110
            h ${48 * echelle}
            c 0 ${-20 * echelle} ${-6 * echelle} ${-34 * echelle} ${-24 * echelle} ${-34 * echelle} z`}
        fill="currentColor"
      />
    </svg>
  );
}

export function AgeGate() {
  const router = useRouter();
  const { ageRange, status, chooseAgeRange } = useAgeRange();

  /*
    Venir changer d'âge est une demande explicite : sans ce drapeau, la
    redirection « visiteur de retour » renverrait aussitôt vers la grille et
    rendrait le changement impossible.
  */
  const changementDemande = useSearchParams().get('changer') === '1';

  useEffect(() => {
    if (status === 'pret' && ageRange && !changementDemande) {
      router.replace('/decouvrir');
    }
  }, [status, ageRange, changementDemande, router]);

  function choisir(range: AgeRange) {
    chooseAgeRange(range);
    router.push('/decouvrir');
  }

  // Pendant la lecture du stockage, on ne rend rien : afficher le sélecteur
  // puis le remplacer aussitôt ferait clignoter l'écran à chaque retour.
  if (status === 'chargement') return null;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-12 px-6 py-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold text-craie sm:text-5xl">
          Tu es grand comment&nbsp;?
        </h1>
        <p className="mt-3 text-craie-douce">
          Choisis ta taille pour que les explications soient à ta mesure.
        </p>
      </div>

      {/*
        Trois hublots de tailles croissantes, alignés sur leur base comme une
        toise : la taille du disque est elle-même l'information, ce qui rend le
        choix lisible sans savoir lire.
      */}
      <ul className="flex flex-wrap items-end justify-center gap-6 sm:gap-10">
        {CHOIX.map(({ range, diametre, label }) => (
          <li key={range}>
            <button
              type="button"
              onClick={() => choisir(range)}
              className="group flex cursor-pointer flex-col items-center gap-4 rounded-3xl p-2 transition-transform duration-150 hover:scale-105 active:scale-95"
            >
              <span className="sr-only">
                {label}
                {range === ageRange ? ' (choix actuel)' : ''}
              </span>
              <span
                className={`halo-soleil flex items-end justify-center overflow-hidden rounded-full border-4 bg-encre-clair transition-colors group-hover:border-soleil group-hover:text-soleil ${
                  // En mode changement, le choix courant est marqué : sans
                  // repère, on ne sait pas ce qu'on est en train de modifier.
                  range === ageRange && changementDemande
                    ? 'border-soleil text-soleil'
                    : 'border-encre-bord text-craie-douce'
                }`}
                style={{ width: diametre, height: diametre }}
              >
                <span
                  className="w-1/2"
                  style={{ height: diametre * 0.62 }}
                >
                  <Silhouette echelle={1} />
                </span>
              </span>
              <span
                aria-hidden="true"
                className="font-display text-lg font-medium text-craie-douce group-hover:text-soleil"
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Sortie de secours : on doit pouvoir renoncer sans rien changer. */}
      {changementDemande && ageRange && (
        <button
          type="button"
          onClick={() => router.push('/decouvrir')}
          className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-6 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          Revenir aux cartes
        </button>
      )}
    </main>
  );
}
