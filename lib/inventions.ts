import type { AgeRange, Locale, ScienceCard } from './types';
import { melanger } from './melanger';
import { inventions } from '@/content/inventions';
import { retenirEspaces, type ElementFrise } from './frise';

/**
 * La frise des découvertes : ranger les cartes dans l'ordre où on les a
 * comprises.
 *
 * Même geste que la frise des savants, autre angle. Là où l'une demande qui est
 * venu avant qui, celle-ci demande ce qu'on a su avant quoi — que la gravitation
 * a été comprise bien avant l'ADN, que le zéro a précédé le wifi de mille ans.
 * C'est la même leçon d'échelle du temps, prise par le contenu plutôt que par
 * les personnes, et elle s'appuie sur des cartes que l'enfant a écoutées.
 *
 * Le moteur est celui de la frise : `retenirEspaces` garantit que deux
 * découvertes d'une même manche sont séparées d'au moins soixante-dix ans,
 * faute de quoi la bonne réponse existerait sans qu'aucun indice ne permette de
 * la trouver.
 *
 * Fonctions pures, sans accès au navigateur, pour rester testables.
 */
export const DECOUVERTES_PAR_AGE: Record<AgeRange, number> = {
  '3-5': 3,
  '6-8': 4,
  '9-12': 5,
};

/** Y a-t-il de quoi jouer ? Il faut au moins une manche complète. */
export function peutJouerDecouvertes(age: AgeRange): boolean {
  return inventions.length >= DECOUVERTES_PAR_AGE[age];
}

/**
 * Les découvertes jouables, celles dont l'enfant a écouté la carte d'abord.
 *
 * Même principe que la frise des savants : reconnaître aide à situer. Une carte
 * jamais entendue reste jouable — sinon un enfant qui débute n'aurait pas assez
 * de matière — mais elle passe après.
 */
function candidats(cartesVues: Set<string>) {
  const entendues = inventions.filter((i) => cartesVues.has(i.carteId));
  const autres = inventions.filter((i) => !cartesVues.has(i.carteId));
  return [...melanger(entendues), ...melanger(autres)];
}

/**
 * Tire une manche : des cartes mélangées, et l'ordre attendu.
 *
 * Rend `null` si une invention pointe sur une carte absente du catalogue — un
 * cas que le test de cohérence rend impossible, mais qu'il vaut mieux traiter
 * ici que laisser planter l'écran d'un enfant.
 */
export function construireFriseDecouvertes(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  age: AgeRange,
  locale: Locale,
): { tirage: ElementFrise[]; ordre: string[] } | null {
  const retenues = retenirEspaces(
    candidats(cartesVues),
    DECOUVERTES_PAR_AGE[age],
    (i) => i.annee,
  );
  if (retenues.length === 0) return null;

  const elements: ElementFrise[] = [];
  for (const invention of retenues) {
    const carte = cards.find((c) => c.id === invention.carteId);
    if (!carte) return null;
    elements.push({
      id: carte.id,
      /*
        Le nom de la découverte, pas le titre de la carte. « La neige » ne se
        situe pas sur une frise ; « le flocon à six branches », si — c'est un
        événement, pas une question.
      */
      nom: invention.nom[locale] ?? invention.nom.fr,
      emoji: carte.thumbnail,
      annee: invention.annee,
    });
  }

  const ordre = [...elements].sort((a, b) => a.annee - b.annee).map((e) => e.id);

  return { tirage: melanger(elements), ordre };
}
