# Hublot — Fiche Play Store & réponses de conformité

Contenu prêt à copier-coller dans la Google Play Console. Tout en français.
Rappel : public 3-12 ans ⇒ **Politique Familles** ; Hublot **ne collecte aucune
donnée**, ce qui simplifie tout.

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
> **Plus de 80 cartes, dans huit domaines**
> L'espace, le vivant, le corps humain, la physique, la chimie, la Terre, les
> mathématiques et le numérique. Pourquoi tout tombe, comment poussent les plantes,
> ce qu'est un pixel, pourquoi le ciel est bleu, comment compte un ordinateur…
>
> **Écouter, puis jouer**
> Après avoir écouté les cartes, l'enfant peut tester ce qu'il a retenu avec des
> quiz à choix multiple, eux aussi racontés à voix haute.
>
> **Fonctionne hors ligne**
> Les cartes et les sons s'enregistrent sur l'appareil : idéal en voiture, en train
> ou partout sans connexion.
>
> **Respectueux des familles**
> Aucune publicité. Aucun compte. Aucune collecte de données. Rien qui suive votre
> enfant. Juste des sciences, racontées avec soin.
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

- **Votre application collecte-t-elle ou partage-t-elle des données utilisateur ?**
  → **Non.**
- Aucun type de donnée à déclarer (ni identifiants, ni localisation, ni contacts,
  ni données d'utilisation, ni identifiants d'appareil).
- **Les données sont-elles chiffrées en transit ?** → Sans objet (aucune donnée
  transmise).
- **L'utilisateur peut-il demander la suppression de ses données ?** → Sans objet
  (aucune donnée collectée).

> Cohérent avec la page de confidentialité en ligne. Vérité technique : pas de
> compte, pas de back-end, pas d'outil de suivi.

---

## 4. Questionnaire de classification du contenu (IARC)

- Catégorie d'application : Application (Éducation / Référence).
- Violence, contenu sexuel, langage grossier, substances, jeux d'argent : **Aucun**.
- Interaction entre utilisateurs, partage de position, achats : **Aucun** (au
  chantier A ; à mettre à jour quand l'abonnement du chantier B arrivera).
- Classement attendu : **Tout public / PEGI 3**.

---

## 5. Rappels de publication

1. Déployer d'abord le site (assetlinks.json + /confidentialite en ligne).
2. Téléverser `app-release-bundle.aab` sur la piste **Test interne**.
3. Récupérer dans **Intégrité de l'application** la SHA-256 de la **clé de
   signature Google**, l'ajouter à `assetlinks.json`, redéployer.
4. Tester (plein écran sans barre d'URL, hors-ligne, audio, bouton retour).
5. Promouvoir en **Production**.
