export interface Rang {
  index: number;
  nom: string;
  icone: string;
  /** Nombre d'étoiles à partir duquel ce rang est atteint. */
  seuil: number;
}

export const RANGS: Rang[] = [
  { index: 0, nom: 'Apprenti', icone: '🔭', seuil: 0 },
  { index: 1, nom: 'Explorateur', icone: '🧭', seuil: 20 },
  { index: 2, nom: 'Aventurier', icone: '🚀', seuil: 50 },
  { index: 3, nom: 'Chercheur', icone: '🔬', seuil: 100 },
  { index: 4, nom: 'Savant', icone: '🎓', seuil: 175 },
  { index: 5, nom: 'Génie', icone: '🧠', seuil: 275 },
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
