import { describe, expect, it } from 'vitest';
import { AGE_RANGES } from '@/lib/types';
import { NIVEAUX, presentationNiveaux } from '@/content/niveaux';
import { ageDuNiveau, niveauDepuisAge, niveauDepuisTranche, niveauParId } from '@/lib/niveaux';

/**
 * Les trois niveaux remplacent l'âge côté interface, mais le catalogue continue
 * d'indexer ses cartes par tranche. Ces tests protègent la correspondance : une
 * tranche orpheline, et un enfant se retrouverait avec des explications qui ne
 * sont pas les siennes, sans que rien ne le signale.
 */
describe('correspondance niveaux ↔ tranches du catalogue', () => {
  it('couvre exactement les trois tranches du contenu, sans doublon', () => {
    expect(NIVEAUX.map((n) => n.tranche).sort()).toEqual([...AGE_RANGES].sort());
  });

  it('n’a ni identifiant ni figure de Lumi en double', () => {
    expect(new Set(NIVEAUX.map((n) => n.id)).size).toBe(NIVEAUX.length);
    expect(new Set(NIVEAUX.map((n) => n.variante)).size).toBe(NIVEAUX.length);
  });

  it('va du plus simple au plus savant', () => {
    expect(NIVEAUX.map((n) => n.id)).toEqual(['simple', 'curieux', 'expert']);
    expect(NIVEAUX.map((n) => n.variante)).toEqual(['petite', 'jeune', 'ado']);
  });

  it('fait l’aller-retour entre niveau et tranche', () => {
    for (const n of NIVEAUX) {
      expect(niveauDepuisTranche(n.tranche).id).toBe(n.id);
      expect(niveauDepuisAge(ageDuNiveau(n)).id).toBe(n.id);
    }
  });

  it('se retrouve par identifiant', () => {
    expect(niveauParId('curieux')?.tranche).toBe('6-8');
    expect(niveauParId('inconnu')).toBeUndefined();
  });
});

/*
  Le vrai enjeu de compatibilité : personne ne doit rien re-choisir. Les
  familles installées ont un âge en mémoire, et il doit se traduire tout seul.
*/
describe('familles déjà installées', () => {
  it.each([
    [3, 'simple'],
    [5, 'simple'],
    [6, 'curieux'],
    [8, 'curieux'],
    [9, 'expert'],
    [12, 'expert'],
  ])('l’âge %i devient le niveau %s', (age, attendu) => {
    expect(niveauDepuisAge(age).id).toBe(attendu);
  });

  it('supporte un âge aberrant sans laisser l’enfant sans niveau', () => {
    for (const age of [-4, 0, 99, 1000]) {
      expect(NIVEAUX).toContain(niveauDepuisAge(age));
    }
  });
});

describe('textes présentés à l’enfant', () => {
  it('nomme et décrit chaque niveau dans les deux langues', () => {
    for (const n of NIVEAUX) {
      for (const langue of ['fr', 'en'] as const) {
        expect(n.nom[langue]?.trim().length ?? 0, `nom ${n.id} ${langue}`).toBeGreaterThan(0);
        expect(n.texte[langue]?.trim().length ?? 0, `texte ${n.id} ${langue}`).toBeGreaterThan(0);
      }
    }
  });

  /*
    Ce que la présentation doit absolument dire, et qu'un enfant ne devinerait
    pas seul : que le choix vaut aussi pour le quizz, et qu'il est réversible.
  */
  it('annonce que le quizz suit le niveau, et qu’on peut en changer', () => {
    expect(presentationNiveaux.texte.fr).toMatch(/quizz?/i);
    expect(presentationNiveaux.texte.fr).toMatch(/changer/i);
    expect(presentationNiveaux.texte.en).toMatch(/quiz/i);
    expect(presentationNiveaux.texte.en).toMatch(/change/i);
  });
});
