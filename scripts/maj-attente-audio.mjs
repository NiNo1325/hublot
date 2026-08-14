/**
 * Recalcule les listes d'attente audio à partir des fichiers réellement
 * présents : EN_ATTENTE_AUDIO (beats) dans tests/audio.test.ts,
 * EN_ATTENTE_AUDIO_QUIZ (quizz) dans tests/quiz.test.ts, et
 * EN_ATTENTE_ACCROCHES (accroches) dans tests/accroches.test.ts.
 *
 * Usage : npx tsx scripts/maj-attente-audio.mjs
 *
 * La génération s'interrompt dès que les quotas sont atteints, souvent au
 * milieu d'une carte. Tenir ces listes à la main après chaque passage serait
 * fastidieux et source d'oublis — or une carte oubliée dans une liste n'est
 * plus vérifiée du tout.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { cards } from '../content/cards/index.ts';
import { quizCartes } from '../content/quiz/index.ts';
import { domains } from '../content/domains.ts';
import { AGE_RANGES } from '../lib/types.ts';

/** Remplace le bloc `const <nom> = new Set<string>([...]);` d'un fichier. */
function majListe(chemin, nom, ids) {
  const bloc =
    ids.length === 0
      ? `const ${nom} = new Set<string>([]);`
      : `const ${nom} = new Set<string>([\n${ids.map((id) => `  '${id}',`).join('\n')}\n]);`;

  const source = readFileSync(chemin, 'utf8');
  const motif = new RegExp(`const ${nom} = new Set(?:<string>)?\\(\\[[\\s\\S]*?\\]\\);`);

  if (!motif.test(source)) {
    console.error(`Bloc ${nom} introuvable dans ${chemin} — vérifie le fichier.`);
    process.exit(1);
  }

  writeFileSync(chemin, source.replace(motif, bloc));
}

// Beats : une carte est en attente si un seul de ses fichiers de beat manque.
const beatsIncomplets = cards
  .filter((carte) =>
    AGE_RANGES.some((age) =>
      carte.content.fr.explanation[age].beats.some(
        (beat) => !existsSync(`public/audio/${carte.id}/${age}/${beat.id}.mp3`),
      ),
    ),
  )
  .map((c) => c.id);

// Quizz : une carte est en attente si un seul fichier (énoncé ou explication) manque.
const quizIncomplets = quizCartes
  .filter((quiz) =>
    AGE_RANGES.some((age) =>
      quiz.questions.fr[age].some((question) =>
        ['question', 'explication'].some(
          (partie) =>
            !existsSync(`public/audio/quiz/${quiz.cardId}/${age}/${question.id}-${partie}.mp3`),
        ),
      ),
    ),
  )
  .map((q) => q.cardId);

// Accroches : un domaine est en attente si son mp3 manque.
const accrochesIncompletes = domains
  .filter((d) => !existsSync(`public/audio/accroches/${d.id}.mp3`))
  .map((d) => d.id);

majListe('tests/audio.test.ts', 'EN_ATTENTE_AUDIO', beatsIncomplets);
majListe('tests/quiz.test.ts', 'EN_ATTENTE_AUDIO_QUIZ', quizIncomplets);
majListe('tests/accroches.test.ts', 'EN_ATTENTE_ACCROCHES', accrochesIncompletes);

console.log(
  `Beats : ${cards.length - beatsIncomplets.length} complet(s), ${beatsIncomplets.length} en attente. ` +
    `Quizz : ${quizCartes.length - quizIncomplets.length} complet(s), ${quizIncomplets.length} en attente. ` +
    `Accroches : ${domains.length - accrochesIncompletes.length} complet(s), ${accrochesIncompletes.length} en attente.`,
);
