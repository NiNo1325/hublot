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
}

export const ecransTuto: EcranTuto[] = [
  {
    id: 'musee',
    rang: 0,
    emoji: null,
    titre: { fr: 'Le musée', en: 'The museum' },
    texte: {
      fr: "Coucou, moi c'est Lumi ! Regarde tous ces savants derrière les barreaux : on les a oubliés, et l'oubli les a enfermés. Ensemble, on va les délivrer.",
      en: 'Hello, I’m Lumi! Look at all these scientists behind bars: they were forgotten, and forgetting locked them up. Together, we are going to set them free.',
    },
  },
  {
    id: 'decouvrir',
    rang: 2,
    emoji: '🔭',
    titre: { fr: 'Découvrir', en: 'Explore' },
    texte: {
      fr: 'À côté, tu trouves toutes les cartes à écouter. Chaque carte que tu écoutes te donne une étoile, et les étoiles me font grandir.',
      en: 'Next door, you’ll find all the cards to listen to. Every card you listen to gives you a star, and the stars make me grow.',
    },
  },
  {
    id: 'joue',
    rang: 3,
    emoji: '🎮',
    titre: { fr: 'Joue', en: 'Play' },
    texte: {
      fr: 'Ici, on joue avec ce que tu as appris. Chaque bonne réponse te donne une clé — et chaque clé ouvre la cellule d’un savant.',
      en: 'Here we play with what you have learnt. Every right answer gives you a key — and every key opens a scientist’s cell.',
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
