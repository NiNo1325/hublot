import { describe, expect, it } from 'vitest';
import { PODIUM } from '@/lib/scores';
import { blocVide, fusionner, type BlocProgression, type ProgressionProfil } from '@/lib/sync/fusion';

/**
 * La fusion est la pièce qui autorise tout le reste à être simple.
 *
 * Parce que presque tout l'état ne fait que croître — cartes vues, cartes
 * maîtrisées, savants libérés — fusionner deux appareils est une union et un
 * max. Aucun conflit n'est donc possible, et aucun écran « quelle version
 * garder ? » n'a besoin d'exister. Ces tests protègent cette propriété : le
 * jour où elle tombe, c'est toute l'architecture de synchronisation qui doit
 * être repensée, et mieux vaut l'apprendre ici qu'en production.
 */

function profil(p: Partial<ProgressionProfil> = {}): ProgressionProfil {
  return {
    avatar: 'renard',
    vues: [],
    maitrisees: [],
    liberes: [],
    chrono: [],
    tutoVu: false,
    maj: 0,
    ...p,
  };
}

function bloc(profils: Record<string, ProgressionProfil>): BlocProgression {
  return { v: 1, profils };
}

describe('fusion de deux appareils', () => {
  it('fait l’union des cartes vues', () => {
    const tablette = bloc({ a: profil({ vues: ['les-os', 'le-wifi'] }) });
    const telephone = bloc({ a: profil({ vues: ['le-wifi', 'les-marees'] }) });
    expect(fusionner(tablette, telephone).profils.a.vues).toEqual([
      'le-wifi',
      'les-marees',
      'les-os',
    ]);
  });

  it('fait l’union des savants libérés et des cartes maîtrisées', () => {
    const a = bloc({ a: profil({ liberes: ['newton'], maitrisees: ['x'] }) });
    const b = bloc({ a: profil({ liberes: ['curie'], maitrisees: ['y'] }) });
    const f = fusionner(a, b).profils.a;
    expect(f.liberes).toEqual(['curie', 'newton']);
    expect(f.maitrisees).toEqual(['x', 'y']);
  });

  it('garde les meilleurs scores des deux côtés, sans dépasser le podium', () => {
    const a = bloc({ a: profil({ chrono: [30, 10] }) });
    const b = bloc({ a: profil({ chrono: [20, 15] }) });
    const f = fusionner(a, b).profils.a;
    expect(f.chrono).toEqual([30, 20, 15]);
    expect(f.chrono).toHaveLength(PODIUM);
  });

  it('conserve un profil que l’autre appareil ne connaît pas', () => {
    const tablette = bloc({ a: profil({ vues: ['x'] }) });
    const telephone = bloc({ b: profil({ vues: ['y'] }) });
    const f = fusionner(tablette, telephone);
    expect(Object.keys(f.profils).sort()).toEqual(['a', 'b']);
    expect(f.profils.a.vues).toEqual(['x']);
    expect(f.profils.b.vues).toEqual(['y']);
  });
});

describe('arbitrage des valeurs qui ne croissent pas', () => {
  /*
    L'âge est la seule information du bloc qui décrirait l'enfant lui-même. Le
    garder sur l'appareil est ce qui permet d'affirmer sans réserve, dans la
    politique de confidentialité comme dans la déclaration Play Store, qu'aucune
    donnée décrivant un enfant ne part. Ce test existe pour que personne ne le
    remette dans le bloc par commodité.
  */
  it('ne transporte ni âge ni tranche d’âge', () => {
    const f = fusionner(bloc({ a: profil({ maj: 100 }) }), bloc({ a: profil({ maj: 200 }) }));
    expect(Object.keys(f.profils.a).sort()).toEqual(
      ['avatar', 'chrono', 'liberes', 'maitrisees', 'maj', 'tutoVu', 'vues'].sort(),
    );
  });

  it('retient l’avatar le plus récent, horodatage faisant foi', () => {
    const a = bloc({ a: profil({ avatar: 'renard', maj: 100 }) });
    const b = bloc({ a: profil({ avatar: 'hibou', maj: 200 }) });
    expect(fusionner(a, b).profils.a.avatar).toBe('hibou');
  });

  /*
    Un tutoriel vu sur un appareil est vu tout court : le remontrer parce que
    l'autre appareil l'ignorait serait perçu comme un bug.
  */
  it('considère le tutoriel vu dès qu’un appareil l’a vu', () => {
    const a = bloc({ a: profil({ tutoVu: true, maj: 100 }) });
    const b = bloc({ a: profil({ tutoVu: false, maj: 200 }) });
    expect(fusionner(a, b).profils.a.tutoVu).toBe(true);
    expect(fusionner(b, a).profils.a.tutoVu).toBe(true);
  });
});

/*
  Les trois propriétés qui font qu'aucun ordre d'arrivée ne peut créer de
  divergence. Ce sont elles qui autorisent le client et le serveur à fusionner
  chacun de leur côté sans se coordonner.
*/
describe('propriétés algébriques', () => {
  const a = bloc({
    x: profil({ vues: ['1', '2'], chrono: [10], maj: 100, avatar: 'renard' }),
    y: profil({ vues: ['9'], maj: 50 }),
  });
  const b = bloc({
    x: profil({ vues: ['2', '3'], chrono: [20], maj: 300, avatar: 'hibou' }),
    z: profil({ liberes: ['newton'], maj: 70 }),
  });

  it('est commutative : l’ordre des appareils ne change rien', () => {
    expect(fusionner(a, b)).toEqual(fusionner(b, a));
  });

  it('est idempotente : resynchroniser ne modifie rien', () => {
    expect(fusionner(a, a)).toEqual(fusionner(a, blocVide()));
    const f = fusionner(a, b);
    expect(fusionner(f, f)).toEqual(f);
  });

  it('est associative : trois appareils convergent quel que soit l’ordre', () => {
    const c = bloc({ x: profil({ vues: ['4'], maj: 200 }) });
    expect(fusionner(fusionner(a, b), c)).toEqual(fusionner(a, fusionner(b, c)));
  });

  it('tranche les égalités d’horodatage de façon déterministe', () => {
    const g = bloc({ x: profil({ avatar: 'loutre', maj: 100 }) });
    const d = bloc({ x: profil({ avatar: 'baleine', maj: 100 }) });
    expect(fusionner(g, d)).toEqual(fusionner(d, g));
  });

  it('laisse un bloc inchangé par la fusion avec le vide', () => {
    expect(fusionner(a, blocVide())).toEqual(fusionner(blocVide(), a));
  });
});

describe('robustesse des données reçues du réseau', () => {
  it('accepte un bloc vide', () => {
    expect(fusionner(blocVide(), blocVide())).toEqual(blocVide());
  });

  it('ne laisse jamais de doublon dans les ensembles', () => {
    const a = bloc({ x: profil({ vues: ['un', 'un', 'deux'] }) });
    expect(fusionner(a, a).profils.x.vues).toEqual(['deux', 'un']);
  });
});
