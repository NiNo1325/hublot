import { describe, expect, it } from 'vitest';
import { domains } from '@/content/domains';

describe('accroches de domaine', () => {
  it('chaque domaine a une accroche non vide', () => {
    for (const d of domains) {
      expect(d.accroche.fr.trim().length, `accroche vide : ${d.id}`).toBeGreaterThan(0);
    }
  });
});
