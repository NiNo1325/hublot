'use client';

import { useEffect } from 'react';
import { useAgeRange } from '@/components/age/useAgeRange';
import { Tutoriel } from './Tutoriel';
import { useTutoriel, ouvrirTutoriel, tutoDejaVu } from './useTutoriel';

/**
 * Décide quand présenter le tutoriel : automatiquement au premier lancement,
 * une fois l'âge choisi et tant qu'il n'a pas été vu. Monté dans la coquille
 * (app), il s'affiche par-dessus n'importe quel écran. Réglages peut le rouvrir
 * via `ouvrirTutoriel`.
 */
export function TutorielGate() {
  const { estOuvert, fermer } = useTutoriel();
  const { ageRange, status } = useAgeRange();

  useEffect(() => {
    if (status === 'pret' && ageRange && !tutoDejaVu()) {
      ouvrirTutoriel();
    }
  }, [status, ageRange]);

  if (!estOuvert) return null;
  return <Tutoriel onFermer={fermer} />;
}
