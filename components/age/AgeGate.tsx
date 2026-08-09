'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SelecteurAge } from './SelecteurAge';
import { useAgeRange } from './useAgeRange';

/**
 * Première entrée dans l'app. On ne demande l'âge qu'une fois : ensuite il se
 * change dans Réglages, et l'accueil file droit dans l'app (barre d'onglets).
 *
 * L'état vient du cache : après un nettoyage du stockage par le système, on
 * redemande l'âge plutôt que d'ouvrir une app muette sur un drapeau optimiste.
 */
export function AgeGate() {
  const router = useRouter();
  const { age, ageRange, status, choisirAge } = useAgeRange();

  // Visiteur connu : on entre directement dans l'app.
  useEffect(() => {
    if (status === 'pret' && ageRange) router.replace('/decouvrir');
  }, [status, ageRange, router]);

  // Pendant la lecture du stockage — ou si l'âge est déjà connu (redirection en
  // cours) — on ne rend rien, pour ne pas faire clignoter l'écran.
  if (status === 'chargement' || ageRange) return null;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-12 px-6 py-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold text-craie sm:text-5xl">
          Bienvenue sur Hublot
        </h1>
        <p className="mt-3 text-craie-douce">
          Tu as quel âge&nbsp;? On met les explications à ta mesure.
        </p>
      </div>

      <SelecteurAge
        ageInitial={age ?? 7}
        labelValider="C'est parti"
        onValider={(choisi) => {
          choisirAge(choisi);
          router.replace('/decouvrir');
        }}
      />
    </main>
  );
}
