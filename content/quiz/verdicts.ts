import type { AgeRange, Localise } from '@/lib/types';

export type Verdict = 'juste' | 'presque';

/**
 * Ce que la voix dit après une réponse.
 *
 * Les non-lecteurs ne peuvent pas lire « Bravo, c'est ça ! » à l'écran : sans
 * ces clips, ils ne savent tout simplement pas s'ils ont trouvé. Le verdict
 * précède l'explication, déjà enregistrée par question.
 *
 * Trois formulations par verdict et par âge : une série compte huit questions,
 * et entendre huit fois la même phrase transforme l'encouragement en
 * ritournelle. Elles sont génériques — les enregistrer par question ferait
 * des centaines de fichiers pour deux phrases.
 *
 * Le registre suit celui des cartes : on ne félicite pas un enfant de onze ans
 * comme un de quatre, et un « bravo » appuyé sonnerait condescendant à cet
 * âge. Côté erreur, aucune formulation ne sanctionne : le quizz sert à
 * rectifier une idée reçue, pas à noter.
 */
export const VERDICTS: Localise<Record<AgeRange, Record<Verdict, string[]>>> = {
  fr: {
    '3-5': {
      juste: ['Bravo ! C’est ça !', 'Oui ! Tu as trouvé !', 'C’est tout à fait ça, bravo !'],
      /*
        Éviter toute formule qui ressemble à une consigne adressée au modèle.
        « Je t'explique. » produisait systématiquement dix secondes d'audio : le
        TTS enchaînait sur une explication de son cru au lieu de s'arrêter là.
      */
      presque: [
        'Presque ! Écoute bien.',
        'Oh ! Ce n’était pas ça.',
        'Ce n’était pas celle-là. Écoute.',
      ],
    },
    '6-8': {
      juste: ['Bravo, c’est exactement ça !', 'Oui, bien vu !', 'C’est la bonne réponse !'],
      presque: [
        'Pas tout à fait. Voilà pourquoi.',
        'Ce n’est pas celle-là, mais tu vas comprendre.',
        'Raté cette fois. Écoute bien.',
      ],
    },
    '9-12': {
      juste: ['Exact.', 'C’est bien ça.', 'Bonne réponse.'],
      presque: [
        'Pas tout à fait.',
        'Ce n’est pas la bonne, et c’est intéressant de voir pourquoi.',
        'Non — mais l’erreur est courante.',
      ],
    },
  },
  en: {
    '3-5': {
      juste: ['Well done! That’s it!', 'Yes! You found it!', 'That’s exactly it, well done!'],
      presque: [
        'Almost! Listen carefully.',
        'Oh! That wasn’t it.',
        'That wasn’t the one. Listen.',
      ],
    },
    '6-8': {
      juste: ['Well done, that’s exactly it!', 'Yes, good spot!', 'That’s the right answer!'],
      presque: [
        'Not quite. Here’s why.',
        'That’s not the one, but you’ll see why.',
        'Missed it this time. Listen carefully.',
      ],
    },
    '9-12': {
      juste: ['Correct.', 'That’s right.', 'Good answer.'],
      presque: [
        'Not quite.',
        'That’s not the one, and it’s interesting to see why.',
        'No — but it’s a common mistake.',
      ],
    },
  },
};

/** Dossier à part : aucun identifiant de carte ne commence par un tiret bas. */
export const RACINE_VERDICTS = '_verdicts';

/** Chemin déterministe, partagé par le générateur et par le lecteur. */
export function cheminVerdict(age: AgeRange, verdict: Verdict, rang: number): string {
  return `${RACINE_VERDICTS}/${age}/${verdict}-${rang + 1}`;
}
