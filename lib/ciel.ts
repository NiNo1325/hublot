import type { DomainId } from './types';

/**
 * Le ciel de Hublot : une étoile par carte, une constellation par monde.
 *
 * C'est le fil rouge de l'application, et il tient en une équivalence : les 150
 * cartes du catalogue sont les 150 étoiles du ciel. Écouter une carte allume
 * son étoile, répondre juste la fait briller. L'écran d'accueil est donc noir
 * aux trois quarts au début — ce qui dit « il reste à découvrir » bien mieux
 * qu'un compteur, parce qu'un vide se voit et qu'un pourcentage se lit.
 *
 * Les traits ne se tracent qu'entre deux étoiles déjà allumées : la figure
 * apparaît à mesure, et un monde terminé se reconnaît de loin à son dessin
 * complet.
 *
 * Les points sont donnés en coordonnées locales 0..100, dans l'ordre des cartes
 * du monde tel que `content/cards.ts` les liste : la n-ième carte d'un monde
 * est la n-ième étoile de sa constellation. Un test verrouille le fait que
 * chaque monde compte exactement dix cartes, sans quoi une étoile resterait
 * sans carte — ou l'inverse.
 */
export const ETOILES_PAR_CONSTELLATION = 10;

export interface Constellation {
  /** Dix points, un par carte, en coordonnées 0..100. */
  points: readonly (readonly [number, number])[];
  /** Traits entre indices de points. Tracés quand les deux étoiles sont allumées. */
  traits: readonly (readonly [number, number])[];
}

