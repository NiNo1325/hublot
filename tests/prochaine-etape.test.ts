import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { bilanGlobal, prochaineEtapeDomaine } from '@/lib/prochaine-etape';

/**
 * Ce calcul décide de la seule phrase qui dit à l'enfant ce qui est à sa
 * portée. Une erreur d'un cran — annoncer une carte de trop, ou le badge
 * suivant alors que le premier n'est pas pris — le ferait revenir pour rien.
 */
const duSon = cards.filter((c) => c.domainId === 'le-son');
const ids = duSon.map((c) => c.id);

describe('prochaine étape d’un monde', () => {
  it('annonce toutes les cartes quand rien n’a été écouté', () => {
    expect(prochaineEtapeDomaine(cards, new Set(), new Set(), 'le-son')).toEqual({
      type: 'ecouter',
      combien: duSon.length,
    });
  });

  it('décompte à mesure qu’on écoute', () => {
    const vues = new Set(ids.slice(0, 3));
    expect(prochaineEtapeDomaine(cards, vues, new Set(), 'le-son')).toEqual({
      type: 'ecouter',
      combien: duSon.length - 3,
    });
  });

  /* On écoute avant de répondre : le badge d'exploration passe toujours d'abord. */
  it('ne parle du quizz qu’une fois tout écouté', () => {
    const presque = new Set(ids.slice(0, ids.length - 1));
    expect(prochaineEtapeDomaine(cards, presque, new Set(ids), 'le-son')).toEqual({
      type: 'ecouter',
      combien: 1,
    });
  });

  it('bascule sur le quizz quand tout est écouté', () => {
    const vues = new Set(ids);
    const reussies = new Set(ids.slice(0, 4));
    expect(prochaineEtapeDomaine(cards, vues, reussies, 'le-son')).toEqual({
      type: 'reussir',
      combien: duSon.length - 4,
    });
  });

  it('déclare le monde complet quand les deux badges sont pris', () => {
    const tout = new Set(ids);
    expect(prochaineEtapeDomaine(cards, tout, tout, 'le-son')).toEqual({ type: 'complet' });
  });

  it('ne compte que le monde demandé', () => {
    const autres = new Set(cards.filter((c) => c.domainId !== 'le-son').map((c) => c.id));
    expect(prochaineEtapeDomaine(cards, autres, autres, 'le-son')).toEqual({
      type: 'ecouter',
      combien: duSon.length,
    });
  });
});

describe('bilan global', () => {
  it('compte sur tout le catalogue', () => {
    const vues = new Set(cards.slice(0, 12).map((c) => c.id));
    const reussies = new Set(cards.slice(0, 5).map((c) => c.id));
    expect(bilanGlobal(cards, vues, reussies)).toEqual({
      cartesEcoutees: 12,
      cartesTotal: cards.length,
      cartesReussies: 5,
    });
  });

  it('part de zéro', () => {
    const bilan = bilanGlobal(cards, new Set(), new Set());
    expect(bilan.cartesEcoutees).toBe(0);
    expect(bilan.cartesReussies).toBe(0);
    expect(bilan.cartesTotal).toBe(cards.length);
  });
});
