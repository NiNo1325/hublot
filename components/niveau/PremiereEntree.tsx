'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SelecteurProfil } from '@/components/profils/SelecteurProfil';
import { useProfils } from '@/components/profils/useProfils';
import { marquerProfilChoisi, profilChoisiCetteSession } from '@/components/profils/sessionChoix';
import { useT } from '@/components/i18n/useT';
import { SelecteurNiveau } from './SelecteurNiveau';
import { useNiveau } from './useNiveau';

/**
 * Première entrée dans l'app.
 *
 * On ne demande le niveau qu'une fois : ensuite il se change dans Réglages, et
 * l'accueil file droit dans l'app. L'état vient du stockage : après un
 * nettoyage par le système, on redemande plutôt que d'ouvrir une app muette sur
 * un drapeau optimiste.
 *
 * Quand la famille compte plusieurs enfants, une question passe devant : qui
 * joue ? Elle n'apparaît pas autrement — ni pour un enfant unique, ni pour les
 * familles déjà installées, qui n'ont qu'un profil.
 *
 * Cet écran demandait autrefois l'âge de l'enfant. Il demande maintenant ce
 * qu'il veut entendre, ce qui revient au même pour le catalogue et n'est pas du
 * tout la même question pour lui.
 */
export function PremiereEntree() {
  const router = useRouter();
  const t = useT();
  const { niveau, status, choisirNiveau } = useNiveau();
  const { plusieurs } = useProfils();
  const [choixFait, setChoixFait] = useState(profilChoisiCetteSession);

  const doitChoisir = plusieurs && !choixFait;

  /*
    Visiteur connu : on entre directement dans l'app, et l'on entre par le
    musée. C'est lui qui porte le récit — les savants enfermés, ce que Lumi
    demande — et arriver sur la bibliothèque ferait manquer la raison de tout
    le reste.
  */
  useEffect(() => {
    if (doitChoisir) return;
    if (status === 'pret' && niveau) router.replace('/musee');
  }, [doitChoisir, status, niveau, router]);

  if (status === 'chargement') return null;

  if (doitChoisir) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-12 px-6 py-12">
        <SelecteurProfil
          onChoisi={() => {
            marquerProfilChoisi();
            setChoixFait(true);
          }}
        />
      </main>
    );
  }

  // Niveau déjà connu : redirection en cours, rien à afficher.
  if (niveau) return null;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12">
      <div className="text-center">
        <h1 className="font-display text-4xl font-semibold text-craie sm:text-5xl">
          {t('accueil.bienvenue')}
        </h1>
      </div>

      <SelecteurNiveau
        niveauInitial={null}
        labelValider={t('accueil.commencer')}
        onValider={(choisi) => {
          choisirNiveau(choisi);
          router.replace('/musee');
        }}
      />
    </main>
  );
}
