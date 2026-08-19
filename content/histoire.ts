import type { Localise } from '@/lib/types';

/**
 * L'histoire que Lumi raconte : pourquoi les savants sont enfermés.
 *
 * C'est le récit d'ouverture de l'application, et le seul endroit où la règle du
 * jeu se dit en mots. Le geôlier n'est pas un méchant, c'est **l'oubli** : un
 * ravisseur qui séquestre des savants serait angoissant pour un enfant de quatre
 * ans, et surtout il ne voudrait rien dire. L'oubli, si — on les a oubliés, et à
 * mesure qu'on les oublie ils s'effacent. Apprendre ce qu'ils ont trouvé, c'est
 * se souvenir, et se souvenir, c'est les délivrer. Toute la mécanique en découle,
 * jusqu'à la clé, qui n'est donc pas un jeton mais la connaissance elle-même.
 *
 * Le texte vit ici et non dans le dictionnaire d'interface : c'est du contenu, il
 * se narre, et le script de génération audio le lit directement — comme les
 * cartes et le tutoriel.
 *
 * Chaque temps porte un identifiant stable : il nomme son fichier
 * `public/audio/histoire/<id>.mp3`. Le changer force une régénération.
 */
export interface TempsHistoire {
  /** Identifiant stable : nomme le fichier audio. */
  id: string;
  texte: Localise<string>;
}

export const histoire: TempsHistoire[] = [
  {
    id: 'cherche',
    texte: {
      fr: 'Coucou ! Moi c’est Lumi. Tu vois tous ces gens derrière les barreaux ? Ce sont des savants. Ils ont cherché toute leur vie pour comprendre une chose que personne ne comprenait.',
      en: 'Hello! I’m Lumi. Do you see all these people behind the bars? They are scientists. They searched their whole lives to understand something nobody understood.',
    },
  },
  {
    id: 'oubli',
    texte: {
      fr: 'Puis le temps a passé, et on les a oubliés. Et quand plus personne ne sait ce qu’ils ont trouvé, ils s’effacent tout doucement. C’est l’oubli qui les a enfermés.',
      en: 'Then time passed, and they were forgotten. And when nobody knows what they found any more, they slowly fade away. It is forgetting that locked them up.',
    },
  },
  {
    id: 'aide',
    texte: {
      fr: 'Moi toute seule, je n’y arrive pas. Il faut quelqu’un qui apprenne ce qu’ils ont découvert. Quelqu’un comme toi.',
      en: 'On my own, I cannot do it. It takes someone who learns what they discovered. Someone like you.',
    },
  },
  {
    id: 'ecouter',
    texte: {
      fr: 'Écoute une carte : c’est ça qui me fait grandir. Et si tu réponds juste à sa question, au quizz, tu gagnes une clé.',
      en: 'Listen to a card: that is what makes me grow. And if you answer its question correctly, in the quiz, you win a key.',
    },
  },
  {
    id: 'cles',
    texte: {
      fr: 'Chaque clé ouvre une cellule. Se souvenir d’eux, c’est les libérer. Alors, on commence ?',
      en: 'Every key opens a cell. Remembering them is setting them free. So, shall we begin?',
    },
  },
];
