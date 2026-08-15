import { describe, expect, it } from 'vitest';
import { RANGS, rangDepuisEtoiles, lireEtoiles } from '@/lib/etoiles';

describe('rangDepuisEtoiles', () => {
  it('donne Apprenti à 0 et sous le premier palier', () => {
    expect(rangDepuisEtoiles(0).rang.nom.fr).toBe('Apprenti');
    expect(rangDepuisEtoiles(29).rang.nom.fr).toBe('Apprenti');
    expect(rangDepuisEtoiles(0).rangProchain?.nom.fr).toBe('Explorateur');
  });

  it('monte de rang pile au seuil', () => {
    expect(rangDepuisEtoiles(30).rang.nom.fr).toBe('Explorateur');
    expect(rangDepuisEtoiles(74).rang.nom.fr).toBe('Explorateur');
    expect(rangDepuisEtoiles(75).rang.nom.fr).toBe('Aventurier');
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

describe('lireEtoiles', () => {
  it('lit un entier valide, sinon 0', () => {
    expect(lireEtoiles('42')).toBe(42);
    expect(lireEtoiles(null)).toBe(0);
    expect(lireEtoiles('-5')).toBe(0);
    expect(lireEtoiles('abc')).toBe(0);
    expect(lireEtoiles('3.9')).toBe(3);
  });
});
