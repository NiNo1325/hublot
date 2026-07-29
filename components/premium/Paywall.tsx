'use client';

import { useEffect, useRef, useState } from 'react';
import { URL_PLAY_STORE, SKU_MENSUEL, SKU_ANNUEL, SKU_A_VIE } from '@/lib/premium/produits';
import { useEntitlement } from './useEntitlement';
import { genererDefi, verifierDefi, type DefiParent } from './portailParent';

interface PaywallProps {
  onClose: () => void;
}

/** Ordre d'affichage et libellés de repli des offres (Play fournit les prix). */
const OFFRES = [
  { sku: SKU_ANNUEL, titre: 'Abonnement annuel', repli: '19,99 €/an' },
  { sku: SKU_MENSUEL, titre: 'Abonnement mensuel', repli: '2,99 €/mois' },
  { sku: SKU_A_VIE, titre: 'Accès à vie', repli: '39,99 €' },
];

export function Paywall({ onClose }: PaywallProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { peutAcheter, premium, offres, acheter } = useEntitlement();
  const [defi, setDefi] = useState<DefiParent | null>(null);
  const [skuEnAttente, setSkuEnAttente] = useState<string | null>(null);
  const [saisie, setSaisie] = useState('');
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    const d = dialogRef.current;
    if (d && !d.open) d.showModal();
  }, []);

  // Un achat réussi (premium devient vrai) referme le paywall.
  useEffect(() => {
    if (premium) onClose();
  }, [premium, onClose]);

  function prix(sku: string, repli: string) {
    return offres.find((o) => o.sku === sku)?.prix ?? repli;
  }

  function demanderAchat(sku: string) {
    setSkuEnAttente(sku);
    setDefi(genererDefi());
    setSaisie('');
    setErreur(false);
  }

  async function validerVerrou() {
    if (!defi || !skuEnAttente) return;
    if (!verifierDefi(defi, saisie)) {
      setErreur(true);
      return;
    }
    const sku = skuEnAttente;
    setDefi(null);
    setSkuEnAttente(null);
    await acheter(sku);
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onCancel={onClose}
      aria-labelledby="titre-paywall"
      className="m-0 h-full max-h-none w-full max-w-none overflow-y-auto border-0 bg-encre p-6 text-craie backdrop:bg-encre/80 sm:m-auto sm:h-auto sm:max-h-[92vh] sm:w-[min(32rem,92vw)] sm:rounded-[2rem] sm:border-4 sm:border-encre-bord sm:p-8"
    >
      <div className="flex min-h-full flex-col justify-center gap-6">
        <header className="flex items-start justify-between gap-3">
          <h2 id="titre-paywall" className="font-display text-2xl font-semibold sm:text-3xl">
            Débloque tout Hublot
          </h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">✕</span>
            <span className="sr-only">Fermer</span>
          </button>
        </header>

        <p className="text-craie-douce">
          Toutes les cartes, les nouveautés à venir, et l&apos;écoute hors ligne complète.
        </p>

        {/* Cas navigateur : pas d'achat possible, on invite à installer l'app. */}
        {!peutAcheter ? (
          <a
            href={URL_PLAY_STORE}
            className="flex min-h-14 items-center justify-center rounded-2xl border-4 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            Installer l&apos;app pour tout débloquer
          </a>
        ) : defi ? (
          /* Verrou parental avant paiement. */
          <div className="flex flex-col gap-3">
            <label className="font-display text-lg" htmlFor="verrou">
              Pour les parents : combien font {defi.a} × {defi.b} ?
            </label>
            <input
              id="verrou"
              inputMode="numeric"
              value={saisie}
              onChange={(e) => setSaisie(e.target.value)}
              className="min-h-14 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 text-center text-2xl text-craie focus:border-soleil focus:outline-none"
            />
            {erreur && <p className="text-sm text-craie-douce">Ce n&apos;est pas la bonne réponse.</p>}
            <button
              type="button"
              onClick={validerVerrou}
              className="min-h-14 cursor-pointer rounded-2xl border-4 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              Continuer
            </button>
          </div>
        ) : (
          /* Les trois offres. */
          <ul className="flex flex-col gap-3">
            {OFFRES.map((o) => (
              <li key={o.sku}>
                <button
                  type="button"
                  onClick={() => demanderAchat(o.sku)}
                  className="flex min-h-16 w-full cursor-pointer items-center justify-between rounded-2xl border-2 border-encre-bord bg-encre-clair px-5 text-left transition-colors hover:border-soleil"
                >
                  <span className="font-display text-lg text-craie">{o.titre}</span>
                  <span className="text-craie-douce">{prix(o.sku, o.repli)}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </dialog>
  );
}
