'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, QuizQuestion, ScienceCard } from '@/lib/types';
import { questionsDe } from '@/content/quiz';
import { domainStyles } from '@/lib/domain-styles';
import { QuestionUnique } from '@/components/parcours/QuestionUnique';
import { InvitationQuestion } from './InvitationQuestion';
import { useCartesMaitrisees } from './useCartesMaitrisees';
import { useAgeRange } from '@/components/age/useAgeRange';
import { estPremium } from '@/content/acces';
import { premiumActif } from '@/lib/premium/flag';
import { useEntitlement } from '@/components/premium/useEntitlement';
import { Paywall } from '@/components/premium/Paywall';
import { useLocale } from '@/components/i18n/useLocale';
import { useT } from '@/components/i18n/useT';
import { localise } from '@/lib/i18n/localise';
import { CardGrid } from './CardGrid';
import { CardModal } from './CardModal';
import { useCartesVues } from './useCartesVues';

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
  const t = useT();
  const [paywallOuvert, setPaywallOuvert] = useState(false);
  const [carteOuverte, setCarteOuverte] = useState<ScienceCard | null>(null);
  /* La carte qu'on vient d'écouter, et sa question — proposée, jamais imposée. */
  const [invitation, setInvitation] = useState<{
    carte: ScienceCard;
    question: QuizQuestion;
  } | null>(null);
  const [question, setQuestion] = useState<{
    carte: ScienceCard;
    question: QuizQuestion;
  } | null>(null);

  // Le drapeau d'abord : freemium éteint ⇒ rien n'est jamais verrouillé.
  const estVerrouillee = (card: ScienceCard) =>
    premiumActif() && estPremium(card) && !premium;

  function ouvrirCarte(card: ScienceCard) {
    // Le bandeau se range : il se retrouverait derrière la carte, et
    // reviendrait à la fermeture en parlant d'une carte qu'on a quittée.
    setInvitation(null);
    if (estVerrouillee(card)) setPaywallOuvert(true);
    else setCarteOuverte(card);
  }

  /**
   * Ce qui suit la fermeture d'une carte : une invitation à sa question.
   *
   * Une invitation, et pas la question elle-même : l'exploration libre doit
   * rester libre. Un enfant qui veut enchaîner dix cartes sans jamais répondre
   * doit pouvoir le faire — il gagne déjà une étoile par carte écoutée, et Lumi
   * grandit. La question, elle, ouvre l'autre monnaie : la clé qui délivre un
   * savant. On la propose en nommant celui qui attend, parce qu'« une clé » ne
   * veut rien dire tant qu'on ignore quelle porte elle ouvre.
   *
   * Une carte déjà comprise n'invite plus : sa clé est gagnée, la reposer ne
   * serait qu'un péage sur le plaisir de réécouter.
   */
  function apresLaCarte(card: ScienceCard) {
    setCarteOuverte(null);
    if (!ageRange || cartesMaitrisees.has(card.id)) return;
    const qs = questionsDe(card.id, ageRange, locale);
    if (qs.length === 0) return;
    setInvitation({ carte: card, question: qs[Math.floor(Math.random() * qs.length)] });
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

  if (question) {
    /*
      La question rend son propre `<main>` : deux `<main>` imbriqués ne sont pas
      du HTML valide, et la question se retrouverait sous la grille, hors de
      l'écran.
    */
    return (
      <QuestionUnique
        key={question.carte.id}
        card={question.carte}
        question={question.question}
        age={ageRange}
        onTermine={() => setQuestion(null)}
        onQuitter={() => setQuestion(null)}
      />
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <h1 className="flex items-center gap-3 font-display text-3xl font-semibold sm:text-4xl">
          <span aria-hidden="true">{domain.icon}</span>{' '}
          {localise(domain.labels, locale)}
        </h1>

        {/*
          Où l'on en est dans ce monde.

          Il n'y avait rien : l'anneau de la grille des mondes disparaissait au
          moment précis où l'on entrait, et la seule trace de progression
          devenait les coches semées dans la grille — qu'il faut compter soi-même
          pour savoir s'il reste beaucoup. La barre reprend la teinte du domaine,
          comme l'anneau dont elle prend le relais.
        */}
        <div className="flex w-full max-w-xs items-center gap-3">
          <span
            aria-hidden="true"
            className="h-2.5 flex-1 overflow-hidden rounded-full bg-encre-clair"
          >
            <span
              className="block h-full rounded-full transition-[width] duration-500"
              style={{
                width: `${cards.length > 0 ? (vuesIci / cards.length) * 100 : 0}%`,
                backgroundColor: domainStyles[domain.id].teinte,
              }}
            />
          </span>
          <span
            aria-hidden="true"
            className="font-display text-base tabular-nums"
            style={{ color: domainStyles[domain.id].teinte }}
          >
            {vuesIci}/{cards.length}
          </span>
          <span className="sr-only">
            {t('monde.progression')(localise(domain.labels, locale), vuesIci, cards.length)}
          </span>
        </div>
      </header>

      <CardGrid
        cards={cards}
        ageRange={ageRange}
        cartesVues={cartesVues}
        cartesEteintes={cartesEteintes}
        estVerrouillee={estVerrouillee}
        onSelectCard={ouvrirCarte}
      />

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

      {/* L'invitation : deux boutons, dont un qui refuse sans rien coûter. */}
      {invitation && (
        <InvitationQuestion
          key={invitation.carte.id}
          carte={invitation.carte}
          onAccepter={() => {
            setQuestion(invitation);
            setInvitation(null);
          }}
          onFermer={() => setInvitation(null)}
        />
      )}

      {paywallOuvert && <Paywall onClose={() => setPaywallOuvert(false)} />}
    </main>
  );
}
