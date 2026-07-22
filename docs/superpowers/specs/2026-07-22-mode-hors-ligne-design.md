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

## Vérification

Le contrôle qui décide est reproductible : installer, télécharger, **couper le
réseau, recharger à froid**, ouvrir une carte et vérifier que la narration se
déroule. Playwright sait couper le réseau, ce test sera donc automatisé.

S'y ajoute un test unitaire sur la fraîcheur du catalogue.

## Hors périmètre

- Empaquetage TWA et publication sur le Play Store : projet distinct, surtout
  administratif, et non nécessaire à l'usage visé.
- Téléchargement sélectif par domaine ou par âge.
- Lecture audio en arrière-plan, écran verrouillé.
- Mise à jour automatique du contenu.
