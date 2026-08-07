import { describe, expect, it } from 'vitest';
import { AGE_RANGES } from '@/lib/types';
import { trancheDepuisAge, ageDepuisTranche } from '@/lib/age';

describe('trancheDepuisAge', () => {
  it('mappe les bornes de chaque tranche', () => {
    expect(trancheDepuisAge(3)).toBe('3-5');
    expect(trancheDepuisAge(5)).toBe('3-5');
    expect(trancheDepuisAge(6)).toBe('6-8');
    expect(trancheDepuisAge(8)).toBe('6-8');
    expect(trancheDepuisAge(9)).toBe('9-12');
    expect(trancheDepuisAge(12)).toBe('9-12');
  });

  it('borne les âges hors plage', () => {
    expect(trancheDepuisAge(2)).toBe('3-5');
    expect(trancheDepuisAge(15)).toBe('9-12');
  });
});

describe('ageDepuisTranche (migration)', () => {
  it('donne un âge qui retombe sur la même tranche (round-trip)', () => {
    for (const t of AGE_RANGES) {
      expect(trancheDepuisAge(ageDepuisTranche(t))).toBe(t);
    }
  });
});
