'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { ETOILES_PAR_CONSTELLATION } from '@/lib/ciel';
import { Lumi } from '@/components/mascotte/Lumi';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { useT } from '@/components/i18n/useT';
import { Constellation } from './Constellation';
import { ExpeditionDuJour } from './ExpeditionDuJour';

interface CielViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

/*
  La poussière d'étoiles du fond. Tirée une fois, à l'écriture du fichier, et
  figée ici : un tirage au rendu ferait scintiller le fond à chaque frappe de
  React, et un tirage au montage donnerait un ciel différent à chaque visite —
  or c'est le même ciel qu'on doit retrouver.
*/
const POUSSIERE: readonly (readonly [number, number, number])[] = [
  [4, 12, 0.5], [11, 47, 0.7], [17, 8, 0.4], [23, 71, 0.6], [29, 33, 0.5],
  [34, 89, 0.4], [39, 19, 0.7], [45, 58, 0.5], [51, 5, 0.6], [56, 41, 0.4],
  [62, 77, 0.6], [67, 25, 0.5], [72, 63, 0.7], [78, 14, 0.4], [83, 51, 0.6],
  [88, 84, 0.5], [93, 30, 0.4], [97, 66, 0.6], [8, 93, 0.5], [14, 26, 0.6],
  [20, 55, 0.4], [26, 3, 0.5], [31, 68, 0.7], [37, 44, 0.4], [43, 96, 0.5],
  [48, 22, 0.6], [54, 80, 0.4], [59, 10, 0.5], [65, 49, 0.6], [70, 91, 0.4],
  [76, 37, 0.5], [81, 73, 0.6], [86, 17, 0.4], [91, 59, 0.5], [96, 45, 0.7],
];

/**
 * L'écran d'accueil : le ciel.
 *
 * Une étoile par carte, une constellation par monde. C'est le fil rouge de
 * l'application rendu visible — et surtout, c'est le manque qui est visible :
 * au premier lancement le ciel est noir aux trois quarts, ce qui appelle bien
 * mieux qu'un « 0/150 ».
 *
 * Cet écran remplace le choix « exploration libre ou parcours guidé » qui
 * accueillait l'enfant : une application ne devrait pas commencer par poser à
 * un enfant de cinq ans une question de méthode. La réponse est désormais à
 * l'écran — toucher une constellation, c'est explorer ; suivre l'expédition du
 * jour, c'est être guidé.
 */
export function CielView({ cards, domains }: CielViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const { locale } = useLocale();
  const t = useT();

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  const { rang, rangProchain } = rangDepuisEtoiles(etoiles);
  const reste = rangProchain ? rangProchain.seuil - etoiles : 0;
  const fraction = rangProchain
    ? Math.min(1, Math.max(0, (etoiles - rang.seuil) / (rangProchain.seuil - rang.seuil)))
    : 1;

  const parMonde = domains.map((domain) => {
    const duMonde = cards.filter((c) => c.domainId === domain.id);
    const allumees = duMonde.reduce((n, c) => (cartesVues.has(c.id) ? n + 1 : n), 0);
    const brillantes = duMonde.reduce((n, c) => (cartesMaitrisees.has(c.id) ? n + 1 : n), 0);
    return { domain, duMonde, allumees, complet: brillantes >= duMonde.length };
  });
  const allumeesEnTout = parMonde.reduce((n, m) => n + m.allumees, 0);

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 px-4 py-8">
      {/*
        Lumi et sa forme suivante, en ombre. Un compteur dit où l'on en est ;
        une silhouette dit ce qu'on va devenir, et c'est bien plus désirable.
      */}
      <section className="flex flex-col items-center gap-3">
        <div className="flex items-center justify-center gap-3">
          <Lumi rang={rang.index} taille={96} etat="repos" interactif />
          {rangProchain && (
            <>
              <span aria-hidden="true" className="text-2xl text-craie-douce/50">
                →
              </span>
              <span
                aria-hidden="true"
                className="opacity-25 grayscale [filter:grayscale(1)_brightness(0.6)]"
              >
                <Lumi rang={rangProchain.index} taille={64} etat="statique" />
              </span>
            </>
          )}
        </div>

        <p className="font-display text-lg text-craie">
          <span aria-hidden="true">{rang.icone}</span> {localise(rang.nom, locale)}{' '}
          <span aria-hidden="true">⭐</span> {etoiles}
        </p>

        <div className="w-full max-w-xs">
          <div
            className="h-2.5 w-full overflow-hidden rounded-full bg-encre-clair"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(fraction * 100)}
            aria-label={t('lumi.progression-rang')}
          >
            <div
              className="h-full rounded-full bg-soleil transition-[width] duration-500"
              style={{ width: `${fraction * 100}%` }}
            />
          </div>
          {rangProchain ? (
            <p className="mt-1.5 text-center text-sm text-craie-douce">
              {t('ciel.devenir')(reste)}{' '}
              <span aria-hidden="true">{rangProchain.icone}</span>{' '}
              {localise(rangProchain.nom, locale)}
            </p>
          ) : (
            <p className="mt-1.5 text-center text-sm text-soleil">{t('lumi.rang-max')}</p>
          )}
        </div>
      </section>

      <ExpeditionDuJour cards={cards} />

      {/* Le ciel lui-même. */}
      <section className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between px-1">
          <h1 className="font-display text-xl text-craie">{t('ciel.titre')}</h1>
          <p className="text-sm tabular-nums text-craie-douce">
            {t('ciel.compte')(allumeesEnTout, cards.length)}
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border-2 border-encre-bord bg-[#080d1c] p-2">
          {/* Poussière d'étoiles : elle donne un fond de ciel sans jamais
              pouvoir se confondre avec une carte, faute de halo et de trait. */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {POUSSIERE.map(([x, y, o], i) => (
              <circle key={i} cx={x} cy={y} r="0.22" fill="#dbe6ff" opacity={o * 0.5} />
            ))}
          </svg>

          <ul className="relative grid grid-cols-3 gap-1 sm:grid-cols-5">
            {parMonde.map(({ domain, duMonde, allumees, complet }) => (
              <li key={domain.id}>
                <Link
                  href={`/decouvrir/${domain.id}`}
                  aria-label={t('ciel.monde-aria')(
                    localise(domain.labels, locale),
                    allumees,
                    ETOILES_PAR_CONSTELLATION,
                  )}
                  className="flex flex-col items-center gap-0.5 rounded-2xl p-1 transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="aspect-square w-full">
                    <Constellation
                      domainId={domain.id}
                      cards={duMonde}
                      cartesVues={cartesVues}
                      cartesMaitrisees={cartesMaitrisees}
                    />
                  </span>
                  {/* Le nom du monde reste écrit, avec son emoji : un enfant qui
                      ne lit pas se repère à l'icône, et la figure des étoiles
                      n'est un repère qu'une fois tracée. */}
                  <span
                    className={`text-center text-[11px] leading-tight ${
                      complet ? 'text-soleil' : 'text-craie-douce'
                    }`}
                  >
                    <span aria-hidden="true">{domain.icon}</span>{' '}
                    {localise(domain.labels, locale)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="px-1 text-center text-xs leading-relaxed text-craie-douce/80">
          {t('ciel.legende')}
        </p>

        {/* Sortie en liste : plus lisible qu'un ciel pour qui cherche un sujet
            précis, et navigable au lecteur d'écran. */}
        <Link
          href="/decouvrir/mondes"
          className="self-center rounded-full border-2 border-encre-bord px-5 py-2 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          {t('ciel.en-liste')}
        </Link>
      </section>
    </main>
  );
}
