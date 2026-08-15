/**
 * Contenu du tutoriel de présentation, guidé par Lumi.
 *
 * Extrait ici (données pures, sans JSX) pour être partagé par le composant
 * `Tutoriel` et le script de génération audio `generer-audio-tutoriel.mjs` : le
 * texte lu à voix haute est ainsi toujours celui affiché.
 */
import type { Localise } from '@/lib/types';

export interface EcranTuto {
  /** Identifiant stable, sert au nom du fichier audio. */
  id: string;
  /** Rang de Lumi affiché : elle « grandit » au fil de la présentation. */
  rang: number;
  /** Emoji de l'onglet, repris de la barre du bas pour faire le lien. */
  emoji: string;
  titre: Localise<string>;
  texte: Localise<string>;
}

export const ecransTuto: EcranTuto[] = [
  {
    id: 'decouvrir',
    rang: 0,
    emoji: '🔭',
    titre: { fr: 'Découvrir', en: 'Explore' },
    texte: {
      fr: "Coucou, moi c'est Lumi ! Ici, tu écoutes des cartes animées qui racontent le monde. Touche un hublot pour commencer.",
      en: 'Hello, I’m Lumi! Here you listen to animated cards that tell you about the world. Touch a porthole to begin.',
    },
  },
  {
    id: 'parcours',
    rang: 1,
    emoji: '🗺️',
    titre: { fr: 'Parcours', en: 'Journey' },
    texte: {
      fr: 'Dans Parcours, je te guide : une carte, puis une petite question, et on avance ensemble, pas à pas.',
      en: 'In Journey I guide you: a card, then a little question, and we move on together, step by step.',
    },
  },
  {
    id: 'quizz',
    rang: 2,
    emoji: '🎯',
    titre: { fr: 'Quizz', en: 'Quiz' },
    texte: {
      fr: "Au Quizz, tu joues avec des questions sur ce que tu as déjà écouté. Chaque bonne réponse te fait gagner des étoiles !",
      en: 'In the Quiz you play with questions about what you have already listened to. Every right answer earns you a star!',
    },
  },
  {
    id: 'lumi',
    rang: 4,
    emoji: '🌟',
    titre: { fr: 'Et moi, Lumi', en: 'And me, Lumi' },
    texte: {
      fr: 'Plus tu explores et réussis, plus je grandis : des rangs, des badges, et une petite fête à chaque étape. On y va ?',
      en: 'The more you explore and get right, the more I grow: ranks, badges, and a little celebration at every step. Shall we?',
    },
  },
];
