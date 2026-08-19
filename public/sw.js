/**
 * Service worker de Hublot.
 *
 * Objectif unique : que l'application s'ouvre et raconte ses cartes sans
 * réseau, en voiture. Deux caches séparés, parce que leur cycle de vie n'a
 * rien à voir.
 *
 * Le shell — une poignée de kilo-octets — est jetable et se remplace à chaque
 * version. L'audio pèse cent quarante et un mégaoctets que le parent a
 * délibérément téléchargés : les effacer à la faveur d'un déploiement serait
 * inacceptable, et c'est pourquoi son cache n'est jamais versionné.
 */

const VERSION = 'v18';
const CACHE_SHELL = `hublot-shell-${VERSION}`;
const CACHE_AUDIO = 'hublot-audio';

/*
  Le strict minimum pour qu'un démarrage à froid hors ligne affiche quelque
  chose. Le reste des ressources arrive par la stratégie ci-dessous, au fil de
  la navigation faite en ligne.
*/
const SHELL = [
  '/',
  '/decouvrir',
  '/quizz',
  '/parcours',
  // Le musée : le fil conducteur. Sans ces routes, un démarrage à froid en
  // voiture n'offrirait qu'un onglet qui ne mène nulle part.
  '/musee',
  '/musee/histoire',
  // Les salles de Lumi, ouvertes depuis le musée.
  '/lumi/rangs',
  '/reglages',
  '/hors-ligne',
  '/manifest.webmanifest',
  // Les mondes : une route par domaine, pour que la navigation par domaine
  // fonctionne aussi au démarrage à froid en voiture. Les ids doivent
  // correspondre à content/domains.ts (à tenir à jour si un domaine change).
  '/decouvrir/sciences-de-la-terre',
  '/decouvrir/astronomie',
  '/decouvrir/biologie',
  '/decouvrir/physique',
  '/decouvrir/chimie',
  '/decouvrir/ingenierie',
  '/decouvrir/informatique',
  '/decouvrir/mathematiques',
  '/decouvrir/animaux',
  '/decouvrir/meteo',
  '/decouvrir/le-son',
  '/decouvrir/les-dinosaures',
  '/decouvrir/le-corps',
  '/decouvrir/les-oceans',
  '/decouvrir/la-cuisine',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_SHELL);
      // Tolérant : une seule URL en échec ne doit pas faire échouer
      // l'installation entière et laisser l'application sans service worker.
      await Promise.allSettled(SHELL.map((url) => cache.add(url)));
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const noms = await caches.keys();
      await Promise.all(
        noms
          // On ne touche qu'aux anciens shells. Le cache audio survit aux
          // déploiements : c'est le téléchargement du parent, pas le nôtre.
          .filter((nom) => nom.startsWith('hublot-shell-') && nom !== CACHE_SHELL)
          .map((nom) => caches.delete(nom)),
      );
      await self.clients.claim();
    })(),
  );
});

/*
  Notifications push. On prévient d'une nouveauté (nouvelles cartes) ou d'une
  mise à jour, même application fermée. Le contenu arrive dans le message push,
  émis par le serveur ; ici on se contente de l'afficher et d'ouvrir le bon
  écran au clic.
*/
self.addEventListener('push', (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { corps: event.data ? event.data.text() : '' };
  }
  const titre = data.titre || 'Hublot';
  const options = {
    body: data.corps || '',
    // Grande icône couleur : propre au type de notif si le serveur en fournit
    // une (nouveautés / mise à jour), sinon le logo par défaut.
    icon: data.icon || '/icones/icone-192.png',
    // Le badge (petite icône monochrome de la barre d'état) n'utilise que le
    // canal alpha : il faut une silhouette transparente, pas l'icône couleur
    // opaque — sinon Android affiche un carré blanc.
    badge: '/icones/badge.png',
    lang: 'fr',
    tag: data.tag || 'hublot',
    data: { url: data.url || '/' },
  };
  event.waitUntil(self.registration.showNotification(titre, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const cible = new URL(event.notification.data?.url || '/', self.location.origin).href;
  event.waitUntil(
    (async () => {
      const fenetres = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      // Réutilise un onglet ouvert si possible, plutôt que d'en empiler un neuf.
      for (const fenetre of fenetres) {
        if ('focus' in fenetre) {
          if (fenetre.url !== cible && 'navigate' in fenetre) await fenetre.navigate(cible);
          return fenetre.focus();
        }
      }
      if (self.clients.openWindow) return self.clients.openWindow(cible);
    })(),
  );
});

const estAudio = (url) => url.pathname.startsWith('/audio/');

self.addEventListener('fetch', (event) => {
  const requete = event.request;
  if (requete.method !== 'GET') return;

  const url = new URL(requete.url);
  if (url.origin !== self.location.origin) return;

  if (estAudio(url)) {
    /*
      Deux exceptions au cache d'abord, toutes deux réseau d'abord :

      - le catalogue (`.json`) doit rester frais, sinon `chargerCatalogue` lit
        une vieille copie servie par ce worker et ne voit jamais de mise à jour ;
      - une requête `?maj` est un fichier qu'on veut réécraser : on la sert
        depuis le réseau et on remplace la version en cache, à sa clé propre.

      En cas d'échec réseau, on retombe sur le cache : une mise à jour ratée ne
      casse donc jamais un fichier qui marchait.
    */
    if (url.pathname.endsWith('.json') || url.searchParams.has('maj')) {
      const cleUrl = url.origin + url.pathname;
      event.respondWith(
        (async () => {
          const cache = await caches.open(CACHE_AUDIO);
          try {
            const reponse = await fetch(cleUrl, { cache: 'no-store' });
            if (reponse.ok) await cache.put(cleUrl, reponse.clone());
            return reponse;
          } catch (erreur) {
            const enCache = await cache.match(cleUrl);
            if (enCache) return enCache;
            throw erreur;
          }
        })(),
      );
      return;
    }

    /*
      Cache d'abord. En cas d'absence on récupère et on garde : ce qu'un enfant
      écoute à la maison est ainsi déjà disponible en voiture, même sans
      téléchargement explicite. Hors ligne et sans cache, on laisse échouer —
      la carte bascule alors en lecture minutée, ce que l'application sait
      faire depuis toujours.
    */
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_AUDIO);
        const enCache = await cache.match(requete);
        if (enCache) return enCache;
        const reponse = await fetch(requete);
        if (reponse.ok) cache.put(requete, reponse.clone());
        return reponse;
      })(),
    );
    return;
  }

  /*
    Tout le reste : réseau d'abord, cache en secours. Le contenu des cartes
    étant compilé dans le JavaScript, servir un shell périmé montrerait un
    catalogue périmé — on préfère donc le réseau quand il répond.
  */
  event.respondWith(
    (async () => {
      try {
        const reponse = await fetch(requete);
        if (reponse.ok && (requete.mode === 'navigate' || url.pathname.startsWith('/_next/'))) {
          const cache = await caches.open(CACHE_SHELL);
          cache.put(requete, reponse.clone());
        }
        return reponse;
      } catch (erreur) {
        const enCache = await caches.match(requete);
        if (enCache) return enCache;
        // Navigation hors ligne vers une route jamais visitée : on sert
        // l'accueil plutôt qu'une erreur de navigateur.
        if (requete.mode === 'navigate') {
          const accueil = await caches.match('/');
          if (accueil) return accueil;
        }
        throw erreur;
      }
    })(),
  );
});
