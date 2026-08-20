# Profils utilisateurs — conception

Donner à chaque enfant **son propre profil** (sa progression, ses savants
libérés, ses scores), et permettre au parent de **sauvegarder l'ensemble hors
de l'appareil** en se connectant avec son compte Google — pour qu'une tablette
cassée ou réinstallée ne réduise pas à néant des semaines d'écoute.

## Décisions (validées)

- **Deux besoins à la fois** : plusieurs enfants sur un appareil, ET une
  sauvegarde qui survit à l'appareil.
- **Identité : compte Google** (Google Identity Services), retenue en
  connaissance du surcoût réglementaire décrit plus bas.
- **Modèle familial** : un compte parent abrite plusieurs profils d'enfants.
  Imposé par les faits — avant 13 ans, un enfant n'a pas de compte Google.
- **Architecture locale d'abord** : `localStorage` fait foi pendant le jeu, le
  compte sert de filet. L'app reste entièrement fonctionnelle hors ligne et
  sans compte.
- **Le prénom de l'enfant ne quitte jamais l'appareil.** Le serveur ne connaît
  qu'un identifiant Google pseudonyme, des identifiants de profil opaques, des
  avatars et des blocs de progression.

## Pourquoi la fusion est triviale ici

Presque tout l'état ne fait que croître : cartes vues, cartes maîtrisées et
savants libérés sont des ensembles qui ne perdent jamais d'élément ; les
meilleurs scores sont un maximum. Fusionner deux appareils est donc une
**union** et un **max** — aucun conflit possible, aucun écran « quelle version
garder ? ». Seuls l'âge, la tranche d'âge et le tutoriel vu relèvent du
dernier-qui-écrit-gagne, arbitré par un horodatage `maj` par profil.

C'est la propriété qui rend tout ce chantier abordable ; toute évolution future
qui introduirait un état décroissant (par exemple « retirer une carte vue »)
devra reconsidérer cette section.

## Architecture

### Modèle local (`lib/profils/`)

**Propre au profil** : `cartesVues`, `cartesMaitrisees`, `liberes`, `chrono`,
`age`, `ageRange`, `tutoVu`.
**Propre à l'appareil** : `locale` (la langue suit la famille, pas l'enfant),
l'abonnement push, le cache hors ligne, et le premium — qui est un achat
rattaché au compte Play.

Deux nouvelles clés :

- `science.profils.v1` → `[{ id, prenom, avatar }]`, `id` opaque
  (`crypto.randomUUID()`).
- `science.profilActif.v1` → l'`id` courant.

Les sept clés existantes deviennent préfixées : `science.<id>.cartesVues.v1`.

Le module expose :

- `profils()`, `profilActif()`, `changerDeProfil(id)`, `ajouterProfil(...)`,
  `renommerProfil(...)`, `supprimerProfil(id)` ;
- `cle(nom)` — le préfixage, seul point qui connaît le format des clés ;
- `souscrireProfil(fn)` — un bus d'abonnement pour que les hooks se
  rafraîchissent au changement d'enfant.

### Migration des joueurs existants

L'app est en production : des enfants ont déjà libéré des savants. Au premier
lancement après mise à jour, si les anciennes clés existent sans liste de
profils, on crée un profil unique et on y transfère les valeurs telles quelles.
Personne ne perd rien et personne ne voit d'écran de bienvenue : l'enfant
retrouve exactement son état, devenu « profil 1 ».

Fonction pure, testée hors navigateur : `migrer(lire, ecrire)`.

### Les sept hooks

Chacun passe de `const CLE = 'science.x.v1'` à `cle('x.v1')`, et s'abonne au bus
de profils en plus de son propre jeu d'abonnés. `useLocale` est le seul à ne pas
bouger.

### Session (`lib/compte/`)

Schéma **sans état**, celui que recommande la doc Next embarquée
(`02-guides/authentication.md`) : cookie signé, aucune session en base.

1. Le client obtient un jeton d'identité via Google Identity Services.
2. `POST /api/compte/connexion` le vérifie avec `jose` contre le JWKS de Google
   (signature, `iss`, `aud`).
3. On en extrait **le seul champ `sub`**, et on pose un cookie `httpOnly`,
   `secure`, `sameSite=lax`, 90 jours, signé HS256 avec `SESSION_SECRET`.

Ni e-mail, ni nom, ni photo ne sont lus, transmis ou stockés — y compris ceux du
parent.

### Clés / secrets (variables d'env Vercel)

- `NEXT_PUBLIC_GOOGLE_CLIENT_ID` — l'identifiant client OAuth, côté navigateur.
- `SESSION_SECRET` — signe le cookie de session (`openssl rand -base64 32`).
- `KV_REST_API_URL`, `KV_REST_API_TOKEN` — déjà posées par l'intégration Upstash.

