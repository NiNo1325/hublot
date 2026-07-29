import { describe, expect, it } from 'vitest';
import { genererDefi, verifierDefi } from '@/components/premium/portailParent';

describe("verrou parental", () => {
  it("génère une multiplication à deux chiffres jouable", () => {
    const defi = genererDefi(() => 0.5); // alea fixe → valeurs déterministes
    expect(defi.reponse).toBe(defi.a * defi.b);
    expect(defi.a).toBeGreaterThanOrEqual(3);
    expect(defi.b).toBeGreaterThanOrEqual(3);
  });

  it("accepte la bonne réponse, même avec des espaces", () => {
    const defi = { a: 7, b: 8, reponse: 56 };
    expect(verifierDefi(defi, ' 56 ')).toBe(true);
  });

  it("refuse une mauvaise réponse ou une saisie non numérique", () => {
    const defi = { a: 7, b: 8, reponse: 56 };
    expect(verifierDefi(defi, '55')).toBe(false);
    expect(verifierDefi(defi, 'abc')).toBe(false);
    expect(verifierDefi(defi, '')).toBe(false);
  });
});
