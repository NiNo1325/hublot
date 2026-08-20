/**
 * Génère l'audio de l'écran de choix du niveau (voix de Lumi), via l'API Batch.
 *
 * Usage : npm run audio:niveaux [-- --en]
 *
 * Quatre fichiers dans public/audio/niveaux/ : la présentation des trois
 * niveaux, puis un commentaire par niveau, joué quand l'enfant touche sa carte.
 * C'est ce qui rend l'écran utilisable par un enfant qui ne lit pas encore —
 * l'écran où, précisément, il choisit à quel point on va lui parler simplement.
 *
 * Un manifeste évite de régénérer un texte inchangé.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { NIVEAUX, presentationNiveaux } from '../content/niveaux.ts';
import {
  BASE_API as BASE,
  VOIX,
  cle,
  localeDemandee,
  racineAudio,
  versMp3,
} from './lib/audio.mjs';
import { ecrireCatalogue } from './catalogue-audio.mjs';

const MODELE = 'gemini-3.1-flash-tts-preview';
const LOCALE = localeDemandee(process.argv.slice(2));
const RACINE = racineAudio(LOCALE, 'niveaux');
const MANIFESTE = `${RACINE}/manifeste.json`;
const SONDAGE_MS = 20000;

/* La consigne est écrite dans la langue qu'elle fait lire (cf. lib/audio.mjs). */
const CONSIGNES = {
  fr:
    "Tu es Lumi, la petite mascotte de l'application. Dis cette phrase à un enfant, " +
    "d'une voix douce, chaleureuse et enjouée, comme si tu l'invitais à choisir :\n\n",
  en:
    'You are Lumi, the little mascot of the app. Say this sentence to a child, ' +
    'in English with a British accent, in a gentle, warm and playful voice, as ' +
    'if you were inviting them to choose:\n\n',
};
const CONSIGNE = CONSIGNES[LOCALE];

/**
 * Les textes à lire.
 *
 * Le commentaire d'un niveau enchaîne son nom et sa conséquence : entendu seul,
 * « Tout simple » ne dirait rien de ce qui change.
 */
function textes() {
  const liste = [{ cle: presentationNiveaux.id, texte: presentationNiveaux.texte[LOCALE] }];
  for (const niveau of NIVEAUX) {
    const nom = niveau.nom[LOCALE];
    const texte = niveau.texte[LOCALE];
    liste.push({ cle: niveau.id, texte: nom && texte ? `${nom}. ${texte}` : null });
  }
  return liste.filter((item) => item.texte);
}

function empreinte(texte) {
  return createHash('sha256').update(`${VOIX}|${CONSIGNE}|${texte}`).digest('hex').slice(0, 16);
}

async function lireManifeste() {
  if (!existsSync(MANIFESTE)) return {};
  try {
    return JSON.parse(await readFile(MANIFESTE, 'utf8'));
  } catch {
    return {};
  }
}

function aFaire(manifeste) {
  const liste = [];
  for (const item of textes()) {
    const chemin = `${RACINE}/${item.cle}.mp3`;
    const attendu = empreinte(item.texte);
    if (manifeste[item.cle]?.empreinte === attendu && existsSync(chemin)) continue;
    liste.push({ ...item, chemin, attendu });
  }
  return liste;
}

async function soumettre(lot, apiKey) {
  const requests = lot.map((item) => ({
    request: {
      contents: [{ parts: [{ text: CONSIGNE + item.texte }] }],
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: VOIX } } },
      },
    },
  }));

  const reponse = await fetch(`${BASE}/models/${MODELE}:batchGenerateContent`, {
    method: 'POST',
    headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      batch: {
        displayName: `hublot-niveaux-${Date.now()}`,
        inputConfig: { requests: { requests } },
      },
    }),
  });

  if (!reponse.ok) {
    throw new Error(`${reponse.status} — ${(await reponse.text()).slice(0, 200)}`);
  }
  return (await reponse.json()).name;
}

async function attendre(nom, apiKey) {
  for (;;) {
    const reponse = await fetch(`${BASE}/${nom}`, { headers: { 'x-goog-api-key': apiKey } });
    const donnees = await reponse.json();
    const etat = donnees?.metadata?.state;
    if (etat === 'BATCH_STATE_SUCCEEDED') return donnees;
    if (etat === 'BATCH_STATE_FAILED' || etat === 'BATCH_STATE_CANCELLED') {
      throw new Error(`lot ${etat}`);
    }
    await new Promise((r) => setTimeout(r, SONDAGE_MS));
  }
}

async function main() {
  const apiKey = cle();
  await mkdir(RACINE, { recursive: true });
  const manifeste = await lireManifeste();
  const lot = aFaire(manifeste);

  if (lot.length === 0) {
    console.log('Tout est déjà généré.');
    return;
  }

  console.log(`${lot.length} fichier(s) à produire (${LOCALE}).`);
  process.stdout.write('soumission… ');
  const nom = await soumettre(lot, apiKey);
  console.log('ok');

  process.stdout.write('attente du lot… ');
  const donnees = await attendre(nom, apiKey);
  const reponses = donnees?.response?.inlinedResponses?.inlinedResponses ?? [];
  console.log(`${reponses.length} réponse(s)`);

  let ecrits = 0;
  const echecs = [];
  for (const [j, item] of lot.entries()) {
    const partie = reponses[j]?.response?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
    if (!partie?.data) {
      echecs.push(`${item.cle} : réponse sans audio`);
      continue;
    }
    await versMp3(Buffer.from(partie.data, 'base64'), item.chemin);
    manifeste[item.cle] = { empreinte: item.attendu, modele: MODELE };
    ecrits += 1;
  }
  await writeFile(MANIFESTE, `${JSON.stringify(manifeste, null, 2)}\n`);

  console.log(`${ecrits} fichier(s) écrit(s).`);
  if (echecs.length > 0) {
    console.log(`${echecs.length} échec(s) :`);
    for (const e of echecs) console.log(`  - ${e}`);
    process.exitCode = 1;
  }
}

main().then(ecrireCatalogue);
