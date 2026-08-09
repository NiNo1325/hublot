'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { AgeRange, QuizQuestion, ScienceCard } from '@/lib/types';
import { domainStyles } from '@/lib/domain-styles';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { ordreLecture } from '@/content/quiz/ordre';
import { useQuizAudio } from '@/components/quiz/useQuizAudio';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCartesMaitrisees } from '@/components/cards/useCartesMaitrisees';
import { useCelebration } from '@/components/celebration/CelebrationProvider';

/** Mélange sans modifier la source. */
function melanger<T>(liste: T[]): T[] {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie;
}

interface QuestionUniqueProps {
  card: ScienceCard;
  question: QuizQuestion;
  age: AgeRange;
  onTermine: () => void;
}

/**
 * Une seule question, en plein écran, pour l'étape « tester » du parcours guidé.
 * Reprend le rendu du quizz sans la logique de série. Une bonne réponse crédite
 * une étoile et marque la carte maîtrisée, pour que rang et badges progressent
 * aussi en mode guidé. Non-punitif : on avance après l'explication, juste ou non.
 */
export function QuestionUnique({ card, question, age, onTermine }: QuestionUniqueProps) {
  const { jouer, jouerProposition, jouerVerdict, arreter, enLecture } = useQuizAudio(age);
  const { etoiles, gagnerEtoiles } = useEtoiles();
  const { marquerMaitrisee } = useCartesMaitrisees();
  const celebrer = useCelebration();
  const [choisie, setChoisie] = useState<number | null>(null);
  const style = domainStyles[card.domainId];

  // Même règle d'ordre que le quizz : l'affichage 3-5 suit la voix figée.
  const propositions = useMemo(
    () => (age === '3-5' ? ordreLecture(question) : melanger(question.reponses)),
    [question, age],
  );

  // 3-5 : lecture automatique de l'énoncé — sans elle, le mode est fermé aux
  // non-lecteurs.
  const enonceRef = useRef(false);
  useEffect(() => {
    if (age !== '3-5' || enonceRef.current) return;
    enonceRef.current = true;
    jouer(card.id, question.id, 'question');
  }, [age, card.id, question.id, jouer]);

  const repondu = choisie !== null;
  const justeChoisie = repondu && propositions[choisie]?.correcte === true;

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-encre">
      <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-5 py-8">
        <p className="text-sm text-craie-douce">Une question sur cette carte</p>

        <div
          className="flex items-start gap-4 rounded-3xl border-2 p-5"
          style={{ borderColor: style.teinte, boxShadow: `0 0 30px ${style.halo}` }}
        >
          <p className="flex-1 font-display text-xl leading-snug sm:text-2xl">
            {question.question}
          </p>
          <button
            type="button"
            onClick={() =>
              enLecture ? arreter() : jouer(card.id, question.id, 'question')
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
                      marquerMaitrisee(card.id);
                      const avant = rangDepuisEtoiles(etoiles).rang;
                      const apres = rangDepuisEtoiles(etoiles + 1).rang;
                      gagnerEtoiles(1);
                      if (apres.index > avant.index) {
                        celebrer({
                          rang: apres.index,
                          titre: 'Nouveau rang !',
                          sousTitre: `${apres.icone} ${apres.nom}`,
                        });
                      }
                    }
                    jouerVerdict(
                      card.id,
                      question.id,
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
                  <span className={age === '3-5' ? 'text-base text-craie' : 'text-lg text-craie'}>
                    {reponse.texte}
                  </span>
                </button>

                {age === '6-8' && (
                  <button
                    type="button"
                    onClick={() =>
                      jouerProposition(
                        card.id,
                        question.id,
                        question.reponses.indexOf(reponse),
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
            <p className="text-base leading-relaxed text-craie-douce">
              {question.explication}
            </p>
            <button
              type="button"
              onClick={() => {
                arreter();
                onTermine();
              }}
              className="min-h-16 cursor-pointer self-start rounded-full border-2 border-soleil bg-soleil/10 px-10 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              Continuer&nbsp;→
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
