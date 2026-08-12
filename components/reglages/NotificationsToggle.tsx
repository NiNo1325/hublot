'use client';

import { useEffect, useState } from 'react';
import {
  pushSupporte,
  abonnementCourant,
  activerNotifications,
  desactiverNotifications,
} from '@/lib/push/client';

/**
 * Interrupteur « Recevoir les nouveautés » (côté parent).
 *
 * Ne s'affiche que si le push est réellement possible (service worker, API push,
 * et clé VAPID configurée) : tant que l'infra n'est pas branchée, rien
 * n'apparaît, plutôt qu'un bouton qui échouerait. L'état de vérité est
 * l'abonnement réel du navigateur, pas une préférence stockée à part.
 */
export function NotificationsToggle() {
  const [supporte, setSupporte] = useState(false);
  const [actif, setActif] = useState(false);
  const [occupe, setOccupe] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!pushSupporte()) return;
    let vivant = true;
    // On lit l'état réel (abonné ou non) et on révèle l'interrupteur une fois
    // la réponse connue — le setState vit dans le rappel asynchrone, pas dans le
    // corps de l'effet.
    abonnementCourant()
      .then((abonnement) => {
        if (!vivant) return;
        setSupporte(true);
        setActif(Boolean(abonnement));
      })
      .catch(() => {
        if (vivant) setSupporte(true);
      });
    return () => {
      vivant = false;
    };
  }, []);

  if (!supporte) return null;

  const basculer = async () => {
    setOccupe(true);
    setMessage(null);
    try {
      if (actif) {
        await desactiverNotifications();
        setActif(false);
      } else {
        const resultat = await activerNotifications();
        if (resultat === 'ok') {
          setActif(true);
        } else if (resultat === 'refuse') {
          setMessage(
            'Autorisation refusée. Tu peux l’activer pour Hublot dans les réglages du téléphone.',
          );
        } else {
          setMessage('Notifications indisponibles pour le moment.');
        }
      }
    } finally {
      setOccupe(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={basculer}
        disabled={occupe}
        aria-pressed={actif}
        className={`flex min-h-14 cursor-pointer items-center gap-2 rounded-full border-2 px-6 text-sm transition-colors disabled:opacity-60 ${
          actif
            ? 'border-soleil text-soleil'
            : 'border-encre-bord text-craie-douce hover:border-soleil hover:text-soleil'
        }`}
      >
        <span aria-hidden="true">🔔</span>
        {actif ? 'Notifications activées' : 'Recevoir les nouveautés'}
      </button>
      <p className="max-w-xs text-center text-xs text-craie-douce">
        {message ?? 'Nouvelles cartes et mises à jour de l’application.'}
      </p>
    </div>
  );
}
