# Hublot — Fiche Play Store & réponses de conformité

Contenu prêt à copier-coller dans la Google Play Console. Tout en français.
Rappel : public 3-12 ans ⇒ **Politique Familles**. Hublot ne demande aucun
compte et n'a ni publicité ni outil de suivi ; **une seule donnée quitte
l'appareil** : l'identifiant technique de notification, et seulement si un
parent active les notifications (voir §3).

> **Règle de cohérence.** La fiche, la section « Sécurité des données » et la
> page `/confidentialite` doivent dire la même chose que le code. Toute
> fonctionnalité qui envoie quelque chose à un serveur se répercute dans les
> trois, dans la même version.

---

## 1. Fiche du Store

### Nom de l'application
Hublot — les sciences pour les curieux

### Description courte (max 80 caractères)
> Cartes de sciences animées et racontées, pour les curieux de 3 à 12 ans.

### Description complète (max 4000 caractères)

> **Hublot ouvre aux enfants une fenêtre sur les sciences.**
>
> Chaque notion devient une carte : une animation claire qui montre *comment ça
> marche*, et une voix qui l'explique à voix haute. Pas de longs textes à lire —
> on regarde, on écoute, on comprend.
>
> **Pensé pour grandir avec l'enfant**
> Chaque explication existe en trois niveaux — 3-5 ans, 6-8 ans, 9-12 ans. La même
> carte se raconte avec des mots simples pour les petits, puis plus en détail à
> mesure que la curiosité grandit.
>
> **150 cartes, dans quinze domaines**
> L'espace, le vivant, le corps humain, les animaux, les dinosaures, les océans,
> la météo, la Terre, la physique, la chimie, le son, la cuisine, l'ingénierie,
> les mathématiques et le numérique. Pourquoi tout tombe, comment poussent les
> plantes, ce qu'est un pixel, pourquoi le ciel est bleu…
>
> **Écouter, puis jouer**
> Après avoir écouté les cartes, l'enfant teste ce qu'il a retenu : quiz racontés
> à voix haute, défi chrono, mémo. Les étoiles gagnées font grandir Lumi, la
> mascotte, et remplissent un cabinet de curiosités.
>
> **En français et en anglais**
> Toute l'application, voix comprise, existe dans les deux langues.
>
> **Fonctionne hors ligne**
> Les cartes et les sons s'enregistrent sur l'appareil : idéal en voiture, en train
> ou partout sans connexion.
>
> **Respectueux des familles**
> Aucune publicité. Aucun compte. Aucun outil de suivi. La progression reste sur
> l'appareil. Les notifications sont facultatives et réservées aux parents.
>
> Hublot, c'est la curiosité qui s'émerveille — une carte à la fois.

### Catégorie
Éducation

### Coordonnées
- E-mail : nicolas.notte@gmail.com
- Politique de confidentialité : https://hublot-ruby.vercel.app/confidentialite

### Éléments graphiques à fournir
- Icône : 512×512 (réutiliser `public/icones/icone-512.png`)
- Bannière (feature graphic) : 1024×500
- Captures d'écran téléphone : 2 à 8 (format portrait)
- Captures d'écran tablette (7" et 10") : recommandées pour une app Familles

---

## 2. Public cible et contenu (Politique Familles)

- **Tranches d'âge cibles** : cocher les tranches incluant les moins de 13 ans
  (ex. « 5 ans et moins », « 6-8 », « 9-12 »). L'app s'adresse aux 3-12 ans.
- **L'app cible-t-elle les enfants ?** : Oui.
- **Conformité Politique Familles** : Oui, l'app y adhère.
- **Publicités** : Non, l'application ne contient aucune publicité.
- **Contenu généré par les utilisateurs** : Non.
- **Programme « Conçu pour les familles »** : candidater (optionnel mais recommandé
  pour la visibilité et le badge « Approuvé par les enseignants »).

---

## 3. Section « Sécurité des données »

