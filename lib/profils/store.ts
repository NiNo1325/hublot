'use client';

import { readStored, removeStored, writeStored } from '@/lib/storage';
import { actifApres, ajouter, renommer, supprimer } from './operations';
import { ecrireProfils, lireProfils, type Profil } from './serialisation';
import { CLE_PROFILS, CLE_PROFIL_ACTIF, CLES_A_EFFACER, cle } from './stockage';
import { migrer } from './migration';

/**
 * Qui joue en ce moment, et où écrire ce qu'il fait.
 *
 * Source externe au rendu React, sur le modèle des hooks existants : un
 * abonnement partagé, pour qu'un changement de profil rafraîchisse d'un coup
 * la grille des mondes, le musée et le podium du chrono.
 */
const abonnes = new Set<() => void>();

export function souscrireProfils(surChangement: () => void) {
  abonnes.add(surChangement);
  return () => {
    abonnes.delete(surChangement);
  };
}

function notifier() {
  for (const f of abonnes) f();
}

/**
 * Réveille tous les écrans abonnés.
 *
 * Exporté pour la synchronisation : quand un bloc venu du compte est appliqué,
 * le stockage change sous les pieds de React sans qu'aucune action de l'enfant
 * ne l'ait provoqué. Sans ce réveil, la progression restaurée n'apparaîtrait
 * qu'au prochain rechargement.
 */
export function notifierProfils(): void {
  notifier();
}

/**
 * `crypto.randomUUID` exige un contexte sécurisé. La TWA et le site sont en
 * https, donc il est là ; le repli couvre le cas d'un test manuel servi en
 * http sur le réseau local, où mieux vaut un identifiant moins beau que pas
 * de profil du tout.
 */
function nouvelId(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `p${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  }
}

/**
 * Garantit qu'il existe au moins un profil avant toute lecture.
 *
 * Appelé au début de chaque accès plutôt qu'au chargement du module : un effet
 * de bord à l'import s'exécuterait aussi pendant le rendu serveur, où il n'y a
 * ni stockage ni enfant.
 */
function assurer(): Profil[] {
  const existants = lireProfils(readStored(CLE_PROFILS));
  if (existants.length > 0) return existants;
  migrer(readStored, writeStored, nouvelId);
  return lireProfils(readStored(CLE_PROFILS));
}

export function profils(): Profil[] {
  return assurer();
}

export function profilActif(): string {
  const liste = assurer();
  const enregistre = readStored(CLE_PROFIL_ACTIF) ?? '';
  const valide = actifApres(liste, enregistre);
  if (valide !== enregistre) writeStored(CLE_PROFIL_ACTIF, valide);
  return valide;
}

export function profilCourant(): Profil | undefined {
  const id = profilActif();
  return assurer().find((p) => p.id === id);
}

/**
 * La clé de stockage d'un état pour l'enfant qui joue.
 *
 * C'est le seul point de contact entre les sept hooks et les profils : chacun
 * a remplacé sa constante `CLE` par un appel à celle-ci.
 */
export function cleActive(nom: string): string {
  return cle(nom, profilActif());
}

function publierListe(liste: Profil[]) {
  writeStored(CLE_PROFILS, ecrireProfils(liste));
  writeStored(CLE_PROFIL_ACTIF, actifApres(liste, readStored(CLE_PROFIL_ACTIF) ?? ''));
  notifier();
}

export function changerDeProfil(id: string): void {
  if (!assurer().some((p) => p.id === id)) return;
  writeStored(CLE_PROFIL_ACTIF, id);
  notifier();
}

export function ajouterProfil(prenom: string): void {
  publierListe(ajouter(assurer(), prenom, nouvelId));
}

export function renommerProfil(id: string, prenom: string): void {
  publierListe(renommer(assurer(), id, prenom));
}

/**
 * Supprime un enfant et toute sa progression.
 *
 * L'effacement des sept clés est fait ici et non dans `operations`, qui reste
 * pur. Il précède la republication : si le navigateur venait à s'arrêter entre
 * les deux, mieux vaut une liste intacte pointant sur des clés vides qu'un
 * profil disparu laissant sa progression orpheline dans le stockage.
 */
export function supprimerProfil(id: string): void {
  const liste = assurer();
  const restants = supprimer(liste, id);
  if (restants.length === liste.length) return;
  for (const nom of CLES_A_EFFACER) removeStored(cle(nom, id));
  publierListe(restants);
}
