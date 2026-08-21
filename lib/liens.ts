import type { AgeRange, DomainId, Locale, ScienceCard } from './types';
import { melanger } from './melanger';
import { localise } from './i18n/localise';
import { savantsPrisonniers, type SavantPrisonnier } from '@/content/savants-cartes';
import { nomDecouverte } from './inventions';

/**
 * Le jeu des liens : relier chaque savant à sa découverte.
 *
 * Une manche, c'est trois à cinq portraits à gauche, autant de découvertes à
 * droite, mélangées — et un trait à tirer de l'un à l'autre. La manche est
 * gagnée quand tous les liens sont faits, jamais avant : c'est un jeu qu'on
 * termine, pas un score qu'on encaisse.
 *
 * Le tirage se fait d'abord chez les savants **déjà délivrés** : l'enfant a lu
 * leur fiche, il connaît leurs cartes, et le lien est donc une chose qu'il sait
 * plutôt qu'une chose qu'il devine. Faute de délivrés en nombre, on complète
 * avec des savants dont il a au moins écouté une carte — il aura vu leur nom au
 * moment de l'invitation. En dernier recours seulement, on pioche au hasard :
 * un jeu qui refuse de se lancer est pire qu'un jeu un peu difficile.
 *
 * L'étiquette de droite dit **le nom de la découverte** quand il en existe un —
 * « le flocon à six branches », « la dérive des continents » —, et retombe sur
 * le titre de la carte au registre 3-5 sinon. La différence n'est pas
 * cosmétique : « La neige » ne se relie à personne, alors qu'un flocon
 * hexagonal se relie à Kepler. Les deux tiers du catalogue n'ont pas de nom de
 * découverte, et c'est assumé : ce sont des phénomènes du quotidien, sans
 * découvreur ni date.
 */
export const LIENS_PAR_AGE: Record<AgeRange, number> = {
  '3-5': 3,
  '6-8': 4,
  '9-12': 5,
};

export interface Lien {
  /** Identifiant du savant : c'est lui qui fait la paire. */
  savantId: string;
  nom: string;
  portrait: string;
  /** L'étiquette de droite. */
  decouverte: string;
  /** La carte d'où vient la découverte, pour pouvoir l'écouter ensuite. */
  carteId: string;
  /** L'emoji du hublot, celui-là même qu'affiche Découvrir. */
  emoji: string;
  /** Le monde, pour la couleur du hublot. */
  domainId: DomainId;
}

export interface Manche {
  /** Les portraits, à gauche, dans l'ordre du tirage. */
  savants: Lien[];
  /** Les mêmes liens, remélangés : c'est la colonne de droite. */
  decouvertes: Lien[];
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

/**
 * Construit une manche.
 *
 * La découverte retenue pour un savant est, si possible, une carte que l'enfant
 * a écoutée : c'est celle qu'il peut relier de mémoire. Newton en tient quatre,
 * et lui proposer « le poids et la masse » quand il n'a entendu que « pourquoi
 * tout tombe » rendrait le lien indevinable.
 */
export function construireManche(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  liberes: string[],
  age: AgeRange,
  locale: Locale,
): Manche {
  const choisis = candidats(cartesVues, liberes).slice(0, LIENS_PAR_AGE[age]);

  const liens = choisis.flatMap((savant): Lien[] => {
    /*
      Quelle carte représente ce savant ? D'abord une qu'on a écoutée — c'est
      celle qu'on peut relier de mémoire — et parmi celles-là, de préférence une
      qui porte un nom de découverte, qui fait une bien meilleure étiquette.
      Newton en tient quatre : lui proposer « le poids et la masse » quand on n'a
      entendu que « pourquoi tout tombe » rendrait le lien indevinable.
    */
    const nommee = (c: { id: string }) => nomDecouverte(c.id, locale) !== null;
    const vue = (c: { id: string }) => cartesVues.has(c.id);
    const connue =
      savant.cartes.find((c) => vue(c) && nommee(c)) ??
      savant.cartes.find(vue) ??
      savant.cartes.find(nommee) ??
      savant.cartes[0];
    const carte = cards.find((c) => c.id === connue.id);
    if (!carte) return [];
    return [
      {
        savantId: savant.id,
        nom: savant.nom,
        portrait: `/images/wall-of-fame/${savant.id}.webp`,
        decouverte: nomDecouverte(carte.id, locale) ?? localise(carte.content, locale).title['3-5'],
        carteId: carte.id,
        emoji: carte.thumbnail,
        domainId: carte.domainId,
      },
    ];
  });

  return { savants: liens, decouvertes: melanger(liens) };
}

/**
 * Le mélange de droite est-il utile ?
 *
 * Deux colonnes dans le même ordre donneraient un jeu qui se gagne en reliant
 * les voisins, sans rien lire. On remélange donc tant que l'ordre coïncide —
 * sauf s'il n'y a qu'un lien, où c'est inévitable.
 */
export function estBrouille(manche: Manche): boolean {
  if (manche.savants.length < 2) return true;
  return manche.savants.some((s, i) => manche.decouvertes[i]?.savantId !== s.savantId);
}
