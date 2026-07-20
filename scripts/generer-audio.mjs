/**
 * Génère un fichier audio par beat, pour chaque carte et chaque tranche d'âge.
 *
 * Usage : npm run audio
 *
 * Les fichiers produits sont commités et servis en statique : la synthèse ne
 * coûte rien à l'exécution et fonctionne hors ligne. Un manifeste mémorise
 * l'empreinte du texte de chaque beat, de sorte qu'un second passage ne
 * régénère que ce qui a réellement changé.
 */
import { writeFile, readFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { cards } from '../content/cards/index.ts';
import { AGE_RANGES } from '../lib/types.ts';

const execFileAsync = promisify(execFile);

const MODELE = 'gemini-3.1-flash-tts-preview';
const VOIX = 'Callirrhoe';
const RACINE = 'public/audio';
const MANIFESTE = `${RACINE}/manifeste.json`;

/**
 * Le style se pilote en langage naturel. Le registre change avec l'âge : un
 * enfant de quatre ans a besoin de lenteur et d'expressivité, un de onze ans
 * d'un ton posé qui ne le prenne pas de haut.
 */
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

function cle() {
  const valeur = process.env.GEMINI_API_KEY;
  if (!valeur) {
    console.error('GEMINI_API_KEY absente. Ajoute-la dans .env.local.');
    process.exit(1);
  }
  return valeur.trim();
}

/**
 * L'empreinte couvre le texte, la voix, la consigne et le modèle : changer
 * l'un d'eux doit provoquer une régénération, sans quoi le catalogue
 * mélangerait deux timbres.
 */
function empreinte(texte, age) {
  return createHash('sha256')
    .update(`${MODELE}|${VOIX}|${CONSIGNES[age]}|${texte}`)
    .digest('hex')
    .slice(0, 16);
}

async function synthetiser(texte, age, apiKey) {
  const reponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELE}:generateContent`,
    {
      method: 'POST',
      headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: CONSIGNES[age] + texte }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: VOIX } },
          },
        },
      }),
    },
  );

  if (!reponse.ok) {
    // La clé voyage en en-tête : elle n'apparaît dans aucun message d'erreur.
    throw new Error(`${reponse.status} — ${(await reponse.text()).slice(0, 200)}`);
  }

  const donnees = await reponse.json();
  const base64 = donnees?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64) throw new Error('réponse sans données audio');
  return Buffer.from(base64, 'base64');
}

/**
 * Le modèle renvoie du PCM brut 24 kHz mono. 64 kbit/s suffit largement pour
 * une voix seule et allège nettement le catalogue.
 */
async function versMp3(pcm, destination) {
  const temporaire = `${destination}.pcm`;
  await writeFile(temporaire, pcm);
  await execFileAsync('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-f', 's16le', '-ar', '24000', '-ac', '1',
    '-i', temporaire,
    '-b:a', '64k',
    destination,
  ]);
  await rm(temporaire);
}

async function lireManifeste() {
  if (!existsSync(MANIFESTE)) return {};
  try {
    return JSON.parse(await readFile(MANIFESTE, 'utf8'));
  } catch {
    // Manifeste corrompu : on repart de zéro plutôt que d'échouer.
    return {};
  }
}

async function main() {
  const apiKey = cle();
  const manifeste = await lireManifeste();
  let generes = 0;
  let inchanges = 0;
  const echecs = [];

  for (const carte of cards) {
    for (const age of AGE_RANGES) {
      const dossier = `${RACINE}/${carte.id}/${age}`;
      await mkdir(dossier, { recursive: true });

      for (const beat of carte.content.fr.explanation[age].beats) {
        const chemin = `${dossier}/${beat.id}.mp3`;
        const cleManifeste = `${carte.id}/${age}/${beat.id}`;
        const attendu = empreinte(beat.text, age);

        if (manifeste[cleManifeste] === attendu && existsSync(chemin)) {
          inchanges += 1;
          continue;
        }

        process.stdout.write(`${cleManifeste}… `);
        try {
          await versMp3(await synthetiser(beat.text, age, apiKey), chemin);
          manifeste[cleManifeste] = attendu;
          generes += 1;
          console.log('ok');
        } catch (erreur) {
          echecs.push(`${cleManifeste} : ${erreur.message}`);
          console.log('échec');
        }
      }
    }
  }

  // Écrit même en cas d'échec partiel : les fichiers réussis ne seront pas
  // regénérés au prochain passage.
  await writeFile(MANIFESTE, `${JSON.stringify(manifeste, null, 2)}\n`);

  console.log(`\n${generes} généré(s), ${inchanges} inchangé(s).`);
  if (echecs.length > 0) {
    console.log(`\n${echecs.length} échec(s) :`);
    for (const e of echecs) console.log(`  - ${e}`);
    process.exitCode = 1;
  }
}

main();
