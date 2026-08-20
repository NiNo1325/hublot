import { describe, expect, it } from 'vitest';
import { AVATARS, avatarParDefaut } from '@/lib/profils/avatars';
import { CLES_PROFIL, cle } from '@/lib/profils/stockage';
import { migrer } from '@/lib/profils/migration';
import { lireProfils, ecrireProfils, type Profil } from '@/lib/profils/serialisation';
import { actifApres, ajouter, renommer, supprimer } from '@/lib/profils/operations';

/*
  Un faux localStorage : la migration ne doit rien connaître du navigateur, ce
  qui la rend testable ici et évite d'avoir à simuler `window` pour la seule
  partie du chantier où une erreur coûterait la progression d'un enfant.
*/
function faussesClefs(initial: Record<string, string> = {}) {
  const donnees = new Map(Object.entries(initial));
  return {
    donnees,
    lire: (k: string) => donnees.get(k) ?? null,
    ecrire: (k: string, v: string) => void donnees.set(k, v),
  };
}

function idsFixes(...ids: string[]) {
  let i = 0;
  return () => ids[i++] ?? `id${i}`;
}

describe('clés préfixées par profil', () => {
  it('isole deux profils sur la même clé logique', () => {
    expect(cle('cartesVues.v1', 'aaa')).not.toBe(cle('cartesVues.v1', 'bbb'));
  });

  it('garde le préfixe science et le nom logique lisibles', () => {
    expect(cle('cartesVues.v1', 'aaa')).toBe('science.aaa.cartesVues.v1');
  });

  it('couvre exactement les sept états propres au profil', () => {
    expect([...CLES_PROFIL].sort()).toEqual(
      [
        'age.v1',
        'ageRange.v1',
        'cartesMaitrisees.v1',
        'cartesVues.v1',
        'chrono.v1',
        'liberes.v1',
        'tutoVu.v1',
      ].sort(),
    );
  });

  it('laisse la langue hors du profil : elle suit la famille, pas l’enfant', () => {
    expect([...CLES_PROFIL]).not.toContain('locale.v1');
  });
});

describe('sérialisation de la liste des profils', () => {
  it('fait l’aller-retour', () => {
    const profils = [
      { id: 'a', prenom: 'Jeanne', avatar: 'renard' },
      { id: 'b', prenom: '', avatar: 'hibou' },
    ];
    expect(lireProfils(ecrireProfils(profils))).toEqual(profils);
  });

  it('ne casse pas sur une valeur absente ou illisible', () => {
    expect(lireProfils(null)).toEqual([]);
    expect(lireProfils('{pas du json')).toEqual([]);
    expect(lireProfils('{"pas":"un tableau"}')).toEqual([]);
  });

  it('écarte les entrées sans identifiant plutôt que de les propager', () => {
    expect(lireProfils('[{"prenom":"Sans id"},{"id":"b","prenom":"Bon","avatar":"hibou"}]')).toEqual(
      [{ id: 'b', prenom: 'Bon', avatar: 'hibou' }],
    );
  });
});

