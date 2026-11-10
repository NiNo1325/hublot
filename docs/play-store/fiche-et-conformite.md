# Hublot — Fiche Play Store & réponses de conformité

Contenu prêt à copier-coller dans la Google Play Console. Tout en français.
Rappel : public 3-12 ans ⇒ **Politique Familles**. Par défaut, rien ne quitte
l'appareil ; **deux fonctions facultatives, réservées aux parents, envoient
quelque chose au serveur** : la sauvegarde par compte Google et les
notifications (voir §3).

> **Règle de cohérence.** La fiche, la section « Sécurité des données » et les
> pages `/confidentialite` et `/suppression` doivent dire la même chose que le
> code. Toute fonction qui envoie quelque chose à un serveur se répercute dans
> les quatre, dans la même version. Ce document affirmait encore « aucune
> donnée » après l'arrivée des notifications (12/08) puis du compte Google
> (20/08) : corrigé le 10/11/2026.

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
> Après avoir écouté les cartes, l'enfant teste ce qu'il a retenu avec des quiz
> racontés à voix haute. Chaque réussite rapporte une clé, et chaque clé délivre
> un savant du musée — plus de cent, de l'Antiquité à aujourd'hui.
>
> **Pour toute la fratrie, en français et en anglais**
> Un profil par enfant sur le même appareil, et toute l'application, voix
> comprise, dans les deux langues.
>
> **Fonctionne hors ligne**
> Les cartes et les sons s'enregistrent sur l'appareil : idéal en voiture, en train
> ou partout sans connexion.
>
> **Respectueux des familles**
> Aucune publicité. Aucun outil de suivi. Aucun compte requis : la progression
> reste sur l'appareil. Un parent peut, s'il le souhaite, la sauvegarder avec son
> compte Google ; ni le prénom ni l'âge des enfants ne quittent l'appareil.
>
> Hublot, c'est la curiosité qui s'émerveille — une carte à la fois.

### Catégorie
Éducation

### Coordonnées
- E-mail : nicolas.notte@gmail.com
- Politique de confidentialité : https://hublot.science/confidentialite
- Suppression du compte et des données : https://hublot.science/suppression
  (champ distinct, exigé dès qu'un compte peut être créé)

> Vérifier que la Play Console pointe bien vers `hublot.science` et non plus
> vers `hublot-ruby.vercel.app`.

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

À ressaisir dans la Play Console si elle dit encore « aucune donnée » : c'est la
section que Google compare au comportement réel de l'application.

- **Votre application collecte-t-elle ou partage-t-elle des données utilisateur ?**
  → **Oui** (collecte). **Aucun partage** avec des tiers.
- **Toutes les données sont-elles chiffrées en transit ?** → **Oui** (HTTPS).
- **L'utilisateur peut-il demander la suppression de ses données ?** → **Oui** ;
  URL : `https://hublot.science/suppression`.
- **Création de compte** : oui, facultative, par compte Google (« Se connecter
  avec Google »), derrière la porte parentale.

Types de données à déclarer — tous **collectés, non partagés, facultatifs**,
finalité **Fonctionnalités de l'application** (jamais publicité ni analyse) :

| Type (libellé Play) | Ce que c'est dans Hublot | Où dans le code |
|---|---|---|
| Informations personnelles → **ID utilisateur** | L'identifiant `sub` du compte Google relié par le parent. Le nom, l'e-mail et la photo proposés par Google sont ignorés. | `lib/compte/google.ts`, `lib/compte/store.ts` |
| Activité dans les applications → **Autres actions** | La progression sauvegardée : cartes écoutées et réussies, savants délivrés, scores, avatar. Uniquement si un compte est relié. | `app/api/progression/route.ts` |
| Appareil ou autres identifiants | L'abonnement push (adresse d'envoi + clés), uniquement si les notifications sont activées. | `lib/push/store.ts` |

À **ne pas** déclarer : le prénom et l'âge des enfants (jamais transmis),
localisation, contacts, photos, audio, données financières.

> Vérité technique : pas de publicité, pas d'outil de suivi, rien par défaut.
> Deux points de collecte, tous deux opt-in et derrière la question réservée aux
> parents : la sauvegarde par compte Google et les notifications.

---

## 4. Questionnaire de classification du contenu (IARC)

- Catégorie d'application : Application (Éducation / Référence).
- Violence, contenu sexuel, langage grossier, substances, jeux d'argent : **Aucun**.
- Interaction entre utilisateurs, partage de position, achats : **Aucun** tant
  que `NEXT_PUBLIC_PREMIUM_ACTIF` est éteint. **À mettre à jour avant d'allumer
  le freemium** (achats intégrés : oui), en même temps que la fiche et la
  déclaration de statut professionnel.
- Classement attendu : **Tout public / PEGI 3**.

---

## 5. Rappels de publication

1. Déployer d'abord le site (assetlinks.json, /confidentialite et /suppression
   en ligne).
2. Téléverser l'AAB sur la piste de **test fermé**.
3. Récupérer dans **Intégrité de l'application** la SHA-256 de la **clé de
   signature Google**, l'ajouter à `assetlinks.json`, redéployer.
4. Tester (plein écran sans barre d'URL, hors-ligne, audio, bouton retour).

---

## 6. Obtenir l'accès à la production (compte personnel)

Google a refusé l'accès à la production les 11/09 et 29/09/2026 (« More testing
required ») : testeurs pas assez actifs, et retours non pris en compte par des
mises à jour visibles.

**Piège propre à une TWA** : ce qui est déployé sur Vercel arrive chez les
testeurs sans passer par Google Play. Google ne voit que les **AAB téléversés
sur la piste fermée** et leurs notes de version. Un test où l'on a beaucoup
amélioré côté web mais peu téléversé paraît inerte.

Pendant les 14 jours de test fermé :

1. Garder **au moins 12 testeurs inscrits en continu** (viser 15-20), qui
   ouvrent réellement l'application plusieurs jours.
2. Téléverser **2 à 3 AAB** (incrémenter `appVersionCode`), chacun avec des
   notes de version qui nomment le retour traité (« suite aux retours des
   testeurs : … »). Tenir à jour le tableau des versions de
   `build-et-signature-twa.md`, qui s'arrête à la v5.
3. Consigner chaque vague de retours dans `docs/retours-beta/`.
4. Dans le formulaire de demande, répondre **concrètement** : comment les
   testeurs ont été recrutés, ce qu'ils ont dit, ce qui a été modifié en
   conséquence, pourquoi l'application est prête. La matière existe déjà :
   `docs/retours-beta/2026-09-23-retours-testeurs.md`.
