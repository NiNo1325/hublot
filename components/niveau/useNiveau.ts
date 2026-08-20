'use client';

import { useCallback } from 'react';
import { useAgeRange } from '@/components/age/useAgeRange';
import { ageDuNiveau, niveauDepuisTranche } from '@/lib/niveaux';
import type { NiveauDifficulte } from '@/content/niveaux';

/**
 * Le niveau de difficulté choisi, et de quoi en changer.
 *
 * Façade sur `useAgeRange`, qui reste la couche de stockage : le catalogue
 * indexe ses cartes par tranche depuis toujours, et rien ne justifiait de
 * réécrire deux mille clés de contenu pour changer une façon de demander. Le
 * seul endroit de l'app qui parle encore d'âge est donc ce hook-ci, et il n'en
 * laisse rien filtrer.
 */
export function useNiveau() {
  const { ageRange, status, choisirAge } = useAgeRange();

  const choisirNiveau = useCallback(
    (niveau: NiveauDifficulte) => choisirAge(ageDuNiveau(niveau)),
    [choisirAge],
  );

  return {
    /** `null` tant que rien n'a été choisi : c'est ce qui déclenche l'écran d'accueil. */
    niveau: ageRange ? niveauDepuisTranche(ageRange) : null,
    status,
    choisirNiveau,
  };
}
