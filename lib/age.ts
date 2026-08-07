import { type AgeRange } from './types';

/** Borne l'âge dans la plage couverte par le catalogue. */
function borner(age: number): number {
  return Math.min(12, Math.max(3, Math.round(age)));
}

/** Tranche d'âge dérivée d'un âge exact. */
export function trancheDepuisAge(age: number): AgeRange {
  const a = borner(age);
  if (a <= 5) return '3-5';
  if (a <= 8) return '6-8';
  return '9-12';
}

/** Âge représentatif d'une tranche, pour migrer l'ancien stockage. */
export function ageDepuisTranche(tier: AgeRange): number {
  switch (tier) {
    case '3-5':
      return 4;
    case '6-8':
      return 7;
    case '9-12':
      return 10;
  }
}
