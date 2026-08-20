export interface Avatar {
  id: string;
  emoji: string;
}

/**
 * Les figures parmi lesquelles un enfant choisit la sienne.
 *
 * Des animaux, et non des lettres ou des couleurs : à trois ans on ne lit pas
 * son prénom, mais on reconnaît un renard du premier coup d'œil et on le
 * retrouve sans hésiter au lancement suivant. C'est ce qui permet au sélecteur
 * de profils de fonctionner sans texte.
 */
export const AVATARS: Avatar[] = [
  { id: 'renard', emoji: '🦊' },
  { id: 'hibou', emoji: '🦉' },
  { id: 'loutre', emoji: '🦦' },
  { id: 'herisson', emoji: '🦔' },
  { id: 'baleine', emoji: '🐳' },
  { id: 'abeille', emoji: '🐝' },
  { id: 'tortue', emoji: '🐢' },
  { id: 'manchot', emoji: '🐧' },
];

export function avatarParDefaut(): string {
  return AVATARS[0].id;
}

export function emojiAvatar(id: string): string {
  return AVATARS.find((a) => a.id === id)?.emoji ?? AVATARS[0].emoji;
}

/**
 * Le premier avatar encore libre, pour que deux enfants d'une même fratrie ne
 * se retrouvent pas avec la même figure — ce qui ruinerait le seul repère dont
 * dispose celui qui ne lit pas encore.
 */
export function avatarLibre(pris: readonly string[]): string {
  return AVATARS.find((a) => !pris.includes(a.id))?.id ?? avatarParDefaut();
}
