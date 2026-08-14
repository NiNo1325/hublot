import type { AgeRange, Locale, QuizQuestion } from '@/lib/types';
import { localise } from '@/lib/i18n/localise';
import { quiz as sciencesDeLaTerre } from './sciences-de-la-terre';
import { quiz as astronomie } from './astronomie';
import { quiz as biologie } from './biologie';
import { quiz as physique } from './physique';
import { quiz as chimie } from './chimie';
import { quiz as ingenierie } from './ingenierie';
import { quiz as informatique } from './informatique';
import { quiz as mathematiques } from './mathematiques';
import { quiz as animaux } from './animaux';
import { quiz as meteo } from './meteo';
import { quiz as leSon } from './le-son';
import { quiz as lesDinosaures } from './les-dinosaures';
import { quiz as leCorps } from './le-corps';
import { quiz as lesOceans } from './les-oceans';
import { quiz as laCuisine } from './la-cuisine';

/**
 * Banque de questions, groupée par domaine.
 *
 * Les questions sont écrites à la main, avec la même exigence que les
 * explications : chaque proposition fausse reprend une idée reçue que la carte
 * corrige, jamais un piège inventé.
 *
 * Les dix domaines sont couverts. `npm run quiz:couverture` le vérifie : une
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
  ...animaux,
  ...meteo,
  ...leSon,
  ...lesDinosaures,
  ...leCorps,
  ...lesOceans,
  ...laCuisine,
];

const parCarte = new Map(quizCartes.map((q) => [q.cardId, q]));

/**
 * Questions disponibles pour une carte, un âge et une langue, éventuellement
 * aucune. Une carte dont le quizz n'est pas encore traduit retombe sur le
 * français : mieux vaut une question dans l'autre langue qu'un quizz vide, qui
 * ferait purement disparaître la carte du jeu.
 */
export function questionsDe(
  cardId: string,
  age: AgeRange,
  locale: Locale,
): QuizQuestion[] {
  const questions = parCarte.get(cardId)?.questions;
  return questions ? localise(questions, locale)[age] : [];
}

/** Identifiants des cartes disposant de questions. */
export const cartesAvecQuiz = new Set(parCarte.keys());
