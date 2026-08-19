import { savantsPrisonniers, type SavantPrisonnier } from '@/content/savants-cartes';

/**
 * Les clés, et ce qu'elles ouvrent.
 *
 * Deux monnaies, et leur partage est le cœur du jeu :
 *
 * - l'**étoile** se gagne en écoutant une carte pour la première fois. Elle fait
 *   grandir Lumi et garnit son cabinet. C'est la monnaie du plaisir : explorer
 *   librement rapporte, sans jamais passer par une question ;
 * - la **clé** se gagne en répondant juste, la première fois. Elle ne sert qu'à
 *   une chose, libérer un savant, et c'est le fil conducteur.
 *
 * Le prix d'une cellule est le nombre de cartes que le savant tient. La somme
 * des prix vaut donc exactement le nombre de cartes du catalogue : libérer tout
 * le monde, c'est avoir répondu juste à chaque question au moins une fois — ni
 * plus, ni moins. C'est ce qui rend la clé lisible, là où une monnaie qui
 * s'accumule sans fin ne veut plus rien dire.
 *
 * Fonctions pures, sans accès au navigateur, pour rester testables.
 */

/** Le prix d'une cellule, en clés. */
export function prixSavant(savant: SavantPrisonnier): number {
  return savant.cartes.length;
}

/**
 * Ce que rapporte une bonne réponse : une clé la première fois seulement.
 *
 * Sans cette règle, refaire un quizz déjà réussi rapporterait autant que
 * comprendre une carte neuve, et le Défi chrono — qui se rejoue sans fin —
 * libérerait tous les savants sans qu'on apprenne rien de plus.
 */
export function clesAGagner(cardId: string, dejaMaitrisees: Set<string>): number {
  return dejaMaitrisees.has(cardId) ? 0 : 1;
}

/**
 * Les clés dépensées, recalculées depuis les savants libérés plutôt que
 * stockées à part.
 *
 * Un compteur séparé pourrait diverger de la liste — après une libération
 * enregistrée à moitié, par exemple — et l'enfant se retrouverait débité d'un
 * savant encore derrière ses barreaux. La liste fait foi.
 */
export function clesDepensees(liberes: string[]): number {
  return liberes.reduce((total, id) => {
    const savant = savantsPrisonniers.find((s) => s.id === id);
    return total + (savant ? prixSavant(savant) : 0);
  }, 0);
}

/** Ce qu'il reste à dépenser. Jamais négatif, même sur un stockage abîmé. */
export function soldeCles(gagnees: number, depensees: number): number {
  return Math.max(0, Math.floor(gagnees) - Math.floor(depensees));
}

/** Un savant déjà libre ne se libère pas deux fois. */
export function peutLiberer(
  gagnees: number,
  depensees: number,
  liberes: string[],
  savant: SavantPrisonnier,
): boolean {
  if (liberes.includes(savant.id)) return false;
  return soldeCles(gagnees, depensees) >= prixSavant(savant);
}

/** Lecture tolérante de la liste de savants libérés. */
export function lireLiberes(brut: string | null): string[] {
  if (!brut) return [];
  return [...new Set(brut.split(',').map((v) => v.trim()).filter(Boolean))];
}

export function ecrireLiberes(liberes: string[]): string {
  return liberes.join(',');
}

/**
 * Les époques du mur.
 *
 * C'est le seul découpage qui partitionne proprement les savants : une date de
 * naissance est unique, alors qu'un même savant tient souvent des cartes de
 * plusieurs mondes — Archimède est à la fois dans « Construire », « Les
 * océans » et « Les nombres », et une galerie par monde le ferait apparaître
 * trois fois.
 *
 * Le résultat est très déséquilibré, et c'est tant mieux : le déséquilibre est
 * vrai. La science explose au XIXᵉ siècle, et l'enfant le voit avant qu'on le
 * lui dise.
 */
export type IdEpoque =
  | 'antiquite'
  | 'moyen-age'
  | 'renaissance'
  | 'lumieres'
  | 'dix-neuvieme'
  | 'vingtieme'
  | 'aujourdhui';

export interface Epoque {
  id: IdEpoque;
  /** Année de naissance à partir de laquelle on entre dans l'époque. */
  debut: number;
  /** Exclue. */
  fin: number;
}

export const EPOQUES: Epoque[] = [
  { id: 'antiquite', debut: -1000, fin: 500 },
  { id: 'moyen-age', debut: 500, fin: 1400 },
  { id: 'renaissance', debut: 1400, fin: 1600 },
  { id: 'lumieres', debut: 1600, fin: 1780 },
  { id: 'dix-neuvieme', debut: 1780, fin: 1870 },
  { id: 'vingtieme', debut: 1870, fin: 1940 },
  { id: 'aujourdhui', debut: 1940, fin: 3000 },
];

/** Les savants d'une époque, du plus ancien au plus récent. */
export function savantsDeLEpoque(epoque: Epoque): SavantPrisonnier[] {
  return savantsPrisonniers
    .filter((s) => s.naissance >= epoque.debut && s.naissance < epoque.fin)
    .sort((a, b) => a.naissance - b.naissance);
}

/** Le savant qui tient une carte donnée, s'il existe. */
export function savantDeLaCarte(cardId: string): SavantPrisonnier | null {
  return savantsPrisonniers.find((s) => s.cartes.some((c) => c.id === cardId)) ?? null;
}
