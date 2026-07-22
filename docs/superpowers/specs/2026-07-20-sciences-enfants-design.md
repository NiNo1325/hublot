# Application de gamification des sciences pour enfants (3-12 ans)

Date : 2026-07-20
Statut : approuvé

## Objectif

Application web où des enfants de 3 à 12 ans découvrent des concepts scientifiques
via des cartes illustrées. Cliquer sur une carte lance une animation SVG synchronisée
avec une explication lue à voix haute, adaptée à la tranche d'âge de l'enfant.
L'utilisateur filtre les domaines scientifiques qui l'intéressent.

## Décisions arrêtées

| Sujet | Décision | Raison |
|---|---|---|
| Contenu | Pré-écrit en dur dans le repo, 3 variantes d'âge par carte | Zéro coût API, zéro latence, contenu contrôlé et sûr pour un public enfant |
| Voix | Fichiers `.mp3` préenregistrés via l'API TTS Gemini (voix Callirrhoe), un par beat | Qualité constante sur tous les appareils, aucun coût à l'exécution, pause fiable |
| Langue | Français uniquement en V1 | Structure de données prête pour l'i18n, pas d'implémentation |
| Niveau d'âge | Sélecteur à l'entrée, persisté en `localStorage` | Pas de compte, aucune donnée personnelle (RGPD/COPPA) |
| Animation | SVG animé en CSS / Framer Motion, codé à la main | Léger, net sur tout écran, synchronisable avec la narration |
| Stack | Next.js 16 App Router, TypeScript, Tailwind 4, Vercel | — |

Exclus par YAGNI : state manager global, base de données, authentification,
tests de régression visuelle.

## Périmètre V1

