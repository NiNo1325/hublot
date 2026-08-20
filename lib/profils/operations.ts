import { avatarLibre } from './avatars';
import type { Profil } from './serialisation';

/**
 * Les règles de la fratrie, sans le stockage.
 *
 * Comme `lib/scores.ts`, ce module est pur : le hook qui l'utilise se contente
 * de relire, d'appliquer et de republier. Les cas qui comptent — l'avatar en
 * double, le dernier profil qu'on ne peut pas supprimer — se testent donc sous
 * node, sans navigateur.
 */

export function ajouter(
  profils: readonly Profil[],
  prenom: string,
  nouvelId: () => string,
): Profil[] {
  return [
    ...profils,
    {
      id: nouvelId(),
      prenom: prenom.trim(),
      avatar: avatarLibre(profils.map((p) => p.avatar)),
    },
  ];
}

export function renommer(profils: readonly Profil[], id: string, prenom: string): Profil[] {
  return profils.map((p) => (p.id === id ? { ...p, prenom: prenom.trim() } : p));
}

/**
 * Retire un profil — sauf si c'est le dernier.
 *
 * Les sept hooks écrivent tous sous la clé du profil actif : sans profil, ils
 * n'auraient plus où écrire. Réglages ne propose donc pas la suppression du
 * dernier, et cette garde tient même si l'écran se trompe un jour.
 */
export function supprimer(profils: readonly Profil[], id: string): Profil[] {
  if (profils.length <= 1) return [...profils];
  return profils.filter((p) => p.id !== id);
}

/** Le profil qui joue après un changement de liste : l'actuel s'il survit, sinon le premier. */
export function actifApres(profils: readonly Profil[], actif: string): string {
  if (profils.some((p) => p.id === actif)) return actif;
  return profils[0]?.id ?? '';
}
