# Traduire Hublot en anglais

Guide de travail pour la traduction du jeu. Le français est la langue source et
le reste : on n'y touche jamais. Traduire consiste uniquement à **ajouter** une
clé `en` à côté de la clé `fr` existante.

Le domaine **« Le son » est déjà traduit en entier** — cartes, quizz et légendes
d'illustration. C'est la référence : en cas de doute sur une convention, ouvrir
un de ses fichiers plutôt que d'inventer.

## Ce qu'un traducteur touche

Un agent prend **un domaine** et le traduit en entier, les trois volets
ensemble — c'est ce qui garantit qu'une même notion porte le même mot d'un bout
à l'autre du monde qu'il traite :

| Volet | Fichiers |
| --- | --- |
| Cartes | `content/cards/<domaine>/*.ts` — clé `en` dans `content` |
| Quizz | `content/quiz/<domaine>.ts` — clé `en` dans `questions` |
| Légendes d'illustration | `components/animations/*Animation.tsx` des cartes du domaine |

Les chaînes d'interface (boutons, titres d'écran, messages) ne sont **pas** du
ressort de ces agents : elles vivent dans `lib/i18n/dictionaries.ts` et se
traduisent par zone, un agent par zone.

Zones déjà traduites, à prendre pour modèle : `nav.` (barre d'onglets),
`decouvrir.`, `monde.`, `carte.`, `narration.`. Restent notamment le quizz, le
parcours, Lumi, les réglages, le tutoriel et les célébrations. Une chaîne se
traduit en ajoutant sa clé au bloc `en` ; une clé absente retombe sur le
français, donc une zone à moitié faite ne casse rien.

Les valeurs peuvent être des fonctions quand le texte dépend d'une variable —
c'est ainsi qu'on traite les pluriels, dont la règle diffère d'une langue à
l'autre (le français met « 0 carte » au singulier, l'anglais « 0 cards » au
pluriel). Voir `monde.progression`.

## Les règles qui ne se discutent pas

**Anglais britannique.** `colour`, `metre`, `recognise`, `whilst` non. Le
sélecteur de langue affiche 🇬🇧.

**Les identifiants ne se traduisent jamais.** `id` de beat (`un`, `deux`,
`trois`…), `id` de question, `cardId`, `domainId`, `animationId`. Ils nomment
les fichiers audio et pilotent les phases d'animation ; les traduire casse
l'illustration et la narration en silence. Deux tests le vérifient
(`tests/content.test.ts`, `tests/quiz.test.ts`) — ils échouent, mais autant ne
pas les déclencher.

**Ni ajouter ni retirer.** Même nombre de beats, mêmes clés, mêmes questions,
mêmes propositions, dans le même ordre. La bonne réponse reste écrite en
premier (`correcte: true`), les emojis `icone` restent tels quels. L'ordre
d'affichage des propositions chez les 3-5 ans est calculé à partir de l'`id` de
la question : il doit rester synchronisé avec un mp3 déjà enregistré.

**Traduire une carte entièrement, ou pas du tout.** Le repli se fait carte par
carte : une carte à moitié traduite laisse un blanc à l'écran, une carte
absente retombe proprement en français. Les trois tranches d'âge et le titre
vont ensemble.

**Chez les 3-5 ans**, deux propositions maximum et un énoncé de moins de 90
caractères — il est lu à voix haute. C'est vérifié par les tests.

## Le registre, qui fait tout le travail

Le contenu français est écrit avec un soin particulier sur ce point, et une
traduction plate le perdrait. Trois voix distinctes :

- **3-5 ans** — phrases très courtes, présent, concret, une idée par phrase.
  Onomatopées bienvenues. Aucun terme technique. *« A little string shakes very,
  very fast. »*
- **6-8 ans** — phrases complètes, une comparaison familière par idée (comme un
  sifflet, comme un tambour), le mot technique introduit seulement s'il est
  expliqué. *« When it vibrates very fast, it makes a high sound, like a
  whistle. »*
- **9-12 ans** — vocabulaire exact et assumé (frequency, amplify, cochlea),
  quantités chiffrées, causalité explicite. Jamais condescendant. *« A vibrating
  string makes a sound whose pitch depends on its frequency of vibration,
  measured in hertz. »*

**Les propositions fausses du quizz sont des idées reçues**, pas des pièges :
« la montagne qui parle », « le conducteur qui baisse le son ». Elles doivent
rester des erreurs que l'enfant pourrait réellement commettre en anglais aussi —
si une idée reçue française ne se transpose pas, on cherche l'équivalent, on ne
la traduit pas mot à mot.

**Aucune formulation ne sanctionne.** Le quizz sert à rectifier une croyance,
pas à noter.

## Les légendes d'illustration

Dans un `*Animation.tsx`, les textes du SVG passent par une table en tête de
fichier :

```tsx
const LEGENDES = {
  fr: { pincer: 'tu pinces la corde', /* … */ },
  en: { pincer: 'you pluck the string', /* … */ },
};
```

et se lisent `const legende = localise(LEGENDES, locale);` puis
`{legende.pincer}`. Le typage impose à `en` de reprendre exactement les clés de
`fr` : une légende oubliée ne compile pas.

Ces légendes sont **très courtes par nécessité** : elles sont posées à une
coordonnée fixe dans un cadre de 400×240. Une traduction plus longue déborde ou
recouvre un autre texte. Viser la longueur du français, jamais beaucoup plus.
Pas de majuscule initiale, pas de point final — c'est le style de toutes les
légendes.

Les symboles (`♪`, `✨`, `!`) ne sont pas du texte à traduire.

## Vérifier avant de rendre

```
npx tsc --noEmit     # clés manquantes, structure
npm run lint
npm test             # intégrité du contenu et du quizz, dans chaque langue
```

Puis, pour les légendes uniquement — il faut l'app démarrée (`npm run build &&
npx next start`) :

```
npm run audit:illustrations -- http://localhost:3000 en
```

Il ouvre chaque carte de la langue demandée et signale tout texte qui sort du
cadre ou en recouvre un autre. C'est le seul contrôle qui attrape une légende
anglaise trop longue. Sans l'argument de langue, il audite tout le catalogue,
ce qui prend plusieurs minutes.

## L'audio n'est pas de ce chantier

Les mp3 anglais sont une phase à part (régénération TTS complète vers
`/audio/en/`). En attendant, l'anglais est muet : la carte défile en minuté, le
quizz reste jouable en silence. C'est voulu — ne pas essayer de faire pointer
l'anglais vers les mp3 français.
