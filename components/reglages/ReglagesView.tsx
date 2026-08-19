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
import { Intitule } from '@/components/ui/Intitule';
import { NotificationsToggle } from './NotificationsToggle';
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
 * Réglages, rangés par intention plutôt qu'en vrac : le profil (l'âge), l'écoute
 * et les alertes (hors-ligne, notifications), l'aide (revoir la présentation),
 * puis en pied de page, à l'écart, le geste rare de réinitialisation et la
 * version. Chaque groupe est une carte de rangées cohérentes.
 */
export function ReglagesView() {
  const router = useRouter();
  const { age, ageRange, status, choisirAge } = useAgeRange();
  const { cartesVues, oublierToutesLesVues } = useCartesVues();
  const { etoiles } = useEtoiles();
  const { oublierMaitrisees } = useCartesMaitrisees();
  const { resume: horsLigne } = useHorsLigne();
  const { locale, choisirLocale } = useLocale();
  const t = useT();

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

      {/* Profil */}
      <section className="flex flex-col gap-3">
        <Intitule>{t('reglages.profil')}</Intitule>
        <div className="flex flex-col items-center gap-5 rounded-3xl border-2 border-encre-bord bg-encre-clair p-6">
          <SelecteurAge
            key={age}
            ageInitial={age}
            rangLumi={rang.index}
            labelValider={ageEnregistre ? t('reglages.age-enregistre') : t('reglages.enregistrer-age')}
            onValider={(choisi) => {
              choisirAge(choisi);
              setAgeEnregistre(true);
            }}
          />
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
              oublierToutesLesVues();
              oublierMaitrisees();
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
