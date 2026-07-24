# Publier Hublot sur le Play Store (chantier A / TWA) — Plan d'implémentation

> **Pour les travailleurs agentiques :** SOUS-COMPÉTENCE REQUISE : utiliser
> superpowers:subagent-driven-development (recommandé) ou
> superpowers:executing-plans pour dérouler ce plan tâche par tâche. Les étapes
> utilisent la syntaxe case à cocher (`- [ ]`).
>
> **Note sur la nature du plan :** ce chantier est majoritairement opérationnel
> (outillage local, Google Play Console). Seules les tâches 1 et 5 touchent au
> code du dépôt. Les tâches 2, 3, 6, 7, 8 sont des procédures manuelles avec
> commandes et critères de vérification exacts — pas de TDD car aucun code
> applicatif n'y est produit.

**Objectif :** Publier l'application Hublot, gratuite et complète, sur le Google
Play Store, en emballant la PWA Next.js existante dans une Trusted Web Activity
(TWA), dans le respect de la Politique Familles de Google Play.

**Architecture :** La coquille Android est une fenêtre plein écran sur le site
Vercel existant, rendue par le moteur Chrome de l'appareil. Le code Next.js reste
la seule source de vérité ; aucune API native, aucun back-end, aucun compte. Le
projet Android est généré par Bubblewrap et vit dans `android/` (hors keystore).

**Tech Stack :** Next.js 16 (existant), Bubblewrap CLI (`@bubblewrap/cli`), JDK 17,
Android SDK (command-line tools), Google Play Console.

## Contraintes globales

- **Langue :** tout code, commentaire, commit et contenu utilisateur en **français**.
- **Public 3-12 ans ⇒ Politique Familles obligatoire** : politique de
  confidentialité en ligne, « Sécurité des données » = **ne collecte aucune
  donnée**, aucune pub personnalisée, aucune collecte de données d'enfants.
- **Nom du package Android :** `com.hublot.app` — valeur unique, réutilisée à
  l'identique dans le manifeste Bubblewrap ET dans `assetlinks.json`. (Si tu
  possèdes un domaine type `hublot.fr`, tu peux préférer `fr.hublot.app` ; dans ce
  cas, remplace `com.hublot.app` partout dans ce plan.)
- **Domaine de production :** noté `$DOMAINE` dans ce plan (ex.
  `hublot.vercel.app` ou ton domaine personnalisé). Le fixer une fois à la tâche 2
  et l'utiliser tel quel ensuite.
- **Keystore de signature : ne JAMAIS le commiter.** Sa perte rend toute mise à
  jour future impossible.
- **Ne pas fermer le chantier B** : `id` et `start_url` du manifeste restent
  stables ; la coquille TWA reste compatible Play Billing (Digital Goods API).

---

### Tâche 1 : Identité du manifeste + page de confidentialité

Deux modifications de code dans le dépôt : rendre l'identité de l'app explicite et
stable (`id`), et publier une politique de confidentialité (obligatoire pour un
public enfants). Ces deux changements sont indépendants de l'outillage Android et
peuvent être déployés immédiatement sur Vercel.

**Files:**
- Modify: `app/manifest.ts`
- Create: `app/confidentialite/page.tsx`

**Interfaces:**
- Consumes: rien.
- Produces: URL publique `https://$DOMAINE/confidentialite` (utilisée à la tâche 6
  dans la fiche Play). Champ manifeste `id: '/'` (identité stable de l'app).

- [ ] **Étape 1 : Ajouter le champ `id` au manifeste**

Dans `app/manifest.ts`, ajouter la ligne `id: '/',` juste après `start_url`. Le
`id` fige l'identité de l'app indépendamment de l'URL de démarrage — utile aux
mises à jour et au futur chantier B. Résultat attendu du bloc modifié :

```ts
    start_url: '/',
    id: '/',
    display: 'standalone',
```

- [ ] **Étape 2 : Créer la page de confidentialité**

Créer `app/confidentialite/page.tsx`. L'app ne collecte aucune donnée : la page le
dit clairement et sobrement. Contenu complet :

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Confidentialité — Hublot',
  description:
    "Hublot ne collecte aucune donnée personnelle. Politique de confidentialité.",
};

