'use client';

/**
 * « A-t-on déjà demandé qui joue depuis l'ouverture de l'app ? »
 *
 * État de session, jamais persisté — comme l'ouverture du tutoriel. La question
 * se pose une fois au lancement : la reposer à chaque retour sur l'accueil
 * transformerait un service rendu en péage. Au prochain démarrage, elle
 * revient.
 */
let choisi = false;

export function profilChoisiCetteSession(): boolean {
  return choisi;
}

export function marquerProfilChoisi(): void {
  choisi = true;
}
