import { describe, expect, it } from 'vitest';
import { RANGS, rangDepuisEtoiles, lireEtoiles } from '@/lib/etoiles';
import { quizCartes } from '@/content/quiz';
import { cards } from '@/content/cards';
import { AGE_RANGES } from '@/lib/types';

describe('rangDepuisEtoiles', () => {
  it('donne le premier rang à 0 et sous le premier palier', () => {
    expect(rangDepuisEtoiles(0).rang.index).toBe(0);
    expect(rangDepuisEtoiles(RANGS[1].seuil - 1).rang.index).toBe(0);
    expect(rangDepuisEtoiles(0).rangProchain?.index).toBe(1);
  });

  it('monte de rang pile au seuil', () => {
    for (const rang of RANGS.slice(1)) {
      expect(rangDepuisEtoiles(rang.seuil - 1).rang.index).toBe(rang.index - 1);
      expect(rangDepuisEtoiles(rang.seuil).rang.index).toBe(rang.index);
    }
  });

  it('plafonne au dernier rang, sans rang suivant', () => {
    const dernier = RANGS[RANGS.length - 1];
    expect(rangDepuisEtoiles(dernier.seuil).rang.nom).toEqual(dernier.nom);
    expect(rangDepuisEtoiles(dernier.seuil + 1000).rang.nom).toEqual(dernier.nom);
    expect(rangDepuisEtoiles(dernier.seuil).rangProchain).toBeNull();
  });

  it('borne un total négatif au premier rang', () => {
    expect(rangDepuisEtoiles(-5).rang.index).toBe(0);
  });
});

describe('échelle des rangs', () => {
  it('est strictement croissante et part de zéro', () => {
    expect(RANGS[0].seuil).toBe(0);
    for (let i = 1; i < RANGS.length; i += 1) {
      expect(RANGS[i].seuil).toBeGreaterThan(RANGS[i - 1].seuil);
    }
  });

  /*
    Le garde-fou du calibrage. Les seuils ont été posés pour un catalogue
    donné : si le contenu grandit sans qu'on y revienne, les derniers rangs
    deviennent triviaux et l'échelle ne récompense plus rien. Ce test échoue
    alors, et rappelle qu'il faut trancher plutôt que laisser filer.
  */
  const parTraversee =
    cards.length +
    AGE_RANGES.reduce(
      (total, age) =>
        Math.max(
          total,
          quizCartes.reduce((n, q) => n + q.questions.fr[age].length, 0),
        ),
      0,
    );

  it('place le rang médian sur une traversée complète du contenu', () => {
    const median = RANGS[Math.floor(RANGS.length / 2)];
    expect(median.seuil).toBe(parTraversee);
  });

  it('réserve les deux derniers rangs à la reprise', () => {
    for (const rang of RANGS.slice(4)) {
      expect(rang.seuil).toBeGreaterThan(parTraversee);
    }
  });
});

describe('lireEtoiles', () => {
  it('lit un entier valide, sinon 0', () => {
    expect(lireEtoiles('42')).toBe(42);
    expect(lireEtoiles(null)).toBe(0);
    expect(lireEtoiles('-5')).toBe(0);
    expect(lireEtoiles('abc')).toBe(0);
    expect(lireEtoiles('3.9')).toBe(3);
  });
});
