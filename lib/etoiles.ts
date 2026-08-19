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
  Une carte écoutée, une étoile — la première fois, et une seule. Les étoiles ne
  sont d'ailleurs plus stockées : elles se déduisent des cartes vues
  (`useEtoiles`). Il y a donc exactement autant d'étoiles à gagner que de cartes
  au catalogue, soit cent cinquante.

  C'est un renversement de l'économie précédente, où chaque bonne réponse au
  quizz comptait sans plafond : le rang mesurait alors la répétition autant que
  la découverte, et l'exploration libre — l'acte central de l'application — ne
  rapportait rien du tout. Désormais Lumi grandit à mesure qu'on écoute, et les
  bonnes réponses donnent l'autre monnaie : les clés, qui délivrent les savants.

  Les six seuils se répartissent donc sur les 150 cartes, et le dernier tombe à
  130 plutôt qu'à 150 : deux buts qui s'achèvent sur le même geste s'annulent,
  alors Lumi atteint sa forme finale un peu avant la dernière carte.
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
