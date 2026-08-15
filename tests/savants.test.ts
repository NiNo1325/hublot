import { existsSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { savants } from '@/content/savants';
import { cards } from '@/content/cards';
import { AGE_RANGES, LOCALES } from '@/lib/types';

/**
 * Les fiches sont écrites à la main et pointent vers deux choses extérieures :
 * une illustration et des cartes. Les deux peuvent disparaître sans que rien
 * ne le signale — une image renommée laisse un cadre vide, une carte renommée
 * un bouton qui n'ouvre rien.
 */
describe('intégrité du mur des savants', () => {
  it("n'a pas d'identifiant en double", () => {
    const ids = savants.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('est classé du plus ancien au plus récent', () => {
    const annees = savants.map((s) => s.naissance);
    expect(annees).toEqual([...annees].sort((a, b) => a - b));
  });

  it.each(savants.map((s) => [s.id, s] as const))('%s a son portrait', (_id, savant) => {
    const chemin = `public/images/wall-of-fame/${savant.id}.webp`;
    expect(existsSync(chemin), `manquant : ${chemin}`).toBe(true);
  });

  it.each(savants.map((s) => [s.id, s] as const))(
    '%s ne renvoie qu’à des cartes existantes',
    (_id, savant) => {
      const inconnues = savant.cartes.filter((c) => !cards.some((carte) => carte.id === c));
      expect(inconnues, 'cartes introuvables').toEqual([]);
    },
  );

  /*
    Vingt fiches seulement : contrairement aux cartes, dont la traduction
    avance domaine par domaine, il n'y a pas de raison qu'une langue en couvre
    une partie. On exige donc les deux textes dans chaque langue déclarée.
  */
  it.each(savants.map((s) => [s.id, s] as const))('%s est traduit partout', (_id, savant) => {
    for (const locale of LOCALES) {
      for (const age of AGE_RANGES) {
        expect(savant.apport[locale]?.[age]?.trim().length, `apport ${locale} ${age}`).toBeGreaterThan(0);
        expect(
          savant.anecdote[locale]?.[age]?.trim().length,
          `anecdote ${locale} ${age}`,
        ).toBeGreaterThan(0);
      }
    }
  });

  /*
    Le registre doit vraiment changer d'un âge à l'autre. Recopier le même texte
    aux trois âges compilerait et passerait les tests de présence, tout en
    ratant l'objet de la déclinaison — c'est l'erreur facile.
  */
  it.each(savants.map((s) => [s.id, s] as const))('%s distingue ses registres', (_id, savant) => {
    for (const locale of LOCALES) {
      for (const champ of ['apport', 'anecdote'] as const) {
        const textes = AGE_RANGES.map((age) => savant[champ][locale]![age]);
        expect(new Set(textes).size, `${champ} ${locale} : textes identiques`).toBe(
          AGE_RANGES.length,
        );
      }
    }
  });

  /* Chez les 3-5, un texte trop long ne passe ni à l'écran ni à l'oral. */
  it.each(savants.map((s) => [s.id, s] as const))('%s reste court en 3-5', (_id, savant) => {
    for (const locale of LOCALES) {
      expect(savant.apport[locale]!['3-5'].length, `apport ${locale}`).toBeLessThan(160);
      expect(savant.anecdote[locale]!['3-5'].length, `anecdote ${locale}`).toBeLessThan(160);
    }
  });

  /*
    Une personne vivante porte un intervalle ouvert ; une date de mort
    antérieure à la naissance passerait sinon inaperçue.
  */
  it.each(savants.map((s) => [s.id, s] as const))('%s a des dates cohérentes', (_id, savant) => {
    expect(savant.naissance).toBeGreaterThan(0);
    if (savant.mort !== null) expect(savant.mort).toBeGreaterThan(savant.naissance);
  });
});
