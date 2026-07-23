# Animations explicites : montrer le mécanisme, pas seulement le résultat

Date : 2026-07-23
Statut : audit terminé (80/80), deux corrections retenues

## Le problème

Retour d'usage : plusieurs illustrations montrent ce qui arrive sans montrer
pourquoi. La plume tombe lentement, mais rien ne dit que l'air la freine. Pire,
l'animation des aimants écarte deux barreaux pendant que la voix affirme qu'ils
s'attirent — le visuel contredit la narration.

Dans ce produit, l'animation *est* l'explication. Une illustration qui ne
montre que l'effet laisse la carte à moitié faite.

## La grille (approuvée)

Quatre règles, contre lesquelles chaque animation est jugée.

1. **Montrer la cause, pas seulement l'effet.** La plume qui traîne est
   l'effet ; la flèche d'air qui la pousse vers le haut est la cause.
2. **Matérialiser l'invisible** — forces, attraction, répulsion — par une
   flèche ou un signe explicite, jamais par le seul comportement d'un objet.
3. **Opposer l'idée reçue et la vérité côte à côte** quand c'est possible :
   avec air / sans air, pôles identiques / pôles opposés. Le contraste corrige.
4. **Ne jamais contredire la voix.** Un visuel qui dit l'inverse du texte est
   pire que pas d'illustration.

### Les deux exemples fondateurs

- **Plume** (gravité) : sur Terre, flèche « air » vers le haut sur la plume,
  plus courte sur la bille ; sur la Lune, aucune flèche, chute simultanée. La
  différence de flèches est l'explication.
- **Aimant** : deux paires montrées ensemble — S↔S, flèches divergentes qui
  repoussent ; N↔S, flèches convergentes qui collent. Fin du mouvement ambigu.

## Contrainte

Toute flèche ou étiquette ajoutée doit passer l'audit d'illustrations existant
(`npm run audit:illustrations`) : ni texte hors cadre, ni recouvrement de
légendes. Sur les animations déjà chargées, cela impose parfois de retirer
avant d'ajouter — l'objectif est la clarté, pas l'accumulation.

Le mode `prefers-reduced-motion` doit rester traité : les flèches sont alors
statiques, comme le reste.

## Méthode et résultat de l'audit

Les 80 animations lues une par une, code croisé avec le texte des beats,
captures à l'appui pour les cas litigieux. Résultat sans appel : **deux
animations en défaut, exactement les deux signalées par l'usage.** Les
soixante-dix-huit autres appliquent la grille avec une constance remarquable —
flèches de force, cas contrastés, réfutations visuelles.

| Panier | Cartes | Détail |
|---|---|---|
| **Contredit la voix** | `aimants` | Les barreaux qui se font face montrent S↔S (pôles identiques), la voix dit « pôles opposés : ils s'attirent », et le mouvement les écarte comme une répulsion. Aucune flèche |
| **Ne montre que le résultat** | `gravité` (`pourquoi-tout-tombe`) | La plume tombe plus lentement avec l'air, mais rien ne montre pourquoi : pas de flèche de résistance vers le haut, et le contraste Terre/Lune n'est qu'une étiquette texte |
| **Montre déjà le mécanisme** | les 78 autres | Rien à faire |

Que ce soient les deux plus anciennes cartes du projet n'est pas un hasard :
elles précèdent l'installation du réflexe « montrer la cause », que toutes les
suivantes ont appliqué.

## Corrections retenues

- **Aimants** : deux paires côte à côte — S↔S avec des flèches divergentes qui
  repoussent, N↔S avec des flèches convergentes qui collent. Fin du mouvement
  et du texte contradictoires.
- **Plume** : sur Terre, une flèche « air » vers le haut sur la plume, plus
  courte sur la bille ; sur la Lune, aucune flèche, et les deux tombent
  ensemble. La différence de flèches devient l'explication.

## Hors périmètre pour l'instant

Le contenu (texte des beats, choix des cartes) ne change pas : seule la couche
visuelle est en cause. Aucune régénération audio.
