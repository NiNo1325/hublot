'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { maitriseesStockees, useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { clesAGagner } from '@/lib/cles';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { Lumi } from '@/components/mascotte/Lumi';
import { construireSerie, melanger, type Tirage } from '@/content/quiz/tirage';
import { useEtoiles } from './useEtoiles';
import { useQuizAudio } from './useQuizAudio';
import { useCompteARebours } from './useCompteARebours';
import { useMeilleursScores } from './useMeilleursScores';

interface DefiChronoProps {
  cards: ScienceCard[];
}

/** Durée d'une partie. Assez pour une quinzaine de questions, pas plus. */
const DUREE_S = 60;

/** Temps d'affichage du verdict coloré avant la question suivante. */
const VERDICT_MS = 450;

/**
 * Le Défi chrono : soixante secondes, un maximum de bonnes réponses.
 *
 * Ce mode ne raconte rien — c'est ce qui le distingue du quizz, qui explique
 * après chaque réponse, juste ou fausse. Ici on révise ce qu'on sait déjà :
 * pas d'explication, pas de verdict parlé, la question suivante arrive dans la
 * demi-seconde. Le contenu reste le même, seul le rythme change.
 *
 * Le temps s'épuise, il ne sanctionne personne : il n'y a pas d'échec par
 * question, et la partie s'arrête sur un score, jamais sur une faute. C'est ce
 * qui permet d'y mettre un chrono sans trahir la règle du quizz, qui
 * n'accable jamais.
 *
 * Réservé aux 6-8 et 9-12 : chez les plus jeunes, l'énoncé se lit à voix haute
 * automatiquement, et un compte à rebours par-dessus serait à la fois stressant
 * et injuste.
 */
