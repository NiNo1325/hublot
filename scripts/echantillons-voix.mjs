/**
 * Génère un échantillon audio par voix candidate, pour choisir à l'oreille
 * plutôt que sur un nom de catalogue.
 *
 * Usage : npm run voix:echantillons
 * Les fichiers atterrissent dans `echantillons-voix/`, hors du dépôt.
 */
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { card } from '../content/cards/sciences-de-la-terre/cycle-de-leau.ts';

const execFileAsync = promisify(execFile);

const MODELE = 'gemini-3.1-flash-tts-preview';
const DOSSIER = 'echantillons-voix';

/**
 * Voix retenues parmi la trentaine du catalogue, sur le critère « lire une
 * histoire à un enfant » : chaleur et douceur avant autorité ou gravité.
 */
const CANDIDATES = [
  { nom: 'Leda', caractere: 'juvénile' },
  { nom: 'Achird', caractere: 'amicale' },
  { nom: 'Sulafat', caractere: 'chaleureuse' },
  { nom: 'Vindemiatrix', caractere: 'douce' },
  { nom: 'Callirrhoe', caractere: 'décontractée' },
  { nom: 'Puck', caractere: 'enjouée' },
];

/** Le style se pilote en langage naturel, en préfixe du texte à lire. */
const CONSIGNE =
  "Lis ce texte en français, d'une voix douce et chaleureuse, avec l'enthousiasme " +
  "de quelqu'un qui raconte une belle histoire à un enfant de sept ans. " +
  'Parle posément, en marquant bien les pauses :\n\n';

function cle() {
  const valeur = process.env.GEMINI_API_KEY;
  if (!valeur) {
    console.error('GEMINI_API_KEY absente. Ajoute-la dans .env.local.');
    process.exit(1);
  }
  return valeur.trim();
}

/** Renvoie le PCM brut (24 kHz, 16 bits, mono) produit par le modèle. */
async function synthetiser(texte, voix, apiKey) {
  const reponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODELE}:generateContent`,
    {
      method: 'POST',
      headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: CONSIGNE + texte }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: voix } },
          },
        },
      }),
    },
  );

  if (!reponse.ok) {
    const detail = await reponse.text();
    // La clé n'apparaît jamais dans le message : elle voyage en en-tête.
    throw new Error(`${reponse.status} — ${detail.slice(0, 300)}`);
  }

  const donnees = await reponse.json();
  const base64 = donnees?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64) throw new Error('réponse sans données audio');
  return Buffer.from(base64, 'base64');
}

/** Le modèle renvoie du PCM brut : ffmpeg l'encapsule en mp3 écoutable. */
async function versMp3(pcm, destination) {
  const temporaire = `${destination}.pcm`;
  await writeFile(temporaire, pcm);
  await execFileAsync('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-f', 's16le', '-ar', '24000', '-ac', '1',
    '-i', temporaire,
    '-b:a', '96k',
    destination,
  ]);
  await rm(temporaire);
}

async function main() {
  const apiKey = cle();
  await mkdir(DOSSIER, { recursive: true });

  // Deux beats : assez pour juger le timbre et l'enchaînement des phrases.
  const beats = card.content.fr.explanation['6-8'].beats;
  const texte = `${beats[0].text}\n\n${beats[1].text}`;

  for (const { nom, caractere } of CANDIDATES) {
    const destination = `${DOSSIER}/${nom}-${caractere}.mp3`;
    process.stdout.write(`${nom} (${caractere})… `);
    try {
      const pcm = await synthetiser(texte, nom, apiKey);
      await versMp3(pcm, destination);
      console.log('ok');
    } catch (erreur) {
      console.log(`échec : ${erreur.message}`);
    }
  }

  console.log(`\nÉchantillons dans ${DOSSIER}/ — écoute-les et dis-moi ta préférence.`);
}

main();
