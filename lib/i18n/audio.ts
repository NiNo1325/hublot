import type { Locale } from '@/lib/types';

/**
 * Chemin d'un fichier audio pour une langue donnée.
 *
 * Le français reste à la racine (`/audio/…`) : c'est la langue source, ses
 * quelques milliers de mp3 sont déjà générés, déployés et mis en cache par le
 * service worker — les déplacer coûterait une réécriture complète du dépôt
 * pour aucun gain. Les autres langues s'ajoutent à côté, dans leur dossier
 * (`/audio/en/…`), produites par les mêmes scripts de génération.
 *
 * Tant qu'une langue n'a pas sa voix (l'audio anglais est une phase à part), le
 * fichier manque : chaque lecteur le traite déjà comme une panne bénigne — la
 * carte défile en minuté, le quizz reste jouable en silence. On ne se replie
 * volontairement PAS sur le mp3 français : entendre du français par-dessus un
 * texte anglais serait plus déroutant que le silence.
 */
export function cheminAudio(locale: Locale, suffixe: string): string {
  return locale === 'fr' ? `/audio/${suffixe}` : `/audio/${locale}/${suffixe}`;
}
