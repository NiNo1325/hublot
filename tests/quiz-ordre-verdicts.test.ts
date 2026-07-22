import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { quizCartes } from '@/content/quiz';
import { ordreLecture } from '@/content/quiz/ordre';
import { VERDICTS, cheminVerdict } from '@/content/quiz/verdicts';
import { AGE_RANGES } from '@/lib/types';

/**
 * Deux défauts remontés par des utilisateurs, et leurs garde-fous.
 *
 * L'énoncé des 3-5 ans est un mp3 figé qui lit les propositions dans l'ordre
 * donné par `ordreLecture`. Si l'affichage s'en écartait — il tirait
 * auparavant un ordre aléatoire — la voix annoncerait une proposition quand
 * l'écran en montre une autre, une fois sur deux.
 */
describe('ordre de lecture des propositions', () => {
  const questions = quizCartes.flatMap((q) =>
    AGE_RANGES.flatMap((age) => q.questions[age]),
  );

  it('est déterministe', () => {
    for (const question of questions) {
      expect(ordreLecture(question).map((r) => r.texte)).toEqual(
        ordreLecture(question).map((r) => r.texte),
      );
    }
  });

  it('conserve exactement les mêmes propositions', () => {
    for (const question of questions) {
      const avant = [...question.reponses].map((r) => r.texte).sort();
      const apres = ordreLecture(question).map((r) => r.texte).sort();
      expect(apres).toEqual(avant);
    }
  });

  /*
    La bonne réponse est toujours écrite en premier dans les fichiers de
    contenu. Si l'ordre de lecture la laissait systématiquement en tête,
    l'enfant apprendrait à choisir « la première » sans réfléchir — ce que le
    hachage est là pour éviter.
  */
  it('ne place pas toujours la bonne réponse en tête', () => {
    const enTete = questions.filter(
      (q) => ordreLecture(q)[0].correcte === true,
    ).length;
    const part = enTete / questions.length;
    expect(part).toBeGreaterThan(0.25);
    expect(part).toBeLessThan(0.75);
  });
});

/**
 * Sans ces clips, un non-lecteur ne sait pas s'il a trouvé : le verdict
 * n'existait qu'à l'écran, donc précisément là où il ne peut pas le lire.
 */
describe('audio des verdicts', () => {
  const cas = AGE_RANGES.flatMap((age) =>
    (['juste', 'presque'] as const).flatMap((verdict) =>
      VERDICTS[age][verdict].map(
        (_, rang) =>
          [
            `${age}/${verdict}-${rang + 1}`,
            `public/audio/quiz/${cheminVerdict(age, verdict, rang)}.mp3`,
          ] as const,
      ),
    ),
  );

  it('prévoit plusieurs formulations par âge', () => {
    for (const age of AGE_RANGES) {
      expect(VERDICTS[age].juste.length).toBeGreaterThanOrEqual(3);
      expect(VERDICTS[age].presque.length).toBeGreaterThanOrEqual(3);
    }
  });

  it.each(cas)('%s a son fichier audio', (_libelle, chemin) => {
    expect(existsSync(chemin), `manquant : ${chemin} — lance « npm run audio:quiz »`).toBe(
      true,
    );
  });
});
