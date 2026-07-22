/**
 * Écrit `public/audio/catalogue.json` : la liste des fichiers audio à
 * télécharger pour le mode hors ligne, avec leur taille.
 *
 * Usage : npm run audio:catalogue
 *
 * Les manifestes de génération portent déjà une empreinte par fichier, mais
 * pas leur poids. Sans les tailles, la barre de progression compterait des
 * fichiers et non des octets — saccadée sur mille quatre cent cinquante-huit
 * éléments dont le plus lourd fait vingt fois le plus léger.
 *
 * L'empreinte est reprise telle quelle : c'est elle qui permettra de repérer
 * les fichiers modifiés et de ne proposer que le différentiel.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { glob } from 'node:fs/promises';

const RACINE = 'public/audio';
const DESTINATION = `${RACINE}/catalogue.json`;

async function lireManifeste(chemin) {
  if (!existsSync(chemin)) return {};
  try {
    return JSON.parse(await readFile(chemin, 'utf8'));
  } catch {
    return {};
  }
}

/** `{ empreinte, modele }` aujourd'hui, une simple chaîne dans l'ancien format. */
function empreinteDe(entree) {
  if (typeof entree === 'string') return entree;
  return entree?.empreinte ?? null;
}

const manifestes = {
  ...Object.fromEntries(
    Object.entries(await lireManifeste(`${RACINE}/manifeste.json`)).map(
      ([cle, valeur]) => [`${cle}.mp3`, empreinteDe(valeur)],
    ),
  ),
  ...Object.fromEntries(
    Object.entries(await lireManifeste(`${RACINE}/quiz/manifeste.json`)).map(
      ([cle, valeur]) => [`quiz/${cle}.mp3`, empreinteDe(valeur)],
    ),
  ),
};

const fichiers = [];
for await (const chemin of glob(`${RACINE}/**/*.mp3`)) {
  const relatif = chemin.replaceAll('\\', '/').slice(`${RACINE}/`.length);
  fichiers.push({
    chemin: `/audio/${relatif}`,
    octets: statSync(chemin).size,
    /*
      Un fichier présent sur le disque mais absent du manifeste garde une
      empreinte nulle : il sera toujours téléchargé, ce qui est le comportement
      sûr — mieux vaut un fichier de trop qu'une carte muette.
    */
    empreinte: manifestes[relatif] ?? null,
  });
}

fichiers.sort((a, b) => a.chemin.localeCompare(b.chemin));

const total = fichiers.reduce((n, f) => n + f.octets, 0);
await writeFile(
  DESTINATION,
  `${JSON.stringify({ fichiers, octets: total }, null, 2)}\n`,
);

const mo = (total / 1024 / 1024).toFixed(0);
const sansEmpreinte = fichiers.filter((f) => f.empreinte === null).length;
console.log(`${fichiers.length} fichier(s), ${mo} Mo — ${DESTINATION}`);
if (sansEmpreinte > 0) {
  console.log(`  ${sansEmpreinte} sans empreinte au manifeste (toujours retéléchargés).`);
}
