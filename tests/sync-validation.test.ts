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
      profils: { a: { avatar: 'hibou', vues: ['x', 'y'], age: 7, tutoVu: true, maj: 5 } },
    });
    expect(bloc.profils.a.vues).toEqual(['x', 'y']);
    expect(bloc.profils.a.age).toBe(7);
    expect(bloc.profils.a.tutoVu).toBe(true);
    expect(bloc.profils.a.maj).toBe(5);
  });

  it('écarte les entrées qui ne sont pas des chaînes', () => {
    const bloc = lireBloc({ profils: { a: { vues: ['bon', 3, null, { x: 1 }, 'aussi'] } } });
    expect(bloc.profils.a.vues).toEqual(['bon', 'aussi']);
  });

  it('refuse un âge hors des bornes de l’app', () => {
    expect(lireBloc({ profils: { a: { age: 99 } } }).profils.a.age).toBeNull();
    expect(lireBloc({ profils: { a: { age: 7.5 } } }).profils.a.age).toBeNull();
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
});
