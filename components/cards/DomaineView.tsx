'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { useAgeRange } from '@/components/age/useAgeRange';
import { estPremium } from '@/content/acces';
import { premiumActif } from '@/lib/premium/flag';
import { useEntitlement } from '@/components/premium/useEntitlement';
import { Paywall } from '@/components/premium/Paywall';
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
  const { premium } = useEntitlement();
  const [paywallOuvert, setPaywallOuvert] = useState(false);
  const [carteOuverte, setCarteOuverte] = useState<ScienceCard | null>(null);

  // Le drapeau d'abord : freemium éteint ⇒ rien n'est jamais verrouillé.
  const estVerrouillee = (card: ScienceCard) =>
    premiumActif() && estPremium(card) && !premium;

  function ouvrirCarte(card: ScienceCard) {
    if (estVerrouillee(card)) setPaywallOuvert(true);
    else setCarteOuverte(card);
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
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <h1 className="flex items-center gap-3 font-display text-3xl font-semibold sm:text-4xl">
          <span aria-hidden="true">{domain.icon}</span> {domain.labels.fr}
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
          onClose={() => setCarteOuverte(null)}
        />
      )}

      {paywallOuvert && <Paywall onClose={() => setPaywallOuvert(false)} />}
    </main>
  );
}
