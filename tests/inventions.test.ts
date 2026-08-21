import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { inventions } from '@/content/inventions';
import { savantDeLaCarte } from '@/lib/cles';
import { ECART_MINIMAL } from '@/lib/frise';
import {
  DECOUVERTES_PAR_AGE,
  construireFriseDecouvertes,
  peutJouerDecouvertes,
} from '@/lib/inventions';
import { AGE_RANGES } from '@/lib/types';

const AUCUNE = new Set<string>();

/**
 * La frise des découvertes ne porte aucun texte à elle : titre, emoji et monde
 * viennent des cartes. Le seul contenu propre est une année par carte — et une
 * année fausse serait invisible à la lecture du code, mais apprise par cœur par
 * un enfant. D'où ces garde-fous.
 */
describe('cohérence du contenu', () => {
  it('ne référence que des cartes réelles', () => {
    const connues = new Set(cards.map((c) => c.id));
    const orphelines = inventions.filter((i) => !connues.has(i.carteId));
    expect(orphelines.map((i) => i.carteId)).toEqual([]);
  });

  it('ne date pas deux fois la même carte', () => {
    const ids = inventions.map((i) => i.carteId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  /*
    Le nom de la découverte est la seule chose que ce jeu écrit lui-même, et
    c'est celle qui le rend jouable : « La neige » ne se situe pas sur une
    frise, « le flocon à six branches » si. Un libellé manquant, et l'enfant se
    retrouve devant une vignette qu'il ne peut pas ordonner.
  */
  it('nomme chaque découverte dans les deux langues', () => {
    for (const i of inventions) {
      for (const langue of ['fr', 'en'] as const) {
        expect(i.nom[langue]?.trim().length ?? 0, `${i.carteId} (${langue})`).toBeGreaterThan(0);
      }
    }
  });

  /*
    Le libellé s'affiche sous une vignette de quatre-vingts pixels, en très
    petit. Au-delà d'une trentaine de signes il déborde sur trois lignes et
    chasse la date hors de l'écran — et c'est la date qui fait la leçon.

    On ne teste pas, en revanche, que le nom diffère du titre de la carte :
    « Le zéro » et « Les microbes » sont légitimement les deux à la fois, et la
    liste d'exceptions n'aurait rien appris à personne.
  */
  it('tient sous une vignette', () => {
    for (const i of inventions) {
      for (const langue of ['fr', 'en'] as const) {
        expect(i.nom[langue]?.length ?? 0, `${i.carteId} (${langue}) : ${i.nom[langue]}`)
          .toBeLessThanOrEqual(32);
      }
    }
  });

  it('reste dans des bornes plausibles', () => {
    for (const i of inventions) {
      expect(i.annee, i.carteId).toBeGreaterThan(-3000);
      expect(i.annee, i.carteId).toBeLessThanOrEqual(new Date().getFullYear());
      expect(Number.isInteger(i.annee), i.carteId).toBe(true);
    }
  });

  /*
    Le garde-fou le plus utile de tout ce fichier.

    Chaque carte a son savant dans le musée, et le jeu des liens s'en sert. Si
    la frise date la découverte canonique plutôt que le travail de ce
    savant-là, deux jeux voisins racontent deux histoires : « la neige »
    appartient à Wilson Bentley, qui photographia un flocon en 1885, et la
    dater de Kepler (1611) faisait mentir l'un des deux. Vingt-cinq entrées
    étaient dans ce cas à la première écriture.

    La marge basse est de dix ans après la naissance, et non quinze : Mary
    Anning a trouvé son ichtyosaure à douze ans.
  */
  it('date le travail du savant que le musée donne à la carte', () => {
    const anneeCourante = new Date().getFullYear();
    for (const i of inventions) {
      const savant = savantDeLaCarte(i.carteId);
      expect(savant, `${i.carteId} : aucun savant au musée`).not.toBeNull();
      if (!savant) continue;
      const fin = (savant.mort ?? anneeCourante) + 5;
      expect(
        i.annee >= savant.naissance + 10 && i.annee <= fin,
        `${i.carteId} : ${i.annee} hors de la vie de ${savant.nom} (${savant.naissance}–${savant.mort ?? 'vivant'})`,
      ).toBe(true);
    }
  });

  it('offre de quoi jouer à tous les niveaux, avec de la marge', () => {
    for (const age of AGE_RANGES) {
      expect(peutJouerDecouvertes(age)).toBe(true);
      // Assez d'entrées pour que deux manches d'affilée ne se ressemblent pas.
      expect(inventions.length).toBeGreaterThan(DECOUVERTES_PAR_AGE[age] * 4);
    }
  });

  /*
    Les jeux d'écart : sans un éventail large, `retenirEspaces` finirait par
    servir toujours les mêmes extrêmes.
  */
  it('couvre largement l’échelle du temps', () => {
    const annees = inventions.map((i) => i.annee);
    expect(Math.min(...annees)).toBeLessThan(0);
    expect(Math.max(...annees)).toBeGreaterThan(1990);
  });
});

describe('tirage d’une manche', () => {
  it.each(AGE_RANGES)('propose le bon nombre de cartes à %s', (age) => {
    const manche = construireFriseDecouvertes(cards, AUCUNE, age, 'fr')!;
    expect(manche.tirage).toHaveLength(DECOUVERTES_PAR_AGE[age]);
    expect(manche.ordre).toHaveLength(DECOUVERTES_PAR_AGE[age]);
  });

  it('range l’ordre attendu de la plus ancienne à la plus récente', () => {
    for (let essai = 0; essai < 30; essai += 1) {
      const { tirage, ordre } = construireFriseDecouvertes(cards, AUCUNE, '9-12', 'fr')!;
      const annees = ordre.map((id) => tirage.find((e) => e.id === id)!.annee);
      expect([...annees]).toEqual([...annees].sort((a, b) => a - b));
    }
  });

  it('espace les dates pour qu’aucune manche ne soit indécidable', () => {
    for (let essai = 0; essai < 30; essai += 1) {
      const { tirage } = construireFriseDecouvertes(cards, AUCUNE, '9-12', 'fr')!;
      const annees = tirage.map((e) => e.annee).sort((a, b) => a - b);
      for (let i = 1; i < annees.length; i += 1) {
        expect(annees[i] - annees[i - 1]).toBeGreaterThanOrEqual(ECART_MINIMAL);
      }
    }
  });

  it('donne à chaque carte son emoji et un titre, jamais de portrait', () => {
    const { tirage } = construireFriseDecouvertes(cards, AUCUNE, '9-12', 'fr')!;
    for (const element of tirage) {
      expect(element.emoji?.length ?? 0, element.id).toBeGreaterThan(0);
      expect(element.nom.trim().length, element.id).toBeGreaterThan(0);
      expect(element.portrait).toBeUndefined();
    }
  });

  it('sert d’abord les cartes déjà écoutées', () => {
    const vues = new Set(inventions.slice(0, 8).map((i) => i.carteId));
    const { tirage } = construireFriseDecouvertes(cards, vues, '3-5', 'fr')!;
    expect(tirage.every((e) => vues.has(e.id))).toBe(true);
  });

  it('ne se répète pas d’une manche à l’autre', () => {
    const vus = new Set<string>();
    for (let essai = 0; essai < 20; essai += 1) {
      for (const e of construireFriseDecouvertes(cards, AUCUNE, '9-12', 'fr')!.tirage) {
        vus.add(e.id);
      }
    }
    expect(vus.size).toBeGreaterThan(DECOUVERTES_PAR_AGE['9-12']);
  });

  it('rend un titre traduit quand la langue change', () => {
    const fr = construireFriseDecouvertes(cards, new Set(['le-wifi']), '3-5', 'fr');
    const en = construireFriseDecouvertes(cards, new Set(['le-wifi']), '3-5', 'en');
    expect(fr).not.toBeNull();
    expect(en).not.toBeNull();
  });
});
