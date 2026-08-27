/**
 * Vérifie qu'un enfant peut gagner assez de clés pour délivrer les 113 savants.
 *
 * Usage : npx tsx scripts/economie-cles.mjs
 *
 * L'économie tient en trois règles, et c'est leur rencontre qui peut casser :
 *
 * - une clé se gagne en répondant juste sur une carte, **la première fois
 *   seulement** (`clesAGagner`) : le total gagnable dans une vie vaut donc le
 *   nombre de cartes maîtrisables, jamais plus ;
 * - le prix d'un savant est le nombre de cartes qu'il tient (`prixSavant`), si
 *   bien que la somme des prix vaut exactement le nombre de cartes du
 *   catalogue ;
 * - une carte n'est interrogeable que si elle a une question **à l'âge de
 *   l'enfant** (`estEligible`).
 *
 * D'où le risque : une carte sans question à un niveau donné retire une clé au
 * total gagnable à ce niveau, sans rien retirer au prix à payer. Le budget est
 * juste par construction — aucune marge — donc une seule carte manquante suffit
 * à rendre le mur infranchissable, et le dernier savant resterait enfermé sans
 * que rien n'explique pourquoi.
 *
 * Ce relevé compare, niveau par niveau, ce qu'on peut gagner et ce qu'il faut
 * payer. `tests/cles.test.ts` en fait un test ; ce script sert à voir le détail
 * et à nommer les cartes fautives.
 */
import { cards } from '../content/cards/index.ts';
import { savantsPrisonniers } from '../content/savants-cartes.ts';
import { questionsDe } from '../content/quiz/index.ts';
import { estGratuite } from '../content/acces.ts';
import { AGE_RANGES, LOCALES } from '../lib/types.ts';

const prix = savantsPrisonniers.reduce((n, s) => n + s.cartes.length, 0);

console.log(`Catalogue : ${cards.length} cartes, ${savantsPrisonniers.length} savants.`);
console.log(`Coût total du mur : ${prix} clés.\n`);

let defaut = false;

for (const locale of LOCALES) {
  console.log(`── ${locale} ──`);
  for (const age of AGE_RANGES) {
    const sans = cards.filter((c) => questionsDe(c.id, age, locale).length === 0);
    const gagnables = cards.length - sans.length;
    const marge = gagnables - prix;
    const etat = marge >= 0 ? `marge ${marge}` : `MANQUE ${-marge}`;
    console.log(`  ${age.padEnd(6)} ${String(gagnables).padStart(3)} clés gagnables / ${prix} à payer — ${etat}`);
    if (sans.length > 0) {
      defaut = true;
      console.log(`         ${sans.length} carte(s) sans question à cet âge :`);
      for (const c of sans) console.log(`           - ${c.domainId} / ${c.id}`);
    }
  }
  console.log();
}

/*
  Le solde global ne suffit pas : les clés sont fongibles, mais un savant dont
  toutes les cartes sont muettes à un niveau reste inatteignable même avec un
  trésor — l'enfant paierait son prix avec les clés des autres. On le vérifie
  donc à part, car c'est une panne d'un genre différent.
*/
for (const locale of LOCALES) {
  for (const age of AGE_RANGES) {
    const muets = savantsPrisonniers.filter((s) =>
      s.cartes.every((c) => questionsDe(c.id, age, locale).length === 0),
    );
    if (muets.length > 0) {
      defaut = true;
      console.log(`${locale} / ${age} : ${muets.length} savant(s) dont aucune carte n'est interrogeable`);
      for (const s of muets) console.log(`  - ${s.nom}`);
    }
  }
}

/*
  Et le jour où le freemium s'allumera.

  `estGratuite` n'ouvre qu'un domaine entier plus quelques cartes phares : un
  enfant sans achat ne peut donc maîtriser qu'une fraction du catalogue, et le
  mur des savants devient un décor. Le drapeau est éteint aujourd'hui — ce
  relevé dit ce qui se passera le jour où on l'allumera.
*/
const gratuites = cards.filter((c) => estGratuite(c));
const domainesSansGratuit = [...new Set(cards.map((c) => c.domainId))].filter(
  (d) => !gratuites.some((c) => c.domainId === d),
);
const liberablesGratuit = savantsPrisonniers.filter((s) =>
  s.cartes.every((c) => gratuites.some((g) => g.id === c.id)),
).length;

console.log(`\nSi le freemium était actif : ${gratuites.length} cartes gratuites,`);
console.log(`  donc au plus ${gratuites.length} clés sur les ${prix} du mur.`);
console.log(
  `  ${liberablesGratuit} savant(s) sur ${savantsPrisonniers.length} auraient toutes leurs cartes gratuites.`,
);
if (domainesSansGratuit.length > 0) {
  console.log(
    `  ${domainesSansGratuit.length} monde(s) sans aucune carte gratuite : ${domainesSansGratuit.join(', ')}`,
  );
}

if (defaut) {
  console.log('\nLe mur n’est pas franchissable à tous les niveaux.');
  process.exitCode = 1;
} else {
  console.log('Le mur est franchissable à chaque niveau, dans chaque langue.');
}
