/**
 * Estime la durée de narration de chaque carte, par tranche d'âge.
 *
 * Usage : npx tsx scripts/stats-duree.mjs
 *
 * Sert à repérer les cartes trop longues à écouter avant de payer leur
 * génération audio — un texte de trois minutes perd un enfant bien avant la
 * fin, et le défaut ne se voit pas à la lecture.
 */
import { cards } from '../content/cards/index.ts';
import { AGE_RANGES } from '../lib/types.ts';

/** ~14 caractères par seconde, calibré sur les fichiers déjà générés. */
const CAR_PAR_SEC = 14;

const stats = { '3-5': [], '6-8': [], '9-12': [] };
const longues = [];

for (const carte of cards) {
  for (const age of AGE_RANGES) {
    const total = carte.content.fr.explanation[age].beats.reduce(
      (n, b) => n + b.text.length,
      0,
    );
    const sec = Math.round(total / CAR_PAR_SEC);
    stats[age].push(sec);
    if (age === '9-12' && sec > 105) longues.push([carte.id, sec]);
  }
}

for (const age of AGE_RANGES) {
  const v = stats[age].slice().sort((a, b) => a - b);
  const moy = Math.round(v.reduce((a, b) => a + b, 0) / v.length);
  console.log(
    `${age.padEnd(6)} médiane ${v[Math.floor(v.length / 2)]}s   moyenne ${moy}s   max ${v[v.length - 1]}s`,
  );
}

console.log('\nCartes 9-12 au-delà de 1 min 45 :');
longues.sort((a, b) => b[1] - a[1]).forEach(([id, s]) => {
  console.log(`  ${id.padEnd(38)} ${s}s`);
});
if (longues.length === 0) console.log('  aucune');