export function DefiChrono({ cards }: DefiChronoProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { locale } = useLocale();
  const t = useT();
  const { etoiles } = useEtoiles();
  const { marquerMaitrisee } = useCartesMaitrisees();
  const { scores, enregistrerScore, estUnRecord } = useMeilleursScores();
  const chrono = useCompteARebours(DUREE_S);
  const { jouer, jouerProposition, arreter: arreterVoix, enLecture } = useQuizAudio(
    ageRange ?? '6-8',
  );
  const { arreter: arreterChrono } = chrono;

  const [serie, setSerie] = useState<Tirage[] | null>(null);
  const [index, setIndex] = useState(0);
  const [reussies, setReussies] = useState(0);
  /*
    Cartes comprises pendant la partie : seules celles-là donnent une clé. Le
    chrono se rejoue sans fin ; on y revient pour son record, pas pour vider la
    prison.
  */
  const [nouvelles, setNouvelles] = useState(0);
  const [choisie, setChoisie] = useState<number | null>(null);
  /*
    Le crédit n'est pas un état : il ne s'affiche pas, et le passer par
    `useState` obligerait l'effet à se déclencher une seconde fois pour la
    seule mise à jour du drapeau. Une ref suffit à ne créditer qu'une fois.
  */
  const crediteesRef = useRef(false);

  const tirage = serie?.[index] ?? null;

  /*
    L'ordre des propositions est figé pour la question affichée : le recalculer
    à chaque rendu les ferait danser sous le doigt de l'enfant, et le chrono
    provoque justement des rendus quatre fois par seconde.
  */
  const propositions = useMemo(
    () => (tirage ? melanger(tirage.question.reponses) : []),
    [tirage],
  );

  // Fin de partie : le temps est écoulé, ou les cartes sont épuisées.
  const termine = serie !== null && (chrono.fini || index >= serie.length);

  /*
    L'enregistrement du score se fait dans un effet, et une seule fois : le faire
    pendant le rendu le rejouerait à chaque re-rendu — et le chrono en provoque
    quatre par seconde. Les clés, elles, n'ont rien à créditer : elles se
    déduisent des cartes comprises, marquées au fil des réponses.
  */
  useEffect(() => {
    if (!termine || crediteesRef.current) return;
    crediteesRef.current = true;
    arreterChrono();
    enregistrerScore(reussies);
  }, [termine, reussies, enregistrerScore, arreterChrono]);

  if (status === 'chargement' || !ageRange) return null;

  const lancer = () => {
    // Toutes les cartes éligibles, mélangées : la partie s'arrête au temps, pas
    // à un compte de questions, et une série de dix serait épuisée avant la fin.
    setSerie(construireSerie(cards, cartesVues, ageRange, null, locale, Number.MAX_SAFE_INTEGER));
    setIndex(0);
    setReussies(0);
    setNouvelles(0);
    setChoisie(null);
    crediteesRef.current = false;
    chrono.reinitialiser();
    chrono.demarrer();
  };

  const repondre = (rang: number) => {
    if (choisie !== null || !tirage || !chrono.enMarche) return;
    setChoisie(rang);
    const juste = propositions[rang]?.correcte === true;
    if (juste) {
      setReussies((n) => n + 1);
      if (clesAGagner(tirage.carte.id, maitriseesStockees()) > 0) {
        setNouvelles((n) => n + 1);
      }
      marquerMaitrisee(tirage.carte.id);
    }
    setTimeout(() => {
      setChoisie(null);
      setIndex((n) => n + 1);
    }, VERDICT_MS);
  };

  /* Les 3-5 ans n'ont pas accès à ce mode : on le dit, on ne le cache pas. */
  if (ageRange === '3-5') {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          ⏱️
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('chrono.trop-jeune.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">{t('chrono.trop-jeune.texte')}</p>
        <button
          type="button"
          onClick={() => router.push('/joue')}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          {t('chrono.retour')}
        </button>
      </main>
    );
  }

  // Accueil du mode : le podium, et le bouton pour lancer.
  if (serie === null) {
    const jouables = construireSerie(cards, cartesVues, ageRange, null, locale, 1).length;
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          ⏱️
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t('chrono.titre')}
        </h1>
        <p className="max-w-md text-craie-douce">{t('chrono.texte')(DUREE_S)}</p>

        {scores.length > 0 && (
          <section className="flex w-full max-w-xs flex-col gap-2">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-craie-douce">
              {t('chrono.podium')}
            </h2>
            <ol className="flex flex-col gap-1.5">
              {scores.map((score, rang) => (
                <li
                  key={`${rang}-${score}`}
                  className="flex items-center justify-between rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 py-2"
                >
                  <span aria-hidden="true" className="text-xl">
                    {['🥇', '🥈', '🥉'][rang]}
                  </span>
                  <span className="font-display text-lg text-craie">
                    {t('chrono.score')(score)}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {jouables > 0 ? (
          <button
            type="button"
            onClick={lancer}
            className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('chrono.demarrer')}
          </button>
        ) : (
          <p className="max-w-md text-craie-douce">{t('quizz.vide.texte')}</p>
        )}
      </main>
    );
  }

  // Écran de fin.
  if (termine) {
    const record = estUnRecord(reussies);
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <Lumi rang={rangDepuisEtoiles(etoiles).rang.index} taille={120} etat="fete" />
        <div className="flex flex-col items-center gap-2">
          {record && (
            <p className="font-display text-lg text-soleil">{t('chrono.record')}</p>
          )}
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            {t('chrono.fin')(reussies)}
          </h1>
          {/*
            Le chrono se joue pour son record : le score domine, les clés ne
            s'affichent que s'il y en a eu. Annoncer « +0 » à chaque partie
            ferait passer le mode pour une perte de temps, alors qu'il vaut par
            le podium juste en dessous.
          */}
          {nouvelles > 0 && (
            <p className="font-display text-2xl text-soleil">
              +{nouvelles} <span aria-hidden="true">🔑</span>
            </p>
          )}
        </div>

        <div className="flex w-full max-w-xs flex-col items-center gap-3">
          <button
            type="button"
            onClick={lancer}
            className="min-h-16 w-full cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {t('chrono.rejouer')}
          </button>
          <button
            type="button"
            onClick={() => router.push('/joue')}
            className="min-h-14 w-full cursor-pointer rounded-full border-2 border-encre-bord px-6 font-display text-base text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            {t('chrono.retour')}
          </button>
        </div>
      </main>
    );
  }

  if (!tirage) return null;

  const style = domainStyles[tirage.carte.domainId];
  // Les dix dernières secondes passent à l'orange : le temps se voit sans se lire.
  const urgence = chrono.restant <= 10;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-5 py-8">
      <header className="flex items-center justify-between gap-3">
        <span
          className={`font-display text-2xl tabular-nums ${urgence ? 'text-soleil' : 'text-craie'}`}
          aria-live="off"
        >
          <span aria-hidden="true">⏱️</span> {chrono.restant}
        </span>
        <span className="font-display text-xl text-soleil">
          {reussies} <span aria-hidden="true">🎯</span>
        </span>
      </header>

      {/* La barre dit le temps qui reste sans qu'il faille lire un chiffre. */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-encre-clair" aria-hidden="true">
        <div
          className="h-full rounded-full transition-[width] duration-200 ease-linear"
          style={{
            width: `${(chrono.restant / DUREE_S) * 100}%`,
            backgroundColor: urgence ? '#ffb627' : '#38bdf8',
          }}
        />
      </div>

      <div
        className="flex items-start gap-4 rounded-3xl border-2 p-5"
        style={{ borderColor: style.teinte, boxShadow: `0 0 30px ${style.halo}` }}
      >
        <p className="flex-1 font-display text-xl leading-snug sm:text-2xl">
          {tirage.question.question}
        </p>
        {/*
          Écouter l'énoncé, comme au quizz. Rien ne se lance tout seul ici : le
          chrono tourne, et imposer la voix coûterait à l'enfant un temps qu'il
          n'a pas choisi de dépenser. Le bouton laisse ce choix.
        */}
        <button
          type="button"
          onClick={() =>
            enLecture
              ? arreterVoix()
              : jouer(tirage.carte.id, tirage.question.id, 'question')
          }
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
          <span className="sr-only">
            {enLecture ? t('quizz.arreter') : t('quizz.ecouter-question')}
          </span>
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        {propositions.map((reponse, i) => {
          const estChoisie = choisie === i;
          const revelee = choisie !== null && reponse.correcte;
          return (
            <li key={reponse.texte} className="flex items-stretch gap-2">
              <button
                type="button"
                disabled={choisie !== null}
                onClick={() => repondre(i)}
                className="flex min-h-20 flex-1 cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 text-left transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-default disabled:hover:scale-100"
                style={{
                  borderColor: revelee
                    ? '#34d399'
                    : estChoisie
                      ? '#fb7185'
                      : 'var(--color-encre-bord)',
                  backgroundColor: revelee
                    ? 'rgba(52,211,153,0.12)'
                    : estChoisie
                      ? 'rgba(251,113,133,0.12)'
                      : 'var(--color-encre-clair)',
                }}
              >
                <span className="text-3xl" aria-hidden="true">
                  {reponse.icone}
                </span>
                <span className="flex-1 text-lg text-craie">{reponse.texte}</span>
              </button>

              {/* Comme au quizz : un lecteur débutant peut vouloir se faire
                  relire une proposition. Le bouton vit hors du bouton de
                  réponse, qui ne peut pas en contenir un autre. */}
              {ageRange === '6-8' && (
                <button
                  type="button"
                  onClick={() =>
                    jouerProposition(
                      tirage.carte.id,
                      tirage.question.id,
                      tirage.question.reponses.indexOf(reponse),
                    )
                  }
                  aria-label={t('quizz.ecouter-reponse')(reponse.texte)}
                  className="flex w-14 shrink-0 cursor-pointer items-center justify-center rounded-2xl border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
                >
                  <span aria-hidden="true">🔊</span>
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
