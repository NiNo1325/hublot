'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { AgeRange, QuizQuestion, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { useAgeRange } from '@/components/age/useAgeRange';
import { useCartesVues } from '@/components/cards/useCartesVues';
import { useQuizAudio } from './useQuizAudio';
import { questionsDe, cartesAvecQuiz } from '@/content/quiz';

interface QuizViewProps {
  cards: ScienceCard[];
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

function construireSerie(
  cards: ScienceCard[],
  vues: Set<string>,
  age: AgeRange,
): Tirage[] {
  const disponibles = cards.filter(
    (c) => vues.has(c.id) && cartesAvecQuiz.has(c.id) && questionsDe(c.id, age).length > 0,
  );
  return melanger(disponibles)
    .slice(0, 8)
    .map((carte) => ({
      carte,
      question: melanger(questionsDe(carte.id, age))[0],
    }));
}

export function QuizView({ cards }: QuizViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();

  const { jouer, arreter, enLecture } = useQuizAudio(ageRange ?? '6-8');
  const [serie, setSerie] = useState<Tirage[] | null>(null);
  const [index, setIndex] = useState(0);
  const [choisie, setChoisie] = useState<number | null>(null);
  const [reussies, setReussies] = useState(0);

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

  /* Propositions mélangées une fois par question, jamais à chaque rendu. */
  const propositions = useMemo(() => {
    const tirage = serie?.[index];
    return tirage ? melanger(tirage.question.reponses) : [];
  }, [serie, index]);

  if (status === 'chargement' || !ageRange) return null;

  const eligibles = cards.filter(
    (c) => cartesVues.has(c.id) && cartesAvecQuiz.has(c.id),
  );

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
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          🎯
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Prêt pour le quizz&nbsp;?
        </h1>
        <p className="text-craie-douce">
          {eligibles.length} carte{eligibles.length > 1 ? 's' : ''} dans ta
          collection. On en tire quelques questions.
        </p>
        <button
          type="button"
          onClick={() => {
            setSerie(construireSerie(cards, cartesVues, ageRange));
            setIndex(0);
            setChoisie(null);
            setReussies(0);
          }}
          className="min-h-16 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-xl text-soleil transition-transform hover:scale-105 active:scale-95"
        >
          C&apos;est parti
        </button>
      </main>
    );
  }

  // Fin de série.
  if (index >= serie.length) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-8 px-6 py-12 text-center">
        <span className="text-7xl" aria-hidden="true">
          {reussies === serie.length ? '🌟' : '👏'}
        </span>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {reussies} bonne{reussies > 1 ? 's' : ''} réponse
          {reussies > 1 ? 's' : ''} sur {serie.length}
        </h1>
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
            <li key={reponse.texte}>
              <button
                type="button"
                disabled={repondu}
                onClick={() => {
                  setChoisie(i);
                  if (reponse.correcte) setReussies((n) => n + 1);
                  jouer(tirage.carte.id, tirage.question.id, 'explication');
                }}
                className="flex min-h-20 w-full cursor-pointer items-center gap-4 rounded-2xl border-2 p-4 text-left transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-default disabled:hover:scale-100"
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
          <p className="text-base leading-relaxed text-craie-douce">
            {tirage.question.explication}
          </p>
          <button
            type="button"
            onClick={() => {
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
