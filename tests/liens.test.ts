import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { savantsPrisonniers } from '@/content/savants-cartes';
import { construireManche, estBrouille, LIENS_PAR_AGE } from '@/lib/liens';
import { AGE_RANGES } from '@/lib/types';

const AUCUN = new Set<string>();

/**
 * Le jeu des liens ne se gagne qu'une fois tous les traits tirés. Si une manche
 * proposait deux fois le même savant, ou une découverte sans son portrait, elle
 * deviendrait infinissable — et l'enfant chercherait une erreur qui n'est pas
 * la sienne.
 */
describe('manche des liens', () => {
  it.each(AGE_RANGES)('propose le bon nombre de liens à %s', (age) => {
    const manche = construireManche(cards, AUCUN, [], age, 'fr');
    expect(manche.savants).toHaveLength(LIENS_PAR_AGE[age]);
    expect(manche.decouvertes).toHaveLength(LIENS_PAR_AGE[age]);
  });

  it('ne propose jamais deux fois le même savant', () => {
    const manche = construireManche(cards, AUCUN, [], '9-12', 'fr');
    const ids = manche.savants.map((l) => l.savantId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('donne à chaque découverte son portrait', () => {
    const manche = construireManche(cards, AUCUN, [], '9-12', 'fr');
    const gauche = new Set(manche.savants.map((l) => l.savantId));
    for (const d of manche.decouvertes) expect(gauche.has(d.savantId), d.nom).toBe(true);
  });

  it('nomme une découverte pour chaque lien', () => {
    for (const lien of construireManche(cards, AUCUN, [], '9-12', 'fr').savants) {
      expect(lien.decouverte.length).toBeGreaterThan(3);
      expect(cards.some((c) => c.id === lien.carteId), lien.carteId).toBe(true);
    }
  });

  /*
    Le tirage privilégie les savants que l'enfant connaît : ceux qu'il a
    délivrés d'abord, puis ceux dont il a écouté une carte. Un lien qu'on ne
    peut pas savoir se devine au hasard, et le jeu n'apprend plus rien.
  */
  it('sert d’abord les savants délivrés', () => {
    const delivres = ['archimede', 'isaac-newton', 'galilee'];
    const manche = construireManche(cards, AUCUN, delivres, '3-5', 'fr');
    for (const lien of manche.savants) expect(delivres).toContain(lien.savantId);
  });

  it('sert ensuite ceux dont une carte a été écoutée', () => {
    const vues = new Set(['les-volcans', 'cycle-de-leau', 'pourquoi-la-terre-tremble']);
    const manche = construireManche(cards, vues, [], '3-5', 'fr');
    for (const lien of manche.savants) {
      const savant = savantsPrisonniers.find((s) => s.id === lien.savantId)!;
      expect(savant.cartes.some((c) => vues.has(c.id)), savant.nom).toBe(true);
    }
  });

  /*
    La découverte retenue doit être une carte que l'enfant a entendue quand il y
    en a une : Newton en tient quatre, et lui proposer « le poids et la masse »
    alors qu'il n'a écouté que « pourquoi tout tombe » rendrait le lien
    indevinable.
  */
  it('choisit une carte déjà écoutée quand le savant en a plusieurs', () => {
    const vues = new Set(['pourquoi-tout-tombe']);
    const manche = construireManche(cards, vues, ['isaac-newton'], '3-5', 'fr');
    const newton = manche.savants.find((l) => l.savantId === 'isaac-newton');
    expect(newton?.carteId).toBe('pourquoi-tout-tombe');
  });

  it('se lance même sans rien avoir écouté', () => {
    const manche = construireManche(cards, AUCUN, [], '6-8', 'fr');
    expect(manche.savants.length).toBeGreaterThan(0);
  });
});

describe('mélange de la colonne de droite', () => {
  it('repère un ordre identique', () => {
    const manche = construireManche(cards, AUCUN, [], '9-12', 'fr');
    const jumeau = { savants: manche.savants, decouvertes: [...manche.savants] };
    expect(estBrouille(jumeau)).toBe(false);
  });

  it('accepte un ordre différent', () => {
    const manche = construireManche(cards, AUCUN, [], '9-12', 'fr');
    const inverse = { savants: manche.savants, decouvertes: [...manche.savants].reverse() };
    expect(estBrouille(inverse)).toBe(true);
  });
});
