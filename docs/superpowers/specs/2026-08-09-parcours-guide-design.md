# Conception — « Parcours », le mode guidé

Date : 2026-08-09
Statut : validé (design approuvé en séance), prêt pour l'implémentation

## Contexte

Fil rouge de tous les retours : le « chemin » utilisateur. Découvrir et Quizz sont
deux modes **libres** (on butine). Il manque le mode **accompagné**, façon Simply
Piano : celui qui prend par la main et dit *quoi faire ensuite*. On transforme
l'onglet **Parcours** (aujourd'hui un tableau de bord passif) en ce voyage guidé.

Décisions cadrées (séance) :
- **Un grand chemin linéaire** : tous les mondes s'enchaînent, un « Continuer »
  reprend là où on s'est arrêté.
- **Une étape = apprendre puis tester** : découvrir une carte, puis une question
  dessus, puis la suivante. Non-punitif : une mauvaise réponse donne l'explication
  et on avance quand même.
- **Progression partagée** avec Découvrir : découvrir une carte n'importe où fait
  avancer le chemin (on réutilise `cartesVues`, pas de compteur séparé).
- La **carte-chemin remplace** la liste actuelle de Mon parcours ; les badges
  🧭/🏅 y restent comme jalons.

## Ordre du parcours — `lib/parcours.ts` (pur, testé)
- `ordreParcours(cards, domains): ScienceCard[]` : les cartes dans l'ordre des
  domaines (`domains`), en conservant l'ordre d'origine des cartes dans chaque
  domaine.
- `prochaineEtape(ordre, cartesVues): ScienceCard | null` : la première carte de
  `ordre` absente de `cartesVues`. `null` quand tout est découvert.

## Orchestrateur de session — dans `ParcoursView`
État local `session: { carte, phase: 'decouverte' | 'quizz' } | null`.
- « Continuer » → `session = { carte: prochaineEtape, phase: 'decouverte' }`.
- **phase `decouverte`** : rend `CardModal` pour `session.carte`. La modale marque
  déjà la carte « vue » à l'ouverture (donc le chemin avance). À la fermeture
  (`onClose`) → phase `quizz`, sauf si la carte n'a pas de question à cet âge, où
  l'on enchaîne directement.
- **phase `quizz`** : rend `QuestionUnique` en plein écran pour `session.carte`.
  À la fin (`onTermine`) → carte suivante en `decouverte`, ou `session = null`
  (retour au Parcours) quand il n'y a plus de carte.
- Remontage forcé par `key` sur la carte, pour repartir d'un état propre.

## Question isolée — `components/parcours/QuestionUnique.tsx`
Une question, plein écran, réutilise le rendu du quizz sans la logique de série :
- Props : `card`, `question`, `age`, `onTermine`.
- Audio : `useQuizAudio(age)` — énoncé, propositions (bouton 🔊 par réponse en 6-8,
  index **source** comme dans `QuizView`), verdict + explication.
- Ordre des propositions : `ordreLecture` en 3-5, mélange stable (memo) sinon —
  même règle que `QuizView`.
- Bonne réponse : `marquerMaitrisee(card.id)` **et** `gagnerEtoiles(1)`, pour que
  le rang et les badges progressent aussi en mode guidé.
- Non-punitif : après la réponse, verdict + explication, puis un bouton
  **« Continuer → »** qui appelle `onTermine`.

## Écran Parcours — `components/parcours/ParcoursView.tsx`
Remplace `CollectionView` (renommée). Rendu (si l'âge est résolu) :
- **En-tête** : Lumi au rang + barre de progression du rang + « X/100 cartes
  découvertes » (compteur global depuis `cartesVues`).
- **Bloc « Continuer »** (primaire) : montre la prochaine étape
  (« Prochaine : {icône monde} {titre carte} ») ; lance la session. Quand tout est
  découvert : « Parcours terminé 🎉 » + relance possible du quizz libre.
- **Carte-chemin** : les 10 mondes en jalons verticaux reliés par une ligne —
  chacun avec icône, nom, `X/10` et ses badges 🧭/🏅. Le monde courant (celui de
  la prochaine carte) est mis en avant. Chaque jalon reste un **lien vers le
  détail** du monde (`/decouvrir/<id>`), comme aujourd'hui.

## Modes libres inchangés
Découvrir (grille + détail) et Quizz (choix + série) ne bougent pas. Parcours
devient le mode accompagné, à côté d'eux.

## Accessibilité / cas limites
- Aucune carte restante : le bloc « Continuer » devient un état « terminé ».
- Carte sans question à cet âge : on saute la phase quizz (avance directe).
- Accès sans âge : redirection vers `/` (motif des autres vues).
- Non-lecteurs : `QuestionUnique` garde l'audio auto en 3-5 comme le quizz.

## Tests
- `lib/parcours.ts` : `ordreParcours` (ordre des domaines, ordre interne conservé)
  et `prochaineEtape` (première non vue ; `null` si tout vu), **purs, en node**.
- `QuestionUnique`, `ParcoursView`, orchestrateur : `tsc`/`lint`/`build` +
  vérification visuelle (pas de harnais de rendu de composant).

## Impact
- Nouveaux : `lib/parcours.ts`, `tests/parcours.test.ts`,
  `components/parcours/QuestionUnique.tsx`, `components/parcours/ParcoursView.tsx`.
- Modifié : `app/(app)/parcours/page.tsx` (import ParcoursView).
- Supprimé : `components/cards/CollectionView.tsx` (remplacée).
- Aucune donnée nouvelle ; tout en `localStorage`, hors-ligne OK.
