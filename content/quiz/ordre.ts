import type { QuizQuestion, QuizReponse } from '@/lib/types';

/**
 * Ordre des propositions d'une question.
 *
 * Deux contraintes se croisent ici, et c'est pourquoi cette fonction est du
 * contenu partagé plutôt qu'un détail du générateur audio.
 *
 * La bonne réponse est toujours écrite en premier dans les fichiers de quizz.
 * L'énoncer systématiquement en premier apprendrait à l'enfant à choisir « la
 * première » sans réfléchir : un hachage de l'identifiant inverse donc l'ordre
 * pour environ une question sur deux.
 *
 * Surtout, l'énoncé des 3-5 ans est un mp3 figé qui lit les propositions dans
 * cet ordre. L'affichage doit donc suivre exactement le même, sinon la voix
 * annonce une proposition quand l'écran en montre une autre. Les deux
 * consommateurs — `scripts/generer-audio-quiz.mjs` et `QuizView` — appellent
 * cette unique fonction : c'est ce qui les empêche de repartir en divergence.
 */
export function ordreLecture(question: QuizQuestion): QuizReponse[] {
  const somme = [...question.id].reduce((n, c) => n + c.charCodeAt(0), 0);
  return somme % 2 === 0 ? question.reponses : [...question.reponses].reverse();
}
