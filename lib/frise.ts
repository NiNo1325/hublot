import type { AgeRange } from './types';
import { melanger } from './melanger';
import { savantsPrisonniers, type SavantPrisonnier } from '@/content/savants-cartes';

/**
 * La frise des savants : les ranger du plus ancien au plus récent.
 *
 * C'est le seul exercice de l'application qui fasse manipuler les siècles. Le
 * musée range déjà les savants par époque, mais il le fait à la place de
 * l'enfant : ici, c'est lui qui décide qui est venu avant. Rien n'est écrit
 * qu'il ne puisse déduire — les vêtements, les instruments, la barbe.
 *
 * **La date ne se révèle qu'après le placement**, et c'est tout le sel : la
 * montrer d'emblée transformerait le jeu en lecture de chiffres, alors qu'on
 * veut qu'il raisonne d'abord et vérifie ensuite.
 *
 * Fonctions pures, sans accès au navigateur, pour rester testables.
 */
export const SAVANTS_PAR_AGE: Record<AgeRange, number> = {
  '3-5': 3,
  '6-8': 4,
  '9-12': 5,
};

/**
 * Écart minimal entre deux savants d'une même manche, en années.
 *
 * Sans lui, le tirage proposerait Darwin (1809) et Lincoln (1809) et
 * demanderait de les départager : la bonne réponse existerait, mais aucun
 * indice ne permettrait de la trouver. Deux vies séparées de trois quarts de
 * siècle, en revanche, ne se ressemblent pas — ni les habits, ni les outils.
 */
export const ECART_MINIMAL = 70;

/**
 * Un élément à placer sur une frise.
 *
 * Deux jeux s'en servent : la frise des savants, illustrée par des portraits,
 * et la frise des découvertes, illustrée par l'emoji de la carte. D'où les deux
 * illustrations possibles — l'une ou l'autre, jamais les deux.
 */
export interface ElementFrise {
  id: string;
  nom: string;
  /** Naissance du savant, ou année de la découverte. Négative avant notre ère. */
  annee: number;
  portrait?: string;
  emoji?: string;
}

/** @deprecated Nom historique, conservé le temps que les appels migrent. */
export type SavantDate = ElementFrise;

/** Les savants jouables, du plus « connu de l'enfant » au moins connu. */
function candidats(cartesVues: Set<string>, liberes: string[]): SavantPrisonnier[] {
  const delivres = savantsPrisonniers.filter((s) => liberes.includes(s.id));
  const entendus = savantsPrisonniers.filter(
    (s) => !liberes.includes(s.id) && s.cartes.some((c) => cartesVues.has(c.id)),
  );
  const inconnus = savantsPrisonniers.filter(
    (s) => !liberes.includes(s.id) && !s.cartes.some((c) => cartesVues.has(c.id)),
  );
  return [...melanger(delivres), ...melanger(entendus), ...melanger(inconnus)];
}

function versDate(savant: SavantPrisonnier): ElementFrise {
  return {
    id: savant.id,
    nom: savant.nom,
    portrait: `/images/wall-of-fame/${savant.id}.webp`,
    annee: savant.naissance,
  };
}

/**
 * Retient `combien` éléments en évitant les dates trop voisines.
 *
 * Partagé par les deux frises. Si les écarts francs ne suffisent pas, on
 * complète en serrant les dates plutôt que de refuser de jouer : un jeu qui ne
 * se lance pas est pire qu'un jeu un peu difficile.
 */
export function retenirEspaces<T>(
  disponibles: T[],
  combien: number,
  annee: (element: T) => number,
): T[] {
  const retenus: T[] = [];
  for (const candidat of disponibles) {
    if (retenus.length === combien) break;
    const tropProche = retenus.some(
      (r) => Math.abs(annee(r) - annee(candidat)) < ECART_MINIMAL,
    );
    if (!tropProche) retenus.push(candidat);
  }
  for (const candidat of disponibles) {
    if (retenus.length === combien) break;
    if (!retenus.includes(candidat)) retenus.push(candidat);
  }
  return retenus;
}

/**
 * Tire une manche : des portraits mélangés, et l'ordre attendu.
 *
 * On sert d'abord les savants que l'enfant connaît — délivrés, puis entendus —
 * comme au jeu des liens : reconnaître le visage aide à situer l'époque.
 */
export function construireFrise(
  cartesVues: Set<string>,
  liberes: string[],
  age: AgeRange,
): { tirage: ElementFrise[]; ordre: string[] } {
  const retenus = retenirEspaces(
    candidats(cartesVues, liberes),
    SAVANTS_PAR_AGE[age],
    (s) => s.naissance,
  );

  const ordre = [...retenus].sort((a, b) => a.naissance - b.naissance).map((s) => s.id);

  return { tirage: melanger(retenus).map(versDate), ordre };
}

/** Le savant attendu à ce rang de la frise. */
export function attenduAuRang(ordre: string[], rang: number): string | null {
  return ordre[rang] ?? null;
}
