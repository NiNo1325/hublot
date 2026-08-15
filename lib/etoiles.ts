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
  Trois sources d'étoiles, une par bonne réponse : le parcours guidé pose une
  question après chaque carte (150 pour une traversée complète), le quizz en
  compte autant à chaque âge (150 de plus pour les avoir toutes vues), et le
  Défi chrono en donne sans plafond, une dizaine par minute de jeu.

  « Chercheur », au milieu de l'échelle, marque donc les 300 étoiles d'un
  contenu entièrement parcouru — parcours et quizz une fois chacun. Les deux
  derniers rangs récompensent la reprise : ils ne s'atteignent qu'en rejouant,
  ce qui est le but.

  Le calibrage précédent supposait 150 étoiles pour tout le contenu et ne
  comptait que le quizz, en oubliant le parcours. Il ignorait aussi le chrono,
  qui n'existait pas encore et qui a supprimé tout plafond réel.
  (À réviser si le nombre de cartes ou de modes change nettement.)
*/
export const RANGS: Rang[] = [
  { index: 0, nom: { fr: 'Apprenti', en: 'Apprentice' }, icone: '🔭', seuil: 0 },
  { index: 1, nom: { fr: 'Explorateur', en: 'Explorer' }, icone: '🧭', seuil: 60 },
  { index: 2, nom: { fr: 'Aventurier', en: 'Adventurer' }, icone: '🚀', seuil: 150 },
  { index: 3, nom: { fr: 'Chercheur', en: 'Researcher' }, icone: '🔬', seuil: 300 },
  { index: 4, nom: { fr: 'Savant', en: 'Scholar' }, icone: '🎓', seuil: 550 },
  { index: 5, nom: { fr: 'Génie', en: 'Genius' }, icone: '🧠', seuil: 850 },
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
