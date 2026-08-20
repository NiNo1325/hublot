'use client';

import { useLecteurAudio } from '@/components/audio/useLecteurAudio';

/**
 * Lecture de l'explication vocale d'un écran de tutoriel.
 *
 * Toute la mécanique vit désormais dans `useLecteurAudio`, partagée avec
 * l'écran de choix du niveau : seul le dossier change.
 */
export function useTutorielAudio() {
  return useLecteurAudio('tutoriel');
}
