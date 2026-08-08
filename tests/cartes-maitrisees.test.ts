import { describe, expect, it } from 'vitest';
import { lireMaitrisees, ecrireMaitrisees } from '@/components/cards/useCartesMaitrisees';

describe('sérialisation des cartes maîtrisées', () => {
  it('lit une liste séparée par des virgules, en ignorant les vides', () => {
    expect([...lireMaitrisees('a,b,c')]).toEqual(['a', 'b', 'c']);
    expect([...lireMaitrisees('')].length).toBe(0);
    expect([...lireMaitrisees('a,,b')]).toEqual(['a', 'b']);
  });

  it('fait un aller-retour', () => {
    const set = new Set(['x', 'y']);
    expect([...lireMaitrisees(ecrireMaitrisees(set))].sort()).toEqual(['x', 'y']);
  });
});
