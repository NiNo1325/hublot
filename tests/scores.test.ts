import { describe, expect, it } from 'vitest';
import { ajouterScore, ecrireScores, estUnRecord, lireScores, PODIUM } from '@/lib/scores';

/**
 * Le podium vient du stockage local, que rien ne garantit. Ces tests fixent ce
 * qui doit survivre à une valeur abîmée : un écran de jeu ne plante pas parce
 * qu'une chaîne est bizarre.
 */
describe('lecture du podium', () => {
  it('rend une liste vide quand rien n’est stocké', () => {
    expect(lireScores(null)).toEqual([]);
    expect(lireScores('')).toEqual([]);
  });

  it('trie du meilleur au moins bon', () => {
    expect(lireScores('4,9,7')).toEqual([9, 7, 4]);
  });

  it('écarte ce qui n’est pas un entier positif', () => {
    expect(lireScores('5,abc,-2,0,3')).toEqual([5, 3]);
  });

  it('ne garde que le podium', () => {
    expect(lireScores('1,2,3,4,5')).toHaveLength(PODIUM);
    expect(lireScores('1,2,3,4,5')).toEqual([5, 4, 3]);
  });

  it('fait l’aller-retour avec l’écriture', () => {
    const scores = [9, 7, 4];
    expect(lireScores(ecrireScores(scores))).toEqual(scores);
  });
});

describe('ajout d’un score', () => {
  it('insère à la bonne place', () => {
    expect(ajouterScore([9, 4], 7)).toEqual([9, 7, 4]);
  });

  it('évince le plus faible quand le podium est plein', () => {
    expect(ajouterScore([9, 7, 4], 8)).toEqual([9, 8, 7]);
  });

  it('laisse le podium intact si le score est trop faible', () => {
    expect(ajouterScore([9, 7, 4], 2)).toEqual([9, 7, 4]);
  });

  /*
    Une partie sans aucune bonne réponse n'est pas un résultat : la voir
    s'installer au tableau découragerait l'enfant qu'on veut voir rejouer.
  */
  it('refuse un score nul', () => {
    expect(ajouterScore([], 0)).toEqual([]);
    expect(ajouterScore([5], 0)).toEqual([5]);
  });
});

describe('record', () => {
  it('en est un tant que le podium n’est pas plein', () => {
    expect(estUnRecord([], 1)).toBe(true);
    expect(estUnRecord([9, 7], 1)).toBe(true);
  });

  it('en est un s’il bat le dernier du podium', () => {
    expect(estUnRecord([9, 7, 4], 5)).toBe(true);
  });

  it('n’en est pas un s’il n’atteint pas le podium', () => {
    expect(estUnRecord([9, 7, 4], 4)).toBe(false);
    expect(estUnRecord([9, 7, 4], 2)).toBe(false);
  });

  it('n’en est jamais un à zéro', () => {
    expect(estUnRecord([], 0)).toBe(false);
  });
});
