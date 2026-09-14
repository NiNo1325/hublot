/**
 * Réapplique les correctifs que `bubblewrap update` efface.
 *
 * Usage : npm run android:corriger   (après chaque `bubblewrap update`)
 *
 * `android/app/build.gradle` est **généré** par Bubblewrap et non suivi par
 * git : chaque `update` le réécrit depuis son gabarit, et toute retouche faite
 * à la main disparaît sans un mot. On l'a appris à ses dépens — la migration
 * Play Billing de la version 5 a été perdue ainsi, et le Play Store a refusé
 * le bundle suivant.
 *
 * Deux correctifs, tous deux exigés par Google :
 *
 * - **le pont de facturation**. Le gabarit pose `billing:1.1.0`, qui entraîne
 *   Play Billing 7.1.1 ; Google en exige 8.0.0 au minimum. Le pont 1.2.0
 *   apporte la 8.x. Attention au couple : remettre le pont 1.1.0 face à
 *   Billing 8 fait planter l'application au démarrage, et c'est exactement le
 *   piège dans lequel on retombe en laissant Bubblewrap regénérer ;
 * - **le niveau d'API visé**. Le gabarit vise 35 ; Google en exige 36. Le
 *   `compileSdkVersion`, lui, est déjà à 36 dans le gabarit — seule la cible
 *   est en retard.
 *
 * Le script est idempotent : le relancer sur un projet déjà corrigé ne fait
 * rien et le dit.
 */
import { readFile, writeFile } from 'node:fs/promises';

const CHEMIN = 'android/app/build.gradle';

const CORRECTIFS = [
  {
    quoi: 'pont de facturation',
    cherche: /com\.google\.androidbrowserhelper:billing:1\.1\.0/,
    remplace: 'com.google.androidbrowserhelper:billing:1.2.0',
    deja: /com\.google\.androidbrowserhelper:billing:1\.2\.0/,
  },
  {
    quoi: 'niveau d’API visé',
    cherche: /targetSdkVersion 35\b/,
    remplace: 'targetSdkVersion 36',
    deja: /targetSdkVersion 36\b/,
  },
];

const contenu = await readFile(CHEMIN, 'utf8');
let sortie = contenu;
const faits = [];
const restants = [];

for (const c of CORRECTIFS) {
  if (c.deja.test(sortie)) {
    faits.push(`${c.quoi} : déjà bon`);
    continue;
  }
  if (!c.cherche.test(sortie)) {
    restants.push(
      `${c.quoi} : ni la valeur attendue ni celle du gabarit — le gabarit de ` +
        'Bubblewrap a changé, à vérifier à la main',
    );
    continue;
  }
  sortie = sortie.replace(c.cherche, c.remplace);
  faits.push(`${c.quoi} : corrigé`);
}

if (sortie !== contenu) await writeFile(CHEMIN, sortie);

for (const f of faits) console.log(`  ${f}`);
for (const r of restants) console.log(`  ⚠ ${r}`);
if (restants.length > 0) process.exitCode = 1;
