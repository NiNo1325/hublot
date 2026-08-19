import { describe, expect, it } from 'vitest';
import { appariements } from '@/content/savants-cartes';
import { savants } from '@/content/savants';
import { cards } from '@/content/cards';

/**
 * Le fil rouge repose sur une bijection : chaque carte tient un savant
 * prisonnier, chaque savant est tenu par une seule carte. Si elle se rompait,
 * un savant resterait enfermé pour toujours — ou deux se libéreraient d'un
 * coup, ce qui viderait la libération de son sens.
 */
describe('appariement carte ↔ savant', () => {
  it('couvre toutes les cartes du catalogue', () => {
    expect(appariements).toHaveLength(cards.length);
    const apparies = new Set(appariements.map((a) => a.carte));
    for (const carte of cards) {
      expect(apparies.has(carte.id), carte.id).toBe(true);
    }
  });

  it('ne cite que des cartes existantes', () => {
    const ids = new Set(cards.map((c) => c.id));
    for (const a of appariements) {
      expect(ids.has(a.carte), a.carte).toBe(true);
    }
  });

  it('n’attribue jamais deux savants à la même carte', () => {
    const vues = appariements.map((a) => a.carte);
    expect(new Set(vues).size).toBe(vues.length);
  });

  it('n’enferme jamais un savant derrière deux cartes', () => {
    const slugs = appariements.map((a) => a.savant);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  /*
    Le slug nomme le fichier d'illustration : un caractère accentué ou une
    majuscule casserait le chemin sur un serveur sensible à la casse.
  */
  it('donne à chaque savant un slug de fichier valide', () => {
    for (const a of appariements) {
      expect(a.savant, a.nom).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('donne des dates cohérentes', () => {
    for (const a of appariements) {
      expect(a.naissance, a.nom).toBeLessThan(new Date().getFullYear());
      if (a.mort !== null) {
        expect(a.mort, a.nom).toBeGreaterThan(a.naissance);
      }
    }
  });

  it('écrit un lien pour chaque savant', () => {
    for (const a of appariements) {
      expect(a.lien.length, a.nom).toBeGreaterThan(30);
      expect(a.lien.endsWith('.'), a.nom).toBe(true);
    }
  });

  /*
    Les vingt savants déjà illustrés doivent tous être repris : leurs images
    existent, en perdre un reviendrait à jeter une illustration et à en
    commander une autre pour rien.
  */
  it('reprend les vingt savants déjà illustrés', () => {
    const repris = new Set(appariements.filter((a) => a.illustre).map((a) => a.savant));
    expect(repris.size).toBe(savants.length);
    for (const s of savants) {
      expect(repris.has(s.id), s.id).toBe(true);
    }
  });
});
