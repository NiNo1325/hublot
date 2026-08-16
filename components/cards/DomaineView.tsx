'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, QuizQuestion, ScienceCard } from '@/lib/types';
import { questionsDe } from '@/content/quiz';
import { QuestionUnique } from '@/components/parcours/QuestionUnique';
import { Constellation } from '@/components/ciel/Constellation';
import { useAgeRange } from '@/components/age/useAgeRange';
import { estPremium } from '@/content/acces';
import { premiumActif } from '@/lib/premium/flag';
import { useEntitlement } from '@/components/premium/useEntitlement';
import { Paywall } from '@/components/premium/Paywall';
import { useLocale } from '@/components/i18n/useLocale';
import { localise } from '@/lib/i18n/localise';
import { CardGrid } from './CardGrid';
import { CardModal } from './CardModal';
import { useCartesVues } from './useCartesVues';
import { useCartesMaitrisees } from './useCartesMaitrisees';

interface DomaineViewProps {
  domain: DomainDefinition;
  cards: ScienceCard[];
}

/** Alloué une fois : passer un Set neuf à chaque rendu ferait diffuser CardGrid. */
const AUCUNE = new Set<string>();

export function DomaineView({ domain, cards }: DomaineViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const { premium } = useEntitlement();
  const { locale } = useLocale();
  const [paywallOuvert, setPaywallOuvert] = useState(false);
  const [carteOuverte, setCarteOuverte] = useState<ScienceCard | null>(null);
  const [question, setQuestion] = useState<{ carte: ScienceCard; question: QuizQuestion } | null>(
    null,
  );

  // Le drapeau d'abord : freemium éteint ⇒ rien n'est jamais verrouillé.
  const estVerrouillee = (card: ScienceCard) =>
    premiumActif() && estPremium(card) && !premium;

  function ouvrirCarte(card: ScienceCard) {
    if (estVerrouillee(card)) setPaywallOuvert(true);
    else setCarteOuverte(card);
  }

  /**
   * Ce qui suit la fermeture d'une carte : sa question.
   *
   * C'est ici que se referme la boucle de l'application — écouter, répondre,
   * gagner l'étoile de la carte. Elle était ouverte : l'exploration libre ne
   * rapportait rien, si bien qu'un enfant pouvait écouter les cent cinquante
   * cartes sans que Lumi bouge d'un cheveu.
   *
   * Une carte déjà réussie ne repose pas sa question, délibérément : elle ne
   * rapporte plus d'étoile, donc la reposer ne serait qu'un péage sur le
   * plaisir de réécouter. Pour rejouer les questions, il y a l'onglet Joue.
   */
  function apresLaCarte(card: ScienceCard) {
    setCarteOuverte(null);
    if (!ageRange || cartesMaitrisees.has(card.id)) return;
    const qs = questionsDe(card.id, ageRange, locale);
    if (qs.length === 0) return;
    setQuestion({ carte: card, question: qs[Math.floor(Math.random() * qs.length)] });
  }

  // Accès direct sans âge choisi : retour à l'accueil.
  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  if (status === 'chargement' || !ageRange) return null;

  /*
    Extinction bornée au domaine : une carte vue s'éteint, mais quand tout le
    domaine est exploré, tout se rallume — la même règle que la grille globale
    d'avant, appliquée à un seul monde.
  */
  const vuesIci = cards.reduce((n, c) => (cartesVues.has(c.id) ? n + 1 : n), 0);
  const cartesEteintes = vuesIci >= cards.length ? AUCUNE : cartesVues;

  return (
    <>
      {/*
        La question prend la place du monde, comme dans le parcours : elle rend
        son propre `<main>`, et deux `<main>` imbriqués ne sont pas du HTML
        valide — la question s'était d'ailleurs retrouvée sous la grille, hors
        de l'écran, où personne ne l'aurait vue.
      */}
      {!question && (
        <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
          <header className="flex flex-col items-center gap-4">
            {/*
              La constellation du monde, en grand. C'est le second niveau du
              ciel : de l'accueil on voit quinze figures minuscules, ici les dix
              étoiles de celle-ci, et lesquelles restent éteintes.
            */}
            <div className="h-44 w-44 sm:h-52 sm:w-52">
              <Constellation
                domainId={domain.id}
                cards={cards}
                cartesVues={cartesVues}
                cartesMaitrisees={cartesMaitrisees}
                grande
              />
            </div>
            <h1 className="flex items-center gap-3 font-display text-3xl font-semibold sm:text-4xl">
              <span aria-hidden="true">{domain.icon}</span>{' '}
              {localise(domain.labels, locale)}
            </h1>
          </header>

          <CardGrid
            cards={cards}
            ageRange={ageRange}
            cartesVues={cartesVues}
            cartesEteintes={cartesEteintes}
            estVerrouillee={estVerrouillee}
            onSelectCard={ouvrirCarte}
          />
        </main>
      )}

      {carteOuverte && (
        <CardModal
          // La clé force un remontage complet entre deux cartes : l'état de
          // narration repart de zéro, sans fuite d'un beat sur la suivante.
          key={carteOuverte.id}
          card={carteOuverte}
          ageRange={ageRange}
          onClose={() => apresLaCarte(carteOuverte)}
        />
      )}

      {question && (
        <QuestionUnique
          key={question.carte.id}
          card={question.carte}
          question={question.question}
          age={ageRange}
          onTermine={() => setQuestion(null)}
          onQuitter={() => setQuestion(null)}
        />
      )}

      {paywallOuvert && <Paywall onClose={() => setPaywallOuvert(false)} />}
    </>
  );
}
