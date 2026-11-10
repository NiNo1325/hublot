'use client';

import { useEffect, useState } from 'react';
import {
  pushSupporte,
  abonnementCourant,
  activerNotifications,
  desactiverNotifications,
} from '@/lib/push/client';
import { useT } from '@/components/i18n/useT';

/**
 * Interrupteur « Recevoir les nouveautés » (côté parent).
 *
 * Ne s'affiche que si le push est réellement possible (service worker, API push,
 * et clé VAPID configurée) : tant que l'infra n'est pas branchée, rien
 * n'apparaît, plutôt qu'un bouton qui échouerait. L'état de vérité est
 * l'abonnement réel du navigateur, pas une préférence stockée à part.
 *
 * L'activation passe par la même question que l'espace parent : s'abonner
 * envoie une adresse technique de l'appareil à notre serveur, et dans une
 * application pour enfants ce choix revient à un adulte. La désactivation
 * reste libre — on ne verrouille jamais une sortie.
 */
export function NotificationsToggle() {
  const t = useT();
  const [supporte, setSupporte] = useState(false);
  const [actif, setActif] = useState(false);
  const [occupe, setOccupe] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [question, setQuestion] = useState<{ a: number; b: number } | null>(null);
  const [saisie, setSaisie] = useState('');
  const [rate, setRate] = useState(false);

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

  const activer = async () => {
    setOccupe(true);
    setMessage(null);
    try {
      const resultat = await activerNotifications();
      if (resultat === 'ok') {
        setActif(true);
      } else if (resultat === 'refuse') {
        setMessage(t('notifications.refuse'));
      } else {
        setMessage(t('notifications.indisponible'));
      }
    } finally {
      setOccupe(false);
    }
  };

  const basculer = async () => {
    setMessage(null);
    if (!actif) {
      /*
        Activation : la question d'abord, l'abonnement ensuite. Tirée ici, dans
        le gestionnaire de clic, pour la même raison que dans `PorteParentale` :
        un tirage au rendu changerait la question sous les doigts du parent.
        Un second appui sur l'interrupteur referme la question.
      */
      setQuestion(
        question
          ? null
          : { a: 6 + Math.floor(Math.random() * 4), b: 6 + Math.floor(Math.random() * 4) },
      );
      setSaisie('');
      setRate(false);
      return;
    }
    setOccupe(true);
    try {
      await desactiverNotifications();
      setActif(false);
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
          aria-label={t('notifications.aria')}
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
        {message ?? t('notifications.texte')}
      </p>
      {question && (
        <form
          className="mt-3 flex flex-col gap-3 pl-9"
          onSubmit={(e) => {
            e.preventDefault();
            if (Number(saisie) === question.a * question.b) {
              setQuestion(null);
              void activer();
              return;
            }
            setRate(true);
            setSaisie('');
          }}
        >
          <label className="text-sm text-craie-douce" htmlFor="porte-notifications">
            {t('compte.porte.consigne')(question.a, question.b)}
          </label>
          <div className="flex flex-wrap gap-2">
            <input
              id="porte-notifications"
              type="number"
              inputMode="numeric"
              autoFocus
              value={saisie}
              onChange={(e) => {
                setSaisie(e.target.value);
                setRate(false);
              }}
              className="min-h-12 w-28 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 text-craie"
            />
            <button
              type="submit"
              className="min-h-12 cursor-pointer rounded-2xl border-2 border-encre-bord bg-encre-clair px-5 text-craie transition-colors hover:border-soleil"
            >
              {t('compte.porte.valider')}
            </button>
            <button
              type="button"
              onClick={() => setQuestion(null)}
              className="min-h-12 cursor-pointer px-3 text-sm text-craie-douce transition-colors hover:text-craie"
            >
              {t('notifications.annuler')}
            </button>
          </div>
          {rate && (
            <p role="alert" className="text-sm text-soleil">
              {t('compte.porte.rate')}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
