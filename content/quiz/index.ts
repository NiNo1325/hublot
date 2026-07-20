import type { AgeRange, QuizQuestion } from '@/lib/types';
import { quiz as sciencesDeLaTerre } from './sciences-de-la-terre';

/**
 * Banque de questions, groupée par domaine.
 *
 * Les questions sont écrites à la main, avec la même exigence que les
 * explications : chaque proposition fausse reprend une idée reçue que la carte
 * corrige, jamais un piège inventé.
 *
 * Toutes les cartes n'ont pas encore leurs questions. Le quizz s'en accommode :
 * il ne propose que les cartes couvertes, et un test signale l'écart plutôt que
 * de le laisser passer silencieusement.
 */
export const quizCartes = [...sciencesDeLaTerre];

const parCarte = new Map(quizCartes.map((q) => [q.cardId, q]));

/** Questions disponibles pour une carte et un âge, éventuellement aucune. */
export function questionsDe(cardId: string, age: AgeRange): QuizQuestion[] {
  return parCarte.get(cardId)?.questions[age] ?? [];
}

/** Identifiants des cartes disposant de questions. */
export const cartesAvecQuiz = new Set(parCarte.keys());
