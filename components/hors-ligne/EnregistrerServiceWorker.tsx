'use client';

import { useEffect } from 'react';

/**
 * Enregistre le service worker, sans lequel il n'y a ni installation sur
 * l'écran d'accueil ni mode hors ligne.
 *
 * Monté dans la mise en page, il ne rend rien : c'est un effet de bord, et le
 * placer dans un composant permet de le garder hors des Server Components.
 */
export function EnregistrerServiceWorker() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;
    /*
      Un échec d'enregistrement ne doit rien casser : sans service worker,
      l'application fonctionne exactement comme avant, en ligne. On n'affiche
      donc aucune erreur à l'enfant.
    */
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
  }, []);

  return null;
}
