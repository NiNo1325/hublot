import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  EPOQUES,
  clesAGagner,
  clesDepensees,
  ecrireLiberes,
  lireLiberes,
  peutLiberer,
  prixSavant,
  savantDeLaCarte,
  savantsDeLEpoque,
  soldeCles,
} from '@/lib/cles';
import { savantsPrisonniers } from '@/content/savants-cartes';
import { cards } from '@/content/cards';
import { questionsDe } from '@/content/quiz';
import { AGE_RANGES, LOCALES } from '@/lib/types';

const archimede = savantsPrisonniers.find((s) => s.id === 'archimede')!;
const tazieff = savantsPrisonniers.find((s) => s.id === 'haroun-tazieff')!;

/**
 * Les clés sont le fil conducteur : une bonne réponse, une clé ; une cellule
 * ouverte, un savant délivré. Si le compte se dérègle, l'enfant se retrouve
 * devant une porte qui refuse de s'ouvrir sans qu'il comprenne pourquoi — et
 * c'est tout le jeu qui perd son sens.
 */
describe('prix d’une cellule', () => {
  it('vaut le nombre de cartes tenues', () => {
    expect(prixSavant(archimede)).toBe(5);
    expect(prixSavant(tazieff)).toBe(1);
  });

  /*
    La somme des prix vaut exactement le nombre de cartes : libérer tout le
    monde, c'est avoir répondu juste à chaque question au moins une fois.
  */
  it('coûte au total ce que le catalogue peut donner', () => {
    const total = savantsPrisonniers.reduce((n, s) => n + prixSavant(s), 0);
    expect(total).toBe(cards.length);
  });
});

describe('gain d’une bonne réponse', () => {
  it('donne une clé pour une carte neuve', () => {
    expect(clesAGagner('les-volcans', new Set())).toBe(1);
  });

  /*
    Sans cette règle, le Défi chrono — qui se rejoue sans fin — ouvrirait toutes
    les cellules sans qu'on apprenne une carte de plus.
  */
  it('ne donne rien pour une carte déjà comprise', () => {
    expect(clesAGagner('les-volcans', new Set(['les-volcans']))).toBe(0);
  });
});

describe('dépenses', () => {
  it('somme le prix des savants délivrés', () => {
    expect(clesDepensees([archimede.id, tazieff.id])).toBe(6);
  });

  /* Un identifiant inconnu — savant retiré du catalogue — ne débite rien. */
  it('ignore un savant disparu', () => {
    expect(clesDepensees(['fantome'])).toBe(0);
  });

  it('ne descend jamais sous zéro', () => {
    expect(soldeCles(3, 10)).toBe(0);
  });
});

describe('libération', () => {
  it('autorise quand le trousseau suffit', () => {
    expect(peutLiberer(5, 0, [], archimede)).toBe(true);
    expect(peutLiberer(9, 4, [], archimede)).toBe(true);
  });

  it('refuse quand il manque une clé', () => {
    expect(peutLiberer(4, 0, [], archimede)).toBe(false);
  });

  it('refuse un savant déjà délivré', () => {
    expect(peutLiberer(1000, 0, [archimede.id], archimede)).toBe(false);
  });
});

describe('liste des délivrés', () => {
  it('lit une liste vide sans broncher', () => {
    expect(lireLiberes(null)).toEqual([]);
    expect(lireLiberes('')).toEqual([]);
  });

  it('écarte les doublons et les vides', () => {
    expect(lireLiberes('archimede,,archimede, euclide ')).toEqual(['archimede', 'euclide']);
  });

  it('fait l’aller-retour', () => {
    expect(lireLiberes(ecrireLiberes(['archimede', 'euclide']))).toEqual([
      'archimede',
      'euclide',
    ]);
  });
});

describe('le mur par époques', () => {
  /*
    Le découpage doit partitionner : un savant oublié par toutes les époques
    n'apparaîtrait sur aucun mur et resterait enfermé pour toujours.
  */
  it('place chaque savant dans une époque et une seule', () => {
    const places = EPOQUES.flatMap((e) => savantsDeLEpoque(e).map((s) => s.id));
    expect(places).toHaveLength(savantsPrisonniers.length);
    expect(new Set(places).size).toBe(savantsPrisonniers.length);
  });

  it('range chaque époque du plus ancien au plus récent', () => {
    for (const e of EPOQUES) {
      const annees = savantsDeLEpoque(e).map((s) => s.naissance);
      expect(annees, e.id).toEqual([...annees].sort((a, b) => a - b));
    }
  });
});

