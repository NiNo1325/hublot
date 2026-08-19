'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import { construireManche, estBrouille, type Lien, type Manche } from '@/lib/liens';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { Lumi } from '@/components/mascotte/Lumi';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useMusee } from '@/components/musee/useLiberes';
import { useLienAudio } from '@/components/musee/useLienAudio';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { jouerSonPaire, jouerSonRate, jouerSonRecompense } from '@/lib/sonRecompense';

interface LiensViewProps {
  cards: ScienceCard[];
}

/**
 * Le jeu des liens : relier chaque savant à sa découverte.
 *
 * On touche un portrait, puis une découverte, et le trait se tire. C'est un
 * appariement en deux gestes plutôt qu'un glisser-déposer : sur un téléphone
 * tenu par un enfant de cinq ans, un doigt qui traîne rate sa cible une fois
 * sur deux, et le glisser reste inaccessible au clavier comme au lecteur
 * d'écran.
 *
 * Rien n'est puni. Un mauvais lien fait un trait rouge qui s'efface aussitôt,
 * et l'on recommence — comme au quizz, où il n'y a pas d'échec possible. La
 * manche se gagne quand tous les traits sont tirés : on la termine, on ne la
 * score pas.
 */
export function LiensView({ cards }: LiensViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { etoiles } = useEtoiles();
  const { cartesVues } = useCartesVues();
  const { liberes } = useMusee();
  const { locale } = useLocale();
  const t = useT();
  const { presenter, direNom } = useLienAudio();

  const [manche, setManche] = useState<Manche | null>(null);
  const [choisi, setChoisi] = useState<string | null>(null);
  const [relies, setRelies] = useState<string[]>([]);
  const [rate, setRate] = useState<string | null>(null);
  const minuterieRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Les ancres des deux colonnes, pour tracer les traits entre elles.
  const cadre = useRef<HTMLDivElement | null>(null);
  const ancresGauche = useRef(new Map<string, HTMLElement>());
  const ancresDroite = useRef(new Map<string, HTMLElement>());
  const [traits, setTraits] = useState<
    { id: string; x1: number; y1: number; x2: number; y2: number }[]
  >([]);

  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  useEffect(
    () => () => {
      if (minuterieRef.current) clearTimeout(minuterieRef.current);
    },
    [],
  );

  /*
    Les traits se recalculent après chaque lien et à chaque redimensionnement :
    ce sont des coordonnées d'écran, et une rotation de téléphone les
    invaliderait toutes.
  */
  useEffect(() => {
    const calculer = () => {
      const boite = cadre.current?.getBoundingClientRect();
      if (!boite) return;
      setTraits(
        relies.flatMap((id) => {
          const g = ancresGauche.current.get(id)?.getBoundingClientRect();
          const d = ancresDroite.current.get(id)?.getBoundingClientRect();
          if (!g || !d) return [];
          return [
            {
              id,
              x1: g.right - boite.left,
              y1: g.top + g.height / 2 - boite.top,
              x2: d.left - boite.left,
              y2: d.top + d.height / 2 - boite.top,
            },
          ];
        }),
      );
    };
    calculer();
    window.addEventListener('resize', calculer);
    return () => window.removeEventListener('resize', calculer);
  }, [relies, manche]);

  if (status === 'chargement' || !ageRange) return null;

  const lancer = () => {
    let tirage = construireManche(cards, cartesVues, liberes, ageRange, locale);
    // Deux colonnes dans le même ordre se relieraient de voisin en voisin.
    for (let i = 0; i < 6 && !estBrouille(tirage); i += 1) {
      tirage = construireManche(cards, cartesVues, liberes, ageRange, locale);
    }
    setManche(tirage);
    setRelies([]);
    setChoisi(null);
    setRate(null);
  };

  const toucherDecouverte = (lien: Lien) => {
    if (!choisi || relies.includes(lien.savantId)) return;
    if (choisi === lien.savantId) {
      const complet = relies.length + 1 === (manche?.savants.length ?? 0);
      if (complet) jouerSonRecompense();
      else jouerSonPaire();
      setRelies((liste) => [...liste, lien.savantId]);
      setChoisi(null);
      // Le lien juste se raconte : c'est le seul moment où l'enfant a la réponse
      // sous les yeux et l'attention disponible pour l'entendre.
      presenter(lien.savantId, lien.carteId);
      return;
    }
    // Mauvais lien : un trait rouge fugace, et rien de plus.
    jouerSonRate();
    setRate(lien.savantId);
    if (minuterieRef.current) clearTimeout(minuterieRef.current);
    minuterieRef.current = setTimeout(() => {
      setRate(null);
      setChoisi(null);
    }, 700);
  };

  const rang = rangDepuisEtoiles(etoiles).rang.index;

  if (manche === null) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🔗
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('liens.titre')}</h1>
        <p className="max-w-md text-craie-douce">{t('liens.regle')}</p>
        <button
          type="button"
          onClick={lancer}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('liens.demarrer')}
        </button>
      </main>
    );
  }

  const gagne = relies.length === manche.savants.length;

  if (gagne) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <Lumi rang={rang} taille={120} etat="fete" />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{t('liens.gagne')}</h1>
        {/* Ce qu'on vient de relier, récapitulé : c'est là que le jeu enseigne. */}
        <ul className="flex w-full flex-col gap-2">
          {manche.savants.map((lien) => (
            <li
              key={lien.savantId}
              className="flex items-center gap-3 rounded-2xl border-2 border-encre-bord bg-encre-clair p-3 text-left"
            >
              <Image
                src={lien.portrait}
                alt=""
                width={96}
                height={96}
                className="h-11 w-11 shrink-0 rounded-full object-cover"
              />
              <span className="flex flex-1 flex-col">
                <span className="font-display text-base text-soleil">{lien.nom}</span>
                <span className="text-sm text-craie-douce">{lien.decouverte}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={lancer}
            className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-8 font-display text-base text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('liens.rejouer')}
          </button>
          <button
            type="button"
            onClick={() => router.push('/joue')}
            className="min-h-14 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            {t('liens.retour')}
          </button>
        </div>
      </main>
    );
  }

  const etiquette =
    'flex min-h-16 w-full items-center rounded-2xl border-2 p-2 text-left transition-colors';

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-5 px-4 py-8">
      <header className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-display text-2xl font-semibold sm:text-3xl">{t('liens.titre')}</h1>
        <p className="text-sm text-craie-douce">
          {t('liens.avancement')(relies.length, manche.savants.length)}
        </p>
      </header>

      {/*
        Une grille à deux colonnes, et non deux listes côte à côte : les
        étiquettes de droite tiennent sur une ou deux lignes selon leur longueur,
        si bien que les deux empilements se décalaient dès la première
        découverte un peu longue — et les traits partaient de travers. Les
        lignes de la grille imposent la même hauteur des deux côtés.
      */}
      <div
        ref={cadre}
        className="relative grid grid-cols-2 items-stretch gap-x-3 gap-y-3"
      >
        {/* Les traits, tracés par-dessus les deux colonnes. */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full">
          {traits.map((trait) => (
            <line
              key={trait.id}
              x1={trait.x1}
              y1={trait.y1}
              x2={trait.x2}
              y2={trait.y2}
              stroke="var(--color-soleil)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>

        {/*
          Les deux colonnes s'entrelacent : portrait, découverte, portrait,
          découverte. La grille impose alors la même hauteur aux deux cases d'une
          même ligne, alors que deux listes indépendantes se décalaient dès
          qu'une étiquette passait sur deux lignes — et les traits partaient de
          travers.
        */}
        {manche.savants.map((gauche, rang) => {
          const droite = manche.decouvertes[rang];
          const faitG = relies.includes(gauche.savantId);
          const actif = choisi === gauche.savantId;
          const faitD = relies.includes(droite.savantId);
          const rouge = rate === droite.savantId;
          return (
            <Fragment key={gauche.savantId}>
              <button
                type="button"
                onClick={() => {
                  if (faitG) return;
                  setChoisi(gauche.savantId);
                  // Le nom se prononce : un non-lecteur ne peut pas jouer sans
                  // entendre qui il vient de choisir.
                  direNom(gauche.savantId);
                }}
                disabled={faitG}
                aria-pressed={actif}
                ref={(el) => {
                  if (el) ancresGauche.current.set(gauche.savantId, el);
                  else ancresGauche.current.delete(gauche.savantId);
                }}
                className={`${etiquette} gap-2 ${
                  faitG
                    ? 'border-soleil/60 bg-soleil/10 opacity-70'
                    : actif
                      ? 'border-soleil bg-soleil/15'
                      : 'border-encre-bord bg-encre-clair hover:border-soleil'
                }`}
              >
                <Image
                  src={gauche.portrait}
                  alt=""
                  width={96}
                  height={96}
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                />
                <span className="text-xs leading-tight text-craie">{gauche.nom}</span>
              </button>

              <button
                type="button"
                onClick={() => toucherDecouverte(droite)}
                disabled={faitD}
                ref={(el) => {
                  if (el) ancresDroite.current.set(droite.savantId, el);
                  else ancresDroite.current.delete(droite.savantId);
                }}
                className={`${etiquette} ${
                  faitD
                    ? 'border-soleil/60 bg-soleil/10 opacity-70'
                    : rouge
                      ? 'border-[#fb7185] bg-[#fb7185]/10'
                      : 'border-encre-bord bg-encre-clair hover:border-soleil'
                }`}
              >
                <span className="px-1 text-xs leading-snug text-craie">{droite.decouverte}</span>
              </button>
            </Fragment>
          );
        })}
      </div>

      <p aria-live="polite" className="text-center text-sm text-craie-douce">
        {choisi ? t('liens.maintenant') : t('liens.commence')}
      </p>
    </main>
  );
}
