# Migration vers `lehublot.app`

Feuille de route de la bascule depuis `hublot-ruby.vercel.app`. À suivre dans
l'ordre : chaque phase doit laisser l'application en état de marche, y compris
si l'on s'arrête entre deux.

## Pourquoi maintenant

`hublot-ruby.vercel.app` n'est pas une adresse à nous. On ne peut ni la
déplacer, ni la dicter, et elle lie l'application Android à Vercel pour
toujours : le manifeste TWA la grave, et c'est elle que vérifient les Digital
Asset Links.

Le moment est contraint par un détail technique : **`localStorage` est lié à
l'origine.** Changer de domaine efface la progression de chaque enfant qui n'a
pas lié de compte Google — cartes écoutées, clés, savants délivrés, étoiles de
Lumi. En test fermé, cela concerne une douzaine de personnes qu'on peut
prévenir. Après la sortie publique, ce serait une dette qu'on ne rembourse
plus.

Le choix du nom : `hublot.app`, `hublot.be`, `hublot.fr` et `monhublot.com`
sont pris, motif qui ressemble à du dépôt défensif par l'horloger suisse.
L'article distingue sans s'éloigner, et le `.app` impose HTTPS — ce qui était
déjà le cas.

## Repères

| | |
|---|---|
| Projet Vercel | `nino1325s-projects/hublot` |
| Projet Google Cloud | `hublot-506119` |
| Paquet Android | `com.hublot.app` |
| Bubblewrap | `C:\bwrap` (chemins sans espace) |
| Keystore | `android/android.keystore` — **à ne jamais perdre** |
| Bucket audio | `hublot-audio`, servi par réécriture depuis `next.config.ts` |

---

## Phase 1 — le domaine répond, rien ne casse

### 1.1 Acheter `lehublot.app` chez Cloudflare

Registrar → *Register domain*. Environ 10 $/an, au coût réel et sans hausse au
renouvellement.

**Chez Cloudflare et pas chez Vercel**, pour deux raisons. D'abord parce qu'un
registrar ne doit pas être son hébergeur : on prend un domaine précisément pour
pouvoir partir un jour, et l'acheter chez Vercel remettrait les deux dans le
même panier. Ensuite parce que le domaine sur leur DNS permet d'attacher un
domaine personnalisé au bucket R2 (phase 5), ce qu'aucun autre registrar ne
débloque.

### 1.2 Rattacher le domaine au projet Vercel

```
vercel domains add lehublot.app hublot
```

Vercel affiche alors l'enregistrement DNS à créer. Le poser chez Cloudflare,
**nuage gris — « DNS only », surtout pas de proxy** : empiler le CDN Cloudflare
devant celui de Vercel donne un cache imprévisible et des en-têtes réécrits,
pour un bénéfice nul.

Prévoir aussi `www.lehublot.app`, en redirection vers l'apex.

### 1.3 Autoriser la nouvelle origine chez Google

Console Google Cloud → projet `hublot-506119` → *Identifiants* → le client OAuth
→ **Origines JavaScript autorisées** → ajouter `https://lehublot.app`.

**Garder l'ancienne origine.** Pendant toute la migration, les deux domaines
doivent fonctionner : une installation Android non mise à jour continuera de
charger l'ancienne pendant des semaines.

La propagation prend parfois quelques minutes ; un refus d'origine juste après
la sauvegarde ne veut pas dire que la configuration est fausse.

### 1.4 Vérifier

- `https://lehublot.app/musee` répond ;
- l'audio arrive : `https://lehublot.app/audio/savants/isaac-newton/portrait.mp3` ;
- la connexion Google fonctionne **sur le nouveau domaine** ;
- `https://lehublot.app/.well-known/assetlinks.json` est servi — c'est lui que
  Google ira lire à la phase 3, et il n'a besoin d'aucune modification : il ne
  contient que le nom du paquet et les empreintes de signature.

À ce stade les deux adresses servent l'application. Rien n'est cassé, et on peut
s'arrêter là aussi longtemps qu'on veut.

---

## Phase 2 — prévenir les testeurs

Leur demander de **lier un compte Google** dans Réglages **avant** la bascule.

Ce n'est pas une formalité : c'est le seul moyen de ne pas leur faire perdre
leur progression. La synchronisation existe déjà et fait exactement cela —
elle remonte l'état sur le serveur, et le redescend sur le nouveau domaine.
Sans compte lié, la progression reste prisonnière de l'ancienne origine, et
aucune astuce ne contourne proprement la règle du navigateur.

Laisser quelques jours entre l'annonce et la phase 3.

---

## Phase 3 — basculer l'application Android

### 3.1 Reconstruire le bundle

`android/twa-manifest.json` est **déjà à jour** (commit « L'application Android
vise lehublot.app ») : nouvel hôte, version 6, et l'ancienne adresse conservée
dans `additionalTrustedOrigins` pour que les liens déjà diffusés s'ouvrent en
plein écran au lieu d'un onglet Chrome avec barre d'adresse.

Depuis `C:\bwrap` :

```
bubblewrap build
```

**Ne pas lancer cette commande avant que la phase 1 soit vérifiée** : la
validation des Asset Links échouerait, et l'application s'ouvrirait en
navigateur au lieu du mode plein écran.

Rappel de la migration Play Billing : ne jamais revenir au pont `billing:1.1.0`
avec Billing 8, l'application plante au démarrage.

### 3.2 Publier

Play Console → nouvelle version en test fermé, version 6. Vérifier sur un vrai
appareil que l'application s'ouvre **sans barre d'adresse** : c'est le signe que
les Asset Links sont validés.

### 3.3 Mettre à jour la fiche

Trois URL à reprendre, toutes en `lehublot.app` :

- site web de l'application ;
- politique de confidentialité → `/confidentialite` ;
- suppression du compte → `/suppression`.

---

## Phase 4 — après la bascule

`hublot-ruby.vercel.app` **continue de servir l'application, sans redirection**.

C'est délibéré. Une redirection ferait sortir les installations non mises à jour
de leur périmètre vérifié, et l'application s'ouvrirait avec une barre
d'adresse. On ne coupe l'ancienne adresse que lorsque plus personne n'est sur
une version antérieure à la 6 — ce que les statistiques du Play Store diront.

---

## Phase 5 — facultative, plus tard

Basculer l'audio de `pub-949768de….r2.dev` vers `audio.lehublot.app`.

Le `r2.dev` est limité en débit par Cloudflare et déconseillé en production ;
aujourd'hui la réécriture Vercel absorbe l'essentiel, donc rien ne presse. Le
jour où on le fait : domaine personnalisé sur le bucket R2 — celui-là **avec**
le proxy, contrairement aux enregistrements de la phase 1.2 — puis une seule
variable à changer :

```
NEXT_PUBLIC_AUDIO_BASE=https://audio.lehublot.app
```

Aucune ligne de code : la variable existe déjà, et `next.config.ts` la lit.

---

## Ce qui ne bouge pas

- **Le code de l'application.** Aucune URL absolue en dur, pas de
  `metadataBase` : les chemins sont tous relatifs.
- **`assetlinks.json`.** Il ne nomme que le paquet et les empreintes.
- **Le keystore.** Le changer rendrait les mises à jour impossibles.
- **Les clés de `localStorage`.** Préfixe `science.*` — c'est l'origine qui
  change, pas les clés.
