/**
 * Envoie `public/audio` vers le bucket R2, et n'y renvoie que ce qui a changé.
 *
 * Usage : npm run audio:envoyer
 *
 * Pourquoi ce script existe : les 639 Mo de mp3 représentaient 99 % de ce que
 * pesait chaque déploiement, et Vercel conserve chaque déploiement. Cent
 * cinquante déploiements plus tard, le quota de stockage était plein. L'audio
 * est du contenu **généré** — reproductible à partir de `content/` et des
 * scripts de génération — et n'a donc pas plus sa place dans le dépôt que
 * `node_modules`. Il vit maintenant dans un stockage objet, et `next.config.ts`
 * y renvoie `/audio/*` par réécriture : côté navigateur, rien ne change, et le
 * service worker continue de voir des URL de même origine.
 *
 * Les identifiants viennent de l'environnement, jamais du dépôt :
 *
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY
 *   R2_BUCKET (facultatif, « hublot-audio » par défaut)
 *
 * La comparaison se fait sur l'empreinte MD5, que R2 renvoie comme ETag pour
 * tout objet déposé d'un seul tenant. Comparer les tailles aurait suffi la
 * plupart du temps — et laissé passer, un jour, un mp3 régénéré de longueur
 * identique, c'est-à-dire exactement le cas qu'on ne verrait jamais.
 */
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { AwsClient } from 'aws4fetch';

const RACINE = 'public/audio';
const BUCKET = process.env.R2_BUCKET ?? 'hublot-audio';
const CONCURRENCE = 12;

/*
  Le catalogue pilote le téléchargement hors ligne : servi périmé, il annonce
  des fichiers qui n'existent plus ou en oublie de nouveaux. Il doit donc être
  revalidé à chaque fois. Les mp3, eux, changent rarement et le service worker
  force de toute façon le réseau sur les mises à jour (`?maj`) : une heure de
  fraîcheur suffit largement, et épargne autant d'allers-retours.
*/
function entetes(cle) {
  if (cle.endsWith('.json')) {
    return { type: 'application/json', cache: 'public, max-age=0, must-revalidate' };
  }
  return { type: 'audio/mpeg', cache: 'public, max-age=3600' };
}

function exigerEnv(nom, forme = null) {
  const valeur = process.env[nom]?.trim();
  if (!valeur) {
    console.error(`${nom} absente. Ajoute-la dans .env.local.`);
    process.exit(1);
  }
  /*
    L'écran de création du jeton R2 affiche quatre valeurs les unes sous les
    autres : le « Token value » (préfixé `cfat_`), la clé d'accès, le secret et
    l'endpoint S3. Recopier le jeton dans `R2_ACCOUNT_ID` est l'erreur naturelle
    — et elle ne se manifeste que par un `fetch failed` au premier appel, parce
    que `https://cfat_….r2.cloudflarestorage.com` n'existe pas. Autant le dire.
  */
  if (forme && !forme.test(valeur)) {
    console.error(`${nom} ne ressemble pas à ce qu'on attend : « ${valeur.slice(0, 8)}… »`);
    if (valeur.startsWith('cfat_')) {
      console.error("C'est le « Token value » de Cloudflare, pas l'identifiant de compte.");
    }
    console.error(
      "L'identifiant de compte fait 32 caractères hexadécimaux ; on le lit dans " +
        "l'endpoint S3 (https://<compte>.r2.cloudflarestorage.com) ou dans l'URL du dashboard.",
    );
    process.exit(1);
  }
  return valeur;
}

/** Tous les fichiers sous `racine`, en chemins relatifs à séparateurs POSIX. */
async function lister(racine, prefixe = '') {
  const entrees = await readdir(join(racine, prefixe), { withFileTypes: true });
  const fichiers = [];
  for (const e of entrees) {
    const chemin = prefixe ? `${prefixe}/${e.name}` : e.name;
    if (e.isDirectory()) fichiers.push(...(await lister(racine, chemin)));
    else fichiers.push(chemin);
  }
  return fichiers;
}

/**
 * Les objets déjà en place, avec leur ETag.
 *
 * `ListObjectsV2` rend mille clés par appel ; on suit le jeton de continuation
 * jusqu'au bout. L'XML est lu à l'expression régulière plutôt qu'avec un
 * analyseur : la réponse est plate, connue, et produite par un seul émetteur.
 */