/**
 * Politique de confidentialité.
 *
 * Obligatoire pour publier une application destinée aux enfants sur le Play
 * Store (Politique Familles). Hublot ne collecte rien : la page l'énonce
 * simplement, et son URL publique est fournie à la fiche Play.
 */
export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 text-slate-100">
      <h1 className="font-[family-name:var(--font-fredoka)] text-3xl font-bold">
        Confidentialité
      </h1>
      <p className="mt-2 text-sm text-slate-400">
        Dernière mise à jour : 24 juillet 2026
      </p>

      <section className="mt-8 space-y-4 leading-relaxed">
        <p>
          Hublot est une application qui fait découvrir les sciences aux enfants
          de 3 à 12 ans. Nous avons conçu Hublot pour qu&apos;elle respecte la vie
          privée des familles.
        </p>
        <h2 className="font-[family-name:var(--font-fredoka)] text-xl font-semibold">
          Aucune donnée collectée
        </h2>
        <p>
          Hublot ne collecte, ne stocke et ne transmet aucune donnée personnelle.
          L&apos;application ne demande ni compte, ni inscription, ni adresse
          e-mail. Elle ne contient aucune publicité et aucun outil de suivi.
        </p>
        <h2 className="font-[family-name:var(--font-fredoka)] text-xl font-semibold">
          Fonctionnement hors ligne
        </h2>
        <p>
          Les cartes et les sons peuvent être enregistrés sur l&apos;appareil pour
          fonctionner sans connexion. Ces données restent sur l&apos;appareil et ne
          sont jamais envoyées ailleurs.
        </p>
        <h2 className="font-[family-name:var(--font-fredoka)] text-xl font-semibold">
          Contact
        </h2>
        <p>
          Pour toute question :{' '}
          <a
            className="underline"
            href="mailto:nicolas.notte@gmail.com"
          >
            nicolas.notte@gmail.com
          </a>
          .
        </p>
        <p className="pt-4">
          <Link className="underline" href="/">
            Retour à l&apos;accueil
          </Link>
        </p>
      </section>
    </main>
  );
}
```

- [ ] **Étape 3 : Vérifier le build**

Run: `npm run build`
Expected: build réussi, aucune erreur TypeScript ; la route `/confidentialite`
apparaît dans la liste des routes générées.

- [ ] **Étape 4 : Vérifier le rendu en local**

Run: `npm run dev` puis ouvrir `http://localhost:3000/confidentialite`
Expected: la page s'affiche avec le titre « Confidentialité » et le texte ci-dessus.
Ouvrir aussi `http://localhost:3000/manifest.webmanifest` et confirmer la présence
de `"id": "/"`.

- [ ] **Étape 5 : Commit**

```bash
git add app/manifest.ts app/confidentialite/page.tsx
git commit -m "Ajoute l'identité du manifeste et la page de confidentialité"
```

- [ ] **Étape 6 : Déployer sur Vercel**

