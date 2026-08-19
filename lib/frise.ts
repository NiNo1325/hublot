import type { AgeRange } from './types';
import { melanger } from './melanger';
import { savantsPrisonniers, type SavantPrisonnier } from '@/content/savants-cartes';

/**
 * La frise du temps : ranger les savants du plus ancien au plus récent.
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

export interface SavantDate {
  id: string;
  nom: string;
  portrait: string;
  naissance: number;
}

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

function versDate(savant: SavantPrisonnier): SavantDate {
  return {
    id: savant.id,
    nom: savant.nom,
    portrait: `/images/wall-of-fame/${savant.id}.webp`,
    naissance: savant.naissance,
  };
}

/**
 * Tire une manche : des portraits mélangés, et l'ordre attendu.
 *
 * On sert d'abord les savants que l'enfant connaît — délivrés, puis entendus —
 * comme au jeu des liens : reconnaître le visage aide à situer l'époque. On
 * écarte ensuite tout candidat trop proche d'un savant déjà retenu ; s'il n'en
 * reste pas assez, on relâche la contrainte plutôt que de refuser de jouer, un
 * jeu qui ne se lance pas étant pire qu'un jeu un peu difficile.
 */
export function construireFrise(
  cartesVues: Set<string>,
  liberes: string[],
  age: AgeRange,
): { tirage: SavantDate[]; ordre: string[] } {
  const combien = SAVANTS_PAR_AGE[age];
  const disponibles = candidats(cartesVues, liberes);

  const retenus: SavantPrisonnier[] = [];
  for (const candidat of disponibles) {
    if (retenus.length === combien) break;
    const tropProche = retenus.some(
      (r) => Math.abs(r.naissance - candidat.naissance) < ECART_MINIMAL,
    );
    if (!tropProche) retenus.push(candidat);
  }
  // Trop peu d'écarts francs : on complète, quitte à serrer les dates.
  for (const candidat of disponibles) {
    if (retenus.length === combien) break;
    if (!retenus.includes(candidat)) retenus.push(candidat);
  }

  const ordre = [...retenus]
    .sort((a, b) => a.naissance - b.naissance)
    .map((s) => s.id);

  return { tirage: melanger(retenus).map(versDate), ordre };
}

/** Le savant attendu à ce rang de la frise. */
export function attenduAuRang(ordre: string[], rang: number): string | null {
  return ordre[rang] ?? null;
}
