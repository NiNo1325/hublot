'use client';

import { useRouter } from 'next/navigation';
import { useT } from '@/components/i18n/useT';
import { useHorsLigne } from './useHorsLigne';

/**
 * Un poids lisible par un parent, jamais des octets bruts. La fonction ne rend
 * que le nombre : l'unité est traduite (« Mo » / « MB ») via le dictionnaire.
 */
export function enMo(octets: number): number {
  return Math.round(octets / 1024 / 1024);
}

export function HorsLigneView() {
  const router = useRouter();
  const { resume, telecharger, supprimer } = useHorsLigne();
  const t = useT();
  const mo = (octets: number) => t('hl.mo')(enMo(octets));
  const { etat, octetsPresents, octetsTotal, octetsDelta, persistant, erreur } =
    resume;

  const pourcent =
    octetsTotal > 0 ? Math.round((octetsPresents / octetsTotal) * 100) : 0;
  const enCours = etat === 'telechargement';
  const maj = etat === 'maj';

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-10">
      <header className="flex flex-col gap-4 text-center">
        <span className="text-6xl" aria-hidden="true">
          🚗
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('hl.titre')}
        </h1>
        <p className="text-craie-douce">
          {t('hl.texte')}
        </p>
      </header>

      {etat === 'indisponible' ? (
        <p className="rounded-2xl border-2 border-encre-bord p-5 text-craie-douce">
          {t('hl.indisponible')}
          {erreur && <span className="mt-2 block text-sm">{t('hl.detail')(erreur)}</span>}
        </p>
      ) : (
        <div className="flex flex-col gap-5 rounded-3xl border-2 border-encre-bord bg-encre-clair p-6">
          {/*
            La barre porte l'information principale. Le pourcentage seul ne dit
            rien à un parent qui veut savoir combien de données il va consommer :
            les mégaoctets restent affichés en toutes lettres.
          */}
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pourcent}
            aria-label="Cartes téléchargées"
            className="h-3 w-full overflow-hidden rounded-full bg-encre"
          >
            <div
              className="h-full rounded-full bg-soleil transition-[width] duration-300"
              style={{ width: `${pourcent}%` }}
            />
          </div>

          <p className="font-display text-lg">
            {maj
              ? t('hl.maj-dispo')(mo(octetsDelta))
              : etat === 'complet'
                ? t('hl.pret')(mo(octetsTotal))
                : enCours
                  ? t('hl.en-cours')(mo(octetsPresents), mo(octetsTotal))
                  : etat === 'partiel'
                    ? t('hl.incomplet')(mo(octetsPresents), mo(octetsTotal))
                    : t('hl.a-telecharger')(mo(octetsTotal))}
          </p>

          {/*
            Une mise à jour ne remet pas tout en cause : les cartes déjà là
            restent jouables. On le dit, pour que le parent sache qu'il peut
            attendre le wifi sans rien casser.
          */}
          {maj && (
            <p className="text-sm text-craie-douce">
              Les cartes déjà téléchargées restent utilisables. La mise à jour
              ne récupère que ce qui a changé.
            </p>
          )}

          {erreur && <p className="text-sm text-soleil">{erreur}</p>}

          <div className="flex flex-wrap gap-4">
            {etat !== 'complet' && (
              <button
                type="button"
                onClick={telecharger}
                disabled={enCours}
                className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95 disabled:cursor-default disabled:opacity-60 disabled:hover:scale-100"
              >
                {enCours
                  ? t('hl.telechargement')
                  : maj
                    ? t('hl.mettre-a-jour')
                    : etat === 'partiel'
                      ? t('hl.reprendre')
                      : t('hl.tout')}
              </button>
            )}

            {octetsPresents > 0 && !enCours && (
              <button
                type="button"
                onClick={supprimer}
                className="min-h-16 cursor-pointer rounded-full border-2 border-encre-bord px-6 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
              >
                {t('hl.liberer')}
              </button>
            )}
          </div>

          {/*
            Dit avant le téléchargement, pas après : un parent en données
            mobiles doit pouvoir renoncer en connaissance de cause.
          */}
          <p className="text-sm text-craie-douce">
            {t('hl.conseil')}
          </p>

          {/*
            Le navigateur n'accorde le stockage garanti qu'aux applications
            installées. Sans installation, le système peut effacer ces cent
            quarante mégaoctets pour faire de la place — et ce serait découvert
            en voiture. Le dire ici est la seule parade honnête.
          */}
          {persistant === false && (
            <p className="rounded-2xl border-2 border-soleil/40 bg-soleil/5 p-4 text-sm text-craie-douce">
              <span className="font-display text-soleil">
                {t('hl.installer-titre')}
              </span>{' '}
              {t('hl.installer-texte')}
            </p>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={() => router.push('/')}
        className="min-h-12 cursor-pointer self-center rounded-full border-2 border-encre-bord px-6 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
      >
        {t('hl.retour')}
      </button>
    </main>
  );
}
