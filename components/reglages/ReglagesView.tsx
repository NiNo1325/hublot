'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SelecteurAge } from '@/components/age/SelecteurAge';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useHorsLigne } from '@/components/hors-ligne/useHorsLigne';
import { enMo } from '@/components/hors-ligne/HorsLigneView';

/**
 * Réglages : l'âge (modifiable ici plutôt que par un passage obligé), le mode
 * hors-ligne, et la réinitialisation de la progression. Ce sont les trois
 * réglages « d'adulte » qui vivaient dans l'ancien menu d'accueil.
 */
export function ReglagesView() {
  const router = useRouter();
  const { age, ageRange, status, choisirAge } = useAgeRange();
  const { cartesVues, oublierToutesLesVues } = useCartesVues();
  const { etoiles, oublierEtoiles } = useEtoiles();
  const { oublierMaitrisees } = useCartesMaitrisees();
  const { resume: horsLigne } = useHorsLigne();

  const [confirmation, setConfirmation] = useState(false);
  const [ageEnregistre, setAgeEnregistre] = useState(false);

  // Accès direct sans âge choisi : retour à la première entrée.
  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  // Retour automatique de la confirmation : un « Confirmer ? » resté affiché
  // deviendrait un piège au prochain passage.
  useEffect(() => {
    if (!confirmation) return;
    const minuterie = setTimeout(() => setConfirmation(false), 4000);
    return () => clearTimeout(minuterie);
  }, [confirmation]);

  useEffect(() => {
    if (!ageEnregistre) return;
    const minuterie = setTimeout(() => setAgeEnregistre(false), 2000);
    return () => clearTimeout(minuterie);
  }, [ageEnregistre]);

  if (status === 'chargement' || !ageRange || age == null) return null;

  const { rang } = rangDepuisEtoiles(etoiles);
  const libelleHorsLigne =
    horsLigne.etat === 'maj'
      ? `Mise à jour disponible — ${enMo(horsLigne.octetsDelta)}`
      : horsLigne.etat === 'complet'
        ? 'Prêt hors connexion'
        : horsLigne.etat === 'telechargement'
          ? `Téléchargement… ${Math.round((horsLigne.octetsPresents / horsLigne.octetsTotal) * 100)} %`
          : horsLigne.etat === 'partiel'
            ? 'Téléchargement incomplet'
            : horsLigne.octetsTotal > 0
              ? `Écouter sans internet — ${enMo(horsLigne.octetsTotal)}`
              : 'Écouter sans internet';

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-6 py-10">
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">Réglages</h1>

      {/* Âge */}
      <section className="flex flex-col items-center gap-6 rounded-3xl border-2 border-encre-bord bg-encre-clair p-6">
        <h2 className="font-display text-xl text-craie">Ton âge</h2>
        <SelecteurAge
          key={age}
          ageInitial={age}
          rangLumi={rang.index}
          labelValider={ageEnregistre ? 'Enregistré ✓' : "Enregistrer l'âge"}
          onValider={(choisi) => {
            choisirAge(choisi);
            setAgeEnregistre(true);
          }}
        />
      </section>

      {/* Mode hors-ligne */}
      <section className="flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={() => router.push('/hors-ligne')}
          className="flex min-h-14 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-6 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">🚗</span> {libelleHorsLigne}
        </button>

        {/* Réinitialisation de la progression : geste d'adulte, en deux temps. */}
        {cartesVues.size > 0 && (
          <button
            type="button"
            onClick={() => {
              if (!confirmation) {
                setConfirmation(true);
                return;
              }
              oublierToutesLesVues();
              oublierEtoiles();
              oublierMaitrisees();
              setConfirmation(false);
            }}
            className={`min-h-12 cursor-pointer rounded-full border-2 px-6 text-sm transition-colors ${
              confirmation
                ? 'border-soleil text-soleil'
                : 'border-encre-bord text-craie-douce hover:border-soleil hover:text-soleil'
            }`}
          >
            {confirmation
              ? 'Confirmer ? Les cartes redeviendront neuves'
              : `Oublier les ${cartesVues.size} cartes déjà écoutées`}
          </button>
        )}
      </section>
    </main>
  );
}
