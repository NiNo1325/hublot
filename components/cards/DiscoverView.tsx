'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { DomainDefinition, DomainId, ScienceCard } from '@/lib/types';
import { useAgeRange } from '@/components/age/useAgeRange';
import { DomainFilter } from '@/components/domains/DomainFilter';
import { CardGrid } from './CardGrid';
import { CardModal } from './CardModal';

interface DiscoverViewProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

export function DiscoverView({ cards, domains }: DiscoverViewProps) {
  const router = useRouter();
  const { ageRange, status } = useAgeRange();

  /** `null` = tous les domaines. Évite d'avoir à synchroniser un Set complet. */
  const [selection, setSelection] = useState<Set<DomainId> | null>(null);
  const [carteOuverte, setCarteOuverte] = useState<ScienceCard | null>(null);

  // Accès direct à /decouvrir sans avoir choisi d'âge : on renvoie à l'accueil.
  useEffect(() => {
    if (status === 'pret' && !ageRange) router.replace('/');
  }, [status, ageRange, router]);

  const cartesVisibles = useMemo(
    () => (selection === null ? cards : cards.filter((c) => selection.has(c.domainId))),
    [cards, selection],
  );

  function basculerDomaine(id: DomainId) {
    setSelection((courant) => {
      // Premier clic depuis « Tout » : on isole le domaine choisi, plutôt que
      // de désélectionner un domaine parmi huit — c'est l'intention réelle.
      if (courant === null) return new Set([id]);

      const suivant = new Set(courant);
      if (suivant.has(id)) suivant.delete(id);
      else suivant.add(id);
      // Plus aucun domaine coché : on revient à « Tout », pour ne jamais
      // laisser l'enfant devant une grille vide.
      return suivant.size === 0 ? null : suivant;
    });
  }

  if (status === 'chargement' || !ageRange) return null;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-10">
      <header className="flex flex-col items-center gap-4">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Qu&apos;est-ce qui t&apos;intéresse&nbsp;?
        </h1>
        {/*
          Discret mais toujours accessible : c'est en général un adulte qui
          change le niveau, souvent pour un deuxième enfant. Le libellé rappelle
          le réglage courant, ce qui évite d'ouvrir l'écran pour le vérifier.
        */}
        <button
          type="button"
          onClick={() => router.push('/?changer=1')}
          className="min-h-12 cursor-pointer rounded-full border-2 border-encre-bord px-5 text-sm text-craie-douce transition-colors hover:border-soleil hover:text-soleil"
        >
          Niveau&nbsp;: {ageRange} ans — changer
        </button>
      </header>

      <DomainFilter
        domains={domains}
        selected={selection}
        onToggle={basculerDomaine}
        onSelectAll={() => setSelection(null)}
      />

      <CardGrid
        cards={cartesVisibles}
        ageRange={ageRange}
        onSelectCard={setCarteOuverte}
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
    </main>
  );
}
