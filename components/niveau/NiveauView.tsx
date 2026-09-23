'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useT } from '@/components/i18n/useT';
import { SelecteurNiveau } from './SelecteurNiveau';
import { useNiveau } from './useNiveau';

/**
 * Le choix du niveau, sur son propre écran.
 *
 * Il vivait déplié en tête des Réglages, et pesait à lui seul la moitié de la
 * page : un bloc d'explication avec son bouton d'écoute, puis trois grandes
 * cartes portant chacune sa Lumi et sa phrase. Les testeurs ont trouvé l'écran
 * chargé, et c'était d'abord cela.
 *
 * Il devient donc une rangée comme les autres, qui dit le niveau en cours et
 * mène ici. Le réglage n'y perd rien — il y gagne la place de se lire, et
 * l'écran qui le contenait retrouve la forme d'un menu.
 */
export function NiveauView() {
  const router = useRouter();
  const { niveau, status, choisirNiveau } = useNiveau();
  const t = useT();
  const [enregistre, setEnregistre] = useState(false);

  // Accès direct sans niveau choisi : retour à la première entrée.
  useEffect(() => {
    if (status === 'pret' && !niveau) router.replace('/');
  }, [status, niveau, router]);

  // Une confirmation qui s'efface, comme dans les Réglages : toucher une carte
  // enregistre déjà, il n'y a rien à valider.
  useEffect(() => {
    if (!enregistre) return;
    const minuterie = setTimeout(() => setEnregistre(false), 2000);
    return () => clearTimeout(minuterie);
  }, [enregistre]);

  if (status === 'chargement' || !niveau) return null;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center gap-6 px-6 py-10">
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        {t('reglages.niveau')}
      </h1>

      <SelecteurNiveau
        niveauInitial={niveau}
        onChoisir={(choisi) => {
          choisirNiveau(choisi);
          setEnregistre(true);
        }}
      />

      <p aria-live="polite" className="min-h-6 text-base text-soleil">
        {enregistre ? t('reglages.niveau-enregistre') : ''}
      </p>

      <button
        type="button"
        onClick={() => router.push('/reglages')}
        className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-6 text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
      >
        {t('reglages.retour')}
      </button>
    </main>
  );
}
