# Mode hors ligne : écouter en voiture

Date : 2026-07-22
Statut : approuvé

## Objectif

Rendre l'application utilisable sans réseau, l'usage visé étant la voiture. Un
parent télécharge tout avant de partir ; l'enfant écoute pendant le trajet.

## Ce que le chiffre impose

| | Poids |
|---|---|
| Code et interface | 1,1 Mo |
| Audio, tous âges | 147 Mo — 1 458 fichiers |
| Audio d'une seule tranche d'âge | 44 à 52 Mo |
| Une carte, un âge | ≈ 464 Ko |

L'application, c'est l'audio ; le reste est négligeable.

## Décisions arrêtées

| Sujet | Décision | Raison |
|---|---|---|
| Périmètre du téléchargement | **Tout**, un seul bouton | Un téléchargement par domaine ou par âge introduit un piège : le parent télécharge 6-8, l'enfant bascule en 9-12 sur l'autoroute, tout devient muet. 147 Mo pèsent un épisode de série et suppriment cette classe de bugs |
| Plateforme | PWA installable | La voiture n'exige pas le Play Store, elle exige le hors-ligne. Une PWA installée depuis Chrome y répond, sans compte développeur ni phase de test fermé |
| Coquille native | Écartée | L'enfant regarde l'écran ; la lecture audio en arrière-plan, seul point où la PWA aurait été prise en défaut, n'est pas nécessaire |
| Mises à jour | Signalées, téléchargées sur demande | Jamais de consommation de données non sollicitée. Le web détecte mal le wifi : promettre « seulement en wifi » serait mentir |
| État du téléchargement | Déduit du cache | Un drapeau stocké survivrait à un vidage de cache et mentirait |

## Design

### Socle

- `app/manifest.ts`, mode `standalone`, couleurs de la palette.
- Icônes PNG 192 et 512, exigées par Android pour proposer l'installation,
  rendues depuis `app/icon.svg` par la méthode Playwright déjà utilisée pour
  l'icône iOS — plutôt que d'ajouter une dépendance de rastérisation.
- `public/sw.js`, enregistré côté client, conformément au guide de cette
  version de Next.
- `navigator.storage.persist()` demandé à l'installation. Sans lui, Android
  peut évincer les 147 Mo sous pression disque.

Deux stratégies de cache :

| Ressource | Stratégie |
|---|---|
| Shell — 1,1 Mo | Précaché à l'installation, servi cache d'abord |
| Audio | Cache d'abord ; en cas d'absence et si le réseau répond, on récupère et on garde |

Le second point donne le cache opportuniste en prime : ce qu'un enfant écoute
à la maison est déjà disponible en voiture, même sans téléchargement explicite.

### Catalogue

Un script écrit `public/audio/catalogue.json` : chemin, empreinte et **taille**
de chaque fichier. Les manifestes existants portent les empreintes mais pas les
tailles ; sans elles, la progression compte des fichiers et non des octets, ce
qui la rend saccadée sur 1 458 éléments très inégaux.

Un test vérifie que le catalogue correspond aux mp3 réellement présents sur le
disque : c'est le garde-fou contre un catalogue périmé, qui ferait télécharger
des fichiers absents ou en oublier de nouveaux.

### Téléchargement

Une routine de page, non un précache de service worker : lots d'environ six
requêtes concurrentes, progression en octets. Elle est **reprenable sans état
supplémentaire**, l'avancement se déduisant du cache — ce qui s'y trouve déjà
n'est pas redemandé. Un téléchargement interrompu reprend où il en était.

### Écran

Une ligne sur le menu d'accueil, sous les deux boutons principaux, affiche
l'état et mène à `/hors-ligne` :

- *Télécharger pour la voiture — 147 Mo*
- *Téléchargement… 62 Mo sur 147*
- *Prêt hors connexion — 147 Mo*
- *Mise à jour disponible — 12 Mo*

L'entrée vit sur le menu plutôt que sur l'écran de niveau : c'est une action
que le parent doit pouvoir trouver, pas un réglage caché. La page porte aussi
la suppression, et affiche l'espace disponible via `navigator.storage.estimate()`
lorsque le stockage refuse.

### Cas limites

- **Hors ligne sans rien avoir téléchargé** : la carte bascule en lecture
  minutée — texte et animation continuent, sans voix. Ce repli, écrit pour les
  pannes de quota TTS, devient le filet du mode voiture.
- **Téléchargement interrompu** : reprise, l'état venant du cache.
- **Stockage refusé ou plein** : message explicite avec l'espace disponible.
- **Mise à jour disponible** : les fichiers déjà présents restent utilisables ;
  rien ne se télécharge sans un geste du parent.

## Addendum du 23/07/2026 — le différentiel de mise à jour

L'écran annonçait déjà « Mise à jour disponible » dans son design, mais rien ne
le calculait. Deux manques comblés ici.

**Détecter ce qui a changé.** `manquants()` ne testait que le chemin. Or un
texte corrigé produit un mp3 au même chemin : le cache en garde l'ancienne
version, et la détection ne voyait rien. La comparaison passe donc aux
empreintes, que le catalogue porte déjà.

**Où mémoriser les empreintes installées.** Le hook s'interdit tout drapeau
mémorisé à côté du cache — il survivrait à un vidage système et mentirait. Les
empreintes installées vivent donc *dans* le cache audio, sous une clé
sentinelle (`/audio/.installe.json`) : chemin → empreinte de ce qui a été
délibérément téléchargé. Un vidage du cache emporte la sentinelle, et l'app
retombe honnêtement sur « à télécharger ». Le service worker n'est pas touché,
la sentinelle n'étant jamais demandée par le réseau, seulement lue directement.

**Le calcul.** À l'ouverture de l'écran hors-ligne, le hook charge le catalogue
en ligne et lit la sentinelle. Le delta = fichiers absents (cartes nouvelles)
ou dont l'empreinte a changé (textes corrigés). Son poids donne le « — X Mo ».
Hors réseau, le chargement du catalogue échoue et aucune fausse alerte
n'apparaît : l'état installé est conservé.

**L'état `maj`.** Quand un delta existe par-dessus une installation antérieure,
l'écran affiche « Mise à jour disponible — X Mo » et un bouton qui ne télécharge
que le delta, puis rafraîchit la sentinelle. Les fichiers présents restent
jouables pendant ce temps.

**Fin d'un piège d'exploitation.** `npm run audio:catalogue` devait être relancé
à la main après chaque génération, sous peine d'ignorer les nouveaux fichiers.
Les trois scripts de génération le rappellent désormais en fin de course — le
catalogue scanne le disque, donc il reste juste même après une génération
partielle.

## Vérification

Le contrôle qui décide est reproductible : installer, télécharger, **couper le
réseau, recharger à froid**, ouvrir une carte et vérifier que la narration se
déroule. Playwright sait couper le réseau, ce test sera donc automatisé.

Pour le différentiel : télécharger, altérer une empreinte du catalogue, vérifier
que l'écran passe à « mise à jour disponible » avec le bon poids, mettre à jour,
et retrouver « prêt hors connexion ».

S'y ajoute un test unitaire sur la fraîcheur du catalogue.

## Hors périmètre

- Empaquetage TWA et publication sur le Play Store : projet distinct, surtout
  administratif, et non nécessaire à l'usage visé.
- Téléchargement sélectif par domaine ou par âge.
- Lecture audio en arrière-plan, écran verrouillé.
- Mise à jour automatique du contenu : elle est signalée, jamais appliquée
  sans un geste du parent.
