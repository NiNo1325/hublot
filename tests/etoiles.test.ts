import { describe, expect, it } from 'vitest';
import { RANGS, etoilesAGagner, rangDepuisEtoiles, lireEtoiles } from '@/lib/etoiles';
import { localise } from '@/lib/i18n/localise';
import { cards } from '@/content/cards';

describe('rangDepuisEtoiles', () => {
  it('donne le premier rang à 0 et sous le premier palier', () => {
    expect(rangDepuisEtoiles(0).rang.index).toBe(0);
    expect(rangDepuisEtoiles(RANGS[1].seuil - 1).rang.index).toBe(0);
    expect(rangDepuisEtoiles(0).rangProchain?.index).toBe(1);
  });

  it('monte de rang pile au seuil', () => {
    for (const rang of RANGS.slice(1)) {
      expect(rangDepuisEtoiles(rang.seuil - 1).rang.index).toBe(rang.index - 1);
      expect(rangDepuisEtoiles(rang.seuil).rang.index).toBe(rang.index);
    }
  });

  it('plafonne au dernier rang, sans rang suivant', () => {
    const dernier = RANGS[RANGS.length - 1];
    expect(rangDepuisEtoiles(dernier.seuil).rang.nom).toEqual(dernier.nom);
    expect(rangDepuisEtoiles(dernier.seuil + 1000).rang.nom).toEqual(dernier.nom);
    expect(rangDepuisEtoiles(dernier.seuil).rangProchain).toBeNull();
  });

  it('borne un total négatif au premier rang', () => {
    expect(rangDepuisEtoiles(-5).rang.index).toBe(0);
  });
});

describe('échelle des rangs', () => {
  it('est strictement croissante et part de zéro', () => {
    expect(RANGS[0].seuil).toBe(0);
    for (let i = 1; i < RANGS.length; i += 1) {
      expect(RANGS[i].seuil).toBeGreaterThan(RANGS[i - 1].seuil);
    }
  });

  /*
    Le garde-fou du calibrage. Les seuils sont posés sur le catalogue : une
    carte vaut une étoile, la première fois qu'on répond juste à sa question,
    donc il y a exactement autant d'étoiles à gagner que de cartes. Si le
    contenu grandit sans qu'on y revienne, les derniers rangs deviennent
    triviaux et l'échelle ne récompense plus rien : ce test échoue alors, et
    rappelle qu'il faut trancher plutôt que laisser filer.
  */
  it('tient entièrement dans ce qui est gagnable', () => {
    for (const rang of RANGS) {
      expect(rang.seuil, localise(rang.nom, 'fr')).toBeLessThanOrEqual(cards.length);
    }
  });

  /*
    Le dernier rang tombe avant la dernière carte, exprès : deux buts qui
    s'achèvent sur le même geste s'annulent l'un l'autre. Lumi atteint sa forme
    finale un peu avant que le ciel ne soit complet, ce qui laisse une raison
    de finir les dernières cartes.
  */
  it('couronne Lumi avant que le ciel ne soit plein', () => {
    const dernier = RANGS[RANGS.length - 1];
    expect(dernier.seuil).toBeLessThan(cards.length);
    expect(dernier.seuil).toBeGreaterThan(cards.length * 0.75);
  });
});

describe('gain d’une bonne réponse', () => {
  it('donne une étoile pour une carte neuve', () => {
    expect(etoilesAGagner('les-volcans', new Set())).toBe(1);
  });

  /*
    La règle qui empêche le rang de mesurer la répétition : refaire une
    question déjà réussie ne rapporte plus rien. Sans elle, le Défi chrono —
    qui se rejoue sans fin — permettrait d'atteindre le dernier rang sans
    découvrir une seule carte de plus.
  */
  it('ne donne rien pour une carte déjà réussie', () => {
    expect(etoilesAGagner('les-volcans', new Set(['les-volcans']))).toBe(0);
  });
});

describe('lireEtoiles', () => {
  it('lit un entier valide, sinon 0', () => {
    expect(lireEtoiles('42')).toBe(42);
    expect(lireEtoiles(null)).toBe(0);
    expect(lireEtoiles('-5')).toBe(0);
    expect(lireEtoiles('abc')).toBe(0);
    expect(lireEtoiles('3.9')).toBe(3);
  });
});