describe('savant d’une carte', () => {
  it('retrouve celui qui tient la carte', () => {
    expect(savantDeLaCarte('les-leviers')?.id).toBe('archimede');
  });

  it('rend null pour une carte inconnue', () => {
    expect(savantDeLaCarte('carte-fantome')).toBeNull();
  });

  /* Toute carte doit avoir son savant : sinon elle ne délivre personne. */
  it('trouve un savant pour chaque carte du catalogue', () => {
    for (const carte of cards) {
      expect(savantDeLaCarte(carte.id), carte.id).not.toBeNull();
    }
  });
});

/**
 * Le mur doit rester franchissable, à chaque niveau et dans chaque langue.
 *
 * Trois règles se rencontrent ici, et le budget qu'elles dessinent est juste à
 * la clé près : une clé se gagne en maîtrisant une carte, **la première fois
 * seulement** ; le prix d'un savant est le nombre de cartes qu'il tient, donc
 * la somme des prix vaut exactement le nombre de cartes ; et une carte n'est
 * interrogeable que si elle porte une question **à l'âge de l'enfant**.
 *
 * Une seule carte sans question à un niveau retire donc une clé au total
 * gagnable sans rien retirer au prix à payer, et le dernier savant reste
 * enfermé pour toujours — sans que rien, à l'écran, n'explique pourquoi. C'est
 * la panne la plus silencieuse de l'application, et elle s'introduirait en
 * ajoutant une carte sans écrire ses trois questions.
 *
 * `npx tsx scripts/economie-cles.mjs` en donne le détail chiffré.
 */
describe('économie des clés', () => {
  const prixTotal = savantsPrisonniers.reduce((n, s) => n + prixSavant(s), 0);

  it('fait payer exactement le catalogue', () => {
    expect(prixTotal).toBe(cards.length);
  });

  it.each(
    LOCALES.flatMap((locale) =>
      AGE_RANGES.map((age) => [`${locale} — ${age}`, locale, age] as const),
    ),
  )('%s permet de gagner de quoi tout délivrer', (_libelle, locale, age) => {
    const muettes = cards.filter((c) => questionsDe(c.id, age, locale).length === 0);
    expect(
      muettes.map((c) => c.id),
      'ces cartes n’ont pas de question à cet âge : leur clé est ingagnable',
    ).toEqual([]);
    expect(cards.length - muettes.length).toBeGreaterThanOrEqual(prixTotal);
  });

  /*
    Les clés sont fongibles, mais un savant dont toutes les cartes seraient
    muettes resterait inatteignable même avec un trésor : l'enfant paierait son
    prix avec les clés des autres, et il en manquerait autant à la fin. C'est
    une panne d'un autre genre que le solde, d'où un test séparé.
  */
  it.each(
    LOCALES.flatMap((locale) =>
      AGE_RANGES.map((age) => [`${locale} — ${age}`, locale, age] as const),
    ),
  )('%s laisse chaque savant atteignable', (_libelle, locale, age) => {
    const muets = savantsPrisonniers.filter((s) =>
      s.cartes.every((c) => questionsDe(c.id, age, locale).length === 0),
    );
    expect(muets.map((s) => s.id)).toEqual([]);
  });
});

describe('portraits', () => {
  /*
    Une cellule sans visage ne récompenserait plus rien à l'ouverture : la
    découverte du portrait EST la récompense. Ce test échoue dès qu'un savant
    est ajouté sans son illustration, ou qu'un slug est renommé d'un côté sans
    l'autre.
  */
  it('donne un portrait à chaque savant', () => {
    for (const s of savantsPrisonniers) {
      const chemin = join('public', 'images', 'wall-of-fame', `${s.id}.webp`);
      expect(existsSync(chemin), s.nom).toBe(true);
    }
  });
});
