import { describe, expect, it } from 'vitest';
import { SKUS_PREMIUM } from '@/lib/premium/produits';
import { estPremiumDapresAchats } from '@/lib/premium/entitlement';

const skus = [...SKUS_PREMIUM];

describe("déduction du droit premium", () => {
  it("aucun achat : pas premium", () => {
    expect(estPremiumDapresAchats([], skus)).toBe(false);
  });

  it("un abonnement annuel possédé : premium", () => {
    expect(estPremiumDapresAchats(['hublot_annuel'], skus)).toBe(true);
  });

  it("l'achat à vie possédé : premium", () => {
    expect(estPremiumDapresAchats(['hublot_avie'], skus)).toBe(true);
  });

  it("un achat étranger ne débloque pas", () => {
    expect(estPremiumDapresAchats(['autre_chose'], skus)).toBe(false);
  });
});
