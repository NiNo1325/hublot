'use client';

import { useRef, type TouchEvent } from 'react';

interface OptionsSwipe {
  /** Balayage vers la gauche (doigt de droite à gauche) : scène suivante. */
  onLeft: () => void;
  /** Balayage vers la droite : scène précédente. */
  onRight: () => void;
  /** Distance horizontale minimale, en pixels, pour valider le geste. */
  seuil?: number;
}

/**
 * Détecte un balayage horizontal franc et renvoie les gestionnaires tactiles à
 * poser sur l'élément concerné.
 *
 * On n'agit que si le mouvement est nettement horizontal (|dx| > |dy|) et
 * dépasse le seuil : un glissement vertical reste un défilement, jamais un
 * changement de scène. Tactile uniquement — le clavier et les points de
 * progression couvrent les autres cas.
 */
export function useSwipeHorizontal({ onLeft, onRight, seuil = 45 }: OptionsSwipe) {
  const depart = useRef<{ x: number; y: number } | null>(null);

  return {
    onTouchStart: (e: TouchEvent) => {
      const t = e.touches[0];
      depart.current = { x: t.clientX, y: t.clientY };
    },
    onTouchEnd: (e: TouchEvent) => {
      const d = depart.current;
      depart.current = null;
      if (!d) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - d.x;
      const dy = t.clientY - d.y;
      if (Math.abs(dx) < seuil || Math.abs(dx) <= Math.abs(dy)) return;
      if (dx < 0) onLeft();
      else onRight();
    },
  };
}
