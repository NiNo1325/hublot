/**
 * Génère un même texte avec chaque modèle TTS disponible, pour vérifier si
 * leur timbre diffère avant de décider de les mélanger.
 *
 * Usage : npm run voix:modeles
 *
 * L'enjeu est concret : le quota est compté par modèle, donc en utiliser
 * plusieurs triple la cadence. Encore faut-il que l'auditeur ne l'entende pas.
 */
import { writeFile, mkdir, rm } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

const MODELES = [
  'gemini-3.1-flash-tts-preview',
  'gemini-2.5-pro-preview-tts',
  'gemini-2.5-flash-preview-tts',
];
const VOIX = 'Callirrhoe';
const DOSSIER = 'echantillons-voix';

/* Texte identique pour les trois : seule la machine doit varier. */
const CONSIGNE =
  "Lis ce texte en français à un enfant de sept ans, d'une voix chaleureuse " +
  "et décontractée, avec l'enthousiasme de quelqu'un qui raconte quelque " +
  'chose de fascinant. Parle posément :\n\n';
const TEXTE =
  "Le Soleil réchauffe l'eau des océans. Une partie se transforme en vapeur " +
  "invisible et s'élève dans les airs : c'est l'évaporation. Plus on monte, " +
  'plus il fait froid, et la vapeur redevient de minuscules gouttelettes.';

function cle() {
  const valeur = process.env.GEMINI_API_KEY;
  if (!valeur) {
    console.error('GEMINI_API_KEY absente. Ajoute-la dans .env.local.');
    process.exit(1);
  }
  return valeur.trim();
}

async function main() {
  const apiKey = cle();
  await mkdir(DOSSIER, { recursive: true });

  for (const modele of MODELES) {
    const court = modele.replace('gemini-', '').replace('-preview', '');
    const destination = `${DOSSIER}/modele-${court}.mp3`;
    process.stdout.write(`${court}… `);

    try {
      const reponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${modele}:generateContent`,
        {
          method: 'POST',
          headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: CONSIGNE + TEXTE }] }],
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
        console.log(`indisponible (${reponse.status})`);
        continue;
      }

      const donnees = await reponse.json();
      const base64 = donnees?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!base64) {
        console.log('réponse sans audio');
        continue;
      }

      const temporaire = `${destination}.pcm`;
      await writeFile(temporaire, Buffer.from(base64, 'base64'));
      await execFileAsync('ffmpeg', [
        '-y', '-loglevel', 'error',
        '-f', 's16le', '-ar', '24000', '-ac', '1',
        '-i', temporaire, '-b:a', '64k', destination,
      ]);
      await rm(temporaire);
      console.log('ok');
    } catch (erreur) {
      console.log(`échec : ${erreur.message}`);
    }
  }

  console.log(
    `\nÉcoute ${DOSSIER}/modele-*.mp3 : si tu ne distingues pas les voix,\n` +
      'on peut répartir la génération sur les trois modèles et aller trois fois plus vite.',
  );
}

main();
