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
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { cards } from '../content/cards/index.ts';
import { AGE_RANGES } from '../lib/types.ts';
import {
  BASE_API,
  CONSIGNES_CARTES as CONSIGNES,
  VOIX,
  cle,
  versMp3,
} from './lib/audio.mjs';
import { ecrireCatalogue } from './catalogue-audio.mjs';

/*
  Modèles par ordre de préférence. Le quota est compté séparément pour chacun :
  quand le premier sature, on bascule sur le suivant plutôt que d'attendre le
  lendemain. Le 2.5-flash est volontairement exclu — son timbre s'éloigne trop
  du modèle principal, alors que le 2.5-pro en reste proche à l'écoute.
*/
const MODELES = [
  'gemini-3.1-flash-tts-preview',
  'gemini-2.5-pro-preview-tts',
];
const MODELE_PREFERE = MODELES[0];
const RACINE = 'public/audio';
const MANIFESTE = `${RACINE}/manifeste.json`;

/*
  L'empreinte ne couvre que ce qui change le contenu parlé : texte, voix et
  consigne. Le modèle en est délibérément exclu — sinon un fichier produit en
  repli serait régénéré à chaque passage, et le quota y passerait en boucle.
  Le modèle réellement utilisé est mémorisé à côté, ce qui permet de
  ré-homogénéiser plus tard sans tout refaire.
*/
function empreinte(texte, age) {
  return createHash('sha256')
    .update(`${VOIX}|${CONSIGNES[age]}|${texte}`)
    .digest('hex')
    .slice(0, 16);
}

/** Accepte l'ancien format (chaîne) et le nouveau ({ empreinte, modele }). */
function lireEntree(valeur) {
  if (typeof valeur === 'string') return { empreinte: valeur, modele: null };
  return valeur ?? { empreinte: null, modele: null };
}

/** Erreur distinguée du reste : elle seule justifie de changer de modèle. */
class QuotaEpuise extends Error {}

async function synthetiser(texte, age, apiKey, modele) {
  const reponse = await fetch(
    `${BASE_API}/models/${modele}:generateContent`,
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
    const detail = (await reponse.text()).slice(0, 200);
    if (reponse.status === 429) throw new QuotaEpuise(detail);
    throw new Error(`${reponse.status} — ${detail}`);
  }

  const donnees = await reponse.json();
  const base64 = donnees?.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!base64) throw new Error('réponse sans données audio');
  return Buffer.from(base64, 'base64');
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

  /* Modèles déjà saturés : inutile de les réessayer à chaque beat. */
  const epuises = new Set();
  const parModele = {};
  let inchanges = 0;
  const echecs = [];

  /**
   * Essaie les modèles dans l'ordre de préférence et renvoie le premier qui
   * répond. Un quota épuisé fait passer au suivant ; toute autre erreur est
   * propre au beat et ne doit pas disqualifier le modèle.
   */
  async function synthetiserAvecRepli(texte, age) {
    let derniere = null;
    for (const modele of MODELES) {
      if (epuises.has(modele)) continue;
      try {
        return { pcm: await synthetiser(texte, age, apiKey, modele), modele };
      } catch (erreur) {
        if (erreur instanceof QuotaEpuise) {
          epuises.add(modele);
          console.log(`\n  [quota épuisé sur ${modele}, bascule]`);
          derniere = erreur;
          continue;
        }
        throw erreur;
      }
    }
    throw derniere ?? new Error('aucun modèle disponible');
  }

  for (const carte of cards) {
    for (const age of AGE_RANGES) {
      const dossier = `${RACINE}/${carte.id}/${age}`;
      await mkdir(dossier, { recursive: true });

      for (const beat of carte.content.fr.explanation[age].beats) {
        const chemin = `${dossier}/${beat.id}.mp3`;
        const cleManifeste = `${carte.id}/${age}/${beat.id}`;
        const attendu = empreinte(beat.text, age);
        const entree = lireEntree(manifeste[cleManifeste]);

        if (entree.empreinte === attendu && existsSync(chemin)) {
          inchanges += 1;
          continue;
        }

        process.stdout.write(`${cleManifeste}… `);
        try {
          const { pcm, modele } = await synthetiserAvecRepli(beat.text, age);
          await versMp3(pcm, chemin);
          manifeste[cleManifeste] = { empreinte: attendu, modele };
          parModele[modele] = (parModele[modele] ?? 0) + 1;
          console.log(modele === MODELE_PREFERE ? 'ok' : `ok (${modele})`);
        } catch (erreur) {
          echecs.push(`${cleManifeste} : ${erreur.message}`);
          console.log('échec');
          // Tous les modèles saturés : inutile de poursuivre la boucle.
          if (epuises.size === MODELES.length) {
            console.log('\nTous les modèles ont atteint leur quota. Reprends demain.');
            await writeFile(MANIFESTE, `${JSON.stringify(manifeste, null, 2)}\n`);
            resumer(parModele, inchanges, echecs);
            return;
          }
        }
      }
    }
  }

  // Écrit même en cas d'échec partiel : les fichiers réussis ne seront pas
  // regénérés au prochain passage.
  await writeFile(MANIFESTE, `${JSON.stringify(manifeste, null, 2)}\n`);
  resumer(parModele, inchanges, echecs);
}

function resumer(parModele, inchanges, echecs) {
  const total = Object.values(parModele).reduce((a, b) => a + b, 0);
  console.log(`\n${total} généré(s), ${inchanges} inchangé(s).`);
  for (const [modele, n] of Object.entries(parModele)) {
    console.log(`  ${n} via ${modele}`);
  }
  if (echecs.length > 0) {
    console.log(`\n${echecs.length} échec(s) :`);
    for (const e of echecs.slice(0, 5)) console.log(`  - ${e}`);
    if (echecs.length > 5) console.log(`  … et ${echecs.length - 5} autres`);
    process.exitCode = 1;
  }
}

// Le catalogue hors-ligne est régénéré à la suite, même après une génération
// partielle : il scanne le disque, donc il reflète toujours l'état réel.
main().then(ecrireCatalogue);
