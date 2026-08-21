'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { SelecteurNiveau } from '@/components/niveau/SelecteurNiveau';
import { useNiveau } from '@/components/niveau/useNiveau';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useHorsLigne } from '@/components/hors-ligne/useHorsLigne';
import { useMusee } from '@/components/musee/useLiberes';
import { marquerRemiseAZero } from '@/lib/sync/local';
import { synchroniserMaintenant } from '@/lib/sync/client';
import { enMo } from '@/components/hors-ligne/HorsLigneView';
import { Intitule } from '@/components/ui/Intitule';
import { NotificationsToggle } from './NotificationsToggle';
import { SectionFamille } from './SectionFamille';
import { SauvegardeCompte } from '@/components/compte/SauvegardeCompte';
import { InfoVersion } from './InfoVersion';
import { ouvrirTutoriel } from '@/components/tutoriel/useTutoriel';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { type Locale } from '@/lib/types';

const LANGUES: { code: Locale; nom: string; drapeau: string }[] = [
  { code: 'fr', nom: 'Français', drapeau: '🇫🇷' },
  { code: 'en', nom: 'English', drapeau: '🇬🇧' },
];

/**
 * Réglages, rangés par intention plutôt qu'en vrac : le niveau, la famille, l'écoute
 * et les alertes (hors-ligne, notifications), l'aide (revoir la présentation),
 * puis en pied de page, à l'écart, le geste rare de réinitialisation et la
 * version. Chaque groupe est une carte de rangées cohérentes.
 */
