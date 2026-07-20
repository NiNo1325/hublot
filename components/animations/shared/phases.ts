/**
 * Logique de mise en scène partagée par toutes les animations.
 *
 * Chaque animation suit les mêmes règles : un élément appartient à une phase,
 * il est pleinement visible pendant celle-ci et estompé le reste du temps ;
 * avant toute lecture, tout est visible à demi pour donner un aperçu du sujet.
 * Centraliser ces règles garantit que les cartes se ressemblent, et évite de
 * réécrire la même arithmétique d'opacité à chaque nouvelle animation.
 */

export interface MiseEnScene {
  /** Index de la phase courante, -1 avant le début de la narration. */
  phase: number;
  /** Vrai tant que la narration n'a pas commencé. */
  auRepos: boolean;
  /** Opacité d'un élément rattaché à la phase donnée. */
  opacite: (indexPhase: number) => number;
  /** Vrai pour les éléments déjà introduits, qui doivent rester à l'écran. */
  dejaVu: (indexPhase: number) => boolean;
}

export function miseEnScene(
  phases: readonly string[],
  activeBeatId: string | null,
): MiseEnScene {
  const phase = activeBeatId ? phases.indexOf(activeBeatId) : -1;
  const auRepos = phase === -1;

  return {
    phase,
    auRepos,
    opacite: (indexPhase) => {
      if (auRepos) return 0.55;
      return phase === indexPhase ? 1 : 0.2;
    },
    dejaVu: (indexPhase) => auRepos || phase >= indexPhase,
  };
}
