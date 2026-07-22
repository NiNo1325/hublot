/**
 * Ce que les quatre générateurs audio ont en commun.
 *
 * Ces fonctions vivaient jusqu'ici en autant de copies, et cette duplication a
 * fini par coûter : le correctif de l'échec de nettoyage n'avait été appliqué
 * qu'à l'une d'elles, si bien que les autres continuaient de compter en échec
 * des beats dont le mp3 était pourtant écrit — et de les régénérer, sur un
 * quota qui est justement la ressource rare.
 */
import { writeFile, rm } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);

/** Voix retenue à l'écoute parmi les candidates, cf. `npm run voix:echantillons`. */
export const VOIX = 'Callirrhoe';

export const BASE_API = 'https://generativelanguage.googleapis.com/v1beta';

/**
 * Consignes de lecture des cartes. Le style se pilote en langage naturel, et
 * le registre change avec l'âge : un enfant de quatre ans a besoin de lenteur
 * et d'expressivité, un de onze ans d'un ton posé qui ne le prenne pas de
 * haut.
 *
 * Le quizz a les siennes, délibérément distinctes : poser une question ne se
 * lit pas comme raconter.
 */
export const CONSIGNES_CARTES = {
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

/** La clé ne sert qu'à la génération locale : elle n'est jamais déployée. */
export function cle() {
  const valeur = process.env.GEMINI_API_KEY;
  if (!valeur) {
    console.error('GEMINI_API_KEY absente. Ajoute-la dans .env.local.');
    process.exit(1);
  }
  return valeur.trim();
}

/**
 * Le modèle renvoie du PCM brut 24 kHz mono. 64 kbit/s suffit largement pour
 * une voix seule et allège nettement le catalogue.
 */
export async function versMp3(pcm, destination) {
  const temporaire = `${destination}.pcm`;
  await writeFile(temporaire, pcm);
  await execFileAsync('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-f', 's16le', '-ar', '24000', '-ac', '1',
    '-i', temporaire,
    '-b:a', '64k',
    destination,
  ]);
  /*
    Le mp3 est écrit à ce stade. Le fichier temporaire, lui, peut rester
    verrouillé un instant — synchronisation Dropbox, antivirus — et lever
    EBUSY. Faire échouer le beat pour cela reviendrait à jeter un fichier
    valide et à le régénérer au prochain passage, en pure perte de quota.
  */
  await rm(temporaire, { force: true }).catch(() => {});
}
