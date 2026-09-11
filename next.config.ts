import type { NextConfig } from 'next';
import { execSync } from 'node:child_process';

/**
 * Version du build, affichée en tout petit dans Réglages : date + hash du commit
 * déployé, pour savoir sans ambiguïté quelle version tourne. Sur Vercel, le
 * commit vient de `VERCEL_GIT_COMMIT_SHA` ; en local, on lit git ; à défaut,
 * « local ». Calculée au build, inlinée côté client via `NEXT_PUBLIC_BUILD`.
 */
function versionBuild(): string {
  let sha = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? '';
  if (!sha) {
    try {
      sha = execSync('git rev-parse --short HEAD').toString().trim();
    } catch {
      sha = 'local';
    }
  }
  const date = new Date().toISOString().slice(0, 10);
  return `${date} · ${sha}`;
}

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BUILD: versionBuild(),
  },
  /*
    Les anciennes adresses continuent de mener quelque part. L'application
    s'installe sur l'écran d'accueil, et un raccourci posé sur /quizz y reste
    pointé bien après le regroupement des onglets : le laisser tomber sur une
    404 casserait l'app pour qui l'avait rangée là.
  */
  async redirects() {
    return [{ source: '/quizz', destination: '/joue/quizz', permanent: true }];
  },

  /*
    L'audio est servi depuis un stockage objet, mais sous une URL de ce domaine.

    Les 639 Mo de mp3 faisaient 99 % du poids de chaque déploiement, et Vercel
    conserve chaque déploiement : cent cinquante poussées plus tard, le quota de
    stockage était plein. C'est du contenu généré, reproductible depuis
    `content/` et les scripts — il n'a pas plus sa place dans le dépôt que
    `node_modules`.

    Réécriture et non URL directe : le service worker refuse tout ce qui n'est
    pas de même origine (`public/sw.js`), si bien qu'une adresse externe le
    ferait sortir de son champ et emporterait avec elle la mise en cache à
    l'écoute **et** le téléchargement hors ligne — la fonction même qui fait
    l'intérêt de l'application en voiture. Ici, le navigateur continue de voir
    `/audio/…` : ni le worker, ni `cheminAudio`, ni le téléchargeur ne changent
    d'une ligne.

    Le repli est gratuit : une réécriture rendue sous forme de tableau est
    consultée **après** le système de fichiers. Tant que `public/audio` est
    déployé, il gagne et cette règle dort ; c'est `.vercelignore` qui l'active,
    et le retirer suffit à revenir en arrière.
  */
  async rewrites() {
    const base = process.env.NEXT_PUBLIC_AUDIO_BASE;
    if (!base) return [];
    return [{ source: '/audio/:chemin*', destination: `${base}/:chemin*` }];
  },
};

export default nextConfig;