Pousser sur la branche de production (ou laisser le déploiement automatique Vercel
s'exécuter). Confirmer que `https://$DOMAINE/confidentialite` répond en ligne — son
URL sera demandée par la Play Console à la tâche 6.

---

### Tâche 2 : Installer l'outillage Bubblewrap

Bubblewrap génère le projet Android à partir du manifeste. Il exige un JDK 17 et
l'Android SDK. Cette tâche prépare la machine (Windows). **Échappatoire :** si tu
préfères ne rien installer, saute cette tâche et la tâche 3, et utilise
**PWABuilder** (voir l'encadré en fin de tâche 3) — tout se fait dans le navigateur.

**Files:** aucun (outillage machine).

**Interfaces:**
- Produces: commande `bubblewrap` disponible ; JDK et Android SDK détectés.
- Produces: la valeur `$DOMAINE` (domaine de production, fixée ici pour tout le plan).

- [ ] **Étape 1 : Fixer le domaine de production**

Noter le domaine public exact de l'app (celui servi par Vercel), par ex.
`hublot.vercel.app`. C'est la valeur `$DOMAINE` référencée dans tout ce plan.

- [ ] **Étape 2 : Vérifier Node.js**

Run: `node --version`
Expected: v20 ou supérieur (déjà utilisé par le projet).

- [ ] **Étape 3 : Installer un JDK 17**

Installer Temurin JDK 17 (Adoptium). Via winget :

```powershell
winget install EclipseAdoptium.Temurin.17.JDK
```

Run: `java -version`
Expected: version 17.x affichée.

- [ ] **Étape 4 : Installer Bubblewrap CLI**

```powershell
npm install -g @bubblewrap/cli
```

Run: `bubblewrap --version`
Expected: numéro de version affiché sans erreur.

- [ ] **Étape 5 : Laisser Bubblewrap installer l'Android SDK**

Au premier `bubblewrap init` (tâche 3), l'outil propose de télécharger
automatiquement le JDK et l'Android SDK s'ils sont absents. Accepter. Aucune action
séparée ici ; cette étape sert de rappel : ne pas installer Android Studio, c'est
inutile pour une TWA.

---

### Tâche 3 : Générer le projet Android, l'AAB et le keystore

Bubblewrap lit le manifeste en ligne et génère le projet Android dans `android/`,
puis construit l'AAB signé. Le keystore est créé ici : c'est l'artefact le plus
précieux du chantier.

**Files:**
- Create: `android/` (projet Bubblewrap, versionné)
- Create: `android/twa-manifest.json` (config, versionné)
- Create (hors dépôt) : keystore `.keystore` — **jamais commité**
- Modify: `.gitignore`

**Interfaces:**
- Consumes: `$DOMAINE`, package `com.hublot.app`, manifeste en ligne de la tâche 1.
- Produces: `app-release-bundle.aab` (livré à la tâche 6), empreinte **SHA-256** de
  la clé (consommée par la tâche 4).

- [ ] **Étape 1 : Initialiser le projet**

Depuis la racine du dépôt :

```powershell
mkdir android
cd android
bubblewrap init --manifest "https://$DOMAINE/manifest.webmanifest"
```

Répondre aux invites :
- Package name : `com.hublot.app`
- Nom / short name : proposés depuis le manifeste (`Hublot`) — accepter.
- Couleurs thème/fond : `#0f1b33` (déjà dans le manifeste) — accepter.
- Signing key : accepter la création d'un nouveau keystore ; **noter le mot de
  passe** choisi dans un gestionnaire de mots de passe.

Expected: `android/twa-manifest.json` créé, keystore généré.

- [ ] **Étape 2 : Exclure le keystore et les artefacts du dépôt**

Ajouter à `.gitignore` (à la racine) :

```gitignore
# Signature Android — NE JAMAIS commiter (sa perte = mises à jour impossibles)
*.keystore
*.jks
# Artefacts de build Android
android/app/build/
android/*.aab
android/*.apk
```

- [ ] **Étape 3 : Construire l'AAB**

```powershell
bubblewrap build
```

Expected: `app-release-bundle.aab` produit dans `android/`. L'outil affiche
l'empreinte **SHA-256** de la clé de signature — **la copier** pour la tâche 4.
(Récupérable à tout moment via : `bubblewrap fingerprint list`.)

- [ ] **Étape 4 : Sauvegarder le keystore hors machine**

Copier le fichier keystore et son mot de passe dans un stockage durable et privé
(gestionnaire de mots de passe + sauvegarde chiffrée). Vérifier que le fichier
n'apparaît PAS dans `git status`.

Run: `git status`
Expected: aucun fichier `.keystore`/`.jks`/`.aab` listé.

- [ ] **Étape 5 : Commit du projet Android (sans secrets)**

```bash
git add android/twa-manifest.json android/ .gitignore
git commit -m "Ajoute le projet TWA Bubblewrap (coquille Android)"
```

> **Échappatoire PWABuilder (si tâches 2-3 sautées) :** aller sur pwabuilder.com,
> saisir `https://$DOMAINE`, section Android → « Generate Package » → onglet
> « Android » (option TWA). Renseigner package `com.hublot.app`. Télécharger le zip :
> il contient l'AAB et le keystore (`signing.keystore` + mot de passe dans
> `assetlinks` / `signing` info). Le SHA-256 pour la tâche 4 y est fourni dans le
> fichier `assetlinks.json` généré. Sauvegarder le keystore hors dépôt de la même
> façon. Les tâches 4 à 8 sont identiques ensuite.

---

### Tâche 4 : Digital Asset Links (supprimer la barre d'URL)

Le fichier `assetlinks.json` servi à la racine du domaine prouve à Android que le
domaine et l'app appartiennent au même propriétaire. Sans lui (ou s'il est erroné),
la TWA affiche une barre d'URL Chrome. Il nécessite l'empreinte SHA-256 de la
tâche 3.

