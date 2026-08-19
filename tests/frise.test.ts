import { describe, expect, it } from 'vitest';
import { savantsPrisonniers } from '@/content/savants-cartes';
import { construireFrise, ECART_MINIMAL, SAVANTS_PAR_AGE } from '@/lib/frise';
import { AGE_RANGES } from '@/lib/types';

const AUCUN = new Set<string>();
const naissanceDe = (id: string) =>
  savantsPrisonniers.find((s) => s.id === id)!.naissance;

/**
 * La frise se gagne en plaçant les savants dans l'ordre. Deux pièges la
 * rendraient injouable : un ordre attendu qui ne serait pas chronologique — on
 * ne pourrait plus le trouver — et deux savants nés la même décennie, dont rien
 * à l'écran ne permettrait de dire lequel vient avant.
 */
describe('la frise du temps', () => {
  it.each(AGE_RANGES)('propose le bon nombre de savants à %s', (age) => {
    const { tirage, ordre } = construireFrise(AUCUN, [], age);
    expect(tirage).toHaveLength(SAVANTS_PAR_AGE[age]);
    expect(ordre).toHaveLength(SAVANTS_PAR_AGE[age]);
  });

  it('attend bien l’ordre chronologique', () => {
    for (let essai = 0; essai < 40; essai += 1) {
      const { ordre } = construireFrise(AUCUN, [], '9-12');
      const annees = ordre.map(naissanceDe);
      expect([...annees].sort((a, b) => a - b)).toEqual(annees);
    }
  });

  it('ne propose jamais deux fois le même savant', () => {
    for (let essai = 0; essai < 40; essai += 1) {
      const { tirage } = construireFrise(AUCUN, [], '9-12');
      const ids = tirage.map((s) => s.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('propose exactement les savants de l’ordre attendu', () => {
    const { tirage, ordre } = construireFrise(AUCUN, [], '6-8');
    expect([...tirage.map((s) => s.id)].sort()).toEqual([...ordre].sort());
  });

  /*
    Deux savants nés à quinze ans d'écart se ressemblent trait pour trait : la
    bonne réponse existerait, mais aucun indice ne permettrait de la trouver.
  */
  it('écarte les savants trop proches dans le temps', () => {
    for (let essai = 0; essai < 40; essai += 1) {
      const { ordre } = construireFrise(AUCUN, [], '9-12');
      const annees = ordre.map(naissanceDe);
      for (let i = 1; i < annees.length; i += 1) {
        expect(annees[i] - annees[i - 1]).toBeGreaterThanOrEqual(ECART_MINIMAL);
      }
    }
  });

  /* Le tirage sert d'abord les savants que l'enfant connaît, comme aux liens. */
  it('sert d’abord les savants délivrés', () => {
    const delivres = ['archimede', 'isaac-newton', 'marie-curie'];
    const { tirage } = construireFrise(AUCUN, delivres, '3-5');
    for (const savant of tirage) expect(delivres).toContain(savant.id);
  });

  it('donne à chaque savant son portrait et sa date', () => {
    for (const savant of construireFrise(AUCUN, [], '9-12').tirage) {
      expect(savant.portrait).toBe(`/images/wall-of-fame/${savant.id}.webp`);
      expect(savant.naissance).toBe(naissanceDe(savant.id));
      expect(savant.nom.length).toBeGreaterThan(2);
    }
  });
});
