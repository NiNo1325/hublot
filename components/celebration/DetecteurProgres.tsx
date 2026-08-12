'use client';

import { useEffect, useRef } from 'react';
import type { DomainDefinition, ScienceCard } from '@/lib/types';
import { badgesDomaine } from '@/lib/badges';
import { rangDepuisEtoiles } from '@/lib/etoiles';
import { useCartesVues, vuesStockees } from '@/components/cards/useCartesVues';
import { useCartesMaitrisees, maitriseesStockees } from '@/components/cards/useCartesMaitrisees';
import { useEtoiles } from '@/components/quiz/useEtoiles';
import { useCelebration } from './CelebrationProvider';

interface DetecteurProgresProps {
  cards: ScienceCard[];
  domains: DomainDefinition[];
}

/**
 * Guette les progrès qui méritent une fête, sans rien afficher lui-même.
 *
 * Il compare l'état précédent à l'état courant à chaque changement des cartes
 * vues ou maîtrisées, et déclenche une célébration spécifique quand un monde
 * vient d'être exploré (🧭) ou maîtrisé (🏅), ou quand tout le parcours est
 * découvert (🏆). Au premier rendu, on ne fête rien : sinon un enfant déjà
 * avancé serait félicité en boucle à l'ouverture de l'app.
 */
export function DetecteurProgres({ cards, domains }: DetecteurProgresProps) {
  const celebrer = useCelebration();
  const { cartesVues } = useCartesVues();
  const { cartesMaitrisees } = useCartesMaitrisees();
  const { etoiles } = useEtoiles();
  const rangIndex = rangDepuisEtoiles(etoiles).rang.index;

  const vuesPrec = useRef<Set<string> | null>(null);
  const maitPrec = useRef<Set<string> | null>(null);

  useEffect(() => {
    const vuesAvant = vuesPrec.current;
    const maitAvant = maitPrec.current;
    // Premier passage : on mémorise l'état sans rien fêter rétroactivement.
    // La ligne de base est lue DIRECTEMENT dans le stockage, pas dans
    // `cartesVues` : à l'hydratation, ce dernier vaut encore vide, et partir de
    // cette valeur transitoire ferait passer la bascule vide→chargé pour un
    // progrès — l'enfant serait alors félicité à chaque rechargement (dont le
    // pull-to-refresh).
    if (vuesAvant === null || maitAvant === null) {
      vuesPrec.current = vuesStockees();
      maitPrec.current = maitriseesStockees();
      return;
    }
    vuesPrec.current = cartesVues;
    maitPrec.current = cartesMaitrisees;

    for (const d of domains) {
      const exploreAvant = badgesDomaine(cards, vuesAvant, maitAvant, d.id).explore;
      const exploreApres = badgesDomaine(cards, cartesVues, cartesMaitrisees, d.id).explore;
      if (!exploreAvant && exploreApres) {
        // Partie « cartes » : toutes les cartes du monde ont été écoutées.
        celebrer({
          rang: rangIndex,
          titre: 'Toutes les cartes écoutées !',
          sousTitre: `${d.icon} ${d.labels.fr}`,
          embleme: '🧭',
        });
      }

      const maitriseAvant = badgesDomaine(cards, vuesAvant, maitAvant, d.id).maitrise;
      const maitriseApres = badgesDomaine(cards, cartesVues, cartesMaitrisees, d.id).maitrise;
      if (!maitriseAvant && maitriseApres) {
        // Partie « questions » : tout le quiz du monde a été réussi.
        celebrer({
          rang: rangIndex,
          titre: 'Tout le quiz réussi !',
          sousTitre: `${d.icon} ${d.labels.fr}`,
          embleme: '🏅',
        });
      }
    }

    // Parcours entièrement découvert.
    const toutAvant = cards.every((c) => vuesAvant.has(c.id));
    const toutApres = cards.every((c) => cartesVues.has(c.id));
    if (!toutAvant && toutApres) {
      celebrer({
        rang: rangIndex,
        titre: 'Parcours terminé !',
        sousTitre: 'Toutes les cartes découvertes',
        embleme: '🏆',
      });
    }
  }, [cartesVues, cartesMaitrisees, rangIndex, cards, domains, celebrer]);

  return null;
}
