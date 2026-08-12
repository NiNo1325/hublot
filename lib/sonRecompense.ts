'use client';

/**
 * Petit son de récompense joué quand Lumi félicite l'enfant.
 *
 * Synthétisé à la volée en Web Audio plutôt que servi en fichier : aucun asset
 * à télécharger, ça marche hors ligne, et le timbre reste léger. C'est un arpège
 * majeur ascendant (do–mi–sol–do), l'archétype du « bravo ».
 *
 * L'`AudioContext` est réutilisé et créé paresseusement : les navigateurs
 * n'autorisent le son qu'après un geste de l'utilisateur, or une célébration
 * naît toujours d'un appui (répondre, lancer un quiz), donc `resume()` réussit.
 */
let contexte: AudioContext | null = null;

export function jouerSonRecompense() {
  if (typeof window === 'undefined') return;
  const Contexte = window.AudioContext;
  if (!Contexte) return;

  try {
    contexte = contexte ?? new Contexte();
    if (contexte.state === 'suspended') void contexte.resume();

    const ctx = contexte;
    const debut = ctx.currentTime;
    // do5, mi5, sol5, do6 — puis une quinte plus haute en pointe finale.
    const notes = [523.25, 659.25, 783.99, 1046.5];

    notes.forEach((frequence, i) => {
      const t = debut + i * 0.085;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = frequence;
      // Enveloppe douce : attaque courte, extinction exponentielle.
      gain.gain.setValueAtTime(0.0001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.55);
    });
  } catch {
    // Audio indisponible (contexte refusé, onglet en arrière-plan…) : tant pis,
    // l'animation suffit. On n'interrompt jamais la fête pour un son manquant.
  }
}
