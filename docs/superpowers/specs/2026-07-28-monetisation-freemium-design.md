# Conception — Monétisation freemium de Hublot (chantier B)

Date : 2026-07-28
Statut : validé, prêt pour le plan d'implémentation

## Contexte

Hublot est une PWA Next.js 16 emballée en TWA, publiée sur le Play Store (test
interne validé, test fermé de 14 jours en cours au moment de la rédaction). App
enfants 3-12 ans : ~100 cartes de sciences animées et racontées, quiz, mode
hors-ligne. Aujourd'hui **entièrement gratuite**, 100 % front-end, sans comptes ni
back-end. Le site vit sur `hublot-ruby.vercel.app` et est servi tel quel dans la
coquille TWA (`com.hublot.app`).

Ce document conçoit la **monétisation** (chantier B), repoussée délibérément après
la mise sur le Store (chantier A, cf. `2026-07-24-play-store-twa-design.md`).

## Décisions cadrées (brainstorming)

- **Objectif** : en faire un vrai revenu (justifie d'investir dans le paywall).
- **Canal** : parents, en direct via l'app (B2C).
- **Frontière gratuit/payant** : un **socle gratuit** (~20 cartes, dont un domaine
  complet) pour accrocher ; le reste des cartes **et les nouveautés** en premium.
- **Forme** : **hybride** — abonnement **ou** achat à vie.
- **Plateforme de paiement** : **Google Play Billing** (in-app), via la Digital
  Goods API dans la TWA.

## Principe directeur : Play gère l'identité et le droit d'accès

Avec Google Play Billing, l'achat est lié au **compte Google** du parent. Play
*est* l'identité et *conserve* le droit d'accès ; un nouvel appareil avec le même
compte restaure l'achat automatiquement. **Conséquence majeure : ni login, ni mot
de passe, ni base de données obligatoires en phase 1.** L'app interroge Google
« ce compte possède-t-il le premium ? » et débloque en conséquence.

La coquille TWA a déjà `features.playBilling.enabled: true` (posé par Bubblewrap) —
elle est prête pour la Digital Goods API.

## Approche retenue

**Phase 1 — droit géré par Play, côté client (ce chantier).**
L'app interroge la Digital Goods API au lancement ; si le premium est possédé, le
contenu premium se débloque. Aucun back-end. Génère du revenu rapidement.
*Limite assumée* : vérification côté client (contournable techniquement) et audio
premium techniquement téléchargeable en direct. Acceptable pour convertir des
parents honnêtes à ce stade.

**Phase 2 — vérification serveur (cycle séparé, plus tard).**
Fonction serverless (Vercel) qui vérifie les jetons d'achat via l'API Google Play
Developer et écoute les Real-time Developer Notifications (résiliations,
renouvellements). Renforce l'intégrité et gère le churn. Hors périmètre de ce
document.

Approche écartée : comptes complets + contenu servi à l'authentification —
surdimensionné à ce stade.

## Composants (phase 1)

### 1. Produits Google Play Console
- Abonnement **« Hublot Premium »** avec deux offres de base :
  - mensuelle : **2,99 €**
  - annuelle : **19,99 €**
- Produit unique (in-app) **« Hublot à vie »** : **39,99 €**.

Cohérence de prix : le « à vie » vaut ~2 ans d'abonnement annuel, pour ne pas
cannibaliser l'abonnement. (Valeurs par défaut, ajustables avant lancement.)

### 2. Modèle de droit d'accès (`useEntitlement`)
- Détecte la disponibilité de la Digital Goods API (présente uniquement dans la
  TWA installée depuis Play ; absente dans un navigateur).
- Interroge les achats possédés (`getDigitalGoodsService` → `listPurchases`).
- Expose un état : `premium` (booléen) et `disponibleAcheter` (booléen — vrai
  seulement dans la TWA).
- Lance un achat via la Payment Request API + Digital Goods API.

### 3. Verrouillage du contenu
- Chaque carte porte un indicateur **`premium: boolean`** dans le registre de
  contenu. Le socle gratuit est `premium: false`.
- **Socle gratuit** (défaut) : le domaine **« L'espace »** complet + une sélection
  d'une ou deux cartes phares par autre domaine, pour ~20 cartes au total, réparties
  pour donner un aperçu de chaque thème. (Sélection exacte ajustable avant lancement.)
- Les cartes premium restent visibles dans la grille (avec un cadenas) mais leur
  ouverture déclenche le paywall si le droit n'est pas possédé.

### 4. Écran paywall (`Paywall`)
- Déclenché par : tap sur une carte verrouillée, ou bouton « Tout débloquer ».
- Présente les bénéfices (toutes les cartes + les nouveautés + hors-ligne complet)
  et les deux offres (s'abonner / à vie), avec les prix récupérés de Play.
- Dans un navigateur (pas de Digital Goods API) : affiche « Disponible dans
  l'application Android » au lieu des boutons d'achat.

### 5. Espace parent (verrou avant achat)
- Petit verrou parental devant le déclenchement de l'achat (ex. « Pour continuer,
  résous : 7 × 8 = ? »), conformément aux bonnes pratiques de la Politique Familles,
  pour éviter les achats déclenchés par un enfant. Le paiement lui-même reste
  protégé par l'authentification Google Play.

### 6. Comportement web
- Le site en navigateur reste une **vitrine du socle gratuit** ; le contenu premium
  y est verrouillé avec le message « Disponible dans l'application Android ». Même
  base de code, comportement piloté par la détection de la Digital Goods API.

### 7. Rebuild et republication de l'AAB
- Une fois les produits créés dans Play Console et le code du paywall en place,
  reconstruire l'AAB (`bubblewrap build`) et le publier. La coquille est déjà
  Play-Billing-capable ; pas de refonte.

## Flux de données

Aucune donnée personnelle nouvelle collectée. Le droit d'accès transite entre l'app
et Google Play (Digital Goods API) ; rien n'est stocké côté Hublot en phase 1. La
déclaration « Sécurité des données » du Store reste « ne collecte aucune donnée »
(les achats sont gérés par Google, pas par Hublot).

## Gestion des erreurs et cas limites

- **Digital Goods API indisponible** (navigateur, ou TWA sans Play) → premium
  verrouillé, message d'installation ; aucune erreur bloquante.
- **Achat annulé / échoué** → retour au paywall sans changement d'état.
- **Abonnement expiré** → `listPurchases` ne le renvoie plus actif → contenu
  reverrouillé au prochain lancement. (La détection fine des résiliations en temps
  réel relève de la phase 2.)
- **Restauration** → au lancement, `listPurchases` restaure automatiquement le droit
  sur un nouvel appareil du même compte.
- **Contenu premium accédé en direct** (URL audio) → non protégé en phase 1 ; risque
  assumé, durci en phase 2.

## Stratégie de test

- Tests unitaires du modèle de droit (`useEntitlement`) : états premium/gratuit,
  API absente, achat possédé/expiré — avec la Digital Goods API simulée (mock).
- Tests du verrouillage : une carte `premium: true` déclenche le paywall sans droit ;
  s'ouvre avec droit.
- Test manuel de bout en bout via un **compte de test de licence** Google Play
  (achats en bac à sable, sans débit réel) sur la piste de test interne.

## Hors périmètre (chantier B, phase 1)

- Back-end de vérification des achats et notifications d'abonnement (phase 2).
- Protection serveur du contenu premium (audio servi à l'authentification).
- Vente sur le web via Stripe (compte partagé web/app).
- Comptes utilisateurs / login personnalisé.
- Vente aux écoles (B2B).

## Ne pas fermer (pour la phase 2)

- Garder l'indicateur `premium` du contenu comme source de vérité du verrouillage,
  réutilisable par une vérification serveur.
- Isoler la logique d'achat/droit dans `useEntitlement` pour pouvoir y brancher une
  vérification serveur sans toucher l'UI.
