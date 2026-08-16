/**
 * La reprise des comptes après le changement d'économie.
 *
 * Avant, chaque bonne réponse valait une étoile, sans plafond : un enfant
 * pouvait en accumuler des centaines en rejouant. Désormais une carte vaut une
 * étoile, une seule fois — il y en a donc exactement autant que de cartes
 * réussies, et les seuils de rang ont été refaits pour ce total.
 *
 * Sans reprise, un compte existant garderait son ancien total et se
 * retrouverait « Génie » d'emblée, devant un ciel presque vide. La progression
 * ne voudrait plus rien dire, et il n'y aurait plus rien à gagner.
 *
 * La règle est simple parce que le nouveau total est *dérivable* : les étoiles
 * gagnées valent le nombre de cartes réussies. On ne recalcule qu'à la baisse,
 * et jamais en dessous du réel — personne ne doit perdre une carte apprise.
 */
export function etoilesReprises(stockees: number, cartesMaitrisees: number): number {
  return Math.min(Math.max(0, Math.floor(stockees)), Math.max(0, Math.floor(cartesMaitrisees)));
}

/**
 * A-t-on besoin de reprendre ce compte ?
 *
 * Un compte déjà cohérent (jamais joué, ou joué sous la nouvelle règle) n'est
 * pas touché : réécrire pour rien ferait un rendu de plus à chaque démarrage.
 */
export function reprisNecessaire(stockees: number, cartesMaitrisees: number): boolean {
  return etoilesReprises(stockees, cartesMaitrisees) !== Math.max(0, Math.floor(stockees));
}
