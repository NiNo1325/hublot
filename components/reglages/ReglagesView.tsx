'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useNiveau } from '@/components/niveau/useNiveau';
import { LumiNiveau } from '@/components/mascotte/LumiNiveau';
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
 * Réglages, rangés par intention plutôt qu'en vrac.
 *
 * Quatre groupes, et une seule forme : une carte de rangées. Ce que l'enfant
 * entend — le niveau des mots, la langue —, la famille qui partage l'appareil,
 * l'application elle-même (écoute hors ligne, alertes, présentation), puis la
 * sauvegarde. En pied de page, à l'écart, le geste rare de réinitialisation et
 * la version.
 *
 * Six intitulés le découpaient auparavant, dont deux ne surmontaient qu'une
 * seule ligne, et le choix du niveau s'y étalait déplié sur une demi-page. Les
 * testeurs ont trouvé l'écran chargé. Il ne l'est plus : le niveau est une
 * rangée qui mène à son écran, et les groupes d'une ligne ont rejoint celui
 * auquel ils appartenaient déjà.
 */
export function ReglagesView() {
  const router = useRouter();
  const { niveau, status } = useNiveau();
  const { cartesVues, oublierToutesLesVues } = useCartesVues();
  const { oublierMaitrisees } = useCartesMaitrisees();
  const { oublierLiberes } = useMusee();
  const { resume: horsLigne } = useHorsLigne();
  const { locale, choisirLocale } = useLocale();
  const t = useT();

  const [confirmation, setConfirmation] = useState(false);

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

      {/*
        Ce que l'enfant entend : le niveau des mots, et la langue dans laquelle
        on les lui dit. Deux réglages qui ne se ressemblent pas mais répondent à
        la même question, et qu'il n'y avait aucune raison de séparer par un
        intitulé.
      */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.entend')}</Intitule>
        <div className="divide-y divide-encre-bord overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
          {/*
            La Lumi du niveau en cours tient lieu d'icône : un enfant reconnaît
            la petite, la jeune ou la grande sans lire le nom à côté.
          */}
          <button
            type="button"
            onClick={() => router.push('/reglages/niveau')}
            className={rangeeNav}
          >
            <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-end justify-center">
              <LumiNiveau variante={niveau.variante} taille={34} />
            </span>
            <span className="flex-1 text-craie">{t('reglages.niveau-ligne')}</span>
            <span className="text-sm text-craie-douce">{niveau.nom[locale] ?? niveau.nom.fr}</span>
            <span aria-hidden="true" className="text-lg leading-none text-craie-douce">
              ›
            </span>
          </button>

          {/*
            La langue reste dépliée : avec deux valeurs, une rangée qui mène
            ailleurs coûterait deux gestes là où les deux boutons en demandent
            un, et l'enfant anglophone doit pouvoir la retrouver sans lire.
          */}
          <div className="flex flex-col gap-3 px-5 py-4">
            <span className="text-craie">{t('reglages.langue')}</span>
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
                        : 'border-encre-bord bg-encre hover:border-soleil'
                    }`}
                  >
                    <span aria-hidden="true">{l.drapeau}</span> {l.nom}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Famille : la fratrie qui partage l'appareil. */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.famille')}</Intitule>
        <SectionFamille />
      </section>

      {/* L'application : l'écoute hors ligne, les alertes, la présentation. */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.appli')}</Intitule>
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

      {/* Vie privée. Google Play exige que la politique de confidentialité —
          et, dès qu'un compte existe, la marche à suivre pour le supprimer —
          soient accessibles depuis l'application elle-même, pas seulement
          depuis la fiche du Store. */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.infos')}</Intitule>
        <div className="divide-y divide-encre-bord overflow-hidden rounded-3xl border-2 border-encre-bord bg-encre-clair">
          <Link href="/confidentialite" className={rangeeNav}>
            <span aria-hidden="true">🔒</span>
            <span className="flex-1 text-craie">{t('reglages.confidentialite')}</span>
            <span aria-hidden="true" className="text-lg leading-none text-craie-douce">
              ›
            </span>
          </Link>
          <Link href="/suppression" className={rangeeNav}>
            <span aria-hidden="true">🗑️</span>
            <span className="flex-1 text-craie">{t('reglages.suppression')}</span>
            <span aria-hidden="true" className="text-lg leading-none text-craie-douce">
              ›
            </span>
          </Link>
        </div>
      </section>

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
