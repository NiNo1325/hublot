/**
 * Génère l'audio des explications d'un savant — ce qu'il a fait sur chacune de
 * ses cartes — via l'API Batch.
 *
 * Usage : npm run audio:liens [-- en]
 *
 * Un fichier par lien (public/audio/savants/<savant>/liens/<carte>.mp3), lu par
 * le bouton d'écoute de sa fiche et par le jeu des liens. Cent cinquante textes,
 * autant que de cartes, puisque chaque carte n'a qu'un savant.
 *
 * Le texte est pris dans la langue demandée. Il ne l'était pas : la version
 * anglaise partait du français, que le modèle traduisait au vol — la voix disait
 * donc autre chose que l'écran, et personne ne pouvait relire ce qu'elle avait
 * improvisé.
 *
 * Un manifeste évite de régénérer un texte inchangé : l'empreinte couvre la
 * voix, la consigne et le texte, si bien qu'un mot changé dans la consigne
 * referait les cent cinquante — c'est voulu, et c'est pourquoi on ne la retouche
 * pas à la légère.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { savantsPrisonniers } from '../content/savants-cartes.ts';
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
const RACINE = racineAudio(LOCALE, 'savants');
const MANIFESTE = `${RACINE}/manifeste.json`;
const PAR_LOT = 40;
const SONDAGE_MS = 20000;

/* La consigne est écrite dans la langue qu'elle fait lire (cf. lib/audio.mjs). */
const CONSIGNES = {
  fr:
    "Tu es Lumi, la petite mascotte de l'application. Dis cette phrase à un enfant, " +
    "d'une voix douce, chaleureuse et enjouée, comme si tu te présentais à lui :\n\n",
  en:
    'You are Lumi, the little mascot of the app. Say this sentence to a child, ' +
    'in English with a British accent, in a gentle, warm and playful voice, as ' +
    'if you were introducing yourself to them:\n\n',
};
const CONSIGNE = CONSIGNES[LOCALE];

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
  for (const savant of savantsPrisonniers) {
    for (const carte of savant.cartes) {
      const cleLien = `${savant.id}/liens/${carte.id}`;
      const dossier = `${RACINE}/${savant.id}/liens`;
      const chemin = `${dossier}/${carte.id}.mp3`;
      const texte = carte.lien[LOCALE] ?? carte.lien.fr;
      const attendu = empreinte(texte);
      if (manifeste[cleLien]?.empreinte === attendu && existsSync(chemin)) continue;
      liste.push({ cle: cleLien, chemin, dossier, texte, attendu });
    }
  }
  return liste;
}

async function soumettre(lot, apiKey, index) {
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
        displayName: `hublot-liens-${Date.now()}-${index}`,
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
  console.log(`${liste.length} explication(s) à produire, en ${lots.length} lot(s).`);

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
