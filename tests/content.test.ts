import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';
import { animationRegistry } from '@/components/animations/registry';
import { AGE_RANGES } from '@/lib/types';

/**
 * Le contenu est écrit à la main et grandira carte par carte. Ces tests sont le
 * filet qui empêche une carte incomplète d'atteindre la production : ils
 * remplacent la validation qu'un CMS ou un schéma de base de données assurerait.
 */
describe('intégrité du catalogue', () => {
  it('expose au moins une carte', () => {
    expect(cards.length).toBeGreaterThan(0);
  });

  it("n'a pas d'identifiant de carte en double", () => {
    const ids = cards.map((c) => c.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("n'a pas d'identifiant de domaine en double", () => {
    const ids = domains.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(cards.map((c) => [c.id, c] as const))(
    'la carte « %s » est complète',
    (_id, card) => {
      // Le domaine référencé doit exister, sinon la tuile n'a ni couleur ni filtre.
      expect(domains.some((d) => d.id === card.domainId)).toBe(true);

      // Une carte sans animation enregistrée s'afficherait en repli permanent.
      expect(animationRegistry[card.animationId]).toBeDefined();

      expect(card.thumbnail.length).toBeGreaterThan(0);

      for (const age of AGE_RANGES) {
        const titre = card.content.fr.title[age];
        expect(titre?.trim().length, `titre manquant pour ${age}`).toBeGreaterThan(0);

        const beats = card.content.fr.explanation[age]?.beats ?? [];
        expect(beats.length, `aucun beat pour ${age}`).toBeGreaterThan(0);

        for (const beat of beats) {
          expect(beat.text.trim().length).toBeGreaterThan(0);
        }
      }
    },
  );

  /**
   * Le composant d'animation est unique pour les trois âges et se pilote par
   * `activeBeatId` : si les listes de beats divergeaient d'un âge à l'autre,
   * certaines phases ne s'illustreraient jamais.
   */
  it.each(cards.map((c) => [c.id, c] as const))(
    'la carte « %s » a les mêmes beats à tous les âges',
    (_id, card) => {
      const [reference, ...autres] = AGE_RANGES.map((age) =>
        card.content.fr.explanation[age].beats.map((b) => b.id),
      );
      for (const liste of autres) {
        expect(liste).toEqual(reference);
      }
    },
  );
});
