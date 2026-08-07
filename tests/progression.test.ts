import { describe, expect, it } from 'vitest';
import { progressionDomaine } from '@/lib/progression';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';

describe('progressionDomaine', () => {
  it('compte le total des cartes du domaine', () => {
    const { total } = progressionDomaine(cards, new Set(), 'meteo');
    expect(total).toBe(cards.filter((c) => c.domainId === 'meteo').length);
  });

  it('compte les cartes vues du domaine, et elles seules', () => {
    const duDomaine = cards.filter((c) => c.domainId === 'animaux');
    const vues = new Set([duDomaine[0].id, duDomaine[1].id, 'carte-dun-autre-domaine']);
    const p = progressionDomaine(cards, vues, 'animaux');
    expect(p.vues).toBe(2);
    expect(p.total).toBe(duDomaine.length);
  });

  it('renvoie 0 vue quand rien n’est vu', () => {
    expect(progressionDomaine(cards, new Set(), 'physique').vues).toBe(0);
  });

  it('atteint total quand tout le domaine est vu', () => {
    const duDomaine = cards.filter((c) => c.domainId === 'chimie');
    const vues = new Set(duDomaine.map((c) => c.id));
    const p = progressionDomaine(cards, vues, 'chimie');
    expect(p.vues).toBe(p.total);
  });
});

describe('routes de domaine', () => {
  it('chaque domaine a au moins une carte (aucun monde vide)', () => {
    for (const d of domains) {
      expect(cards.some((c) => c.domainId === d.id), `domaine vide : ${d.id}`).toBe(true);
    }
  });

  it('chaque id de domaine est un slug d’URL sûr', () => {
    for (const d of domains) {
      expect(d.id, `slug invalide : ${d.id}`).toMatch(/^[a-z0-9-]+$/);
    }
  });
});