1. Squelette déployé sur Vercel (valider la chaîne CI/CD avant d'y investir du travail).
2. Une carte complète et exemplaire de bout en bout : **le cycle de l'eau**.
3. Sélecteur d'âge + menu de sélection des domaines.

Le reste du catalogue vient après, une fois le concept affiné.

## Première carte : le cycle de l'eau

Choisie parce que le concept se découpe en 4 temps narratifs distincts
(évaporation → condensation → précipitation → ruissellement). Cela force à
construire dès la V1 le mécanisme de synchronisation narration/animation
segment par segment, plutôt que de le bricoler plus tard.

Le SVG reste simple (soleil, mer, nuage, gouttes) et le même schéma visuel sert
les trois tranches d'âge — seul le texte change.

Alternatives écartées : cycle jour/nuit (un seul temps, ne teste pas la
synchronisation), phases de la Lune (géométrie trop lourde pour une carte de démo).

## Concept structurant : le « beat »

Une explication est une suite de **beats**. Chaque beat est simultanément une
phrase lue à voix haute et une phase d'animation.

```ts
explanation: {
  '3-5': { beats: [{ id: 'evaporation', text: '...' }, ...] }
}
```

La narration démarre un beat → `activeBeatId` change → l'animation change de phase.
C'est ce qui donne l'impression que la carte raconte, au lieu de bouger en fond sonore.

Conséquence : ajouter une carte = créer un fichier de contenu + un composant
d'animation. Rien d'autre à modifier.

## Modèle de données

```ts
export type Locale = 'fr';                    // union à étendre plus tard
export type AgeRange = '3-5' | '6-8' | '9-12';

export type DomainId =
  | 'physique' | 'chimie' | 'biologie' | 'astronomie'
  | 'sciences-de-la-terre' | 'informatique' | 'ingenierie' | 'mathematiques';

export interface DomainDefinition {
  id: DomainId;
  icon: string;                               // emoji
  color: string;                              // token de couleur
  labels: Record<Locale, string>;
}

export interface CardBeat { id: string; text: string; }
export interface CardExplanation { beats: CardBeat[]; }

export interface CardContent {
  title: Record<AgeRange, string>;
  explanation: Record<AgeRange, CardExplanation>;
}

export interface ScienceCard {
  id: string;                                 // slug unique
  domainId: DomainId;
  animationId: string;                        // clé du registre d'animations
  thumbnail: string;                          // emoji affiché avant interaction
  content: Record<Locale, CardContent>;
}
```

Organisation :
- `content/cards/<domaine>/<slug>.ts` — un fichier par carte, données pures (aucun JSX).
- `content/cards/index.ts` — imports explicites, exporte `cards: ScienceCard[]`.
  Pas de scan de dossier : à l'échelle visée (des dizaines de cartes), une liste
  explicite est plus simple et plus sûre qu'un générateur.
- `content/domains.ts` — liste ordonnée, l'ordre définit l'affichage.

L'animation est découplée des données via un registre indexé par `animationId`.
Un test unitaire garantit qu'aucune carte n'existe sans son animation.

## Composants

| Composant | Frontière | Responsabilité |
|---|---|---|
| `app/page.tsx` | Server | Écran d'accueil |
| `AgeGate` | Client | Lit l'âge stocké ; sinon affiche 3 tuiles pictogrammes ; persiste et redirige |
| `app/decouvrir/page.tsx` | Server | Importe `cards` et `domains`, les passe en props |
| `DiscoverView` | Client | État : domaines sélectionnés, carte ouverte. Redirige vers `/` si aucun âge |
| `DomainFilter` | client | Pastilles multi-sélection + bouton « Tout » |
| `CardGrid` | client | Dispose les tuiles filtrées |
| `CardTile` | client | Tuile focusable ; masque le titre si `ageRange === '3-5'` |
| `CardModal` | client | Animation + narration + contrôles ; focus trap, Escape, cleanup |
| `useSpeech` | hook | Toute l'orchestration `speechSynthesis` |
| `NarrationControls` | client | Rejouer / pause / muet |

Un seul point d'entrée `'use client'` par écran (`AgeGate`, `DiscoverView`) : tout
le sous-arbre est client sans répéter la directive, les pages restent des Server
Components légers. Pas de Context React — l'arbre fait 3-4 niveaux, le prop
drilling reste lisible.

## Flux utilisateur

1. `/` → `AgeGate` lit `localStorage['science.ageRange.v1']`.
2. Absent → 3 tuiles pictogrammes. Tap → persistance → `/decouvrir`.
3. Présent → redirection immédiate.
4. `/decouvrir` importe les données au build (aucune latence réseau).
5. Filtre par défaut : tous les domaines. Tap sur une tuile → `CardModal` monte.
6. `useSpeech` s'initialise, découpe les beats, lance le premier `speak()`
   **de façon synchrone dans le geste utilisateur**.
7. Par beat : `onstart` → `activeBeatId` → l'animation change de phase ;
   `onend` → beat suivant. Fin → animation en boucle « au repos ».
8. Fermeture → `cancel()` + cleanup → focus restitué à la tuile d'origine.

## Révision du 20/07/2026 — abandon de `speechSynthesis`

La synthèse navigateur a été implémentée puis remplacée : la voix était
robotique et sa qualité variait trop d'un appareil à l'autre pour un produit où
l'écoute porte le contenu. Le contenu étant fixe, il n'y avait aucune raison de
synthétiser à la volée.

Les fichiers sont générés hors ligne par `scripts/generer-audio.mjs` et servis
depuis `public/audio/<carte>/<âge>/<beat>.mp3`. Le découpage en beats a rendu la
migration indolore : `ended` d'un élément audio a remplacé `onend`, et le
mécanisme de synchronisation avec l'animation n'a pas bougé.

Bénéfices constatés :

- la pause reprend à la milliseconde près, le contournement décrit plus bas
  (annuler puis relancer le beat au début) n'a plus lieu d'être ;
- le beat suivant est préchargé pendant la lecture du courant, sans blanc ;
- un test d'intégrité vérifie qu'aucun beat n'est dépourvu de fichier audio —
  sans lui, une carte muette basculerait silencieusement en mode minuté.

Deux pièges spécifiques à l'audio, découverts en test :

- **Lecture automatique refusée.** Le navigateur peut bloquer `play()` si le
  geste utilisateur lui paraît trop ancien. Le hook revient alors à « prêt » et
  le bouton « Écouter » prend le relais, sans basculer en minuté : le son est
  disponible, il ne manque qu'une interaction.
- **Création et démarrage doivent être atomiques.** Séparer l'instanciation de
  l'élément audio et le lancement de la narration dans deux effets laisse, après
  un cycle démontage/remontage, un élément neuf que rien ne relance.

Les parades ci-dessous concernent l'implémentation historique et sont
conservées pour mémoire.

## Révision du 22/07/2026 — le catalogue est complet

Quatre-vingts cartes, dix par domaine, plus un mode quizz de deux cent
quarante questions. Le périmètre V1 est dépassé ; ce qui suit n'était pas dans
le plan initial et mérite d'être consigné.

**Une règle de contenu s'est imposée** : chaque carte corrige une idée reçue
identifiée, et la mauvaise réponse du quizz reprend cette idée reçue. Ce n'est
pas un habillage. C'est ce qui distingue une carte utile d'un résumé
d'encyclopédie, et c'est ce qui a permis de choisir les sujets — quand aucune
idée reçue n'émerge, le sujet ne fait pas une bonne carte.

**Le coût s'est déplacé de l'écriture vers la vérification.** À dix cartes par
domaine, le risque n'est plus de manquer d'idées mais d'écrire un doublon. Six
sujets ont été abandonnés en cours de route parce que le catalogue les
traitait déjà, parfois dans un domaine voisin : le « cloud » par la carte
internet, la pression atmosphérique par celle sur l'air, l'arbre fait d'air
par la photosynthèse. Toute vague suivante devra commencer par un `grep`, et
non par un brainstorming.

**Le quota TTS gouverne le rythme, pas la rédaction.** Une vague de huit
cartes demande cent quarante-quatre générations. L'API interactive sature
autour de la centaine par jour ; l'API Batch a son propre quota et prend le
relais. Le mur se heurte en fin de journée américaine, jamais le matin.

**Deux garde-fous se sont révélés indispensables**, tous deux absents du plan
initial : l'audit des illustrations dans un vrai navigateur, qui mesure les
positions réelles des textes et attrape les collisions entre légendes de
phases différentes ; et le test de couverture audio, sans lequel une carte
muette passerait inaperçue jusqu'à ce qu'un enfant l'ouvre.

## Narration : pièges et parades

- **Voix chargées en asynchrone** : `getVoices()` renvoie souvent `[]` au premier
  appel. Tenter immédiatement, écouter `onvoiceschanged`, **et** prévoir 3 tentatives
  espacées de 250 ms — l'événement n'est pas déclenché de façon fiable partout.
- **Pas de voix française** : chercher `fr-FR`, puis tout `lang` commençant par `fr`,
  en priorisant les voix locales. Si aucune, jouer avec la voix par défaut plutôt
  que de bloquer.
- **Pause/reprise** : `pause()`/`resume()` est cassé sur Chrome desktop. Le bouton
  pause appelle `cancel()` et mémorise l'index du beat ; reprendre relance le beat
  depuis son début. On perd la reprise en milieu de phrase, on gagne la fiabilité.
- **Démontage** : `cancel()` dans le cleanup + un `cancelledRef` pour ignorer les
  callbacks tardifs (évite les races si l'enfant enchaîne deux cartes).
- **Autoplay** : Safari exige que le premier `speak()` de la session soit synchrone
  dans le gestionnaire de clic — jamais après un `await` ou un `setTimeout`.
- **API absente ou `onerror`** : bascule en mode silencieux (texte affiché +
  animation en boucle sur minutage fixe par beat). L'enfant n'est jamais bloqué.
- **Chevauchement** : toujours `cancel()` avant tout nouveau `speak()`.

## UX pour très jeunes enfants

- Cibles tactiles à **88px** minimum (au-delà des 44px WCAG) : la précision motrice
  des 3-5 ans est plus faible.
- **Zéro texte à 3-5 ans** : sélecteur d'âge en pictogrammes (jamais « 3-5 ans »
  écrit), titres de cartes masqués visuellement, reconnaissance par couleur de
  domaine + emoji.
- Navigation sans lecture : un chemin linéaire, icônes universelles toujours au
  même endroit.
- Feedback visuel sous 100 ms sur toute interaction.
- Aucun cul-de-sac : sortie visible et large sur chaque écran ; le bouton fermer
  reste fixe pendant toute la narration.
- Aucune saisie clavier, aucun lien externe dans le parcours enfant.

## Accessibilité

- Contraste WCAG AA. Jamais d'information portée uniquement par la couleur
  (icône ou forme distinctive en complément).
- `<button>` natifs, focus visible, `Escape` ferme la modale, focus trap avec
  restitution du focus à la tuile d'origine.
- **`prefers-reduced-motion`** : remplacer les mouvements par des fondus entre
  états statiques par beat. Ne jamais supprimer le visuel — l'animation est le
  cœur du produit.
- SVG en `aria-hidden`, texte de l'explication **toujours présent dans le DOM**
  (visuellement discret pour les 3-5 ans), pour les lecteurs d'écran et les parents.

## Tests

- **Unitaire (Vitest)** : intégrité du contenu (3 tranches d'âge non vides,
  `domainId` et `animationId` valides) — filet indispensable puisque le contenu
  grandira ; `pickFrenchVoice` sur plusieurs jeux de voix simulées ; `storage`
  avec `localStorage` absent ou qui lève.
- **Composants (RTL)** : titre masqué à 3-5 ans, toggle du filtre, persistance
  et redirection de `AgeGate`.
- **E2E (Playwright, un scénario complet)** : accueil → âge → grille → filtre →
  carte → changement d'état de l'animation → fermeture → focus restitué.
  `speechSynthesis` mocké via `addInitScript` : on teste l'orchestration, pas
  le rendu audio.

## Gestion d'erreurs

| Panne | Comportement |
|---|---|
| Voix échoue / API absente | Mode silencieux : texte + animation sur minutage fixe |
| Animation qui crashe | Error Boundary locale à la modale → emoji agrandi ; la narration continue |
| `localStorage` indisponible | Repli en mémoire pour la session ; l'âge ne survit pas au rechargement (dégradé accepté, pas d'UI d'erreur) |
| Erreur imprévue | `app/error.tsx` : message simple + retour à l'accueil |

## Séquence d'exécution

1. Scaffold Next.js. *(fait)*
2. Installer `gh`, créer le repo GitHub, premier push. **[auth utilisateur]**
3. Lier et déployer le squelette sur Vercel. **[auth utilisateur]**
4. `lib/storage.ts` + `lib/types.ts` + `content/domains.ts`.
5. `AgeGate` et la route `/`.
6. Contenu de la carte « cycle de l'eau » (3 variantes, découpage en beats).
7. `CardGrid`, `DomainFilter`, `CardTile` sur `/decouvrir`.
8. `lib/voices.ts` + `useSpeech`.
9. `CycleDeLEauAnimation` pilotée par `activeBeatId`, avec mode reduced-motion.
10. `CardModal` : assemblage animation + narration + contrôles + fallback.
11. Passe accessibilité, tests, déploiement production.
12. Vérification sur mobile réel avec voix système française. **[utilisateur]**
