import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
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
  const tousLesIds = domains.map((d) => d.id);

  /*
    Une carte prise dans douze mondes différents, et non les douze premières du
    catalogue : celles-ci forment un monde entier, ce qui décrocherait un badge
    et brouillerait ce que ce test mesure — le décompte de cartes.
  */
  it('compte sur tout le catalogue', () => {
    const eparpillees = domains
      .slice(0, 12)
      .map((d) => cards.find((c) => c.domainId === d.id)!.id);
    const vues = new Set(eparpillees);
    const reussies = new Set(eparpillees.slice(0, 5));
    expect(bilanGlobal(cards, vues, reussies, tousLesIds)).toEqual({
      cartesEcoutees: 12,
      cartesTotal: cards.length,
      cartesReussies: 5,
      mondesExplores: 0,
      mondesMaitrises: 0,
      mondesTotal: domains.length,
    });
  });

  it('part de zéro', () => {
    const bilan = bilanGlobal(cards, new Set(), new Set(), tousLesIds);
    expect(bilan.cartesEcoutees).toBe(0);
    expect(bilan.cartesReussies).toBe(0);
    expect(bilan.cartesTotal).toBe(cards.length);
    expect(bilan.mondesExplores).toBe(0);
  });

  /*
    Le chiffre du menu de Lumi et les médailles de la page des mondes doivent
    sortir de la même règle : un monde entièrement écouté compte pour un badge
    🧭, et pour lui seul.
  */
  it('compte un monde exploré dès que toutes ses cartes sont écoutées', () => {
    const bilan = bilanGlobal(cards, new Set(ids), new Set(), tousLesIds);
    expect(bilan.mondesExplores).toBe(1);
    expect(bilan.mondesMaitrises).toBe(0);
  });

  it('compte tous les mondes quand tout est réussi', () => {
    const tout = new Set(cards.map((c) => c.id));
    const bilan = bilanGlobal(cards, tout, tout, tousLesIds);
    expect(bilan.mondesExplores).toBe(domains.length);
    expect(bilan.mondesMaitrises).toBe(domains.length);
  });
});