**Files:**
- Create: `public/.well-known/assetlinks.json`

**Interfaces:**
- Consumes: empreinte SHA-256 (tâche 3), package `com.hublot.app`.
- Produces: `https://$DOMAINE/.well-known/assetlinks.json` accessible publiquement.

- [ ] **Étape 1 : Créer le fichier**

Créer `public/.well-known/assetlinks.json`. Remplacer la valeur de
`sha256_cert_fingerprints` par l'empreinte exacte copiée à la tâche 3, étape 3
(format `AA:BB:CC:...`, majuscules, séparées par des deux-points) :

```json
[
  {
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.hublot.app",
      "sha256_cert_fingerprints": [
        "REMPLACER_PAR_LE_SHA256_DE_LA_TACHE_3"
      ]
    }
  }
]
```

- [ ] **Étape 2 : Vérifier que Next.js sert le fichier**

Run: `npm run build && npm run start` puis
`curl http://localhost:3000/.well-known/assetlinks.json`
Expected: le JSON ci-dessus est renvoyé, avec l'empreinte réelle (pas le texte de
remplacement).

- [ ] **Étape 3 : Commit et déploiement**

```bash
git add public/.well-known/assetlinks.json
git commit -m "Ajoute assetlinks.json pour la vérification TWA du domaine"
```

Pousser / laisser Vercel déployer. Confirmer en ligne :
`https://$DOMAINE/.well-known/assetlinks.json` renvoie le JSON.

- [ ] **Étape 4 : Valider l'association**

Ouvrir l'outil officiel :
`https://developers.google.com/digital-asset-links/tools/generator`
Renseigner le domaine `$DOMAINE`, le package `com.hublot.app` et l'empreinte.
Expected: « Success » — l'association est valide.

---

### Tâche 5 : Créer le compte et la fiche Google Play

Création du compte développeur et de l'application dans la Play Console. Le compte
coûte 25 $ (paiement unique).

**Files:** aucun (console web).

**Interfaces:**
- Consumes: AAB (tâche 3), URL confidentialité (tâche 1).
- Produces: une application « Hublot » en brouillon dans la Play Console.

- [ ] **Étape 1 : Compte développeur**

Sur `play.google.com/console`, créer un compte développeur (25 $, une fois).
Renseigner l'identité demandée (vérification d'identité possible sous quelques
jours — anticiper).

- [ ] **Étape 2 : Créer l'application**

« Créer une application » → nom `Hublot`, langue par défaut français, type
« Application », gratuite.

- [ ] **Étape 3 : Préparer les ressources graphiques**

Rassembler : icône Play 512×512 (réutiliser `public/icones/icone-512.png`),
bannière (feature graphic) 1024×500, et 2 à 8 captures d'écran (téléphone +
tablette). Les captures se prennent depuis l'app en ligne (mode responsive du
navigateur, ou un appareil réel).

Expected: tous les fichiers prêts au format requis.

---

### Tâche 6 : Renseigner fiche, conformité Familles et téléverser l'AAB

Le cœur administratif : la fiche, les questionnaires obligatoires (Politique
Familles) et le dépôt de l'AAB sur une piste de test.

**Files:** aucun (console web).

**Interfaces:**
- Consumes: tout ce qui précède.
- Produces: version déposée sur la piste de **test interne**, prête à installer.

- [ ] **Étape 1 : Fiche du Store**

Description courte et longue (français), icône, bannière, captures d'écran de la
tâche 5. Catégorie : Éducation.

- [ ] **Étape 2 : Politique de confidentialité**

Coller l'URL `https://$DOMAINE/confidentialite` (tâche 1) dans le champ dédié.

