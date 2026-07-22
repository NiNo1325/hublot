# Reculer dans l'explication, et voir où l'on en est

Date : 2026-07-22
Statut : approuvé

## Objectif

Retour d'usage : pause et réécoute ne suffisent pas. Un enfant qui a manqué
une phrase doit pouvoir revenir en arrière, et voir combien d'étapes compte
l'explication.

## Décisions arrêtées

| Sujet | Décision | Raison |
|---|---|---|
| Forme de la progression | Une barre segmentée, un segment par beat | La donnée existe déjà (`activeIndex`, `beats.length`). Et « quatre étapes, tu es à la deuxième » se comprend sans savoir lire, contrairement à un remplissage continu qui suppose de se représenter une durée |
| Segments | Cliquables | Permet d'atteindre une étape directement, en avant comme en arrière |
| Bouton reculer | Conservé malgré les segments | Plus gros, toujours au même endroit, sans viser |
| Reculer depuis une pause | Relance la lecture | L'intention du geste est « je veux réentendre » |
| Reculer sur le premier beat | Redémarre ce beat | Un bouton qui ne répond pas est incompréhensible à cet âge |
| Barre de temps continue | Écartée | Voir ci-dessous |

### Pourquoi pas une barre de temps continue

Deux raisons tenant au code, et une qui tient au public.

Le hook de narration ne provoque **aucun rendu pendant un beat** : il ne se
réveille qu'aux transitions. Une barre continue imposerait d'écouter
`timeupdate`, soit environ quatre rendus par seconde répercutés sur
l'animation SVG. Et une barre couvrant toute la carte suppose de connaître la
durée totale, que le navigateur ignore avant chargement — il faudrait
précalculer les durées dans `public/audio/manifeste.json`, ce qui est faisable
mais constitue un autre chantier.

Surtout, une ligne fine est intappable pour un enfant de trois ans, quand le
projet s'impose des cibles généreuses. Quatre segments hauts et espacés
respectent cette contrainte ; un curseur de deux pixels non.

À reconsidérer seulement si l'usage montre que les enfants cherchent à se
déplacer *à l'intérieur* d'un beat — ce qui est peu probable, un beat durant
une dizaine de secondes.

## Design

### Hook

`useNarration` expose deux fonctions de plus, construites sur la primitive
existante `play(depuis)` — celle qui fait déjà fonctionner « Réécouter » :

```ts
allerA(index)   // borné à [0, beats.length - 1]
reculer()       // allerA(activeIndex - 1)
```

Rien d'autre à changer : `play` remet déjà `estTermine` à faux, incrémente le
jeton de session et propage le mode minuté, si bien que la navigation
fonctionne aussi quand le son est indisponible.

### Composant `NarrationProgress`

Un fichier à part plutôt qu'un ajout dans `NarrationControls` : montrer la
progression et la commander est une préoccupation distincte de celle du bouton
principal.

- Un `<ol>` de segments, un par beat, chacun étant un `<button>`.
- Trois états : étape passée (pleine, discrète), étape en cours (pleine, en
  couleur d'accent, plus haute), étape à venir (creuse).
- Cible tactile d'au moins 48 px de haut, la barre visible n'en occupant qu'une
  douzaine — c'est le bouton qui est grand, pas le trait.
- `aria-current="step"` sur l'étape en cours, et un libellé pour lecteur
  d'écran par segment : « Étape 2 sur 4 ».

### Contrôles

`NarrationControls` reçoit un bouton reculer, secondaire, affiché seulement
une fois la narration commencée — avant, il ne désignerait rien.

## Vérification

Comme pour le repère de cartes jouées, la suite existante ne peut pas
atteindre ce comportement : ni jsdom ni Testing Library dans les dépendances.
Vérification dans un vrai navigateur — la barre suit la narration, un clic sur
un segment change de beat, le bouton reculer recule, reculer sur le premier
beat le redémarre, et l'animation change de phase en conséquence.
