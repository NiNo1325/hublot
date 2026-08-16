import { describe, expect, it } from 'vitest';
import { etoilesReprises, reprisNecessaire } from '@/lib/migration-etoiles';

/**
 * Un compte existant traverse le changement d'économie. Mal repris, il ferait
 * l'un des deux dégâts : laisser un enfant « Génie » devant un ciel vide, avec
 * plus rien à gagner ; ou lui retirer des cartes qu'il a bel et bien apprises.
 * Ces tests bornent les deux côtés.
 */
describe('reprise des étoiles', () => {
  it('ramène un ancien total gonflé au nombre de cartes réussies', () => {
    expect(etoilesReprises(190, 34)).toBe(34);
  });

  it('ne remonte jamais un total en dessous du réel', () => {
    // Des étoiles dépensées, ou un stockage partiel : on ne fabrique rien.
    expect(etoilesReprises(12, 34)).toBe(12);
  });

  it('laisse un compte neuf à zéro', () => {
    expect(etoilesReprises(0, 0)).toBe(0);
  });

  it('encaisse des valeurs abîmées', () => {
    expect(etoilesReprises(-5, 10)).toBe(0);
    expect(etoilesReprises(10, -5)).toBe(0);
    expect(etoilesReprises(10.9, 40)).toBe(10);
  });
});

describe('faut-il reprendre ?', () => {
  it('oui quand le total dépasse les cartes réussies', () => {
    expect(reprisNecessaire(190, 34)).toBe(true);
  });

  /* Un compte déjà cohérent ne doit pas être réécrit à chaque démarrage. */
  it('non quand le compte est déjà juste', () => {
    expect(reprisNecessaire(34, 34)).toBe(false);
    expect(reprisNecessaire(0, 0)).toBe(false);
    expect(reprisNecessaire(12, 34)).toBe(false);
  });
});
