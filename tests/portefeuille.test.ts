import { describe, expect, it } from 'vitest';
import {
  ecrireAchats,
  lireAchats,
  peutAcheter,
  solde,
  totalDepense,
} from '@/lib/portefeuille';
import { objetsCabinet } from '@/content/cabinet';

/**
 * La règle d'or du porte-monnaie : les étoiles gagnées ne baissent jamais, donc
 * acheter ne fait jamais rétrograder Lumi. Ces tests la verrouillent, parce
 * qu'un enfant qui verrait son rang chuter après un achat n'achèterait plus
 * jamais rien.
 */
describe('solde', () => {
  it('retranche les dépenses des gains', () => {
    expect(solde(100, 30)).toBe(70);
  });

  it('ne descend jamais sous zéro', () => {
    expect(solde(10, 40)).toBe(0);
    expect(solde(0, 0)).toBe(0);
  });

  it('ignore les décimales d’un stockage abîmé', () => {
    expect(solde(10.9, 3.9)).toBe(7);
  });
});

describe('achat possible', () => {
  const objet = { id: 'loupe', prix: 50 };

  it('autorise quand le solde suffit', () => {
    expect(peutAcheter(60, 0, [], objet)).toBe(true);
    expect(peutAcheter(50, 0, [], objet)).toBe(true);
  });

  it('refuse quand le solde manque', () => {
    expect(peutAcheter(49, 0, [], objet)).toBe(false);
    expect(peutAcheter(100, 60, [], objet)).toBe(false);
  });

  it('refuse un objet déjà possédé', () => {
    expect(peutAcheter(1000, 0, ['loupe'], objet)).toBe(false);
  });
});

describe('liste d’achats', () => {
  it('lit une liste vide sans broncher', () => {
    expect(lireAchats(null)).toEqual([]);
    expect(lireAchats('')).toEqual([]);
  });

  it('écarte les doublons et les vides', () => {
    expect(lireAchats('loupe,,loupe, globe ')).toEqual(['loupe', 'globe']);
  });

  it('fait l’aller-retour', () => {
    expect(lireAchats(ecrireAchats(['loupe', 'globe']))).toEqual(['loupe', 'globe']);
  });
});

describe('total dépensé', () => {
  it('somme le prix des objets possédés', () => {
    const [a, b] = objetsCabinet;
    expect(totalDepense([a.id, b.id], objetsCabinet)).toBe(a.prix + b.prix);
  });

  /* Un identifiant inconnu — objet retiré du catalogue — ne doit rien débiter. */
  it('ignore un objet disparu du catalogue', () => {
    expect(totalDepense(['fantome'], objetsCabinet)).toBe(0);
  });

  it('vaut zéro sans achat', () => {
    expect(totalDepense([], objetsCabinet)).toBe(0);
  });
});

describe('catalogue du cabinet', () => {
  it("n'a pas d'identifiant en double", () => {
    const ids = objetsCabinet.map((o) => o.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('est trié du moins cher au plus cher', () => {
    const prix = objetsCabinet.map((o) => o.prix);
    expect(prix).toEqual([...prix].sort((a, b) => a - b));
  });

  /*
    Le cabinet doit rester un horizon : s'il se vidait avant la fin du contenu,
    il n'y aurait plus rien à convoiter. Son total dépasse donc ce qu'une
    traversée complète rapporte (300 étoiles, cf. lib/etoiles.ts).
  */
  it('coûte plus qu’une traversée complète du contenu', () => {
    const total = objetsCabinet.reduce((n, o) => n + o.prix, 0);
    expect(total).toBeGreaterThan(300);
  });
});
