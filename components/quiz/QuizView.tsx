'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AgeRange, DomainDefinition, DomainId, QuizQuestion, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useQuizAudio } from './useQuizAudio';
import { useEtoiles } from './useEtoiles';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { Lumi } from '@/components/mascotte/Lumi';
import { rangDepuisEtoiles, type Rang } from '@/lib/etoiles';
import { questionsDe, cartesAvecQuiz } from '@/content/quiz';
import { ordreLecture } from '@/content/quiz/ordre';

interface QuizViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

interface Tirage {
  carte: ScienceCard;
  question: QuizQuestion;
}

/** Mélange sans modifier la source. */
function melanger<T>(liste: T[]): T[] {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

function estEligible(carte: ScienceCard, vues: Set<string>, age: AgeRange): boolean {
  return vues.has(carte.id) && cartesAvecQuiz.has(carte.id) && questionsDe(carte.id, age).length > 0;
}

function construireSerie(
  cards: ScienceCard[],
  vues: Set<string>,
  age: AgeRange,
  domainId: DomainId | null,
): Tirage[] {
  const disponibles = cards.filter(
    (c) => estEligible(c, vues, age) && (domainId === null || c.domainId === domainId),
  );
  return melanger(disponibles)
    .slice(0, 8)
    .map((carte) => ({
      carte,
      question: melanger(questionsDe(carte.id, age))[0],
    }));
}

export function QuizView({ cards, domains }: QuizViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();

  const { jouer, jouerProposition, jouerVerdict, arreter, enLecture } =
    useQuizAudio(ageRange ?? '6-8');
  const [serie, setSerie] = useState<Tirage[] | null>(null);
  const [index, setIndex] = useState(0);
  const [choisie, setChoisie] = useState<number | null>(null);
  const [reussies, setReussies] = useState(0);
  const { etoiles, gagnerEtoiles } = useEtoiles();
  const { marquerMaitrisee } = useCartesMaitrisees();
  // Bonnes réponses consécutives, pour un encouragement positif (jamais négatif).
  const [dAffilee, setDAffilee] = useState(0);
  // Rang avant le crédit de fin de série, pour détecter un passage de rang.
  const [rangAvant, setRangAvant] = useState<Rang | null>(null);

  const tirageCourant = serie?.[index] ?? null;

  /*
    Les non-lecteurs ont besoin d'entendre l'énoncé et ses propositions pour
    pouvoir choisir : la lecture démarre seule pour eux. Les plus grands lisent
    déjà le texte et disposent d'un bouton.
  */
  const questionEnonceeRef = useRef<string | null>(null);
  useEffect(() => {
    if (!tirageCourant || ageRange !== '3-5') return;
    const repere = `${tirageCourant.carte.id}/${tirageCourant.question.id}`;
    if (questionEnonceeRef.current === repere) return;
    questionEnonceeRef.current = repere;
    jouer(tirageCourant.carte.id, tirageCourant.question.id, 'question');
  }, [tirageCourant, ageRange, jouer]);

  /*
    Ordre des propositions. Pour les 3-5 ans, l'énoncé est un mp3 figé qui les
    lit dans l'ordre de `ordreLecture` : un tirage aléatoire ici ferait
    annoncer une proposition quand l'écran en montre une autre — une fois sur
    deux, puisqu'ils n'en ont que deux. L'affichage suit donc la voix.

    Aux autres âges, l'audio n'énonce pas les propositions : le mélange reste
    utile, il empêche de retenir une position d'une partie à l'autre.
  */
  const propositions = useMemo(() => {
    const tirage = serie?.[index];
    if (!tirage) return [];
    return ageRange === '3-5'
      ? ordreLecture(tirage.question)
      : melanger(tirage.question.reponses);
  }, [serie, index, ageRange]);

  if (status === 'chargement' || !ageRange) return null;

  const eligibles = cards.filter((c) => estEligible(c, cartesVues, ageRange));

  // Mondes réellement jouables : au moins une carte écoutée qui a une question à
  // cet âge. On ne propose jamais un monde qui donnerait un quizz vide.
  const mondesJouables = domains
    .map((domain) => ({
      domain,
      n: eligibles.reduce((t, c) => (c.domainId === domain.id ? t + 1 : t), 0),
    }))
    .filter((m) => m.n > 0);

  const lancer = (domainId: DomainId | null) => {
    setSerie(construireSerie(cards, cartesVues, ageRange, domainId));
    setIndex(0);
    setChoisie(null);
    setReussies(0);
    setDAffilee(0);
    setRangAvant(null);
  };

  /*
    Aucune carte écoutée parmi celles qui ont des questions : plutôt qu'un
    quizz vide, on renvoie explorer. C'est le seul écran possible et il doit
    donner envie, pas ressembler à une erreur.
  */
  if (eligibles.length === 0) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🎯
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Écoute d&apos;abord quelques cartes
        </h1>
        <p className="max-w-md text-craie-douce">
          Le quizz ne pose des questions que sur les cartes que tu as déjà
          écoutées. Va en découvrir une ou deux, puis reviens jouer.
        </p>
        <button
          type="button"
          onClick={() => router.push('/decouvrir')}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          Découvrir des cartes
        </button>
      </main>
    );
  }

  if (!serie) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 px-6 py-12">
        <header className="flex flex-col items-center gap-3 text-center">
          <span className="text-6xl" aria-hidden="true">
            🎯
          </span>
          <h1 className="font-display text-3xl font-semibold sm:text-4xl">
            Sur quoi joue-t-on&nbsp;?
          </h1>
          <p className="text-craie-douce">
            Choisis un monde, ou joue sur tout à la fois.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Le quizz général en tête, mis en avant : c'est le choix par défaut. */}
          <button
            type="button"
            onClick={() => lancer(null)}
            className="flex min-h-16 cursor-pointer items-center gap-4 rounded-2xl border-2 border-soleil bg-soleil/10 px-5 font-display text-lg text-soleil transition-transform hover:scale-[1.02] active:scale-95 sm:col-span-2"
          >
            <span className="text-3xl" aria-hidden="true">🌍</span>
            <span className="flex flex-col text-left">
              <span>Tout</span>
              <span className="text-sm font-normal text-craie-douce">
                {eligibles.length} carte{eligibles.length > 1 ? 's' : ''} au total
              </span>
            </span>
          </button>

          {mondesJouables.map(({ domain, n }) => {
            const style = domainStyles[domain.id];
            return (
              <button
                key={domain.id}
                type="button"
                onClick={() => lancer(domain.id)}
                className="flex min-h-16 cursor-pointer items-center gap-3 rounded-2xl border-2 border-encre-bord bg-encre-clair px-4 text-left transition-transform hover:scale-[1.02] active:scale-95"
                style={{ boxShadow: `0 0 18px ${style.halo}` }}
              >
                <span className="text-3xl" aria-hidden="true">{domain.icon}</span>
                <span className="flex flex-col">
                  <span className="font-display text-lg text-craie">{domain.labels.fr}</span>
                  <span className="text-sm text-craie-douce">
                    {n} carte{n > 1 ? 's' : ''}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </main>
    );
  }

  // Fin de série.
  if (index >= serie.length) {
    const rangApres = rangDepuisEtoiles(etoiles);
    const monteEnRang = rangAvant != null && rangApres.rang.index > rangAvant.index;
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        {/* Lumi félicite l'enfant, dans l'apparence du rang qu'il vient d'atteindre. */}
        <Lumi rang={rangApres.rang.index} taille={120} />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {reussies} bonne{reussies > 1 ? 's' : ''} réponse
          {reussies > 1 ? 's' : ''} sur {serie.length}
        </h1>

        {/* Étoiles gagnées et total, jamais de sanction. */}
        <div className="flex flex-col items-center gap-2">
          <p className="font-display text-2xl text-soleil">
            +{reussies} <span aria-hidden="true">⭐</span>
          </p>
          <p className="text-craie-douce">
            <span aria-hidden="true">⭐</span> {etoiles} au total —{' '}
            <span aria-hidden="true">{rangApres.rang.icone}</span> {rangApres.rang.nom}
          </p>
        </div>

        {monteEnRang && (
          <p className="font-display text-xl text-soleil">
            Nouveau rang : <span aria-hidden="true">{rangApres.rang.icone}</span>{' '}
            {rangApres.rang.nom}&nbsp;!
          </p>
        )}

        {/* Aucun échec possible : on encourage, on ne sanctionne pas. */}
        <p className="max-w-md text-craie-douce">
          Chaque question t&apos;a rappelé quelque chose. Rejoue quand tu veux,
          les questions changent.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => setSerie(null)}
            className="min-h-16 cursor-pointer rounded-full border-2 border-soleil px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            Rejouer
          </button>
          <button
            type="button"
            onClick={() => router.push('/')}
            className="min-h-16 cursor-pointer rounded-full border-2 border-encre-bord px-8 font-display text-lg text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
          >
            Retour au menu
          </button>
        </div>
      </main>
    );
  }

  const tirage = serie[index];
  const style = domainStyles[tirage.carte.domainId];
  const repondu = choisie !== null;
  const justeChoisie = repondu && propositions[choisie]?.correcte === true;

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-6 px-5 py-8">
      <header className="flex items-center justify-between gap-4">
        <span className="text-sm text-craie-douce">
          Question {index + 1} sur {serie.length}
        </span>
        <button
          type="button"
          onClick={() => router.push('/')}
          className="flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-2 border-encre-bord px-4 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">🏠</span> Menu
        </button>
      </header>

      <div className="flex justify-center gap-1" aria-hidden="true">
        {serie.map((_, i) => (
          <span key={i} className={i < reussies ? 'text-xl' : 'text-xl opacity-25'}>
            ⭐
          </span>
        ))}
      </div>

      <div
        className="flex items-start gap-4 rounded-3xl border-2 p-5"
        style={{ borderColor: style.teinte, boxShadow: `0 0 30px ${style.halo}` }}
      >
        <p className="flex-1 font-display text-xl leading-snug sm:text-2xl">
          {tirage.question.question}
        </p>
        <button
          type="button"
          onClick={() =>
            enLecture
              ? arreter()
              : jouer(tirage.carte.id, tirage.question.id, 'question')
          }
          className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
        >
          <span aria-hidden="true">{enLecture ? '⏸' : '🔊'}</span>
          <span className="sr-only">
            {enLecture ? 'Arrêter la lecture' : 'Écouter la question'}
          </span>
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        {propositions.map((reponse, i) => {
          const estChoisie = choisie === i;
          const revelee = repondu && reponse.correcte;
          return (
            <li key={reponse.texte} className="flex items-stretch gap-2">
              <button
                type="button"
                disabled={repondu}
                onClick={() => {
                  setChoisie(i);
                  if (reponse.correcte) {
                    setReussies((n) => n + 1);
                    setDAffilee((d) => d + 1);
                    marquerMaitrisee(tirage.carte.id);
                  } else {
                    // Remise à zéro silencieuse : aucun message de « série perdue ».
                    setDAffilee(0);
                  }
                  jouerVerdict(
                    tirage.carte.id,
                    tirage.question.id,
                    reponse.correcte ? 'juste' : 'presque',
                  );
                }}
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
                {/* Les non-lecteurs se repèrent à l'icône ; le texte reste pour les autres. */}
                <span
                  className={
                    ageRange === '3-5'
                      ? 'text-base text-craie'
                      : 'text-lg text-craie'
                  }
                >
                  {reponse.texte}
                </span>
              </button>

              {/*
                Écoute de la proposition, en 6-8 : un lecteur débutant peut vouloir
                se faire relire une réponse. Bouton distinct, hors du bouton de
                réponse (un bouton ne peut pas en contenir un autre), et jamais
                désactivé — on peut réécouter même après avoir répondu.
              */}
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
                  aria-label={`Écouter la réponse : ${reponse.texte}`}
                  className="flex w-14 shrink-0 cursor-pointer items-center justify-center rounded-2xl border-2 border-encre-bord text-xl transition-colors hover:border-soleil hover:text-soleil"
                >
                  <span aria-hidden="true">🔊</span>
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {repondu && (
        <div aria-live="polite" className="flex flex-col gap-4">
          <p
            className="font-display text-lg"
            style={{ color: justeChoisie ? '#34d399' : '#ffb627' }}
          >
            {justeChoisie ? 'Bravo, c’est ça !' : 'Pas tout à fait…'}
          </p>
          {justeChoisie && dAffilee >= 3 && (
            <p className="font-display text-base text-soleil">En pleine forme&nbsp;! 🔥</p>
          )}
          <p className="text-base leading-relaxed text-craie-douce">
            {tirage.question.explication}
          </p>
          <button
            type="button"
            onClick={() => {
              arreter();
              // Dernière question : on crédite les étoiles une seule fois, en
              // capturant le rang d'avant pour détecter un passage de rang.
              if (index + 1 >= serie.length) {
                setRangAvant(rangDepuisEtoiles(etoiles).rang);
                gagnerEtoiles(reussies);
              }
              setIndex((n) => n + 1);
              setChoisie(null);
            }}
            className="min-h-16 cursor-pointer self-start rounded-full border-2 border-soleil px-8 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
          >
            {index + 1 >= serie.length ? 'Voir le résultat' : 'Question suivante'}
          </button>
        </div>
      )}
    </main>
  );
}
