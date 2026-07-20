/**
 * Recalcule la liste EN_ATTENTE_AUDIO de tests/audio.test.ts à partir des
 * fichiers réellement présents.
 *
 * Usage : npx tsx scripts/maj-attente-audio.mjs
 *
 * La génération s'interrompt dès que les quotas sont atteints, souvent au
 * milieu d'une carte. Tenir cette liste à la main après chaque passage serait
 * fastidieux et source d'oublis — or une carte oubliée dans la liste n'est
 * plus vérifiée du tout.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { cards } from '../content/cards/index.ts';
import { AGE_RANGES } from '../lib/types.ts';

const CHEMIN = 'tests/audio.test.ts';

const incompletes = cards
  .filter((carte) =>
    AGE_RANGES.some((age) =>
      carte.content.fr.explanation[age].beats.some(
        (beat) => !existsSync(`public/audio/${carte.id}/${age}/${beat.id}.mp3`),
      ),
    ),
  )
  .map((c) => c.id);

const bloc =
  incompletes.length === 0
    ? 'const EN_ATTENTE_AUDIO = new Set<string>([]);'
    : `const EN_ATTENTE_AUDIO = new Set([\n${incompletes
        .map((id) => `  '${id}',`)
        .join('\n')}\n]);`;

const source = readFileSync(CHEMIN, 'utf8');
const remplace = source.replace(
  /const EN_ATTENTE_AUDIO = new Set(?:<string>)?\(\[[\s\S]*?\]\);/,
  bloc,
);

if (remplace === source && incompletes.length > 0) {
  console.error('Bloc EN_ATTENTE_AUDIO introuvable — vérifie le fichier.');
  process.exit(1);
}

writeFileSync(CHEMIN, remplace);

const completes = cards.length - incompletes.length;
console.log(`${completes} carte(s) avec audio complet, ${incompletes.length} en attente.`);
