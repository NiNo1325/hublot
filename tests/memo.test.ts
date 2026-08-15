import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { construirePlateau, PAIRES_PAR_AGE, sApparient } from '@/lib/memo';
import { AGE_RANGES } from '@/lib/types';

/**
 * Le plateau est tiré au hasard : ces tests fixent ce qui doit rester vrai à
 * chaque tirage. Un plateau où une tuile n'aurait pas sa jumelle rendrait la
 * partie impossible à finir, sans que rien ne le signale.
 */
describe('plateau du Mémo', () => {
  it.each(AGE_RANGES)('a le bon nombre de tuiles à %s', (age) => {
    const plateau = construirePlateau(cards, age, 'images', 'fr');
    expect(plateau).toHaveLength(PAIRES_PAR_AGE[age] * 2);
  });

  it.each(AGE_RANGES)('grandit avec l’âge (%s)', (age) => {
    expect(PAIRES_PAR_AGE[age]).toBeGreaterThanOrEqual(4);
  });

  it('donne exactement deux tuiles par carte', () => {
    const plateau = construirePlateau(cards, '9-12', 'cartes', 'fr');
    const parPaire = new Map<string, number>();
    for (const tuile of plateau) parPaire.set(tuile.paire, (parPaire.get(tuile.paire) ?? 0) + 1);
    expect([...parPaire.values()].every((n) => n === 2)).toBe(true);
  });

  it('donne un identifiant unique à chaque tuile', () => {
    const plateau = construirePlateau(cards, '9-12', 'images', 'fr');
    expect(new Set(plateau.map((t) => t.id)).size).toBe(plateau.length);
  });

  it('n’utilise jamais deux fois la même carte', () => {
    const plateau = construirePlateau(cards, '9-12', 'images', 'fr');
    expect(new Set(plateau.map((t) => t.paire)).size).toBe(PAIRES_PAR_AGE['9-12']);
  });

  /* La variante « images » ne demande aucune lecture : c'est ce qui l'ouvre aux 3-5. */
  it('n’affiche que des emojis en variante images', () => {
    const plateau = construirePlateau(cards, '3-5', 'images', 'fr');
    expect(plateau.every((t) => t.genre === 'emoji')).toBe(true);
  });

  it('apparie un emoji et un titre en variante cartes', () => {
    const plateau = construirePlateau(cards, '9-12', 'cartes', 'fr');
    const emojis = plateau.filter((t) => t.genre === 'emoji');
    const titres = plateau.filter((t) => t.genre === 'titre');
    expect(emojis).toHaveLength(PAIRES_PAR_AGE['9-12']);
    expect(titres).toHaveLength(PAIRES_PAR_AGE['9-12']);
    expect(titres.every((t) => t.face.trim().length > 0)).toBe(true);
  });

  it('suit la langue choisie pour les titres', () => {
    const fr = construirePlateau(cards, '9-12', 'cartes', 'fr');
    const en = construirePlateau(cards, '9-12', 'cartes', 'en');
    const titreFr = fr.find((t) => t.genre === 'titre')!;
    const memeCarteEn = en.find((t) => t.paire === titreFr.paire && t.genre === 'titre');
    if (memeCarteEn) expect(memeCarteEn.face).not.toBe(titreFr.face);
  });

  it('reste jouable si le catalogue est plus petit que le plateau', () => {
    const plateau = construirePlateau(cards.slice(0, 2), '9-12', 'images', 'fr');
    expect(plateau).toHaveLength(4);
  });
});

describe('appariement', () => {
  it('apparie deux tuiles de la même carte', () => {
    const plateau = construirePlateau(cards, '6-8', 'cartes', 'fr');
    const [a] = plateau;
    const jumelle = plateau.find((t) => t.paire === a.paire && t.id !== a.id)!;
    expect(sApparient(a, jumelle)).toBe(true);
  });

  it('n’apparie pas une tuile avec elle-même', () => {
    const [a] = construirePlateau(cards, '6-8', 'images', 'fr');
    expect(sApparient(a, a)).toBe(false);
  });

  it('n’apparie pas deux cartes différentes', () => {
    const plateau = construirePlateau(cards, '6-8', 'images', 'fr');
    const a = plateau[0];
    const autre = plateau.find((t) => t.paire !== a.paire)!;
    expect(sApparient(a, autre)).toBe(false);
  });
});
