# Notifications push — conception

Système de **notifications push web auto-hébergées** (sans service tiers, pour
la vie privée d'une app enfants), pour prévenir de **nouvelles cartes** et
d'une **mise à jour de l'app** nécessaire, même application fermée.

## Décisions (validées)
- Livraison : **Web Push** (Android/PWA + TWA, qui a déjà `enableNotifications`).
- Stockage des abonnements : **Upstash Redis** (Marketplace Vercel, tier gratuit).
- Autorisation : **interrupteur dans Réglages** (« Recevoir les nouveautés »),
  déclenché par le parent — pas de pop-up automatique au démarrage.
- Envoi : **manuel**, par un script/endpoint protégé, lancé quand on publie du
  contenu ou une nouvelle version.
- Types de messages : **nouvelles cartes** et **mise à jour de l'app**.

## Architecture

### Client
- `components/reglages/…` : un interrupteur qui, à l'activation :
  1. `Notification.requestPermission()` ;
  2. `registration.pushManager.subscribe({ userVisibleOnly: true,
     applicationServerKey: <clé VAPID publique> })` ;
  3. `POST /api/push/subscribe` avec l'abonnement.
  À la désactivation : `unsubscribe()` local + `POST /api/push/unsubscribe`.
  État reflété depuis `pushManager.getSubscription()` (source de vérité).

### Service worker (`public/sw.js`)
- `push` : `event.waitUntil(self.registration.showNotification(titre, options))`
  avec les données du payload (titre, corps, url, tag).
- `notificationclick` : ferme la notif et `clients.openWindow(url)` (ou focus
  d'un onglet existant).

### Serveur (fonctions serverless Next.js, `app/api/push/…/route.ts`)
- `POST /api/push/subscribe` : ajoute l'abonnement à l'ensemble Redis
  `push:abonnes` (clé = endpoint, valeur = JSON de l'abonnement).
- `POST /api/push/unsubscribe` : retire l'abonnement.
- `POST /api/push/send` : **protégée par `PUSH_ADMIN_SECRET`** (en-tête). Corps
  `{ titre, corps, url }`. Envoie à tous les abonnés via `web-push` ; supprime
  les abonnements expirés (404/410).

### Stockage (Upstash Redis)
- Un ensemble/hash `push:abonnes` : `endpoint -> subscription JSON`.
- Accès via `@upstash/redis` (REST, compatible serverless).

### Clés / secrets (variables d'env Vercel)
- `VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT` (mailto).
- `NEXT_PUBLIC_VAPID_PUBLIC_KEY` (la publique, côté client).
- `PUSH_ADMIN_SECRET` (protège `/send`).
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN` (posées par l'intégration).

### Envoi (script)
- `npm run push -- --cartes "Le son" --n 10` → « 10 nouvelles cartes dans Le son 🎵 ».
- `npm run push -- --maj` → « Une nouvelle version est disponible — mets à jour ⬆️ ».
- Le script lit `PUSH_ADMIN_SECRET` (`.env.local`) et appelle `/api/push/send`
  en prod. Modèles de message centralisés.

## Sécurité & vie privée
- Aucune donnée personnelle : on stocke uniquement l'abonnement push (endpoint +
  clés), pas d'identité. Pas de tiers.
- `/send` protégée par secret ; jamais exposée au client.
- Nettoyage automatique des abonnements morts (410 Gone).

## Répartition
- Code (moi) : SW, Réglages, API, script, génération VAPID.
- Provisionnement (toi, une fois) : intégration Upstash via Vercel Marketplace,
  puis pose des variables d'env (je fournis les commandes / valeurs VAPID).

## Test
- Local/preview : abonnement + `/send` avec un abonné de test.
- Device : sur le téléphone (TWA), activer dans Réglages, envoyer, vérifier la
  réception app fermée.

## Hors périmètre (plus tard)
- Détection 100 % automatique côté serveur du diff de contenu (ici l'envoi est
  déclenché à la main au moment où on publie, ce qu'on maîtrise).
- Segmentation/planification, préférences fines par type de notif.
