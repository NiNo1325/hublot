import type { AgeRange, DomainId, Locale, ScienceCard } from '@/lib/types';
import { melanger } from '@/lib/melanger';
import { localise } from '@/lib/i18n/localise';

/**
 * Le plateau du Mémo.
 *
 * Deux variantes, et c'est l'âge qui décide laquelle est ouverte :
 *
 * - `images` apparie deux fois le même emoji. Aucune lecture n'est nécessaire,
 *   donc le jeu est ouvert dès trois ans.
 * - `cartes` apparie l'emoji d'une carte avec son titre. C'est un exercice de
 *   lecture autant que de mémoire, réservé aux lecteurs.
 *
 * Contrairement au quizz, le Mémo n'exige pas que la carte ait été écoutée. Il
 * ne montre rien que la grille Découvrir n'affiche déjà — l'emoji et le titre
 * de chaque carte y sont visibles dès la première ouverture. Le jeu est donc
 * jouable tout de suite, ce qui compte pour un mode de détente.
 */
export type VarianteMemo = 'images' | 'cartes';

/** Le plateau grandit avec l'enfant. Toujours un nombre pair de colonnes. */
export const PAIRES_PAR_AGE: Record<AgeRange, number> = {
  '3-5': 4,
  '6-8': 6,
  '9-12': 8,
};

export interface TuileMemo {
  /** Unique sur le plateau : deux tuiles d'une paire partagent `paire`. */
  id: string;
  /** Ce qui rend deux tuiles appariables : l'identifiant de la carte. */
  paire: string;
  /** Ce qui s'affiche une fois retournée. */
  face: string;
  /** Un emoji se rend en grand, un titre en petit texte. */
  genre: 'emoji' | 'titre';
  /** Pour la couleur de la tuile retournée. */
  domainId: DomainId;
}

/**
 * Construit un plateau mélangé.
 *
 * `cards` est tout le catalogue : on y pioche autant de cartes que de paires
 * demandées. Passer moins de cartes que nécessaire rend simplement un plateau
 * plus petit, plutôt que d'échouer — un catalogue réduit reste jouable.
 */
export function construirePlateau(
  cards: ScienceCard[],
  age: AgeRange,
  variante: VarianteMemo,
  locale: Locale,
): TuileMemo[] {
  const choisies = melanger(cards).slice(0, PAIRES_PAR_AGE[age]);

  const tuiles = choisies.flatMap((carte): TuileMemo[] => {
    const emoji: TuileMemo = {
      id: `${carte.id}-a`,
      paire: carte.id,
      face: carte.thumbnail,
      genre: 'emoji',
      domainId: carte.domainId,
    };
    const jumelle: TuileMemo =
      variante === 'images'
        ? { ...emoji, id: `${carte.id}-b` }
        : {
            id: `${carte.id}-b`,
            paire: carte.id,
            face: localise(carte.content, locale).title[age],
            genre: 'titre',
            domainId: carte.domainId,
          };
    return [emoji, jumelle];
  });

  return melanger(tuiles);
}

/** Deux tuiles s'apparient si elles viennent de la même carte, sans être la même. */
export function sApparient(a: TuileMemo, b: TuileMemo): boolean {
  return a.id !== b.id && a.paire === b.paire;
}
