'use client';

/**
 * Les petits sons de l'application, synthétisés à la volée en Web Audio plutôt
 * que servis en fichiers : aucun asset à télécharger, ça marche hors ligne, et
 * le timbre reste léger.
 *
 * L'`AudioContext` est réutilisé et créé paresseusement : les navigateurs
 * n'autorisent le son qu'après un geste de l'utilisateur, or ces sons naissent
 * toujours d'un appui (répondre, retourner une tuile), donc `resume()` réussit.
 */
let contexte: AudioContext | null = null;

interface Note {
  /** Hertz. */
  frequence: number;
  /** Décalage par rapport au début, en secondes. */
  retard: number;
  /** Durée de l'extinction. */
  duree: number;
  volume: number;
}

function jouer(notes: Note[]) {
  if (typeof window === 'undefined') return;
  const Contexte = window.AudioContext;
  if (!Contexte) return;

  try {
    contexte = contexte ?? new Contexte();
    if (contexte.state === 'suspended') void contexte.resume();

    const ctx = contexte;
    const debut = ctx.currentTime;

    for (const { frequence, retard, duree, volume } of notes) {
      const t = debut + retard;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = frequence;
      // Enveloppe douce : attaque courte, extinction exponentielle.
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(volume, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + duree);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + duree + 0.05);
    }
  } catch {
    // Audio indisponible (contexte refusé, onglet en arrière-plan…) : tant pis,
    // l'animation suffit. On n'interrompt jamais la fête pour un son manquant.
  }
}

/**
 * Le « bravo » : un arpège majeur ascendant (do–mi–sol–do), joué quand Lumi
 * félicite l'enfant et à la fin d'une partie de Mémo.
 */
export function jouerSonRecompense() {
  jouer(
    [523.25, 659.25, 783.99, 1046.5].map((frequence, i) => ({
      frequence,
      retard: i * 0.085,
      duree: 0.5,
      volume: 0.18,
    })),
  );
}

/**
 * Deux tuiles s'apparient : une tierce ascendante, courte et nette.
 *
 * Sans retour sonore, un enfant qui vient de trouver une paire doit deviner
 * qu'il a réussi en observant que les tuiles ne se retournent pas — un signal
 * en creux, que l'on comprend seulement quand on connaît déjà la règle.
 */
export function jouerSonPaire() {
  jouer([
    { frequence: 659.25, retard: 0, duree: 0.22, volume: 0.16 },
    { frequence: 987.77, retard: 0.075, duree: 0.3, volume: 0.16 },
  ]);
}

/**
 * Deux tuiles ne s'apparient pas : une seconde descendante, douce et grave.
 *
 * Volontairement discret et sans dissonance — pas de buzzer. Le Mémo est le
 * mode où l'enfant n'est pas mesuré ; le son dit « ce n'était pas ça »,
 * jamais « tu t'es trompé ».
 */
export function jouerSonRate() {
  jouer([
    { frequence: 329.63, retard: 0, duree: 0.18, volume: 0.11 },
    { frequence: 293.66, retard: 0.07, duree: 0.26, volume: 0.11 },
  ]);
}
