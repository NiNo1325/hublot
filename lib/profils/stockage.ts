/**
 * Le format des clés de stockage, et lui seul.
 *
 * Tout le reste du code demande `cle('cartesVues.v1')` sans savoir comment un
 * profil se traduit en clé de localStorage. C'est ce qui a permis de passer
 * sept hooks au multi-profil en changeant une ligne dans chacun.
 */

export const PREFIXE = 'science';

/** La liste des profils et celui qui joue en ce moment : propres à l'appareil. */
export const CLE_PROFILS = `${PREFIXE}.profils.v1`;
export const CLE_PROFIL_ACTIF = `${PREFIXE}.profilActif.v1`;

/**
 * Les sept états qui appartiennent à un enfant plutôt qu'à un appareil.
 *
 * La langue en est volontairement absente : elle suit la famille, et un cadet
 * qui bascule sur son profil ne doit pas voir l'interface changer de langue.
 * L'abonnement push, le cache hors ligne et le premium sont dans le même cas —
 * ils ne passent simplement pas par ce module.
 */
export const CLES_PROFIL = [
  'cartesVues.v1',
  'cartesMaitrisees.v1',
  'liberes.v1',
  'chrono.v1',
  'age.v1',
  'ageRange.v1',
  'tutoVu.v1',
] as const;

export type CleProfil = (typeof CLES_PROFIL)[number];

/** La clé de stockage d'un état donné, pour un profil donné. */
export function cle(nom: string, idProfil: string): string {
  return `${PREFIXE}.${idProfil}.${nom}`;
}

/** La clé qu'utilisait l'app avant les profils, pour le même état. */
export function cleHeritee(nom: string): string {
  return `${PREFIXE}.${nom}`;
}
