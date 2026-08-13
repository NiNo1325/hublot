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
        // Auto-réparation : si le navigateur est abonné, on repousse l'abonnement
        // au serveur (idempotent), au cas où un enregistrement précédent aurait
        // échoué — sinon le serveur ignorerait un appareil pourtant « activé ».
        if (abonnement) {
          fetch('/api/push/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(abonnement),
          }).catch(() => {});
        }
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

  // Rangée pour la carte « Écoute & alertes » : libellé à gauche, interrupteur
  // à droite, et une ligne d'explication (ou d'erreur) en dessous.
  return (
    <div className="px-5 py-4">
      <div className="flex items-center gap-3">
        <span aria-hidden="true">🔔</span>
        <span className="flex-1 text-craie">Notifications</span>
        <button
          type="button"
          role="switch"
          aria-checked={actif}
          aria-label="Recevoir les notifications"
          onClick={basculer}
          disabled={occupe}
          className={`relative h-7 w-12 shrink-0 cursor-pointer rounded-full transition-colors disabled:opacity-60 ${
            actif ? 'bg-soleil' : 'bg-encre-bord'
          }`}
        >
          <span
            aria-hidden="true"
            className={`absolute top-1 h-5 w-5 rounded-full bg-craie transition-all ${
              actif ? 'left-6' : 'left-1'
            }`}
          />
        </button>
      </div>
      <p className="mt-1 pl-9 text-xs text-craie-douce">
        {message ?? 'Nouvelles cartes et mises à jour de l’application.'}
      </p>
    </div>
  );
}
