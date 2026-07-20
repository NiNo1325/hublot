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

La voix passe par `speechSynthesis`, natif du navigateur : aucune clé d'API,
aucun coût, fonctionne hors ligne. Quand la voix est absente ou défaillante, la
carte bascule automatiquement en lecture minutée — le texte défile et
l'animation continue. L'enfant n'est jamais bloqué devant un écran figé.

## Vie privée

Aucun compte, aucune donnée personnelle, aucune analytique. La seule information
conservée est la tranche d'âge, dans le `localStorage` du navigateur.
