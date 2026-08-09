import { describe, expect, it } from 'vitest';
import { ordreParcours, prochaineEtape } from '@/lib/parcours';
import { cards } from '@/content/cards';
import { domains } from '@/content/domains';

describe('ordreParcours', () => {
  const ordre = ordreParcours(cards, domains);

  it('contient toutes les cartes, une seule fois', () => {
    expect(ordre).toHaveLength(cards.length);
    expect(new Set(ordre.map((c) => c.id)).size).toBe(cards.length);
  });

  it('regroupe les cartes dans l’ordre des domaines', () => {
    const rangDomaine = ordre.map((c) => domains.findIndex((d) => d.id === c.domainId));
    // La suite des index de domaine ne doit jamais redescendre.
    for (let i = 1; i < rangDomaine.length; i += 1) {
      expect(rangDomaine[i]).toBeGreaterThanOrEqual(rangDomaine[i - 1]);
    }
  });

  it('la première carte appartient au premier domaine', () => {
    expect(ordre[0].domainId).toBe(domains[0].id);
  });

  it('conserve l’ordre d’origine des cartes dans un domaine', () => {
    const premierDomaine = domains[0].id;
    const attendu = cards.filter((c) => c.domainId === premierDomaine).map((c) => c.id);
    const obtenu = ordre.filter((c) => c.domainId === premierDomaine).map((c) => c.id);
    expect(obtenu).toEqual(attendu);
  });
});

describe('prochaineEtape', () => {
  const ordre = ordreParcours(cards, domains);

  it('la première carte quand rien n’est vu', () => {
    expect(prochaineEtape(ordre, new Set())?.id).toBe(ordre[0].id);
  });

  it('la première carte non vue', () => {
    const vues = new Set([ordre[0].id, ordre[1].id]);
    expect(prochaineEtape(ordre, vues)?.id).toBe(ordre[2].id);
  });

  it('null quand tout est vu', () => {
    const toutes = new Set(ordre.map((c) => c.id));
    expect(prochaineEtape(ordre, toutes)).toBeNull();
  });
});
