import { NIVEAUX, type NiveauDifficulte } from '@/content/niveaux';
import { ageDepuisTranche, trancheDepuisAge } from './age';
import type { AgeRange } from './types';

/**
 * Le pont entre le niveau que l'enfant choisit et la tranche que le catalogue
 * indexe.
 *
 * Tout le stockage et tout le contenu continuent de parler en tranches
 * (`3-5`, `6-8`, `9-12`) : c'est ce qui a permis de changer la façade sans
 * toucher à une seule des cartes. Ce module est le seul endroit qui connaît la
 * correspondance, et l'interface, elle, ne parle plus jamais d'âge.
 */

export const NIVEAU_PAR_DEFAUT = NIVEAUX[1];

export function niveauDepuisTranche(tranche: AgeRange): NiveauDifficulte {
  return NIVEAUX.find((n) => n.tranche === tranche) ?? NIVEAU_PAR_DEFAUT;
}

/**
 * Le niveau d'un enfant déjà installé.
 *
 * Les familles qui utilisaient l'app avant ce changement ont un âge en
 * mémoire : il se traduit en niveau sans rien leur demander, et sans qu'elles
 * voient la moindre différence au lancement suivant.
 */
export function niveauDepuisAge(age: number): NiveauDifficulte {
  return niveauDepuisTranche(trancheDepuisAge(age));
}

/**
 * L'âge à écrire pour un niveau donné.
 *
 * On continue d'écrire un âge parce que c'est ce que le stockage attend depuis
 * toujours ; la valeur n'est plus qu'un encodage, et l'app ne l'affiche nulle
 * part.
 */
export function ageDuNiveau(niveau: NiveauDifficulte): number {
  return ageDepuisTranche(niveau.tranche);
}

export function niveauParId(id: string): NiveauDifficulte | undefined {
  return NIVEAUX.find((n) => n.id === id);
}