async function distants(client, base) {
  const objets = new Map();
  let jeton = null;
  do {
    const url = new URL(base);
    url.searchParams.set('list-type', '2');
    url.searchParams.set('max-keys', '1000');
    if (jeton) url.searchParams.set('continuation-token', jeton);

    const reponse = await client.fetch(url.toString());
    if (!reponse.ok) {
      throw new Error(`liste refusée (${reponse.status}) — ${(await reponse.text()).slice(0, 200)}`);
    }
    const xml = await reponse.text();
    for (const bloc of xml.matchAll(/<Contents>([\s\S]*?)<\/Contents>/g)) {
      const cle = bloc[1].match(/<Key>([\s\S]*?)<\/Key>/)?.[1];
      /*
        L'ETag arrive entre guillemets, et ces guillemets sont échappés en XML :
        `<ETag>&quot;1a3c…&quot;</ETag>`. Les chercher tels quels laissait
        l'empreinte sale, aucune comparaison ne tombait juste, et le script
        renvoyait consciencieusement les 639 Mo à chaque passage — sans jamais
        se plaindre, puisque tout « réussissait ».
      */
      const etag = bloc[1]
        .match(/<ETag>([\s\S]*?)<\/ETag>/)?.[1]
        ?.replaceAll('&quot;', '')
        .replaceAll('"', '')
        .trim();
      if (cle) objets.set(cle, etag ?? null);
    }
    jeton = xml.match(/<NextContinuationToken>([\s\S]*?)<\/NextContinuationToken>/)?.[1] ?? null;
  } while (jeton);
  return objets;
}

async function main() {
  const compte = exigerEnv('R2_ACCOUNT_ID', /^[0-9a-f]{32}$/);
  const client = new AwsClient({
    accessKeyId: exigerEnv('R2_ACCESS_KEY_ID'),
    secretAccessKey: exigerEnv('R2_SECRET_ACCESS_KEY'),
    service: 's3',
    region: 'auto',
  });
  const base = `https://${compte}.r2.cloudflarestorage.com/${BUCKET}`;

  process.stdout.write('inventaire du bucket… ');
  const dejaLa = await distants(client, base);
  console.log(`${dejaLa.size} objet(s)`);

  const locaux = await lister(RACINE);
  console.log(`${locaux.length} fichier(s) sur le disque.`);

  const aEnvoyer = [];
  let octets = 0;
  for (const cle of locaux) {
    const chemin = join(RACINE, ...cle.split('/'));
    const contenu = await readFile(chemin);
    const md5 = createHash('md5').update(contenu).digest('hex');
    if (dejaLa.get(cle) === md5) continue;
    aEnvoyer.push({ cle, chemin, taille: contenu.length });
    octets += contenu.length;
  }

  const enTrop = [...dejaLa.keys()].filter((c) => !locaux.includes(c));
  if (enTrop.length > 0) {
    console.log(`${enTrop.length} objet(s) présent(s) dans le bucket et absent(s) du disque.`);
    console.log('  (ce script n’efface rien : à supprimer à la main si besoin)');
  }

  if (aEnvoyer.length === 0) {
    console.log('Tout est déjà à jour.');
    return;
  }
  console.log(`${aEnvoyer.length} fichier(s) à envoyer, ${(octets / 1048576).toFixed(0)} Mo.`);

  let faits = 0;
  const echecs = [];
  const file = [...aEnvoyer];

  async function ouvrier() {
    for (;;) {
      const item = file.shift();
      if (!item) return;
      const { type, cache } = entetes(item.cle);
      try {
        const reponse = await client.fetch(`${base}/${item.cle}`, {
          method: 'PUT',
          body: await readFile(item.chemin),
          headers: { 'content-type': type, 'cache-control': cache },
        });
        if (!reponse.ok) throw new Error(`${reponse.status}`);
        faits += 1;
        if (faits % 200 === 0 || faits === aEnvoyer.length) {
          console.log(`  ${faits}/${aEnvoyer.length}`);
        }
      } catch (erreur) {
        echecs.push(`${item.cle} : ${erreur.message}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCE }, ouvrier));

  console.log(`\n${faits} fichier(s) envoyé(s).`);
  if (echecs.length > 0) {
    console.log(`${echecs.length} échec(s) :`);
    for (const e of echecs.slice(0, 8)) console.log(`  - ${e}`);
    console.log('Relance le script : il ne renverra que ce qui manque.');
    process.exitCode = 1;
  }
}

main().catch((erreur) => {
  console.error(erreur.message);
  process.exitCode = 1;
});
