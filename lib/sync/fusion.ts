import { PODIUM } from '@/lib/scores';

/** La progression d'un enfant, telle qu'elle voyage et telle qu'elle est stockée. */
export interface ProgressionProfil {
  avatar: string;
  vues: string[];
  maitrisees: string[];
  liberes: string[];
  chrono: number[];
  tutoVu: boolean;
  /** Horodatage du dernier changement local, seul arbitre des valeurs qui ne croissent pas. */
  maj: number;
  /**
   * Horodatage de la dernière remise à zéro de ce profil.
   *
   * L'union sait ajouter, jamais retirer : sans cette époque, effacer sa
   * progression puis se synchroniser la faisait revenir intacte du serveur.
   * `0` pour un profil qui n'a jamais été réinitialisé.
   */
  raz: number;
}

/**
 * Tout ce qu'un compte sauvegarde.
 *
 * Ni le prénom ni l'âge des enfants n'y figurent, et c'est délibéré : ce sont
 * les deux seules informations qui les décriraient, et elles ne quittent pas
 * l'appareil. Le serveur ne voit que des identifiants opaques, des avatars et
 * des listes de cartes.
 */
export interface BlocProgression {
  v: 1;
  profils: Record<string, ProgressionProfil>;
  /**
   * Les profils supprimés, et l'horodatage de leur suppression.
   *
   * Deuxième opération décroissante de l'édifice, après `raz` — et pour la même
   * raison : l'union sait ajouter, jamais retirer. Sans ces pierres tombales,
   * supprimer un enfant puis se synchroniser le faisait revenir intact.
   *
   * `raz` vide un profil, ceci le fait disparaître. Les deux coexistent parce
   * qu'ils ne disent pas la même chose : on remet à zéro un enfant qui continue
   * de jouer, on supprime celui qui n'utilise plus l'application.
   */
  supprimes: Record<string, number>;
}

export function blocVide(): BlocProgression {
  return { v: 1, profils: {}, supprimes: {} };
}

/**
 * Réunit deux versions de la même progression.
 *
 * Commutative, associative et idempotente : deux appareils qui se
 * synchronisent dans n'importe quel ordre, autant de fois qu'ils veulent,
 * aboutissent au même état. C'est ce qui permet au client et au serveur de
 * fusionner chacun de leur côté sans se coordonner, et c'est ce qui dispense
 * l'app d'un écran « quelle version garder ? » qu'aucun enfant ne saurait
 * remplir.
 */
export function fusionner(a: BlocProgression, b: BlocProgression): BlocProgression {
  /*
    Les pierres tombales d'abord : elles décident qui a le droit d'exister.

    L'union des deux listes, en gardant l'horodatage le plus ancien pour une
    même suppression vue deux fois — la date exacte importe peu, sa stabilité
    beaucoup : c'est elle qui rend la fusion idempotente.
  */
  const supprimes = fusionnerSupprimes(a.supprimes, b.supprimes);

  const profils: Record<string, ProgressionProfil> = {};
  const ids = new Set([...Object.keys(a.profils), ...Object.keys(b.profils)]);

  for (const id of [...ids].sort()) {
    if (supprimes[id] !== undefined) continue;
    const gauche = a.profils[id];
    const droite = b.profils[id];
    if (gauche && droite) profils[id] = fusionnerProfil(gauche, droite);
    else profils[id] = normaliser(gauche ?? droite);
  }

  return { v: 1, profils, supprimes };
}

/**
 * L'union des suppressions, horodatage le plus ancien retenu.
 *
 * Prendre le minimum plutôt que le maximum n'a pas d'incidence pratique — le
 * profil disparaît dans les deux cas — mais rend le repli commutatif et
 * idempotent comme le reste, ce qui est la seule propriété dont dépend
 * l'absence d'écran « quelle version garder ? ».
 */
function fusionnerSupprimes(
  a: Record<string, number>,
  b: Record<string, number>,
): Record<string, number> {
  const sortie: Record<string, number> = {};
  for (const id of [...new Set([...Object.keys(a), ...Object.keys(b)])].sort()) {
    const gauche = a[id];
    const droite = b[id];
    sortie[id] = gauche === undefined ? droite : droite === undefined ? gauche : Math.min(gauche, droite);
  }
  return sortie;
}

function fusionnerProfil(a: ProgressionProfil, b: ProgressionProfil): ProgressionProfil {
  /*
    Époques différentes : la plus récente efface l'autre, en bloc.

    C'est la seule opération décroissante de tout l'édifice, et elle reste
    algébriquement sage : « retenir le maximum de `raz`, puis unir ce qui le
    partage » est un repli commutatif, associatif et idempotent, comme l'union
    seule l'était. Sans elle, une remise à zéro ne survivait pas à la première
    synchronisation.
  */
  if (a.raz !== b.raz) return normaliser(a.raz > b.raz ? a : b);

  const recent = plusRecent(a, b);
  return {
    vues: ensemble(a.vues, b.vues),
    maitrisees: ensemble(a.maitrisees, b.maitrisees),
    liberes: ensemble(a.liberes, b.liberes),
    chrono: podium(a.chrono, b.chrono),
    // Un tutoriel vu quelque part est vu : le remontrer passerait pour un bug.
    tutoVu: a.tutoVu || b.tutoVu,
    avatar: recent.avatar,
    maj: Math.max(a.maj, b.maj),
    raz: a.raz,
  };
}

/** Un profil connu d'un seul côté doit sortir sous la même forme que s'il avait été fusionné. */
function normaliser(p: ProgressionProfil): ProgressionProfil {
  return {
    ...p,
    vues: ensemble(p.vues),
    maitrisees: ensemble(p.maitrisees),
    liberes: ensemble(p.liberes),
    chrono: podium(p.chrono),
  };
}

/**
 * L'arbitre de la seule valeur qui ne croît pas : l'avatar.
 *
 * À horodatage égal — deux appareils réglés à la même seconde, ou un `maj`
 * absent — on départage sur l'avatar lui-même. Le résultat est arbitraire
 * mais **déterministe**, ce qui suffit : sans cela, fusionner A puis B ne
 * donnerait pas le même résultat que B puis A, et les deux appareils
 * divergeraient sans jamais se rattraper.
 */
function plusRecent(a: ProgressionProfil, b: ProgressionProfil): ProgressionProfil {
  if (a.maj !== b.maj) return a.maj > b.maj ? a : b;
  return signature(a) >= signature(b) ? a : b;
}

function signature(p: ProgressionProfil): string {
  return p.avatar;
}

function ensemble(...listes: readonly (readonly string[] | undefined)[]): string[] {
  return [...new Set(listes.flatMap((l) => l ?? []))].sort();
}

/**
 * Le podium commun aux deux appareils.
 *
 * Les scores identiques sont fondus en un seul. Deux parties à onze points
 * sont bien deux parties, mais garder le doublon rendrait la fusion non
 * idempotente : resynchroniser sans rien jouer allongerait le podium. Entre
 * un podium exact et un podium stable, on choisit stable.
 */
function podium(...listes: readonly (readonly number[] | undefined)[]): number[] {
  const scores = listes.flatMap((l) => l ?? []).filter((n) => Number.isFinite(n) && n > 0);
  return [...new Set(scores)].sort((x, y) => y - x).slice(0, PODIUM);
}