/*
  Les figures sont volontairement frustes : une constellation n'a jamais
  ressemblé à ce qu'elle prétend représenter, et un dessin trop détaillé
  deviendrait illisible à la taille d'une vignette de téléphone.
*/
export const constellations: Record<DomainId, Constellation> = {
  // Un volcan et son panache.
  'sciences-de-la-terre': {
    points: [
      [10, 90], [30, 62], [44, 38], [56, 38], [72, 62],
      [92, 90], [50, 22], [36, 10], [62, 8], [78, 18],
    ],
    traits: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [2, 6], [3, 6], [6, 7], [6, 8], [8, 9]],
  },
  // La Grande Ourse, casserole et queue — la seule vraie constellation du lot.
  astronomie: {
    points: [
      [8, 72], [24, 60], [42, 52], [58, 46], [76, 52],
      [80, 30], [60, 24], [22, 20], [36, 10], [52, 6],
    ],
    traits: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [0, 7], [7, 8], [8, 9]],
  },
  // Une pousse : tige, deux feuilles, bourgeon.
  biologie: {
    points: [
      [50, 95], [50, 78], [50, 60], [50, 42], [50, 26],
      [30, 66], [18, 54], [70, 50], [84, 38], [50, 10],
    ],
    traits: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 9], [2, 5], [5, 6], [3, 7], [7, 8]],
  },
  // Un atome : noyau, orbite, électron.
  physique: {
    points: [
      [50, 50], [50, 18], [73, 27], [82, 50], [73, 73],
      [50, 82], [27, 73], [18, 50], [27, 27], [88, 12],
    ],
    traits: [
      [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 1],
      [0, 3], [0, 7], [1, 9],
    ],
  },
  // Une fiole et ses bulles.
  chimie: {
    points: [
      [38, 12], [38, 34], [20, 78], [34, 92], [66, 92],
      [80, 78], [62, 34], [62, 12], [46, 60], [60, 68],
    ],
    traits: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 0], [8, 9]],
  },
  // Un pont suspendu : tablier, câbles, piles.
  ingenierie: {
    points: [
      [6, 60], [28, 60], [50, 60], [72, 60], [94, 60],
      [28, 26], [72, 26], [50, 40], [28, 88], [72, 88],
    ],
    traits: [
      [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 7], [7, 6], [6, 4], [1, 8], [3, 9],
    ],
  },
  // Un réseau : un nœud central, huit autour.
  informatique: {
    points: [
      [50, 50], [20, 20], [50, 14], [80, 20], [86, 52],
      [78, 84], [50, 90], [22, 84], [14, 52], [32, 36],
    ],
    traits: [
      [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8],
      [1, 2], [3, 4], [5, 6], [7, 8], [0, 9],
    ],
  },
  // Une spirale qui s'ouvre — la suite qui grandit.
  mathematiques: {
    points: [
      [52, 50], [62, 44], [68, 56], [56, 66], [40, 60],
      [34, 42], [46, 26], [66, 24], [82, 38], [88, 60],
    ],
    traits: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9]],
  },
  // Un papillon : corps, deux ailes, une antenne.
  animaux: {
    points: [
      [50, 30], [50, 50], [50, 70], [26, 18], [14, 42],
      [28, 66], [74, 18], [86, 42], [72, 66], [50, 14],
    ],
    traits: [
      [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [5, 1], [0, 6], [6, 7], [7, 8], [8, 1], [0, 9],
    ],
  },
  // Un nuage et trois gouttes.
  meteo: {
    points: [
      [24, 44], [36, 30], [54, 26], [70, 34], [78, 48],
      [60, 56], [38, 56], [36, 76], [54, 82], [72, 74],
    ],
    traits: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [6, 7], [5, 8], [4, 9],
    ],
  },
  // Une onde qui traverse l'écran, et sa source.
  'le-son': {
    points: [
      [6, 50], [18, 30], [30, 50], [42, 70], [54, 50],
      [66, 26], [78, 50], [90, 72], [96, 50], [12, 82],
    ],
    traits: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [0, 9],
    ],
  },
  // Un sauropode : queue, dos, cou, tête, et ses pattes.
  'les-dinosaures': {
    points: [
      [10, 70], [28, 58], [46, 50], [64, 50], [76, 40],
      [84, 24], [90, 14], [38, 82], [62, 82], [74, 76],
    ],
    traits: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [2, 7], [3, 8], [4, 9],
    ],
  },
  // Une silhouette : tête, buste, bras, jambes.
  'le-corps': {
    points: [
      [50, 10], [50, 26], [50, 56], [24, 48], [76, 48],
      [36, 74], [64, 74], [32, 94], [68, 94], [50, 38],
    ],
    traits: [
      [0, 1], [1, 9], [9, 2], [9, 3], [9, 4], [2, 5], [5, 7], [2, 6], [6, 8],
    ],
  },
  // Une vague qui s'enroule, et son écume.
  'les-oceans': {
    points: [
      [8, 72], [24, 64], [40, 50], [56, 32], [72, 22],
      [86, 32], [74, 48], [60, 54], [30, 86], [58, 84],
    ],
    traits: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [0, 8], [8, 9],
    ],
  },
  // Une casserole sur le feu, et sa vapeur.
  'la-cuisine': {
    points: [
      [24, 42], [24, 72], [40, 86], [64, 86], [78, 72],
      [78, 42], [92, 46], [40, 26], [52, 14], [64, 26],
    ],
    traits: [
      [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [5, 6], [0, 7], [7, 8], [8, 9],
    ],
  },
};

/** Ce qu'est devenue une carte dans le ciel. */
export type EtatEtoile =
  /** Jamais écoutée : un point à peine visible. C'est ce qui reste à découvrir. */
  | 'eteinte'
  /** Écoutée : elle s'allume. */
  | 'allumee'
  /** Réussie au quizz : elle brille, avec le halo de son monde. */
  | 'brillante';

export function etatEtoile(
  cardId: string,
  cartesVues: Set<string>,
  cartesMaitrisees: Set<string>,
): EtatEtoile {
  if (cartesMaitrisees.has(cardId)) return 'brillante';
  if (cartesVues.has(cardId)) return 'allumee';
  return 'eteinte';
}

/**
 * Un trait ne se trace qu'entre deux étoiles allumées.
 *
 * Le dessin se révèle donc morceau par morceau, au lieu d'apparaître d'un coup
 * quand le monde est fini : chaque carte écoutée ajoute visiblement quelque
 * chose à la figure, ce qui est tout l'intérêt.
 */
export function traitVisible(
  trait: readonly [number, number] | readonly number[],
  etats: EtatEtoile[],
): boolean {
  const [a, b] = trait;
  return etats[a] !== 'eteinte' && etats[b] !== 'eteinte';
}
