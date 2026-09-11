import { existsSync } from 'node:fs';

/**
 * L'audio est-il présent sur cette machine ?
 *
 * Les 8305 mp3 ne sont plus versionnés : ils pesaient 639 Mo, c'est du contenu
 * généré, et chaque régénération alourdissait l'historique de git à jamais. Ils
 * vivent maintenant dans le bucket R2, se reconstruisent avec `npm run audio:*`
 * et se publient avec `npm run audio:envoyer`.
 *
 * Un clone frais ne les a donc pas. Les suites qui vérifient leur présence
 * n'ont alors rien à vérifier — elles se sautent au lieu d'échouer sept mille
 * fois sur un constat sans intérêt.
 *
 * Ce n'est pas un affaiblissement du garde-fou : il existe pour attraper la
 * carte livrée sans sa voix, ce qui ne peut arriver que là où l'on génère
 * l'audio. Sur cette machine-là, le dossier est présent et tout s'exécute.
 */
export const AUDIO_SUR_DISQUE = existsSync('public/audio');

/** Le message affiché quand une suite se saute, pour qu'on sache pourquoi. */
export const SANS_AUDIO =
  'public/audio absent — contenu généré, non versionné : lance « npm run audio:batch »';
