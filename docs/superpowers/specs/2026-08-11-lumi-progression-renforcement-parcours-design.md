# Lumi : progression, renforcement positif, Découvrir vs Parcours

Trois améliorations UX validées avec l'utilisateur, appuyées sur les standards
connus (chemin guidé + espace libre secondaire : Duolingo, Userpilot, Paths of
Learning).

## 1. Frise horizontale des rangs (LumiView)

**Problème :** les 6 rangs sont serrés sur une ligne (`flex-1` étroits, noms 11px)
et le texte se chevauche sur un vrai téléphone.

**Design :** remplacer la rangée de 6 chips par une **frise**.
- Une piste horizontale ; 6 pastilles = mini-Lumi à chaque rang, réparties
  (`justify-between`). La portion parcourue (jusqu'au rang courant) est remplie
  en soleil ; la pastille courante est agrandie + cerclée.
- Sous chaque pastille : uniquement le **seuil** (nombre court : 0/30/75/150/260/400)
  — jamais les noms côte à côte, c'est eux qui se chevauchaient.
- Une **légende** sous la frise nomme le rang **sélectionné** (par défaut le rang
  courant) : `{icône} {nom} — {seuil}⭐` + « atteint » ou « plus que N⭐ ».
- Chaque pastille est un bouton (`aria-label` complet) qui met à jour la légende.

## 2. Lumi félicite davantage (3 moments)

Réutilise `CelebrationProvider`/`LumiCelebre`, étendus d'une **variante légère**
auto-refermante (`variante: 'fete' | 'leger'`, `autoFermerMs?`). La variante
`leger` utilise Lumi en état `content`, un fond moins opaque, pas de bouton, et
se referme seule.

- **Encouragement au démarrage** :
  - Quizz : célébration légère « On y va ! » au lancement d'une série **depuis le
    menu** (pas sur « rejouer »/« sujet suivant », déjà en plein flux).
  - Parcours : présence de Lumi + ligne d'encouragement dans l'en-tête du chemin
    (inline, pas d'overlay).
- **Séries (3 d'affilée)** — Quizz : célébration légère « En pleine forme ! »
  quand `dAffilee` atteint un multiple de 3 (3, 6, 9…). Renforce le texte 🔥.
- **Bilan de fin** :
  - Quizz : l'écran de fin de série existe déjà (récap + étoiles) ; on passe Lumi
    en état `fete` et on ajoute un « Bravo ! ».
  - Parcours : l'écran « Parcours terminé » gagne une Lumi en `fete`.

## 3. Distinguer Découvrir et Parcours

Modèle : **chemin guidé (colonne vertébrale) + bibliothèque libre (secondaire)**.
- **Parcours = « ton aventure »** : une seule action « prochaine étape », carte +
  question, progression. En-tête recadré. À la fin, passerelle vers Découvrir en
  plus du quizz.
- **Découvrir = « la bibliothèque »** : sous-titre qui l'assume (explore et
  **revois** ce que tu veux, sans ordre) + renvoi discret « Envie d'un chemin ? →
  Parcours ».
- On garde les 4 onglets (guidé et libre sont complémentaires) ; distinction par
  la copy et quelques repères, risque faible.

## Fichiers touchés
- `components/lumi/LumiView.tsx` (#1)
- `components/celebration/CelebrationProvider.tsx`, `LumiCelebre.tsx` (#2, variante)
- `components/quiz/QuizView.tsx` (#2 : accueil, série, bilan)
- `components/parcours/ParcoursView.tsx` (#2 en-tête + fin, #3 recadrage + passerelle)
- `components/cards/MondesView.tsx` (#3 sous-titre + passerelle)
- Tests : `tests/etoiles.test.ts` déjà à jour ; pas de nouvelle logique pure testable
  hors présentation.
