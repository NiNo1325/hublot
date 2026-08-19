import { describe, expect, it } from 'vitest';
import { affirmations } from '@/content/affirmations';
import { AFFIRMATIONS_PAR_AGE, construireManche, peutJouer } from '@/lib/vrai-faux';
import { AGE_RANGES } from '@/lib/types';

const TOUT = new Set(affirmations.map((a) => a.cardId));

/**
 * Le jeu ne porte que sur des cartes déjà écoutées : juger une phrase sur un
 * sujet jamais entendu, ce n'est plus réfléchir, c'est tirer à pile ou face.
 */
describe('la manche de vrai ou faux', () => {
  it('ne se lance pas sans carte écoutée', () => {
    expect(peutJouer(new Set())).toBe(false);
    expect(construireManche(new Set(), '6-8')).toHaveLength(0);
  });

  it.each(AGE_RANGES)('propose le bon nombre de phrases à %s', (age) => {
    expect(construireManche(TOUT, age)).toHaveLength(AFFIRMATIONS_PAR_AGE[age]);
  });

  it('ne pose que des questions sur des cartes écoutées', () => {
    const vues = new Set(['les-volcans', 'cycle-de-leau', 'jour-et-nuit']);
    for (const a of construireManche(vues, '9-12')) {
      expect(vues.has(a.cardId), a.cardId).toBe(true);
    }
  });

  /*
    Mieux vaut une manche courte qu'un refus de jouer : un enfant qui a écouté
    deux cartes doit pouvoir jouer deux phrases.
  */
  it('raccourcit la manche plutôt que de refuser', () => {
    const vues = new Set(['les-volcans', 'cycle-de-leau']);
    expect(construireManche(vues, '9-12')).toHaveLength(2);
  });

  it('ne répète jamais la même phrase dans une manche', () => {
    for (let essai = 0; essai < 30; essai += 1) {
      const manche = construireManche(TOUT, '9-12');
      const ids = manche.map((a) => a.cardId);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  /* Un tirage figé ferait apprendre l'ordre au lieu du contenu. */
  it('ne sert pas toujours les mêmes phrases', () => {
    const premieres = new Set<string>();
    for (let essai = 0; essai < 30; essai += 1) {
      premieres.add(construireManche(TOUT, '3-5')[0].cardId);
    }
    expect(premieres.size).toBeGreaterThan(3);
  });
});
