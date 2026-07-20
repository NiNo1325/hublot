# Hublot

Des cartes animées et racontées à voix haute pour découvrir les sciences, de 3 à 12 ans.

Chaque carte illustre un concept scientifique par une animation SVG synchronisée
avec une explication lue à voix haute, adaptée à la tranche d'âge de l'enfant.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm test         # tests unitaires
npm run lint
npm run build
```

## Comment c'est organisé

| Dossier | Rôle |
|---|---|
| `content/` | Le catalogue : cartes et domaines, données pures sans JSX |
| `components/animations/` | Une animation SVG par carte, plus le registre qui les relie |
| `components/narration/` | Orchestration de `speechSynthesis` |
| `lib/` | Types, stockage, sélection de la voix |
| `docs/superpowers/specs/` | Le document de design |

## Le concept de « beat »

Une explication est une suite de **beats**. Un beat est à la fois une phrase lue
à voix haute et une phase d'animation : quand la narration démarre un beat,
l'animation change de phase. C'est ce qui donne l'impression que la carte
raconte, plutôt que de bouger en fond sonore.

Les trois tranches d'âge d'une carte partagent **la même liste d'identifiants de
beats** — seul le texte change. Cela permet à une animation unique de servir les
trois niveaux. Un test le vérifie.

## Ajouter une carte

1. Créer `content/cards/<domaine>/<slug>.ts` sur le modèle de
   [`cycle-de-leau.ts`](content/cards/sciences-de-la-terre/cycle-de-leau.ts) :
   un titre et une suite de beats pour chacun des trois âges.
2. Écrire le composant d'animation dans `components/animations/`, piloté par
   `activeBeatId`. Prévoir le rendu `prefersReducedMotion`.
3. L'enregistrer dans `components/animations/registry.tsx`.
4. L'ajouter à `content/cards/index.ts`.

`npm test` échoue si une carte est incomplète, référence un domaine inconnu,
oublie une tranche d'âge, ou n'a pas d'animation enregistrée.

## Narration

La voix est **préenregistrée**, pas synthétisée dans le navigateur : un fichier
`.mp3` par beat, généré par l'API TTS de Gemini (voix Callirrhoe) et servi en
statique depuis `public/audio/`. Qualité identique sur tous les appareils,
aucun coût à l'exécution, fonctionne hors ligne.

Le premier essai reposait sur `speechSynthesis`. C'était gratuit, mais la voix
était robotique et sa qualité variait d'un appareil à l'autre — rédhibitoire
pour un produit où l'enfant doit *écouter* pour comprendre. L'audio
préenregistré a un bénéfice technique en prime : la pause reprend exactement où
elle s'est arrêtée, ce que l'API de synthèse ne permettait pas de façon fiable.

### Générer l'audio

```bash
npm run audio               # ne régénère que ce qui a changé
npm run voix:echantillons   # compare plusieurs voix sur un même texte
```

Les deux scripts lisent `GEMINI_API_KEY` depuis `.env.local`, qui n'est **pas**
suivi par git. La clé ne sert qu'à la génération locale : elle n'est jamais
déployée, seuls les fichiers produits le sont.

`public/audio/manifeste.json` mémorise l'empreinte du texte, de la voix et du
modèle pour chaque beat. Modifier une phrase suffit à faire régénérer ce seul
fichier au prochain passage.

Si un fichier manque ou que le réseau lâche, la carte bascule en lecture
minutée : le texte défile et l'animation continue. L'enfant n'est jamais bloqué
devant un écran figé.

## Vie privée

Aucun compte, aucune donnée personnelle, aucune analytique. La seule information
conservée est la tranche d'âge, dans le `localStorage` du navigateur.
