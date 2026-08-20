'use client';

import { notifierProfils } from '@/lib/profils/store';
import { lireBloc } from './validation';
import { appliquerBloc, blocLocal } from './local';

/**
 * La synchronisation, vue du navigateur.
 *
 * Un seul aller-retour : on dépose ce que cet appareil sait, le serveur
 * fusionne avec ce qu'il avait et renvoie le résultat, qu'on réécrit
 * localement. Pas de « tirer puis pousser », donc pas de fenêtre pendant
 * laquelle deux appareils pourraient se marcher dessus.
 *
 * **Rien ici ne doit jamais bloquer le jeu.** Une panne réseau, un compte
 * déconnecté, un serveur en vrac : tout est avalé en silence et retenté plus
 * tard. Un enfant hors ligne dans une voiture ne doit pas voir la différence.
 */

const DELAI_GROUPAGE_MS = 10_000;

let enCours: Promise<boolean> | null = null;
let minuterie: ReturnType<typeof setTimeout> | null = null;
let connecte: boolean | null = null;

/** Ce que le client croit savoir de la session, sans redemander au serveur. */
export function connexionConnue(): boolean | null {
  return connecte;
}

export function oublierEtatConnexion(): void {
  connecte = null;
}

/** Interroge le serveur sur l'état de la session. */
export async function verifierConnexion(): Promise<boolean> {
  try {
    const reponse = await fetch('/api/compte', { cache: 'no-store' });
    const donnees = (await reponse.json()) as { connecte?: boolean };
    connecte = donnees.connecte === true;
  } catch {
    connecte = false;
  }
  return connecte;
}

/**
 * Dépose la progression et applique le résultat fusionné.
 *
 * Rend `true` si un échange a bien eu lieu. Les appels concurrents partagent la
 * même promesse : deux écrans qui déclenchent une synchronisation au même
 * instant ne produisent pas deux requêtes.
 */
export function synchroniser(): Promise<boolean> {
  enCours ??= executer().finally(() => {
    enCours = null;
  });
  return enCours;
}

async function executer(): Promise<boolean> {
  try {
    const reponse = await fetch('/api/progression', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(blocLocal()),
    });

    if (reponse.status === 401) {
      connecte = false;
      return false;
    }
    if (!reponse.ok) return false;

    const donnees = (await reponse.json()) as { bloc?: unknown };
    connecte = true;
    appliquerBloc(lireBloc(donnees.bloc));
    notifierProfils();
    return true;
  } catch {
    // Hors ligne, ou serveur muet : on retentera au prochain démarrage.
    return false;
  }
}

/**
 * Demande une synchronisation « bientôt ».
 *
 * Groupée sur dix secondes : un enfant qui enchaîne cinq cartes ne provoque
 * qu'un seul dépôt. Sans effet tant qu'aucun compte n'est connu comme
 * connecté, pour ne pas lancer de requête inutile chez les familles qui
 * n'utilisent pas la sauvegarde — c'est-à-dire, au départ, toutes.
 */
export function planifierSynchro(): void {
  if (connecte !== true) return;
  if (minuterie) clearTimeout(minuterie);
  minuterie = setTimeout(() => {
    minuterie = null;
    void synchroniser();
  }, DELAI_GROUPAGE_MS);
}

/** Dépose sans attendre le groupage — quand l'app passe en arrière-plan. */
export function synchroniserMaintenant(): void {
  if (connecte !== true) return;
  if (minuterie) {
    clearTimeout(minuterie);
    minuterie = null;
  }
  void synchroniser();
}
