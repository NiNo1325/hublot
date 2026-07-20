/**
 * Migration ponctuelle du manifeste audio.
 *
 * L'empreinte incluait autrefois le nom du modèle. Elle ne couvre désormais
 * que le texte, la voix et la consigne — sinon un fichier produit par un
 * modèle de repli serait régénéré à chaque passage. Sans cette migration, les
 * entrées existantes paraîtraient toutes périmées et le quota partirait à
 * refaire des fichiers déjà corrects.
 *
 * Usage : npx tsx scripts/migrer-manifeste.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { cards } from '../content/cards/index.ts';
import { AGE_RANGES } from '../lib/types.ts';

const CONSIGNES = {
  '3-5':
    "Lis ce texte en français à un enfant de quatre ans. Parle lentement et " +
    "très distinctement, d'une voix douce et émerveillée, en marquant de " +
    'nettes pauses entre les phrases :\n\n',
  '6-8':
    "Lis ce texte en français à un enfant de sept ans, d'une voix chaleureuse " +
    "et décontractée, avec l'enthousiasme de quelqu'un qui raconte quelque " +
    'chose de fascinant. Parle posément :\n\n',
  '9-12':
    "Lis ce texte en français à un enfant de onze ans, d'un ton naturel, " +
    'curieux et complice, comme on explique quelque chose de passionnant à ' +
    "quelqu'un qu'on prend au sérieux. Débit normal :\n\n",
};

const CHEMIN = 'public/audio/manifeste.json';
const ancien = JSON.parse(readFileSync(CHEMIN, 'utf8'));
const nouveau = {};
let migres = 0;

for (const carte of cards) {
  for (const age of AGE_RANGES) {
    for (const beat of carte.content.fr.explanation[age].beats) {
      const cle = `${carte.id}/${age}/${beat.id}`;
      if (!(cle in ancien)) continue;
      if (!existsSync(`public/audio/${cle}.mp3`)) continue;

      const empreinte = createHash('sha256')
        .update(`Callirrhoe|${CONSIGNES[age]}|${beat.text}`)
        .digest('hex')
        .slice(0, 16);

      // Ces fichiers viennent tous du modèle principal.
      nouveau[cle] = { empreinte, modele: 'gemini-3.1-flash-tts-preview' };
      migres += 1;
    }
  }
}

writeFileSync(CHEMIN, `${JSON.stringify(nouveau, null, 2)}\n`);
console.log(`entrées migrées : ${migres} (anciennes : ${Object.keys(ancien).length})`);
