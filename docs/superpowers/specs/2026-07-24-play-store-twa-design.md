# Conception — Publier Hublot sur le Google Play Store (chantier A)

Date : 2026-07-24
Statut : validé, prêt pour le plan d'implémentation

## Contexte

Hublot est une PWA Next.js 16 (App Router) en français : cartes de sciences
animées et racontées à voix haute, quiz, ~80 animations React, pour les 3-12 ans.
L'application est **100 % front-end** : aucun compte utilisateur, aucune base de
données, aucun état serveur. Elle est déjà déployée sur une URL publique (Vercel)
et déjà installable (manifeste conforme, service worker `public/sw.js`, icônes
192/512 + maskable, page hors-ligne `app/hors-ligne/page.tsx`).

L'objectif à terme est une monétisation **freemium / abonnement**. Ce besoin a été
décomposé en deux chantiers :

- **Chantier A (ce document)** — emballer la PWA en application Android publiable
  sur le Play Store, **gratuite et complète**. Léger.
- **Chantier B (cycle séparé, plus tard)** — abonnement : comptes utilisateurs,
  back-end + base de données, Google Play Billing, verrouillage de contenu. Lourd.

Décision de séquencement : **A d'abord, B ensuite**. On sort une app gratuite,
on valide l'intérêt et on récolte des installs, puis on monétise une audience
existante. Cette conception ne ferme aucune porte pour B (voir « Ne pas fermer »).

## Objectif du chantier A

Produire une application Android installable depuis le Google Play Store, qui
affiche le site Hublot existant en plein écran (sans barre de navigateur), avec le
mode hors-ligne et l'audio fonctionnels, publiée dans le respect de la Politique
Familles de Google Play. Aucune fonctionnalité de paiement.

## Approche retenue : TWA (Trusted Web Activity)

La coquille Android est une fenêtre plein écran sur le site Vercel, rendue par le
moteur Chrome de l'appareil. **Le code Next.js reste la seule source de vérité** :
une correction se déploie sur Vercel et l'app est à jour sans repasser par le Store.

Alternatives écartées :
- **Capacitor** — embarquerait le site dans l'APK, imposant une republication au
  Store à chaque changement, sans bénéfice ici (pas besoin d'API natives poussées).
- **Réécriture native** (Kotlin/Flutter) — jetterait le travail React existant.

Outil de génération : **Bubblewrap CLI** (`@bubblewrap/cli`), en local, projet
Android versionnable dans un sous-dossier du dépôt. (PWABuilder, en web, reste une
option de secours plus rapide à découvrir mais moins reproductible.)

## Composants et livrables

### 1. Préparation de la PWA (dans ce dépôt)

- **`public/.well-known/assetlinks.json`** — Digital Asset Links reliant le
  domaine à l'application. Sa présence supprime la barre d'URL dans la TWA. Il
  contient l'empreinte **SHA-256 de la clé de signature**, donc il est complété
  *après* la génération du projet Android (étape 2), puis redéployé sur Vercel.
- **Manifeste** — ajouter un champ `"id"` stable et garder `start_url` inchangé,
  pour préserver l'identité de l'app (utile à la mise à jour et au chantier B).
- **Vérification qualité PWA** — confirmer via PWABuilder / Lighthouse que le
  manifeste, le service worker et le mode hors-ligne satisfont les critères TWA
  (déjà en place ; étape de contrôle, pas de développement attendu).

### 2. Projet Android (Bubblewrap)

- Générer le projet à partir de l'URL du manifeste ; sortie = **AAB** (Android App
  Bundle).
- **Clé de signature** produite à cette étape : la sauvegarder hors du dépôt et de
  façon durable (sa perte rend toute mise à jour future impossible). Le keystore ne
  doit **pas** être commité.
- Récupérer l'empreinte SHA-256 → compléter `assetlinks.json` → redéployer Vercel.
- Configurer : nom (`Hublot`), couleurs de thème/fond (`#0f1b33`), orientation
  portrait, écran de démarrage — en cohérence avec le manifeste existant.

### 3. Fiche et conformité Google Play Console

- Créer le compte développeur Google Play (**25 $, paiement unique**).
- **Politique Familles (obligatoire, public 3-12 ans)** :
  - Politique de confidentialité hébergée en ligne (URL publique).
  - Questionnaire de classement du contenu.
  - Section « Sécurité des données » : déclarer **« ne collecte aucune donnée »**
    (vrai aujourd'hui — atout à préserver).
  - Public cible déclaré (tranches d'âge incluant les moins de 13 ans).
  - **Aucune publicité personnalisée ni collecte de données d'enfants.**
- Ressources graphiques : icône Play 512, bannière (feature graphic),
  2 à 8 captures d'écran (téléphone + tablette), description courte et longue.

### 4. Test et publication

- Piste de **test interne** d'abord : installation sur les appareils de l'auteur
  et de quelques proches.
- Vérifications : lancement **plein écran sans barre d'URL** (preuve que
  `assetlinks.json` est correct), mode hors-ligne, lecture audio y compris en
  arrière-plan, comportement du bouton retour Android.
- Passage en **production** ; revue Google (quelques heures à quelques jours).

## Flux de données

Aucun. L'app ne fait qu'afficher le site Vercel. Pas de compte, pas de base de
données, pas d'appel serveur propre à l'app. C'est ce qui rend le chantier A léger.

## Gestion des erreurs et cas limites

- **`assetlinks.json` mal formé ou empreinte erronée** → la barre d'URL réapparaît.
  Détecté au test interne (critère de vérification explicite ci-dessus).
- **Perte du keystore** → mises à jour impossibles. Mitigation : sauvegarde durable
  hors dépôt dès l'étape 2. Envisager Google Play App Signing (Google conserve la
  clé de signature d'app, on ne garde que la clé d'upload).
- **Échec d'enregistrement du service worker** → l'app reste fonctionnelle en ligne
  (déjà géré dans le code : l'échec est silencieux).
- **Rejet Politique Familles** → cause la plus probable : formulaire « Sécurité des
  données » ou classement de contenu incomplet. Mitigation : remplir avec soin,
  s'appuyer sur l'absence réelle de collecte.

## Stratégie de test

Pas de tests automatisés nouveaux pour ce chantier (rien n'est ajouté à la logique
applicative). Validation **manuelle** via la piste de test interne selon la liste
de vérifications de l'étape 4.

## Ne pas fermer (pour le chantier B)

- Champ `"id"` et `start_url` stables au manifeste (identité de l'app).
- Coquille TWA compatible **Google Play Billing** via la Digital Goods API : aucune
  refonte de la coquille ne sera nécessaire pour ajouter l'abonnement.
- Conserver keystore et compte développeur (mêmes artefacts réutilisés en B).

## Hors périmètre (chantier A)

- Comptes utilisateurs / authentification.
- Back-end, base de données.
- Google Play Billing, verrouillage de contenu (socle gratuit vs premium).
- Publicité (déconseillée par ailleurs pour un public enfants).
- Publication sur l'App Store d'Apple (autre cycle si souhaité).
