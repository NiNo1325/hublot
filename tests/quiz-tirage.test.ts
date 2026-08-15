import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import {
  cartesEligibles,
  construireSerie,
  estEligible,
  melanger,
  QUESTIONS_PAR_SERIE,
} from '@/content/quiz/tirage';

/**
 * Le tirage était enfoui dans `QuizView` et n'avait donc aucun test. Il porte
 * pourtant la règle la plus importante du jeu : on n'interroge que sur ce qui
 * a été écouté. Le Défi chrono s'en sert désormais aussi, ce qui double le
 * coût d'une régression.
 */
const AGE = '9-12';
const LOCALE = 'fr';

/** Trois cartes d'un même monde, qui ont des questions à tous les âges. */
const echantillon = cards.filter((c) => c.domainId === 'le-son').slice(0, 3);
const vues = new Set(echantillon.map((c) => c.id));

describe('mélange', () => {
  it('ne modifie pas la source', () => {
    const source = [1, 2, 3, 4, 5];
    melanger(source);
    expect(source).toEqual([1, 2, 3, 4, 5]);
  });

  it('conserve exactement les mêmes éléments', () => {
    const source = [1, 2, 3, 4, 5, 6, 7, 8];
    expect([...melanger(source)].sort((a, b) => a - b)).toEqual(source);
  });

  it('supporte la liste vide', () => {
    expect(melanger([])).toEqual([]);
  });
});

describe('éligibilité', () => {
  it("n'interroge pas sur une carte jamais écoutée", () => {
    expect(estEligible(echantillon[0], new Set(), AGE, LOCALE)).toBe(false);
  });

  it('interroge sur une carte écoutée qui a des questions', () => {
    expect(estEligible(echantillon[0], vues, AGE, LOCALE)).toBe(true);
  });

  it('ne retient que les cartes écoutées', () => {
    const eligibles = cartesEligibles(cards, vues, AGE, LOCALE);
    expect(eligibles.map((c) => c.id).sort()).toEqual([...vues].sort());
  });

  it('se restreint à un monde quand on en demande un', () => {
    const autre = cards.find((c) => c.domainId !== 'le-son')!;
    const elargi = new Set([...vues, autre.id]);
    const duSon = cartesEligibles(cards, elargi, AGE, LOCALE, 'le-son');
    expect(duSon.every((c) => c.domainId === 'le-son')).toBe(true);
    expect(duSon).toHaveLength(echantillon.length);
  });
});

describe('construction d’une série', () => {
  it('ne pose jamais deux fois la même carte', () => {
    const serie = construireSerie(cards, vues, AGE, null, LOCALE);
    const ids = serie.map((t) => t.carte.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('ne dépasse pas la taille demandée', () => {
    const serie = construireSerie(cards, vues, AGE, null, LOCALE, 2);
    expect(serie).toHaveLength(2);
  });

  it('se limite à ce qui est disponible', () => {
    const serie = construireSerie(cards, vues, AGE, null, LOCALE, 50);
    expect(serie).toHaveLength(echantillon.length);
  });

  it('plafonne à dix par défaut, la taille d’un monde', () => {
    const toutes = new Set(cards.map((c) => c.id));
    expect(construireSerie(cards, toutes, AGE, null, LOCALE)).toHaveLength(
      QUESTIONS_PAR_SERIE,
    );
  });

  it('rend une question par carte, tirée de cette carte', () => {
    for (const tirage of construireSerie(cards, vues, AGE, null, LOCALE)) {
      expect(tirage.question).toBeDefined();
      expect(tirage.question.reponses.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('rend une série vide si rien n’a été écouté', () => {
    expect(construireSerie(cards, new Set(), AGE, null, LOCALE)).toEqual([]);
  });
});
