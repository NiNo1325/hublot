import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { constellations, ETOILES_PAR_CONSTELLATION, etatEtoile, traitVisible } from '@/lib/ciel';

/**
 * Le ciel repose sur une équivalence : une carte, une étoile. Si elle se
 * rompait — un monde à onze cartes, une figure à neuf points — une carte
 * resterait sans étoile au ciel, ou une étoile sans carte à écouter, et
 * l'écran d'accueil mentirait sur ce qui reste à découvrir.
 */
describe('géométrie du ciel', () => {
  it('a une constellation par monde', () => {
    expect(Object.keys(constellations).sort()).toEqual(domains.map((d) => d.id).sort());
  });

  it('donne dix points à chaque constellation', () => {
    for (const [id, figure] of Object.entries(constellations)) {
      expect(figure.points, id).toHaveLength(ETOILES_PAR_CONSTELLATION);
    }
  });

  it('compte dix cartes par monde, comme d’étoiles', () => {
    for (const domain of domains) {
      const duMonde = cards.filter((c) => c.domainId === domain.id);
      expect(duMonde.length, domain.id).toBe(ETOILES_PAR_CONSTELLATION);
    }
  });

  it('garde ses points dans le cadre', () => {
    for (const [id, figure] of Object.entries(constellations)) {
      for (const [x, y] of figure.points) {
        expect(x, id).toBeGreaterThanOrEqual(0);
        expect(x, id).toBeLessThanOrEqual(100);
        expect(y, id).toBeGreaterThanOrEqual(0);
        expect(y, id).toBeLessThanOrEqual(100);
      }
    }
  });

  /* Un trait vers un point inexistant ne dessinerait rien et passerait inaperçu. */
  it('ne relie que des points existants', () => {
    for (const [id, figure] of Object.entries(constellations)) {
      for (const [a, b] of figure.traits) {
        expect(a, id).toBeGreaterThanOrEqual(0);
        expect(a, id).toBeLessThan(figure.points.length);
        expect(b, id).toBeGreaterThanOrEqual(0);
        expect(b, id).toBeLessThan(figure.points.length);
        expect(a, id).not.toBe(b);
      }
    }
  });

  /*
    Une étoile qu'aucun trait ne touche resterait un point isolé : la figure ne
    se lirait jamais comme un dessin.
  */
  it('rattache chaque étoile à la figure', () => {
    for (const [id, figure] of Object.entries(constellations)) {
      const touchees = new Set(figure.traits.flat());
      for (let i = 0; i < figure.points.length; i += 1) {
        expect(touchees.has(i), `${id} — étoile ${i}`).toBe(true);
      }
    }
  });
});

describe('état d’une étoile', () => {
  it('reste éteinte tant que la carte n’est pas écoutée', () => {
    expect(etatEtoile('x', new Set(), new Set())).toBe('eteinte');
  });

  it('s’allume à l’écoute', () => {
    expect(etatEtoile('x', new Set(['x']), new Set())).toBe('allumee');
  });

  it('brille dès que la question est réussie', () => {
    expect(etatEtoile('x', new Set(['x']), new Set(['x']))).toBe('brillante');
  });

  /*
    Une carte peut être maîtrisée sans être « vue » : le quizz libre interroge
    des cartes écoutées, mais un stockage remis à zéro à moitié pourrait laisser
    l'une sans l'autre. L'étoile doit alors briller quand même.
  */
  it('brille même sans écoute enregistrée', () => {
    expect(etatEtoile('x', new Set(), new Set(['x']))).toBe('brillante');
  });
});

describe('traits', () => {
  it('n’apparaît qu’entre deux étoiles allumées', () => {
    expect(traitVisible([0, 1], ['allumee', 'allumee'])).toBe(true);
    expect(traitVisible([0, 1], ['allumee', 'eteinte'])).toBe(false);
    expect(traitVisible([0, 1], ['eteinte', 'eteinte'])).toBe(false);
  });

  it('accepte une étoile brillante comme allumée', () => {
    expect(traitVisible([0, 1], ['brillante', 'allumee'])).toBe(true);
  });
});
