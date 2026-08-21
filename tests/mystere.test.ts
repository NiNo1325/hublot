import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { savantsPrisonniers } from '@/content/savants-cartes';
import {
  construireEnigme,
  epoqueDe,
  peutJouer,
  pointsPourIndices,
  PORTRAITS_PAR_AGE,
} from '@/lib/mystere';
import { AGE_RANGES } from '@/lib/types';

const AUCUN = new Set<string>();
const DELIVRES = ['archimede', 'isaac-newton', 'marie-curie', 'charles-darwin'];

/**
 * Le savant mystère se joue sur des savants que l'enfant a croisés : à défaut,
 * il devinerait au hasard. Et si tous les leurres venaient d'une autre époque,
 * le premier indice finirait la partie à lui seul — ce qui viderait les deux
 * autres de leur intérêt.
 */
describe('le savant mystère', () => {
  it('ne se lance pas sans savant connu', () => {
    expect(peutJouer(AUCUN, [])).toBe(false);
    expect(construireEnigme(cards, AUCUN, [], '6-8', 'fr')).toBeNull();
  });

  it('se lance dès qu’une carte a été écoutée', () => {
    const vues = new Set(['les-volcans']);
    expect(peutJouer(vues, [])).toBe(true);
    expect(construireEnigme(cards, vues, [], '6-8', 'fr')).not.toBeNull();
  });

  it.each(AGE_RANGES)('propose le bon nombre de portraits à %s', (age) => {
    const enigme = construireEnigme(cards, AUCUN, DELIVRES, age, 'fr');
    expect(enigme?.portraits).toHaveLength(PORTRAITS_PAR_AGE[age]);
  });

  /*
    Le mystère se tirait « délivrés d'abord, puis entendus », et l'on prenait le
    premier. Avec un seul savant délivré, le mélange d'une liste d'un élément
    rend toujours le même : la partie proposait Euclide, encore Euclide, et
    toujours Euclide. Et même avec trois délivrés, les savants seulement
    entendus n'étaient jamais tirés.
  */
  it('ne propose pas toujours le même savant quand un seul est délivré', () => {
    const vues = new Set(['les-volcans', 'les-marees', 'le-cerveau', 'les-etoiles']);
    const tires = new Set<string>();
    for (let essai = 0; essai < 60; essai += 1) {
      tires.add(construireEnigme(cards, vues, ['euclide'], '9-12', 'fr')!.savantId);
    }
    expect(tires.size).toBeGreaterThan(1);
  });

  it('peut tirer un savant seulement entendu, pas seulement les délivrés', () => {
    const vues = new Set(['les-volcans', 'les-marees', 'le-cerveau', 'les-etoiles']);
    const tires = new Set<string>();
    for (let essai = 0; essai < 60; essai += 1) {
      tires.add(construireEnigme(cards, vues, ['euclide'], '9-12', 'fr')!.savantId);
    }
    expect([...tires].some((id) => id !== 'euclide')).toBe(true);
  });

  it('cache le mystère parmi les portraits', () => {
    for (let essai = 0; essai < 30; essai += 1) {
      const enigme = construireEnigme(cards, AUCUN, DELIVRES, '9-12', 'fr')!;
      expect(enigme.portraits.map((p) => p.id)).toContain(enigme.savantId);
    }
  });

  it('ne propose jamais deux fois le même portrait', () => {
    for (let essai = 0; essai < 30; essai += 1) {
      const enigme = construireEnigme(cards, AUCUN, DELIVRES, '9-12', 'fr')!;
      const ids = enigme.portraits.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('prend le mystère chez les savants connus', () => {
    for (let essai = 0; essai < 30; essai += 1) {
      const enigme = construireEnigme(cards, AUCUN, DELIVRES, '6-8', 'fr')!;
      expect(DELIVRES).toContain(enigme.savantId);
    }
  });

  /*
    Un leurre de la même époque au moins : sans lui, l'indice d'époque
    trancherait seul et les deux suivants ne serviraient à rien.
  */
  it('glisse un leurre de la même époque', () => {
    for (let essai = 0; essai < 30; essai += 1) {
      const enigme = construireEnigme(cards, AUCUN, DELIVRES, '9-12', 'fr')!;
      const mystere = savantsPrisonniers.find((s) => s.id === enigme.savantId)!;
      const memeEpoque = enigme.portraits.filter((p) => {
        const s = savantsPrisonniers.find((x) => x.id === p.id)!;
        return s.id !== mystere.id && epoqueDe(s) === epoqueDe(mystere);
      });
      expect(memeEpoque.length, mystere.nom).toBeGreaterThanOrEqual(1);
    }
  });

  it('donne trois indices, du plus large au plus précis', () => {
    const enigme = construireEnigme(cards, AUCUN, DELIVRES, '6-8', 'fr')!;
    expect(enigme.indices.map((i) => i.genre)).toEqual(['epoque', 'monde', 'decouverte']);
    expect(enigme.indices[0].epoque).toBeDefined();
    expect(enigme.indices[1].texte.length).toBeGreaterThan(2);
    expect(enigme.indices[2].carteId).toBeDefined();
  });

  it('traduit le monde et la découverte', () => {
    const fr = construireEnigme(cards, new Set(['les-volcans']), [], '6-8', 'fr')!;
    const en = construireEnigme(cards, new Set(['les-volcans']), [], '6-8', 'en')!;
    expect(fr.indices[2].texte).not.toBe(en.indices[2].texte);
  });

  /* Trouver tôt doit rapporter plus, sinon autant attendre les trois indices. */
  it('récompense la trouvaille rapide', () => {
    expect(pointsPourIndices(1)).toBe(3);
    expect(pointsPourIndices(2)).toBe(2);
    expect(pointsPourIndices(3)).toBe(1);
    expect(pointsPourIndices(9)).toBe(1);
  });

  /*
    Deviner juste sans comprendre pourquoi ne laisse rien. Une fois trouvé, le
    jeu doit dire ce que les trois indices désignaient : l'époque, le monde et
    la carte pointaient tous vers une trouvaille précise.
  */
  it('dit toujours ce que le savant a trouvé', () => {
    for (let essai = 0; essai < 40; essai += 1) {
      const enigme = construireEnigme(cards, AUCUN, DELIVRES, '9-12', 'fr')!;
      expect(enigme.decouverte.trim().length, enigme.savantId).toBeGreaterThan(0);
    }
  });

  it('date la trouvaille quand le catalogue la connaît', () => {
    const enigme = construireEnigme(cards, new Set(['le-wifi']), [], '6-8', 'fr')!;
    expect(enigme.annee).not.toBeNull();
    expect(enigme.decouverte).toBe('Le wifi');
  });

  it('accepte une trouvaille sans date, sans rien casser', () => {
    // « Pourquoi l'oignon fait pleurer » n'a ni découvreur daté ni nom propre.
    const enigme = construireEnigme(cards, new Set(['pourquoi-loignon-fait-pleurer']), [], '3-5', 'fr');
    expect(enigme).not.toBeNull();
    expect(enigme!.decouverte.trim().length).toBeGreaterThan(0);
  });

});