export function ReglagesView() {
  const router = useRouter();
  const { niveau, status, choisirNiveau } = useNiveau();
  const { cartesVues, oublierToutesLesVues } = useCartesVues();
  const { oublierMaitrisees } = useCartesMaitrisees();
  const { oublierLiberes } = useMusee();
  const { resume: horsLigne } = useHorsLigne();
  const { locale, choisirLocale } = useLocale();
  const t = useT();

  const [confirmation, setConfirmation] = useState(false);
  const [niveauEnregistre, setNiveauEnregistre] = useState(false);

  // Accès direct sans niveau choisi : retour à la première entrée.
  useEffect(() => {
    if (status === 'pret' && !niveau) router.replace('/');
  }, [status, niveau, router]);

  // Retour automatique de la confirmation : un « Confirmer ? » resté affiché
  // deviendrait un piège au prochain passage.
  useEffect(() => {
    if (!confirmation) return;
    const minuterie = setTimeout(() => setConfirmation(false), 4000);
    return () => clearTimeout(minuterie);
  }, [confirmation]);

  useEffect(() => {
    if (!niveauEnregistre) return;
    const minuterie = setTimeout(() => setNiveauEnregistre(false), 2000);
    return () => clearTimeout(minuterie);
  }, [niveauEnregistre]);

  if (status === 'chargement' || !niveau) return null;

  const etatHorsLigne =
    horsLigne.etat === 'maj'
      ? t('reglages.hors-ligne.maj')
      : horsLigne.etat === 'complet'
        ? t('reglages.hors-ligne.pret')
        : horsLigne.etat === 'telechargement'
          ? `${Math.round((horsLigne.octetsPresents / horsLigne.octetsTotal) * 100)} %`
          : horsLigne.etat === 'partiel'
            ? t('reglages.hors-ligne.incomplet')
            : horsLigne.octetsTotal > 0
              ? t('hl.mo')(enMo(horsLigne.octetsTotal))
              : '';

  const rangeeNav =
    'flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-encre-bord/30';

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-10">
      <h1 className="text-center font-display text-3xl font-semibold sm:text-4xl">{t('reglages.titre')}</h1>

      {/* Niveau de difficulté */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.niveau')}</Intitule>
        <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-encre-bord bg-encre-clair p-4">
          <SelecteurNiveau
            niveauInitial={niveau}
            onChoisir={(choisi) => {
              choisirNiveau(choisi);
              setNiveauEnregistre(true);
            }}
          />
          {/* Une confirmation qui s'efface, plutôt qu'un bouton à ne pas oublier. */}
          <p aria-live="polite" className="min-h-5 text-sm text-soleil">
            {niveauEnregistre ? t('reglages.niveau-enregistre') : ''}
          </p>
        </div>
      </section>

      {/* Langue */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.langue')}</Intitule>
        <div className="grid grid-cols-2 gap-3">
          {LANGUES.map((l) => {
            const actif = locale === l.code;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => choisirLocale(l.code)}
                aria-pressed={actif}
                className={`flex min-h-14 cursor-pointer items-center justify-center gap-2 rounded-3xl border-2 text-craie transition-colors ${
                  actif
                    ? 'border-soleil bg-soleil/10 text-soleil'
                    : 'border-encre-bord bg-encre-clair hover:border-soleil'
                }`}
              >
                <span aria-hidden="true">{l.drapeau}</span> {l.nom}
              </button>
            );
          })}
        </div>
      </section>

      {/* Famille : la fratrie qui partage l'appareil. */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.famille')}</Intitule>
        <SectionFamille />
      </section>

      {/* Écoute & alertes */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.ecoute')}</Intitule>
        <div className="divide-y divide-encre-bord overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
          <button type="button" onClick={() => router.push('/hors-ligne')} className={rangeeNav}>
            <span aria-hidden="true">🚗</span>
            <span className="flex-1 text-craie">{t('reglages.hors-ligne')}</span>
            {etatHorsLigne && <span className="text-sm text-craie-douce">{etatHorsLigne}</span>}
            <span aria-hidden="true" className="text-lg leading-none text-craie-douce">
              ›
            </span>
          </button>

          {/* Notifications push (n'apparaît que si l'infra est branchée). */}
          <NotificationsToggle />
        </div>
      </section>

      {/* Aide */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.aide')}</Intitule>
        <div className="overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
          <button type="button" onClick={() => ouvrirTutoriel()} className={rangeeNav}>
            <span aria-hidden="true">🌟</span>
            <span className="flex-1 text-craie">{t('reglages.tutoriel')}</span>
            <span aria-hidden="true" className="text-lg leading-none text-craie-douce">
              ›
            </span>
          </button>
        </div>
      </section>

      {/* Sauvegarde. Toute la section disparaît si le compte Google n'est pas
          configuré : un intitulé surmontant une carte vide vaudrait moins que
          rien du tout. */}
      {process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID && (
        <section className="flex flex-col gap-3">
          <Intitule>{t('reglages.sauvegarde')}</Intitule>
          <div className="overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
            <SauvegardeCompte />
          </div>
        </section>
      )}

      {/* Pied de page : le geste rare de réinitialisation, à l'écart, et les
          versions (app Google Play + build web) en tout petit, pour lever tout
          doute sur ce qui tourne. */}
      <div className="mt-auto flex flex-col items-center gap-4 pt-2">
        {cartesVues.size > 0 && (
          <button
            type="button"
            onClick={() => {
              if (!confirmation) {
                setConfirmation(true);
                return;
              }
              /*
                Les trois ensemble, jamais deux sur trois : le trousseau se
                déduit des cartes comprises moins les cellules ouvertes, et en
                effacer une partie laisserait une dette impossible à rembourser.
              */
              oublierToutesLesVues();
              oublierMaitrisees();
              oublierLiberes();
              /*
                Et l'on date l'effacement avant de le pousser : la fusion unit
                sans jamais retrancher, si bien qu'une remise à zéro purement
                locale revenait du serveur à la synchronisation suivante — le
                parent réinitialisait, rafraîchissait, et retrouvait ses clés.
              */
              marquerRemiseAZero();
              synchroniserMaintenant();
              setConfirmation(false);
            }}
            className={`min-h-11 cursor-pointer rounded-full px-5 text-xs transition-colors ${
              confirmation ? 'bg-soleil/15 text-soleil' : 'text-craie-douce/70 hover:text-craie'
            }`}
          >
            {confirmation
              ? t('reglages.confirmer')
              : t('reglages.reinitialiser')(cartesVues.size)}
          </button>
        )}
        <InfoVersion />
      </div>
    </main>
  );
}
