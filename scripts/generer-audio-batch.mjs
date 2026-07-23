/**
 * Génère l'audio manquant via l'API Batch de Gemini.
 *
 * Usage : npm run audio:batch
 *
 * L'API interactive est limitée à quelques dizaines de requêtes par jour et
 * par modèle, indépendamment du budget. L'API Batch dispose de son propre
 * quota : elle accepte des travaux sur le modèle principal alors même que
 * l'appel interactif renvoie 429. Elle est aussi moitié moins chère.
 *
 * Contrepartie : le traitement est asynchrone. On soumet des lots, puis on
 * attend. Ce qui convient parfaitement ici — personne n'attend ces fichiers
 * en temps réel.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { cards } from '../content/cards/index.ts';
import { AGE_RANGES } from '../lib/types.ts';
import { BASE_API as BASE, CONSIGNES_CARTES as CONSIGNES, VOIX, cle, versMp3 } from './lib/audio.mjs';
import { ecrireCatalogue } from './catalogue-audio.mjs';

const MODELE = 'gemini-3.1-flash-tts-preview';
const RACINE = 'public/audio';
const MANIFESTE = `${RACINE}/manifeste.json`;

/**
 * Taille d'un lot. Les réponses arrivent en ligne, audio compris : un lot trop
 * gros produirait une réponse de plusieurs dizaines de mégaoctets.
 */
const PAR_LOT = 40;
const INTERVALLE_SONDAGE_MS = 20000;

function empreinte(texte, age) {
  return createHash('sha256')
    .update(`${VOIX}|${CONSIGNES[age]}|${texte}`)
    .digest('hex')
    .slice(0, 16);
}

function lireEntree(valeur) {
  if (typeof valeur === 'string') return { empreinte: valeur, modele: null };
  return valeur ?? { empreinte: null, modele: null };
}

async function lireManifeste() {
  if (!existsSync(MANIFESTE)) return {};
  try {
    return JSON.parse(await readFile(MANIFESTE, 'utf8'));
  } catch {
    return {};
  }
}

/** Beats dont le fichier manque ou dont le texte a changé. */
async function aFaire(manifeste) {
  const liste = [];
  for (const carte of cards) {
    for (const age of AGE_RANGES) {
      for (const beat of carte.content.fr.explanation[age].beats) {
        const chemin = `${RACINE}/${carte.id}/${age}/${beat.id}.mp3`;
        const attendu = empreinte(beat.text, age);
        const entree = lireEntree(manifeste[`${carte.id}/${age}/${beat.id}`]);
        if (entree.empreinte === attendu && existsSync(chemin)) continue;
        liste.push({
          cle: `${carte.id}/${age}/${beat.id}`,
          dossier: `${RACINE}/${carte.id}/${age}`,
          chemin,
          texte: beat.text,
          age,
          attendu,
        });
      }
    }
  }
  return liste;
}

async function soumettre(lot, apiKey, index) {
  const requests = lot.map((item) => ({
    request: {
      contents: [{ parts: [{ text: CONSIGNES[item.age] + item.texte }] }],
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: VOIX } },
        },
      },
    },
  }));

  const reponse = await fetch(`${BASE}/models/${MODELE}:batchGenerateContent`, {
    method: 'POST',
    headers: { 'x-goog-api-key': apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      batch: {
        displayName: `hublot-${Date.now()}-${index}`,
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
    const reponse = await fetch(`${BASE}/${nom}`, {
      headers: { 'x-goog-api-key': apiKey },
    });
    const donnees = await reponse.json();
    const etat = donnees?.metadata?.state;

    if (etat === 'BATCH_STATE_SUCCEEDED') return donnees;
    if (etat === 'BATCH_STATE_FAILED' || etat === 'BATCH_STATE_CANCELLED') {
      throw new Error(`lot ${etat}`);
    }
    await new Promise((r) => setTimeout(r, INTERVALLE_SONDAGE_MS));
  }
}

async function main() {
  const apiKey = cle();
  const manifeste = await lireManifeste();
  const liste = await aFaire(manifeste);

  if (liste.length === 0) {
    console.log('Tout est déjà généré.');
    return;
  }

  const lots = [];
  for (let i = 0; i < liste.length; i += PAR_LOT) {
    lots.push(liste.slice(i, i + PAR_LOT));
  }
  console.log(`${liste.length} fichier(s) à produire, en ${lots.length} lot(s).`);

  /*
    Tous les lots sont soumis d'abord, puis récupérés. Les attendre un par un
    multiplierait le temps total par le nombre de lots.
  */
  const travaux = [];
  for (const [i, lot] of lots.entries()) {
    process.stdout.write(`soumission du lot ${i + 1}/${lots.length}… `);
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
        const partie =
          reponses[j]?.response?.candidates?.[0]?.content?.parts?.[0]?.inlineData;
        if (!partie?.data) {
          echecs.push(`${item.cle} : réponse sans audio`);
          continue;
        }
        await mkdir(item.dossier, { recursive: true });
        await versMp3(Buffer.from(partie.data, 'base64'), item.chemin);
        manifeste[item.cle] = { empreinte: item.attendu, modele: MODELE };
        ecrits += 1;
      }
      // Sauvegarde après chaque lot : une interruption ne perd rien.
      await writeFile(MANIFESTE, `${JSON.stringify(manifeste, null, 2)}\n`);
    } catch (erreur) {
      echecs.push(`lot ${i + 1} : ${erreur.message}`);
      console.log(`échec : ${erreur.message}`);
    }
  }

  console.log(`\n${ecrits} fichier(s) écrit(s) via ${MODELE}.`);
  if (echecs.length > 0) {
    console.log(`${echecs.length} échec(s) :`);
    for (const e of echecs.slice(0, 8)) console.log(`  - ${e}`);
    process.exitCode = 1;
  }
}

// Régénère le catalogue hors-ligne à la suite, même après un lot partiel.
main().then(ecrireCatalogue);
