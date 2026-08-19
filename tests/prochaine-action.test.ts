import { describe, expect, it } from 'vitest';
import { cards } from '@/content/cards';
import { savantsPrisonniers } from '@/content/savants-cartes';
import { prochaineAction } from '@/lib/prochaine-action';
import { prixSavant } from '@/lib/cles';

const AUCUN = new Set<string>();
const tout = (f: (id: string) => boolean = () => true) =>
  new Set(cards.filter((c) => f(c.id)).map((c) => c.id));

/**
 * Le bandeau du musée ne propose qu'une action. Si elle tombe à côté — envoyer
 * écouter alors qu'une cellule est ouvrable, ou proposer de répondre à un enfant
 * qui n'a rien écouté — le guide devient un bruit de fond, et l'enfant apprend
 * à ne plus le lire.
 */
describe('prochaine action', () => {
  it('propose de délivrer dès qu’une cellule est à portée', () => {
    const action = prochaineAction(cards, tout(), tout(), [], 150, 0);
    expect(action.type).toBe('delivrer');
  });

  /*
    Le moins cher d'abord : c'est la victoire la plus proche, et elle laisse les
    grands noms comme objectifs à épargner.
  */
  it('propose la cellule la moins chère', () => {
    const action = prochaineAction(cards, tout(), tout(), [], 3, 0);
    if (action.type !== 'delivrer') throw new Error('attendu : délivrer');
    expect(prixSavant(action.savant)).toBe(1);
  });

  it('propose de répondre quand des cartes écoutées attendent leur question', () => {
    const vues = tout((id) => id === 'les-volcans' || id === 'cycle-de-leau');
    const action = prochaineAction(cards, vues, AUCUN, [], 0, 0);
    expect(action).toEqual({ type: 'repondre', combien: 2 });
  });

  /*
    Sans carte écoutée, le quizz n'a rien à demander : proposer de répondre
    mènerait à un écran vide.
  */
  it('propose d’écouter quand rien n’a encore été entendu', () => {
    const action = prochaineAction(cards, AUCUN, AUCUN, [], 0, 0);
    expect(action).toEqual({ type: 'ecouter', combien: cards.length });
  });

  it('préfère délivrer à répondre', () => {
    const vues = tout();
    const maitrisees = tout((id) => id !== 'les-volcans');
    // Le trousseau suffit largement : la délivrance passe devant.
    const action = prochaineAction(cards, vues, maitrisees, [], 149, 0);
    expect(action.type).toBe('delivrer');
  });

  it('préfère répondre à écouter', () => {
    const vues = tout((id) => id === 'les-volcans');
    const action = prochaineAction(cards, vues, AUCUN, [], 0, 0);
    expect(action.type).toBe('repondre');
  });

  it('ne propose rien quand tout est fait', () => {
    const tousLibres = savantsPrisonniers.map((s) => s.id);
    const action = prochaineAction(cards, tout(), tout(), tousLibres, 150, 150);
    expect(action).toEqual({ type: 'complet' });
  });

  /* Un trousseau vide ne doit jamais proposer une délivrance impossible. */
  it('ne propose pas de délivrer sans clés', () => {
    const action = prochaineAction(cards, tout(), tout(), [], 0, 0);
    expect(action.type).not.toBe('delivrer');
  });
});
