import type { AgeRange, DomainId, Locale, ScienceCard } from '@/lib/types';
import { melanger } from '@/lib/melanger';
import { localise } from '@/lib/i18n/localise';
import { savants } from '@/content/savants';

/**
 * Le plateau du Mémo.
 *
 * Deux variantes, et c'est l'âge qui décide laquelle est ouverte :
 *
 * - `savants` apparie deux fois le même portrait du Wall of Fame. Aucune
 *   lecture n'est nécessaire, donc le jeu est ouvert dès trois ans — et quand
 *   une paire tombe, le nom s'affiche et se prononce. On croise ainsi vingt
 *   visages sans avoir à les chercher.
 * - `cartes` apparie l'emoji d'une carte avec son titre. C'est un exercice de
 *   lecture autant que de mémoire, réservé aux lecteurs.
 *
 * Le Mémo des savants se joue dès la première ouverture : un portrait s'apparie
 * à un portrait, rien à savoir d'avance. Celui des cartes, lui, ne pioche que
 * dans les cartes déjà écoutées — c'est ce qui rend le lien entre un dessin et
 * un titre déductible plutôt qu'arbitraire.
 */
export type VarianteMemo = 'savants' | 'cartes';

/**
 * La variante « cartes » plafonne plus bas que l'âge ne le voudrait : ses
 * tuiles portent du texte, donc s'affichent larges et sur deux colonnes. Douze
 * tuiles tiennent à l'écran, seize non.
 */
export const PAIRES_CARTES_MAX = 6;

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
  /** Ce qui s'affiche une fois retournée : emoji, titre, ou chemin d'image. */
  face: string;
  /** Décide du rendu : gros emoji, petit texte, ou portrait. */
  genre: 'emoji' | 'titre' | 'portrait';
  /** Annoncé et prononcé quand la paire tombe. Réservé aux savants. */
  nom?: string;
  /** Pour la couleur de la tuile retournée. Un savant n'a pas de domaine. */
  domainId?: DomainId;
}

/**
 * Construit un plateau mélangé.
 *
 * Moins de cartes que de paires demandées rend simplement un plateau plus
 * petit, plutôt que d'échouer : un enfant qui n'a écouté que trois cartes doit
 * pouvoir jouer quand même.
 */
export function construirePlateau(
  cards: ScienceCard[],
  age: AgeRange,
  variante: VarianteMemo,
  locale: Locale,
): TuileMemo[] {
  if (variante === 'savants') {
    const tuiles = melanger(savants)
      .slice(0, PAIRES_PAR_AGE[age])
      .flatMap((savant): TuileMemo[] =>
        ['a', 'b'].map((suffixe) => ({
          id: `${savant.id}-${suffixe}`,
          paire: savant.id,
          face: `/images/wall-of-fame/${savant.id}.webp`,
          genre: 'portrait' as const,
          nom: savant.nom,
        })),
      );
    return melanger(tuiles);
  }

  /*
    Variante « cartes ». Le titre affiché est celui du registre 3-5, quel que
    soit l'âge du joueur : c'est le plus court et le plus imagé, et une tuile
    n'a pas la place d'une phrase d'article.

    `cards` arrive déjà restreint aux cartes que l'enfant a écoutées : le lien
    entre un emoji et un titre n'est déductible que s'il connaît la carte.
    Sans cela, ce n'est plus un jeu de mémoire mais un appariement au hasard
    qu'on finit par épuisement.
  */
  const choisies = melanger(cards).slice(0, Math.min(PAIRES_PAR_AGE[age], PAIRES_CARTES_MAX));

  const tuiles = choisies.flatMap((carte): TuileMemo[] => {
    const commun = { paire: carte.id, domainId: carte.domainId };
    return [
      { ...commun, id: `${carte.id}-a`, face: carte.thumbnail, genre: 'emoji' as const },
      {
        ...commun,
        id: `${carte.id}-b`,
        face: localise(carte.content, locale).title['3-5'],
        genre: 'titre' as const,
      },
    ];
  });

  return melanger(tuiles);
}

/** Deux tuiles s'apparient si elles viennent de la même carte, sans être la même. */
export function sApparient(a: TuileMemo, b: TuileMemo): boolean {
  return a.id !== b.id && a.paire === b.paire;
}
