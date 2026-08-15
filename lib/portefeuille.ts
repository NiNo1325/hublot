/**
 * Le porte-monnaie d'étoiles.
 *
 * Deux compteurs, et c'est le point important : les étoiles **gagnées** ne
 * baissent jamais — ce sont elles qui font monter le rang de Lumi — tandis que
 * le solde dépensable est ce qui reste une fois retranchés les achats. Sans
 * cette séparation, un enfant qui achète verrait Lumi rétrograder, et paierait
 * son plaisir d'une régression.
 *
 * Fonctions pures, sans accès au navigateur, pour rester testables.
 */

/** Ce qu'il reste à dépenser. Jamais négatif, même sur un stockage abîmé. */
export function solde(gagnees: number, depensees: number): number {
  return Math.max(0, Math.floor(gagnees) - Math.floor(depensees));
}

/** Un objet déjà possédé ne se rachète pas. */
export function peutAcheter(
  gagnees: number,
  depensees: number,
  possedes: string[],
  objet: { id: string; prix: number },
): boolean {
  if (possedes.includes(objet.id)) return false;
  return solde(gagnees, depensees) >= objet.prix;
}

/** Lecture tolérante de la liste d'achats stockée. */
export function lireAchats(brut: string | null): string[] {
  if (!brut) return [];
  return [...new Set(brut.split(',').map((v) => v.trim()).filter(Boolean))];
}

export function ecrireAchats(achats: string[]): string {
  return achats.join(',');
}

/**
 * Le total dépensé, recalculé depuis les objets possédés plutôt que stocké à
 * part. Un compteur séparé pourrait diverger de la liste — après un achat
 * enregistré à moitié, par exemple — et l'enfant se retrouverait débité d'un
 * objet qu'il n'a pas. La liste fait foi.
 */
export function totalDepense(
  possedes: string[],
  catalogue: readonly { id: string; prix: number }[],
): number {
  return possedes.reduce((total, id) => {
    const objet = catalogue.find((o) => o.id === id);
    return total + (objet?.prix ?? 0);
  }, 0);
}
