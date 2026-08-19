import type { Affirmation, AgeRange } from './types';
import { melanger } from './melanger';
import { affirmations } from '@/content/affirmations';

/**
 * Le jeu « Vrai ou faux » : Lumi affirme, l'enfant tranche.
 *
 * Comme le quizz, il ne porte que sur des cartes **déjà écoutées** : juger une
 * phrase sur un sujet qu'on n'a jamais entendu, ce n'est plus réfléchir, c'est
 * tirer à pile ou face. Faute de cartes écoutées, on ne lance pas la manche —
 * l'écran invite à aller en découvrir, exactement comme le quizz vide.
 *
 * Une manche mélange les vraies et les fausses sans quota strict : un enfant
 * qui compterait « il y en a déjà eu deux vraies, donc… » jouerait au comptage
 * plutôt qu'à la science. Le corpus, lui, est équilibré à peu près par moitié.
 *
 * Fonctions pures, sans accès au navigateur, pour rester testables.
 */
export const AFFIRMATIONS_PAR_AGE: Record<AgeRange, number> = {
  '3-5': 4,
  '6-8': 6,
  '9-12': 8,
};

/**
 * Tire une manche parmi les cartes écoutées.
 *
 * Retourne moins d'affirmations que demandé si l'enfant n'a pas encore écouté
 * assez de cartes : mieux vaut une manche de trois questions qu'un refus de
 * jouer. La liste est vide quand rien n'a été écouté — l'appelant affiche alors
 * l'invitation à découvrir.
 */
export function construireManche(cartesVues: Set<string>, age: AgeRange): Affirmation[] {
  const jouables = affirmations.filter((a) => cartesVues.has(a.cardId));
  return melanger(jouables).slice(0, AFFIRMATIONS_PAR_AGE[age]);
}

/** A-t-on de quoi jouer ? */
export function peutJouer(cartesVues: Set<string>): boolean {
  return affirmations.some((a) => cartesVues.has(a.cardId));
}
