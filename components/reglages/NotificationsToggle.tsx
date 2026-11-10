'use client';

import { useEffect, useState } from 'react';
import {
  pushSupporte,
  abonnementCourant,
  activerNotifications,
  desactiverNotifications,
} from '@/lib/push/client';
import { useT } from '@/components/i18n/useT';
import {
  genererDefi,
  verifierDefi,
  type DefiParent,
} from '@/components/premium/portailParent';

/**
 * Interrupteur « Recevoir les nouveautés » (côté parent).
 *
 * Ne s'affiche que si le push est réellement possible (service worker, API push,
 * et clé VAPID configurée) : tant que l'infra n'est pas branchée, rien
 * n'apparaît, plutôt qu'un bouton qui échouerait. L'état de vérité est
 * l'abonnement réel du navigateur, pas une préférence stockée à part.
 *
 * L'activation passe par le verrou parental (la même multiplication que devant
 * un achat) : s'abonner envoie un identifiant technique de l'appareil à notre
 * serveur, et dans une application pour enfants ce choix revient à un adulte.
 * La désactivation, elle, reste libre — on ne verrouille jamais une sortie.
 */
export function NotificationsToggle() {
  const t = useT();
  const [supporte, setSupporte] = useState(false);
  const [actif, setActif] = useState(false);
  const [occupe, setOccupe] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [defi, setDefi] = useState<DefiParent | null>(null);
  const [saisie, setSaisie] = useState('');
  const [erreurDefi, setErreurDefi] = useState(false);

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
      // Activation : d'abord le verrou parental, l'abonnement ensuite.
      setDefi(defi ? null : genererDefi());
      setSaisie('');
      setErreurDefi(false);
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

  const validerDefi = async () => {
    if (!defi) return;
    if (!verifierDefi(defi, saisie)) {
      setErreurDefi(true);
      return;
    }
    setDefi(null);
    await activer();
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
      {defi && (
        <form
          className="mt-3 flex flex-col gap-2 pl-9"
          onSubmit={(e) => {
            e.preventDefault();
            void validerDefi();
          }}
        >
          <label className="text-sm text-craie" htmlFor="verrou-notifications">
            {t('parent.question')(defi.a, defi.b)}
          </label>
          <input
            id="verrou-notifications"
            inputMode="numeric"
            autoComplete="off"
            value={saisie}
            onChange={(e) => {
              setSaisie(e.target.value);
              setErreurDefi(false);
            }}
            className="min-h-12 rounded-2xl border-2 border-encre-bord bg-encre px-4 text-center text-xl text-craie focus:border-soleil focus:outline-none"
          />
          {erreurDefi && (
            <p role="alert" className="text-xs text-craie-douce">
              {t('parent.erreur')}
            </p>
          )}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setDefi(null)}
              className="min-h-11 flex-1 cursor-pointer rounded-2xl border-2 border-encre-bord px-4 text-sm text-craie-douce transition-colors hover:border-craie-douce"
            >
              {t('parent.annuler')}
            </button>
            <button
              type="submit"
              className="min-h-11 flex-1 cursor-pointer rounded-2xl border-2 border-soleil bg-soleil/10 px-4 text-sm text-soleil"
            >
              {t('parent.continuer')}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
