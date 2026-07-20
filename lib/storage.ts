/**
 * Accès à localStorage tolérant aux pannes.
 *
 * localStorage lève en navigation privée stricte, quand le quota est dépassé,
 * ou quand les cookies tiers sont bloqués dans une iframe. Comme la seule
 * donnée persistée est la tranche d'âge, un repli en mémoire est acceptable :
 * l'enfant re-choisit son âge au rechargement plutôt que de voir une erreur.
 */

const memoryFallback = new Map<string, string>();

export function readStored(key: string): string | null {
  try {
    const value = window.localStorage.getItem(key);
    if (value !== null) return value;
  } catch {
    // localStorage indisponible : on retombe sur la mémoire.
  }
  return memoryFallback.get(key) ?? null;
}

export function writeStored(key: string, value: string): void {
  memoryFallback.set(key, value);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // La valeur reste disponible pour la session via memoryFallback.
  }
}
