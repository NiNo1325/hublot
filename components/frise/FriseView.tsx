'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { construireFrise, type ElementFrise } from '@/lib/frise';
import { construireFriseDecouvertes } from '@/lib/inventions';
import { cards } from '@/content/cards';
import { useLocale } from '@/components/i18n/useLocale';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useMusee } from '@/components/musee/useLiberes';
import { useLienAudio } from '@/components/musee/useLienAudio';
import { useT } from '@/components/i18n/useT';
import { jouerSonPaire, jouerSonRate, jouerSonRecompense } from '@/lib/sonRecompense';

/**
 * La frise du temps : ranger les savants du plus ancien au plus récent.
 *
 * Le musée range déjà les savants par époque, mais il le fait à la place de
 * l'enfant. Ici, c'est lui qui décide qui est venu avant — et rien à l'écran ne
 * le lui dit : il n'a que les visages, les habits, les instruments.
 *
 * **La date n'apparaît qu'une fois le portrait placé.** L'afficher plus tôt
 * ferait de la partie un exercice de lecture de chiffres, alors qu'on veut
 * qu'il raisonne d'abord et vérifie ensuite. C'est aussi ce qui rend le jeu
 * jouable à cinq ans, avant de savoir lire les nombres à quatre chiffres.
 *
 * Rien n'est puni : un portrait posé trop tôt clignote en rouge et reste dans
 * la réserve. On ne peut pas perdre, seulement finir.
 *
 * Deux jeux partagent cet écran. En mode `decouvertes`, ce sont les cartes
 * elles-mêmes qu'on range — quand a-t-on compris la gravitation, inventé le
 * wifi — et l'illustration devient l'emoji de la carte. Le plateau, la réserve
 * et la règle du placement ne changent pas d'un iota : dupliquer deux cent
 * vingt-cinq lignes pour un jeu de vignettes n'aurait servi personne.
 */
