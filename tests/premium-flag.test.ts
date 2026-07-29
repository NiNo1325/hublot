import { afterEach, describe, expect, it, vi } from 'vitest';
import { premiumActif } from '@/lib/premium/flag';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("drapeau d'activation premium", () => {
  it("est éteint par défaut (variable absente)", () => {
    vi.stubEnv('NEXT_PUBLIC_PREMIUM_ACTIF', '');
    expect(premiumActif()).toBe(false);
  });

  it("n'est allumé que par la valeur exacte true", () => {
    vi.stubEnv('NEXT_PUBLIC_PREMIUM_ACTIF', 'true');
    expect(premiumActif()).toBe(true);
  });

  it("reste éteint pour toute autre valeur", () => {
    vi.stubEnv('NEXT_PUBLIC_PREMIUM_ACTIF', '1');
    expect(premiumActif()).toBe(false);
  });
});
