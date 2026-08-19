import type { AgeRange } from '@/lib/types';
import { melanger } from '@/lib/melanger';
import { savantsPrisonniers } from '@/content/savants-cartes';

/**
 * Le plateau du Mémo : deux fois le même portrait, à retrouver.
 *
 * Aucune lecture n'est nécessaire, donc le jeu est ouvert dès trois ans — et
 * quand une paire tombe, le nom s'affiche et se prononce. On croise ainsi des
 * visages de savants sans avoir à les chercher, et c'est en cela que le Mémo
 * sert le fil rouge : ces visages, on les retrouvera derrière des barreaux.
 *
 * Il pioche dans les cent treize prisonniers, et non plus dans la vingtaine de
 * fiches rédigées : depuis que tous ont leur portrait, s'en tenir à vingt
 * revenait à revoir les mêmes têtes à chaque partie.
 *
 * La variante « cartes » — appariez un emoji à un titre — a été retirée : elle
 * demandait de lire, ce que le Mémo n'a pas à demander, et le musée raconte
 * désormais mieux le lien entre une carte et son savant.
 */
/** Le plateau grandit avec l'enfant. */
export const PAIRES_PAR_AGE: Record<AgeRange, number> = {
  '3-5': 4,
  '6-8': 6,
  '9-12': 8,
};

export interface TuileMemo {
  /** Unique sur le plateau : deux tuiles d'une paire partagent `paire`. */
  id: string;
  /** Ce qui rend deux tuiles appariables. */
  paire: string;
  /** Chemin du portrait, affiché une fois la tuile retournée. */
  face: string;
  /** Annoncé et prononcé quand la paire tombe. */
  nom: string;
}

/**
 * Construit un plateau mélangé.
 *
 * Le tirage est fait sur les portraits, sans condition : un enfant qui n'a
 * encore rien écouté doit pouvoir jouer. C'est même l'ordre naturel — on
 * rencontre les visages ici, on les délivre au musée ensuite.
 */
export function construirePlateau(age: AgeRange): TuileMemo[] {
  const tuiles = melanger(savantsPrisonniers)
    .slice(0, PAIRES_PAR_AGE[age])
    .flatMap((savant): TuileMemo[] =>
      ['a', 'b'].map((suffixe) => ({
        id: `${savant.id}-${suffixe}`,
        paire: savant.id,
        face: `/images/wall-of-fame/${savant.id}.webp`,
        nom: savant.nom,
      })),
    );
  return melanger(tuiles);
}

/** Deux tuiles s'apparient si elles viennent de la même carte, sans être la même. */
export function sApparient(a: TuileMemo, b: TuileMemo): boolean {
  return a.id !== b.id && a.paire === b.paire;
}
