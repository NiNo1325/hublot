'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, QuizQuestion, ScienceCard } from '@/lib/types';
import { questionsDe } from '@/content/quiz';
import { QuestionUnique } from '@/components/parcours/QuestionUnique';
import { savantDeLaCarte } from '@/lib/cles';
import { useCartesMaitrisees } from './useCartesMaitrisees';
import { useT } from '@/components/i18n/useT';
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
  const t = useT();
  const { premium } = useEntitlement();
  const { locale } = useLocale();
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
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-end justify-center bg-encre/90 p-4 sm:items-center"
        >
          <div className="flex w-full max-w-sm flex-col gap-4 rounded-3xl border-2 border-soleil bg-encre-clair p-6 text-center">
            <p className="font-display text-xl text-soleil">{t('invitation.titre')}</p>
            <p className="text-craie-douce">
              {t('invitation.texte')(savantDeLaCarte(invitation.carte.id)?.nom ?? '')}
            </p>
            <button
              type="button"
              onClick={() => {
                setQuestion(invitation);
                setInvitation(null);
              }}
              className="min-h-14 cursor-pointer rounded-full border-2 border-soleil bg-soleil/10 px-6 font-display text-lg text-soleil transition-transform hover:scale-105 active:scale-95"
            >
              {t('invitation.oui')}
            </button>
            <button
              type="button"
              onClick={() => setInvitation(null)}
              className="min-h-12 cursor-pointer rounded-full px-6 text-sm text-craie-douce transition-colors hover:text-craie"
            >
              {t('invitation.non')}
            </button>
          </div>
        </div>
      )}

      {paywallOuvert && <Paywall onClose={() => setPaywallOuvert(false)} />}
    </main>
  );
}
