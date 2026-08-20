'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useT } from '@/components/i18n/useT';
import { oublierEtatConnexion, synchroniser, verifierConnexion } from '@/lib/sync/client';
import { PorteParentale } from './PorteParentale';

const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const SCRIPT_GIS = 'https://accounts.google.com/gsi/client';

/*
  Le strict nécessaire de l'API Google Identity Services, plutôt que ses types
  officiels : trois appels, aucune dépendance de plus.
*/
interface FenetreGoogle {
  google?: {
    accounts: {
      id: {
        initialize(options: { client_id: string; callback: (r: { credential: string }) => void }): void;
        renderButton(parent: HTMLElement, options: Record<string, unknown>): void;
      };
    };
  };
}

function chargerGis(): Promise<void> {
  if (document.querySelector(`script[src="${SCRIPT_GIS}"]`)) return Promise.resolve();
  return new Promise((resoudre, rejeter) => {
    const script = document.createElement('script');
    script.src = SCRIPT_GIS;
    script.async = true;
    script.onload = () => resoudre();
    script.onerror = () => rejeter(new Error('Google Identity Services indisponible'));
    document.head.appendChild(script);
  });
}

type Etat = 'chargement' | 'deconnecte' | 'connecte' | 'occupe';

/**
 * « Sauvegarder la progression » — la section compte de Réglages.
 *
 * Absente tant que `NEXT_PUBLIC_GOOGLE_CLIENT_ID` n'est pas posée, exactement
 * comme l'interrupteur de notifications sans clé VAPID : une fonctionnalité à
 * moitié branchée ne doit pas s'annoncer.
 *
 * Tout se passe derrière la porte parentale — y compris l'effacement, qui est
 * définitif côté serveur.
 */
export function SauvegardeCompte() {
  const t = useT();
  const [etat, setEtat] = useState<Etat>('chargement');
  const [efface, setEfface] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const bouton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!CLIENT_ID) return;
    let vivant = true;
    void verifierConnexion().then((connecte) => {
      if (vivant) setEtat(connecte ? 'connecte' : 'deconnecte');
    });
    return () => {
      vivant = false;
    };
  }, []);

  const connecter = useCallback(
    async (credential: string) => {
      setEtat('occupe');
      try {
        const reponse = await fetch('/api/compte/connexion', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ credential }),
        });
        if (!reponse.ok) throw new Error('connexion refusée');
        oublierEtatConnexion();
        await verifierConnexion();
        await synchroniser();
        setEtat('connecte');
      } catch {
        setEtat('deconnecte');
      }
    },
    [],
  );

  /*
    Le bouton Google n'est dessiné qu'une fois la porte franchie et l'état connu
    déconnecté : charger son script plus tôt ferait un appel réseau vers Google
    pour toutes les familles, y compris celles qui n'ouvriront jamais cette
    section.
  */
  useEffect(() => {
    if (etat !== 'deconnecte' || !CLIENT_ID || !bouton.current) return;
    let vivant = true;
    void chargerGis()
      .then(() => {
        const { google } = window as unknown as FenetreGoogle;
        if (!vivant || !google || !bouton.current) return;
        google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (r) => void connecter(r.credential),
        });
        google.accounts.id.renderButton(bouton.current, {
          theme: 'filled_black',
          size: 'large',
          shape: 'pill',
          text: 'signin_with',
        });
      })
      .catch(() => {
        // Hors ligne ou script bloqué : la section reste, sans bouton.
      });
    return () => {
      vivant = false;
    };
  }, [etat, connecter]);

  const deconnecter = useCallback(async () => {
    setEtat('occupe');
    await fetch('/api/compte/deconnexion', { method: 'POST' }).catch(() => null);
    oublierEtatConnexion();
    setEtat('deconnecte');
  }, []);

  const effacer = useCallback(async () => {
    setEtat('occupe');
    try {
      const reponse = await fetch('/api/compte', { method: 'DELETE' });
      if (!reponse.ok) throw new Error('effacement refusé');
      oublierEtatConnexion();
      setEfface(true);
      setEtat('deconnecte');
    } catch {
      setEtat('connecte');
    }
    setConfirmation(false);
  }, []);

  if (!CLIENT_ID) return null;

  return (
    <PorteParentale>
      <div className="flex flex-col gap-3 px-5 py-4">
        <p className="text-sm text-craie-douce">{t('compte.explication')}</p>

        {etat === 'chargement' && <p className="text-sm text-craie-douce">…</p>}

        {etat === 'deconnecte' && (
          <>
            <div ref={bouton} />
            {efface && <p className="text-sm text-soleil">{t('compte.efface')}</p>}
          </>
        )}

        {etat === 'connecte' && (
          <>
            <p className="text-craie">{t('compte.connecte')}</p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => void deconnecter()}
                className="min-h-11 cursor-pointer rounded-full border-2 border-encre-bord px-4 text-sm text-craie transition-colors hover:border-soleil"
              >
                {t('compte.deconnexion')}
              </button>
              <button
                type="button"
                onClick={() => (confirmation ? void effacer() : setConfirmation(true))}
                className={`min-h-11 cursor-pointer rounded-full px-4 text-sm transition-colors ${
                  confirmation ? 'bg-soleil/15 text-soleil' : 'text-craie-douce/70 hover:text-craie'
                }`}
              >
                {confirmation ? t('compte.effacer.confirmer') : t('compte.effacer')}
              </button>
            </div>
          </>
        )}

        {etat === 'occupe' && <p className="text-sm text-craie-douce">{t('compte.patiente')}</p>}
      </div>
    </PorteParentale>
  );
}
