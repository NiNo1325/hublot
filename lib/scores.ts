/** Nombre de scores conservés : un podium, pas un palmarès. */
export const PODIUM = 3;

/**
 * Lecture tolérante du podium stocké.
 *
 * La valeur vient du stockage local, que rien ne garantit : une version
 * précédente, un bricolage à la console, un octet abîmé. Tout ce qui n'est pas
 * un entier positif est écarté plutôt que de faire planter l'écran de jeu.
 */
export function lireScores(brut: string | null): number[] {
  if (!brut) return [];
  return brut
    .split(',')
    .map((valeur) => Number.parseInt(valeur, 10))
    .filter((n) => Number.isFinite(n) && n > 0)
    .sort((a, b) => b - a)
    .slice(0, PODIUM);
}

/** Sérialisation, symétrique de `lireScores`. */
export function ecrireScores(scores: number[]): string {
  return scores.join(',');
}

/**
 * Insère un score et rend le nouveau podium.
 *
 * Un zéro n'entre pas : une partie sans aucune bonne réponse n'est pas un
 * résultat à afficher, et la voir trôner au tableau découragerait exactement
 * l'enfant qu'on veut voir rejouer.
 */
export function ajouterScore(scores: number[], score: number): number[] {
  if (score <= 0) return scores;
  return [...scores, score].sort((a, b) => b - a).slice(0, PODIUM);
}

/** Vrai si ce score entre au podium — de quoi le fêter à l'écran. */
export function estUnRecord(scores: number[], score: number): boolean {
  if (score <= 0) return false;
  return scores.length < PODIUM || score > scores[scores.length - 1];
}
