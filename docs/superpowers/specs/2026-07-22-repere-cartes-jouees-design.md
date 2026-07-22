# Repère des cartes déjà jouées sur l'écran Découvrir

Date : 2026-07-22
Statut : approuvé

## Objectif

À quatre-vingts cartes, l'enfant ne sait plus où il en est. L'écran Découvrir
doit lui montrer d'un coup d'œil ce qu'il n'a pas encore écouté.

## Ce qui existe déjà

Le suivi est en place et sert au quizz, qui n'interroge que sur les cartes
écoutées :

- `useCartesVues()` publie `cartesVues: Set<string>` via `useSyncExternalStore`,
  persisté dans `localStorage` sous `science.cartesVues.v1` ;
- `CardModal` appelle `marquerVue(card.id)` **à l'ouverture** de la carte.

La fonctionnalité consiste donc à afficher une donnée déjà collectée, non à la
produire. C'est ce qui la rend petite.

## Décisions arrêtées

| Sujet | Décision | Raison |
|---|---|---|
| Sens de « déjà joué » | Ouverte, comme aujourd'hui | Réutilise le `Set` existant tel quel. Aucun risque de régression sur le quizz, aucune seconde notion à maintenir |
| Intention | Aider à trouver ce qui reste | À quatre-vingts cartes, le problème de l'enfant est de retrouver le non-exploré, pas de contempler ses trophées |
| Traitement | Le hublot s'éteint | La tuile *est* un hublot lumineux : on retire l'éclat au lieu d'ajouter un badge. Cohérent avec la métaphore du produit |
| Appareil partagé | Bouton de réinitialisation | Suffit au cas réel — on remet à zéro quand le cadet prend l'appareil |
| Comptes et authentification | Exclus | Voir ci-dessous |

### Pourquoi pas de comptes

L'option a été envisagée puis écartée, et il vaut la peine de dire pourquoi.

L'authentification **ne résout pas le problème posé**. Un enfant de quatre ans
ne se connecte pas ; un moins de treize ans n'a pas de compte Google standard,
mais un compte supervisé, et le RGPD comme la COPPA exigent un consentement
parental vérifiable. Le compte serait donc celui du parent, partagé par la
fratrie — exactement le point de départ. Distinguer l'aîné du cadet suppose de
toute façon des **profils**, dont l'authentification n'ajoute que la
synchronisation entre appareils.

Le profil est donc la primitive utile, et il n'a besoin d'aucun serveur. Si le
besoin multi-enfants se confirme, il fera l'objet d'un projet distinct :
profils locaux, sans compte, sans donnée personnelle — ce qui préserve la
position tenue depuis l'origine et rappelée dans le README.

## Design

### Données et état

`DiscoverView` s'abonne à `useCartesVues()` et passe le `Set` à `CardGrid`, qui
calcule `dejaJouee={cartesVues.has(card.id)}` pour chaque tuile. Le store
notifiant ses abonnés, la tuile s'éteint pendant que la modale est ouverte :
l'enfant voit le changement en refermant.

Ajout au hook : `oublierToutesLesVues()`, qui vide la clé et notifie.

`useCartesVues.ts` passe de `components/quiz/` à `components/cards/`. Son
emplacement actuel annonce une préoccupation du quizz, ce qui devient faux : la
modale l'écrit, la grille le lit, le quizz n'en est plus qu'un consommateur
parmi d'autres. Deux imports à corriger.

### Rendu de la tuile

`CardTile` reçoit `dejaJouee` et change deux propriétés :

| | Non jouée | Déjà jouée |
|---|---|---|
| `boxShadow` | `0 0 32px halo` | `none` |
| `borderColor` | `style.teinte` | `var(--color-encre-bord)` |
| Emoji | intact | intact |

L'emoji ne change pas. C'est ce qui distingue « déjà écoutée » de
« indisponible » : une carte jouée reste évidemment réécoutable, et une tuile
grisée se lirait comme désactivée.

Éteindre un halo est une variation de **luminance**, non de teinte : le signal
reste perceptible en cas de daltonisme. S'y ajoute, dans le bouton, un
`<span className="sr-only">, déjà écoutée</span>` — la redondance non visuelle
qu'impose la règle d'accessibilité du projet.

**Règle du catalogue complet.** Quand toutes les cartes du catalogue sont
jouées — `cartesVues.size >= cards.length`, jamais un nombre écrit en dur —
toutes se rallument. L'extinction n'existe que pour guider ; sans rien à
désigner, elle devient du bruit, et la grille entièrement allumée fait une fin.
La règle se calcule sur le catalogue entier et non sur le filtre courant, pour
ne pas clignoter quand on bascule d'un domaine à l'autre.

### Réinitialisation

Le bouton vit sur l'écran de niveau (`/?changer=1`), pas dans l'en-tête de
Découvrir. C'est une action d'adulte et destructive ; l'adulte s'y rend déjà au
moment exact où le cas se présente — il passe la tablette au cadet et change le
niveau ; et l'en-tête de Découvrir porte déjà deux boutons.

Confirmation en deux temps, en ligne : le bouton devient « Confirmer ? » au
premier appui, efface au second, et revient de lui-même à son état initial au
bout de quatre secondes sans confirmation. Pas de `confirm()` natif — bloquant, non stylable, et illisible pour
l'enfant qui l'aurait déclenché par accident.

## Vérification

Le projet n'a pas de tests de composants : ni `jsdom` ni Testing Library ne
figurent dans les dépendances. Cette fonctionnalité ne sera donc pas couverte
par la suite existante, et il vaut mieux le dire que de le maquiller.

- **Unitaire** : exporter depuis `useCartesVues.ts` deux fonctions pures,
  `lireVues(brut: string): Set<string>` et `ecrireVues(vues: Set<string>): string`,
  et les couvrir dans `tests/cartes-vues.test.ts` — chaîne vide, aller-retour,
  absence de doublon.
- **Manuel, dans le navigateur** : une tuile s'éteint après ouverture ; elle
  reste cliquable et réécoutable ; la réinitialisation rallume tout ; le
  rallumage à cent pour cent se déclenche.

Ajouter Testing Library est un autre chantier, hors de ce périmètre.

## Hors périmètre

- Comptes, authentification, synchronisation multi-appareils.
- Profils locaux multi-enfants — projet distinct si le besoin se confirme.
- Filtre « pas encore jouées » : c'est un contrôle, pas un signal, et un enfant
  de quatre ans ne s'en servirait pas. À reconsidérer si l'extinction seule ne
  suffit pas à l'usage.
- Distinction entre carte ouverte et carte écoutée jusqu'au bout.