export function FriseView({ mode = 'savants' }: { mode?: 'savants' | 'decouvertes' } = {}) {
  const router = useRouter();
  const decouvertes = mode === 'decouvertes';
  const { locale } = useLocale();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const { liberes } = useMusee();
  const t = useT();
  const { direNom } = useLienAudio();

  const [manche, setManche] = useState<{ tirage: ElementFrise[]; ordre: string[] } | null>(null);
  const [places, setPlaces] = useState<string[]>([]);
  const [rate, setRate] = useState<string | null>(null);
  const minuterieRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  useEffect(
    () => () => {
      if (minuterieRef.current) clearTimeout(minuterieRef.current);
    },
    [],
  );

  if (status === 'chargement' || !ageRange) return null;

  const lancer = () => {
    setManche(
      decouvertes
        ? construireFriseDecouvertes(cards, cartesVues, ageRange, locale)
        : construireFrise(cartesVues, liberes, ageRange),
    );
    setPlaces([]);
    setRate(null);
  };

  const poser = (savant: ElementFrise) => {
    if (!manche || places.includes(savant.id)) return;
    if (!decouvertes) direNom(savant.id);

    if (manche.ordre[places.length] !== savant.id) {
      // Trop tôt : un clignotement rouge, et le portrait reste en réserve.
      jouerSonRate();
      setRate(savant.id);
      if (minuterieRef.current) clearTimeout(minuterieRef.current);
      minuterieRef.current = setTimeout(() => setRate(null), 700);
      return;
    }

    const complet = places.length + 1 === manche.ordre.length;
    if (complet) jouerSonRecompense();
    else jouerSonPaire();
    setPlaces((liste) => [...liste, savant.id]);
  };

  const rang = rangDepuisEtoiles(etoiles).rang.index;
  /** L'année, dite comme on la dit à un enfant : « il y a longtemps », pas « -287 ». */
  const annee = (valeur: number) =>
    valeur < 0 ? t('frise.avant-jc')(Math.abs(valeur)) : String(valeur);

  if (manche === null) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          ⏳
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t(decouvertes ? 'decouvertes.titre' : 'frise.titre')}</h1>
        <p className="max-w-md text-craie-douce">{t(decouvertes ? 'decouvertes.regle' : 'frise.regle')}</p>
        <button
          type="button"
          onClick={lancer}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('frise.demarrer')}
        </button>
      </main>
    );
  }

  const gagne = places.length === manche.ordre.length;
  const reserve = manche.tirage.filter((s) => !places.includes(s.id));
  const parId = new Map(manche.tirage.map((s) => [s.id, s]));

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-4 py-8">
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t(decouvertes ? 'decouvertes.titre' : 'frise.titre')}</h1>
        <p aria-live="polite" className="text-sm text-craie-douce">
          {gagne ? t('frise.gagne') : t(decouvertes ? 'decouvertes.consigne' : 'frise.consigne')}
        </p>
      </header>

      {/*
        La frise elle-même : une flèche horizontale, dans le même sens de
        lecture que celle du musée. Les cases vides disent combien il en reste,
        ce qu'une simple liste qui s'allonge ne dirait pas.
      */}
      <section className="flex flex-col gap-2">
        <div className="flex items-end gap-1">
          {manche.ordre.map((attendu, i) => {
            const pose = places[i] ? parId.get(places[i]) : null;
            return (
              <div key={attendu} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={`flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl border-2 ${
                    pose ? 'border-soleil bg-soleil/10' : 'border-dashed border-encre-bord'
                  }`}
                >
                  {pose ? (
                    <Illustration element={pose} plein />
                  ) : (
                    <span className="font-display text-lg text-craie-douce/40" aria-hidden="true">
                      {i + 1}
                    </span>
                  )}
                </div>
                {/* La date ne se révèle qu'après coup : c'est la vérification, pas l'énoncé. */}
                <span className="min-h-4 text-[10px] tabular-nums text-soleil">
                  {pose ? annee(pose.annee) : ''}
                </span>
                {/*
                  Le titre sous la carte, pour les découvertes seulement. Un
                  portrait se reconnaît, un emoji non : sans ces quelques mots,
                  la frise finie n'était qu'une rangée de pictogrammes datés, et
                  l'enfant repartait sans savoir ce qui s'était passé en 1703.
                */}
                {decouvertes && (
                  <span className="min-h-6 text-center text-[9px] leading-tight text-craie-douce">
                    {pose ? pose.nom : ''}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* La flèche du temps, sous la frise : elle dit dans quel sens on range. */}
        <div className="flex items-center gap-2 px-1">
          <span className="text-[10px] uppercase tracking-wide text-craie-douce/70">
            {t('frise.ancien')}
          </span>
          <span aria-hidden="true" className="relative h-[3px] flex-1 rounded-full bg-encre-bord">
            <span className="absolute -top-[5px] right-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-encre-bord" />
          </span>
          <span className="text-[10px] uppercase tracking-wide text-craie-douce/70">
            {t('frise.recent')}
          </span>
        </div>
      </section>

      {gagne ? (
        <div className="flex flex-col items-center gap-6 py-2 text-center">
          <Lumi rang={rang} taille={110} etat="fete" />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={lancer}
              className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              {t('frise.rejouer')}
            </button>
            <button
              type="button"
              onClick={() => router.push('/joue')}
              className="min-h-14 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
            >
              {t('frise.retour')}
            </button>
          </div>
        </div>
      ) : (
        /* La réserve : les portraits qui restent à placer. */
        <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4">
          {reserve.map((savant) => (
            <li key={savant.id}>
              <button
                type="button"
                onClick={() => poser(savant)}
                className={`flex w-full cursor-pointer flex-col items-center gap-1 rounded-2xl border-2 p-2 transition-colors ${
                  rate === savant.id
                    ? 'border-[#fb7185] bg-[#fb7185]/10'
                    : 'border-encre-bord bg-encre-clair hover:border-soleil'
                }`}
              >
                <Illustration element={savant} />
                <span className="text-center text-[11px] leading-tight text-craie">
                  {savant.nom}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

/**
 * L'image d'un élément de frise : le portrait d'un savant, ou l'emoji de la
 * carte quand la frise range des découvertes.
 *
 * Les deux jeux partagent tout le reste — le plateau, la réserve, la règle du
 * placement — et il aurait été absurde de dupliquer deux cent vingt-cinq lignes
 * pour une vignette.
 */
function Illustration({ element, plein = false }: { element: ElementFrise; plein?: boolean }) {
  if (element.portrait) {
    return (
      <Image
        src={element.portrait}
        alt={plein ? element.nom : ''}
        width={160}
        height={160}
        className={plein ? 'h-full w-full object-cover' : 'h-16 w-16 rounded-full object-cover'}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className={plein ? 'text-4xl leading-none' : 'flex h-16 w-16 items-center justify-center text-3xl leading-none'}
    >
      {element.emoji ?? '❓'}
    </span>
  );
}
