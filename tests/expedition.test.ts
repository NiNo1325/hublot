import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { expeditions } from '@/content/expeditions';
import { expeditionDuJour, indexDuJour, jourStocke } from '@/lib/expedition';

const idsCartes = new Set(cards.map((c) => c.id));

/**
 * L'expédition du jour est la seule chose de l'application qui change toute
 * seule d'un jour sur l'autre. C'est donc elle qui fait revenir — et une
 * expédition qui pointerait sur une carte disparue s'ouvrirait sur du vide, au
 * moment précis où l'enfant a décidé de faire confiance à la proposition.
 */
describe('catalogue des expéditions', () => {
  it('ne pointe que sur des cartes existantes', () => {
    for (const e of expeditions) {
      for (const id of e.cartes) {
        expect(idsCartes.has(id), `${e.id} → ${id}`).toBe(true);
      }
    }
  });

  it('compte trois cartes distinctes par expédition', () => {
    for (const e of expeditions) {
      expect(e.cartes, e.id).toHaveLength(3);
      expect(new Set(e.cartes).size, e.id).toBe(3);
    }
  });

  it('n’a pas d’identifiant en double', () => {
    const ids = expeditions.map((e) => e.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe('expédition du jour', () => {
  it('rend la même expédition pour un même jour', () => {
    const vues = new Set<string>();
    expect(expeditionDuJour(100, vues).id).toBe(expeditionDuJour(100, vues).id);
  });

  it('change d’un jour à l’autre', () => {
    const vues = new Set<string>();
    expect(expeditionDuJour(100, vues).id).not.toBe(expeditionDuJour(101, vues).id);
  });

  /* Un index négatif ou énorme ne doit jamais sortir du catalogue. */
  it('reste dans le catalogue quel que soit le jour', () => {
    const vues = new Set<string>();
    for (const jour of [-5000, -1, 0, 7, 999_999]) {
      expect(expeditions).toContain(expeditionDuJour(jour, vues));
    }
  });

  /*
    Le cœur de la règle : proposer une expédition dont tout est déjà écouté,
    c'est ne rien proposer. On passe à la suivante.
  */
  it('saute une expédition entièrement écoutée', () => {
    const duJour = expeditionDuJour(0, new Set());
    const vues = new Set<string>(duJour.cartes);
    const suivante = expeditionDuJour(0, vues);
    expect(suivante.id).not.toBe(duJour.id);
    expect(suivante.cartes.some((id) => !vues.has(id))).toBe(true);
  });

  it('propose quand même quelque chose quand tout est écouté', () => {
    const tout = new Set(cards.map((c) => c.id));
    expect(expeditions).toContain(expeditionDuJour(3, tout));
  });
});

describe('jour local', () => {
  it('avance d’un cran par jour', () => {
    const a = indexDuJour(new Date(2026, 7, 16, 23, 30));
    const b = indexDuJour(new Date(2026, 7, 17, 0, 30));
    expect(b - a).toBe(1);
  });

  /* Deux heures du même jour donnent le même index : l'expédition ne doit pas
     changer entre le matin et le soir. */
  it('ignore l’heure', () => {
    expect(indexDuJour(new Date(2026, 7, 16, 0, 1))).toBe(
      indexDuJour(new Date(2026, 7, 16, 23, 59)),
    );
  });

  it('écrit la date sur deux chiffres', () => {
    expect(jourStocke(new Date(2026, 0, 5))).toBe('2026-01-05');
  });
});
