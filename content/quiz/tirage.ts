import type { AgeRange, DomainId, Locale, QuizQuestion, ScienceCard } from '@/lib/types';
import { questionsDe, cartesAvecQuiz } from './index';

/**
 * Le tirage d'une série de questions, partagé par les modes de jeu.
 *
 * Ces fonctions vivaient dans `QuizView`. Le Défi chrono en a besoin à
 * l'identique — mêmes règles d'éligibilité, même mélange — et les recopier
 * aurait garanti la divergence : c'est ainsi qu'on se retrouve avec un mode
 * qui interroge sur des cartes jamais écoutées parce que la règle n'a été
 * corrigée que d'un côté.
 */

/** Une question tirée, et la carte dont elle vient. */
export interface Tirage {
  carte: ScienceCard;
  question: QuizQuestion;
}

/** Mélange sans modifier la source. */
export function melanger<T>(liste: T[]): T[] {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

/**
 * Une carte est interrogeable si l'enfant l'a écoutée et qu'elle a une
 * question à son âge. On n'interroge jamais sur un contenu jamais entendu.
 */
export function estEligible(
  carte: ScienceCard,
  vues: Set<string>,
  age: AgeRange,
  locale: Locale,
): boolean {
  return (
    vues.has(carte.id) &&
    cartesAvecQuiz.has(carte.id) &&
    questionsDe(carte.id, age, locale).length > 0
  );
}

/** Les cartes interrogeables, éventuellement restreintes à un monde. */
export function cartesEligibles(
  cards: ScienceCard[],
  vues: Set<string>,
  age: AgeRange,
  locale: Locale,
  domainId: DomainId | null = null,
): ScienceCard[] {
  return cards.filter(
    (c) => estEligible(c, vues, age, locale) && (domainId === null || c.domainId === domainId),
  );
}

/*
  Longueur d'une série de quizz. Un monde compte dix cartes : plafonner à dix
  (et non huit) permet de toutes les couvrir en une partie — donc de maîtriser
  un domaine entier d'un coup quand ses dix cartes sont écoutées.
*/
export const QUESTIONS_PAR_SERIE = 10;

/**
 * Une série de questions, une par carte.
 *
 * `taille` vaut dix pour le quizz. Le Défi chrono passe le nombre de cartes
 * disponibles : sa partie ne s'arrête pas à un compte de questions mais à
 * l'épuisement du temps, et une série trop courte l'obligerait à repiocher au
 * milieu du jeu.
 */
export function construireSerie(
  cards: ScienceCard[],
  vues: Set<string>,
  age: AgeRange,
  domainId: DomainId | null,
  locale: Locale,
  taille: number = QUESTIONS_PAR_SERIE,
): Tirage[] {
  return melanger(cartesEligibles(cards, vues, age, locale, domainId))
    .slice(0, taille)
    .map((carte) => ({
      carte,
      question: melanger(questionsDe(carte.id, age, locale))[0],
    }));
}
