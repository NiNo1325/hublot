/**
 * Génère la voix du jeu « Vrai ou faux », via l'API Batch.
 *
 * Usage : npm run audio:affirmations [-- en]
 *
 * Deux clips par carte : l'affirmation que Lumi assène
 * (public/audio/affirmations/<carte>.mp3) et la réponse qu'elle donne ensuite
 * (public/audio/affirmations/<carte>-reponse.mp3). Soit trois cents fichiers
 * par langue.
 *
 * Les deux ne se disent pas du tout pareil, et c'est tout l'enjeu du jeu :
 * l'affirmation doit être **assurée**, y compris quand elle est fausse — une
 * voix qui hésite sur « le sang est bleu dans les veines » donne la réponse
 * avant qu'on ait réfléchi. La réponse, elle, se dit en révélant. D'où deux
 * consignes distinctes, et une empreinte qui inclut la consigne : changer la
 * façon de dire force la régénération.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { affirmations } from '../content/affirmations/index.ts';
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
const RACINE = racineAudio(LOCALE, 'affirmations');
const MANIFESTE = `${RACINE}/manifeste.json`;
const PAR_LOT = 40;
const SONDAGE_MS = 20000;

/*
  Les consignes sont écrites dans la langue qu'elles font lire (cf. lib/audio.mjs).
  L'affirmation s'énonce sans le moindre doute : c'est un jeu où l'on doit oser
  contredire, et une voix qui doute a déjà répondu à la place de l'enfant.
*/
const CONSIGNES = {
  fr: {
    phrase:
      "Tu es Lumi, la petite mascotte de l'application. Affirme cette phrase à un enfant, " +
      "d'une voix douce et assurée, comme quelqu'un qui est sûr de ce qu'il dit. " +
      "N'hésite pas, ne prends aucun ton interrogatif :\n\n",
    reponse:
      "Tu es Lumi, la petite mascotte de l'application. Révèle la réponse à un enfant, " +
      "d'une voix douce, chaleureuse et enjouée, comme quelqu'un qui dévoile un secret :\n\n",
  },
  en: {
    phrase:
      'You are Lumi, the little mascot of the app. State this sentence to a child, in ' +
      'English with a British accent, in a gentle and confident voice, like someone who ' +
      'is sure of what they are saying. Do not hesitate, do not sound questioning:\n\n',
    reponse:
      'You are Lumi, the little mascot of the app. Reveal the answer to a child, in ' +
      'English with a British accent, in a gentle, warm and playful voice, like someone ' +
      'letting them in on a secret:\n\n',
  },
};
const CONSIGNE = CONSIGNES[LOCALE];

function empreinte(consigne, texte) {
  return createHash('sha256').update(`${VOIX}|${consigne}|${texte}`).digest('hex').slice(0, 16);
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
  for (const a of affirmations) {
    const morceaux = [
      { suffixe: '', consigne: CONSIGNE.phrase, texte: a.texte[LOCALE] ?? a.texte.fr },
      {
        suffixe: '-reponse',
        consigne: CONSIGNE.reponse,
        texte: a.reponse[LOCALE] ?? a.reponse.fr,
      },
    ];
    for (const m of morceaux) {
      const cleFichier = `${a.cardId}${m.suffixe}`;
      const chemin = `${RACINE}/${cleFichier}.mp3`;
      const attendu = empreinte(m.consigne, m.texte);
      if (manifeste[cleFichier]?.empreinte === attendu && existsSync(chemin)) continue;
      liste.push({
        cle: cleFichier,
        chemin,
        dossier: RACINE,
        texte: m.consigne + m.texte,
        attendu,
      });
    }
  }
  return liste;
}

async function soumettre(lot, apiKey, index) {
  const requests = lot.map((item) => ({
    request: {
      contents: [{ parts: [{ text: item.texte }] }],
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
        displayName: `hublot-affirmations-${Date.now()}-${index}`,
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
  const liste = aFaire(manifeste);

  if (liste.length === 0) {
    console.log('Tout est déjà généré.');
    return;
  }

  const lots = [];
  for (let i = 0; i < liste.length; i += PAR_LOT) lots.push(liste.slice(i, i + PAR_LOT));
  console.log(`${liste.length} clip(s) à produire, en ${lots.length} lot(s).`);

  const travaux = [];
  for (const [i, lot] of lots.entries()) {
    process.stdout.write(`soumission ${i + 1}/${lots.length}… `);
    try {
      travaux.push({ nom: await soumettre(lot, apiKey, i), lot });
      console.log('ok');
    } catch (erreur) {
      console.log(`échec : ${erreur.message}`);
    }
  }

  let ecrits = 0;
  const echecs = [];
  for (const [i, { nom, lot }] of travaux.entries()) {
    process.stdout.write(`\nlot ${i + 1}/${travaux.length} — attente… `);
    try {
      const donnees = await attendre(nom, apiKey);
      const reponses = donnees?.response?.inlinedResponses?.inlinedResponses ?? [];
      console.log(`${reponses.length} réponse(s)`);
      for (const [j, item] of lot.entries()) {
        const partie = reponses[j]?.response?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
        if (!partie?.data) {
          echecs.push(`${item.cle} : réponse sans audio`);
          continue;
        }
        await mkdir(item.dossier, { recursive: true });
        await versMp3(Buffer.from(partie.data, 'base64'), item.chemin);
        manifeste[item.cle] = { empreinte: item.attendu, modele: MODELE };
        ecrits += 1;
      }
      await writeFile(MANIFESTE, `${JSON.stringify(manifeste, null, 2)}\n`);
    } catch (erreur) {
      echecs.push(`lot ${i + 1} : ${erreur.message}`);
      console.log(`échec : ${erreur.message}`);
    }
  }

  console.log(`\n${ecrits} fichier(s) écrit(s).`);
  if (echecs.length > 0) {
    console.log(`${echecs.length} échec(s) :`);
    for (const e of echecs.slice(0, 6)) console.log(`  - ${e}`);
    process.exitCode = 1;
  }
}

main().then(ecrireCatalogue);
