import type { AgeRange, QuizQuestion } from '@/lib/types';
import { quiz as sciencesDeLaTerre } from './sciences-de-la-terre';
import { quiz as astronomie } from './astronomie';
import { quiz as biologie } from './biologie';
import { quiz as physique } from './physique';
import { quiz as chimie } from './chimie';
import { quiz as ingenierie } from './ingenierie';
import { quiz as informatique } from './informatique';
import { quiz as mathematiques } from './mathematiques';

/**
 * Banque de questions, groupée par domaine.
 *
 * Les questions sont écrites à la main, avec la même exigence que les
 * explications : chaque proposition fausse reprend une idée reçue que la carte
 * corrige, jamais un piège inventé.
 *
 * Les huit domaines sont couverts. `npm run quiz:couverture` le vérifie : une
 * carte sans question n'apparaîtrait jamais dans le quizz, et l'oubli serait
 * silencieux sans ce relevé.
 */
export const quizCartes = [
  ...sciencesDeLaTerre,
  ...astronomie,
  ...biologie,
  ...physique,
  ...chimie,
  ...ingenierie,
  ...informatique,
  ...mathematiques,
];

const parCarte = new Map(quizCartes.map((q) => [q.cardId, q]));

/** Questions disponibles pour une carte et un âge, éventuellement aucune. */
export function questionsDe(cardId: string, age: AgeRange): QuizQuestion[] {
  return parCarte.get(cardId)?.questions[age] ?? [];
}

/** Identifiants des cartes disposant de questions. */
export const cartesAvecQuiz = new Set(parCarte.keys());
