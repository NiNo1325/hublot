/**
 * Génère l'audio des fiches du Wall of Fame, via l'API Batch.
 *
 * Usage : npm run audio:savants [langue]   (fr par défaut)
 *
 * Deux fichiers par savant et par âge — l'apport, puis l'anecdote — que la
 * fiche enchaîne d'un seul bouton, plus un clip du seul nom, hors âge, que le
 * Mémo des savants prononce quand une paire tombe. Le découpage en deux permet de rejouer la
 * seule anecdote plus tard sans regénérer le reste, et surtout d'entendre une
 * pause franche entre les deux : ce sont deux idées, pas une phrase longue.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { savants } from '../content/savants.ts';
import { AGE_RANGES } from '../lib/types.ts';
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

/*
  La consigne est écrite dans la langue qu'elle fait lire (cf. lib/audio.mjs).
  Raconter la vie de quelqu'un ne se lit pas comme expliquer un phénomène : le
  ton est celui de l'histoire du soir, pas celui du documentaire.
*/
const TOUTES_CONSIGNES = {
  fr: {
    '3-5':
      "Raconte cela à un enfant de quatre ans, comme une petite histoire vraie. " +
      "Parle lentement, d'une voix douce et étonnée, en marquant de nettes " +
      'pauses entre les phrases :\n\n',
    '6-8':
      "Raconte cela à un enfant de sept ans, d'une voix chaleureuse, comme on " +
      "raconte l'histoire de quelqu'un qu'on admire. Parle posément :\n\n",
    '9-12':
      "Raconte cela à un enfant de onze ans, d'un ton naturel et complice, " +
      "comme on parle d'une personne dont l'histoire vaut la peine. Débit " +
      'normal :\n\n',
  },
  en: {
    '3-5':
      'Tell this to a four-year-old child, in English with a British accent, ' +
      'like a little true story. Speak slowly, in a gentle and surprised ' +
      'voice, with clear pauses between sentences:\n\n',
    '6-8':
      'Tell this to a seven-year-old child, in English with a British accent, ' +
      'in a warm voice, the way you tell the story of someone you admire. ' +
      'Speak calmly:\n\n',
    '9-12':
      'Tell this to an eleven-year-old child, in English with a British ' +
      'accent, in a natural, companionable tone, the way you speak about ' +
      'someone whose story is worth hearing. Normal pace:\n\n',
  },
};
const CONSIGNES = TOUTES_CONSIGNES[LOCALE];

/*
  Le nom seul. Une consigne de récit ferait broder le modèle autour du nom ;
  celle-ci demande exactement ce qu'on veut entendre, et rien de plus.
*/
const CONSIGNES_NOM = {
  fr: 'Prononce ce nom de personne, clairement et gaiement, sans rien ajouter :\n\n',
  en:
    'Say this person’s name in English, in a British accent, clearly and ' +
    'cheerfully, adding nothing else:\n\n',
};
const CONSIGNE_NOM = CONSIGNES_NOM[LOCALE];

function empreinte(texte, consigne) {
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
  for (const savant of savants) {
    for (const age of AGE_RANGES) {
      const consigne = CONSIGNES[age];
      for (const partie of ['apport', 'anecdote']) {
        const texte = savant[partie][LOCALE]?.[age];
        if (!texte) continue;
        const cleM = `${savant.id}/${age}/${partie}`;
        const chemin = `${RACINE}/${savant.id}/${age}/${partie}.mp3`;
        const attendu = empreinte(texte, consigne);
        if (manifeste[cleM]?.empreinte === attendu && existsSync(chemin)) continue;
        liste.push({
          cle: cleM,
          dossier: `${RACINE}/${savant.id}/${age}`,
          chemin,
          texte,
          consigne,
          attendu,
        });
      }
    }

    // Le nom ne dépend pas de l'âge : un seul clip, à la racine du savant.
    const cleNom = `${savant.id}/nom`;
    const cheminNom = `${RACINE}/${savant.id}/nom.mp3`;
    const attenduNom = empreinte(savant.nom, CONSIGNE_NOM);
    if (manifeste[cleNom]?.empreinte !== attenduNom || !existsSync(cheminNom)) {
      liste.push({
        cle: cleNom,
        dossier: `${RACINE}/${savant.id}`,
        chemin: cheminNom,
        texte: savant.nom,
        consigne: CONSIGNE_NOM,
        attendu: attenduNom,
      });
    }
  }
  return liste;
}

async function soumettre(lot, apiKey, index) {
  const requests = lot.map((item) => ({
    request: {
      contents: [{ parts: [{ text: item.consigne + item.texte }] }],
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
        displayName: `hublot-savants-${Date.now()}-${index}`,
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
  console.log(`${liste.length} fichier(s) à produire, en ${lots.length} lot(s).`);

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
