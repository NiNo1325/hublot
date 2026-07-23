/**
 * Génère l'audio des questions de quizz, via l'API Batch.
 *
 * Usage : npm run audio:quiz
 *
 * Deux fichiers par question : l'énoncé et l'explication donnée après la
 * réponse. Pour les 3-5 ans, l'énoncé intègre la lecture des propositions —
 * un non-lecteur qui n'entend pas les réponses ne peut pas choisir, et le mode
 * lui resterait fermé.
 */
import { writeFile, readFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { quizCartes } from '../content/quiz/index.ts';
import { ordreLecture } from '../content/quiz/ordre.ts';
import { VERDICTS, cheminVerdict } from '../content/quiz/verdicts.ts';
import { AGE_RANGES } from '../lib/types.ts';
import { BASE_API as BASE, VOIX, cle, versMp3 } from './lib/audio.mjs';
import { ecrireCatalogue } from './catalogue-audio.mjs';

const MODELE = 'gemini-3.1-flash-tts-preview';
const RACINE = 'public/audio/quiz';
const MANIFESTE = `${RACINE}/manifeste.json`;
const PAR_LOT = 40;
const SONDAGE_MS = 20000;

const CONSIGNES = {
  '3-5':
    "Lis cette question à un enfant de quatre ans, lentement, d'une voix douce " +
    'et encourageante. Marque une nette pause avant chaque proposition :\n\n',
  '6-8':
    "Pose cette question à un enfant de sept ans, d'une voix chaleureuse et " +
    'joueuse, sans précipitation :\n\n',
  '9-12':
    "Pose cette question à un enfant de onze ans, d'un ton naturel et complice, " +
    'débit normal :\n\n',
};

/**
 * Texte réellement prononcé pour l'énoncé.
 *
 * Les propositions ne sont énoncées que pour les non-lecteurs : à partir de
 * six ans, les entendre après les avoir lues alourdirait inutilement.
 *
 * Point crucial : aucune étiquette de position (« première réponse ») n'est
 * prononcée. L'affichage mélange les propositions ; une position annoncée par
 * l'audio la contredirait — c'est exactement le bug corrigé ici. L'enfant
 * associe ce qu'il entend à l'icône de la réponse, pas à un rang.
 */
function texteEnonce(question, age) {
  if (age !== '3-5') return question.question;
  const propositions = ordreLecture(question)
    .map((r) => r.texte)
    .join(' ? Ou bien : ');
  return `${question.question} Est-ce que : ${propositions} ?`;
}

function empreinte(texte, age) {
  return createHash('sha256')
    .update(`${VOIX}|${CONSIGNES[age]}|${texte}`)
    .digest('hex')
    .slice(0, 16);
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
  for (const carte of quizCartes) {
    for (const age of AGE_RANGES) {
      for (const question of carte.questions[age]) {
        const dossier = `${RACINE}/${carte.cardId}/${age}`;
        const morceaux = [
          { suffixe: 'question', texte: texteEnonce(question, age) },
          { suffixe: 'explication', texte: question.explication },
        ];
        for (const { suffixe, texte } of morceaux) {
          const chemin = `${dossier}/${question.id}-${suffixe}.mp3`;
          const cleM = `${carte.cardId}/${age}/${question.id}-${suffixe}`;
          const attendu = empreinte(texte, age);
          if (manifeste[cleM]?.empreinte === attendu && existsSync(chemin)) continue;
          liste.push({ cle: cleM, dossier, chemin, texte, age, attendu });
        }
      }
    }
  }

  /*
    Les verdicts sont génériques et non rattachés à une carte : sans eux, un
    non-lecteur n'apprend jamais s'il a trouvé, le « Bravo » n'existant qu'à
    l'écran.
  */
  for (const age of AGE_RANGES) {
    for (const verdict of ['juste', 'presque']) {
      VERDICTS[age][verdict].forEach((texte, rang) => {
        const cleM = cheminVerdict(age, verdict, rang);
        const chemin = `${RACINE}/${cleM}.mp3`;
        const dossier = chemin.slice(0, chemin.lastIndexOf('/'));
        const attendu = empreinte(texte, age);
        if (manifeste[cleM]?.empreinte === attendu && existsSync(chemin)) return;
        liste.push({ cle: cleM, dossier, chemin, texte, age, attendu });
      });
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
        displayName: `hublot-quiz-${Date.now()}-${index}`,
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

// Régénère le catalogue hors-ligne à la suite, même après un lot partiel.
main().then(ecrireCatalogue);
