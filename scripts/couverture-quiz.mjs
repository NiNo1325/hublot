/**
 * Indique quelles cartes disposent de questions de quizz.
 *
 * Usage : npx tsx scripts/couverture-quiz.mjs
 *
 * Les questions sont écrites domaine par domaine : ce relevé évite de deviner
 * ce qu'il reste à faire, et rappelle qu'une carte sans question n'apparaîtra
 * jamais dans le quizz.
 */
import { quizCartes } from '../content/quiz/index.ts';
import { cards } from '../content/cards/index.ts';

const couvertes = new Set(quizCartes.map((q) => q.cardId));
const parDomaine = {};

for (const carte of cards) {
  parDomaine[carte.domainId] ??= { total: 0, avec: 0, manquantes: [] };
  parDomaine[carte.domainId].total += 1;
  if (couvertes.has(carte.id)) parDomaine[carte.domainId].avec += 1;
  else parDomaine[carte.domainId].manquantes.push(carte.id);
}

console.log('Couverture du quizz par domaine :\n');
for (const [domaine, v] of Object.entries(parDomaine)) {
  const etat = v.avec === v.total ? 'complet' : `${v.total - v.avec} à écrire`;
  console.log(`  ${domaine.padEnd(24)} ${v.avec}/${v.total}  ${etat}`);
}

const questions = quizCartes.reduce(
  (n, q) => n + Object.values(q.questions).flat().length,
  0,
);
console.log(
  `\n  ${couvertes.size}/${cards.length} cartes couvertes, ${questions} questions écrites.`,
);
