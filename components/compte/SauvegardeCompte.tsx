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
        initialize(options: {
          client_id: string;
          callback: (r: { credential: string }) => void;
        }): void;
        renderButton(parent: HTMLElement, options: Record<string, unknown>): void;
      };
    };
  };
}

function chargerGis(): Promise<void> {
  const existant = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_GIS}"]`);
  if (existant) {
    const { google } = window as unknown as FenetreGoogle;
    if (google?.accounts?.id) return Promise.resolve();
    return new Promise((resoudre, rejeter) => {
      existant.addEventListener('load', () => resoudre());
      existant.addEventListener('error', () => rejeter(new Error('GIS indisponible')));
    });
  }
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
 */
export function SauvegardeCompte() {
  if (!CLIENT_ID) return null;
  return (
    <PorteParentale>
      <ContenuCompte />
    </PorteParentale>
  );
}

/**
 * Le contenu, monté seulement une fois la porte parentale franchie.
 *
 * Ce découpage n'est pas cosmétique. Tant qu'il vivait derrière la porte sans
 * être démonté, ses effets partaient au chargement de Réglages : celui qui
 * dessine le bouton Google trouvait son conteneur encore absent du DOM,
 * renonçait, et rien ne le relançait à l'ouverture de la porte — le bouton ne
 * s'affichait jamais. En le montant au bon moment, les effets s'exécutent dans
 * l'ordre naturel.
 *
 * Bénéfice au passage : aucune requête vers `/api/compte`, ni vers Google, pour
 * les familles qui n'ouvrent jamais cette section.
 */
function ContenuCompte() {
  const t = useT();
  const [etat, setEtat] = useState<Etat>('chargement');
  const [efface, setEfface] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const bouton = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vivant = true;
    void verifierConnexion().then((connecte) => {
      if (vivant) setEtat(connecte ? 'connecte' : 'deconnecte');
    });
    return () => {
      vivant = false;
    };
  }, []);

  const connecter = useCallback(async (credential: string) => {
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
  }, []);

  useEffect(() => {
    if (etat !== 'deconnecte' || !CLIENT_ID) return;
    const cible = bouton.current;
    if (!cible) return;

    let vivant = true;
    void chargerGis()
      .then(() => {
        const { google } = window as unknown as FenetreGoogle;
        if (!vivant || !google?.accounts?.id) return;
        google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (r) => void connecter(r.credential),
        });
        google.accounts.id.renderButton(cible, {
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

  return (
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
  );
}
