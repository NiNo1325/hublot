import { describe, expect, it } from 'vitest';
import { ecrireVues, lireVues } from '@/components/cards/useCartesVues';

/**
 * La progression de l'enfant tient dans une seule chaîne de `localStorage`.
 * Une sérialisation qui perdrait ou dupliquerait un identifiant fausserait à
 * la fois l'extinction des hublots et le choix des questions du quizz — sans
 * rien casser de visible, ce qui la rendrait longue à repérer.
 */
describe('sérialisation des cartes vues', () => {
  it('lit une clé absente comme un ensemble vide', () => {
    expect(lireVues('').size).toBe(0);
  });

  it('conserve les identifiants sur un aller-retour', () => {
    const vues = new Set(['les-marees', 'le-wifi', 'levolution']);
    expect(lireVues(ecrireVues(vues))).toEqual(vues);
  });

  /*
    Le stockage étant réécrit à chaque carte ouverte, un doublon s'accumulerait
    silencieusement et gonflerait la chaîne sans fin.
  */
  it('ne garde qu’une occurrence par carte', () => {
    expect(lireVues('les-os,les-os,le-cerveau').size).toBe(2);
  });

  /*
    Le repère « tout le catalogue est exploré » compare cette taille au nombre
    de cartes : une chaîne à virgules parasites la ferait mentir.
  */
  it('ignore les séparateurs vides', () => {
    expect(lireVues(',les-atomes,,le-sol-est-vivant,').size).toBe(2);
  });
});
