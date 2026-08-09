# Conception — Cinq nouveaux domaines (50 cartes)

Date : 2026-08-10
Statut : conçu + implémenté (contenu/quiz/animations/intégration) ; audio différé ; non déployé.

## Contexte

Demande : ajouter 5 catégories de 10 cartes chacune, sans redite avec les 100
cartes existantes, en générant tout le nécessaire et en vérifiant la qualité.
Travail mené en autonomie, avec des sous-agents.

## Décisions structurantes

- **5 domaines** distincts des 10 existants, choisis pour éviter les redites :
  `le-son`, `les-dinosaures`, `le-corps` (sens/mouvement/peau/dents, pas les
  organes déjà pris par biologie), `les-oceans` (vagues/abysses/corail, pas
  marées ni sel déjà pris par la Terre), `la-cuisine` (transformations
  culinaires, pas feu/états/acides/odeurs déjà pris par la chimie).
- **Beats standardisés** : chaque nouvelle carte a 4 beats d'id `un/deux/trois/
  quatre`, identiques aux trois âges (contrainte du moteur d'animation).
- **Animations** : une **animation générique** (`GenericBeatAnimation`),
  paramétrée par l'emoji de la carte et la teinte du domaine, pilotée par les 4
  beats. Chaque carte y est reliée via le registre. C'est une base commune,
  sobre et vivante, en attendant d'éventuelles animations sur mesure comme
  celles des 100 cartes historiques.
- **Audio différé** : ~1000 fichiers TTS (narration + quiz + accroches) ne sont
  pas générés tant que le contenu n'est pas relu. Les cartes sont déclarées « en
  attente » (listes recalculées par `npm run audio:attente`) : l'app fonctionne
  en silence pour elles, les tests passent. Génération ensuite par `npm run
  audio` / `audio:quiz` / `audio:accroches`.
- **Compteurs dynamiques** : parcours, Lumi, badges lisent `ordre.length` /
  `domains.length` → passent automatiquement de 100 à 150 cartes et de 10 à 15
  mondes, sans code à changer.
- **Pas de déploiement** : gros ajout de contenu à relire ; intégré sur une
  branche, laissé à la validation humaine.

## Les 5 domaines (icône, teinte, accroche)

- 🎵 **Le son** (fuchsia #e879f9) — « La même corde peut chanter grave ou aigu, il suffit de la raccourcir. »
- 🦕 **Les dinosaures** (stone #c8a97e) — « Sous nos pieds dort un monde de géants disparus il y a des millions d’années. »
- 🧍 **Le corps** (pink #f9a8d4) — « Sous ta peau, des muscles tirent et des capteurs veillent sans que tu y penses. »
- 🌊 **Les océans** (blue #60a5fa) — « Tout au fond, dans le noir glacé, des animaux fabriquent leur propre lumière. »
- 🍳 **La cuisine** (yellow #fde047) — « Dans la casserole, la matière change de couleur, de goût et de forme. »

## Les 50 cartes

- **Le son** : l'écho, aigu/grave, les voix, l'oreille, le bruit qui fait mal,
  la guitare, l'effet Doppler (sirène), la voix enregistrée, ultrasons/
  infrasons, les notes qui vont ensemble (octave).
- **Les dinosaures** : le puzzle des os, l'astéroïde, les oiseaux = dinosaures,
  l'échelle du temps, pourquoi si grands, carnivore/herbivore (dents), les
  traces de pas, plumes et couleurs, « pas tous des dinosaures », après les
  dinosaures (mammouths).
- **Le corps** : la chair de poule, l'éternuement, les larmes, la peau/la
  sueur, les empreintes digitales, la douleur-alarme, les muscles qui tirent,
  l'équilibre (oreille interne), la vision en relief, les dents de lait.
- **Les océans** : les vagues, les courants, le noir des profondeurs, la
  pression, le corail, la bioluminescence, les sources hydrothermales, le
  plancton, flotter en eau salée, le tsunami.
- **La cuisine** : le pain qui gonfle (levure), le doré (Maillard), l'oignon
  qui fait pleurer, le piment, le pop-corn, le yaourt (fermentation), l'œuf qui
  durcit, le soda qui pétille, la pomme qui brunit, le miel qui se conserve.

## Fichiers touchés

- Nouveaux : 50 `content/cards/<domaine>/<slug>.ts`, 5 `content/quiz/<domaine>.ts`,
  `components/animations/GenericBeatAnimation.tsx`.
- Modifiés : `lib/types.ts` (union DomainId), `lib/domain-styles.ts`,
  `content/domains.ts`, `content/cards/index.ts`, `content/quiz/index.ts`,
  `components/animations/registry.tsx`, `public/sw.js` (SHELL + VERSION),
  listes « en attente » des tests audio.

## Reste à faire (après relecture)

- Générer l'audio (`npm run audio`, `audio:quiz`, `audio:accroches`, puis
  `audio:catalogue` et `audio:attente`).
- Éventuelles animations sur mesure pour remplacer la générique, carte par carte.
- Déploiement (`vercel --prod`) après validation.
