/**
 * Sélection de la voix de synthèse.
 *
 * `getVoices()` renvoie très souvent un tableau vide au premier appel : les
 * voix sont chargées de façon asynchrone par le navigateur. On écoute
 * `voiceschanged`, mais cet événement n'est pas déclenché de manière fiable sur
 * tous les moteurs — d'où le sondage de secours.
 */

const INTERVALLE_SONDAGE_MS = 250;
const TENTATIVES_MAX = 8;

export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;

    const immediat = synth.getVoices();
    if (immediat.length > 0) {
      resolve(immediat);
      return;
    }

    let tentatives = 0;
    let resolu = false;

    const terminer = (voix: SpeechSynthesisVoice[]) => {
      if (resolu) return;
      resolu = true;
      synth.removeEventListener('voiceschanged', surChangement);
      clearInterval(sondage);
      resolve(voix);
    };

    const surChangement = () => terminer(synth.getVoices());
    synth.addEventListener('voiceschanged', surChangement);

    const sondage = setInterval(() => {
      const voix = synth.getVoices();
      tentatives += 1;
      // Après TENTATIVES_MAX on abandonne et on renvoie ce qu'on a, quitte à
      // laisser le navigateur choisir sa voix par défaut.
      if (voix.length > 0 || tentatives >= TENTATIVES_MAX) terminer(voix);
    }, INTERVALLE_SONDAGE_MS);
  });
}

/**
 * Meilleure voix française disponible, ou `null` pour laisser le navigateur
 * décider. On préfère `fr-FR`, puis n'importe quel français régional, et à
 * qualité égale une voix locale : les voix réseau introduisent une latence et
 * échouent hors ligne.
 */
export function pickFrenchVoice(
  voices: SpeechSynthesisVoice[],
): SpeechSynthesisVoice | null {
  const francaises = voices.filter((v) => v.lang?.toLowerCase().startsWith('fr'));
  if (francaises.length === 0) return null;

  const score = (v: SpeechSynthesisVoice) =>
    (v.lang.toLowerCase().startsWith('fr-fr') ? 2 : 0) + (v.localService ? 1 : 0);

  return [...francaises].sort((a, b) => score(b) - score(a))[0];
}
