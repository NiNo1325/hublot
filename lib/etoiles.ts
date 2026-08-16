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
  Une carte, une étoile — la première fois qu'on répond juste à sa question, et
  une seule fois. Il y a donc exactement autant d'étoiles à gagner que de cartes
  au catalogue (150), et chacune correspond à une étoile du ciel : le compteur
  de Lumi et le ciel de l'accueil mesurent la même chose.

  C'est un renversement de l'économie précédente, où chaque bonne réponse
  comptait sans plafond. Le rang mesurait alors autant la répétition que la
  découverte : une traversée complète du contenu rapportait 300 étoiles et
  plafonnait au troisième rang sur six, les deux derniers ne s'obtenant qu'en
  rejouant des questions déjà réussies. Un fil rouge qui s'arrête à mi-chemin
  pour l'enfant qui a tout appris n'en est pas un.

  Les six seuils se répartissent donc sur les 150 cartes, et le dernier tombe à
  130 plutôt qu'à 150 : deux buts qui s'achèvent sur le même geste s'annulent,
  alors Lumi atteint sa forme finale un peu avant que le ciel ne soit complet.
  (À réviser si le nombre de cartes change nettement.)
*/
export const RANGS: Rang[] = [
  { index: 0, nom: { fr: 'Apprenti', en: 'Apprentice' }, icone: '🔭', seuil: 0 },
  { index: 1, nom: { fr: 'Explorateur', en: 'Explorer' }, icone: '🧭', seuil: 12 },
  { index: 2, nom: { fr: 'Aventurier', en: 'Adventurer' }, icone: '🚀', seuil: 30 },
  { index: 3, nom: { fr: 'Chercheur', en: 'Researcher' }, icone: '🔬', seuil: 55 },
  { index: 4, nom: { fr: 'Savant', en: 'Scholar' }, icone: '🎓', seuil: 90 },
  { index: 5, nom: { fr: 'Génie', en: 'Genius' }, icone: '🧠', seuil: 130 },
];

/**
 * Ce que rapporte une bonne réponse : une étoile la première fois seulement.
 *
 * Sans cette règle, refaire un quizz déjà réussi rapporterait autant que
 * découvrir une carte neuve, et le rang cesserait de vouloir dire quelque
 * chose. Le Défi chrono garde son intérêt par ses records, pas par ses étoiles.
 */
export function etoilesAGagner(cardId: string, dejaMaitrisees: Set<string>): number {
  return dejaMaitrisees.has(cardId) ? 0 : 1;
}

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
