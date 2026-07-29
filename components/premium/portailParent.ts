/**
 * Verrou parental avant un achat (Politique Familles) : une multiplication qu'un
 * jeune enfant ne résout pas de tête. Purement logique, donc testable sans
 * navigateur ; l'écran de la tâche 5 n'en est que l'habillage.
 */
export interface DefiParent {
  a: number;
  b: number;
  reponse: number;
}

export function genererDefi(alea: () => number = Math.random): DefiParent {
  const a = 3 + Math.floor(alea() * 7); // 3..9
  const b = 3 + Math.floor(alea() * 7); // 3..9
  return { a, b, reponse: a * b };
}

export function verifierDefi(defi: DefiParent, saisie: string): boolean {
  const n = Number.parseInt(saisie.trim(), 10);
  return Number.isFinite(n) && n === defi.reponse;
}
