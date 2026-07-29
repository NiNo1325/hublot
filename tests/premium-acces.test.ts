import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { EXTRAS_GRATUITS, estGratuite, estPremium } from '@/content/acces';

describe("socle gratuit", () => {
  it("les cartes phares extra existent dans le catalogue", () => {
    const ids = new Set(cards.map((c) => c.id));
    for (const id of EXTRAS_GRATUITS) {
      expect(ids.has(id), `extra gratuit inconnu : ${id}`).toBe(true);
    }
  });

  it("tout le domaine astronomie est gratuit", () => {
    const astro = cards.filter((c) => c.domainId === 'astronomie');
    for (const c of astro) expect(estGratuite(c)).toBe(true);
  });

  it("une carte hors socle est premium", () => {
    const wifi = cards.find((c) => c.id === 'le-wifi')!;
    expect(estPremium(wifi)).toBe(true);
  });

  it("une carte phare extra est gratuite", () => {
    const volcan = cards.find((c) => c.id === 'les-volcans')!;
    expect(estGratuite(volcan)).toBe(true);
  });

  it("le socle reste un teaser : nettement minoritaire", () => {
    const gratuites = cards.filter(estGratuite).length;
    expect(gratuites).toBeLessThan(cards.length / 2);
  });
});
