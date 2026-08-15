import type { Localise } from '@/lib/types';

export interface Rang {
  index: number;
  /**
   * Nom affiché du rang. C'est du contenu — l'enfant le lit sur Lumi et dans
   * les célébrations — donc il se décline par langue comme les cartes.
   */
  nom: Localise<string>;
  icone: string;
  /** Nombre d'étoiles à partir duquel ce rang est atteint. */
  seuil: number;
}

/*
  Seuils calibrés pour 150 cartes : une question de quizz par carte et par
  tranche d'âge, donc au plus ~150 étoiles en une traversée complète. « Chercheur »
  correspond à tout le contenu vu une fois ; les deux derniers rangs récompensent
  la reprise des quizz. (À réviser si le nombre de cartes change nettement.)
*/
export const RANGS: Rang[] = [
  { index: 0, nom: { fr: 'Apprenti', en: 'Apprentice' }, icone: '🔭', seuil: 0 },
  { index: 1, nom: { fr: 'Explorateur', en: 'Explorer' }, icone: '🧭', seuil: 30 },
  { index: 2, nom: { fr: 'Aventurier', en: 'Adventurer' }, icone: '🚀', seuil: 75 },
  { index: 3, nom: { fr: 'Chercheur', en: 'Researcher' }, icone: '🔬', seuil: 150 },
  { index: 4, nom: { fr: 'Savant', en: 'Scholar' }, icone: '🎓', seuil: 260 },
  { index: 5, nom: { fr: 'Génie', en: 'Genius' }, icone: '🧠', seuil: 400 },
];

/** Rang courant et rang suivant (ou `null` au dernier) pour un total d'étoiles. */
export function rangDepuisEtoiles(total: number): { rang: Rang; rangProchain: Rang | null } {
  const n = Math.max(0, Math.floor(total));
  let rang = RANGS[0];
  for (const r of RANGS) if (n >= r.seuil) rang = r;
  return { rang, rangProchain: RANGS[rang.index + 1] ?? null };
}

/** Total d'étoiles depuis la valeur stockée : entier positif, sinon 0. */
export function lireEtoiles(brut: string | null): number {
  if (brut == null) return 0;
  const n = Number(brut);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
}
