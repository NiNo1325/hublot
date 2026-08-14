import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { quizCartes } from '@/content/quiz';
import { cards } from '@/content/cards';
import { AGE_RANGES, LOCALES } from '@/lib/types';

/**
 * Cartes livrées avant l'audio de leur quizz, en attente de quota TTS.
 *
 * Pendant du EN_ATTENTE_AUDIO des beats (tests/audio.test.ts) : rend l'attente
 * visible et délibérée plutôt que de désactiver le garde-fou. Toute carte
 * absente d'ici doit avoir l'audio complet de son quizz. `npm run audio:attente`
 * recalcule cette liste depuis les fichiers présents.
 */
const EN_ATTENTE_AUDIO_QUIZ = new Set<string>([]);

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

  /*
    Chaque langue traduite est vérifiée comme la source : une traduction n'est
    pas qu'un texte de remplacement, elle doit garder exactement une bonne
    réponse, ses icônes et un nombre de propositions jouable. Les langues
    absentes ne produisent pas de cas — rien à vérifier tant qu'on retombe sur
    le français.
  */
  const cas = quizCartes.flatMap((q) =>
    LOCALES.filter((locale) => q.questions[locale]).flatMap((locale) =>
      AGE_RANGES.map(
        (age) =>
          [`${q.cardId} — ${locale} — ${age}`, q.questions[locale]!, age] as const,
      ),
    ),
  );

  it.each(cas)('%s propose des questions valides', (_libelle, parAge, age) => {
    const questions = parAge[age];
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
  it.each(
    quizCartes.flatMap((q) =>
      LOCALES.filter((locale) => q.questions[locale]).map(
        (locale) => [`${q.cardId} — ${locale}`, q.questions[locale]!] as const,
      ),
    ),
  )('%s reste simple pour les 3-5 ans', (_libelle, parAge) => {
    for (const question of parAge['3-5']) {
      expect(question.reponses.length).toBeLessThanOrEqual(2);
      expect(question.question.length, 'énoncé trop long à écouter').toBeLessThan(90);
    }
  });

  /*
    L'audio du quizz est généré hors ligne par `npm run audio:quiz`. Une
    question muette au niveau 3-5 ans est un vrai problème : les non-lecteurs
    ne pourraient pas jouer. Deux fichiers par question, l'énoncé et
    l'explication. Les cartes livrées avant l'audio de leur quizz sont déclarées
    dans EN_ATTENTE_AUDIO_QUIZ (voir en tête de fichier).

    Le français seul : c'est la seule langue enregistrée, l'audio des autres
    étant une phase à part (régénération TTS complète vers `/audio/<locale>/`).
  */
  const fichiersAudio = quizCartes
    .filter((quiz) => !EN_ATTENTE_AUDIO_QUIZ.has(quiz.cardId))
    .flatMap((quiz) =>
    AGE_RANGES.flatMap((age) =>
      quiz.questions.fr[age].flatMap((question) =>
        (['question', 'explication'] as const).map(
          (partie) =>
            [
              `${quiz.cardId}/${age}/${question.id}-${partie}`,
              `public/audio/quiz/${quiz.cardId}/${age}/${question.id}-${partie}.mp3`,
            ] as const,
        ),
      ),
    ),
  );

  it.each(fichiersAudio)('audio %s présent', (_libelle, chemin) => {
    expect(existsSync(chemin), `manquant : ${chemin} — lance « npm run audio:quiz »`).toBe(
      true,
    );
  });
});
