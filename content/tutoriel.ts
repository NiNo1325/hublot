/**
 * Contenu du tutoriel de présentation, guidé par Lumi.
 *
 * Extrait ici (données pures, sans JSX) pour être partagé par le composant
 * `Tutoriel` et le script de génération audio `generer-audio-tutoriel.mjs` : le
 * texte lu à voix haute est ainsi toujours celui affiché.
 */
export interface EcranTuto {
  /** Identifiant stable, sert au nom du fichier audio. */
  id: string;
  /** Rang de Lumi affiché : elle « grandit » au fil de la présentation. */
  rang: number;
  /** Emoji de l'onglet, repris de la barre du bas pour faire le lien. */
  emoji: string;
  titre: string;
  texte: string;
}

export const ecransTuto: EcranTuto[] = [
  {
    id: 'decouvrir',
    rang: 0,
    emoji: '🔭',
    titre: 'Découvrir',
    texte:
      "Coucou, moi c'est Lumi ! Ici, tu écoutes des cartes animées qui racontent le monde. Touche un hublot pour commencer.",
  },
  {
    id: 'parcours',
    rang: 1,
    emoji: '🗺️',
    titre: 'Parcours',
    texte:
      'Dans Parcours, je te guide : une carte, puis une petite question, et on avance ensemble, pas à pas.',
  },
  {
    id: 'quizz',
    rang: 2,
    emoji: '🎯',
    titre: 'Quizz',
    texte:
      "Au Quizz, tu joues avec des questions sur ce que tu as déjà écouté. Chaque bonne réponse te fait gagner des étoiles !",
  },
  {
    id: 'lumi',
    rang: 4,
    emoji: '🌟',
    titre: 'Et moi, Lumi',
    texte:
      'Plus tu explores et réussis, plus je grandis : des rangs, des badges, et une petite fête à chaque étape. On y va ?',
  },
];
