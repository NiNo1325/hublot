'use client';

import { lireLiberes, ecrireLiberes } from '@/lib/cles';
import { ecrireScores, lireScores } from '@/lib/scores';
import { readStored, writeStored } from '@/lib/storage';
import { ecrireProfils, lireProfils, type Profil } from '@/lib/profils/serialisation';
import { CLE_MAJ, CLE_PROFILS, cle } from '@/lib/profils/stockage';
import { blocVide, type BlocProgression, type ProgressionProfil } from './fusion';

/**
 * Le passage entre le stockage local, éclaté en une clé par état, et le bloc
 * unique qui voyage sur le réseau.
 *
 * C'est le seul endroit qui connaît les deux formes à la fois. Les hooks
 * continuent d'écrire leurs chaînes séparées par des virgules sans rien savoir
 * de la synchronisation.
 */

function lireBrut(nom: string, id: string): string | null {
  return readStored(cle(nom, id));
}

function listeDepuisChaine(brut: string | null): string[] {
  return (brut ?? '').split(',').filter(Boolean);
}

/**
 * L'horodatage des valeurs qui ne croissent pas, entretenu tout seul.
 *
 * Les sept hooks ignorent la synchronisation : aucun ne pense à noter « l'âge
 * a changé ». Plutôt que de faire remonter cette notion jusqu'à eux, on garde
 * une signature des scalaires et on ne déplace l'horodatage que lorsqu'elle
 * bouge. Un enfant qui n'a pas changé d'avatar depuis un mois garde donc un
 * `maj` d'un mois, et c'est bien l'autre appareil, plus récent, qui gagnera.
 */
function majDesScalaires(id: string, signature: string): number {
  const stocke = readStored(cle(CLE_MAJ, id));
  if (stocke) {
    const separateur = stocke.indexOf('|');
    if (separateur > 0 && stocke.slice(separateur + 1) === signature) {
      const maj = Number(stocke.slice(0, separateur));
      if (Number.isFinite(maj)) return maj;
    }
  }
  const maintenant = Date.now();
  writeStored(cle(CLE_MAJ, id), `${maintenant}|${signature}`);
  return maintenant;
}

function progressionDe(profil: Profil): ProgressionProfil {
  const age = Number(lireBrut('age.v1', profil.id));
  const tranche = lireBrut('ageRange.v1', profil.id);
  const signature = [profil.avatar, Number.isFinite(age) ? age : '', tranche ?? ''].join('|');

  return {
    avatar: profil.avatar,
    vues: listeDepuisChaine(lireBrut('cartesVues.v1', profil.id)),
    maitrisees: listeDepuisChaine(lireBrut('cartesMaitrisees.v1', profil.id)),
    liberes: lireLiberes(lireBrut('liberes.v1', profil.id)),
    chrono: lireScores(lireBrut('chrono.v1', profil.id)),
    age: Number.isInteger(age) && age >= 3 && age <= 12 ? age : null,
    tranche,
    tutoVu: lireBrut('tutoVu.v1', profil.id) === '1',
    maj: majDesScalaires(profil.id, signature),
  };
}

/** Tout ce que cet appareil sait, prêt à partir. Le prénom des enfants n'y est pas. */
export function blocLocal(): BlocProgression {
  const profils = lireProfils(readStored(CLE_PROFILS));
  if (profils.length === 0) return blocVide();
  return {
    v: 1,
    profils: Object.fromEntries(profils.map((p) => [p.id, progressionDe(p)])),
  };
}

/**
 * Écrit un bloc fusionné dans le stockage local.
 *
 * Les profils que cet appareil ne connaissait pas sont créés — c'est ce qui
 * fait revenir la fratrie sur une tablette neuve. Ils arrivent **sans
 * prénom**, puisque le prénom n'a jamais quitté l'ancien appareil : le parent
 * reconnaît le renard et lui redonne son nom.
 */
export function appliquerBloc(bloc: BlocProgression): void {
  const locaux = lireProfils(readStored(CLE_PROFILS));
  const connus = new Set(locaux.map((p) => p.id));
  const ajoutes: Profil[] = [];

  for (const [id, p] of Object.entries(bloc.profils)) {
    if (!connus.has(id)) ajoutes.push({ id, prenom: '', avatar: p.avatar });

    ecrire(id, 'cartesVues.v1', p.vues.join(','));
    ecrire(id, 'cartesMaitrisees.v1', p.maitrisees.join(','));
    ecrire(id, 'liberes.v1', ecrireLiberes(p.liberes));
    ecrire(id, 'chrono.v1', ecrireScores(p.chrono));
    if (p.age !== null) ecrire(id, 'age.v1', String(p.age));
    if (p.tranche !== null) ecrire(id, 'ageRange.v1', p.tranche);
    if (p.tutoVu) ecrire(id, 'tutoVu.v1', '1');

    const signature = [p.avatar, p.age ?? '', p.tranche ?? ''].join('|');
    writeStored(cle(CLE_MAJ, id), `${p.maj}|${signature}`);
  }

  /*
    L'avatar des profils déjà connus est réaligné sur le bloc fusionné : c'est
    la seule information de la liste locale que la synchronisation arbitre, et
    un enfant qui change de figure sur la tablette doit la retrouver sur le
    téléphone. Le prénom, lui, n'est jamais touché.
  */
  const majOurs = locaux.map((p) => {
    const distant = bloc.profils[p.id];
    return distant && distant.avatar ? { ...p, avatar: distant.avatar } : p;
  });

  const liste = [...majOurs, ...ajoutes];
  if (ajoutes.length > 0 || liste.some((p, i) => p.avatar !== locaux[i]?.avatar)) {
    writeStored(CLE_PROFILS, ecrireProfils(liste));
  }
}

function ecrire(id: string, nom: string, valeur: string): void {
  writeStored(cle(nom, id), valeur);
}