describe('migration des joueurs existants', () => {
  it('transfère la progression existante dans un premier profil', () => {
    const s = faussesClefs({
      'science.cartesVues.v1': 'a,b,c',
      'science.liberes.v1': 'newton',
      'science.age.v1': '7',
    });

    migrer(s.lire, s.ecrire, idsFixes('p1'));

    expect(s.lire('science.p1.cartesVues.v1')).toBe('a,b,c');
    expect(s.lire('science.p1.liberes.v1')).toBe('newton');
    expect(s.lire('science.p1.age.v1')).toBe('7');
    expect(s.lire('science.profilActif.v1')).toBe('p1');
    expect(lireProfils(s.lire('science.profils.v1'))).toHaveLength(1);
  });

  it('ne détruit pas les anciennes clés : une version antérieure de l’app reste lisible', () => {
    const s = faussesClefs({ 'science.cartesVues.v1': 'a,b,c' });
    migrer(s.lire, s.ecrire, idsFixes('p1'));
    expect(s.lire('science.cartesVues.v1')).toBe('a,b,c');
  });

  it('crée quand même un profil sur une installation neuve', () => {
    const s = faussesClefs();
    migrer(s.lire, s.ecrire, idsFixes('p1'));
    expect(lireProfils(s.lire('science.profils.v1'))).toEqual([
      { id: 'p1', prenom: '', avatar: avatarParDefaut() },
    ]);
    expect(s.lire('science.profilActif.v1')).toBe('p1');
  });

  it('est idempotente : relancée, elle ne recrée pas de profil', () => {
    const s = faussesClefs({ 'science.cartesVues.v1': 'a' });
    migrer(s.lire, s.ecrire, idsFixes('p1', 'p2'));
    migrer(s.lire, s.ecrire, idsFixes('p1', 'p2'));
    expect(lireProfils(s.lire('science.profils.v1'))).toHaveLength(1);
    expect(s.lire('science.profilActif.v1')).toBe('p1');
  });

  it('ne réécrit pas la progression déjà migrée si elle a changé depuis', () => {
    const s = faussesClefs({ 'science.cartesVues.v1': 'a' });
    migrer(s.lire, s.ecrire, idsFixes('p1'));
    s.ecrire('science.p1.cartesVues.v1', 'a,b,c,d');
    migrer(s.lire, s.ecrire, idsFixes('p2'));
    expect(s.lire('science.p1.cartesVues.v1')).toBe('a,b,c,d');
  });

  it('ne copie pas la langue, qui reste propre à l’appareil', () => {
    const s = faussesClefs({ 'science.locale.v1': 'en' });
    migrer(s.lire, s.ecrire, idsFixes('p1'));
    expect(s.lire('science.p1.locale.v1')).toBeNull();
    expect(s.lire('science.locale.v1')).toBe('en');
  });
});

describe('avatars', () => {
  it('en propose assez pour une fratrie sans doublon', () => {
    expect(AVATARS.length).toBeGreaterThanOrEqual(6);
  });

  it('n’a ni identifiant ni emoji en double', () => {
    expect(new Set(AVATARS.map((a) => a.id)).size).toBe(AVATARS.length);
    expect(new Set(AVATARS.map((a) => a.emoji)).size).toBe(AVATARS.length);
  });

  it('a un défaut qui fait partie de la liste', () => {
    expect(AVATARS.map((a) => a.id)).toContain(avatarParDefaut());
  });
});

describe('opérations sur la fratrie', () => {
  const jeanne: Profil = { id: 'a', prenom: 'Jeanne', avatar: 'renard' };
  const basile: Profil = { id: 'b', prenom: 'Basile', avatar: 'hibou' };

  it('ajoute un enfant avec un avatar encore libre', () => {
    const apres = ajouter([jeanne], 'Basile', () => 'b');
    expect(apres).toHaveLength(2);
    expect(apres[1].prenom).toBe('Basile');
    expect(apres[1].avatar).not.toBe(jeanne.avatar);
  });

  it('renomme sans toucher aux autres', () => {
    expect(renommer([jeanne, basile], 'b', 'Basile II')).toEqual([
      jeanne,
      { ...basile, prenom: 'Basile II' },
    ]);
  });

  it('ignore un renommage sur un profil inconnu', () => {
    expect(renommer([jeanne], 'inconnu', 'Zoé')).toEqual([jeanne]);
  });

  it('supprime un profil', () => {
    expect(supprimer([jeanne, basile], 'a')).toEqual([basile]);
  });

  /*
    Sans profil, les sept hooks n'auraient plus de clé où écrire. Le dernier est
    donc indéboulonnable : l'écran de Réglages n'en propose pas la suppression,
    et cette règle le garantit même si l'écran se trompe.
  */
  it('refuse de supprimer le dernier profil', () => {
    expect(supprimer([jeanne], 'a')).toEqual([jeanne]);
  });

  it('garde le profil actif s’il existe encore', () => {
    expect(actifApres([jeanne, basile], 'b')).toBe('b');
  });

  it('bascule sur le premier quand l’actif a disparu', () => {
    expect(actifApres([jeanne], 'b')).toBe('a');
  });

  it('rend une chaîne vide quand il ne reste personne', () => {
    expect(actifApres([], 'b')).toBe('');
  });
});
