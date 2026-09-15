'use client';

import { lireLiberes, ecrireLiberes } from '@/lib/cles';
import { ecrireScores, lireScores } from '@/lib/scores';
import { readStored, removeStored, writeStored } from '@/lib/storage';
import { ecrireProfils, lireProfils, type Profil } from '@/lib/profils/serialisation';
import { CLE_MAJ, CLE_PROFILS, CLE_PROFIL_ACTIF, CLE_RAZ, CLE_SUPPRIMES, CLES_A_EFFACER, cle } from '@/lib/profils/stockage';
import { profilActif } from '@/lib/profils/store';
import { actifApres } from '@/lib/profils/operations';
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
 * L'horodatage de l'avatar, entretenu tout seul.
 *
 * Les hooks ignorent la synchronisation : aucun ne pense à noter « l'avatar a
 * changé ». Plutôt que de faire remonter cette notion jusqu'à eux, on garde
 * une signature et on ne déplace l'horodatage que lorsqu'elle bouge. Un enfant
 * qui n'a pas changé de figure depuis un mois garde donc un `maj` d'un mois, et
 * c'est bien l'autre appareil, plus récent, qui gagnera.
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

/*
  L'âge et la tranche d'âge ne partent pas.

  Ce sont les deux seules informations du bloc qui décriraient l'enfant
  lui-même ; le reste n'est qu'une liste de cartes écoutées. Les garder sur
  l'appareil permet d'affirmer sans réserve qu'aucune donnée décrivant un
  enfant ne quitte le sien — ce que disent la politique de confidentialité et
  la déclaration Play Store. Le prix est dérisoire : sur un appareil neuf,
  l'enfant rechoisit son âge en deux appuis, sur un écran qu'il verrait de
  toute façon.
*/
function progressionDe(profil: Profil): ProgressionProfil {
  return {
    avatar: profil.avatar,
    vues: listeDepuisChaine(lireBrut('cartesVues.v1', profil.id)),
    maitrisees: listeDepuisChaine(lireBrut('cartesMaitrisees.v1', profil.id)),
    liberes: lireLiberes(lireBrut('liberes.v1', profil.id)),
    chrono: lireScores(lireBrut('chrono.v1', profil.id)),
    tutoVu: lireBrut('tutoVu.v1', profil.id) === '1',
    maj: majDesScalaires(profil.id, profil.avatar),
    raz: Number(readStored(cle(CLE_RAZ, profil.id))) || 0,
  };
}

/*
  Les pierres tombales, sérialisées comme le reste du stockage : une chaîne
  plate, `id:horodatage` séparés par des virgules. Pas de JSON, pour rester
  lisible dans l'inspecteur du navigateur quand il faut comprendre ce qui se
  passe chez quelqu'un.
*/
export function lireSupprimes(brut: string | null): Record<string, number> {
  const sortie: Record<string, number> = {};
  for (const entree of (brut ?? '').split(',').filter(Boolean)) {
    const coupure = entree.lastIndexOf(':');
    if (coupure <= 0) continue;
    const quand = Number(entree.slice(coupure + 1));
    if (Number.isFinite(quand) && quand > 0) sortie[entree.slice(0, coupure)] = quand;
  }
  return sortie;
}

export function ecrireSupprimes(supprimes: Record<string, number>): string {
  return Object.entries(supprimes)
    .map(([id, quand]) => `${id}:${quand}`)
    .join(',');
}

/** Tout ce que cet appareil sait, prêt à partir. Ni prénom ni âge n'y figurent. */
export function blocLocal(): BlocProgression {
  const supprimes = lireSupprimes(readStored(CLE_SUPPRIMES));
  const profils = lireProfils(readStored(CLE_PROFILS));
  /*
    Un appareil sans profil a pourtant quelque chose à dire s'il vient d'en
    supprimer un : rendre le bloc vide ici perdrait la pierre tombale, et le
    profil reviendrait du serveur à la synchronisation suivante.
  */
  if (profils.length === 0 && Object.keys(supprimes).length === 0) return blocVide();
  return {
    v: 1,
    profils: Object.fromEntries(profils.map((p) => [p.id, progressionDe(p)])),
    supprimes,
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
  writeStored(CLE_SUPPRIMES, ecrireSupprimes(bloc.supprimes));

  /*
    Un profil supprimé sur un autre appareil disparaît aussi de celui-ci, avec
    ses sept clés. `fusionner` l'a déjà retiré de `bloc.profils` ; il reste à le
    retirer d'ici, sans quoi il survivrait localement et repartirait au prochain
    dépôt.
  */
  const tousLocaux = lireProfils(readStored(CLE_PROFILS));
  const locaux = tousLocaux.filter((p) => bloc.supprimes[p.id] === undefined);
  for (const parti of tousLocaux) {
    if (bloc.supprimes[parti.id] === undefined) continue;
    for (const nom of CLES_A_EFFACER) removeStored(cle(nom, parti.id));
  }

  const connus = new Set(locaux.map((p) => p.id));
  const ajoutes: Profil[] = [];

  for (const [id, p] of Object.entries(bloc.profils)) {
    if (!connus.has(id)) ajoutes.push({ id, prenom: '', avatar: p.avatar });

    ecrire(id, 'cartesVues.v1', p.vues.join(','));
    ecrire(id, 'cartesMaitrisees.v1', p.maitrisees.join(','));
    ecrire(id, 'liberes.v1', ecrireLiberes(p.liberes));
    ecrire(id, 'chrono.v1', ecrireScores(p.chrono));
    if (p.tutoVu) ecrire(id, 'tutoVu.v1', '1');

    writeStored(cle(CLE_MAJ, id), `${p.maj}|${p.avatar}`);
    if (p.raz > 0) writeStored(cle(CLE_RAZ, id), String(p.raz));
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
  const aChange =
    ajoutes.length > 0 ||
    liste.length !== tousLocaux.length ||
    liste.some((p, i) => p.avatar !== locaux[i]?.avatar);
  if (aChange) {
    writeStored(CLE_PROFILS, ecrireProfils(liste));
    /*
      L'enfant actif peut être celui qui vient de disparaître : sans ce
      réalignement, l'application resterait pointée sur un identifiant mort et
      n'afficherait plus aucune progression.
    */
    writeStored(CLE_PROFIL_ACTIF, actifApres(liste, readStored(CLE_PROFIL_ACTIF) ?? ''));
  }
}

function ecrire(id: string, nom: string, valeur: string): void {
  writeStored(cle(nom, id), valeur);
}

/**
 * Note qu'un profil vient d'être remis à zéro.
 *
 * Sans cette marque, la synchronisation suivante ramènerait du serveur tout ce
 * qu'on vient d'effacer : la fusion unit, elle ne retranche pas. L'horodatage
 * dit « ce qui précède ne compte plus », et c'est lui qui l'emporte sur les
 * autres appareils.
 */
export function marquerRemiseAZero(): void {
  writeStored(cle(CLE_RAZ, profilActif()), String(Date.now()));
}

/**
 * Note qu'un profil vient d'être supprimé.
 *
 * Même rôle que `marquerRemiseAZero`, un cran plus loin : la remise à zéro vide
 * un enfant qui continue de jouer, la suppression le fait disparaître. Sans
 * cette marque, recharger l'application le ramenait du serveur — la fusion unit
 * et ne retranche pas.
 */
export function marquerSupprime(id: string): void {
  const supprimes = lireSupprimes(readStored(CLE_SUPPRIMES));
  supprimes[id] = Date.now();
  writeStored(CLE_SUPPRIMES, ecrireSupprimes(supprimes));
}
