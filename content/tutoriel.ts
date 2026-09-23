import type { Localise } from '@/lib/types';

/**
 * Contenu du tutoriel de présentation, guidé par Lumi.
 *
 * Extrait ici (données pures, sans JSX) pour être partagé par le composant
 * `Tutoriel` et le script de génération audio `generer-audio-tutoriel.mjs` : le
 * texte lu à voix haute est ainsi toujours celui affiché.
 *
 * Un écran par onglet, dans l'ordre de la barre du bas. Le tutoriel ne raconte
 * pas ce qu'on peut faire, il dit où ça se trouve : un enfant qui vient de le
 * voir doit savoir quel bouton toucher, pas se souvenir d'une promesse. Les
 * `id` nomment les fichiers audio.
 */
export interface EcranTuto {
  /** Identifiant stable, sert au nom du fichier audio. */
  id: string;
  /** Rang de Lumi affiché : elle « grandit » au fil de la présentation. */
  rang: number;
  /**
   * Emoji de l'onglet, repris de la barre du bas pour faire le lien. `null`
   * pour Lumi, dont l'onglet n'a pas d'emoji : c'est la mascotte elle-même qui
   * lui sert d'icône, et lui coller une étoile romprait le rapprochement que
   * cet écran est censé établir.
   */
  emoji: string | null;
  titre: Localise<string>;
  texte: Localise<string>;
  /**
   * Afficher la chaîne du jeu — écouter, répondre, une clé, délivrer.
   *
   * Réservée au premier écran, et volontairement **hors du texte lu** : quatre
   * mots sous quatre emprunts aux onglets se retiennent mieux qu'une phrase de
   * plus, et l'enfant qui ne lit pas encore y reconnaît la longue-vue et la
   * manette qu'il va retrouver en bas de l'écran.
   */
  chaine?: true;
}

export const ecransTuto: EcranTuto[] = [
  {
    id: 'musee',
    rang: 0,
    emoji: null,
    titre: { fr: 'Le musée', en: 'The museum' },
    /*
      La règle du jeu dès la première phrase.

      Elle s'arrêtait à « on va les délivrer » : l'enfant savait ce qu'on
      cherchait, jamais avec quoi. Trois écrans plus loin le quizz lui donnait
      une clé sans dire ce qu'elle ouvre, et les deux moitiés de la boucle ne se
      rejoignaient nulle part. Les testeurs l'ont relevé.
    */
    texte: {
      fr: "Coucou, moi c'est Lumi ! Regarde tous ces savants derrière les barreaux : on les a oubliés, et l'oubli les a enfermés. Ensemble, on va les délivrer — leurs cellules s'ouvrent avec des clés.",
      en: 'Hello, I’m Lumi! Look at all these scientists behind bars: they were forgotten, and forgetting locked them up. Together, we are going to set them free — their cells open with keys.',
    },
    chaine: true,
  },
  {
    id: 'decouvrir',
    rang: 2,
    emoji: '🔭',
    titre: { fr: 'Découvrir', en: 'Explore' },
    texte: {
      fr: 'À côté, tu trouves toutes les cartes à écouter. Chaque carte que tu écoutes me fait grandir un peu.',
      en: 'Next door, you’ll find all the cards to listen to. Every card you listen to makes me grow a little.',
    },
  },
  {
    id: 'joue',
    rang: 3,
    emoji: '🎮',
    titre: { fr: 'Joue', en: 'Play' },
    texte: {
      fr: 'Ici, on joue avec ce que tu as appris. Au quizz, je te pose des questions sur les cartes que tu as écoutées, et chaque bonne réponse te donne une clé pour ouvrir une cellule. Les autres jeux, c’est juste pour s’amuser.',
      en: 'Here we play with what you have learnt. In the quiz, I ask you about the cards you have listened to, and every right answer wins you a key to open a cell. The other games are just for fun.',
    },
  },
  {
    id: 'reglages',
    rang: 5,
    emoji: '⚙️',
    titre: { fr: 'Réglages', en: 'Settings' },
    texte: {
      fr: 'Et là, avec un adulte : ton âge, la langue, et le téléchargement pour écouter en voiture, sans internet. On y va ?',
      en: 'And here, with a grown-up: your age, the language, and the download so you can listen in the car, with no internet. Shall we?',
    },
  },
];