Rien de tout cela n'est nécessaire pour que l'app tourne : sans
`NEXT_PUBLIC_GOOGLE_CLIENT_ID`, la section de sauvegarde reste simplement
masquée, comme l'interrupteur de notifications l'est sans clé VAPID.

### Routes

| Route | Rôle |
|---|---|
| `POST /api/compte/connexion` | vérifie le jeton Google, pose la session |
| `POST /api/compte/deconnexion` | efface le cookie |
| `GET /api/compte` | dit seulement si la session est valide |
| `DELETE /api/compte` | efface toutes les données du compte |
| `GET /api/progression` | renvoie le bloc du compte |
| `PUT /api/progression` | fusionne le bloc envoyé avec celui stocké |

`DELETE` n'est pas facultative : le Play Store l'exige de toute app permettant
de créer un compte.

### Stockage serveur (Upstash Redis, déjà provisionné)

Une clé par compte : `progression:<sub>` →

```json
{ "v": 1,
  "profils": {
    "<idProfil>": { "avatar": "renard", "vues": [], "maitrisees": [],
                    "liberes": [], "chrono": {}, "age": 7, "tranche": "7-9",
                    "tutoVu": true, "maj": 1755000000000 } } }
```

L'avatar est sauvegardé — ce n'est pas une donnée personnelle, et il rend la
restauration humaine : sur un appareil neuf, le parent retrouve le profil 🦊 et
lui redonne son prénom, au lieu de deux profils anonymes indiscernables.

### Synchronisation (`lib/sync/`)

- **Quand** : au démarrage si la session est valide (tirer → fusionner →
  pousser), puis après un progrès, groupé (~10 s), et quand l'onglet passe en
  arrière-plan.
- **Comment** : `fusionner(a, b)` — union des ensembles, max des scores, `maj`
  la plus récente pour les scalaires. Fonction pure, testée, utilisée
  **des deux côtés** : le client fusionne ce qu'il tire, le serveur fusionne ce
  qu'il reçoit. Deux appareils qui écrivent en même temps convergent.
- **Hors ligne** : rien ne bloque jamais le jeu. Un échec réseau est silencieux
  et retenté au prochain démarrage.

### Expérience

- **Un seul profil : rien ne change.** Le sélecteur n'apparaît qu'à partir de
  deux profils. Les enfants déjà installés ne voient aucune différence.
- **Avatars animaux** plutôt que prénoms à l'écran de choix : à 3 ans on ne lit
  pas. Le prénom accompagne l'avatar pour ceux qui lisent.
- **Réglages** gagne une section « Famille » : liste des profils, ajouter,
  renommer, supprimer.
- **La sauvegarde vit derrière une porte parentale** : une petite question
  d'arithmétique avant d'afficher le bouton Google. Exigé par la Politique
  Familles du Play Store dès qu'une app pour enfants ouvre une fonction
  d'adulte.

## Vie privée et conformité

Le point coûteux de ce chantier, à traiter comme un livrable et non comme une
formalité.

- **La politique de confidentialité doit être réécrite.** Elle affirme
  aujourd'hui « aucune donnée collectée […] ni compte, ni inscription ». Ce ne
  sera plus vrai. La nouvelle version dira précisément : ce qui est stocké
  (progression, identifiant Google pseudonyme), ce qui ne l'est jamais (nom,
  e-mail, prénom de l'enfant), et comment tout effacer.
- **Formulaire « Sécurité des données » du Play Console** à mettre à jour.
- **Porte parentale** avant toute connexion.
- **Effacement** accessible depuis Réglages et par URL publique.
- Aucune donnée n'est collectée tant que personne ne se connecte.

## Tests

Tout ce qui est pur est testé sous `vitest`, comme le reste du projet :

- `migrer` — anciennes clés → profil unique, sans perte ; idempotence.
- `fusionner` — union, max, arbitrage par `maj`, commutativité et
  idempotence (deux appareils convergent quel que soit l'ordre).
- `cle` — préfixage, isolation entre profils.
- session — aller-retour signature/vérification, rejet d'un cookie falsifié,
  expiration.
- jeton Google — rejet d'une mauvaise audience, d'un mauvais émetteur, d'une
  signature invalide (JWKS simulé).

Les 7086 tests existants doivent rester verts : le recâblage des sept hooks est
la zone à risque.

## Hors périmètre

- Partage d'un profil entre deux familles.
- Fusion de deux comptes Google.
- Toute donnée décroissante (voir « Pourquoi la fusion est triviale »).
- Traduction anglaise des nouveaux textes au-delà du dictionnaire existant.
