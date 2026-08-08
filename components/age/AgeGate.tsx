'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import type { AgeRange } from '@/lib/types';
import { trancheDepuisAge } from '@/lib/age';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import illustration35 from '@/public/ages/age-3-5.png';
import illustration68 from '@/public/ages/age-6-8.png';
import illustration912 from '@/public/ages/age-9-12.png';
import { Lumi } from '@/components/mascotte/Lumi';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useHorsLigne } from '@/components/hors-ligne/useHorsLigne';
import { enMo } from '@/components/hors-ligne/HorsLigneView';
import { useAgeRange } from './useAgeRange';

// Une illustration immédiatement reconnaissable par tranche d'âge.
const illustrationAge: Record<AgeRange, { image: StaticImageData; alt: string }> = {
  '3-5': { image: illustration35, alt: 'Un tout-petit explorateur' },
  '6-8': { image: illustration68, alt: 'Un enfant avec une petite fusée' },
  '9-12': { image: illustration912, alt: "Une jeune ado passionnée d'astronomie" },
};

export function AgeGate() {
  const router = useRouter();
  const { age, ageRange, status, choisirAge } = useAgeRange();
  const { cartesVues, oublierToutesLesVues } = useCartesVues();
  const { etoiles, oublierEtoiles } = useEtoiles();
  const { oublierMaitrisees } = useCartesMaitrisees();

  /*
    Effacer la progression est irréversible, et l'écran reste à portée d'un
    enfant. D'où la confirmation en deux temps, plutôt qu'un `confirm()` natif
    — bloquant, non stylable, et illisible pour qui l'aurait ouvert par
    accident.
  */
  const [confirmation, setConfirmation] = useState(false);

  // Âge en cours d'édition dans le pas-à-pas : l'âge courant si on vient changer,
  // sinon 7 par défaut. `age` est déjà résolu quand cet écran s'affiche.
  const [ageEdite, setAgeEdite] = useState<number>(age ?? 7);
  const illustration = illustrationAge[trancheDepuisAge(ageEdite)];

  /*
    L'état vient du cache, jamais d'un drapeau : après un nettoyage du stockage
    par le système, un drapeau annoncerait « prêt » devant une application
    muette — exactement au moment où le parent compte dessus.
  */
  const { resume: horsLigne } = useHorsLigne();
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

  useEffect(() => {
    if (!confirmation) return;
    // Sans retour automatique, un « Confirmer ? » resté affiché deviendrait un
    // piège au retour suivant sur l'écran.
    const minuterie = setTimeout(() => setConfirmation(false), 4000);
    return () => clearTimeout(minuterie);
  }, [confirmation]);

  /*
    Venir changer d'âge est une demande explicite : sans ce drapeau, la
    redirection « visiteur de retour » renverrait aussitôt vers la grille et
    rendrait le changement impossible.
  */
  const changementDemande = useSearchParams().get('changer') === '1';

  // Pendant la lecture du stockage, on ne rend rien : afficher le sélecteur
  // puis le remplacer aussitôt ferait clignoter l'écran à chaque retour.
  if (status === 'chargement') return null;

  /*
    Visiteur connu : l'accueil devient le menu du jeu. Une redirection
    automatique vers les cartes, comme auparavant, rendait le quizz
    inatteignable depuis cet écran.
  */
  if (ageRange && !changementDemande) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-10 px-6 py-12 text-center">
        <div>
          <h1 className="font-display text-4xl font-semibold text-craie sm:text-5xl">
            Hublot
          </h1>
          <p className="mt-3 text-craie-douce">Qu&apos;est-ce qu&apos;on fait&nbsp;?</p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-4">
          <button
            type="button"
            onClick={() => router.push('/decouvrir')}
            className="flex min-h-20 cursor-pointer items-center justify-center gap-4 rounded-3xl border-4 border-encre-bord bg-encre-clair px-6 font-display text-2xl text-craie transition-transform hover:scale-105 hover:border-soleil active:scale-95"
          >
            <span aria-hidden="true">🔭</span>
            Découvrir
          </button>
          <button
            type="button"
            onClick={() => router.push('/quizz')}
            className="flex min-h-20 cursor-pointer items-center justify-center gap-4 rounded-3xl border-4 border-soleil bg-soleil/10 px-6 font-display text-2xl text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            <span aria-hidden="true">🎯</span>
            Jouer au quizz
          </button>

          {/*
            Rappel de progression : le rang atteint et ce qu'il reste pour le
            suivant. C'est l'invitation à rejouer au quizz.
          */}
          {(() => {
            const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
            const reste = rangProchain ? rangProchain.seuil - etoiles : 0;
            return (
              <div className="flex flex-col items-center gap-1 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 py-4">
                {/* Lumi porte les insignes du rang atteint : elle grandit avec l'enfant. */}
                <Lumi rang={rang.index} taille={76} className="-mt-1 mb-1" />
                <p className="font-display text-lg text-craie">
                  <span aria-hidden="true">{rang.icone}</span> {rang.nom} —{' '}
                  <span aria-hidden="true">⭐</span> {etoiles}
                </p>
                {rangProchain && (
                  <p className="text-sm text-craie-douce">
                    plus que {reste} <span aria-hidden="true">⭐</span> pour {rangProchain.nom}
                  </p>
                )}
              </div>
            );
          })()}

          <button
            type="button"
            onClick={() => router.push('/collection')}
            className="flex min-h-14 cursor-pointer items-center justify-center gap-3 rounded-3xl border-2 border-encre-bord bg-encre-clair px-6 font-display text-lg text-craie transition-transform hover:scale-105 hover:border-soleil active:scale-95"
          >
            <span aria-hidden="true">🏅</span>
            Ma collection
          </button>
        </div>

        <div className="flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() => router.push('/?changer=1')}
            className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            Niveau&nbsp;: {age} ans — changer
          </button>

          {/*
            L'entrée du mode hors ligne vit sur le menu, et non dans les
            réglages : un parent doit la trouver avant de partir en voiture,
            pas la découvrir en cherchant autre chose.
          */}
          <button
            type="button"
            onClick={() => router.push('/hors-ligne')}
            className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            <span aria-hidden="true">🚗</span> {libelleHorsLigne}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-12 px-6 py-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold text-craie sm:text-5xl">
          Tu es grand comment&nbsp;?
        </h1>
        <p className="mt-3 text-craie-douce">
          Choisis ta taille pour que les explications soient à ta mesure.
        </p>
      </div>

      {/*
        Pas-à-pas : on choisit un âge exact. Le grand chiffre sert l'adulte qui
        règle ; la figure (tout-petit, enfant, ado) sert l'enfant qui s'y
        reconnaît. Le cercle garde une taille fixe : c'est l'illustration, pas la
        taille, qui dit la tranche.
      */}
      <div className="flex flex-col items-center gap-8">
        <span className="halo-soleil relative block h-44 w-44 overflow-hidden rounded-full border-4 border-soleil bg-encre-clair">
          <Image
            key={illustration.image.src}
            src={illustration.image}
            alt={illustration.alt}
            fill
            priority
            placeholder="blur"
            sizes="176px"
            className="object-cover"
          />
        </span>

        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setAgeEdite((a) => Math.max(3, a - 1))}
            disabled={ageEdite <= 3}
            aria-label="Un an de moins"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 border-encre-bord font-display text-4xl text-craie transition-colors hover:border-soleil hover:text-soleil disabled:cursor-default disabled:opacity-30"
          >
            −
          </button>
          <span
            aria-hidden="true"
            className="w-32 text-center font-display text-6xl font-semibold text-craie"
          >
            {ageEdite}
            {ageEdite >= 12 ? ' +' : ''}
          </span>
          <button
            type="button"
            onClick={() => setAgeEdite((a) => Math.min(12, a + 1))}
            disabled={ageEdite >= 12}
            aria-label="Un an de plus"
            className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-4 border-encre-bord font-display text-4xl text-craie transition-colors hover:border-soleil hover:text-soleil disabled:cursor-default disabled:opacity-30"
          >
            +
          </button>
        </div>
        <span className="sr-only" aria-live="polite">
          {ageEdite >= 12 ? '12 ans et plus' : `${ageEdite} ans`}
        </span>

        <button
          type="button"
          onClick={() => {
            choisirAge(ageEdite);
            router.push('/');
          }}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-xl text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          C&apos;est parti
        </button>
      </div>

      {/* Sortie de secours : on doit pouvoir renoncer sans rien changer. */}
      {changementDemande && ageRange && (
        <button
          type="button"
          onClick={() => router.push('/decouvrir')}
          className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-6 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          Revenir aux cartes
        </button>
      )}

      {/*
        Réinitialisation de la progression. Elle vit ici, et non dans l'en-tête
        de Découvrir, parce que c'est un geste d'adulte : celui qui passe la
        tablette au cadet vient de toute façon changer le niveau.
      */}
      {changementDemande && cartesVues.size > 0 && (
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
    </main>
  );
}
