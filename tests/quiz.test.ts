import { describe, expect, it } from 'vitest';
import { quizCartes } from '@/content/quiz';
import { cards } from '@/content/cards';
import { AGE_RANGES } from '@/lib/types';

/**
 * Les questions vivent dans `content/quiz`, séparées des cartes. Ce découplage
 * fait gagner du temps de rédaction mais crée un risque : qu'une question
 * référence une carte disparue, ou contredise son contenu. Ces tests sont le
 * garde-fou correspondant.
 */
describe('intégrité du quizz', () => {
  it('ne référence que des cartes existantes', () => {
    const inconnues = quizCartes
      .map((q) => q.cardId)
      .filter((id) => !cards.some((c) => c.id === id));
    expect(inconnues, 'cartes introuvables').toEqual([]);
  });

  it("n'a pas de carte en double", () => {
    const ids = quizCartes.map((q) => q.cardId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  const cas = quizCartes.flatMap((q) =>
    AGE_RANGES.map((age) => [`${q.cardId} — ${age}`, q, age] as const),
  );

  it.each(cas)('%s propose des questions valides', (_libelle, quiz, age) => {
    const questions = quiz.questions[age];
    expect(questions.length, 'aucune question').toBeGreaterThan(0);

    for (const question of questions) {
      expect(question.question.trim().length).toBeGreaterThan(0);
      expect(question.explication.trim().length).toBeGreaterThan(0);

      // Sans cela, l'enfant ne pourrait jamais avoir raison.
      const justes = question.reponses.filter((r) => r.correcte);
      expect(justes.length, 'il faut exactement une bonne réponse').toBe(1);

      // Deux propositions minimum, et pas plus de quatre pour rester lisible.
      expect(question.reponses.length).toBeGreaterThanOrEqual(2);
      expect(question.reponses.length).toBeLessThanOrEqual(4);

      // Les non-lecteurs se repèrent à l'icône : elle est obligatoire.
      for (const reponse of question.reponses) {
        expect(reponse.icone.length, 'icône manquante').toBeGreaterThan(0);
        expect(reponse.texte.trim().length).toBeGreaterThan(0);
      }
    }
  });

  /*
    Les plus jeunes ne lisent pas et ne peuvent comparer que deux propositions
    à l'oral. Au-delà, la question devient un test de mémoire.
  */
  it.each(quizCartes.map((q) => [q.cardId, q] as const))(
    '%s reste simple pour les 3-5 ans',
    (_id, quiz) => {
      for (const question of quiz.questions['3-5']) {
        expect(question.reponses.length).toBeLessThanOrEqual(2);
        expect(question.question.length, 'énoncé trop long à écouter').toBeLessThan(90);
      }
    },
  );
});
