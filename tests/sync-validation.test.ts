import { describe, expect, it } from 'vitest';
import { blocVide, fusionner } from '@/lib/sync/fusion';
import { lireBloc } from '@/lib/sync/validation';

/**
 * `PUT /api/progression` reçoit un corps écrit par un navigateur, c'est-à-dire
 * par n'importe qui. Une session valide prouve qu'un compte est derrière, pas
 * que le contenu est sain : ces tests fixent ce qui entre et ce qui reste
 * dehors.
 */
describe('lecture d’un bloc venu du réseau', () => {
  it('rend un bloc vide sur tout ce qui n’est pas un bloc', () => {
    for (const cas of [null, undefined, 42, 'texte', [], { profils: [] }, {}]) {
      expect(lireBloc(cas)).toEqual(blocVide());
    }
  });

  it('garde une progression bien formée', () => {
    const bloc = lireBloc({
      v: 1,
      profils: { a: { avatar: 'hibou', vues: ['x', 'y'], tutoVu: true, maj: 5 } },
    });
    expect(bloc.profils.a.vues).toEqual(['x', 'y']);
    expect(bloc.profils.a.avatar).toBe('hibou');
    expect(bloc.profils.a.tutoVu).toBe(true);
    expect(bloc.profils.a.maj).toBe(5);
  });

  it('écarte les entrées qui ne sont pas des chaînes', () => {
    const bloc = lireBloc({ profils: { a: { vues: ['bon', 3, null, { x: 1 }, 'aussi'] } } });
    expect(bloc.profils.a.vues).toEqual(['bon', 'aussi']);
  });

  /*
    Une version antérieure de l'app envoyait l'âge. Ces blocs existent peut-être
    encore dans des comptes : ils doivent être lus sans erreur, et l'âge écarté
    plutôt que réintroduit dans le stockage.
  */
  it('écarte un âge envoyé par une version antérieure', () => {
    const bloc = lireBloc({ profils: { a: { vues: ['x'], age: 7, tranche: '7-9' } } });
    expect(bloc.profils.a).not.toHaveProperty('age');
    expect(bloc.profils.a).not.toHaveProperty('tranche');
    expect(bloc.profils.a.vues).toEqual(['x']);
  });

  it('ne prend `tutoVu` que pour un vrai booléen', () => {
    expect(lireBloc({ profils: { a: { tutoVu: 'oui' } } }).profils.a.tutoVu).toBe(false);
    expect(lireBloc({ profils: { a: { tutoVu: 1 } } }).profils.a.tutoVu).toBe(false);
  });

  /*
    Sans plafond, une seule requête suffirait à remplir le stockage du compte —
    et, le tier Upstash étant partagé, à gêner les notifications push de tout le
    monde.
  */
  it('plafonne le nombre de profils', () => {
    const profils = Object.fromEntries(
      Array.from({ length: 50 }, (_, i) => [`p${i}`, { vues: [] }]),
    );
    expect(Object.keys(lireBloc({ profils }).profils).length).toBeLessThanOrEqual(12);
  });

  it('plafonne la taille des listes', () => {
    const vues = Array.from({ length: 9000 }, (_, i) => `carte-${i}`);
    expect(lireBloc({ profils: { a: { vues } } }).profils.a.vues.length).toBeLessThanOrEqual(2000);
  });

  it('écarte un identifiant de carte démesuré', () => {
    const vues = ['bon', 'x'.repeat(5000)];
    expect(lireBloc({ profils: { a: { vues } } }).profils.a.vues).toEqual(['bon']);
  });

  it('produit un bloc directement fusionnable', () => {
    const recu = lireBloc({ profils: { a: { vues: ['y', 'x'] } } });
    expect(fusionner(recu, blocVide()).profils.a.vues).toEqual(['x', 'y']);
  });

  /*
    Les pierres tombales franchissent le réseau comme le reste, et avec la même
    défiance : c'est par elles qu'une suppression survit à la synchronisation,
    mais c'est aussi par elles qu'un client malveillant ferait disparaître des
    profils. D'où le plafond, et le rejet de tout ce qui n'est pas un
    horodatage.
  */
  it('retient les suppressions reçues', () => {
    expect(lireBloc({ profils: {}, supprimes: { a: 1000 } }).supprimes).toEqual({ a: 1000 });
  });

  it('tolère un bloc sans suppressions', () => {
    expect(lireBloc({ profils: {} }).supprimes).toEqual({});
  });

  it('écarte un horodatage qui n’en est pas un', () => {
    const recu = lireBloc({ profils: {}, supprimes: { a: 'hier', b: -5, c: 1000 } });
    expect(recu.supprimes).toEqual({ c: 1000 });
  });

  it('plafonne le nombre de suppressions', () => {
    const supprimes = Object.fromEntries(
      Array.from({ length: 400 }, (_, i) => [`p${i}`, 1000]),
    );
    expect(Object.keys(lireBloc({ profils: {}, supprimes }).supprimes).length).toBeLessThanOrEqual(100);
  });

  it('fait disparaître un profil que le bloc reçu déclare supprimé', () => {
    const recu = lireBloc({ profils: { a: { vues: ['x'] } }, supprimes: { a: 1000 } });
    expect(Object.keys(fusionner(recu, blocVide()).profils)).toEqual([]);
  });
});
