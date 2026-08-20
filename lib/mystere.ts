import type { AgeRange, DomainId, Locale, ScienceCard } from './types';
import { melanger } from './melanger';
import { localise } from './i18n/localise';
import { EPOQUES, type IdEpoque } from './cles';
import { domains } from '@/content/domains';
import { savantsPrisonniers, type SavantPrisonnier } from '@/content/savants-cartes';

/**
 * Le savant mystère : trois indices, quelques portraits, une seule réponse.
 *
 * Les indices tombent l'un après l'autre, du plus large au plus précis —
 * l'époque, puis le monde, puis la découverte. Deviner tôt vaut mieux que
 * deviner tard : c'est le seul endroit de l'application qui récompense la
 * vitesse de compréhension, là où le Défi chrono récompense la vitesse de
 * doigt.
 *
 * Aucun indice n'est écrit à la main : ils se déduisent de ce que le musée sait
 * déjà — la naissance donne l'époque, la carte donne le monde et le titre. Un
 * savant ajouté demain apporte donc ses indices avec lui, dans les deux
 * langues, sans une ligne de contenu de plus.
 *
 * **Les leurres sont choisis pour qu'aucun indice ne suffise seul** : l'un
 * partage l'époque du mystère, l'autre son monde. Tirés au hasard, les leurres
 * auraient presque tous une autre époque, et le premier indice aurait fini la
 * partie à lui seul.
 *
 * Fonctions pures, sans accès au navigateur, pour rester testables.
 */

/** Nombre de portraits proposés, leurres compris. */
export const PORTRAITS_PAR_AGE: Record<AgeRange, number> = {
  '3-5': 3,
  '6-8': 4,
  '9-12': 4,
};

export interface Indice {
  /** Ce que l'indice révèle : la vue choisit sa mise en scène. */
  genre: 'epoque' | 'monde' | 'decouverte';
  /** L'emoji de l'époque, du monde ou de la carte. */
  emoji: string;
  /** Le texte déjà localisé — nom de monde, ou titre de carte. */
  texte: string;
  /** Le monde, quand l'indice en désigne un : il donne la couleur. */
  domainId?: DomainId;
  /** L'époque, quand l'indice en désigne une : son nom vit dans le dictionnaire. */
  epoque?: IdEpoque;
  /** La carte, quand l'indice est une découverte : elle est alors écoutable. */
  carteId?: string;
}

export interface Enigme {
  savantId: string;
  nom: string;
  /** Les portraits proposés, mélangés : le mystère est dedans. */
  portraits: { id: string; nom: string; portrait: string }[];
  /** Les indices, du plus large au plus précis. */
  indices: Indice[];
}

/** L'emoji de chaque époque : la seule chose que le musée ne dit pas déjà. */
const EMOJI_EPOQUE: Record<IdEpoque, string> = {
  antiquite: '🏛️',
  'moyen-age': '🏰',
  renaissance: '🎨',
  lumieres: '🕯️',
  'dix-neuvieme': '🚂',
  vingtieme: '💡',
  aujourdhui: '🛰️',
};

/** L'époque d'un savant, d'après sa naissance. */
export function epoqueDe(savant: SavantPrisonnier): IdEpoque {
  const trouvee = EPOQUES.find((e) => savant.naissance >= e.debut && savant.naissance < e.fin);
  return trouvee?.id ?? 'aujourdhui';
}

/**
 * Les savants que l'enfant a des chances de reconnaître.
 *
 * Un seul mélange sur l'ensemble, et non « délivrés d'abord, puis entendus ».
 * L'ordre par priorité a du sens dans la frise, qui prend plusieurs savants
 * d'affilée ; ici on n'en prend qu'un, et le classement devenait alors une
 * assignation : avec un seul savant délivré, le mélange d'une liste d'un
 * élément rendait toujours le même, et la partie proposait Euclide à
 * l'infini. Les savants seulement entendus n'étaient jamais tirés non plus.
 *
 * Délivré ou entendu, l'enfant l'a croisé : c'est tout ce que ce jeu demande.
 */