Depuis l'ajout des notifications (v5, 12/08/2026), la réponse « aucune donnée »
n'est **plus exacte** : activer les notifications envoie l'abonnement push de
l'appareil à `/api/push/subscribe`, qui le range dans Upstash Redis
(`lib/push/store.ts`).

- **Votre application collecte-t-elle ou partage-t-elle des données utilisateur ?**
  → **Oui** (collecte), **aucun partage** avec des tiers.
- **Type de donnée** : *Appareil ou autres identifiants* (l'abonnement push :
  adresse du service de notifications + clés de chiffrement).
  - Collectée : oui. Partagée : non.
  - Traitement éphémère : non (elle est conservée tant que les notifications
    sont actives).
  - Obligatoire ou facultative : **facultative** (désactivée par défaut,
    activée par un parent dans Réglages).
  - Finalité : **Fonctionnalités de l'application** (annoncer de nouvelles
    cartes ou une mise à jour). Ni publicité, ni analyse, ni personnalisation.
- Aucun autre type de donnée (ni nom, ni e-mail, ni localisation, ni contacts,
  ni données d'utilisation : la progression reste sur l'appareil).
- **Les données sont-elles chiffrées en transit ?** → **Oui** (HTTPS).
- **L'utilisateur peut-il demander la suppression de ses données ?** → **Oui** :
  en désactivant les notifications dans Réglages (suppression immédiate), ou par
  e-mail à l'adresse de contact.

> Vérité technique : pas de compte, pas de publicité, pas d'outil de suivi. Un
> seul point de collecte : l'abonnement push, opt-in derrière le verrou parental.

---

## 4. Questionnaire de classification du contenu (IARC)

- Catégorie d'application : Application (Éducation / Référence).
- Violence, contenu sexuel, langage grossier, substances, jeux d'argent : **Aucun**.
- Interaction entre utilisateurs, partage de position, achats : **Aucun** tant
  que `NEXT_PUBLIC_PREMIUM_ACTIF` est éteint. **À mettre à jour avant d'allumer
  le freemium** (achats intégrés : oui), en même temps que la fiche, la page de
  confidentialité et la déclaration de statut professionnel.
- Classement attendu : **Tout public / PEGI 3**.

---

## 5. Rappels de publication

1. Déployer d'abord le site (assetlinks.json + /confidentialite en ligne).
2. Téléverser l'AAB sur la piste de **test fermé**.
3. Récupérer dans **Intégrité de l'application** la SHA-256 de la **clé de
   signature Google**, l'ajouter à `assetlinks.json`, redéployer.
4. Tester (plein écran sans barre d'URL, hors-ligne, audio, bouton retour).

---

## 6. Obtenir l'accès à la production (compte personnel)

Google a refusé l'accès à la production les 11/09 et 29/09/2026 (« More testing
required ») : testeurs pas assez actifs, et aucun retour pris en compte par des
mises à jour. Aucune version n'avait été publiée entre la v5 (12/08) et ces
demandes.

**Piège propre à une TWA** : les améliorations déployées sur Vercel arrivent
chez les testeurs sans passer par Google Play. Google ne voit que les **AAB
téléversés**. Sans nouvelle version sur la piste fermée, le test paraît inerte,
quoi qu'on ait amélioré côté web.

Pendant les 14 jours de test fermé :

1. Garder **au moins 12 testeurs inscrits en continu** (viser 15-20), qui
   ouvrent réellement l'application plusieurs jours.
2. Téléverser **2 à 3 AAB** (incrémenter `appVersionCode`), chacun avec des
   notes de version qui nomment le retour traité (« suite aux retours des
   testeurs : … »).
3. Consigner chaque retour dans `docs/retours-beta/` : qui (sans nom), quand,
   quoi, et ce qui a été changé.
4. Dans le formulaire de demande, répondre **concrètement** : comment les
   testeurs ont été recrutés, ce qu'ils ont dit, ce qui a été modifié en
   conséquence, et pourquoi l'application est prête.
