import { describe, expect, it } from 'vitest';
import { savantsPrisonniers } from '@/content/savants-cartes';
import { cards } from '@/content/cards';
import { LOCALES } from '@/lib/types';

const toutesLesCartes = savantsPrisonniers.flatMap((s) => s.cartes);

/**
 * La règle du fil rouge est asymétrique : une carte n'a qu'un savant, un savant
 * peut tenir plusieurs cartes. Si une carte tombait entre deux savants, elle en
 * libérerait deux d'un coup ; si une carte n'en avait aucun, elle ne
 * libérerait personne et l'enfant ne comprendrait pas pourquoi.
 */
describe('les savants et leurs cartes', () => {
  it('couvre toutes les cartes du catalogue', () => {
    const couvertes = new Set(toutesLesCartes.map((c) => c.id));
    for (const carte of cards) {
      expect(couvertes.has(carte.id), carte.id).toBe(true);
    }
    expect(couvertes.size).toBe(cards.length);
  });

  it('ne cite que des cartes existantes', () => {
    const ids = new Set(cards.map((c) => c.id));
    for (const c of toutesLesCartes) {
      expect(ids.has(c.id), c.id).toBe(true);
    }
  });

  /* Le point dur : une carte ne peut appartenir qu'à un seul savant. */
  it('n’attribue jamais une carte à deux savants', () => {
    const vues = toutesLesCartes.map((c) => c.id);
    const doublons = vues.filter((id, i) => vues.indexOf(id) !== i);
    expect(doublons, `cartes réclamées deux fois : ${doublons.join(', ')}`).toEqual([]);
  });

  it('donne au moins une carte à chaque savant', () => {
    for (const s of savantsPrisonniers) {
      expect(s.cartes.length, s.nom).toBeGreaterThan(0);
    }
  });

  it('n’a pas deux savants sous le même identifiant', () => {
    const ids = savantsPrisonniers.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  /*
    Le slug nomme le fichier d'illustration : un accent ou une majuscule
    casserait le chemin sur un serveur sensible à la casse.
  */
  it('donne à chaque savant un slug de fichier valide', () => {
    for (const s of savantsPrisonniers) {
      expect(s.id, s.nom).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('donne des dates cohérentes', () => {
    for (const s of savantsPrisonniers) {
      expect(s.naissance, s.nom).toBeLessThan(new Date().getFullYear());
      if (s.mort !== null) expect(s.mort, s.nom).toBeGreaterThan(s.naissance);
    }
  });

  /*
    Le portrait dit qui est le savant, là où le lien dit ce qu'il a fait sur une
    carte. Les bornes de longueur ne sont pas cosmétiques : trop court, il
    retombe sur « un grand savant » et n'apprend rien ; trop long, il dépasse la
    fiche et la voix de Lumi le débite en une tirade qu'aucun enfant n'écoute
    jusqu'au bout.
  */
  it('donne à chaque savant un portrait dans les deux langues', () => {
    for (const s of savantsPrisonniers) {
      for (const langue of LOCALES) {
        const texte = s.portrait[langue];
        expect(texte, `${s.nom} / ${langue}`).toBeDefined();
        expect(texte!.length, `${s.nom} / ${langue}`).toBeGreaterThan(199);
        expect(texte!.length, `${s.nom} / ${langue}`).toBeLessThan(481);
        expect(texte!.endsWith('.'), `${s.nom} / ${langue}`).toBe(true);
      }
    }
  });

  /*
    Le lien s'écrit dans les deux langues. Il n'existait qu'en français, si bien
    que la fiche restait française en anglais — et que la voix anglaise, produite
    à partir du français, disait autre chose que l'écran.
  */
  it('écrit un lien dans les deux langues pour chaque carte tenue', () => {
    for (const s of savantsPrisonniers) {
      for (const c of s.cartes) {
        for (const langue of LOCALES) {
          const texte = c.lien[langue];
          expect(texte, `${s.nom} / ${c.id} / ${langue}`).toBeDefined();
          expect(texte!.length, `${s.nom} / ${c.id} / ${langue}`).toBeGreaterThan(30);
          expect(texte!.endsWith('.'), `${s.nom} / ${c.id} / ${langue}`).toBe(true);
        }
      }
    }
  });

  /*
    Le prix d'une cellule est le nombre de cartes tenues. La somme vaut donc
    exactement le nombre de cartes : libérer tout le monde, c'est avoir répondu
    juste à toutes les questions au moins une fois — ni plus, ni moins.
  */
  it('coûte en clés exactement ce que le catalogue peut en donner', () => {
    const total = savantsPrisonniers.reduce((n, s) => n + s.cartes.length, 0);
    expect(total).toBe(cards.length);
  });
});