- [ ] **Étape 3 : Public cible et contenu (Politique Familles)**

Section « Public cible et contenu » : déclarer des tranches d'âge **incluant les
moins de 13 ans**. L'app relève donc de la **Politique Familles**. Répondre au
questionnaire en cohérence : contenu éducatif, pas de publicité.

- [ ] **Étape 4 : Sécurité des données**

Déclarer : **ne collecte ni ne partage aucune donnée**. C'est exact (aucun compte,
aucun suivi, aucun back-end). Cohérent avec la page de confidentialité.

- [ ] **Étape 5 : Classification du contenu**

Remplir le questionnaire IARC : aucun contenu sensible → classification « Tout
public ».

- [ ] **Étape 6 : Téléverser l'AAB sur la piste de test interne**

Créer une release sur la piste **Test interne**, téléverser `app-release-bundle.aab`
(tâche 3). Ajouter son adresse e-mail (et celles des proches testeurs) à la liste
des testeurs.

Expected: la release est traitée sans erreur bloquante ; un lien d'installation de
test interne est fourni.

---

### Tâche 7 : Tester l'application installée

Validation manuelle sur appareils réels avant la production.

**Files:** aucun.

**Interfaces:**
- Consumes: lien de test interne (tâche 6).

- [ ] **Étape 1 : Installer depuis le lien de test interne**

Sur un téléphone Android, ouvrir le lien de test interne, rejoindre le programme,
installer Hublot depuis le Play Store.

- [ ] **Étape 2 : Vérifier l'absence de barre d'URL**

Lancer l'app.
Expected: affichage **plein écran, sans barre d'adresse Chrome** en haut. (Une barre
visible = `assetlinks.json` incorrect → revoir tâche 4.)

- [ ] **Étape 3 : Vérifier les fonctions clés**

Parcourir : ouverture d'une carte, lecture audio (y compris écran éteint / app en
arrière-plan), un quiz, et le **mode hors-ligne** (activer le mode avion après un
premier chargement, vérifier que les cartes déjà vues restent accessibles).
Expected: tout fonctionne comme sur le web.

- [ ] **Étape 4 : Vérifier le bouton retour Android**

Naviguer dans quelques cartes puis appuyer sur retour.
Expected: retour à l'écran précédent, sans quitter brutalement l'app à la première
pression.

---

### Tâche 8 : Publier en production

Passage de la piste de test à la production après validation.

**Files:** aucun.

**Interfaces:**
- Consumes: version testée et validée (tâche 7).

- [ ] **Étape 1 : Promouvoir vers la production**

Dans la Play Console, créer une release sur la piste **Production** à partir de
l'AAB validé (ou promouvoir la release de test interne). Renseigner les notes de
version.

- [ ] **Étape 2 : Soumettre à la revue**

Soumettre. La revue Google prend de quelques heures à quelques jours (les apps
Familles peuvent être examinées plus attentivement).

- [ ] **Étape 3 : Confirmer la mise en ligne**

Une fois approuvée, vérifier que la fiche est publique et que l'installation depuis
le Play Store fonctionne pour un utilisateur tiers.
Expected: Hublot est installable publiquement depuis le Play Store.

---

## Auto-revue (couverture de la spec)

- Préparation PWA (assetlinks, `id`, contrôle qualité) → tâches 1 et 4. ✔
- Génération projet Android + keystore → tâches 2 et 3. ✔
- Console Play + Politique Familles + « Sécurité des données » → tâches 5 et 6. ✔
- Test interne (plein écran, hors-ligne, audio, retour) → tâche 7. ✔
- Publication production → tâche 8. ✔
- Politique de confidentialité (point ouvert de la spec) → tâche 1, tranchée :
  page rédigée dans l'app. ✔
- Bubblewrap avec PWABuilder en secours (point ouvert) → tâches 2/3, tranché. ✔
- « Ne pas fermer » chantier B (`id`, `start_url` stables, TWA compatible Billing)
  → contraintes globales + tâche 1. ✔
- Hors périmètre (comptes, back-end, Billing, pub, App Store) → aucune tâche, exclu
  conformément à la spec. ✔
