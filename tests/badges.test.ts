import { describe, expect, it } from 'vitest';
import { badgesDomaine } from '@/lib/badges';
import { cards } from '@/content/cards';

const idsDe = (domainId: string) => cards.filter((c) => c.domainId === domainId).map((c) => c.id);

describe('badgesDomaine', () => {
  it('exploré et maîtrisé quand toutes les cartes du domaine y sont', () => {
    const ids = idsDe('meteo');
    const b = badgesDomaine(cards, new Set(ids), new Set(ids), 'meteo');
    expect(b).toEqual({ explore: true, maitrise: true });
  });

  it('exploré mais pas maîtrisé si une réussite manque', () => {
    const ids = idsDe('animaux');
    const maitrisees = new Set(ids.slice(1)); // il en manque une
    const b = badgesDomaine(cards, new Set(ids), maitrisees, 'animaux');
    expect(b).toEqual({ explore: true, maitrise: false });
  });

  it("non exploré si une carte n'est pas écoutée", () => {
    const ids = idsDe('physique');
    const vues = new Set(ids.slice(1));
    expect(badgesDomaine(cards, vues, new Set(), 'physique').explore).toBe(false);
  });

  it('rien avec des ensembles vides', () => {
    expect(badgesDomaine(cards, new Set(), new Set(), 'chimie')).toEqual({
      explore: false,
      maitrise: false,
    });
  });

  it('les domaines sont indépendants', () => {
    const idsMeteo = idsDe('meteo');
    // Météo tout maîtrisé, mais on interroge animaux : rien.
    const b = badgesDomaine(cards, new Set(idsMeteo), new Set(idsMeteo), 'animaux');
    expect(b).toEqual({ explore: false, maitrise: false });
  });
});
