import { describe, expect, it } from 'vitest';
import { affirmations, affirmationDe } from '@/content/affirmations';
import { cards } from '@/content/cards';
import { LOCALES } from '@/lib/types';

/**
 * Le jeu « Vrai ou faux » ne tire que des cartes déjà écoutées. Une carte sans
 * affirmation disparaîtrait donc silencieusement du jeu, et l'enfant qui vient
 * d'écouter les volcans ne les verrait jamais revenir. On vérifie ici la
 * couverture, l'équilibre, et l'existence des deux langues — la fiche d'un
 * savant était restée française en anglais faute d'un contrôle de ce genre.
 */
describe('les affirmations', () => {
  it('couvre toutes les cartes du catalogue', () => {
    for (const carte of cards) {
      expect(affirmationDe(carte.id), carte.id).toBeDefined();
    }
    expect(affirmations).toHaveLength(cards.length);
  });

  it('ne cite que des cartes existantes', () => {
    const ids = new Set(cards.map((c) => c.id));
    for (const a of affirmations) expect(ids.has(a.cardId), a.cardId).toBe(true);
  });

  it('n’écrit jamais deux affirmations pour la même carte', () => {
    const vus = affirmations.map((a) => a.cardId);
    expect(new Set(vus).size).toBe(vus.length);
  });

  /*
    Un enfant qui répondrait toujours « faux » ne doit pas gagner : sans cet
    équilibre, la stratégie gagnante serait de ne pas réfléchir du tout.
  */
  it('équilibre le vrai et le faux', () => {
    const vraies = affirmations.filter((a) => a.vrai).length;
    const part = vraies / affirmations.length;
    expect(part).toBeGreaterThan(0.4);
    expect(part).toBeLessThan(0.6);
  });

  it('écrit la phrase et la réponse dans les deux langues', () => {
    for (const a of affirmations) {
      for (const langue of LOCALES) {
        for (const [nom, valeur] of [
          ['texte', a.texte[langue]],
          ['réponse', a.reponse[langue]],
        ] as const) {
          expect(valeur, `${a.cardId} / ${nom} / ${langue}`).toBeDefined();
          expect(valeur!.length, `${a.cardId} / ${nom} / ${langue}`).toBeGreaterThan(12);
        }
      }
    }
  });

  /*
    La réponse est lue à voix haute juste après le verdict de l'enfant : elle
    doit commencer par trancher, sinon on entend l'explication sans savoir si
    l'on avait bon.
  */
  it('fait commencer la réponse par le verdict', () => {
    for (const a of affirmations) {
      expect(a.reponse.fr, a.cardId).toMatch(a.vrai ? /^Vrai\s?!/u : /^Faux\s?!/u);
      expect(a.reponse.en, a.cardId).toMatch(a.vrai ? /^True!/u : /^False!/u);
    }
  });

  /* Une phrase qui se termine sans ponctuation s'entend comme coupée. */
  it('termine chaque phrase par une ponctuation', () => {
    for (const a of affirmations) {
      for (const langue of LOCALES) {
        expect(a.texte[langue]!.trimEnd(), `${a.cardId} / ${langue}`).toMatch(/[.!?]$/u);
        expect(a.reponse[langue]!.trimEnd(), `${a.cardId} / ${langue}`).toMatch(/[.!?]$/u);
      }
    }
  });
});