function candidats(cartesVues: Set<string>, liberes: string[]): SavantPrisonnier[] {
  const connus = savantsPrisonniers.filter(
    (s) => liberes.includes(s.id) || s.cartes.some((c) => cartesVues.has(c.id)),
  );
  return melanger(connus);
}

/** Y a-t-il un savant que l'enfant puisse reconnaître ? */
export function peutJouer(cartesVues: Set<string>, liberes: string[]): boolean {
  return savantsPrisonniers.some(
    (s) => liberes.includes(s.id) || s.cartes.some((c) => cartesVues.has(c.id)),
  );
}

/**
 * Tire une énigme, ou `null` s'il n'y a personne à faire deviner.
 *
 * Le mystère se prend chez les savants que l'enfant connaît — sinon la partie
 * se joue au hasard et n'apprend rien. Faute de savant connu, on ne lance pas :
 * l'écran invite à aller écouter des cartes, comme le quizz vide. Les leurres,
 * eux, se piochent dans tout le musée — les écarter ne demande pas de les
 * connaître.
 */
export function construireEnigme(
  cards: ScienceCard[],
  cartesVues: Set<string>,
  liberes: string[],
  age: AgeRange,
  locale: Locale,
): Enigme | null {
  const mystere = candidats(cartesVues, liberes)[0];
  if (!mystere) return null;

  const tenue = mystere.cartes.find((c) => cartesVues.has(c.id)) ?? mystere.cartes[0];
  const carte = cards.find((c) => c.id === tenue.id);
  if (!carte) return null;

  const epoque = epoqueDe(mystere);
  const autres = savantsPrisonniers.filter((s) => s.id !== mystere.id);
  const mondeDe = (s: SavantPrisonnier) =>
    s.cartes.map((c) => cards.find((k) => k.id === c.id)?.domainId);

  const leurres: SavantPrisonnier[] = [];
  const ajouter = (liste: SavantPrisonnier[]) => {
    const trouve = liste.find((s) => !leurres.includes(s));
    if (trouve) leurres.push(trouve);
  };
  ajouter(melanger(autres.filter((s) => epoqueDe(s) === epoque)));
  ajouter(melanger(autres.filter((s) => mondeDe(s).includes(carte.domainId))));
  for (const s of melanger(autres)) {
    if (leurres.length >= PORTRAITS_PAR_AGE[age] - 1) break;
    if (!leurres.includes(s)) leurres.push(s);
  }

  const contenu = localise(carte.content, locale);
  const monde = domains.find((d) => d.id === carte.domainId);

  return {
    savantId: mystere.id,
    nom: mystere.nom,
    portraits: melanger([mystere, ...leurres.slice(0, PORTRAITS_PAR_AGE[age] - 1)]).map((s) => ({
      id: s.id,
      nom: s.nom,
      portrait: `/images/wall-of-fame/${s.id}.webp`,
    })),
    indices: [
      { genre: 'epoque', emoji: EMOJI_EPOQUE[epoque], texte: '', epoque },
      {
        genre: 'monde',
        emoji: monde?.icon ?? '❓',
        texte: monde ? localise(monde.labels, locale) : '',
        domainId: carte.domainId,
      },
      {
        genre: 'decouverte',
        emoji: carte.thumbnail,
        texte: contenu.title['3-5'],
        domainId: carte.domainId,
        carteId: carte.id,
      },
    ],
  };
}

/**
 * Ce que vaut une réponse juste : trois étoiles filantes si l'on a trouvé sur
 * le premier indice, deux sur le deuxième, une sur le troisième. Sans cette
 * dégressivité, autant attendre les trois indices à chaque fois, et le jeu n'a
 * plus aucune tension.
 */
export function pointsPourIndices(indicesReveles: number): number {
  return Math.max(1, 4 - indicesReveles);
}
