/**
 * Envoie une notification push à tous les abonnés, via l'endpoint protégé
 * `/api/push/send`. À lancer quand on publie du contenu ou une nouvelle version.
 *
 * Usage :
 *   npm run push -- --cartes "Le son" --n 10     # nouvelles cartes
 *   npm run push -- --maj                          # mise à jour de l'app
 *   npm run push -- --titre "…" --corps "…" --url "/decouvrir"   # message libre
 *   ajouter --local pour viser http://localhost:3000 au lieu de la prod.
 *
 * Le secret est lu dans la variable d'env `PUSH_ADMIN_SECRET` (via --env-file).
 */
const args = process.argv.slice(2);

function opt(nom) {
  const i = args.indexOf(`--${nom}`);
  return i !== -1 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : null;
}
const drapeau = (nom) => args.includes(`--${nom}`);

const base = drapeau('local') ? 'http://localhost:3000' : 'https://hublot-ruby.vercel.app';
const secret = process.env.PUSH_ADMIN_SECRET;

if (!secret) {
  console.error('PUSH_ADMIN_SECRET manquant (attendu dans .env.local).');
  process.exit(1);
}

let message;
if (drapeau('maj')) {
  message = {
    titre: 'Mise à jour disponible ⬆️',
    corps: 'Une nouvelle version de Hublot est prête. Mets l’application à jour.',
    url: '/',
    icon: '/icones/notif-maj.png',
  };
} else if (opt('cartes')) {
  const monde = opt('cartes');
  const n = Number(opt('n') || 0);
  message = {
    titre: 'Nouvelles cartes 🎉',
    corps: n > 0 ? `${n} nouvelles cartes dans ${monde} !` : `Du nouveau dans ${monde} !`,
    url: '/decouvrir',
    icon: '/icones/notif-cartes.png',
  };
} else if (opt('titre')) {
  message = { titre: opt('titre'), corps: opt('corps') || '', url: opt('url') || '/', icon: opt('icon') || undefined };
} else {
  console.error(
    'Précise un message : --maj, ou --cartes "<monde>" --n <N>, ou --titre "…" --corps "…" --url "…".',
  );
  process.exit(1);
}

const reponse = await fetch(`${base}/api/push/send`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'x-push-secret': secret },
  body: JSON.stringify(message),
});

const texte = await reponse.text();
if (!reponse.ok) {
  console.error(`Échec (${reponse.status}) : ${texte}`);
  process.exit(1);
}
console.log(`Cible : ${base}`);
console.log(`Message : ${message.titre} — ${message.corps}`);
console.log(`Réponse : ${texte}`);
