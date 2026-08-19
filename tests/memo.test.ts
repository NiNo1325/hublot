import { describe, expect, it } from 'vitest';
import { savantsPrisonniers } from '@/content/savants-cartes';
import { construirePlateau, PAIRES_PAR_AGE, sApparient } from '@/lib/memo';
import { AGE_RANGES } from '@/lib/types';

/**
 * Le plateau est tiré au hasard : ces tests fixent ce qui doit rester vrai à
 * chaque tirage. Un plateau où une tuile n'aurait pas sa jumelle rendrait la
 * partie impossible à finir, sans que rien ne le signale.
 */
describe('plateau du Mémo', () => {
  it.each(AGE_RANGES)('a le bon nombre de tuiles à %s', (age) => {
    expect(construirePlateau(age)).toHaveLength(PAIRES_PAR_AGE[age] * 2);
  });

  it('donne à chaque tuile exactement une jumelle', () => {
    const plateau = construirePlateau('9-12');
    const comptes = new Map<string, number>();
    for (const tuile of plateau) comptes.set(tuile.paire, (comptes.get(tuile.paire) ?? 0) + 1);
    for (const [paire, n] of comptes) expect(n, paire).toBe(2);
  });

  it('ne montre que des portraits, donc rien à lire', () => {
    for (const tuile of construirePlateau('3-5')) {
      expect(tuile.face).toMatch(/^\/images\/wall-of-fame\/[a-z0-9-]+\.webp$/);
      expect(tuile.nom.length).toBeGreaterThan(1);
    }
  });

  /*
    Le tirage puise dans les cent treize prisonniers, et non dans la vingtaine
    de fiches rédigées : s'en tenir à vingt reviendrait à revoir les mêmes têtes
    à chaque partie, maintenant que tous ont leur portrait.
  */
  it('pioche dans tous les savants du mur', () => {
    const vus = new Set<string>();
    for (let i = 0; i < 60; i += 1) {
      for (const tuile of construirePlateau('9-12')) vus.add(tuile.paire);
    }
    expect(vus.size).toBeGreaterThan(50);
    for (const id of vus) {
      expect(savantsPrisonniers.some((s) => s.id === id), id).toBe(true);
    }
  });

  it('mélange les tuiles', () => {
    /*
      Deux jumelles côte à côte à chaque partie donneraient un jeu qui se gagne
      sans mémoire. On tolère la coïncidence, pas la règle : sur vingt tirages,
      au moins un doit les séparer.
    */
    const separees = Array.from({ length: 20 }, () => construirePlateau('6-8')).some((plateau) =>
      plateau.some((tuile, i) => i % 2 === 0 && plateau[i + 1]?.paire !== tuile.paire),
    );
    expect(separees).toBe(true);
  });
});

describe('appariement', () => {
  it('apparie deux tuiles du même savant', () => {
    const plateau = construirePlateau('6-8');
    const [a] = plateau;
    const b = plateau.find((tu) => tu.paire === a.paire && tu.id !== a.id)!;
    expect(sApparient(a, b)).toBe(true);
  });

  it('n’apparie pas une tuile avec elle-même', () => {
    const [a] = construirePlateau('6-8');
    expect(sApparient(a, a)).toBe(false);
  });

  it('n’apparie pas deux savants différents', () => {
    const plateau = construirePlateau('6-8');
    const [a] = plateau;
    const autre = plateau.find((tu) => tu.paire !== a.paire)!;
    expect(sApparient(a, autre)).toBe(false);
  });
});
