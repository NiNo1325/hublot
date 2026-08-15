import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { savants } from '@/content/savants';
import { construirePlateau, PAIRES_CARTES_MAX, PAIRES_PAR_AGE, sApparient } from '@/lib/memo';
import { AGE_RANGES } from '@/lib/types';

/**
 * Le plateau est tiré au hasard : ces tests fixent ce qui doit rester vrai à
 * chaque tirage. Un plateau où une tuile n'aurait pas sa jumelle rendrait la
 * partie impossible à finir, sans que rien ne le signale.
 */
describe('plateau des savants', () => {
  it.each(AGE_RANGES)('a le bon nombre de tuiles à %s', (age) => {
    expect(construirePlateau(cards, age, 'savants', 'fr')).toHaveLength(
      PAIRES_PAR_AGE[age] * 2,
    );
  });

  it('ne montre que des portraits, donc rien à lire', () => {
    const plateau = construirePlateau(cards, '3-5', 'savants', 'fr');
    expect(plateau.every((t) => t.genre === 'portrait')).toBe(true);
  });

  /* Le nom est ce qu'on annonce et prononce à l'appariement : il est obligatoire. */
  it('porte le nom du savant sur chaque tuile', () => {
    const plateau = construirePlateau(cards, '9-12', 'savants', 'fr');
    expect(plateau.every((t) => (t.nom ?? '').length > 0)).toBe(true);
  });

  it('pointe vers un portrait qui existe dans le catalogue', () => {
    const connus = new Set(savants.map((s) => `/images/wall-of-fame/${s.id}.webp`));
    const plateau = construirePlateau(cards, '9-12', 'savants', 'fr');
    expect(plateau.every((t) => connus.has(t.face))).toBe(true);
  });

  it('donne exactement deux tuiles par savant', () => {
    const plateau = construirePlateau(cards, '9-12', 'savants', 'fr');
    const parPaire = new Map<string, number>();
    for (const t of plateau) parPaire.set(t.paire, (parPaire.get(t.paire) ?? 0) + 1);
    expect([...parPaire.values()].every((n) => n === 2)).toBe(true);
    expect(parPaire.size).toBe(PAIRES_PAR_AGE['9-12']);
  });

  it('donne un identifiant unique à chaque tuile', () => {
    const plateau = construirePlateau(cards, '9-12', 'savants', 'fr');
    expect(new Set(plateau.map((t) => t.id)).size).toBe(plateau.length);
  });
});

describe('plateau des cartes', () => {
  it('apparie un emoji et un titre', () => {
    const plateau = construirePlateau(cards, '6-8', 'cartes', 'fr');
    expect(plateau.filter((t) => t.genre === 'emoji')).toHaveLength(plateau.length / 2);
    expect(plateau.filter((t) => t.genre === 'titre')).toHaveLength(plateau.length / 2);
    expect(plateau.filter((t) => t.genre === 'titre').every((t) => t.face.trim().length > 0)).toBe(
      true,
    );
  });

  /*
    Les tuiles portent du texte, donc s'affichent larges et sur deux colonnes :
    au-delà de six paires, le plateau ne tient plus à l'écran.
  */
  it('plafonne à six paires même chez les grands', () => {
    expect(construirePlateau(cards, '9-12', 'cartes', 'fr')).toHaveLength(
      PAIRES_CARTES_MAX * 2,
    );
  });

  /* Le titre affiché est le plus court des trois, quel que soit l'âge du joueur. */
  it('affiche toujours le titre du registre le plus jeune', () => {
    const plateau = construirePlateau(cards, '9-12', 'cartes', 'fr');
    const titres = new Set(cards.map((c) => c.content.fr!.title['3-5']));
    expect(plateau.filter((t) => t.genre === 'titre').every((t) => titres.has(t.face))).toBe(true);
  });

  it('suit la langue choisie', () => {
    const fr = construirePlateau(cards, '9-12', 'cartes', 'fr');
    const titresEn = new Set(cards.map((c) => c.content.en!.title['3-5']));
    const titreFr = fr.find((t) => t.genre === 'titre')!;
    expect(titresEn.has(titreFr.face)).toBe(false);
  });

  /* Un enfant qui n'a écouté que trois cartes doit pouvoir jouer quand même. */
  it('reste jouable avec très peu de cartes', () => {
    expect(construirePlateau(cards.slice(0, 2), '9-12', 'cartes', 'fr')).toHaveLength(4);
  });
});

describe('appariement', () => {
  it('apparie deux tuiles de la même paire', () => {
    const plateau = construirePlateau(cards, '6-8', 'cartes', 'fr');
    const [a] = plateau;
    const jumelle = plateau.find((t) => t.paire === a.paire && t.id !== a.id)!;
    expect(sApparient(a, jumelle)).toBe(true);
  });

  it('n’apparie pas une tuile avec elle-même', () => {
    const [a] = construirePlateau(cards, '6-8', 'savants', 'fr');
    expect(sApparient(a, a)).toBe(false);
  });

  it('n’apparie pas deux paires différentes', () => {
    const plateau = construirePlateau(cards, '6-8', 'savants', 'fr');
    const a = plateau[0];
    const autre = plateau.find((t) => t.paire !== a.paire)!;
    expect(sApparient(a, autre)).toBe(false);
  });
});
